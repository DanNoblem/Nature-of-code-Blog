const F1=(Math.sqrt(5)-1)/4,s=(5-Math.sqrt(5))/20,M=z=>Math.floor(z)|0,q=new Float64Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function j1(z=Math.random){const o=g1(z),c=new Float64Array(o).map(f=>q[f%32*4]),n=new Float64Array(o).map(f=>q[f%32*4+1]),i=new Float64Array(o).map(f=>q[f%32*4+2]),m=new Float64Array(o).map(f=>q[f%32*4+3]);return function(D,N,P,T){let U,W,X,Y,Z;const S=(D+N+P+T)*F1,v=M(D+S),B=M(N+S),C=M(P+S),E=M(T+S),h=(v+B+C+E)*s,u1=v-h,b1=B-h,d1=C-h,x1=E-h,e=D-u1,l=N-b1,r=P-d1,a=T-x1;let p=0,w=0,y=0,k=0;e>l?p++:w++,e>r?p++:y++,e>a?p++:k++,l>r?w++:y++,l>a?w++:k++,r>a?y++:k++;const e1=p>=3?1:0,l1=w>=3?1:0,r1=y>=3?1:0,a1=k>=3?1:0,i1=p>=2?1:0,f1=w>=2?1:0,m1=y>=2?1:0,p1=k>=2?1:0,w1=p>=1?1:0,y1=w>=1?1:0,k1=y>=1?1:0,z1=k>=1?1:0,H=e-e1+s,I=l-l1+s,J=r-r1+s,K=a-a1+s,L=e-i1+2*s,O=l-f1+2*s,Q=r-m1+2*s,R=a-p1+2*s,V=e-w1+3*s,_=l-y1+3*s,$=r-k1+3*s,t1=a-z1+3*s,n1=e-1+4*s,o1=l-1+4*s,s1=r-1+4*s,c1=a-1+4*s,u=v&255,b=B&255,d=C&255,x=E&255;let F=.6-e*e-l*l-r*r-a*a;if(F<0)U=0;else{const t=u+o[b+o[d+o[x]]];F*=F,U=F*F*(c[t]*e+n[t]*l+i[t]*r+m[t]*a)}let g=.6-H*H-I*I-J*J-K*K;if(g<0)W=0;else{const t=u+e1+o[b+l1+o[d+r1+o[x+a1]]];g*=g,W=g*g*(c[t]*H+n[t]*I+i[t]*J+m[t]*K)}let j=.6-L*L-O*O-Q*Q-R*R;if(j<0)X=0;else{const t=u+i1+o[b+f1+o[d+m1+o[x+p1]]];j*=j,X=j*j*(c[t]*L+n[t]*O+i[t]*Q+m[t]*R)}let A=.6-V*V-_*_-$*$-t1*t1;if(A<0)Y=0;else{const t=u+w1+o[b+y1+o[d+k1+o[x+z1]]];A*=A,Y=A*A*(c[t]*V+n[t]*_+i[t]*$+m[t]*t1)}let G=.6-n1*n1-o1*o1-s1*s1-c1*c1;if(G<0)Z=0;else{const t=u+1+o[b+1+o[d+1+o[x+1]]];G*=G,Z=G*G*(c[t]*n1+n[t]*o1+i[t]*s1+m[t]*c1)}return 27*(U+W+X+Y+Z)}}function g1(z){const c=new Uint8Array(512);for(let n=0;n<512/2;n++)c[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(z()*(256-n)),m=c[n];c[n]=c[i],c[i]=m}for(let n=256;n<512;n++)c[n]=c[n-256];return c}export{j1 as c};