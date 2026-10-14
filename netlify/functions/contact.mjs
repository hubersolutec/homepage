import nodemailer from 'nodemailer';
const attempts=new Map();
const reply=(status,message)=>new Response(JSON.stringify({message}),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
export default async function(req,context){
 if(req.method!=='POST')return reply(405,'허용되지 않은 요청입니다.');
 if(!req.headers.get('content-type')?.includes('application/json'))return reply(415,'잘못된 요청입니다.');
 const origin=req.headers.get('origin');if(origin){try{if(new URL(origin).host!==new URL(req.url).host)return reply(403,'잘못된 요청입니다.')}catch{return reply(403,'잘못된 요청입니다.')}}
 if(!process.env.SMTP_HOST||!process.env.SMTP_USER||!process.env.SMTP_PASS)return reply(503,'현재 문의 전송을 준비 중입니다. 이메일 또는 전화로 문의해 주세요.');
 try{const text=await req.text();if(Buffer.byteLength(text)>24000)return reply(413,'문의 내용이 너무 깁니다.');let f;try{f=JSON.parse(text)}catch{return reply(400,'입력 내용을 확인해 주세요.')}
 const fields=['type','company','name','email','phone','message'];if(!f||fields.some(k=>typeof f[k]!=='string'||!f[k].trim()||f[k].length>(k==='message'?10000:200))||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)||/[\r\n]/.test(f.email+f.company+f.type)||f.website)return reply(400,'입력 내용을 확인해 주세요.');
 const now=Date.now(),key=context?.ip||f.email.toLowerCase();for(const[k,t]of attempts)if(now-t>60000)attempts.delete(k);if(attempts.has(key))return reply(429,'잠시 후 다시 전송해 주세요.');attempts.set(key,now);
 const port=Number(process.env.SMTP_PORT||465);const mail=nodemailer.createTransport({host:process.env.SMTP_HOST,port,secure:port===465,requireTLS:port!==465,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS},connectionTimeout:10000,greetingTimeout:10000,socketTimeout:15000,disableFileAccess:true,disableUrlAccess:true});
 try{const info=await mail.sendMail({from:process.env.SMTP_FROM||process.env.SMTP_USER,to:'woghd44@hubesolutec.co.kr',replyTo:f.email,subject:`[홈페이지 문의] ${f.company} · ${f.type}`,text:`문의유형: ${f.type}\n회사명: ${f.company}\n담당자: ${f.name}\n이메일: ${f.email}\n연락처: ${f.phone}\n\n문의내용\n${f.message}`});if(!info.accepted?.length)throw Error();return reply(200,'문의가 전송되었습니다. 담당자가 확인 후 연락드리겠습니다.')}finally{mail.close()}
 }catch(error){console.error('SMTP_SEND_FAILED',error?.code||error?.name||'UNKNOWN',error?.responseCode||'');return reply(502,'전송하지 못했습니다. 잠시 후 다시 시도하거나 이메일로 문의해 주세요.')}
}

