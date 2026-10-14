import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
type Dimensions={outer:number;inner:number;length:number;flange:number;thickness:number};
export default function FaberemMetalModel({p,angle=0,mesh=false}:{p:Dimensions;angle?:number;mesh?:boolean}){
 const host=useRef<HTMLDivElement>(null);
 const state=useRef<{renderer:THREE.WebGLRenderer;scene:THREE.Scene;camera:THREE.PerspectiveCamera;object:THREE.Mesh;metal:THREE.MeshStandardMaterial;wire:THREE.MeshBasicMaterial;render:()=>void}|null>(null);
 useEffect(()=>{
  const el=host.current;if(!el)return;
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.3;el.appendChild(renderer.domElement);
  const scene=new THREE.Scene();const room=new RoomEnvironment();const pmrem=new THREE.PMREMGenerator(renderer);const env=pmrem.fromScene(room,.015);scene.environment=env.texture;room.dispose();pmrem.dispose();
  const camera=new THREE.PerspectiveCamera(34,1,.1,1000);camera.position.set(-145,95,185);camera.lookAt(0,0,0);
  const metal=new THREE.MeshStandardMaterial({color:0xc8cbd0,metalness:1,roughness:.18,envMapIntensity:1.65});
  const wire=new THREE.MeshBasicMaterial({color:0x2973b8,wireframe:true});const object=new THREE.Mesh(new THREE.BufferGeometry(),metal);scene.add(object);
  const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(-50,120,80);scene.add(light);
  const render=()=>renderer.render(scene,camera);state.current={renderer,scene,camera,object,metal,wire,render};
  const observer=new ResizeObserver(()=>{const width=el.clientWidth,height=el.clientHeight;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();render();});observer.observe(el);
  return()=>{observer.disconnect();object.geometry.dispose();metal.dispose();wire.dispose();env.dispose();renderer.dispose();el.replaceChildren();state.current=null;};
 },[]);
 useEffect(()=>{const s=state.current;if(!s)return;const L=p.length/2,R=p.outer/2,F=p.flange/2,I=p.inner/2,T=p.thickness,e=.7;
  const points=[[I,-L],[R-e,-L],[R,-L+e],[R,L-T-e],[R+e,L-T],[F-e,L-T],[F,L-T+e],[F,L-e],[F-e,L],[I+e,L],[I,L-e],[I,-L]].map(([r,z])=>new THREE.Vector2(r,z));
  const geometry=new THREE.LatheGeometry(points,128);geometry.rotateZ(-Math.PI/2);s.object.geometry.dispose();s.object.geometry=geometry;s.render();
 },[p.outer,p.inner,p.length,p.flange,p.thickness]);
 useEffect(()=>{const s=state.current;if(!s)return;s.object.rotation.y=angle;s.object.material=mesh?s.wire:s.metal;s.render();},[angle,mesh]);
 return <div ref={host} className="faberem-metal-model" role="img" aria-label={mesh?'부품의 3D 메시':'반사광과 금속 광택을 표현한 중공 플랜지 부품의 3D 모델'}/>;
}
