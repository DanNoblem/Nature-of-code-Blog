import"./modulepreload-polyfill-9p4a8sJU.js";import{W as f,S as b,C as g,P as u,A as S,O as x,V as p,M as z,a as y,b as C}from"./OrbitControls-UgSZh0Bi.js";import{c as M}from"./simplex-noise-jK7XNhv8.js";const P=document.querySelector("#app"),i=new f({antialias:!0});i.setPixelRatio(window.devicePixelRatio);i.setSize(window.innerWidth,window.innerHeight);P.appendChild(i.domElement);document.body.appendChild(i.domElement);const d=new b;d.background=new g("black");const a=new u(35,window.innerWidth/window.innerHeight,1,1e3);a.position.set(0,0,100);new S("white",.2);const e=new x(a,i.domElement);e.enableDamping=!0;e.dampingFactor=.05;e.screenSpacePanning=!1;e.enableRotate=!0;e.rotateSpeed=.5;e.enableZoom=!0;e.zoomSpeed=.5;e.minDistance=100;e.maxDistance=1e4;e.target=new p(0,0,0);const W=M(),D=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",D);let s=[],n=0;const R=new z({color:"black"}),v=new y(.5,64,64);for(let r=0;r<20;r++)for(let t=0;t<20;t++)for(let o=0;o<20;o++)s[n]=new C(v,R.clone()),s[n].position.set(r*1.5-10,t*1.5-10,o*1.5-10),d.add(s[n]),n++;let E=new p(0,0,0),m=0;const h=()=>{requestAnimationFrame(h);let r=0,t=0,o=0;n=0;for(let l=0;l<20;l++){r+=.1+E.x,t=0;for(let c=0;c<20;c++){t+=.1,o=0;for(let w=0;w<20;w++)o+=.1,s[n].material.emissive.r=Math.abs(W(r,t,o,m)),n++}}m+=.01,i.render(d,a),n++};h();
