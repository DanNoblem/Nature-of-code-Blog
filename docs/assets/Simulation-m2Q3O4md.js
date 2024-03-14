var k=Object.defineProperty;var X=(a,s,e)=>s in a?k(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var y=(a,s,e)=>(X(a,typeof s!="symbol"?s+"":s,e),e);import"./modulepreload-polyfill-9p4a8sJU.js";import{V as d,e as Y,f as R,B as Z,g as D,b as z,h as H,i as J,j as O,k as K,l as $,m as _,n as ee,o as te,p as ie,Q as G,W as ne,S as re,C as ae,P as se,A as oe,H as ce,D as he,O as le,q as de,R as ue,a as me,M as pe,d as fe,r as ge}from"./OrbitControls-gPwodfKu.js";import{D as ve}from"./DragControls-6s1DdGGa.js";import{c as ye}from"./simplex-noise-jK7XNhv8.js";function xe(a){let s=a.x,e=a.y,i=a.z;return Math.sqrt(s*s+e*e+i*i)}function we(a,s){return xe(a)>s&&(a.normalize(),a.multiplyScalar(s)),a}var Pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ce={exports:{}};(function(a,s){(function(e,i){a.exports=i()})(Pe,function(){return e.importState=function(t){var n=new e;return n.importState(t),n},e;function e(){return function(t){var n=0,r=0,o=0,u=1;t.length==0&&(t=[+new Date]);var p=i();n=p(" "),r=p(" "),o=p(" ");for(var h=0;h<t.length;h++)n-=p(t[h]),n<0&&(n+=1),r-=p(t[h]),r<0&&(r+=1),o-=p(t[h]),o<0&&(o+=1);p=null;var l=function(){var m=2091639*n+u*23283064365386963e-26;return n=r,r=o,o=m-(u=m|0)};return l.next=l,l.uint32=function(){return l()*4294967296},l.fract53=function(){return l()+(l()*2097152|0)*11102230246251565e-32},l.version="Alea 0.9",l.args=t,l.exportState=function(){return[n,r,o,u]},l.importState=function(m){n=+m[0]||0,r=+m[1]||0,o=+m[2]||0,u=+m[3]||0},l}(Array.prototype.slice.call(arguments))}function i(){var t=4022871197,n=function(r){r=r.toString();for(var o=0;o<r.length;o++){t+=r.charCodeAt(o);var u=.02519603282416938*t;t=u>>>0,u-=t,u*=t,t=u>>>0,u-=t,t+=u*4294967296}return(t>>>0)*23283064365386963e-26};return n.version="Mash 0.9",n}})})(Ce);class W{constructor(s,e,i,t,n,r){this.pos=new d(s,e,i),this.vel=new d,this.acc=new d,this.mass=t,this.maxSpeed=n,this.maxForce=3,this.life=r}steer(s){let e=new d().subVectors(s,this.pos);e.normalize(),e.multiplyScalar(this.maxSpeed/2),new d().subVectors(e,this.vel),this.applyForce(s)}applyForce(s){s.divideScalar(this.mass),this.acc.add(s)}update(){this.vel.add(this.acc),this.pos.add(this.vel),this.acc=new d(0,0,0)}follow(s){var e=this.pos.x*10,i=this.pos.y*10,t=this.pos.z*10,n=s(e,i,t,1),r=s(e,i,t,2);let o=new d(Math.cos(n*Math.PI)*Math.sin(r*Math.PI),Math.sin(n*Math.PI)*Math.cos(r*Math.PI),Math.cos(n*Math.PI));o.normalize(),o.divideScalar(20),this.applyForce(o)}attract(s){let e=new d().subVectors(this.pos,s.pos),i=this.pos.distanceTo(s.pos);i<100&&(i=100),i>1e3&&(i=500);let n=10*(this.mass*s.mass)/(i*i);e.normalize(),e.multiplyScalar(n),s.steer(e)}boundaries(s){let e=new d;this.pos.x>s&&e.set(-this.maxSpeed,this.vel.y,this.vel.z),this.pos.y>s&&e.set(this.vel.x,-this.maxSpeed,this.vel.z),this.pos.z>s&&e.set(this.vel.x,this.vel.y,-this.maxSpeed),this.pos.x<0&&e.set(this.maxSpeed,this.vel.y,this.vel.z),this.pos.y<0&&e.set(this.vel.x,this.maxSpeed,this.vel.z),this.pos.z<0&&e.set(this.vel.x,this.vel.y,this.maxSpeed),this.applyForce(e)}}const c=class c extends Y{constructor(e,i){super();y(this,"advance",function(){const e=new H;return function(){this.targetObject.updateMatrixWorld(),e.copy(this.targetObject.matrixWorld),this.advanceWithTransform(e),this.updateUniforms()}}());y(this,"advanceGeometry",function(){return function(i,t){const n=this.currentEnd+1>=this.length?0:this.currentEnd+1;if(t?this.updateNodePositionsFromTransformMatrix(n,t):this.updateNodePositionsFromOrientationTangent(n,i.position,i.tangent),this.currentLength>=1&&(this.connectNodes(this.currentEnd,n),this.currentLength>=this.length)){const r=this.currentEnd+1>=this.length?0:this.currentEnd+1;this.disconnectNodes(r)}this.currentLength<this.length&&this.currentLength++,this.currentEnd++,this.currentEnd>=this.length&&(this.currentEnd=0),this.currentLength>=1&&(this.currentLength<this.length?this.geometry.setDrawRange(0,(this.currentLength-1)*this.FaceIndicesPerNode):this.geometry.setDrawRange(0,this.currentLength*this.FaceIndicesPerNode)),this.updateNodeID(this.currentEnd,this.currentNodeID),this.currentNodeID++}}());y(this,"updateHead",function(){const e=new H;return function(){this.currentEnd<0||(this.targetObject.updateMatrixWorld(),e.copy(this.targetObject.matrixWorld),this.updateNodePositionsFromTransformMatrix(this.currentEnd,e))}}());y(this,"updateNodePositionsFromOrientationTangent",function(){const e=new G,i=new d,t=[];for(let n=0;n<c.MaxHeadVertices;n++){const r=new d;t.push(r)}return function(r,o,u){const p=this.geometry.getAttribute("position");this.updateNodeCenter(r,o),i.copy(o),i.sub(c.LocalHeadOrigin),e.setFromUnitVectors(c.LocalOrientationTangent,u);for(let h=0;h<this.localHeadGeometry.length;h++){const l=t[h];l.copy(this.localHeadGeometry[h]),l.applyQuaternion(e),l.add(i)}for(let h=0;h<this.localHeadGeometry.length;h++){const l=(this.VerticesPerNode*r+h)*c.PositionComponentCount,m=t[h];p.array[l]=m.x,p.array[l+1]=m.y,p.array[l+2]=m.z}p.needsUpdate=!0}}());y(this,"updateNodePositionsFromTransformMatrix",function(){const e=new J,i=new G,t=new d,n=new d,r=new d,o=new d,u=[];for(let h=0;h<c.MaxHeadVertices;h++){const l=new d;u.push(l)}function p(h,l){const m=l.elements;h.set(m[0],m[1],m[2],m[4],m[5],m[6],m[8],m[9],m[10])}return function(l,m){const P=this.geometry.getAttribute("position");t.set(0,0,0),t.applyMatrix4(m),this.updateNodeCenter(l,t);for(let f=0;f<this.localHeadGeometry.length;f++)u[f].copy(this.localHeadGeometry[f]);for(let f=0;f<this.localHeadGeometry.length;f++)u[f].applyMatrix4(m);if(this.lastNodeCenter&&this.orientToMovement&&(p(e,m),r.set(0,0,-1),r.applyMatrix3(e),o.copy(this.currentNodeCenter),o.sub(this.lastNodeCenter),o.normalize(),o.lengthSq()<=1e-4&&this.lastOrientationDir&&o.copy(this.lastOrientationDir),o.lengthSq()>1e-4)){this.lastOrientationDir||(this.lastOrientationDir=new d),i.setFromUnitVectors(r,o),n.copy(this.currentNodeCenter);for(let f=0;f<this.localHeadGeometry.length;f++){const C=u[f];C.sub(n),C.applyQuaternion(i),C.add(n)}}for(let f=0;f<this.localHeadGeometry.length;f++){const C=(this.VerticesPerNode*l+f)*c.PositionComponentCount,A=u[f];P.array[C]=A.x,P.array[C+1]=A.y,P.array[C+2]=A.z}P.needsUpdate=!0,P.updateRange.offset=l*this.VerticesPerNode*c.PositionComponentCount,P.updateRange.count=this.VerticesPerNode*c.PositionComponentCount}}());y(this,"connectNodes",function(){const e={attribute:null,offset:0,count:-1};return function(t,n){const r=this.geometry.getIndex();for(let o=0;o<this.localHeadGeometry.length-1;o++){const u=this.VerticesPerNode*t+o,p=this.VerticesPerNode*n+o,h=(t*this.FacesPerNode+o*c.FacesPerQuad)*c.IndicesPerFace;r.array[h]=u,r.array[h+1]=p,r.array[h+2]=u+1,r.array[h+3]=p,r.array[h+4]=p+1,r.array[h+5]=u+1}return r.needsUpdate=!0,r.updateRange.count=-1,e.attribute=r,e.offset=t*this.FacesPerNode*c.IndicesPerFace,e.count=this.FacesPerNode*c.IndicesPerFace,e}}());y(this,"disconnectNodes",function(){const e={attribute:null,offset:0,count:-1};return function(t){const n=this.geometry.getIndex();for(let r=0;r<this.localHeadGeometry.length-1;r++){const o=(t*this.FacesPerNode+r*c.FacesPerQuad)*c.IndicesPerFace;n.array[o]=0,n.array[o+1]=0,n.array[o+2]=0,n.array[o+3]=0,n.array[o+4]=0,n.array[o+5]=0}return n.needsUpdate=!0,n.updateRange.count=-1,e.attribute=n,e.offset=t*this.FacesPerNode*c.IndicesPerFace,e.count=this.FacesPerNode*c.IndicesPerFace,e}}());this.active=!1,this.orientToMovement=!1,i&&(this.orientToMovement=!0),this.scene=e,this.geometry=null,this.mesh=null,this.nodeCenters=null,this.lastNodeCenter=null,this.currentNodeCenter=null,this.lastOrientationDir=null,this.nodeIDs=null,this.currentLength=0,this.currentEnd=0,this.currentNodeID=0,this.advanceFrequency=60,this.advancePeriod=1/this.advanceFrequency,this.lastAdvanceTime=0,this.paused=!1,this.pauseAdvanceUpdateTimeDiff=0}setAdvanceFrequency(e){this.advanceFrequency=e,this.advancePeriod=1/this.advanceFrequency}initialize(e,i,t,n,r,o){this.deactivate(),this.destroyMesh(),this.length=i>0?i+1:0,this.dragTexture=t?1:0,this.targetObject=o,this.initializeLocalHeadGeometry(n,r),this.nodeIDs=[],this.nodeCenters=[];for(let u=0;u<this.length;u++)this.nodeIDs[u]=-1,this.nodeCenters[u]=new d;this.material=e,this.initializeGeometry(),this.initializeMesh(),this.material.uniforms.trailLength.value=0,this.material.uniforms.minID.value=0,this.material.uniforms.maxID.value=0,this.material.uniforms.dragTexture.value=this.dragTexture,this.material.uniforms.maxTrailLength.value=this.length,this.material.uniforms.verticesPerNode.value=this.VerticesPerNode,this.material.uniforms.textureTileFactor.value=new R(1,1),this.reset()}initializeLocalHeadGeometry(e,i){if(this.localHeadGeometry=[],!i)halfWidth=e||1,halfWidth=halfWidth/2,this.localHeadGeometry.push(new d(-halfWidth,0,0)),this.localHeadGeometry.push(new d(halfWidth,0,0)),this.VerticesPerNode=2;else{this.VerticesPerNode=0;for(let t=0;t<i.length&&t<c.MaxHeadVertices;t++){const n=i[t];if(n&&n instanceof d){const r=new d;r.copy(n),this.localHeadGeometry.push(r),this.VerticesPerNode++}}}this.FacesPerNode=(this.VerticesPerNode-1)*2,this.FaceIndicesPerNode=this.FacesPerNode*3}initializeGeometry(){this.vertexCount=this.length*this.VerticesPerNode,this.faceCount=this.length*this.FacesPerNode;const e=new Z,i=new Float32Array(this.vertexCount),t=new Float32Array(this.vertexCount*this.VerticesPerNode),n=new Float32Array(this.vertexCount*c.PositionComponentCount),r=new Float32Array(this.vertexCount*c.PositionComponentCount),o=new Float32Array(this.vertexCount*c.UVComponentCount),u=new Uint32Array(this.faceCount*c.IndicesPerFace),p=new D(i,1);p.dynamic=!0,e.setAttribute("nodeID",p);const h=new D(t,1);h.dynamic=!0,e.setAttribute("nodeVertexID",h);const l=new D(r,c.PositionComponentCount);l.dynamic=!0,e.setAttribute("nodeCenter",l);const m=new D(n,c.PositionComponentCount);m.dynamic=!0,e.setAttribute("position",m);const P=new D(o,c.UVComponentCount);P.dynamic=!0,e.setAttribute("uv",P);const f=new D(u,1);f.dynamic=!0,e.setIndex(f),this.geometry=e}zeroVertices(){const e=this.geometry.getAttribute("position");for(let i=0;i<this.vertexCount;i++){const t=i*3;e.array[t]=0,e.array[t+1]=0,e.array[t+2]=0}e.needsUpdate=!0,e.updateRange.count=-1}zeroIndices(){const e=this.geometry.getIndex();for(let i=0;i<this.faceCount;i++){const t=i*3;e.array[t]=0,e.array[t+1]=0,e.array[t+2]=0}e.needsUpdate=!0,e.updateRange.count=-1}formInitialFaces(){this.zeroIndices();const e=this.geometry.getIndex();for(let i=0;i<this.length-1;i++)this.connectNodes(i,i+1);e.needsUpdate=!0,e.updateRange.count=-1}initializeMesh(){this.mesh=new z(this.geometry,this.material),this.mesh.dynamic=!0,this.mesh.matrixAutoUpdate=!1}destroyMesh(){this.mesh&&(this.scene.remove(this.mesh),this.mesh=null)}reset(){this.currentLength=0,this.currentEnd=-1,this.lastNodeCenter=null,this.currentNodeCenter=null,this.lastOrientationDir=null,this.currentNodeID=0,this.formInitialFaces(),this.zeroVertices(),this.geometry.setDrawRange(0,0)}updateUniforms(){this.currentLength<this.length?this.material.uniforms.minID.value=0:this.material.uniforms.minID.value=this.currentNodeID-this.length,this.material.uniforms.maxID.value=this.currentNodeID,this.material.uniforms.trailLength.value=this.currentLength,this.material.uniforms.maxTrailLength.value=this.length,this.material.uniforms.verticesPerNode.value=this.VerticesPerNode}advanceWithPositionAndOrientation(e,i){this.advanceGeometry({position:e,tangent:i},null)}advanceWithTransform(e){this.advanceGeometry(null,e)}currentTime(){return performance.now()/1e3}pause(){this.paused||(this.paused=!0,this.pauseAdvanceUpdateTimeDiff=this.currentTime()-this.lastAdvanceTime)}resume(){this.paused&&(this.paused=!1,this.lastAdvanceTime=this.currentTime()-this.pauseAdvanceUpdateTimeDiff)}update(){if(!this.paused){const e=this.currentTime();this.lastAdvanceTime||(this.lastAdvanceTime=e),e-this.lastAdvanceTime>this.advancePeriod?(this.advance(),this.lastAdvanceTime=e):this.updateHead()}}updateNodeID(e,i){this.nodeIDs[e]=i;const t=this.geometry.getAttribute("nodeID"),n=this.geometry.getAttribute("nodeVertexID");for(let r=0;r<this.VerticesPerNode;r++){const o=e*this.VerticesPerNode+r;t.array[o]=i,n.array[o]=r}t.needsUpdate=!0,n.needsUpdate=!0,t.updateRange.offset=e*this.VerticesPerNode,t.updateRange.count=this.VerticesPerNode,n.updateRange.offset=e*this.VerticesPerNode,n.updateRange.count=this.VerticesPerNode}updateNodeCenter(e,i){this.lastNodeCenter=this.currentNodeCenter,this.currentNodeCenter=this.nodeCenters[e],this.currentNodeCenter.copy(i);const t=this.geometry.getAttribute("nodeCenter");for(let n=0;n<this.VerticesPerNode;n++){const r=(e*this.VerticesPerNode+n)*3;t.array[r]=i.x,t.array[r+1]=i.y,t.array[r+2]=i.z}t.needsUpdate=!0,t.updateRange.offset=e*this.VerticesPerNode*c.PositionComponentCount,t.updateRange.count=this.VerticesPerNode*c.PositionComponentCount}deactivate(){this.isActive&&(this.scene.remove(this.mesh),this.isActive=!1)}activate(){this.isActive||(this.scene.add(this.mesh),this.isActive=!0)}static createMaterial(e,i,t){return t=t||{},t.trailLength={type:"f",value:null},t.verticesPerNode={type:"f",value:null},t.minID={type:"f",value:null},t.maxID={type:"f",value:null},t.dragTexture={type:"f",value:null},t.maxTrailLength={type:"f",value:null},t.textureTileFactor={type:"v2",value:null},t.headColor={type:"v4",value:new O},t.tailColor={type:"v4",value:new O},e=e||c.Shader.BaseVertexShader,i=i||c.Shader.BaseFragmentShader,new K({uniforms:t,vertexShader:e,fragmentShader:i,transparent:!0,alphaTest:.5,blending:$,blendSrc:_,blendDst:ee,blendEquation:te,depthTest:!0,depthWrite:!1,side:ie})}static createBaseMaterial(e){return c.createMaterial(c.Shader.BaseVertexShader,c.Shader.BaseFragmentShader,e)}static createTexturedMaterial(e){return e={},e.trailTexture={type:"t",value:null},c.createMaterial(c.Shader.TexturedVertexShader,c.Shader.TexturedFragmentShader,e)}static get MaxHeadVertices(){return 128}static get LocalOrientationTangent(){return _LocalOrientationTangent}static get LocalHeadOrigin(){return _LocalHeadOrigin}static get PositionComponentCount(){return 3}static get UVComponentCount(){return 2}static get IndicesPerFace(){return 3}static get FacesPerQuad(){return 2}};y(c,"_LocalOrientationTangent",new d(1,0,0)),y(c,"_LocalHeadOrigin",new d(0,0,0)),y(c,"Shader",{get BaseVertexVars(){return["attribute float nodeID;","attribute float nodeVertexID;","attribute vec3 nodeCenter;","uniform float minID;","uniform float maxID;","uniform float trailLength;","uniform float maxTrailLength;","uniform float verticesPerNode;","uniform vec2 textureTileFactor;","uniform vec4 headColor;","uniform vec4 tailColor;","varying vec4 vColor;"].join(`
`)},get TexturedVertexVars(){return[this.BaseVertexVars,"varying vec2 vUV;","uniform float dragTexture;"].join(`
`)},BaseFragmentVars:["varying vec4 vColor;","uniform sampler2D trailTexture;"].join(`
`),get TexturedFragmentVars(){return[this.BaseFragmentVars,"varying vec2 vUV;"].join(`
`)},get VertexShaderCore(){return["float fraction = (maxID - nodeID) / (maxID - minID);","vColor = (1.0 - fraction) * headColor + fraction * tailColor;","vec4 realPosition = vec4((1.0 - fraction) * position.xyz + fraction * nodeCenter.xyz, 1.0); "].join(`
`)},get BaseVertexShader(){return[this.BaseVertexVars,"void main() { ",this.VertexShaderCore,"gl_Position = projectionMatrix * viewMatrix * realPosition;","}"].join(`
`)},get BaseFragmentShader(){return[this.BaseFragmentVars,"void main() { ","gl_FragColor = vColor;","}"].join(`
`)},get TexturedVertexShader(){return[this.TexturedVertexVars,"void main() { ",this.VertexShaderCore,"float s = 0.0;","float t = 0.0;","if (dragTexture == 1.0) { ","   s = fraction *  textureTileFactor.s; ","     t = (nodeVertexID / verticesPerNode) * textureTileFactor.t;","} else { ","    s = nodeID / maxTrailLength * textureTileFactor.s;","     t = (nodeVertexID / verticesPerNode) * textureTileFactor.t;","}","vUV = vec2(s, t); ","gl_Position = projectionMatrix * viewMatrix * realPosition;","}"].join(`
`)},get TexturedFragmentShader(){return[this.TexturedFragmentVars,"void main() { ","vec4 textureColor = texture2D(trailTexture, vUV);","gl_FragColor = vColor * textureColor;","}"].join(`
`)}});let T=c,M=[],w=150;const Ve=document.querySelector("#app"),N=new ne({antialias:!0});N.setPixelRatio(window.devicePixelRatio);N.setSize(window.innerWidth,window.innerHeight);Ve.appendChild(N.domElement);document.body.appendChild(N.domElement);const V=new re;V.background=new ae("#5BB2F0");const F=new se(35,window.innerWidth/window.innerHeight,1,1e3);F.position.set(80,100,200);const Fe=new oe("white",.2),Ne=new ce("#ffffff","#ff00ff",.8),De=new he("white",.8);De.position.set(-1,1,1);V.add(Fe,Ne);const g=new le(F,N.domElement);g.enableDamping=!0;g.dampingFactor=.05;g.screenSpacePanning=!1;g.enableRotate=!1;g.rotateSpeed=.5;g.enableZoom=!0;g.zoomSpeed=.5;g.minDistance=100;g.maxDistance=800;g.target=new d(w/2,w/2,w/2);g.autoRotate=!0;const q=new ve(M,F,N.domElement);q.addEventListener("dragstart",function(){g.enabled=!1});q.addEventListener("dragend",function(){g.enabled=!0});const be=()=>{F.aspect=window.innerWidth/window.innerHeight,F.updateProjectionMatrix(),N.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",be);const L=new R,b=new d,j=new d,E=new de,B=new ue;let x=[];window.addEventListener("click",function(a){L.x=a.clientX/window.innerWidth*2-1,L.y=-(a.clientY/window.innerHeight)*2+1,j.copy(F.position).normalize(),E.setFromNormalAndCoplanarPoint(j,V.position),B.setFromCamera(L,F),B.ray.intersectPlane(E,b);const s=new z(new me(2,30,30),new pe({color:6613382,metalness:0,roughness:0}));M.push(s),V.add(s);let e=new W(b.x,b.y,b.z,20,0,500);x.push(e),s.position.copy(b)});const Ie=new fe({color:"#FF9843"}),Me=new ge(1,1,1);let S=[],v=[],I=[];const U=[];for(let a=0;a<100;a++)v[a]=new W(Math.random()*w,Math.random()*w,Math.random()*w,Math.random()*5,1,100),S[a]=new z(Me,Ie),V.add(S[a]),U.push(new d(-1,0,0),new d(1,0,0),new d(1,0,0)),Te(a);function Te(a){I[a]=new T(V,!1),I[a].setAdvanceFrequency(200);const s=T.createBaseMaterial();I[a].initialize(s,30,!1,2,U,S[a]),s.uniforms.headColor.value.set(1,.596078431372549,.2627450980392157,1),s.uniforms.tailColor.value.set(1,.8666666666666667,.5843137254901961,1),I[a].activate()}let Se=ye();new d(w,w,w);const Q=()=>{requestAnimationFrame(Q);for(let a=0;a<x.length;a++)x[a].life--,console.log(x[a].life);for(let a=0;a<v.length;a++){if(x.length>0)for(let s=0;s<x.length;s++)x[s].attract(v[a]),x[s].pos=M[s].position,x[s].life<0&&(x.splice(s,1),V.remove(M[s]),M.splice(s,1));else v[a].follow(Se);v[a].boundaries(w),v[a].vel=we(v[a].vel,v[a].maxSpeed),v[a].update(),S[a].position.set(v[a].pos.x,v[a].pos.y,v[a].pos.z),I[a].update()}N.render(V,F),g.update()};Q();