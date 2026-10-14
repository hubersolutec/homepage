import http from 'node:http';
import {existsSync,createReadStream,statSync} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
import nodemailer from 'nodemailer';
if(existsSync('.env.mail.local'))process.loadEnvFile('.env.mail.local');
const attempts=new Map();
const root=resolve('out');
const mime={'.html':'text/html; charset=utf-8','.js':'application/javascript','.css':'text/css','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.svg':'image/svg+xml','.woff2':'font/woff2','.mp4':'video/mp4'};
function serve(req,res){
 if(!['GET','HEAD'].includes(req.method))return reply(res,405,'Method not allowed');
 let path;try{path=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{return reply(res,400,'Bad request')}
 if(path.startsWith('/api/'))return reply(res,404,'Not found');
 let file=resolve(root,'.'+path);if(!file.startsWith(root+sep)&&file!==root)return reply(res,403,'Forbidden');
 if(!existsSync(file)||!statSync(file).isFile()){if(extname(path))return reply(res,404,'Not found');file=resolve(root,'index.html');}
 if(!existsSync(file))return reply(res,503,'Build required');
 res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Content-Length':statSync(file).size,'X-Content-Type-Options':'nosniff','Cache-Control':extname(file)==='.html'?'no-cache':'public, max-age=3600'});
 if(req.method==='HEAD')return res.end();createReadStream(file).on('error',()=>res.destroy()).pipe(res);
}

const reply=(res,status,message)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify({message}));};
http.createServer(async(req,res)=>{
 if(req.url!=='/api/contact')return serve(req,res);
 if(req.method!=='POST')return reply(res,405,'Method not allowed');
 if(!req.headers['content-type']?.includes('application/json'))return reply(res,415,'잘못된 요청입니다.');
 const origin=req.headers.origin;if(origin){try{if(new URL(origin).host!==req.headers.host)return reply(res,403,'잘못된 요청입니다.');}catch{return reply(res,403,'잘못된 요청입니다.');}}
 if(!process.env.SMTP_HOST||!process.env.SMTP_USER||!process.env.SMTP_PASS)return reply(res,503,'현재 문의 전송을 준비 중입니다. 이메일 또는 전화로 문의해 주세요.');
 let data='';try{for await(const chunk of req){data+=chunk;if(Buffer.byteLength(data)>24000)return reply(res,413,'문의 내용이 너무 깁니다.');}
 const f=JSON.parse(data);const fields=['type','company','name','email','phone','message'];if(fields.some(k=>typeof f[k]!=='string'||!f[k].trim()||f[k].length>(k==='message'?10000:200))||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)||/[\r\n]/.test(f.email+f.company+f.type))return reply(res,400,'입력 내용을 확인해 주세요.');
 if(f.website)return reply(res,400,'잘못된 요청입니다.');
 const now=Date.now(),key=f.email.toLowerCase();for(const[k,t]of attempts)if(now-t>60000)attempts.delete(k);if(attempts.has(key))return reply(res,429,'잠시 후 다시 전송해 주세요.');attempts.set(key,now);
 const port=Number(process.env.SMTP_PORT||587);const mail=nodemailer.createTransport({host:process.env.SMTP_HOST,port,secure:port===465,requireTLS:port!==465,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS},connectionTimeout:15000,socketTimeout:20000,disableFileAccess:true,disableUrlAccess:true});
 const info=await mail.sendMail({from:process.env.SMTP_FROM||process.env.SMTP_USER,to:'woghd44@hubesolutec.co.kr',replyTo:f.email,subject:`[홈페이지 문의] ${f.company} · ${f.type}`,text:`문의유형: ${f.type}\n회사명: ${f.company}\n담당자: ${f.name}\n이메일: ${f.email}\n연락처: ${f.phone}\n\n문의내용\n${f.message}`});
 if(!info.accepted?.length)throw Error('not accepted');return reply(res,200,'문의가 전송되었습니다. 담당자가 확인 후 연락드리겠습니다.');
 }catch{ return reply(res,502,'전송하지 못했습니다. 잠시 후 다시 시도하거나 이메일로 문의해 주세요.');}
}).listen(Number(process.env.PORT||4174),process.env.HOST||'127.0.0.1',()=>console.log('Website and contact server started'));
