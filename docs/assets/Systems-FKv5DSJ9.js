var fe=Object.defineProperty;var me=(c,o,e)=>o in c?fe(c,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[o]=e;var x=(c,o,e)=>(me(c,typeof o!="symbol"?o+"":o,e),e);import"./modulepreload-polyfill-9p4a8sJU.js";import{e as se,R as ae,f as k,V as h,g as U,E as ge,h as ve,B as ye,i as M,b as X,j as xe,k as Z,l as we,m as Pe,n as Ce,o as Fe,p as Ne,q as Ve,Q as J,W as be,S as De,C as Me,P as Ie,A as Te,H as Le,D as Ae,O as He,a as oe,M as Se,d as Oe}from"./OrbitControls-UgSZh0Bi.js";import{a as je}from"./simplex-noise-jK7XNhv8.js";const I=new se,F=new ae,L=new k,K=new h,j=new h,G=new h,$=new U;class ze extends ge{constructor(o,e,t){super(),t.style.touchAction="none";let r=null,n=null;const i=[],s=this;function p(){t.addEventListener("pointermove",v),t.addEventListener("pointerdown",l),t.addEventListener("pointerup",g),t.addEventListener("pointerleave",g)}function m(){t.removeEventListener("pointermove",v),t.removeEventListener("pointerdown",l),t.removeEventListener("pointerup",g),t.removeEventListener("pointerleave",g),t.style.cursor=""}function d(){m()}function f(){return o}function u(){return F}function v(C){if(s.enabled!==!1){if(D(C),F.setFromCamera(L,e),r){F.ray.intersectPlane(I,j)&&r.position.copy(j.sub(K).applyMatrix4($)),s.dispatchEvent({type:"drag",object:r});return}if(C.pointerType==="mouse"||C.pointerType==="pen")if(i.length=0,F.setFromCamera(L,e),F.intersectObjects(o,s.recursive,i),i.length>0){const w=i[0].object;I.setFromNormalAndCoplanarPoint(e.getWorldDirection(I.normal),G.setFromMatrixPosition(w.matrixWorld)),n!==w&&n!==null&&(s.dispatchEvent({type:"hoveroff",object:n}),t.style.cursor="auto",n=null),n!==w&&(s.dispatchEvent({type:"hoveron",object:w}),t.style.cursor="pointer",n=w)}else n!==null&&(s.dispatchEvent({type:"hoveroff",object:n}),t.style.cursor="auto",n=null)}}function l(C){s.enabled!==!1&&(D(C),i.length=0,F.setFromCamera(L,e),F.intersectObjects(o,s.recursive,i),i.length>0&&(r=s.transformGroup===!0?o[0]:i[0].object,I.setFromNormalAndCoplanarPoint(e.getWorldDirection(I.normal),G.setFromMatrixPosition(r.matrixWorld)),F.ray.intersectPlane(I,j)&&($.copy(r.parent.matrixWorld).invert(),K.copy(j).sub(G.setFromMatrixPosition(r.matrixWorld))),t.style.cursor="move",s.dispatchEvent({type:"dragstart",object:r})))}function g(){s.enabled!==!1&&(r&&(s.dispatchEvent({type:"dragend",object:r}),r=null),t.style.cursor=n?"pointer":"auto")}function D(C){const w=t.getBoundingClientRect();L.x=(C.clientX-w.left)/w.width*2-1,L.y=-(C.clientY-w.top)/w.height*2+1}p(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=p,this.deactivate=m,this.dispose=d,this.getObjects=f,this.getRaycaster=u}}class ce{constructor(o,e,t,r){this.pos=new h(o,e,t),this.vel=new h,this.acc=new h,this.mass=r}applyForce(o){o.divideScalar(this.mass),this.acc.add(o),this.vel.add(this.acc),this.pos.add(this.vel),this.acc=new h(0,0,0)}follow(o){var e=Math.abs(Math.floor(this.pos.x)),t=Math.abs(Math.floor(this.pos.y)),r=Math.abs(Math.floor(this.pos.z)),n=e+t+r*50;console.log(n);var i=o[n];this.applyForce(i)}attract(o){let e=new h().subVectors(this.pos,o.pos),t=this.pos.distanceTo(o.pos);t<100&&(t=200),t>1e3&&(t=500);let n=10*(this.mass*o.mass)/(t*t);e.normalize(),e.multiplyScalar(n),o.applyForce(e)}}const a=class a extends ve{constructor(e,t){super();x(this,"advance",function(){const e=new U;return function(){this.targetObject.updateMatrixWorld(),e.copy(this.targetObject.matrixWorld),this.advanceWithTransform(e),this.updateUniforms()}}());x(this,"advanceGeometry",function(){return function(t,r){const n=this.currentEnd+1>=this.length?0:this.currentEnd+1;if(r?this.updateNodePositionsFromTransformMatrix(n,r):this.updateNodePositionsFromOrientationTangent(n,t.position,t.tangent),this.currentLength>=1&&(this.connectNodes(this.currentEnd,n),this.currentLength>=this.length)){const i=this.currentEnd+1>=this.length?0:this.currentEnd+1;this.disconnectNodes(i)}this.currentLength<this.length&&this.currentLength++,this.currentEnd++,this.currentEnd>=this.length&&(this.currentEnd=0),this.currentLength>=1&&(this.currentLength<this.length?this.geometry.setDrawRange(0,(this.currentLength-1)*this.FaceIndicesPerNode):this.geometry.setDrawRange(0,this.currentLength*this.FaceIndicesPerNode)),this.updateNodeID(this.currentEnd,this.currentNodeID),this.currentNodeID++}}());x(this,"updateHead",function(){const e=new U;return function(){this.currentEnd<0||(this.targetObject.updateMatrixWorld(),e.copy(this.targetObject.matrixWorld),this.updateNodePositionsFromTransformMatrix(this.currentEnd,e))}}());x(this,"updateNodePositionsFromOrientationTangent",function(){const e=new J,t=new h,r=[];for(let n=0;n<a.MaxHeadVertices;n++){const i=new h;r.push(i)}return function(i,s,p){const m=this.geometry.getAttribute("position");this.updateNodeCenter(i,s),t.copy(s),t.sub(a.LocalHeadOrigin),e.setFromUnitVectors(a.LocalOrientationTangent,p);for(let d=0;d<this.localHeadGeometry.length;d++){const f=r[d];f.copy(this.localHeadGeometry[d]),f.applyQuaternion(e),f.add(t)}for(let d=0;d<this.localHeadGeometry.length;d++){const f=(this.VerticesPerNode*i+d)*a.PositionComponentCount,u=r[d];m.array[f]=u.x,m.array[f+1]=u.y,m.array[f+2]=u.z}m.needsUpdate=!0}}());x(this,"updateNodePositionsFromTransformMatrix",function(){const e=new xe,t=new J,r=new h,n=new h,i=new h,s=new h,p=[];for(let d=0;d<a.MaxHeadVertices;d++){const f=new h;p.push(f)}function m(d,f){const u=f.elements;d.set(u[0],u[1],u[2],u[4],u[5],u[6],u[8],u[9],u[10])}return function(f,u){const v=this.geometry.getAttribute("position");r.set(0,0,0),r.applyMatrix4(u),this.updateNodeCenter(f,r);for(let l=0;l<this.localHeadGeometry.length;l++)p[l].copy(this.localHeadGeometry[l]);for(let l=0;l<this.localHeadGeometry.length;l++)p[l].applyMatrix4(u);if(this.lastNodeCenter&&this.orientToMovement&&(m(e,u),i.set(0,0,-1),i.applyMatrix3(e),s.copy(this.currentNodeCenter),s.sub(this.lastNodeCenter),s.normalize(),s.lengthSq()<=1e-4&&this.lastOrientationDir&&s.copy(this.lastOrientationDir),s.lengthSq()>1e-4)){this.lastOrientationDir||(this.lastOrientationDir=new h),t.setFromUnitVectors(i,s),n.copy(this.currentNodeCenter);for(let l=0;l<this.localHeadGeometry.length;l++){const g=p[l];g.sub(n),g.applyQuaternion(t),g.add(n)}}for(let l=0;l<this.localHeadGeometry.length;l++){const g=(this.VerticesPerNode*f+l)*a.PositionComponentCount,D=p[l];v.array[g]=D.x,v.array[g+1]=D.y,v.array[g+2]=D.z}v.needsUpdate=!0,v.updateRange.offset=f*this.VerticesPerNode*a.PositionComponentCount,v.updateRange.count=this.VerticesPerNode*a.PositionComponentCount}}());x(this,"connectNodes",function(){const e={attribute:null,offset:0,count:-1};return function(r,n){const i=this.geometry.getIndex();for(let s=0;s<this.localHeadGeometry.length-1;s++){const p=this.VerticesPerNode*r+s,m=this.VerticesPerNode*n+s,d=(r*this.FacesPerNode+s*a.FacesPerQuad)*a.IndicesPerFace;i.array[d]=p,i.array[d+1]=m,i.array[d+2]=p+1,i.array[d+3]=m,i.array[d+4]=m+1,i.array[d+5]=p+1}return i.needsUpdate=!0,i.updateRange.count=-1,e.attribute=i,e.offset=r*this.FacesPerNode*a.IndicesPerFace,e.count=this.FacesPerNode*a.IndicesPerFace,e}}());x(this,"disconnectNodes",function(){const e={attribute:null,offset:0,count:-1};return function(r){const n=this.geometry.getIndex();for(let i=0;i<this.localHeadGeometry.length-1;i++){const s=(r*this.FacesPerNode+i*a.FacesPerQuad)*a.IndicesPerFace;n.array[s]=0,n.array[s+1]=0,n.array[s+2]=0,n.array[s+3]=0,n.array[s+4]=0,n.array[s+5]=0}return n.needsUpdate=!0,n.updateRange.count=-1,e.attribute=n,e.offset=r*this.FacesPerNode*a.IndicesPerFace,e.count=this.FacesPerNode*a.IndicesPerFace,e}}());this.active=!1,this.orientToMovement=!1,t&&(this.orientToMovement=!0),this.scene=e,this.geometry=null,this.mesh=null,this.nodeCenters=null,this.lastNodeCenter=null,this.currentNodeCenter=null,this.lastOrientationDir=null,this.nodeIDs=null,this.currentLength=0,this.currentEnd=0,this.currentNodeID=0,this.advanceFrequency=60,this.advancePeriod=1/this.advanceFrequency,this.lastAdvanceTime=0,this.paused=!1,this.pauseAdvanceUpdateTimeDiff=0}setAdvanceFrequency(e){this.advanceFrequency=e,this.advancePeriod=1/this.advanceFrequency}initialize(e,t,r,n,i,s){this.deactivate(),this.destroyMesh(),this.length=t>0?t+1:0,this.dragTexture=r?1:0,this.targetObject=s,this.initializeLocalHeadGeometry(n,i),this.nodeIDs=[],this.nodeCenters=[];for(let p=0;p<this.length;p++)this.nodeIDs[p]=-1,this.nodeCenters[p]=new h;this.material=e,this.initializeGeometry(),this.initializeMesh(),this.material.uniforms.trailLength.value=0,this.material.uniforms.minID.value=0,this.material.uniforms.maxID.value=0,this.material.uniforms.dragTexture.value=this.dragTexture,this.material.uniforms.maxTrailLength.value=this.length,this.material.uniforms.verticesPerNode.value=this.VerticesPerNode,this.material.uniforms.textureTileFactor.value=new k(1,1),this.reset()}initializeLocalHeadGeometry(e,t){if(this.localHeadGeometry=[],!t)halfWidth=e||1,halfWidth=halfWidth/2,this.localHeadGeometry.push(new h(-halfWidth,0,0)),this.localHeadGeometry.push(new h(halfWidth,0,0)),this.VerticesPerNode=2;else{this.VerticesPerNode=0;for(let r=0;r<t.length&&r<a.MaxHeadVertices;r++){const n=t[r];if(n&&n instanceof h){const i=new h;i.copy(n),this.localHeadGeometry.push(i),this.VerticesPerNode++}}}this.FacesPerNode=(this.VerticesPerNode-1)*2,this.FaceIndicesPerNode=this.FacesPerNode*3}initializeGeometry(){this.vertexCount=this.length*this.VerticesPerNode,this.faceCount=this.length*this.FacesPerNode;const e=new ye,t=new Float32Array(this.vertexCount),r=new Float32Array(this.vertexCount*this.VerticesPerNode),n=new Float32Array(this.vertexCount*a.PositionComponentCount),i=new Float32Array(this.vertexCount*a.PositionComponentCount),s=new Float32Array(this.vertexCount*a.UVComponentCount),p=new Uint32Array(this.faceCount*a.IndicesPerFace),m=new M(t,1);m.dynamic=!0,e.setAttribute("nodeID",m);const d=new M(r,1);d.dynamic=!0,e.setAttribute("nodeVertexID",d);const f=new M(i,a.PositionComponentCount);f.dynamic=!0,e.setAttribute("nodeCenter",f);const u=new M(n,a.PositionComponentCount);u.dynamic=!0,e.setAttribute("position",u);const v=new M(s,a.UVComponentCount);v.dynamic=!0,e.setAttribute("uv",v);const l=new M(p,1);l.dynamic=!0,e.setIndex(l),this.geometry=e}zeroVertices(){const e=this.geometry.getAttribute("position");for(let t=0;t<this.vertexCount;t++){const r=t*3;e.array[r]=0,e.array[r+1]=0,e.array[r+2]=0}e.needsUpdate=!0,e.updateRange.count=-1}zeroIndices(){const e=this.geometry.getIndex();for(let t=0;t<this.faceCount;t++){const r=t*3;e.array[r]=0,e.array[r+1]=0,e.array[r+2]=0}e.needsUpdate=!0,e.updateRange.count=-1}formInitialFaces(){this.zeroIndices();const e=this.geometry.getIndex();for(let t=0;t<this.length-1;t++)this.connectNodes(t,t+1);e.needsUpdate=!0,e.updateRange.count=-1}initializeMesh(){this.mesh=new X(this.geometry,this.material),this.mesh.dynamic=!0,this.mesh.matrixAutoUpdate=!1}destroyMesh(){this.mesh&&(this.scene.remove(this.mesh),this.mesh=null)}reset(){this.currentLength=0,this.currentEnd=-1,this.lastNodeCenter=null,this.currentNodeCenter=null,this.lastOrientationDir=null,this.currentNodeID=0,this.formInitialFaces(),this.zeroVertices(),this.geometry.setDrawRange(0,0)}updateUniforms(){this.currentLength<this.length?this.material.uniforms.minID.value=0:this.material.uniforms.minID.value=this.currentNodeID-this.length,this.material.uniforms.maxID.value=this.currentNodeID,this.material.uniforms.trailLength.value=this.currentLength,this.material.uniforms.maxTrailLength.value=this.length,this.material.uniforms.verticesPerNode.value=this.VerticesPerNode}advanceWithPositionAndOrientation(e,t){this.advanceGeometry({position:e,tangent:t},null)}advanceWithTransform(e){this.advanceGeometry(null,e)}currentTime(){return performance.now()/1e3}pause(){this.paused||(this.paused=!0,this.pauseAdvanceUpdateTimeDiff=this.currentTime()-this.lastAdvanceTime)}resume(){this.paused&&(this.paused=!1,this.lastAdvanceTime=this.currentTime()-this.pauseAdvanceUpdateTimeDiff)}update(){if(!this.paused){const e=this.currentTime();this.lastAdvanceTime||(this.lastAdvanceTime=e),e-this.lastAdvanceTime>this.advancePeriod?(this.advance(),this.lastAdvanceTime=e):this.updateHead()}}updateNodeID(e,t){this.nodeIDs[e]=t;const r=this.geometry.getAttribute("nodeID"),n=this.geometry.getAttribute("nodeVertexID");for(let i=0;i<this.VerticesPerNode;i++){const s=e*this.VerticesPerNode+i;r.array[s]=t,n.array[s]=i}r.needsUpdate=!0,n.needsUpdate=!0,r.updateRange.offset=e*this.VerticesPerNode,r.updateRange.count=this.VerticesPerNode,n.updateRange.offset=e*this.VerticesPerNode,n.updateRange.count=this.VerticesPerNode}updateNodeCenter(e,t){this.lastNodeCenter=this.currentNodeCenter,this.currentNodeCenter=this.nodeCenters[e],this.currentNodeCenter.copy(t);const r=this.geometry.getAttribute("nodeCenter");for(let n=0;n<this.VerticesPerNode;n++){const i=(e*this.VerticesPerNode+n)*3;r.array[i]=t.x,r.array[i+1]=t.y,r.array[i+2]=t.z}r.needsUpdate=!0,r.updateRange.offset=e*this.VerticesPerNode*a.PositionComponentCount,r.updateRange.count=this.VerticesPerNode*a.PositionComponentCount}deactivate(){this.isActive&&(this.scene.remove(this.mesh),this.isActive=!1)}activate(){this.isActive||(this.scene.add(this.mesh),this.isActive=!0)}static createMaterial(e,t,r){return r=r||{},r.trailLength={type:"f",value:null},r.verticesPerNode={type:"f",value:null},r.minID={type:"f",value:null},r.maxID={type:"f",value:null},r.dragTexture={type:"f",value:null},r.maxTrailLength={type:"f",value:null},r.textureTileFactor={type:"v2",value:null},r.headColor={type:"v4",value:new Z},r.tailColor={type:"v4",value:new Z},e=e||a.Shader.BaseVertexShader,t=t||a.Shader.BaseFragmentShader,new we({uniforms:r,vertexShader:e,fragmentShader:t,transparent:!0,alphaTest:.5,blending:Pe,blendSrc:Ce,blendDst:Fe,blendEquation:Ne,depthTest:!0,depthWrite:!1,side:Ve})}static createBaseMaterial(e){return a.createMaterial(a.Shader.BaseVertexShader,a.Shader.BaseFragmentShader,e)}static createTexturedMaterial(e){return e={},e.trailTexture={type:"t",value:null},a.createMaterial(a.Shader.TexturedVertexShader,a.Shader.TexturedFragmentShader,e)}static get MaxHeadVertices(){return 128}static get LocalOrientationTangent(){return _LocalOrientationTangent}static get LocalHeadOrigin(){return _LocalHeadOrigin}static get PositionComponentCount(){return 3}static get UVComponentCount(){return 2}static get IndicesPerFace(){return 3}static get FacesPerQuad(){return 2}};x(a,"_LocalOrientationTangent",new h(1,0,0)),x(a,"_LocalHeadOrigin",new h(0,0,0)),x(a,"Shader",{get BaseVertexVars(){return["attribute float nodeID;","attribute float nodeVertexID;","attribute vec3 nodeCenter;","uniform float minID;","uniform float maxID;","uniform float trailLength;","uniform float maxTrailLength;","uniform float verticesPerNode;","uniform vec2 textureTileFactor;","uniform vec4 headColor;","uniform vec4 tailColor;","varying vec4 vColor;"].join(`
`)},get TexturedVertexVars(){return[this.BaseVertexVars,"varying vec2 vUV;","uniform float dragTexture;"].join(`
`)},BaseFragmentVars:["varying vec4 vColor;","uniform sampler2D trailTexture;"].join(`
`),get TexturedFragmentVars(){return[this.BaseFragmentVars,"varying vec2 vUV;"].join(`
`)},get VertexShaderCore(){return["float fraction = (maxID - nodeID) / (maxID - minID);","vColor = (1.0 - fraction) * headColor + fraction * tailColor;","vec4 realPosition = vec4((1.0 - fraction) * position.xyz + fraction * nodeCenter.xyz, 1.0); "].join(`
`)},get BaseVertexShader(){return[this.BaseVertexVars,"void main() { ",this.VertexShaderCore,"gl_Position = projectionMatrix * viewMatrix * realPosition;","}"].join(`
`)},get BaseFragmentShader(){return[this.BaseFragmentVars,"void main() { ","gl_FragColor = vColor;","}"].join(`
`)},get TexturedVertexShader(){return[this.TexturedVertexVars,"void main() { ",this.VertexShaderCore,"float s = 0.0;","float t = 0.0;","if (dragTexture == 1.0) { ","   s = fraction *  textureTileFactor.s; ","     t = (nodeVertexID / verticesPerNode) * textureTileFactor.t;","} else { ","    s = nodeID / maxTrailLength * textureTileFactor.s;","     t = (nodeVertexID / verticesPerNode) * textureTileFactor.t;","}","vUV = vec2(s, t); ","gl_Position = projectionMatrix * viewMatrix * realPosition;","}"].join(`
`)},get TexturedFragmentShader(){return[this.TexturedFragmentVars,"void main() { ","vec4 textureColor = texture2D(trailTexture, vUV);","gl_FragColor = vColor * textureColor;","}"].join(`
`)}});let z=a,Y=[];const Ge=document.querySelector("#app"),V=new be({antialias:!0});V.setPixelRatio(window.devicePixelRatio);V.setSize(window.innerWidth,window.innerHeight);Ge.appendChild(V.domElement);document.body.appendChild(V.domElement);const b=new De;b.background=new Me("#5BB2F0");const N=new Ie(35,window.innerWidth/window.innerHeight,1,1e3);N.position.set(20,50,200);const We=new Te("white",.2),Ee=new Le("#ffffff","#ff00ff",.8),Re=new Ae("white",.8);Re.position.set(-1,1,1);b.add(We,Ee);const y=new He(N,V.domElement);y.enableDamping=!0;y.dampingFactor=.05;y.screenSpacePanning=!1;y.enableRotate=!0;y.rotateSpeed=.5;y.enableZoom=!0;y.zoomSpeed=.5;y.minDistance=100;y.maxDistance=1e4;y.target=new h(0,0,0);const he=new ze(Y,N,V.domElement);he.addEventListener("dragstart",function(){y.enabled=!1});he.addEventListener("dragend",function(){y.enabled=!0});const Be=()=>{N.aspect=window.innerWidth/window.innerHeight,N.updateProjectionMatrix(),V.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",Be);const W=new k,A=new h,_=new h,ee=new se,te=new ae;let H=[];window.addEventListener("keydown",function(c){W.x=c.clientX/window.innerWidth*2-1,W.y=-(c.clientY/window.innerHeight)*2+1,_.copy(N.position).normalize(),ee.setFromNormalAndCoplanarPoint(_,b.position),te.setFromCamera(W,N),te.ray.intersectPlane(ee,A);const o=new X(new oe(2,30,30),new Se({color:16103345,metalness:0,roughness:0}));Y.push(o),b.add(o);let e=new ce(A.x,A.y,A.z,15);H.push(e),o.position.copy(A)});let de;var le=10,ue=10,Q=10,T=1;de=new Array(Q*ue*le);var re=0;for(var E=0;E<le;E+=T){for(var ne=0,R=0;R<ue;R+=T){for(var ie=0,B=0;B<Q;B+=T){var qe=B+R+E*Q,Ue=je(),q=Ue(re,ne,ie)+1;let c=new h(Math.cos(q*Math.PI),Math.sin(q*Math.PI),Math.cos(q*Math.PI));de[qe]=c,ie+=T}ne+=T}re+=T}const Qe=new Oe({color:"#1da2d8"}),ke=new oe(1,64,64);let S=[],P=[],O=[];for(let c=0;c<15;c++){P[c]=new ce(Math.random()*50,Math.random()*50,Math.random()*50,Math.random()*5),S[c]=new X(ke,Qe),S[c].position.set(P[c].pos.x,P[c].pos.y,P[c].pos.z),b.add(S[c]);const o=[];o.push(new h(-1,0,0),new h(0,0,0),new h(1,0,0)),O[c]=new z(b,!1),O[c].setAdvanceFrequency(100);const e=z.createBaseMaterial();O[c].initialize(e,150,!1,0,o,S[c]),e.uniforms.headColor.value.set(.1,.4,.9,1),e.uniforms.tailColor.value.set(.2,.2,.9,.5),O[c].activate()}const pe=()=>{if(requestAnimationFrame(pe),H.length>0)for(let c=0;c<P.length;c++){for(let o=0;o<H.length;o++)H[o].attract(P[c]),H[o].pos=Y[o].position;S[c].position.set(P[c].pos.x,P[c].pos.y,P[c].pos.z),O[c].update()}V.render(b,N)};pe();