import"./modulepreload-polyfill-9p4a8sJU.js";import{W as h,S as g,C as b,P as u,A as S,O as f,V as x,M,a as C,b as z}from"./OrbitControls-1E7xPIHr.js";const H=document.querySelector("#app"),n=new h({antialias:!0});n.setPixelRatio(window.devicePixelRatio);n.setSize(window.innerWidth,window.innerHeight);H.appendChild(n.domElement);document.body.appendChild(n.domElement);const d=new g;d.background=new b("white");const o=new u(35,window.innerWidth/window.innerHeight,1,1e3);o.position.set(0,0,100);new S("white",.2);const e=new f(o,n.domElement);e.enableDamping=!0;e.dampingFactor=.05;e.screenSpacePanning=!1;e.enableRotate=!0;e.rotateSpeed=.5;e.enableZoom=!0;e.zoomSpeed=.5;e.minDistance=100;e.maxDistance=1e4;e.target=new x(0,0,0);const P=()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",P);let t=[],s=0,l,m,w;const W=new M({color:"black"}),v=new C(.5,64,64);l=0;m=0;w=0;const c=()=>{requestAnimationFrame(c),t[s]=new z(v,W.clone()),t[s].position.set(l,m,w);let i=Math.random()*3,p=Math.random(),a=0;p<.5?a=1.5:a=-1.5,console.log(i),i<1&&(l+=a),i>2&&(m+=a),i<2&&i>1&&(w+=a);for(let r=0;r<t.length;r++)Math.random()<.1?t[r].material.emissive.setHex(10494192):t[r].material.emissive.setHex(0);d.add(t[s]),n.render(d,o),s++};c();
