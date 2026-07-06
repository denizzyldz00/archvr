(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ds="170",Yf=0,Il=1,Jf=2,Kh=1,Zf=2,In=3,pn=0,Ft=1,dn=2,oi=0,oa=1,Pl=2,Dl=3,Ll=4,Qf=5,Ti=100,$f=101,eu=102,tu=103,nu=104,iu=200,au=201,su=202,ru=203,Vo=204,Wo=205,ou=206,cu=207,lu=208,du=209,hu=210,fu=211,uu=212,pu=213,mu=214,qo=0,Xo=1,Ko=2,ha=3,Yo=4,Jo=5,Zo=6,Qo=7,Yh=0,bu=1,gu=2,ci=0,xu=1,_u=2,yu=3,vu=4,Mu=5,Su=6,Eu=7,kl="attached",Au="detached",Jh=300,fa=301,ua=302,$o=303,ec=304,Pr=306,pa=1e3,ii=1001,Er=1002,Bt=1003,Zh=1004,Za=1005,Yt=1006,mr=1007,Un=1008,Hn=1009,Qh=1010,$h=1011,ss=1012,Zc=1013,li=1014,Jt=1015,hs=1016,Qc=1017,$c=1018,ma=1020,ef=35902,tf=1021,nf=1022,Wt=1023,af=1024,sf=1025,ca=1026,ba=1027,el=1028,Dr=1029,rf=1030,tl=1031,nl=1033,br=33776,gr=33777,xr=33778,_r=33779,tc=35840,nc=35841,ic=35842,ac=35843,sc=36196,rc=37492,oc=37496,cc=37808,lc=37809,dc=37810,hc=37811,fc=37812,uc=37813,pc=37814,mc=37815,bc=37816,gc=37817,xc=37818,_c=37819,yc=37820,vc=37821,yr=36492,Mc=36494,Sc=36495,of=36283,Ec=36284,Ac=36285,Tc=36286,rs=2300,os=2301,jr=2302,Ul=2400,Nl=2401,Fl=2402,Tu=2500,wu=0,cf=1,wc=2,Ru=3200,Cu=3201,lf=0,Iu=1,ni="",vt="srgb",Ht="srgb-linear",Lr="linear",Qe="srgb",Pi=7680,Bl=519,Pu=512,Du=513,Lu=514,df=515,ku=516,Uu=517,Nu=518,Fu=519,Rc=35044,Ol="300 es",Nn=2e3,Ar=2001;class Sa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const es=Math.PI/180,ga=180/Math.PI;function fn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[a&255]+Rt[a>>8&255]+Rt[a>>16&255]+Rt[a>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Tt(a,e,t){return Math.max(e,Math.min(t,a))}function il(a,e){return(a%e+e)%e}function Bu(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Ou(a,e,t){return a!==e?(t-a)/(e-a):0}function ts(a,e,t){return(1-t)*a+t*e}function Hu(a,e,t,n){return ts(a,e,1-Math.exp(-t*n))}function zu(a,e=1){return e-Math.abs(il(a,e*2)-e)}function ju(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Gu(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Vu(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Wu(a,e){return a+Math.random()*(e-a)}function qu(a){return a*(.5-Math.random())}function Xu(a){a!==void 0&&(Hl=a);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ku(a){return a*es}function Yu(a){return a*ga}function Ju(a){return(a&a-1)===0&&a!==0}function Zu(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Qu(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function $u(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),d=r((e+n)/2),h=s((e-n)/2),f=r((e-n)/2),u=s((n-e)/2),b=r((n-e)/2);switch(i){case"XYX":a.set(o*d,c*h,c*f,o*l);break;case"YZY":a.set(c*f,o*d,c*h,o*l);break;case"ZXZ":a.set(c*h,c*f,o*d,o*l);break;case"XZX":a.set(o*d,c*b,c*u,o*l);break;case"YXY":a.set(c*u,o*d,c*b,o*l);break;case"ZYZ":a.set(c*b,c*u,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Je(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const xa={DEG2RAD:es,RAD2DEG:ga,generateUUID:fn,clamp:Tt,euclideanModulo:il,mapLinear:Bu,inverseLerp:Ou,lerp:ts,damp:Hu,pingpong:zu,smoothstep:ju,smootherstep:Gu,randInt:Vu,randFloat:Wu,randFloatSpread:qu,seededRandom:Xu,degToRad:Ku,radToDeg:Yu,isPowerOfTwo:Ju,ceilPowerOfTwo:Zu,floorPowerOfTwo:Qu,setQuaternionFromProperEuler:$u,normalize:Je,denormalize:hn};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,i,s,r,o,c,l){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l)}set(e,t,n,i,s,r,o,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],u=n[5],b=n[8],g=i[0],m=i[3],p=i[6],x=i[1],y=i[4],_=i[7],M=i[2],A=i[5],S=i[8];return s[0]=r*g+o*x+c*M,s[3]=r*m+o*y+c*A,s[6]=r*p+o*_+c*S,s[1]=l*g+d*x+h*M,s[4]=l*m+d*y+h*A,s[7]=l*p+d*_+h*S,s[2]=f*g+u*x+b*M,s[5]=f*m+u*y+b*A,s[8]=f*p+u*_+b*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*r*d-t*o*l-n*s*d+n*o*c+i*s*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*r-o*l,f=o*c-d*s,u=l*s-r*c,b=t*h+n*f+i*u;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/b;return e[0]=h*g,e[1]=(i*l-d*n)*g,e[2]=(o*n-i*r)*g,e[3]=f*g,e[4]=(d*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=u*g,e[7]=(n*c-l*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new Le;function hf(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function cs(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function ep(){const a=cs("canvas");return a.style.display="block",a}const zl={};function Qa(a){a in zl||(zl[a]=!0,console.warn(a))}function tp(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function np(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ip(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Oe={enabled:!0,workingColorSpace:Ht,spaces:{},convert:function(a,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Qe&&(a.r=Bn(a.r),a.g=Bn(a.g),a.b=Bn(a.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(a.applyMatrix3(this.spaces[e].toXYZ),a.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qe&&(a.r=la(a.r),a.g=la(a.g),a.b=la(a.b))),a},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ni?Lr:this.spaces[a].transfer},getLuminanceCoefficients:function(a,e=this.workingColorSpace){return a.fromArray(this.spaces[e].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,e,t){return a.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}};function Bn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function la(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const jl=[.64,.33,.3,.6,.15,.06],Gl=[.2126,.7152,.0722],Vl=[.3127,.329],Wl=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Oe.define({[Ht]:{primaries:jl,whitePoint:Vl,transfer:Lr,toXYZ:Wl,fromXYZ:ql,luminanceCoefficients:Gl,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:jl,whitePoint:Vl,transfer:Qe,toXYZ:Wl,fromXYZ:ql,luminanceCoefficients:Gl,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}});let Di;class ap{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=cs("canvas")),Di.width=e.width,Di.height=e.height;const n=Di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Bn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sp=0;class ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Vr(i[r].image)):s.push(Vr(i[r]))}else s=Vr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ap.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rp=0;class bt extends Sa{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=ii,i=ii,s=Yt,r=Un,o=Wt,c=Hn,l=bt.DEFAULT_ANISOTROPY,d=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=fn(),this.name="",this.source=new ff(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Jh;bt.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],d=c[4],h=c[8],f=c[1],u=c[5],b=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-g)<.01&&Math.abs(b-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+g)<.1&&Math.abs(b+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(u+1)/2,M=(p+1)/2,A=(d+f)/4,S=(h+g)/4,w=(b+m)/4;return y>_&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=S/n):_>M?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=A/i,s=w/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=S/s,i=w/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-b)*(m-b)+(h-g)*(h-g)+(f-d)*(f-d));return Math.abs(x)<.001&&(x=1),this.x=(m-b)/x,this.y=(h-g)/x,this.z=(f-d)/x,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class op extends Sa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ff(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends op{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uf extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cp extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3];const f=s[r+0],u=s[r+1],b=s[r+2],g=s[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=u,e[t+2]=b,e[t+3]=g;return}if(h!==g||c!==f||l!==u||d!==b){let m=1-o;const p=c*f+l*u+d*b+h*g,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),A=Math.atan2(M,p*x);m=Math.sin(m*A)/M,o=Math.sin(o*A)/M}const _=o*x;if(c=c*m+f*_,l=l*m+u*_,d=d*m+b*_,h=h*m+g*_,m===1-o){const M=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=M,l*=M,d*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=s[r],f=s[r+1],u=s[r+2],b=s[r+3];return e[t]=o*b+d*h+c*u-l*f,e[t+1]=c*b+d*f+l*h-o*u,e[t+2]=l*b+d*u+o*f-c*h,e[t+3]=d*b-o*h-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(i/2),h=o(s/2),f=c(n/2),u=c(i/2),b=c(s/2);switch(r){case"XYZ":this._x=f*d*h+l*u*b,this._y=l*u*h-f*d*b,this._z=l*d*b+f*u*h,this._w=l*d*h-f*u*b;break;case"YXZ":this._x=f*d*h+l*u*b,this._y=l*u*h-f*d*b,this._z=l*d*b-f*u*h,this._w=l*d*h+f*u*b;break;case"ZXY":this._x=f*d*h-l*u*b,this._y=l*u*h+f*d*b,this._z=l*d*b+f*u*h,this._w=l*d*h-f*u*b;break;case"ZYX":this._x=f*d*h-l*u*b,this._y=l*u*h+f*d*b,this._z=l*d*b-f*u*h,this._w=l*d*h+f*u*b;break;case"YZX":this._x=f*d*h+l*u*b,this._y=l*u*h+f*d*b,this._z=l*d*b-f*u*h,this._w=l*d*h-f*u*b;break;case"XZY":this._x=f*d*h-l*u*b,this._y=l*u*h-f*d*b,this._z=l*d*b+f*u*h,this._w=l*d*h+f*u*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],f=n+o+h;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(d-c)*u,this._y=(s-l)*u,this._z=(r-i)*u}else if(n>o&&n>h){const u=2*Math.sqrt(1+n-o-h);this._w=(d-c)/u,this._x=.25*u,this._y=(i+r)/u,this._z=(s+l)/u}else if(o>h){const u=2*Math.sqrt(1+o-n-h);this._w=(s-l)/u,this._x=(i+r)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+h-n-o);this._w=(r-i)/u,this._x=(s+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+r*o+i*l-s*c,this._y=i*d+r*c+s*o-n*l,this._z=s*d+r*l+n*c-i*o,this._w=r*d-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-t;return this._w=u*r+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),d=2*(o*t-s*i),h=2*(s*n-r*t);return this.x=t+c*l+r*h-o*d,this.y=n+c*d+o*l-s*h,this.z=i+c*h+s*d-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new P,Xl=new hi;class ot{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,rn):rn.fromBufferAttribute(s,r),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(e.matrixWorld),this.union(_s)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),ys.subVectors(this.max,Pa),Li.subVectors(e.a,Pa),ki.subVectors(e.b,Pa),Ui.subVectors(e.c,Pa),qn.subVectors(ki,Li),Xn.subVectors(Ui,ki),ui.subVectors(Li,Ui);let t=[0,-qn.z,qn.y,0,-Xn.z,Xn.y,0,-ui.z,ui.y,qn.z,0,-qn.x,Xn.z,0,-Xn.x,ui.z,0,-ui.x,-qn.y,qn.x,0,-Xn.y,Xn.x,0,-ui.y,ui.x,0];return!qr(t,Li,ki,Ui,ys)||(t=[1,0,0,0,1,0,0,0,1],!qr(t,Li,ki,Ui,ys))?!1:(vs.crossVectors(qn,Xn),t=[vs.x,vs.y,vs.z],qr(t,Li,ki,Ui,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,_s=new ot,Li=new P,ki=new P,Ui=new P,qn=new P,Xn=new P,ui=new P,Pa=new P,ys=new P,vs=new P,pi=new P;function qr(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){pi.fromArray(a,s);const o=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),c=e.dot(pi),l=t.dot(pi),d=n.dot(pi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const lp=new ot,Da=new P,Xr=new P;class Ot{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const t=Da.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Da,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(Xr)),this.expandByPoint(Da.copy(e.center).sub(Xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new P,Kr=new P,Ms=new P,Kn=new P,Yr=new P,Ss=new P,Jr=new P;class Ea{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Kr.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Kr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ms),o=Kn.dot(this.direction),c=-Kn.dot(Ms),l=Kn.lengthSq(),d=Math.abs(1-r*r);let h,f,u,b;if(d>0)if(h=r*c-o,f=r*o-c,b=s*d,h>=0)if(f>=-b)if(f<=b){const g=1/d;h*=g,f*=g,u=h*(h+r*f+2*o)+f*(r*h+f+2*c)+l}else f=s,h=Math.max(0,-(r*f+o)),u=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(r*f+o)),u=-h*h+f*(f+2*c)+l;else f<=-b?(h=Math.max(0,-(-r*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),u=-h*h+f*(f+2*c)+l):f<=b?(h=0,f=Math.min(Math.max(-s,-c),s),u=f*(f+2*c)+l):(h=Math.max(0,-(r*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),u=-h*h+f*(f+2*c)+l);else f=r>0?-s:s,h=Math.max(0,-(r*f+o)),u=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Kr).addScaledVector(Ms,f),u}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,s){Yr.subVectors(t,e),Ss.subVectors(n,e),Jr.crossVectors(Yr,Ss);let r=this.direction.dot(Jr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Kn.subVectors(this.origin,e);const c=o*this.direction.dot(Ss.crossVectors(Kn,Ss));if(c<0)return null;const l=o*this.direction.dot(Yr.cross(Kn));if(l<0||c+l>r)return null;const d=-o*Kn.dot(Jr);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(e,t,n,i,s,r,o,c,l,d,h,f,u,b,g,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l,d,h,f,u,b,g,m)}set(e,t,n,i,s,r,o,c,l,d,h,f,u,b,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=f,p[3]=u,p[7]=b,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ni.setFromMatrixColumn(e,0).length(),s=1/Ni.setFromMatrixColumn(e,1).length(),r=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=r*d,u=r*h,b=o*d,g=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=u+b*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=b+u*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*d,u=c*h,b=l*d,g=l*h;t[0]=f+g*o,t[4]=b*o-u,t[8]=r*l,t[1]=r*h,t[5]=r*d,t[9]=-o,t[2]=u*o-b,t[6]=g+f*o,t[10]=r*c}else if(e.order==="ZXY"){const f=c*d,u=c*h,b=l*d,g=l*h;t[0]=f-g*o,t[4]=-r*h,t[8]=b+u*o,t[1]=u+b*o,t[5]=r*d,t[9]=g-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const f=r*d,u=r*h,b=o*d,g=o*h;t[0]=c*d,t[4]=b*l-u,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=u*l-b,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,u=r*l,b=o*c,g=o*l;t[0]=c*d,t[4]=g-f*h,t[8]=b*h+u,t[1]=h,t[5]=r*d,t[9]=-o*d,t[2]=-l*d,t[6]=u*h+b,t[10]=f-g*h}else if(e.order==="XZY"){const f=r*c,u=r*l,b=o*c,g=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=f*h+g,t[5]=r*d,t[9]=u*h-b,t[2]=b*h-u,t[6]=o*d,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,hp)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Yn.crossVectors(n,Xt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Yn.crossVectors(n,Xt)),Yn.normalize(),Es.crossVectors(Xt,Yn),i[0]=Yn.x,i[4]=Es.x,i[8]=Xt.x,i[1]=Yn.y,i[5]=Es.y,i[9]=Xt.y,i[2]=Yn.z,i[6]=Es.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],u=n[13],b=n[2],g=n[6],m=n[10],p=n[14],x=n[3],y=n[7],_=n[11],M=n[15],A=i[0],S=i[4],w=i[8],E=i[12],v=i[1],C=i[5],D=i[9],L=i[13],k=i[2],O=i[6],z=i[10],X=i[14],V=i[3],ee=i[7],ie=i[11],ue=i[15];return s[0]=r*A+o*v+c*k+l*V,s[4]=r*S+o*C+c*O+l*ee,s[8]=r*w+o*D+c*z+l*ie,s[12]=r*E+o*L+c*X+l*ue,s[1]=d*A+h*v+f*k+u*V,s[5]=d*S+h*C+f*O+u*ee,s[9]=d*w+h*D+f*z+u*ie,s[13]=d*E+h*L+f*X+u*ue,s[2]=b*A+g*v+m*k+p*V,s[6]=b*S+g*C+m*O+p*ee,s[10]=b*w+g*D+m*z+p*ie,s[14]=b*E+g*L+m*X+p*ue,s[3]=x*A+y*v+_*k+M*V,s[7]=x*S+y*C+_*O+M*ee,s[11]=x*w+y*D+_*z+M*ie,s[15]=x*E+y*L+_*X+M*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],f=e[10],u=e[14],b=e[3],g=e[7],m=e[11],p=e[15];return b*(+s*c*h-i*l*h-s*o*f+n*l*f+i*o*u-n*c*u)+g*(+t*c*u-t*l*f+s*r*f-i*r*u+i*l*d-s*c*d)+m*(+t*l*h-t*o*u-s*r*h+n*r*u+s*o*d-n*l*d)+p*(-i*o*d-t*c*h+t*o*f+i*r*h-n*r*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],f=e[10],u=e[11],b=e[12],g=e[13],m=e[14],p=e[15],x=h*m*l-g*f*l+g*c*u-o*m*u-h*c*p+o*f*p,y=b*f*l-d*m*l-b*c*u+r*m*u+d*c*p-r*f*p,_=d*g*l-b*h*l+b*o*u-r*g*u-d*o*p+r*h*p,M=b*h*c-d*g*c-b*o*f+r*g*f+d*o*m-r*h*m,A=t*x+n*y+i*_+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/A;return e[0]=x*S,e[1]=(g*f*s-h*m*s-g*i*u+n*m*u+h*i*p-n*f*p)*S,e[2]=(o*m*s-g*c*s+g*i*l-n*m*l-o*i*p+n*c*p)*S,e[3]=(h*c*s-o*f*s-h*i*l+n*f*l+o*i*u-n*c*u)*S,e[4]=y*S,e[5]=(d*m*s-b*f*s+b*i*u-t*m*u-d*i*p+t*f*p)*S,e[6]=(b*c*s-r*m*s-b*i*l+t*m*l+r*i*p-t*c*p)*S,e[7]=(r*f*s-d*c*s+d*i*l-t*f*l-r*i*u+t*c*u)*S,e[8]=_*S,e[9]=(b*h*s-d*g*s-b*n*u+t*g*u+d*n*p-t*h*p)*S,e[10]=(r*g*s-b*o*s+b*n*l-t*g*l-r*n*p+t*o*p)*S,e[11]=(d*o*s-r*h*s-d*n*l+t*h*l+r*n*u-t*o*u)*S,e[12]=M*S,e[13]=(d*g*i-b*h*i+b*n*f-t*g*f-d*n*m+t*h*m)*S,e[14]=(b*o*i-r*g*i-b*n*c+t*g*c+r*n*m-t*o*m)*S,e[15]=(r*h*i-d*o*i+d*n*c-t*h*c-r*n*f+t*o*f)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,d=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,d*o+n,d*c-i*r,0,l*c-i*o,d*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,d=r+r,h=o+o,f=s*l,u=s*d,b=s*h,g=r*d,m=r*h,p=o*h,x=c*l,y=c*d,_=c*h,M=n.x,A=n.y,S=n.z;return i[0]=(1-(g+p))*M,i[1]=(u+_)*M,i[2]=(b-y)*M,i[3]=0,i[4]=(u-_)*A,i[5]=(1-(f+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(b+y)*S,i[9]=(m-x)*S,i[10]=(1-(f+g))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ni.set(i[0],i[1],i[2]).length();const r=Ni.set(i[4],i[5],i[6]).length(),o=Ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const l=1/s,d=1/r,h=1/o;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=d,on.elements[5]*=d,on.elements[6]*=d,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r,o=Nn){const c=this.elements,l=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let u,b;if(o===Nn)u=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===Ar)u=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=Nn){const c=this.elements,l=1/(t-e),d=1/(n-i),h=1/(r-s),f=(t+e)*l,u=(n+i)*d;let b,g;if(o===Nn)b=(r+s)*h,g=-2*h;else if(o===Ar)b=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=g,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ni=new P,on=new ye,dp=new P(0,0,0),hp=new P(1,1,1),Yn=new P,Es=new P,Xt=new P,Kl=new ye,Yl=new hi;class _n{constructor(e=0,t=0,n=0,i=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],d=i[9],h=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Tt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fp=0;const Jl=new P,Fi=new hi,Tn=new ye,As=new P,La=new P,up=new P,pp=new hi,Zl=new P(1,0,0),Ql=new P(0,1,0),$l=new P(0,0,1),ed={type:"added"},mp={type:"removed"},Bi={type:"childadded",child:null},Zr={type:"childremoved",child:null};class st extends Sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new P,t=new _n,n=new hi,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new Le}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(La,As,this.up):Tn.lookAt(As,La,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),d=r(e.images),h=r(e.shapes),f=r(e.skeletons),u=r(e.animations),b=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),b.length>0&&(n.nodes=b)}return n.object=i,n;function r(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new P(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new P,wn=new P,Qr=new P,Rn=new P,Oi=new P,Hi=new P,td=new P,$r=new P,eo=new P,to=new P,no=new qe,io=new qe,ao=new qe;class Mt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),wn.subVectors(n,t),Qr.subVectors(e,t);const r=cn.dot(cn),o=cn.dot(wn),c=cn.dot(Qr),l=wn.dot(wn),d=wn.dot(Qr),h=r*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,u=(l*c-o*d)*f,b=(r*d-o*c)*f;return s.set(1-u-b,b,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,i,s,r,o,c){return this.getBarycoord(e,t,n,i,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Rn.x),c.addScaledVector(r,Rn.y),c.addScaledVector(o,Rn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,r){return no.setScalar(0),io.setScalar(0),ao.setScalar(0),no.fromBufferAttribute(e,t),io.fromBufferAttribute(e,n),ao.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(no,s.x),r.addScaledVector(io,s.y),r.addScaledVector(ao,s.z),r}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),wn.subVectors(e,t),cn.cross(wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),cn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Mt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Mt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;Oi.subVectors(i,n),Hi.subVectors(s,n),$r.subVectors(e,n);const c=Oi.dot($r),l=Hi.dot($r);if(c<=0&&l<=0)return t.copy(n);eo.subVectors(e,i);const d=Oi.dot(eo),h=Hi.dot(eo);if(d>=0&&h<=d)return t.copy(i);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return r=c/(c-d),t.copy(n).addScaledVector(Oi,r);to.subVectors(e,s);const u=Oi.dot(to),b=Hi.dot(to);if(b>=0&&u<=b)return t.copy(s);const g=u*l-c*b;if(g<=0&&l>=0&&b<=0)return o=l/(l-b),t.copy(n).addScaledVector(Hi,o);const m=d*b-u*h;if(m<=0&&h-d>=0&&u-b>=0)return td.subVectors(s,i),o=(h-d)/(h-d+(u-b)),t.copy(i).addScaledVector(td,o);const p=1/(m+g+f);return r=g*p,o=f*p,t.copy(n).addScaledVector(Oi,r).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function so(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Oe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Oe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Oe.workingColorSpace){if(e=il(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=so(r,s,e+1/3),this.g=so(r,s,e),this.b=so(r,s,e-1/3)}return Oe.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Oe.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Tt(Ct.r*255,0,255))*65536+Math.round(Tt(Ct.g*255,0,255))*256+Math.round(Tt(Ct.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Oe.workingColorSpace){Oe.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,s=Ct.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const d=(o+r)/2;if(o===r)c=0,l=0;else{const h=r-o;switch(l=d<=.5?h/(r+o):h/(2-r-o),r){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=vt){Oe.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Ts);const n=ts(Jn.h,Ts.h,t),i=ts(Jn.s,Ts.s,t),s=ts(Jn.l,Ts.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Te;Te.NAMES=pf;let bp=0;class un extends Sa{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=fn(),this.name="",this.blending=oa,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Wo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ai extends un{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new P,ws=new Ee;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class mf extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bf extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class On extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gp=0;const $t=new ye,ro=new st,zi=new P,Kt=new ot,ka=new ot,yt=new P;class zt extends Sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?bf:mf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new On(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ka.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Kt.min,ka.min),Kt.expandByPoint(yt),yt.addVectors(Kt.max,ka.max),Kt.expandByPoint(yt)):(Kt.expandByPoint(ka.min),Kt.expandByPoint(ka.max))}Kt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)yt.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(e,l),yt.add(zi)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let w=0;w<n.count;w++)o[w]=new P,c[w]=new P;const l=new P,d=new P,h=new P,f=new Ee,u=new Ee,b=new Ee,g=new P,m=new P;function p(w,E,v){l.fromBufferAttribute(n,w),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,w),u.fromBufferAttribute(s,E),b.fromBufferAttribute(s,v),d.sub(l),h.sub(l),u.sub(f),b.sub(f);const C=1/(u.x*b.y-b.x*u.y);isFinite(C)&&(g.copy(d).multiplyScalar(b.y).addScaledVector(h,-u.y).multiplyScalar(C),m.copy(h).multiplyScalar(u.x).addScaledVector(d,-b.x).multiplyScalar(C),o[w].add(g),o[E].add(g),o[v].add(g),c[w].add(m),c[E].add(m),c[v].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let w=0,E=x.length;w<E;++w){const v=x[w],C=v.start,D=v.count;for(let L=C,k=C+D;L<k;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new P,_=new P,M=new P,A=new P;function S(w){M.fromBufferAttribute(i,w),A.copy(M);const E=o[w];y.copy(E),y.sub(M.multiplyScalar(M.dot(E))).normalize(),_.crossVectors(A,E);const C=_.dot(c[w])<0?-1:1;r.setXYZW(w,y.x,y.y,y.z,C)}for(let w=0,E=x.length;w<E;++w){const v=x[w],C=v.start,D=v.count;for(let L=C,k=C+D;L<k;L+=3)S(e.getX(L+0)),S(e.getX(L+1)),S(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,r=new P,o=new P,c=new P,l=new P,d=new P,h=new P;if(e)for(let f=0,u=e.count;f<u;f+=3){const b=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,b),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),d.subVectors(r,s),h.subVectors(i,s),d.cross(h),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),d.subVectors(r,s),h.subVectors(i,s),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,f=new l.constructor(c.length*d);let u=0,b=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?u=c[g]*o.data.stride+o.offset:u=c[g]*d;for(let p=0;p<d;p++)f[b++]=l[u++]}return new gt(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,h=l.length;d<h;d++){const f=l[d],u=e(f,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const u=l[h];d.push(u.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let f=0,u=h.length;f<u;f++)d.push(h[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,d=r.length;l<d;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new ye,mi=new Ea,Rs=new Ot,id=new P,Cs=new P,Is=new P,Ps=new P,oo=new P,Ds=new P,ad=new P,Ls=new P;class ft extends st{constructor(e=new zt,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ds.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],h=s[c];d!==0&&(oo.fromBufferAttribute(h,e),r?Ds.addScaledVector(oo,d):Ds.addScaledVector(oo.sub(t),d))}t.add(Ds)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),mi.copy(e.ray).recast(e.near),!(Rs.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Rs,id)===null||mi.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(nd.copy(s).invert(),mi.copy(e.ray).applyMatrix4(nd),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(r))for(let b=0,g=f.length;b<g;b++){const m=f[b],p=r[m.materialIndex],x=Math.max(m.start,u.start),y=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let _=x,M=y;_<M;_+=3){const A=o.getX(_),S=o.getX(_+1),w=o.getX(_+2);i=ks(this,p,e,n,l,d,h,A,S,w),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const b=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let m=b,p=g;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);i=ks(this,r,e,n,l,d,h,x,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let b=0,g=f.length;b<g;b++){const m=f[b],p=r[m.materialIndex],x=Math.max(m.start,u.start),y=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let _=x,M=y;_<M;_+=3){const A=_,S=_+1,w=_+2;i=ks(this,p,e,n,l,d,h,A,S,w),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const b=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let m=b,p=g;m<p;m+=3){const x=m,y=m+1,_=m+2;i=ks(this,r,e,n,l,d,h,x,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function xp(a,e,t,n,i,s,r,o){let c;if(e.side===Ft?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,e.side===pn,o),c===null)return null;Ls.copy(o),Ls.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(Ls);return l<t.near||l>t.far?null:{distance:l,point:Ls.clone(),object:a}}function ks(a,e,t,n,i,s,r,o,c,l){a.getVertexPosition(o,Cs),a.getVertexPosition(c,Is),a.getVertexPosition(l,Ps);const d=xp(a,e,t,n,Cs,Is,Ps,ad);if(d){const h=new P;Mt.getBarycoord(ad,Cs,Is,Ps,h),i&&(d.uv=Mt.getInterpolatedAttribute(i,o,c,l,h,new Ee)),s&&(d.uv1=Mt.getInterpolatedAttribute(s,o,c,l,h,new Ee)),r&&(d.normal=Mt.getInterpolatedAttribute(r,o,c,l,h,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new P,materialIndex:0};Mt.getNormal(Cs,Is,Ps,f.normal),d.face=f,d.barycoord=h}return d}class fs extends zt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],d=[],h=[];let f=0,u=0;b("z","y","x",-1,-1,n,t,e,r,s,0),b("z","y","x",1,-1,n,t,-e,r,s,1),b("x","z","y",1,1,e,n,t,i,r,2),b("x","z","y",1,-1,e,n,-t,i,r,3),b("x","y","z",1,-1,e,t,n,i,s,4),b("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new On(l,3)),this.setAttribute("normal",new On(d,3)),this.setAttribute("uv",new On(h,2));function b(g,m,p,x,y,_,M,A,S,w,E){const v=_/S,C=M/w,D=_/2,L=M/2,k=A/2,O=S+1,z=w+1;let X=0,V=0;const ee=new P;for(let ie=0;ie<z;ie++){const ue=ie*C-L;for(let we=0;we<O;we++){const Ve=we*v-D;ee[g]=Ve*x,ee[m]=ue*y,ee[p]=k,l.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[p]=A>0?1:-1,d.push(ee.x,ee.y,ee.z),h.push(we/S),h.push(1-ie/w),X+=1}}for(let ie=0;ie<w;ie++)for(let ue=0;ue<S;ue++){const we=f+ue+O*ie,Ve=f+ue+O*(ie+1),q=f+(ue+1)+O*(ie+1),Q=f+(ue+1)+O*ie;c.push(we,Ve,Q),c.push(Ve,q,Q),V+=6}o.addGroup(u,V,E),u+=V,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _a(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(a){const e={};for(let t=0;t<a.length;t++){const n=_a(a[t]);for(const i in n)e[i]=n[i]}return e}function _p(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function gf(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}const yp={clone:_a,merge:kt};var vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends un{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xf extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new P,sd=new Ee,rd=new Ee;class Ut extends xf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,sd,rd),t.subVectors(rd,sd)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Gi=1;class Sp extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ut(ji,Gi,e,t);i.layers=this.layers,this.add(i);const s=new Ut(ji,Gi,e,t);s.layers=this.layers,this.add(s);const r=new Ut(ji,Gi,e,t);r.layers=this.layers,this.add(r);const o=new Ut(ji,Gi,e,t);o.layers=this.layers,this.add(o);const c=new Ut(ji,Gi,e,t);c.layers=this.layers,this.add(c);const l=new Ut(ji,Gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,f,u),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class _f extends bt{constructor(e,t,n,i,s,r,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:fa,super(e,t,n,i,s,r,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _f(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fs(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:_a(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:oi});s.uniforms.tEquirect.value=t;const r=new ft(i,s),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=Yt),new Sp(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const co=new P,Ap=new P,Tp=new Le;class Ln{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=co.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(co),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tp.getNormalMatrix(e),i=this.coplanarPoint(co).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Ot,Us=new P;class kr{constructor(e=new Ln,t=new Ln,n=new Ln,i=new Ln,s=new Ln,r=new Ln){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],c=i[3],l=i[4],d=i[5],h=i[6],f=i[7],u=i[8],b=i[9],g=i[10],m=i[11],p=i[12],x=i[13],y=i[14],_=i[15];if(n[0].setComponents(c-s,f-l,m-u,_-p).normalize(),n[1].setComponents(c+s,f+l,m+u,_+p).normalize(),n[2].setComponents(c+r,f+d,m+b,_+x).normalize(),n[3].setComponents(c-r,f-d,m-b,_-x).normalize(),n[4].setComponents(c-o,f-h,m-g,_-y).normalize(),t===Nn)n[5].setComponents(c+o,f+h,m+g,_+y).normalize();else if(t===Ar)n[5].setComponents(o,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Us.x=i.normal.x>0?e.max.x:e.min.x,Us.y=i.normal.y>0?e.max.y:e.min.y,Us.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yf(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function wp(a){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,f=a.createBuffer();a.bindBuffer(c,f),a.bufferData(c,l,d),o.onUploadCallback();let u;if(l instanceof Float32Array)u=a.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=a.HALF_FLOAT:u=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=a.SHORT;else if(l instanceof Uint32Array)u=a.UNSIGNED_INT;else if(l instanceof Int32Array)u=a.INT;else if(l instanceof Int8Array)u=a.BYTE;else if(l instanceof Uint8Array)u=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(a.bindBuffer(l,o),h.length===0)a.bufferSubData(l,0,d);else{h.sort((u,b)=>u.start-b.start);let f=0;for(let u=1;u<h.length;u++){const b=h[f],g=h[u];g.start<=b.start+b.count+1?b.count=Math.max(b.count,g.start+g.count-b.start):(++f,h[f]=g)}h.length=f+1;for(let u=0,b=h.length;u<b;u++){const g=h[u];a.bufferSubData(l,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:r}}class us extends zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,d=c+1,h=e/o,f=t/c,u=[],b=[],g=[],m=[];for(let p=0;p<d;p++){const x=p*f-r;for(let y=0;y<l;y++){const _=y*h-s;b.push(_,-x,0),g.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const y=x+l*p,_=x+l*(p+1),M=x+1+l*(p+1),A=x+1+l*p;u.push(y,_,A),u.push(_,M,A)}this.setIndex(u),this.setAttribute("position",new On(b,3)),this.setAttribute("normal",new On(g,3)),this.setAttribute("uv",new On(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ub=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Ip,alphamap_pars_fragment:Pp,alphatest_fragment:Dp,alphatest_pars_fragment:Lp,aomap_fragment:kp,aomap_pars_fragment:Up,batching_pars_vertex:Np,batching_vertex:Fp,begin_vertex:Bp,beginnormal_vertex:Op,bsdfs:Hp,iridescence_fragment:zp,bumpmap_pars_fragment:jp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:qp,color_fragment:Xp,color_pars_fragment:Kp,color_pars_vertex:Yp,color_vertex:Jp,common:Zp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:$p,displacementmap_pars_vertex:em,displacementmap_vertex:tm,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:am,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:cm,envmap_pars_vertex:lm,envmap_physical_pars_fragment:ym,envmap_vertex:dm,fog_vertex:hm,fog_pars_vertex:fm,fog_fragment:um,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:bm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:xm,lights_pars_begin:_m,lights_toon_fragment:vm,lights_toon_pars_fragment:Mm,lights_phong_fragment:Sm,lights_phong_pars_fragment:Em,lights_physical_fragment:Am,lights_physical_pars_fragment:Tm,lights_fragment_begin:wm,lights_fragment_maps:Rm,lights_fragment_end:Cm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Lm,map_fragment:km,map_pars_fragment:Um,map_particle_fragment:Nm,map_particle_pars_fragment:Fm,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:Om,morphinstance_vertex:Hm,morphcolor_vertex:zm,morphnormal_vertex:jm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Vm,normal_fragment_begin:Wm,normal_fragment_maps:qm,normal_pars_fragment:Xm,normal_pars_vertex:Km,normal_vertex:Ym,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:eb,opaque_fragment:tb,packing:nb,premultiplied_alpha_fragment:ib,project_vertex:ab,dithering_fragment:sb,dithering_pars_fragment:rb,roughnessmap_fragment:ob,roughnessmap_pars_fragment:cb,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:db,shadowmap_vertex:hb,shadowmask_pars_fragment:fb,skinbase_vertex:ub,skinning_pars_vertex:pb,skinning_vertex:mb,skinnormal_vertex:bb,specularmap_fragment:gb,specularmap_pars_fragment:xb,tonemapping_fragment:_b,tonemapping_pars_fragment:yb,transmission_fragment:vb,transmission_pars_fragment:Mb,uv_pars_fragment:Sb,uv_pars_vertex:Eb,uv_vertex:Ab,worldpos_vertex:Tb,background_vert:wb,background_frag:Rb,backgroundCube_vert:Cb,backgroundCube_frag:Ib,cube_vert:Pb,cube_frag:Db,depth_vert:Lb,depth_frag:kb,distanceRGBA_vert:Ub,distanceRGBA_frag:Nb,equirect_vert:Fb,equirect_frag:Bb,linedashed_vert:Ob,linedashed_frag:Hb,meshbasic_vert:zb,meshbasic_frag:jb,meshlambert_vert:Gb,meshlambert_frag:Vb,meshmatcap_vert:Wb,meshmatcap_frag:qb,meshnormal_vert:Xb,meshnormal_frag:Kb,meshphong_vert:Yb,meshphong_frag:Jb,meshphysical_vert:Zb,meshphysical_frag:Qb,meshtoon_vert:$b,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:ag,sprite_vert:sg,sprite_frag:rg},ne={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},gn={basic:{uniforms:kt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:kt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:kt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:kt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:kt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:kt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:kt([ne.points,ne.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:kt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:kt([ne.common,ne.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:kt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:kt([ne.sprite,ne.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:kt([ne.common,ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:kt([ne.lights,ne.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};gn.physical={uniforms:kt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ns={r:0,b:0,g:0},gi=new _n,og=new ye;function cg(a,e,t,n,i,s,r){const o=new Te(0);let c=s===!0?0:1,l,d,h=null,f=0,u=null;function b(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function g(x){let y=!1;const _=b(x);_===null?p(o,c):_&&_.isColor&&(p(_,1),y=!0);const M=a.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(a.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(x,y){const _=b(y);_&&(_.isCubeTexture||_.mapping===Pr)?(d===void 0&&(d=new ft(new fs(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:_a(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(M,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),gi.copy(y.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(gi)),d.material.toneMapped=Oe.getTransfer(_.colorSpace)!==Qe,(h!==_||f!==_.version||u!==a.toneMapping)&&(d.material.needsUpdate=!0,h=_,f=_.version,u=a.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ft(new us(2,2),new zn({name:"BackgroundMaterial",uniforms:_a(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Oe.getTransfer(_.colorSpace)!==Qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=a.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Ns,gf(a)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,y,r)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:g,addToRenderList:m}}function lg(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,r=!1;function o(v,C,D,L,k){let O=!1;const z=h(L,D,C);s!==z&&(s=z,l(s.object)),O=u(v,L,D,k),O&&b(v,L,D,k),k!==null&&e.update(k,a.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,_(v,C,D,L),k!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return a.createVertexArray()}function l(v){return a.bindVertexArray(v)}function d(v){return a.deleteVertexArray(v)}function h(v,C,D){const L=D.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let O=k[C.id];O===void 0&&(O={},k[C.id]=O);let z=O[L];return z===void 0&&(z=f(c()),O[L]=z),z}function f(v){const C=[],D=[],L=[];for(let k=0;k<t;k++)C[k]=0,D[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:L,object:v,attributes:{},index:null}}function u(v,C,D,L){const k=s.attributes,O=C.attributes;let z=0;const X=D.getAttributes();for(const V in X)if(X[V].location>=0){const ie=k[V];let ue=O[V];if(ue===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function b(v,C,D,L){const k={},O=C.attributes;let z=0;const X=D.getAttributes();for(const V in X)if(X[V].location>=0){let ie=O[V];ie===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor));const ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),k[V]=ue,z++}s.attributes=k,s.attributesNum=z,s.index=L}function g(){const v=s.newAttributes;for(let C=0,D=v.length;C<D;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){const D=s.newAttributes,L=s.enabledAttributes,k=s.attributeDivisors;D[v]=1,L[v]===0&&(a.enableVertexAttribArray(v),L[v]=1),k[v]!==C&&(a.vertexAttribDivisor(v,C),k[v]=C)}function x(){const v=s.newAttributes,C=s.enabledAttributes;for(let D=0,L=C.length;D<L;D++)C[D]!==v[D]&&(a.disableVertexAttribArray(D),C[D]=0)}function y(v,C,D,L,k,O,z){z===!0?a.vertexAttribIPointer(v,C,D,k,O):a.vertexAttribPointer(v,C,D,L,k,O)}function _(v,C,D,L){g();const k=L.attributes,O=D.getAttributes(),z=C.defaultAttributeValues;for(const X in O){const V=O[X];if(V.location>=0){let ee=k[X];if(ee===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor)),ee!==void 0){const ie=ee.normalized,ue=ee.itemSize,we=e.get(ee);if(we===void 0)continue;const Ve=we.buffer,q=we.type,Q=we.bytesPerElement,pe=q===a.INT||q===a.UNSIGNED_INT||ee.gpuType===Zc;if(ee.isInterleavedBufferAttribute){const ae=ee.data,Me=ae.stride,Ce=ee.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)p(V.location+Ne,ae.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)m(V.location+Ne);a.bindBuffer(a.ARRAY_BUFFER,Ve);for(let Ne=0;Ne<V.locationSize;Ne++)y(V.location+Ne,ue/V.locationSize,q,ie,Me*Q,(Ce+ue/V.locationSize*Ne)*Q,pe)}else{if(ee.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae,ee.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);a.bindBuffer(a.ARRAY_BUFFER,Ve);for(let ae=0;ae<V.locationSize;ae++)y(V.location+ae,ue/V.locationSize,q,ie,ue*Q,ue/V.locationSize*ae*Q,pe)}}else if(z!==void 0){const ie=z[X];if(ie!==void 0)switch(ie.length){case 2:a.vertexAttrib2fv(V.location,ie);break;case 3:a.vertexAttrib3fv(V.location,ie);break;case 4:a.vertexAttrib4fv(V.location,ie);break;default:a.vertexAttrib1fv(V.location,ie)}}}}x()}function M(){w();for(const v in n){const C=n[v];for(const D in C){const L=C[D];for(const k in L)d(L[k].object),delete L[k];delete C[D]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const D in C){const L=C[D];for(const k in L)d(L[k].object),delete L[k];delete C[D]}delete n[v.id]}function S(v){for(const C in n){const D=n[C];if(D[v.id]===void 0)continue;const L=D[v.id];for(const k in L)d(L[k].object),delete L[k];delete D[v.id]}}function w(){E(),r=!0,s!==i&&(s=i,l(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function dg(a,e,t){let n;function i(l){n=l}function s(l,d){a.drawArrays(n,l,d),t.update(d,n,1)}function r(l,d,h){h!==0&&(a.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let u=0;for(let b=0;b<h;b++)u+=d[b];t.update(u,n,1)}function c(l,d,h,f){if(h===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let b=0;b<l.length;b++)r(l[b],d[b],f[b]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,h);let b=0;for(let g=0;g<h;g++)b+=d[g]*f[g];t.update(b,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function hg(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){return!(S!==Wt&&n.convert(S)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const w=S===hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Hn&&n.convert(S)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Jt&&!w)}function c(S){if(S==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),u=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),M=b>0,A=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:b,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:M,maxSamples:A}}function fg(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Ln,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const u=h.length!==0||f||n!==0||i;return i=f,n=h.length,u},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,u){const b=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=a.get(h);if(!i||b===null||b.length===0||s&&!m)s?d(null):l();else{const x=s?0:n,y=x*4;let _=p.clippingState||null;c.value=_,_=d(b,f,y,u);for(let M=0;M!==y;++M)_[M]=t[M];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,u,b){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,b!==!0||m===null){const p=u+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=u;y!==g;++y,_+=4)r.copy(h[y]).applyMatrix4(x,o),r.normal.toArray(m,_),m[_+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function ug(a){let e=new WeakMap;function t(r,o){return o===$o?r.mapping=fa:o===ec&&(r.mapping=ua),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===$o||o===ec)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Ep(c.height);return l.fromEquirectangularTexture(a,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class sl extends xf{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sa=4,od=[.125,.215,.35,.446,.526,.582],wi=20,lo=new sl,cd=new Te;let ho=null,fo=0,uo=0,po=!1;const Ai=(1+Math.sqrt(5))/2,Vi=1/Ai,ld=[new P(-Ai,Vi,0),new P(Ai,Vi,0),new P(-Vi,0,Ai),new P(Vi,0,Ai),new P(0,Ai,-Vi),new P(0,Ai,Vi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class dd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ho=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,fo,uo),this._renderer.xr.enabled=po,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fa||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:hs,format:Wt,colorSpace:Ht,depthBuffer:!1},i=hd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pg(s)),this._blurMaterial=mg(s,e,t)}return i}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,n,i){const o=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(cd),d.toneMapping=ci,d.autoClear=!1;const u=new ai({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),b=new ft(new fs,u);let g=!1;const m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,g=!0):(u.color.copy(cd),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;Fs(i,x*y,p>2?y:0,y,y),d.setRenderTarget(i),g&&d.render(b,o),d.render(e,o)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fa||e.mapping===ua;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Fs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ld[(i-s-1)%ld.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ft(this._lodPlanes[i],l),f=l.uniforms,u=this._sizeLods[n]-1,b=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*wi-1),g=s/b,m=isFinite(s)?1+Math.floor(d*g):wi;m>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let x=0;for(let S=0;S<wi;++S){const w=S/g,E=Math.exp(-w*w/2);p.push(E),S===0?x+=E:S<m&&(x+=2*E)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=b,f.mipInt.value=y-n;const _=this._sizeLods[i],M=3*_*(i>y-sa?i-y+sa:0),A=4*(this._cubeSize-_);Fs(t,M,A,3*_,2*_),c.setRenderTarget(t),c.render(h,lo)}}function pg(a){const e=[],t=[],n=[];let i=a;const s=a-sa+1+od.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let c=1/o;r>a-sa?c=od[r-a+sa-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],u=6,b=6,g=3,m=2,p=1,x=new Float32Array(g*b*u),y=new Float32Array(m*b*u),_=new Float32Array(p*b*u);for(let A=0;A<u;A++){const S=A%3*2/3-1,w=A>2?0:-1,E=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];x.set(E,g*b*A),y.set(f,m*b*A);const v=[A,A,A,A,A,A];_.set(v,p*b*A)}const M=new zt;M.setAttribute("position",new gt(x,g)),M.setAttribute("uv",new gt(y,m)),M.setAttribute("faceIndex",new gt(_,p)),e.push(M),i>sa&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hd(a,e,t){const n=new Ci(a,e,t);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function mg(a,e,t){const n=new Float32Array(wi),i=new P(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function fd(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ud(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bg(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===$o||c===ec,d=c===fa||c===ua;if(l||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new dd(a)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const u=o.image;return l&&u&&u.height>0||d&&u&&i(u)?(t===null&&(t=new dd(a)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function gg(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Qa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xg(a,e,t,n){const i={},s=new WeakMap;function r(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const b in f.attributes)e.remove(f.attributes[b]);for(const b in f.morphAttributes){const g=f.morphAttributes[b];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",r),delete i[f.id];const u=s.get(f);u&&(e.remove(u),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const b in f)e.update(f[b],a.ARRAY_BUFFER);const u=h.morphAttributes;for(const b in u){const g=u[b];for(let m=0,p=g.length;m<p;m++)e.update(g[m],a.ARRAY_BUFFER)}}function l(h){const f=[],u=h.index,b=h.attributes.position;let g=0;if(u!==null){const x=u.array;g=u.version;for(let y=0,_=x.length;y<_;y+=3){const M=x[y+0],A=x[y+1],S=x[y+2];f.push(M,A,A,S,S,M)}}else if(b!==void 0){const x=b.array;g=b.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const M=y+0,A=y+1,S=y+2;f.push(M,A,A,S,S,M)}}else return;const m=new(hf(f)?bf:mf)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function d(h){const f=s.get(h);if(f){const u=h.index;u!==null&&f.version<u.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function _g(a,e,t){let n;function i(f){n=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function c(f,u){a.drawElements(n,u,s,f*r),t.update(u,n,1)}function l(f,u,b){b!==0&&(a.drawElementsInstanced(n,u,s,f*r,b),t.update(u,n,b))}function d(f,u,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,b);let m=0;for(let p=0;p<b;p++)m+=u[p];t.update(m,n,1)}function h(f,u,b,g){if(b===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/r,u[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,s,f,0,g,0,b);let p=0;for(let x=0;x<b;x++)p+=u[x]*g[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function yg(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vg(a,e,t){const n=new WeakMap,i=new qe;function s(r,o,c){const l=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var u=v;f!==void 0&&f.texture.dispose();const b=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;b===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let M=o.attributes.position.count*_,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const S=new Float32Array(M*A*4*h),w=new uf(S,M,A,h);w.type=Jt,w.needsUpdate=!0;const E=_*4;for(let C=0;C<h;C++){const D=p[C],L=x[C],k=y[C],O=M*A*4*C;for(let z=0;z<D.count;z++){const X=z*E;b===!0&&(i.fromBufferAttribute(D,z),S[O+X+0]=i.x,S[O+X+1]=i.y,S[O+X+2]=i.z,S[O+X+3]=0),g===!0&&(i.fromBufferAttribute(L,z),S[O+X+4]=i.x,S[O+X+5]=i.y,S[O+X+6]=i.z,S[O+X+7]=0),m===!0&&(i.fromBufferAttribute(k,z),S[O+X+8]=i.x,S[O+X+9]=i.y,S[O+X+10]=i.z,S[O+X+11]=k.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new Ee(M,A)},n.set(o,f),o.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let b=0;for(let m=0;m<l.length;m++)b+=l[m];const g=o.morphTargetsRelative?1:1-b;c.getUniforms().setValue(a,"morphTargetBaseInfluence",g),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:s}}function Mg(a,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function r(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}class vf extends bt{constructor(e,t,n,i,s,r,o,c,l,d=ca){if(d!==ca&&d!==ba)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ca&&(n=li),n===void 0&&d===ba&&(n=ma),super(null,i,s,r,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=c!==void 0?c:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mf=new bt,pd=new vf(1,1),Sf=new uf,Ef=new cp,Af=new _f,md=[],bd=[],gd=new Float32Array(16),xd=new Float32Array(9),_d=new Float32Array(4);function Aa(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=md[i];if(s===void 0&&(s=new Float32Array(i),md[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function xt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function _t(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ur(a,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Sg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Eg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;a.uniform2fv(this.addr,e),_t(t,e)}}function Ag(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;a.uniform3fv(this.addr,e),_t(t,e)}}function Tg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;a.uniform4fv(this.addr,e),_t(t,e)}}function wg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;_d.set(n),a.uniformMatrix2fv(this.addr,!1,_d),_t(t,n)}}function Rg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;xd.set(n),a.uniformMatrix3fv(this.addr,!1,xd),_t(t,n)}}function Cg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;gd.set(n),a.uniformMatrix4fv(this.addr,!1,gd),_t(t,n)}}function Ig(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Pg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;a.uniform2iv(this.addr,e),_t(t,e)}}function Dg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;a.uniform3iv(this.addr,e),_t(t,e)}}function Lg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;a.uniform4iv(this.addr,e),_t(t,e)}}function kg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Ug(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;a.uniform2uiv(this.addr,e),_t(t,e)}}function Ng(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;a.uniform3uiv(this.addr,e),_t(t,e)}}function Fg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;a.uniform4uiv(this.addr,e),_t(t,e)}}function Bg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(pd.compareFunction=df,s=pd):s=Mf,t.setTexture2D(e||s,i)}function Og(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ef,i)}function Hg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Af,i)}function zg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sf,i)}function jg(a){switch(a){case 5126:return Sg;case 35664:return Eg;case 35665:return Ag;case 35666:return Tg;case 35674:return wg;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Ig;case 35667:case 35671:return Pg;case 35668:case 35672:return Dg;case 35669:case 35673:return Lg;case 5125:return kg;case 36294:return Ug;case 36295:return Ng;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return zg}}function Gg(a,e){a.uniform1fv(this.addr,e)}function Vg(a,e){const t=Aa(e,this.size,2);a.uniform2fv(this.addr,t)}function Wg(a,e){const t=Aa(e,this.size,3);a.uniform3fv(this.addr,t)}function qg(a,e){const t=Aa(e,this.size,4);a.uniform4fv(this.addr,t)}function Xg(a,e){const t=Aa(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Kg(a,e){const t=Aa(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Yg(a,e){const t=Aa(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Jg(a,e){a.uniform1iv(this.addr,e)}function Zg(a,e){a.uniform2iv(this.addr,e)}function Qg(a,e){a.uniform3iv(this.addr,e)}function $g(a,e){a.uniform4iv(this.addr,e)}function ex(a,e){a.uniform1uiv(this.addr,e)}function tx(a,e){a.uniform2uiv(this.addr,e)}function nx(a,e){a.uniform3uiv(this.addr,e)}function ix(a,e){a.uniform4uiv(this.addr,e)}function ax(a,e,t){const n=this.cache,i=e.length,s=Ur(t,i);xt(n,s)||(a.uniform1iv(this.addr,s),_t(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Mf,s[r])}function sx(a,e,t){const n=this.cache,i=e.length,s=Ur(t,i);xt(n,s)||(a.uniform1iv(this.addr,s),_t(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Ef,s[r])}function rx(a,e,t){const n=this.cache,i=e.length,s=Ur(t,i);xt(n,s)||(a.uniform1iv(this.addr,s),_t(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Af,s[r])}function ox(a,e,t){const n=this.cache,i=e.length,s=Ur(t,i);xt(n,s)||(a.uniform1iv(this.addr,s),_t(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Sf,s[r])}function cx(a){switch(a){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return qg;case 35674:return Xg;case 35675:return Kg;case 35676:return Yg;case 5124:case 35670:return Jg;case 35667:case 35671:return Zg;case 35668:case 35672:return Qg;case 35669:case 35673:return $g;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}class lx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jg(t.type)}}class dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cx(t.type)}}class hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function yd(a,e){a.seq.push(e),a.map[e.id]=e}function fx(a,e,t){const n=a.name,i=n.length;for(mo.lastIndex=0;;){const s=mo.exec(n),r=mo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){yd(t,l===void 0?new lx(o,a,e):new dx(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new hx(o),yd(t,h)),t=h}}}class vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);fx(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function vd(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const ux=37297;let px=0;function mx(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Md=new Le;function bx(a){Oe._getMatrix(Md,Oe.workingColorSpace,a);const e=`mat3( ${Md.elements.map(t=>t.toFixed(4))} )`;switch(Oe.getTransfer(a)){case Lr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Sd(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+mx(a.getShaderSource(e),r)}else return i}function gx(a,e){const t=bx(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xx(a,e){let t;switch(e){case xu:t="Linear";break;case _u:t="Reinhard";break;case yu:t="Cineon";break;case vu:t="ACESFilmic";break;case Su:t="AgX";break;case Eu:t="Neutral";break;case Mu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bs=new P;function _x(){Oe.getLuminanceCoefficients(Bs);const a=Bs.x.toFixed(4),e=Bs.y.toFixed(4),t=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function vx(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mx(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function $a(a){return a!==""}function Ed(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ad(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(a){return a.replace(Sx,Ax)}const Ex=new Map;function Ax(a,e){let t=Ue[e];if(t===void 0){const n=Ex.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cc(t)}const Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(a){return a.replace(Tx,wx)}function wx(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function wd(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rx(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Zf?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function Cx(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case fa:case ua:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ix(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function Px(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Yh:e="ENVMAP_BLENDING_MULTIPLY";break;case bu:e="ENVMAP_BLENDING_MIX";break;case gu:e="ENVMAP_BLENDING_ADD";break}return e}function Dx(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lx(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=Rx(t),l=Cx(t),d=Ix(t),h=Px(t),f=Dx(t),u=yx(t),b=vx(s),g=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter($a).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter($a).join(`
`),p.length>0&&(p+=`
`)):(m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),p=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Ue.tonemapping_pars_fragment:"",t.toneMapping!==ci?xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,gx("linearToOutputTexel",t.outputColorSpace),_x(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($a).join(`
`)),r=Cc(r),r=Ed(r,t),r=Ad(r,t),o=Cc(o),o=Ed(o,t),o=Ad(o,t),r=Td(r),o=Td(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+r,_=x+p+o,M=vd(i,i.VERTEX_SHADER,y),A=vd(i,i.FRAGMENT_SHADER,_);i.attachShader(g,M),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function S(C){if(a.debug.checkShaderErrors){const D=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(M).trim(),k=i.getShaderInfoLog(A).trim();let O=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(O=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,M,A);else{const X=Sd(i,M,"vertex"),V=Sd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+X+`
`+V)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||k==="")&&(z=!1);z&&(C.diagnostics={runnable:O,programLog:D,vertexShader:{log:L,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(M),i.deleteShader(A),w=new vr(i,g),E=Mx(i,g)}let w;this.getUniforms=function(){return w===void 0&&S(this),w};let E;this.getAttributes=function(){return E===void 0&&S(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,ux)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=px++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}let kx=0;class Ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Nx(e),t.set(e,n)),n}}class Nx{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}}function Fx(a,e,t,n,i,s,r){const o=new al,c=new Ux,l=new Set,d=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let u=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,v,C,D,L){const k=D.fog,O=L.geometry,z=E.isMeshStandardMaterial?D.environment:null,X=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),V=X&&X.mapping===Pr?X.image.height:null,ee=b[E.type];E.precision!==null&&(u=i.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ue=ie!==void 0?ie.length:0;let we=0;O.morphAttributes.position!==void 0&&(we=1),O.morphAttributes.normal!==void 0&&(we=2),O.morphAttributes.color!==void 0&&(we=3);let Ve,q,Q,pe;if(ee){const Ye=gn[ee];Ve=Ye.vertexShader,q=Ye.fragmentShader}else Ve=E.vertexShader,q=E.fragmentShader,c.update(E),Q=c.getVertexShaderID(E),pe=c.getFragmentShaderID(E);const ae=a.getRenderTarget(),Me=a.state.buffers.depth.getReversed(),Ce=L.isInstancedMesh===!0,Ne=L.isBatchedMesh===!0,tt=!!E.map,Fe=!!E.matcap,dt=!!X,B=!!E.aoMap,Zt=!!E.lightMap,He=!!E.bumpMap,ze=!!E.normalMap,Se=!!E.displacementMap,nt=!!E.emissiveMap,ve=!!E.metalnessMap,I=!!E.roughnessMap,T=E.anisotropy>0,H=E.clearcoat>0,Y=E.dispersion>0,Z=E.iridescence>0,K=E.sheen>0,xe=E.transmission>0,re=T&&!!E.anisotropyMap,de=H&&!!E.clearcoatMap,Ge=H&&!!E.clearcoatNormalMap,$=H&&!!E.clearcoatRoughnessMap,he=Z&&!!E.iridescenceMap,Ae=Z&&!!E.iridescenceThicknessMap,Re=K&&!!E.sheenColorMap,fe=K&&!!E.sheenRoughnessMap,je=!!E.specularMap,ke=!!E.specularColorMap,$e=!!E.specularIntensityMap,U=xe&&!!E.transmissionMap,se=xe&&!!E.thicknessMap,W=!!E.gradientMap,J=!!E.alphaMap,le=E.alphaTest>0,oe=!!E.alphaHash,Pe=!!E.extensions;let ct=ci;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ct=a.toneMapping);const wt={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:q,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:Ne,batchingColor:Ne&&L._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?a.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ht,alphaToCoverage:!!E.alphaToCoverage,map:tt,matcap:Fe,envMap:dt,envMapMode:dt&&X.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:Zt,bumpMap:He,normalMap:ze,displacementMap:f&&Se,emissiveMap:nt,normalMapObjectSpace:ze&&E.normalMapType===Iu,normalMapTangentSpace:ze&&E.normalMapType===lf,metalnessMap:ve,roughnessMap:I,anisotropy:T,anisotropyMap:re,clearcoat:H,clearcoatMap:de,clearcoatNormalMap:Ge,clearcoatRoughnessMap:$,dispersion:Y,iridescence:Z,iridescenceMap:he,iridescenceThicknessMap:Ae,sheen:K,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:je,specularColorMap:ke,specularIntensityMap:$e,transmission:xe,transmissionMap:U,thicknessMap:se,gradientMap:W,opaque:E.transparent===!1&&E.blending===oa&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:oe,combine:E.combine,mapUv:tt&&g(E.map.channel),aoMapUv:B&&g(E.aoMap.channel),lightMapUv:Zt&&g(E.lightMap.channel),bumpMapUv:He&&g(E.bumpMap.channel),normalMapUv:ze&&g(E.normalMap.channel),displacementMapUv:Se&&g(E.displacementMap.channel),emissiveMapUv:nt&&g(E.emissiveMap.channel),metalnessMapUv:ve&&g(E.metalnessMap.channel),roughnessMapUv:I&&g(E.roughnessMap.channel),anisotropyMapUv:re&&g(E.anisotropyMap.channel),clearcoatMapUv:de&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(E.sheenRoughnessMap.channel),specularMapUv:je&&g(E.specularMap.channel),specularColorMapUv:ke&&g(E.specularColorMap.channel),specularIntensityMapUv:$e&&g(E.specularIntensityMap.channel),transmissionMapUv:U&&g(E.transmissionMap.channel),thicknessMapUv:se&&g(E.thicknessMap.channel),alphaMapUv:J&&g(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ze||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(tt||J),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Me,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:we,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:ct,decodeVideoTexture:tt&&E.map.isVideoTexture===!0&&Oe.getTransfer(E.map.colorSpace)===Qe,decodeVideoTextureEmissive:nt&&E.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(E.emissiveMap.colorSpace)===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===Ft,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&E.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function p(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)v.push(C),v.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(x(v,E),y(v,E),v.push(a.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function x(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function y(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const v=b[E.type];let C;if(v){const D=gn[v];C=yp.clone(D.uniforms)}else C=E.uniforms;return C}function M(E,v){let C;for(let D=0,L=d.length;D<L;D++){const k=d[D];if(k.cacheKey===v){C=k,++C.usedTimes;break}}return C===void 0&&(C=new Lx(a,v,E,s),d.push(C)),C}function A(E){if(--E.usedTimes===0){const v=d.indexOf(E);d[v]=d[d.length-1],d.pop(),E.destroy()}}function S(E){c.remove(E)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:A,releaseShaderCache:S,programs:d,dispose:w}}function Bx(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Ox(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Rd(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Cd(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(h,f,u,b,g,m){let p=a[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:u,groupOrder:b,renderOrder:h.renderOrder,z:g,group:m},a[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=u,p.groupOrder=b,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,f,u,b,g,m){const p=r(h,f,u,b,g,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):t.push(p)}function c(h,f,u,b,g,m){const p=r(h,f,u,b,g,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Ox),n.length>1&&n.sort(f||Rd),i.length>1&&i.sort(f||Rd)}function d(){for(let h=e,f=a.length;h<f;h++){const u=a[h];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:d,sort:l}}function Hx(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new Cd,a.set(n,[r])):i>=s.length?(r=new Cd,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function zx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Te};break;case"SpotLight":t={position:new P,direction:new P,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new P,halfWidth:new P,halfHeight:new P};break}return a[e.id]=t,t}}}function jx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Gx=0;function Vx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Wx(a){const e=new zx,t=jx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,s=new ye,r=new ye;function o(l){let d=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,b=0,g=0,m=0,p=0,x=0,y=0,_=0,M=0,A=0,S=0;l.sort(Vx);for(let E=0,v=l.length;E<v;E++){const C=l[E],D=C.color,L=C.intensity,k=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=D.r*L,h+=D.g*L,f+=D.b*L;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],L);S++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,V=t.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[u]=V,n.directionalShadowMap[u]=O,n.directionalShadowMatrix[u]=C.shadow.matrix,x++}n.directional[u]=z,u++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(D).multiplyScalar(L),z.distance=k,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[g]=z;const X=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,X.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[g]=X.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=O,_++}g++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(D).multiplyScalar(L),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const X=C.shadow,V=t.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[b]=V,n.pointShadowMap[b]=O,n.pointShadowMatrix[b]=C.shadow.matrix,y++}n.point[b]=z,b++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(L),z.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[p]=z,p++}}m>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==u||w.pointLength!==b||w.spotLength!==g||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==x||w.numPointShadows!==y||w.numSpotShadows!==_||w.numSpotMaps!==M||w.numLightProbes!==S)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=m,n.point.length=b,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=S,w.directionalLength=u,w.pointLength=b,w.spotLength=g,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=x,w.numPointShadows=y,w.numSpotShadows=_,w.numSpotMaps=M,w.numLightProbes=S,n.version=Gx++)}function c(l,d){let h=0,f=0,u=0,b=0,g=0;const m=d.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=n.spot[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(y.isRectAreaLight){const _=n.rectArea[b];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),r.identity(),s.copy(y.matrixWorld),s.premultiply(m),r.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Id(a){const e=new Wx(a),t=[],n=[];function i(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function r(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:r}}function qx(a){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let o;return r===void 0?(o=new Id(a),e.set(i,[o])):s>=r.length?(o=new Id(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Xx extends un{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kx extends un{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zx(a,e,t){let n=new kr;const i=new Ee,s=new Ee,r=new qe,o=new Xx({depthPacking:Cu}),c=new Kx,l={},d=t.maxTextureSize,h={[pn]:Ft,[Ft]:pn,[dn]:dn},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Yx,fragmentShader:Jx}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const b=new zt;b.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ft(b,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let p=this.type;this.render=function(A,S,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=a.getRenderTarget(),v=a.getActiveCubeFace(),C=a.getActiveMipmapLevel(),D=a.state;D.setBlending(oi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=p!==In&&this.type===In,k=p===In&&this.type!==In;for(let O=0,z=A.length;O<z;O++){const X=A[O],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ee=V.getFrameExtents();if(i.multiply(ee),s.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/ee.x),i.x=s.x*ee.x,V.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/ee.y),i.y=s.y*ee.y,V.mapSize.y=s.y)),V.map===null||L===!0||k===!0){const ue=this.type!==In?{minFilter:Bt,magFilter:Bt}:{};V.map!==null&&V.map.dispose(),V.map=new Ci(i.x,i.y,ue),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}a.setRenderTarget(V.map),a.clear();const ie=V.getViewportCount();for(let ue=0;ue<ie;ue++){const we=V.getViewport(ue);r.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),D.viewport(r),V.updateMatrices(X,ue),n=V.getFrustum(),_(S,w,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===In&&x(V,w),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(E,v,C)};function x(A,S){const w=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ci(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(S,null,w,f,g,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(S,null,w,u,g,null)}function y(A,S,w,E){let v=null;const C=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)v=C;else if(v=w.isPointLight===!0?c:o,a.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const D=v.uuid,L=S.uuid;let k=l[D];k===void 0&&(k={},l[D]=k);let O=k[L];O===void 0&&(O=v.clone(),k[L]=O,S.addEventListener("dispose",M)),v=O}if(v.visible=S.visible,v.wireframe=S.wireframe,E===In?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:h[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,w.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=a.properties.get(v);D.light=w}return v}function _(A,S,w,E,v){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===In)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const L=e.update(A),k=A.material;if(Array.isArray(k)){const O=L.groups;for(let z=0,X=O.length;z<X;z++){const V=O[z],ee=k[V.materialIndex];if(ee&&ee.visible){const ie=y(A,ee,E,v);A.onBeforeShadow(a,A,S,w,L,ie,V),a.renderBufferDirect(w,null,L,ie,A,V),A.onAfterShadow(a,A,S,w,L,ie,V)}}}else if(k.visible){const O=y(A,k,E,v);A.onBeforeShadow(a,A,S,w,L,O,null),a.renderBufferDirect(w,null,L,O,A,null),A.onAfterShadow(a,A,S,w,L,O,null)}}const D=A.children;for(let L=0,k=D.length;L<k;L++)_(D[L],S,w,E,v)}function M(A){A.target.removeEventListener("dispose",M);for(const w in l){const E=l[w],v=A.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const Qx={[qo]:Xo,[Ko]:Zo,[Yo]:Qo,[ha]:Jo,[Xo]:qo,[Zo]:Ko,[Qo]:Yo,[Jo]:ha};function $x(a,e){function t(){let U=!1;const se=new qe;let W=null;const J=new qe(0,0,0,0);return{setMask:function(le){W!==le&&!U&&(a.colorMask(le,le,le,le),W=le)},setLocked:function(le){U=le},setClear:function(le,oe,Pe,ct,wt){wt===!0&&(le*=ct,oe*=ct,Pe*=ct),se.set(le,oe,Pe,ct),J.equals(se)===!1&&(a.clearColor(le,oe,Pe,ct),J.copy(se))},reset:function(){U=!1,W=null,J.set(-1,0,0,0)}}}function n(){let U=!1,se=!1,W=null,J=null,le=null;return{setReversed:function(oe){if(se!==oe){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);const ct=le;le=null,this.setClear(ct)}se=oe},getReversed:function(){return se},setTest:function(oe){oe?ae(a.DEPTH_TEST):Me(a.DEPTH_TEST)},setMask:function(oe){W!==oe&&!U&&(a.depthMask(oe),W=oe)},setFunc:function(oe){if(se&&(oe=Qx[oe]),J!==oe){switch(oe){case qo:a.depthFunc(a.NEVER);break;case Xo:a.depthFunc(a.ALWAYS);break;case Ko:a.depthFunc(a.LESS);break;case ha:a.depthFunc(a.LEQUAL);break;case Yo:a.depthFunc(a.EQUAL);break;case Jo:a.depthFunc(a.GEQUAL);break;case Zo:a.depthFunc(a.GREATER);break;case Qo:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}J=oe}},setLocked:function(oe){U=oe},setClear:function(oe){le!==oe&&(se&&(oe=1-oe),a.clearDepth(oe),le=oe)},reset:function(){U=!1,W=null,J=null,le=null,se=!1}}}function i(){let U=!1,se=null,W=null,J=null,le=null,oe=null,Pe=null,ct=null,wt=null;return{setTest:function(Ye){U||(Ye?ae(a.STENCIL_TEST):Me(a.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!U&&(a.stencilMask(Ye),se=Ye)},setFunc:function(Ye,an,Mn){(W!==Ye||J!==an||le!==Mn)&&(a.stencilFunc(Ye,an,Mn),W=Ye,J=an,le=Mn)},setOp:function(Ye,an,Mn){(oe!==Ye||Pe!==an||ct!==Mn)&&(a.stencilOp(Ye,an,Mn),oe=Ye,Pe=an,ct=Mn)},setLocked:function(Ye){U=Ye},setClear:function(Ye){wt!==Ye&&(a.clearStencil(Ye),wt=Ye)},reset:function(){U=!1,se=null,W=null,J=null,le=null,oe=null,Pe=null,ct=null,wt=null}}}const s=new t,r=new n,o=new i,c=new WeakMap,l=new WeakMap;let d={},h={},f=new WeakMap,u=[],b=null,g=!1,m=null,p=null,x=null,y=null,_=null,M=null,A=null,S=new Te(0,0,0),w=0,E=!1,v=null,C=null,D=null,L=null,k=null;const O=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const V=a.getParameter(a.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=X>=2);let ee=null,ie={};const ue=a.getParameter(a.SCISSOR_BOX),we=a.getParameter(a.VIEWPORT),Ve=new qe().fromArray(ue),q=new qe().fromArray(we);function Q(U,se,W,J){const le=new Uint8Array(4),oe=a.createTexture();a.bindTexture(U,oe),a.texParameteri(U,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(U,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<W;Pe++)U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY?a.texImage3D(se,0,a.RGBA,1,1,J,0,a.RGBA,a.UNSIGNED_BYTE,le):a.texImage2D(se+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,le);return oe}const pe={};pe[a.TEXTURE_2D]=Q(a.TEXTURE_2D,a.TEXTURE_2D,1),pe[a.TEXTURE_CUBE_MAP]=Q(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[a.TEXTURE_2D_ARRAY]=Q(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),pe[a.TEXTURE_3D]=Q(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ae(a.DEPTH_TEST),r.setFunc(ha),He(!1),ze(Il),ae(a.CULL_FACE),B(oi);function ae(U){d[U]!==!0&&(a.enable(U),d[U]=!0)}function Me(U){d[U]!==!1&&(a.disable(U),d[U]=!1)}function Ce(U,se){return h[U]!==se?(a.bindFramebuffer(U,se),h[U]=se,U===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=se),U===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=se),!0):!1}function Ne(U,se){let W=u,J=!1;if(U){W=f.get(se),W===void 0&&(W=[],f.set(se,W));const le=U.textures;if(W.length!==le.length||W[0]!==a.COLOR_ATTACHMENT0){for(let oe=0,Pe=le.length;oe<Pe;oe++)W[oe]=a.COLOR_ATTACHMENT0+oe;W.length=le.length,J=!0}}else W[0]!==a.BACK&&(W[0]=a.BACK,J=!0);J&&a.drawBuffers(W)}function tt(U){return b!==U?(a.useProgram(U),b=U,!0):!1}const Fe={[Ti]:a.FUNC_ADD,[$f]:a.FUNC_SUBTRACT,[eu]:a.FUNC_REVERSE_SUBTRACT};Fe[tu]=a.MIN,Fe[nu]=a.MAX;const dt={[iu]:a.ZERO,[au]:a.ONE,[su]:a.SRC_COLOR,[Vo]:a.SRC_ALPHA,[hu]:a.SRC_ALPHA_SATURATE,[lu]:a.DST_COLOR,[ou]:a.DST_ALPHA,[ru]:a.ONE_MINUS_SRC_COLOR,[Wo]:a.ONE_MINUS_SRC_ALPHA,[du]:a.ONE_MINUS_DST_COLOR,[cu]:a.ONE_MINUS_DST_ALPHA,[fu]:a.CONSTANT_COLOR,[uu]:a.ONE_MINUS_CONSTANT_COLOR,[pu]:a.CONSTANT_ALPHA,[mu]:a.ONE_MINUS_CONSTANT_ALPHA};function B(U,se,W,J,le,oe,Pe,ct,wt,Ye){if(U===oi){g===!0&&(Me(a.BLEND),g=!1);return}if(g===!1&&(ae(a.BLEND),g=!0),U!==Qf){if(U!==m||Ye!==E){if((p!==Ti||_!==Ti)&&(a.blendEquation(a.FUNC_ADD),p=Ti,_=Ti),Ye)switch(U){case oa:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Pl:a.blendFunc(a.ONE,a.ONE);break;case Dl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ll:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case oa:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Pl:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Dl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ll:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,y=null,M=null,A=null,S.set(0,0,0),w=0,m=U,E=Ye}return}le=le||se,oe=oe||W,Pe=Pe||J,(se!==p||le!==_)&&(a.blendEquationSeparate(Fe[se],Fe[le]),p=se,_=le),(W!==x||J!==y||oe!==M||Pe!==A)&&(a.blendFuncSeparate(dt[W],dt[J],dt[oe],dt[Pe]),x=W,y=J,M=oe,A=Pe),(ct.equals(S)===!1||wt!==w)&&(a.blendColor(ct.r,ct.g,ct.b,wt),S.copy(ct),w=wt),m=U,E=!1}function Zt(U,se){U.side===dn?Me(a.CULL_FACE):ae(a.CULL_FACE);let W=U.side===Ft;se&&(W=!W),He(W),U.blending===oa&&U.transparent===!1?B(oi):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(a.SAMPLE_ALPHA_TO_COVERAGE):Me(a.SAMPLE_ALPHA_TO_COVERAGE)}function He(U){v!==U&&(U?a.frontFace(a.CW):a.frontFace(a.CCW),v=U)}function ze(U){U!==Yf?(ae(a.CULL_FACE),U!==C&&(U===Il?a.cullFace(a.BACK):U===Jf?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Me(a.CULL_FACE),C=U}function Se(U){U!==D&&(z&&a.lineWidth(U),D=U)}function nt(U,se,W){U?(ae(a.POLYGON_OFFSET_FILL),(L!==se||k!==W)&&(a.polygonOffset(se,W),L=se,k=W)):Me(a.POLYGON_OFFSET_FILL)}function ve(U){U?ae(a.SCISSOR_TEST):Me(a.SCISSOR_TEST)}function I(U){U===void 0&&(U=a.TEXTURE0+O-1),ee!==U&&(a.activeTexture(U),ee=U)}function T(U,se,W){W===void 0&&(ee===null?W=a.TEXTURE0+O-1:W=ee);let J=ie[W];J===void 0&&(J={type:void 0,texture:void 0},ie[W]=J),(J.type!==U||J.texture!==se)&&(ee!==W&&(a.activeTexture(W),ee=W),a.bindTexture(U,se||pe[U]),J.type=U,J.texture=se)}function H(){const U=ie[ee];U!==void 0&&U.type!==void 0&&(a.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{a.compressedTexImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{a.compressedTexImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{a.texSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{a.texSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{a.texStorage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{a.texStorage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{a.texImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{a.texImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){Ve.equals(U)===!1&&(a.scissor(U.x,U.y,U.z,U.w),Ve.copy(U))}function fe(U){q.equals(U)===!1&&(a.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function je(U,se){let W=l.get(se);W===void 0&&(W=new WeakMap,l.set(se,W));let J=W.get(U);J===void 0&&(J=a.getUniformBlockIndex(se,U.name),W.set(U,J))}function ke(U,se){const J=l.get(se).get(U);c.get(se)!==J&&(a.uniformBlockBinding(se,J,U.__bindingPointIndex),c.set(se,J))}function $e(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},ee=null,ie={},h={},f=new WeakMap,u=[],b=null,g=!1,m=null,p=null,x=null,y=null,_=null,M=null,A=null,S=new Te(0,0,0),w=0,E=!1,v=null,C=null,D=null,L=null,k=null,Ve.set(0,0,a.canvas.width,a.canvas.height),q.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ae,disable:Me,bindFramebuffer:Ce,drawBuffers:Ne,useProgram:tt,setBlending:B,setMaterial:Zt,setFlipSided:He,setCullFace:ze,setLineWidth:Se,setPolygonOffset:nt,setScissorTest:ve,activeTexture:I,bindTexture:T,unbindTexture:H,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:he,texImage3D:Ae,updateUBOMapping:je,uniformBlockBinding:ke,texStorage2D:Ge,texStorage3D:$,texSubImage2D:K,texSubImage3D:xe,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Re,viewport:fe,reset:$e}}function Pd(a,e,t,n){const i=e_(n);switch(t){case tf:return a*e;case af:return a*e;case sf:return a*e*2;case el:return a*e/i.components*i.byteLength;case Dr:return a*e/i.components*i.byteLength;case rf:return a*e*2/i.components*i.byteLength;case tl:return a*e*2/i.components*i.byteLength;case nf:return a*e*3/i.components*i.byteLength;case Wt:return a*e*4/i.components*i.byteLength;case nl:return a*e*4/i.components*i.byteLength;case br:case gr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case xr:case _r:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case nc:case ac:return Math.max(a,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(a,8)*Math.max(e,8)/2;case sc:case rc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case uc:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case vc:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case yr:case Mc:case Sc:return Math.ceil(a/4)*Math.ceil(e/4)*16;case of:case Ec:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ac:case Tc:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e_(a){switch(a){case Hn:case Qh:return{byteLength:1,components:1};case ss:case $h:case hs:return{byteLength:2,components:1};case Qc:case $c:return{byteLength:2,components:4};case li:case Zc:case Jt:return{byteLength:4,components:1};case ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function t_(a,e,t,n,i,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,d=new WeakMap;let h;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,T){return u?new OffscreenCanvas(I,T):cs("canvas")}function g(I,T,H){let Y=1;const Z=ve(I);if((Z.width>H||Z.height>H)&&(Y=H/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const K=Math.floor(Y*Z.width),xe=Math.floor(Y*Z.height);h===void 0&&(h=b(K,xe));const re=T?b(K,xe):h;return re.width=K,re.height=xe,re.getContext("2d").drawImage(I,0,0,K,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+xe+")."),re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){a.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?a.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function y(I,T,H,Y,Z=!1){if(I!==null){if(a[I]!==void 0)return a[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=T;if(T===a.RED&&(H===a.FLOAT&&(K=a.R32F),H===a.HALF_FLOAT&&(K=a.R16F),H===a.UNSIGNED_BYTE&&(K=a.R8)),T===a.RED_INTEGER&&(H===a.UNSIGNED_BYTE&&(K=a.R8UI),H===a.UNSIGNED_SHORT&&(K=a.R16UI),H===a.UNSIGNED_INT&&(K=a.R32UI),H===a.BYTE&&(K=a.R8I),H===a.SHORT&&(K=a.R16I),H===a.INT&&(K=a.R32I)),T===a.RG&&(H===a.FLOAT&&(K=a.RG32F),H===a.HALF_FLOAT&&(K=a.RG16F),H===a.UNSIGNED_BYTE&&(K=a.RG8)),T===a.RG_INTEGER&&(H===a.UNSIGNED_BYTE&&(K=a.RG8UI),H===a.UNSIGNED_SHORT&&(K=a.RG16UI),H===a.UNSIGNED_INT&&(K=a.RG32UI),H===a.BYTE&&(K=a.RG8I),H===a.SHORT&&(K=a.RG16I),H===a.INT&&(K=a.RG32I)),T===a.RGB_INTEGER&&(H===a.UNSIGNED_BYTE&&(K=a.RGB8UI),H===a.UNSIGNED_SHORT&&(K=a.RGB16UI),H===a.UNSIGNED_INT&&(K=a.RGB32UI),H===a.BYTE&&(K=a.RGB8I),H===a.SHORT&&(K=a.RGB16I),H===a.INT&&(K=a.RGB32I)),T===a.RGBA_INTEGER&&(H===a.UNSIGNED_BYTE&&(K=a.RGBA8UI),H===a.UNSIGNED_SHORT&&(K=a.RGBA16UI),H===a.UNSIGNED_INT&&(K=a.RGBA32UI),H===a.BYTE&&(K=a.RGBA8I),H===a.SHORT&&(K=a.RGBA16I),H===a.INT&&(K=a.RGBA32I)),T===a.RGB&&H===a.UNSIGNED_INT_5_9_9_9_REV&&(K=a.RGB9_E5),T===a.RGBA){const xe=Z?Lr:Oe.getTransfer(Y);H===a.FLOAT&&(K=a.RGBA32F),H===a.HALF_FLOAT&&(K=a.RGBA16F),H===a.UNSIGNED_BYTE&&(K=xe===Qe?a.SRGB8_ALPHA8:a.RGBA8),H===a.UNSIGNED_SHORT_4_4_4_4&&(K=a.RGBA4),H===a.UNSIGNED_SHORT_5_5_5_1&&(K=a.RGB5_A1)}return(K===a.R16F||K===a.R32F||K===a.RG16F||K===a.RG32F||K===a.RGBA16F||K===a.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(I,T){let H;return I?T===null||T===li||T===ma?H=a.DEPTH24_STENCIL8:T===Jt?H=a.DEPTH32F_STENCIL8:T===ss&&(H=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===li||T===ma?H=a.DEPTH_COMPONENT24:T===Jt?H=a.DEPTH_COMPONENT32F:T===ss&&(H=a.DEPTH_COMPONENT16),H}function M(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Bt&&I.minFilter!==Yt?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function A(I){const T=I.target;T.removeEventListener("dispose",A),w(T),T.isVideoTexture&&d.delete(T)}function S(I){const T=I.target;T.removeEventListener("dispose",S),v(T)}function w(I){const T=n.get(I);if(T.__webglInit===void 0)return;const H=I.source,Y=f.get(H);if(Y){const Z=Y[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(I),Object.keys(Y).length===0&&f.delete(H)}n.remove(I)}function E(I){const T=n.get(I);a.deleteTexture(T.__webglTexture);const H=I.source,Y=f.get(H);delete Y[T.__cacheKey],r.memory.textures--}function v(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let Z=0;Z<T.__webglFramebuffer[Y].length;Z++)a.deleteFramebuffer(T.__webglFramebuffer[Y][Z]);else a.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)a.deleteFramebuffer(T.__webglFramebuffer[Y]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=I.textures;for(let Y=0,Z=H.length;Y<Z;Y++){const K=n.get(H[Y]);K.__webglTexture&&(a.deleteTexture(K.__webglTexture),r.memory.textures--),n.remove(H[Y])}n.remove(I)}let C=0;function D(){C=0}function L(){const I=C;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),C+=1,I}function k(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function O(I,T){const H=n.get(I);if(I.isVideoTexture&&Se(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){const Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,I,T);return}}t.bindTexture(a.TEXTURE_2D,H.__webglTexture,a.TEXTURE0+T)}function z(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){q(H,I,T);return}t.bindTexture(a.TEXTURE_2D_ARRAY,H.__webglTexture,a.TEXTURE0+T)}function X(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){q(H,I,T);return}t.bindTexture(a.TEXTURE_3D,H.__webglTexture,a.TEXTURE0+T)}function V(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){Q(H,I,T);return}t.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture,a.TEXTURE0+T)}const ee={[pa]:a.REPEAT,[ii]:a.CLAMP_TO_EDGE,[Er]:a.MIRRORED_REPEAT},ie={[Bt]:a.NEAREST,[Zh]:a.NEAREST_MIPMAP_NEAREST,[Za]:a.NEAREST_MIPMAP_LINEAR,[Yt]:a.LINEAR,[mr]:a.LINEAR_MIPMAP_NEAREST,[Un]:a.LINEAR_MIPMAP_LINEAR},ue={[Pu]:a.NEVER,[Fu]:a.ALWAYS,[Du]:a.LESS,[df]:a.LEQUAL,[Lu]:a.EQUAL,[Nu]:a.GEQUAL,[ku]:a.GREATER,[Uu]:a.NOTEQUAL};function we(I,T){if(T.type===Jt&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Yt||T.magFilter===mr||T.magFilter===Za||T.magFilter===Un||T.minFilter===Yt||T.minFilter===mr||T.minFilter===Za||T.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,ee[T.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,ee[T.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,ee[T.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,ie[T.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bt||T.minFilter!==Za&&T.minFilter!==Un||T.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");a.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ve(I,T){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",A));const Y=T.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const K=k(T);if(K!==I.__cacheKey){Z[K]===void 0&&(Z[K]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,H=!0),Z[K].usedTimes++;const xe=Z[I.__cacheKey];xe!==void 0&&(Z[I.__cacheKey].usedTimes--,xe.usedTimes===0&&E(T)),I.__cacheKey=K,I.__webglTexture=Z[K].texture}return H}function q(I,T,H){let Y=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=a.TEXTURE_3D);const Z=Ve(I,T),K=T.source;t.bindTexture(Y,I.__webglTexture,a.TEXTURE0+H);const xe=n.get(K);if(K.version!==xe.__version||Z===!0){t.activeTexture(a.TEXTURE0+H);const re=Oe.getPrimaries(Oe.workingColorSpace),de=T.colorSpace===ni?null:Oe.getPrimaries(T.colorSpace),Ge=T.colorSpace===ni||re===de?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let $=g(T.image,!1,i.maxTextureSize);$=nt(T,$);const he=s.convert(T.format,T.colorSpace),Ae=s.convert(T.type);let Re=y(T.internalFormat,he,Ae,T.colorSpace,T.isVideoTexture);we(Y,T);let fe;const je=T.mipmaps,ke=T.isVideoTexture!==!0,$e=xe.__version===void 0||Z===!0,U=K.dataReady,se=M(T,$);if(T.isDepthTexture)Re=_(T.format===ba,T.type),$e&&(ke?t.texStorage2D(a.TEXTURE_2D,1,Re,$.width,$.height):t.texImage2D(a.TEXTURE_2D,0,Re,$.width,$.height,0,he,Ae,null));else if(T.isDataTexture)if(je.length>0){ke&&$e&&t.texStorage2D(a.TEXTURE_2D,se,Re,je[0].width,je[0].height);for(let W=0,J=je.length;W<J;W++)fe=je[W],ke?U&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,fe.width,fe.height,he,Ae,fe.data):t.texImage2D(a.TEXTURE_2D,W,Re,fe.width,fe.height,0,he,Ae,fe.data);T.generateMipmaps=!1}else ke?($e&&t.texStorage2D(a.TEXTURE_2D,se,Re,$.width,$.height),U&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,$.width,$.height,he,Ae,$.data)):t.texImage2D(a.TEXTURE_2D,0,Re,$.width,$.height,0,he,Ae,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ke&&$e&&t.texStorage3D(a.TEXTURE_2D_ARRAY,se,Re,je[0].width,je[0].height,$.depth);for(let W=0,J=je.length;W<J;W++)if(fe=je[W],T.format!==Wt)if(he!==null)if(ke){if(U)if(T.layerUpdates.size>0){const le=Pd(fe.width,fe.height,T.format,T.type);for(const oe of T.layerUpdates){const Pe=fe.data.subarray(oe*le/fe.data.BYTES_PER_ELEMENT,(oe+1)*le/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,oe,fe.width,fe.height,1,he,Pe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,$.depth,he,fe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,W,Re,fe.width,fe.height,$.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?U&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,$.depth,he,Ae,fe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,W,Re,fe.width,fe.height,$.depth,0,he,Ae,fe.data)}else{ke&&$e&&t.texStorage2D(a.TEXTURE_2D,se,Re,je[0].width,je[0].height);for(let W=0,J=je.length;W<J;W++)fe=je[W],T.format!==Wt?he!==null?ke?U&&t.compressedTexSubImage2D(a.TEXTURE_2D,W,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(a.TEXTURE_2D,W,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?U&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,fe.width,fe.height,he,Ae,fe.data):t.texImage2D(a.TEXTURE_2D,W,Re,fe.width,fe.height,0,he,Ae,fe.data)}else if(T.isDataArrayTexture)if(ke){if($e&&t.texStorage3D(a.TEXTURE_2D_ARRAY,se,Re,$.width,$.height,$.depth),U)if(T.layerUpdates.size>0){const W=Pd($.width,$.height,T.format,T.type);for(const J of T.layerUpdates){const le=$.data.subarray(J*W/$.data.BYTES_PER_ELEMENT,(J+1)*W/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,J,$.width,$.height,1,he,Ae,le)}T.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,he,Ae,$.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Re,$.width,$.height,$.depth,0,he,Ae,$.data);else if(T.isData3DTexture)ke?($e&&t.texStorage3D(a.TEXTURE_3D,se,Re,$.width,$.height,$.depth),U&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,he,Ae,$.data)):t.texImage3D(a.TEXTURE_3D,0,Re,$.width,$.height,$.depth,0,he,Ae,$.data);else if(T.isFramebufferTexture){if($e)if(ke)t.texStorage2D(a.TEXTURE_2D,se,Re,$.width,$.height);else{let W=$.width,J=$.height;for(let le=0;le<se;le++)t.texImage2D(a.TEXTURE_2D,le,Re,W,J,0,he,Ae,null),W>>=1,J>>=1}}else if(je.length>0){if(ke&&$e){const W=ve(je[0]);t.texStorage2D(a.TEXTURE_2D,se,Re,W.width,W.height)}for(let W=0,J=je.length;W<J;W++)fe=je[W],ke?U&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,he,Ae,fe):t.texImage2D(a.TEXTURE_2D,W,Re,he,Ae,fe);T.generateMipmaps=!1}else if(ke){if($e){const W=ve($);t.texStorage2D(a.TEXTURE_2D,se,Re,W.width,W.height)}U&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,he,Ae,$)}else t.texImage2D(a.TEXTURE_2D,0,Re,he,Ae,$);m(T)&&p(Y),xe.__version=K.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Q(I,T,H){if(T.image.length!==6)return;const Y=Ve(I,T),Z=T.source;t.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+H);const K=n.get(Z);if(Z.version!==K.__version||Y===!0){t.activeTexture(a.TEXTURE0+H);const xe=Oe.getPrimaries(Oe.workingColorSpace),re=T.colorSpace===ni?null:Oe.getPrimaries(T.colorSpace),de=T.colorSpace===ni||xe===re?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ge=T.isCompressedTexture||T.image[0].isCompressedTexture,$=T.image[0]&&T.image[0].isDataTexture,he=[];for(let J=0;J<6;J++)!Ge&&!$?he[J]=g(T.image[J],!0,i.maxCubemapSize):he[J]=$?T.image[J].image:T.image[J],he[J]=nt(T,he[J]);const Ae=he[0],Re=s.convert(T.format,T.colorSpace),fe=s.convert(T.type),je=y(T.internalFormat,Re,fe,T.colorSpace),ke=T.isVideoTexture!==!0,$e=K.__version===void 0||Y===!0,U=Z.dataReady;let se=M(T,Ae);we(a.TEXTURE_CUBE_MAP,T);let W;if(Ge){ke&&$e&&t.texStorage2D(a.TEXTURE_CUBE_MAP,se,je,Ae.width,Ae.height);for(let J=0;J<6;J++){W=he[J].mipmaps;for(let le=0;le<W.length;le++){const oe=W[le];T.format!==Wt?Re!==null?ke?U&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,oe.width,oe.height,Re,oe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,je,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?U&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,oe.width,oe.height,Re,fe,oe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,je,oe.width,oe.height,0,Re,fe,oe.data)}}}else{if(W=T.mipmaps,ke&&$e){W.length>0&&se++;const J=ve(he[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,se,je,J.width,J.height)}for(let J=0;J<6;J++)if($){ke?U&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,he[J].width,he[J].height,Re,fe,he[J].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,he[J].width,he[J].height,0,Re,fe,he[J].data);for(let le=0;le<W.length;le++){const Pe=W[le].image[J].image;ke?U&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Pe.width,Pe.height,Re,fe,Pe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,je,Pe.width,Pe.height,0,Re,fe,Pe.data)}}else{ke?U&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,fe,he[J]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,Re,fe,he[J]);for(let le=0;le<W.length;le++){const oe=W[le];ke?U&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Re,fe,oe.image[J]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,je,Re,fe,oe.image[J])}}}m(T)&&p(a.TEXTURE_CUBE_MAP),K.__version=Z.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function pe(I,T,H,Y,Z,K){const xe=s.convert(H.format,H.colorSpace),re=s.convert(H.type),de=y(H.internalFormat,xe,re,H.colorSpace),Ge=n.get(T),$=n.get(H);if($.__renderTarget=T,!Ge.__hasExternalTextures){const he=Math.max(1,T.width>>K),Ae=Math.max(1,T.height>>K);Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,de,he,Ae,T.depth,0,xe,re,null):t.texImage2D(Z,K,de,he,Ae,0,xe,re,null)}t.bindFramebuffer(a.FRAMEBUFFER,I),ze(T)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Y,Z,$.__webglTexture,0,He(T)):(Z===a.TEXTURE_2D||Z>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Y,Z,$.__webglTexture,K),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ae(I,T,H){if(a.bindRenderbuffer(a.RENDERBUFFER,I),T.depthBuffer){const Y=T.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,K=_(T.stencilBuffer,Z),xe=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=He(T);ze(T)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,re,K,T.width,T.height):H?a.renderbufferStorageMultisample(a.RENDERBUFFER,re,K,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,K,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,xe,a.RENDERBUFFER,I)}else{const Y=T.textures;for(let Z=0;Z<Y.length;Z++){const K=Y[Z],xe=s.convert(K.format,K.colorSpace),re=s.convert(K.type),de=y(K.internalFormat,xe,re,K.colorSpace),Ge=He(T);H&&ze(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ge,de,T.width,T.height):ze(T)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ge,de,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,de,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Me(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(T.depthTexture);Y.__renderTarget=T,(!Y.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const Z=Y.__webglTexture,K=He(T);if(T.depthTexture.format===ca)ze(T)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0,K):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0);else if(T.depthTexture.format===ba)ze(T)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0,K):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ce(I){const T=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=Y}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Me(T.__webglFramebuffer,I)}else if(H){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=a.createRenderbuffer(),ae(T.__webglDepthbuffer[Y],I,!1);else{const Z=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[Y];a.bindRenderbuffer(a.RENDERBUFFER,K),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,K)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),ae(T.__webglDepthbuffer,I,!1);else{const Y=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Z),a.framebufferRenderbuffer(a.FRAMEBUFFER,Y,a.RENDERBUFFER,Z)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ne(I,T,H){const Y=n.get(I);T!==void 0&&pe(Y.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),H!==void 0&&Ce(I)}function tt(I){const T=I.texture,H=n.get(I),Y=n.get(T);I.addEventListener("dispose",S);const Z=I.textures,K=I.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=a.createTexture()),Y.__version=T.version,r.memory.textures++),K){H.__webglFramebuffer=[];for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[re]=[];for(let de=0;de<T.mipmaps.length;de++)H.__webglFramebuffer[re][de]=a.createFramebuffer()}else H.__webglFramebuffer[re]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let re=0;re<T.mipmaps.length;re++)H.__webglFramebuffer[re]=a.createFramebuffer()}else H.__webglFramebuffer=a.createFramebuffer();if(xe)for(let re=0,de=Z.length;re<de;re++){const Ge=n.get(Z[re]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=a.createTexture(),r.memory.textures++)}if(I.samples>0&&ze(I)===!1){H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const de=Z[re];H.__webglColorRenderbuffer[re]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,H.__webglColorRenderbuffer[re]);const Ge=s.convert(de.format,de.colorSpace),$=s.convert(de.type),he=y(de.internalFormat,Ge,$,de.colorSpace,I.isXRRenderTarget===!0),Ae=He(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ae,he,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+re,a.RENDERBUFFER,H.__webglColorRenderbuffer[re])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),ae(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(K){t.bindTexture(a.TEXTURE_CUBE_MAP,Y.__webglTexture),we(a.TEXTURE_CUBE_MAP,T);for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)pe(H.__webglFramebuffer[re][de],I,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+re,de);else pe(H.__webglFramebuffer[re],I,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(T)&&p(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let re=0,de=Z.length;re<de;re++){const Ge=Z[re],$=n.get(Ge);t.bindTexture(a.TEXTURE_2D,$.__webglTexture),we(a.TEXTURE_2D,Ge),pe(H.__webglFramebuffer,I,Ge,a.COLOR_ATTACHMENT0+re,a.TEXTURE_2D,0),m(Ge)&&p(a.TEXTURE_2D)}t.unbindTexture()}else{let re=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(re=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),we(re,T),T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)pe(H.__webglFramebuffer[de],I,T,a.COLOR_ATTACHMENT0,re,de);else pe(H.__webglFramebuffer,I,T,a.COLOR_ATTACHMENT0,re,0);m(T)&&p(re),t.unbindTexture()}I.depthBuffer&&Ce(I)}function Fe(I){const T=I.textures;for(let H=0,Y=T.length;H<Y;H++){const Z=T[H];if(m(Z)){const K=x(I),xe=n.get(Z).__webglTexture;t.bindTexture(K,xe),p(K),t.unbindTexture()}}}const dt=[],B=[];function Zt(I){if(I.samples>0){if(ze(I)===!1){const T=I.textures,H=I.width,Y=I.height;let Z=a.COLOR_BUFFER_BIT;const K=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xe=n.get(I),re=T.length>1;if(re)for(let de=0;de<T.length;de++)t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<T.length;de++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=a.STENCIL_BUFFER_BIT)),re){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const Ge=n.get(T[de]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,H,Y,0,0,H,Y,Z,a.NEAREST),c===!0&&(dt.length=0,B.length=0,dt.push(a.COLOR_ATTACHMENT0+de),I.depthBuffer&&I.resolveDepthBuffer===!1&&(dt.push(K),B.push(K),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,B)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),re)for(let de=0;de<T.length;de++){t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const Ge=n.get(T[de]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.TEXTURE_2D,Ge,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const T=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function He(I){return Math.min(i.maxSamples,I.samples)}function ze(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Se(I){const T=r.render.frame;d.get(I)!==T&&(d.set(I,T),I.update())}function nt(I,T){const H=I.colorSpace,Y=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Ht&&H!==ni&&(Oe.getTransfer(H)===Qe?(Y!==Wt||Z!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function ve(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ze}function n_(a,e){function t(n,i=ni){let s;const r=Oe.getTransfer(i);if(n===Hn)return a.UNSIGNED_BYTE;if(n===Qc)return a.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return a.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return a.BYTE;if(n===$h)return a.SHORT;if(n===ss)return a.UNSIGNED_SHORT;if(n===Zc)return a.INT;if(n===li)return a.UNSIGNED_INT;if(n===Jt)return a.FLOAT;if(n===hs)return a.HALF_FLOAT;if(n===tf)return a.ALPHA;if(n===nf)return a.RGB;if(n===Wt)return a.RGBA;if(n===af)return a.LUMINANCE;if(n===sf)return a.LUMINANCE_ALPHA;if(n===ca)return a.DEPTH_COMPONENT;if(n===ba)return a.DEPTH_STENCIL;if(n===el)return a.RED;if(n===Dr)return a.RED_INTEGER;if(n===rf)return a.RG;if(n===tl)return a.RG_INTEGER;if(n===nl)return a.RGBA_INTEGER;if(n===br||n===gr||n===xr||n===_r)if(r===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===nc||n===ic||n===ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sc||n===rc)return r===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cc||n===lc||n===dc||n===hc||n===fc||n===uc||n===pc||n===mc||n===bc||n===gc||n===xc||n===_c||n===yc||n===vc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===Mc||n===Sc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yr)return r===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===of||n===Ec||n===Ac||n===Tc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ma?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}class i_ extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fn extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a_={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),u=.02,b=.005;l.inputState.pinching&&f>u+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zn({vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c_ extends Sa{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",c=1,l=null,d=null,h=null,f=null,u=null,b=null;const g=new o_,m=t.getContextAttributes();let p=null,x=null;const y=[],_=[],M=new Ee;let A=null;const S=new Ut;S.viewport=new qe;const w=new Ut;w.viewport=new qe;const E=[S,w],v=new i_;let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=y[q];return Q===void 0&&(Q=new bo,y[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=y[q];return Q===void 0&&(Q=new bo,y[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=y[q];return Q===void 0&&(Q=new bo,y[q]=Q),Q.getHandSpace()};function L(q){const Q=_.indexOf(q.inputSource);if(Q===-1)return;const pe=y[Q];pe!==void 0&&(pe.update(q.inputSource,q.frame,l||r),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",O);for(let q=0;q<y.length;q++){const Q=_[q];Q!==null&&(_[q]=null,y[q].disconnect(Q))}C=null,D=null,g.reset(),e.setRenderTarget(p),u=null,f=null,h=null,i=null,x=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",k),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Ci(u.framebufferWidth,u.framebufferHeight,{format:Wt,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,pe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?ba:ca,pe=m.stencil?ma:li);const Me={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Me),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ci(f.textureWidth,f.textureHeight,{format:Wt,type:Hn,depthTexture:new vf(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(q){for(let Q=0;Q<q.removed.length;Q++){const pe=q.removed[Q],ae=_.indexOf(pe);ae>=0&&(_[ae]=null,y[ae].disconnect(pe))}for(let Q=0;Q<q.added.length;Q++){const pe=q.added[Q];let ae=_.indexOf(pe);if(ae===-1){for(let Ce=0;Ce<y.length;Ce++)if(Ce>=_.length){_.push(pe),ae=Ce;break}else if(_[Ce]===null){_[Ce]=pe,ae=Ce;break}if(ae===-1)break}const Me=y[ae];Me&&Me.connect(pe)}}const z=new P,X=new P;function V(q,Q,pe){z.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(pe.matrixWorld);const ae=z.distanceTo(X),Me=Q.projectionMatrix.elements,Ce=pe.projectionMatrix.elements,Ne=Me[14]/(Me[10]-1),tt=Me[14]/(Me[10]+1),Fe=(Me[9]+1)/Me[5],dt=(Me[9]-1)/Me[5],B=(Me[8]-1)/Me[0],Zt=(Ce[8]+1)/Ce[0],He=Ne*B,ze=Ne*Zt,Se=ae/(-B+Zt),nt=Se*-B;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(nt),q.translateZ(Se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Me[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ve=Ne+Se,I=tt+Se,T=He-nt,H=ze+(ae-nt),Y=Fe*tt/I*ve,Z=dt*tt/I*ve;q.projectionMatrix.makePerspective(T,H,Y,Z,ve,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,pe=q.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),v.near=w.near=S.near=Q,v.far=w.far=S.far=pe,(C!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,D=v.far),S.layers.mask=q.layers.mask|2,w.layers.mask=q.layers.mask|4,v.layers.mask=S.layers.mask|w.layers.mask;const ae=q.parent,Me=v.cameras;ee(v,ae);for(let Ce=0;Ce<Me.length;Ce++)ee(Me[Ce],ae);Me.length===2?V(v,S,w):v.projectionMatrix.copy(S.projectionMatrix),ie(q,v,ae)};function ie(q,Q,pe){pe===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ga*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ue=null;function we(q,Q){if(d=Q.getViewerPose(l||r),b=Q,d!==null){const pe=d.views;u!==null&&(e.setRenderTargetFramebuffer(x,u.framebuffer),e.setRenderTarget(x));let ae=!1;pe.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let Ce=0;Ce<pe.length;Ce++){const Ne=pe[Ce];let tt=null;if(u!==null)tt=u.getViewport(Ne);else{const dt=h.getViewSubImage(f,Ne);tt=dt.viewport,Ce===0&&(e.setRenderTargetTextures(x,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(x))}let Fe=E[Ce];Fe===void 0&&(Fe=new Ut,Fe.layers.enable(Ce),Fe.viewport=new qe,E[Ce]=Fe),Fe.matrix.fromArray(Ne.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ne.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(tt.x,tt.y,tt.width,tt.height),Ce===0&&(v.matrix.copy(Fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(Fe)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Ce=h.getDepthInformation(pe[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(e,Ce,i.renderState)}}for(let pe=0;pe<y.length;pe++){const ae=_[pe],Me=y[pe];ae!==null&&Me!==void 0&&Me.update(ae,Q,l||r)}ue&&ue(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),b=null}const Ve=new yf;Ve.setAnimationLoop(we),this.setAnimationLoop=function(q){ue=q},this.dispose=function(){}}}const xi=new _n,l_=new ye;function d_(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gf(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),b(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,_=x.envMapRotation;y&&(m.envMap.value=y,xi.copy(_),xi.x*=-1,xi.y*=-1,xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(l_.makeRotationFromEuler(xi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function h_(a,e,t,n){let i={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function l(x,y){let _=i[x.id];_===void 0&&(b(x),_=d(x),i[x.id]=_,x.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(x,M);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function d(x){const y=h();x.__bindingPointIndex=y;const _=a.createBuffer(),M=x.__size,A=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,_),a.bufferData(a.UNIFORM_BUFFER,M,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,_),_}function h(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],_=x.uniforms,M=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let A=0,S=_.length;A<S;A++){const w=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,v=w.length;E<v;E++){const C=w[E];if(u(C,A,E,M)===!0){const D=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let O=0;O<L.length;O++){const z=L[O],X=g(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,D+k,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,D,C.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function u(x,y,_,M){const A=x.value,S=y+"_"+_;if(M[S]===void 0)return typeof A=="number"||typeof A=="boolean"?M[S]=A:M[S]=A.clone(),!0;{const w=M[S];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return M[S]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function b(x){const y=x.uniforms;let _=0;const M=16;for(let S=0,w=y.length;S<w;S++){const E=Array.isArray(y[S])?y[S]:[y[S]];for(let v=0,C=E.length;v<C;v++){const D=E[v],L=Array.isArray(D.value)?D.value:[D.value];for(let k=0,O=L.length;k<O;k++){const z=L[k],X=g(z),V=_%M,ee=V%X.boundary,ie=V+ee;_+=ee,ie!==0&&M-ie<X.storage&&(_+=M-ie),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=X.storage}}}const A=_%M;return A>0&&(_+=M-A),x.__size=_,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)a.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:c,update:l,dispose:p}}class f_{constructor(e={}){const{canvas:t=ep(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const b=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this.toneMapping=ci,this.toneMappingExposure=1;const _=this;let M=!1,A=0,S=0,w=null,E=-1,v=null;const C=new qe,D=new qe;let L=null;const k=new Te(0);let O=0,z=t.width,X=t.height,V=1,ee=null,ie=null;const ue=new qe(0,0,z,X),we=new qe(0,0,z,X);let Ve=!1;const q=new kr;let Q=!1,pe=!1;const ae=new ye,Me=new ye,Ce=new P,Ne=new qe,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function dt(){return w===null?V:1}let B=n;function Zt(R,N){return t.getContext(R,N)}try{const R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ds}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",oe,!1),B===null){const N="webgl2";if(B=Zt(N,R),B===null)throw Zt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let He,ze,Se,nt,ve,I,T,H,Y,Z,K,xe,re,de,Ge,$,he,Ae,Re,fe,je,ke,$e,U;function se(){He=new gg(B),He.init(),ke=new n_(B,He),ze=new hg(B,He,e,ke),Se=new $x(B,He),ze.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),nt=new yg(B),ve=new Bx,I=new t_(B,He,Se,ve,ze,ke,nt),T=new ug(_),H=new bg(_),Y=new wp(B),$e=new lg(B,Y),Z=new xg(B,Y,nt,$e),K=new Mg(B,Z,Y,nt),Re=new vg(B,ze,I),$=new fg(ve),xe=new Fx(_,T,H,He,ze,$e,$),re=new d_(_,ve),de=new Hx,Ge=new qx(He),Ae=new cg(_,T,H,Se,K,u,c),he=new Zx(_,K,ze),U=new h_(B,nt,ze,Se),fe=new dg(B,He,nt),je=new _g(B,He,nt),nt.programs=xe.programs,_.capabilities=ze,_.extensions=He,_.properties=ve,_.renderLists=de,_.shadowMap=he,_.state=Se,_.info=nt}se();const W=new c_(_,B);this.xr=W,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=He.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=He.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(z,X,!1))},this.getSize=function(R){return R.set(z,X)},this.setSize=function(R,N,j=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,X=N,t.width=Math.floor(R*V),t.height=Math.floor(N*V),j===!0&&(t.style.width=R+"px",t.style.height=N+"px"),this.setViewport(0,0,R,N)},this.getDrawingBufferSize=function(R){return R.set(z*V,X*V).floor()},this.setDrawingBufferSize=function(R,N,j){z=R,X=N,V=j,t.width=Math.floor(R*j),t.height=Math.floor(N*j),this.setViewport(0,0,R,N)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(ue)},this.setViewport=function(R,N,j,G){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,N,j,G),Se.viewport(C.copy(ue).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(we)},this.setScissor=function(R,N,j,G){R.isVector4?we.set(R.x,R.y,R.z,R.w):we.set(R,N,j,G),Se.scissor(D.copy(we).multiplyScalar(V).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(R){Se.setScissorTest(Ve=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(R=!0,N=!0,j=!0){let G=0;if(R){let F=!1;if(w!==null){const te=w.texture.format;F=te===nl||te===tl||te===Dr}if(F){const te=w.texture.type,ce=te===Hn||te===li||te===ss||te===ma||te===Qc||te===$c,me=Ae.getClearColor(),be=Ae.getClearAlpha(),Ie=me.r,De=me.g,ge=me.b;ce?(b[0]=Ie,b[1]=De,b[2]=ge,b[3]=be,B.clearBufferuiv(B.COLOR,0,b)):(g[0]=Ie,g[1]=De,g[2]=ge,g[3]=be,B.clearBufferiv(B.COLOR,0,g))}else G|=B.COLOR_BUFFER_BIT}N&&(G|=B.DEPTH_BUFFER_BIT),j&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),Ge.dispose(),ve.dispose(),T.dispose(),H.dispose(),K.dispose(),$e.dispose(),U.dispose(),xe.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ml),W.removeEventListener("sessionend",Sl),fi.stop()};function J(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=nt.autoReset,N=he.enabled,j=he.autoUpdate,G=he.needsUpdate,F=he.type;se(),nt.autoReset=R,he.enabled=N,he.autoUpdate=j,he.needsUpdate=G,he.type=F}function oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Pe(R){const N=R.target;N.removeEventListener("dispose",Pe),ct(N)}function ct(R){wt(R),ve.remove(R)}function wt(R){const N=ve.get(R).programs;N!==void 0&&(N.forEach(function(j){xe.releaseProgram(j)}),R.isShaderMaterial&&xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,N,j,G,F,te){N===null&&(N=tt);const ce=F.isMesh&&F.matrixWorld.determinant()<0,me=qf(R,N,j,G,F);Se.setMaterial(G,ce);let be=j.index,Ie=1;if(G.wireframe===!0){if(be=Z.getWireframeAttribute(j),be===void 0)return;Ie=2}const De=j.drawRange,ge=j.attributes.position;let We=De.start*Ie,et=(De.start+De.count)*Ie;te!==null&&(We=Math.max(We,te.start*Ie),et=Math.min(et,(te.start+te.count)*Ie)),be!==null?(We=Math.max(We,0),et=Math.min(et,be.count)):ge!=null&&(We=Math.max(We,0),et=Math.min(et,ge.count));const it=et-We;if(it<0||it===1/0)return;$e.setup(F,G,me,j,be);let Gt,Xe=fe;if(be!==null&&(Gt=Y.get(be),Xe=je,Xe.setIndex(Gt)),F.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*dt()),Xe.setMode(B.LINES)):Xe.setMode(B.TRIANGLES);else if(F.isLine){let _e=G.linewidth;_e===void 0&&(_e=1),Se.setLineWidth(_e*dt()),F.isLineSegments?Xe.setMode(B.LINES):F.isLineLoop?Xe.setMode(B.LINE_LOOP):Xe.setMode(B.LINE_STRIP)}else F.isPoints?Xe.setMode(B.POINTS):F.isSprite&&Xe.setMode(B.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Xe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Xe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const _e=F._multiDrawStarts,Sn=F._multiDrawCounts,Ke=F._multiDrawCount,sn=be?Y.get(be).bytesPerElement:1,Ii=ve.get(G).currentProgram.getUniforms();for(let qt=0;qt<Ke;qt++)Ii.setValue(B,"_gl_DrawID",qt),Xe.render(_e[qt]/sn,Sn[qt])}else if(F.isInstancedMesh)Xe.renderInstances(We,it,F.count);else if(j.isInstancedBufferGeometry){const _e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Sn=Math.min(j.instanceCount,_e);Xe.renderInstances(We,it,Sn)}else Xe.render(We,it)};function Ye(R,N,j){R.transparent===!0&&R.side===dn&&R.forceSinglePass===!1?(R.side=Ft,R.needsUpdate=!0,xs(R,N,j),R.side=pn,R.needsUpdate=!0,xs(R,N,j),R.side=dn):xs(R,N,j)}this.compile=function(R,N,j=null){j===null&&(j=R),p=Ge.get(j),p.init(N),y.push(p),j.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),R!==j&&R.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return R.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){const me=te[ce];Ye(me,j,F),G.add(me)}else Ye(te,j,F),G.add(te)}),y.pop(),p=null,G},this.compileAsync=function(R,N,j=null){const G=this.compile(R,N,j);return new Promise(F=>{function te(){if(G.forEach(function(ce){ve.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){F(R);return}setTimeout(te,10)}He.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let an=null;function Mn(R){an&&an(R)}function Ml(){fi.stop()}function Sl(){fi.start()}const fi=new yf;fi.setAnimationLoop(Mn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(R){an=R,W.setAnimationLoop(R),R===null?fi.stop():fi.start()},W.addEventListener("sessionstart",Ml),W.addEventListener("sessionend",Sl),this.render=function(R,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,N,w),p=Ge.get(R,y.length),p.init(N),y.push(p),Me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Me),pe=this.localClippingEnabled,Q=$.init(this.clippingPlanes,pe),m=de.get(R,x.length),m.init(),x.push(m),W.enabled===!0&&W.isPresenting===!0){const te=_.xr.getDepthSensingMesh();te!==null&&zr(te,N,-1/0,_.sortObjects)}zr(R,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ee,ie),Fe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Fe&&Ae.addToRenderList(m,R),this.info.render.frame++,Q===!0&&$.beginShadows();const j=p.state.shadowsArray;he.render(j,R,N),Q===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const te=N.cameras;if(F.length>0)for(let ce=0,me=te.length;ce<me;ce++){const be=te[ce];Al(G,F,R,be)}Fe&&Ae.render(R);for(let ce=0,me=te.length;ce<me;ce++){const be=te[ce];El(m,R,be,be.viewport)}}else F.length>0&&Al(G,F,R,N),Fe&&Ae.render(R),El(m,R,N);w!==null&&(I.updateMultisampleRenderTarget(w),I.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(_,R,N),$e.resetDefaultState(),E=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],Q===!0&&$.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function zr(R,N,j,G){if(R.visible===!1)return;if(R.layers.test(N.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(N);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){G&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Me);const ce=K.update(R),me=R.material;me.visible&&m.push(R,ce,me,j,Ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const ce=K.update(R),me=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ne.copy(ce.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(Me)),Array.isArray(me)){const be=ce.groups;for(let Ie=0,De=be.length;Ie<De;Ie++){const ge=be[Ie],We=me[ge.materialIndex];We&&We.visible&&m.push(R,ce,We,j,Ne.z,ge)}}else me.visible&&m.push(R,ce,me,j,Ne.z,null)}}const te=R.children;for(let ce=0,me=te.length;ce<me;ce++)zr(te[ce],N,j,G)}function El(R,N,j,G){const F=R.opaque,te=R.transmissive,ce=R.transparent;p.setupLightsView(j),Q===!0&&$.setGlobalState(_.clippingPlanes,j),G&&Se.viewport(C.copy(G)),F.length>0&&gs(F,N,j),te.length>0&&gs(te,N,j),ce.length>0&&gs(ce,N,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Al(R,N,j,G){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Ci(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?hs:Hn,minFilter:Un,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const te=p.state.transmissionRenderTarget[G.id],ce=G.viewport||C;te.setSize(ce.z,ce.w);const me=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(k),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Fe&&Ae.render(j);const be=_.toneMapping;_.toneMapping=ci;const Ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Q===!0&&$.setGlobalState(_.clippingPlanes,G),gs(R,j,G),I.updateMultisampleRenderTarget(te),I.updateRenderTargetMipmap(te),He.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ge=0,We=N.length;ge<We;ge++){const et=N[ge],it=et.object,Gt=et.geometry,Xe=et.material,_e=et.group;if(Xe.side===dn&&it.layers.test(G.layers)){const Sn=Xe.side;Xe.side=Ft,Xe.needsUpdate=!0,Tl(it,j,G,Gt,Xe,_e),Xe.side=Sn,Xe.needsUpdate=!0,De=!0}}De===!0&&(I.updateMultisampleRenderTarget(te),I.updateRenderTargetMipmap(te))}_.setRenderTarget(me),_.setClearColor(k,O),Ie!==void 0&&(G.viewport=Ie),_.toneMapping=be}function gs(R,N,j){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,te=R.length;F<te;F++){const ce=R[F],me=ce.object,be=ce.geometry,Ie=G===null?ce.material:G,De=ce.group;me.layers.test(j.layers)&&Tl(me,N,j,be,Ie,De)}}function Tl(R,N,j,G,F,te){R.onBeforeRender(_,N,j,G,F,te),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),F.onBeforeRender(_,N,j,G,R,te),F.transparent===!0&&F.side===dn&&F.forceSinglePass===!1?(F.side=Ft,F.needsUpdate=!0,_.renderBufferDirect(j,N,G,F,R,te),F.side=pn,F.needsUpdate=!0,_.renderBufferDirect(j,N,G,F,R,te),F.side=dn):_.renderBufferDirect(j,N,G,F,R,te),R.onAfterRender(_,N,j,G,F,te)}function xs(R,N,j){N.isScene!==!0&&(N=tt);const G=ve.get(R),F=p.state.lights,te=p.state.shadowsArray,ce=F.state.version,me=xe.getParameters(R,F.state,te,N,j),be=xe.getProgramCacheKey(me);let Ie=G.programs;G.environment=R.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(R.isMeshStandardMaterial?H:T).get(R.envMap||G.environment),G.envMapRotation=G.environment!==null&&R.envMap===null?N.environmentRotation:R.envMapRotation,Ie===void 0&&(R.addEventListener("dispose",Pe),Ie=new Map,G.programs=Ie);let De=Ie.get(be);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===ce)return Rl(R,me),De}else me.uniforms=xe.getUniforms(R),R.onBeforeCompile(me,_),De=xe.acquireProgram(me,be),Ie.set(be,De),G.uniforms=me.uniforms;const ge=G.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ge.clippingPlanes=$.uniform),Rl(R,me),G.needsLights=Kf(R),G.lightsStateVersion=ce,G.needsLights&&(ge.ambientLightColor.value=F.state.ambient,ge.lightProbe.value=F.state.probe,ge.directionalLights.value=F.state.directional,ge.directionalLightShadows.value=F.state.directionalShadow,ge.spotLights.value=F.state.spot,ge.spotLightShadows.value=F.state.spotShadow,ge.rectAreaLights.value=F.state.rectArea,ge.ltc_1.value=F.state.rectAreaLTC1,ge.ltc_2.value=F.state.rectAreaLTC2,ge.pointLights.value=F.state.point,ge.pointLightShadows.value=F.state.pointShadow,ge.hemisphereLights.value=F.state.hemi,ge.directionalShadowMap.value=F.state.directionalShadowMap,ge.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ge.spotShadowMap.value=F.state.spotShadowMap,ge.spotLightMatrix.value=F.state.spotLightMatrix,ge.spotLightMap.value=F.state.spotLightMap,ge.pointShadowMap.value=F.state.pointShadowMap,ge.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function wl(R){if(R.uniformsList===null){const N=R.currentProgram.getUniforms();R.uniformsList=vr.seqWithValue(N.seq,R.uniforms)}return R.uniformsList}function Rl(R,N){const j=ve.get(R);j.outputColorSpace=N.outputColorSpace,j.batching=N.batching,j.batchingColor=N.batchingColor,j.instancing=N.instancing,j.instancingColor=N.instancingColor,j.instancingMorph=N.instancingMorph,j.skinning=N.skinning,j.morphTargets=N.morphTargets,j.morphNormals=N.morphNormals,j.morphColors=N.morphColors,j.morphTargetsCount=N.morphTargetsCount,j.numClippingPlanes=N.numClippingPlanes,j.numIntersection=N.numClipIntersection,j.vertexAlphas=N.vertexAlphas,j.vertexTangents=N.vertexTangents,j.toneMapping=N.toneMapping}function qf(R,N,j,G,F){N.isScene!==!0&&(N=tt),I.resetTextureUnits();const te=N.fog,ce=G.isMeshStandardMaterial?N.environment:null,me=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ht,be=(G.isMeshStandardMaterial?H:T).get(G.envMap||ce),Ie=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,De=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ge=!!j.morphAttributes.position,We=!!j.morphAttributes.normal,et=!!j.morphAttributes.color;let it=ci;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(it=_.toneMapping);const Gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Xe=Gt!==void 0?Gt.length:0,_e=ve.get(G),Sn=p.state.lights;if(Q===!0&&(pe===!0||R!==v)){const Qt=R===v&&G.id===E;$.setState(G,R,Qt)}let Ke=!1;G.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Sn.state.version||_e.outputColorSpace!==me||F.isBatchedMesh&&_e.batching===!1||!F.isBatchedMesh&&_e.batching===!0||F.isBatchedMesh&&_e.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&_e.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&_e.instancing===!1||!F.isInstancedMesh&&_e.instancing===!0||F.isSkinnedMesh&&_e.skinning===!1||!F.isSkinnedMesh&&_e.skinning===!0||F.isInstancedMesh&&_e.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&_e.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&_e.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&_e.instancingMorph===!1&&F.morphTexture!==null||_e.envMap!==be||G.fog===!0&&_e.fog!==te||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==$.numPlanes||_e.numIntersection!==$.numIntersection)||_e.vertexAlphas!==Ie||_e.vertexTangents!==De||_e.morphTargets!==ge||_e.morphNormals!==We||_e.morphColors!==et||_e.toneMapping!==it||_e.morphTargetsCount!==Xe)&&(Ke=!0):(Ke=!0,_e.__version=G.version);let sn=_e.currentProgram;Ke===!0&&(sn=xs(G,N,F));let Ii=!1,qt=!1,Ca=!1;const at=sn.getUniforms(),bn=_e.uniforms;if(Se.useProgram(sn.program)&&(Ii=!0,qt=!0,Ca=!0),G.id!==E&&(E=G.id,qt=!0),Ii||v!==R){Se.buffers.depth.getReversed()?(ae.copy(R.projectionMatrix),np(ae),ip(ae),at.setValue(B,"projectionMatrix",ae)):at.setValue(B,"projectionMatrix",R.projectionMatrix),at.setValue(B,"viewMatrix",R.matrixWorldInverse);const Vn=at.map.cameraPosition;Vn!==void 0&&Vn.setValue(B,Ce.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&at.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&at.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,qt=!0,Ca=!0)}if(F.isSkinnedMesh){at.setOptional(B,F,"bindMatrix"),at.setOptional(B,F,"bindMatrixInverse");const Qt=F.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),at.setValue(B,"boneTexture",Qt.boneTexture,I))}F.isBatchedMesh&&(at.setOptional(B,F,"batchingTexture"),at.setValue(B,"batchingTexture",F._matricesTexture,I),at.setOptional(B,F,"batchingIdTexture"),at.setValue(B,"batchingIdTexture",F._indirectTexture,I),at.setOptional(B,F,"batchingColorTexture"),F._colorsTexture!==null&&at.setValue(B,"batchingColorTexture",F._colorsTexture,I));const Ia=j.morphAttributes;if((Ia.position!==void 0||Ia.normal!==void 0||Ia.color!==void 0)&&Re.update(F,j,sn),(qt||_e.receiveShadow!==F.receiveShadow)&&(_e.receiveShadow=F.receiveShadow,at.setValue(B,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(bn.envMap.value=be,bn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(bn.envMapIntensity.value=N.environmentIntensity),qt&&(at.setValue(B,"toneMappingExposure",_.toneMappingExposure),_e.needsLights&&Xf(bn,Ca),te&&G.fog===!0&&re.refreshFogUniforms(bn,te),re.refreshMaterialUniforms(bn,G,V,X,p.state.transmissionRenderTarget[R.id]),vr.upload(B,wl(_e),bn,I)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(vr.upload(B,wl(_e),bn,I),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&at.setValue(B,"center",F.center),at.setValue(B,"modelViewMatrix",F.modelViewMatrix),at.setValue(B,"normalMatrix",F.normalMatrix),at.setValue(B,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Qt=G.uniformsGroups;for(let Vn=0,Wn=Qt.length;Vn<Wn;Vn++){const Cl=Qt[Vn];U.update(Cl,sn),U.bind(Cl,sn)}}return sn}function Xf(R,N){R.ambientLightColor.needsUpdate=N,R.lightProbe.needsUpdate=N,R.directionalLights.needsUpdate=N,R.directionalLightShadows.needsUpdate=N,R.pointLights.needsUpdate=N,R.pointLightShadows.needsUpdate=N,R.spotLights.needsUpdate=N,R.spotLightShadows.needsUpdate=N,R.rectAreaLights.needsUpdate=N,R.hemisphereLights.needsUpdate=N}function Kf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,N,j){ve.get(R.texture).__webglTexture=N,ve.get(R.depthTexture).__webglTexture=j;const G=ve.get(R);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=j===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,N){const j=ve.get(R);j.__webglFramebuffer=N,j.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(R,N=0,j=0){w=R,A=N,S=j;let G=!0,F=null,te=!1,ce=!1;if(R){const be=ve.get(R);if(be.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(B.FRAMEBUFFER,null),G=!1;else if(be.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(be.__hasExternalTextures)I.rebindTextures(R,ve.get(R.texture).__webglTexture,ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ge=R.depthTexture;if(be.__boundDepthTexture!==ge){if(ge!==null&&ve.has(ge)&&(R.width!==ge.image.width||R.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ce=!0);const De=ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(De[N])?F=De[N][j]:F=De[N],te=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?F=ve.get(R).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[j]:F=De,C.copy(R.viewport),D.copy(R.scissor),L=R.scissorTest}else C.copy(ue).multiplyScalar(V).floor(),D.copy(we).multiplyScalar(V).floor(),L=Ve;if(Se.bindFramebuffer(B.FRAMEBUFFER,F)&&G&&Se.drawBuffers(R,F),Se.viewport(C),Se.scissor(D),Se.setScissorTest(L),te){const be=ve.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,j)}else if(ce){const be=ve.get(R.texture),Ie=N||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,be.__webglTexture,j||0,Ie)}E=-1},this.readRenderTargetPixels=function(R,N,j,G,F,te,ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){Se.bindFramebuffer(B.FRAMEBUFFER,me);try{const be=R.texture,Ie=be.format,De=be.type;if(!ze.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=R.width-G&&j>=0&&j<=R.height-F&&B.readPixels(N,j,G,F,ke.convert(Ie),ke.convert(De),te)}finally{const be=w!==null?ve.get(w).__webglFramebuffer:null;Se.bindFramebuffer(B.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(R,N,j,G,F,te,ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){const be=R.texture,Ie=be.format,De=be.type;if(!ze.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=R.width-G&&j>=0&&j<=R.height-F){Se.bindFramebuffer(B.FRAMEBUFFER,me);const ge=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.bufferData(B.PIXEL_PACK_BUFFER,te.byteLength,B.STREAM_READ),B.readPixels(N,j,G,F,ke.convert(Ie),ke.convert(De),0);const We=w!==null?ve.get(w).__webglFramebuffer:null;Se.bindFramebuffer(B.FRAMEBUFFER,We);const et=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await tp(B,et,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,te),B.deleteBuffer(ge),B.deleteSync(et),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,N=null,j=0){R.isTexture!==!0&&(Qa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,R=arguments[1]);const G=Math.pow(2,-j),F=Math.floor(R.image.width*G),te=Math.floor(R.image.height*G),ce=N!==null?N.x:0,me=N!==null?N.y:0;I.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,ce,me,F,te),Se.unbindTexture()},this.copyTextureToTexture=function(R,N,j=null,G=null,F=0){R.isTexture!==!0&&(Qa("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1],N=arguments[2],F=arguments[3]||0,j=null);let te,ce,me,be,Ie,De,ge,We,et;const it=R.isCompressedTexture?R.mipmaps[F]:R.image;j!==null?(te=j.max.x-j.min.x,ce=j.max.y-j.min.y,me=j.isBox3?j.max.z-j.min.z:1,be=j.min.x,Ie=j.min.y,De=j.isBox3?j.min.z:0):(te=it.width,ce=it.height,me=it.depth||1,be=0,Ie=0,De=0),G!==null?(ge=G.x,We=G.y,et=G.z):(ge=0,We=0,et=0);const Gt=ke.convert(N.format),Xe=ke.convert(N.type);let _e;N.isData3DTexture?(I.setTexture3D(N,0),_e=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(I.setTexture2DArray(N,0),_e=B.TEXTURE_2D_ARRAY):(I.setTexture2D(N,0),_e=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);const Sn=B.getParameter(B.UNPACK_ROW_LENGTH),Ke=B.getParameter(B.UNPACK_IMAGE_HEIGHT),sn=B.getParameter(B.UNPACK_SKIP_PIXELS),Ii=B.getParameter(B.UNPACK_SKIP_ROWS),qt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,it.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,it.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,be),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ie),B.pixelStorei(B.UNPACK_SKIP_IMAGES,De);const Ca=R.isDataArrayTexture||R.isData3DTexture,at=N.isDataArrayTexture||N.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const bn=ve.get(R),Ia=ve.get(N),Qt=ve.get(bn.__renderTarget),Vn=ve.get(Ia.__renderTarget);Se.bindFramebuffer(B.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Wn=0;Wn<me;Wn++)Ca&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ve.get(R).__webglTexture,F,De+Wn),R.isDepthTexture?(at&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ve.get(N).__webglTexture,F,et+Wn),B.blitFramebuffer(be,Ie,te,ce,ge,We,te,ce,B.DEPTH_BUFFER_BIT,B.NEAREST)):at?B.copyTexSubImage3D(_e,F,ge,We,et+Wn,be,Ie,te,ce):B.copyTexSubImage2D(_e,F,ge,We,et+Wn,be,Ie,te,ce);Se.bindFramebuffer(B.READ_FRAMEBUFFER,null),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else at?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(_e,F,ge,We,et,te,ce,me,Gt,Xe,it.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(_e,F,ge,We,et,te,ce,me,Gt,it.data):B.texSubImage3D(_e,F,ge,We,et,te,ce,me,Gt,Xe,it):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,F,ge,We,te,ce,Gt,Xe,it.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,F,ge,We,it.width,it.height,Gt,it.data):B.texSubImage2D(B.TEXTURE_2D,F,ge,We,te,ce,Gt,Xe,it);B.pixelStorei(B.UNPACK_ROW_LENGTH,Sn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ke),B.pixelStorei(B.UNPACK_SKIP_PIXELS,sn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ii),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qt),F===0&&N.generateMipmaps&&B.generateMipmap(_e),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,N,j=null,G=null,F=0){return R.isTexture!==!0&&(Qa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,G=arguments[1]||null,R=arguments[2],N=arguments[3],F=arguments[4]||0),Qa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,N,j,G,F)},this.initRenderTarget=function(R){ve.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){A=0,S=0,w=null,Se.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Oe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Oe._getUnpackColorSpace()}}class u_ extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new P;class ls{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ls(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wf extends un{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wi;const Ua=new P,qi=new P,Xi=new P,Ki=new Ee,Na=new Ee,Rf=new ye,Os=new P,Fa=new P,Hs=new P,Dd=new Ee,go=new Ee,Ld=new Ee;class p_ extends st{constructor(e=new wf){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tf(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new ls(n,3,0,!1)),Wi.setAttribute("uv",new ls(n,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new Ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),Rf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Xi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;zs(Os.set(-.5,-.5,0),Xi,r,qi,i,s),zs(Fa.set(.5,-.5,0),Xi,r,qi,i,s),zs(Hs.set(.5,.5,0),Xi,r,qi,i,s),Dd.set(0,0),go.set(1,0),Ld.set(1,1);let o=e.ray.intersectTriangle(Os,Fa,Hs,!1,Ua);if(o===null&&(zs(Fa.set(-.5,.5,0),Xi,r,qi,i,s),go.set(0,1),o=e.ray.intersectTriangle(Os,Hs,Fa,!1,Ua),o===null))return;const c=e.ray.origin.distanceTo(Ua);c<e.near||c>e.far||t.push({distance:c,point:Ua.clone(),uv:Mt.getInterpolation(Ua,Os,Fa,Hs,Dd,go,Ld,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zs(a,e,t,n,i,s){Ki.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(Na.x=s*Ki.x-i*Ki.y,Na.y=i*Ki.x+s*Ki.y):Na.copy(Ki),a.copy(e),a.x+=Na.x,a.y+=Na.y,a.applyMatrix4(Rf)}const kd=new P,Ud=new qe,Nd=new qe,m_=new P,Fd=new ye,js=new P,xo=new Ot,Bd=new ye,_o=new Ea;class b_ extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kl,this.bindMatrix=new ye,this.bindMatrixInverse=new ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ot),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,js),this.boundingBox.expandByPoint(js)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ot),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,js),this.boundingSphere.expandByPoint(js)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(i),e.ray.intersectsSphere(xo)!==!1&&(Bd.copy(i).invert(),_o.copy(e.ray).applyMatrix4(Bd),!(this.boundingBox!==null&&_o.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_o)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Au?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ud.fromBufferAttribute(i.attributes.skinIndex,e),Nd.fromBufferAttribute(i.attributes.skinWeight,e),kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Nd.getComponent(s);if(r!==0){const o=Ud.getComponent(s);Fd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(m_.copy(kd).applyMatrix4(Fd),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cf extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ns extends bt{constructor(e=null,t=1,n=1,i,s,r,o,c,l=Bt,d=Bt,h,f){super(null,r,o,c,l,d,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Od=new ye,g_=new ye;class ol{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:g_;Od.multiplyMatrices(o,t[s]),Od.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ol(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ns(t,e,e,Wt,Jt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Cf),this.bones.push(r),this.boneInverses.push(new ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ic extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new ye,Hd=new ye,Gs=[],zd=new ot,x_=new ye,Ba=new ft,Oa=new Ot;class __ extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,x_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),zd.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(zd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Oa.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ba.geometry=this.geometry,Ba.material=this.material,Ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(n),e.ray.intersectsSphere(Oa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Yi),Hd.multiplyMatrices(n,Yi),Ba.matrixWorld=Hd,Ba.raycast(e,Gs);for(let r=0,o=Gs.length;r<o;r++){const c=Gs[r];c.instanceId=s,c.object=this,t.push(c)}Gs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(i*this.count),i,this.count,el,Jt));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function yo(a,e){return a-e}function y_(a,e){return a.z-e.z}function v_(a,e){return e.z-a.z}class M_{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,r=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];r.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const Vt=new ye,S_=new Te(1,1,1),vo=new kr,Vs=new ot,_i=new Ot,Ha=new P,jd=new P,E_=new P,Mo=new M_,It=new ft,Ws=[];function A_(a,e,t=0){const n=e.itemSize;if(a.isInterleavedBufferAttribute||a.array.constructor!==e.array.constructor){const i=a.count;for(let s=0;s<i;s++)for(let r=0;r<n;r++)e.setComponent(s+t,r,a.getComponent(s,r))}else e.array.set(a.array,t*n);e.needsUpdate=!0}function yi(a,e){if(a.constructor!==e.constructor){const t=Math.min(a.length,e.length);for(let n=0;n<t;n++)e[n]=a[n]}else{const t=Math.min(a.length,e.length);e.set(new a.constructor(a.buffer,0,t))}}class T_ extends ft{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,i){super(new zt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ns(t,e,e,Wt,Jt);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ns(t,e,e,Dr,li);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ns(t,e,e,Wt,Jt);n.colorSpace=Oe.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const r=e.getAttribute(s),{array:o,itemSize:c,normalized:l}=r,d=new o.constructor(n*c),h=new gt(d,c,l);t.setAttribute(s,h)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new gt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ot);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Vt),this.getBoundingBoxAt(s,Vs).applyMatrix4(Vt),e.union(Vs)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Vt),this.getBoundingSphereAt(s,_i).applyMatrix4(Vt),e.union(_i)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(yo),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;Vt.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const r=this._colorsTexture;return r&&(S_.toArray(r.image.data,i*4),r.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const r=e.getIndex();if(r!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?r.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(yo),c=this._availableGeometryIds.shift(),s[c]=i):(c=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),r=t.getIndex(),o=this._geometryInfo[e];if(i&&r.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const d in n.attributes){const h=t.getAttribute(d),f=n.getAttribute(d);A_(h,f,c);const u=h.itemSize;for(let b=h.count,g=l;b<g;b++){const m=c+b;for(let p=0;p<u;p++)f.setComponent(m,p,0)}f.needsUpdate=!0,f.addUpdateRange(c*u,l*u)}if(i){const d=o.indexStart,h=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let f=0;f<r.count;f++)s.setX(d+f,c+r.getX(f));for(let f=r.count,u=h;f<u;f++)s.setX(d+f,c);s.needsUpdate=!0,s.addUpdateRange(d,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((r,o)=>o).sort((r,o)=>n[r].vertexStart-n[o].vertexStart),s=this.geometry;for(let r=0,o=n.length;r<o;r++){const c=i[r],l=n[c];if(l.active!==!1){if(s.index!==null){if(l.indexStart!==t){const{indexStart:d,vertexStart:h,reservedIndexCount:f}=l,u=s.index,b=u.array,g=e-h;for(let m=d;m<d+f;m++)b[m]=b[m]+g;u.array.copyWithin(t,d,d+f),u.addUpdateRange(t,f),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:d,reservedVertexCount:h}=l,f=s.attributes;for(const u in f){const b=f[u],{array:g,itemSize:m}=b;g.copyWithin(e*m,d*m,(d+h)*m),b.addUpdateRange(e*m,h*m)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=s.index?l.indexStart:l.vertexStart,this._nextIndexStart=s.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new ot,r=n.index,o=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let d=c;r&&(d=r.getX(d)),s.expandByPoint(Ha.fromBufferAttribute(o,d))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new Ot;this.getBoundingBoxAt(e,Vs),Vs.getCenter(s.center);const r=n.index,o=n.attributes.position;let c=0;for(let l=i.start,d=i.start+i.count;l<d;l++){let h=l;r&&(h=r.getX(h)),Ha.fromBufferAttribute(o,h),c=Math.max(c,s.center.distanceToSquared(Ha))}s.radius=Math.sqrt(c),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){const n=this._instanceInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._instanceInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._instanceInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._instanceInfo,i=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=i.length||i[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(yo);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);yi(this._multiDrawCounts,i),yi(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const r=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;r.dispose(),this._initIndirectTexture(),yi(r.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),yi(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),yi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new zt,this._initializeGeometry(s));const r=this.geometry;s.index&&yi(s.index.array,r.index.array);for(const o in s.attributes)yi(s.attributes[o].array,r.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,r=this.geometry;It.material=this.material,It.geometry.index=r.index,It.geometry.attributes=r.attributes,It.geometry.boundingBox===null&&(It.geometry.boundingBox=new ot),It.geometry.boundingSphere===null&&(It.geometry.boundingSphere=new Ot);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,d=i[l];It.geometry.setDrawRange(d.start,d.count),this.getMatrixAt(o,It.matrixWorld).premultiply(s),this.getBoundingBoxAt(l,It.geometry.boundingBox),this.getBoundingSphereAt(l,It.geometry.boundingSphere),It.raycast(e,Ws);for(let h=0,f=Ws.length;h<f;h++){const u=Ws[h];u.object=this,u.batchId=o,t.push(u)}Ws.length=0}It.material=null,It.geometry.index=null,It.geometry.attributes={},It.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const r=i.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,d=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,u=this._indirectTexture,b=u.image.data;f&&(Vt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),vo.setFromProjectionMatrix(Vt,e.coordinateSystem));let g=0;if(this.sortObjects){Vt.copy(this.matrixWorld).invert(),Ha.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Vt),jd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Vt);for(let x=0,y=c.length;x<y;x++)if(c[x].visible&&c[x].active){const _=c[x].geometryIndex;this.getMatrixAt(x,Vt),this.getBoundingSphereAt(_,_i).applyMatrix4(Vt);let M=!1;if(f&&(M=!vo.intersectsSphere(_i)),!M){const A=h[_],S=E_.subVectors(_i.center,Ha).dot(jd);Mo.push(A.start,A.count,S,x)}}const m=Mo.list,p=this.customSort;p===null?m.sort(s.transparent?v_:y_):p.call(this,m,n);for(let x=0,y=m.length;x<y;x++){const _=m[x];l[g]=_.start*o,d[g]=_.count,b[g]=_.index,g++}Mo.reset()}else for(let m=0,p=c.length;m<p;m++)if(c[m].visible&&c[m].active){const x=c[m].geometryIndex;let y=!1;if(f&&(this.getMatrixAt(m,Vt),this.getBoundingSphereAt(x,_i).applyMatrix4(Vt),y=!vo.intersectsSphere(_i)),!y){const _=h[x];l[g]=_.start*o,d[g]=_.count,b[g]=m,g++}}u.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,r){this.onBeforeRender(e,null,i,s,r)}}class If extends un{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tr=new P,wr=new P,Gd=new ye,za=new Ea,qs=new Ot,So=new P,Vd=new P;class ps extends st{constructor(e=new zt,t=new If){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Tr.fromBufferAttribute(t,i-1),wr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Tr.distanceTo(wr);e.setAttribute("lineDistance",new On(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;Gd.copy(i).invert(),za.copy(e.ray).applyMatrix4(Gd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const u=Math.max(0,r.start),b=Math.min(d.count,r.start+r.count);for(let g=u,m=b-1;g<m;g+=l){const p=d.getX(g),x=d.getX(g+1),y=Xs(this,e,za,c,p,x);y&&t.push(y)}if(this.isLineLoop){const g=d.getX(b-1),m=d.getX(u),p=Xs(this,e,za,c,g,m);p&&t.push(p)}}else{const u=Math.max(0,r.start),b=Math.min(f.count,r.start+r.count);for(let g=u,m=b-1;g<m;g+=l){const p=Xs(this,e,za,c,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=Xs(this,e,za,c,b-1,u);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xs(a,e,t,n,i,s){const r=a.geometry.attributes.position;if(Tr.fromBufferAttribute(r,i),wr.fromBufferAttribute(r,s),t.distanceSqToSegment(Tr,wr,So,Vd)>n)return;So.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(So);if(!(c<e.near||c>e.far))return{distance:c,point:Vd.clone().applyMatrix4(a.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:a}}const Wd=new P,qd=new P;class cl extends ps{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Wd.fromBufferAttribute(t,i),qd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wd.distanceTo(qd);e.setAttribute("lineDistance",new On(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ll extends ps{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pf extends un{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xd=new ye,Pc=new Ea,Ks=new Ot,Ys=new P;class dl extends st{constructor(e=new zt,t=new Pf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=s,e.ray.intersectsSphere(Ks)===!1)return;Xd.copy(i).invert(),Pc.copy(e.ray).applyMatrix4(Xd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),u=Math.min(l.count,r.start+r.count);for(let b=f,g=u;b<g;b++){const m=l.getX(b);Ys.fromBufferAttribute(h,m),Kd(Ys,m,c,i,e,t,this)}}else{const f=Math.max(0,r.start),u=Math.min(h.count,r.start+r.count);for(let b=f,g=u;b<g;b++)Ys.fromBufferAttribute(h,b),Kd(Ys,b,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kd(a,e,t,n,i,s,r){const o=Pc.distanceSqToPoint(a);if(o<t){const c=new P;Pc.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class w_ extends bt{constructor(e,t,n,i,s,r,o,c,l){super(e,t,n,i,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hl extends un{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yn extends hl{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Js(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function R_(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function C_(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yd(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=a[o+c]}return i}function Df(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class ms{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class I_ extends ms{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Nl:s=e,o=2*t-n;break;case Fl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Nl:r=e,c=2*n-t;break;case Fl:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=r*d}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,u=this._weightNext,b=(n-t)/(i-t),g=b*b,m=g*b,p=-f*m+2*f*g-f*b,x=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*b+1,y=(-1-u)*m+(1.5+u)*g+.5*b,_=u*m-u*g;for(let M=0;M!==o;++M)s[M]=p*r[d+M]+x*r[l+M]+y*r[c+M]+_*r[h+M];return s}}class P_ extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(i-t),h=1-d;for(let f=0;f!==o;++f)s[f]=r[l+f]*h+r[c+f]*d;return s}}class D_ extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class vn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new D_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new P_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new I_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rs:t=this.InterpolantFactoryMethodDiscrete;break;case os:t=this.InterpolantFactoryMethodLinear;break;case jr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rs;case this.InterpolantFactoryMethodLinear:return os;case this.InterpolantFactoryMethodSmooth:return jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&R_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jr,s=e.length-1;let r=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,f=h-n,u=h+n;for(let b=0;b!==n;++b){const g=t[h+b];if(g!==t[f+b]||g!==t[u+b]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const h=o*n,f=r*n;for(let u=0;u!==n;++u)t[f+u]=t[h+u]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=os;class Ta extends vn{constructor(e,t,n){super(e,t,n)}}Ta.prototype.ValueTypeName="bool";Ta.prototype.ValueBufferType=Array;Ta.prototype.DefaultInterpolation=rs;Ta.prototype.InterpolantFactoryMethodLinear=void 0;Ta.prototype.InterpolantFactoryMethodSmooth=void 0;class Lf extends vn{}Lf.prototype.ValueTypeName="color";class ya extends vn{}ya.prototype.ValueTypeName="number";class L_ extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let d=l+o;l!==d;l+=4)hi.slerpFlat(s,0,r,l-o,r,l,c);return s}}class va extends vn{InterpolantFactoryMethodLinear(e){return new L_(this.times,this.values,this.getValueSize(),e)}}va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;class wa extends vn{constructor(e,t,n){super(e,t,n)}}wa.prototype.ValueTypeName="string";wa.prototype.ValueBufferType=Array;wa.prototype.DefaultInterpolation=rs;wa.prototype.InterpolantFactoryMethodLinear=void 0;wa.prototype.InterpolantFactoryMethodSmooth=void 0;class Ma extends vn{}Ma.prototype.ValueTypeName="vector";class k_{constructor(e="",t=-1,n=[],i=Tu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(N_(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(vn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const d=C_(c);c=Yd(c,1,d),l=Yd(l,1,d),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new ya(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(s);if(d&&d.length>1){const h=d[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,u,b,g){if(u.length!==0){const m=[],p=[];Df(u,m,p,b),m.length!==0&&g.push(new h(f,m,p))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const u={};let b;for(b=0;b<f.length;b++)if(f[b].morphTargets)for(let g=0;g<f[b].morphTargets.length;g++)u[f[b].morphTargets[g]]=-1;for(const g in u){const m=[],p=[];for(let x=0;x!==f[b].morphTargets.length;++x){const y=f[b];m.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new ya(".morphTargetInfluence["+g+"]",m,p))}c=u.length*r}else{const u=".bones["+t[h].name+"]";n(Ma,u+".position",f,"pos",i),n(va,u+".quaternion",f,"rot",i),n(Ma,u+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function U_(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ya;case"vector":case"vector2":case"vector3":case"vector4":return Ma;case"color":return Lf;case"quaternion":return va;case"bool":case"boolean":return Ta;case"string":return wa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function N_(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=U_(a.type);if(a.times===void 0){const t=[],n=[];Df(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const si={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class F_{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,i.onProgress!==void 0&&i.onProgress(d,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=l.length;h<f;h+=2){const u=l[h],b=l[h+1];if(u.global&&(u.lastIndex=0),u.test(d))return b}return null}}}const B_=new F_;class Ra{constructor(e){this.manager=e!==void 0?e:B_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class O_ extends Error{constructor(e,t){super(e),this.response=t}}class kf extends Ra{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=si.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:i});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=Cn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=f?parseInt(f):0,b=u!==0;let g=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{g+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:b,loaded:g,total:u});for(let A=0,S=d.length;A<S;A++){const w=d[A];w.onProgress&&w.onProgress(M)}p.enqueue(_),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new O_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(f);return l.arrayBuffer().then(b=>u.decode(b))}}}).then(l=>{si.add(e,l);const d=Cn[e];delete Cn[e];for(let h=0,f=d.length;h<f;h++){const u=d[h];u.onLoad&&u.onLoad(l)}}).catch(l=>{const d=Cn[e];if(d===void 0)throw this.manager.itemError(e),l;delete Cn[e];for(let h=0,f=d.length;h<f;h++){const u=d[h];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class H_ extends Ra{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=si.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=cs("img");function c(){d(),si.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){d(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class z_ extends Ra{constructor(e){super(e)}load(e,t,n,i){const s=new bt,r=new H_(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Nr extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class j_ extends Nr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Eo=new ye,Jd=new P,Zd=new P;class fl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jd),Zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zd),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class G_ extends fl{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ga*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class V_ extends Nr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new G_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qd=new ye,ja=new P,Ao=new P;class W_ extends fl{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ja.setFromMatrixPosition(e.matrixWorld),n.position.copy(ja),Ao.copy(n.position),Ao.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ao),n.updateMatrixWorld(),i.makeTranslation(-ja.x,-ja.y,-ja.z),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd)}}class q_ extends Nr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new W_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class X_ extends fl{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K_ extends Nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new X_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class is{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Y_ extends Ra{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=si.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return si.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),si.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});si.add(e,c),s.manager.itemStart(e)}}class J_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$d(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$d();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $d(){return performance.now()}const ul="\\[\\]\\.:\\/",Z_=new RegExp("["+ul+"]","g"),pl="[^"+ul+"]",Q_="[^"+ul.replace("\\.","")+"]",$_=/((?:WC+[\/:])*)/.source.replace("WC",pl),ey=/(WCOD+)?/.source.replace("WCOD",Q_),ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),iy=new RegExp("^"+$_+ey+ty+ny+"$"),ay=["material","materials","bones","map"];class sy{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z_,"")}static parseTrackName(e){const t=iy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ay.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=sy;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const eh=new ye;class ry{constructor(e,t,n=0,i=1/0){this.ray=new Ea(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(e,t=!0,n=[]){return Dc(e,this,n,t),n.sort(th),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Dc(e[i],this,n,t);return n.sort(th),n}}function th(a,e){return a.distance-e.distance}function Dc(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=a.children;for(let r=0,o=s.length;r<o;r++)Dc(s[r],e,t,!0)}}const nh=new P,Zs=new P;class jn{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){nh.subVectors(e,this.start),Zs.subVectors(this.end,this.start);const n=Zs.dot(Zs);let s=Zs.dot(nh)/n;return t&&(s=Tt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ds}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ds);const Uf=0,oy=1,cy=2,ih=2,To=1.25,ah=1,Pt=32,pt=Pt/4,Nf=65535,Mr=Math.pow(2,-24),ml=Symbol("SKIP_GENERATION"),Ff={strategy:Uf,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[ml]:!1};function lt(a,e,t){return t.min.x=e[a],t.min.y=e[a+1],t.min.z=e[a+2],t.max.x=e[a+3],t.max.y=e[a+4],t.max.z=e[a+5],t}function sh(a){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=a[n+3]-a[n];i>t&&(t=i,e=n)}return e}function rh(a,e){e.set(a)}function oh(a,e,t){let n,i;for(let s=0;s<3;s++){const r=s+3;n=a[s],i=e[s],t[s]=n<i?n:i,n=a[r],i=e[r],t[r]=n>i?n:i}}function Qs(a,e,t){for(let n=0;n<3;n++){const i=e[a+2*n],s=e[a+2*n+1],r=i-s,o=i+s;r<t[n]&&(t[n]=r),o>t[n+3]&&(t[n+3]=o)}}function Ga(a){const e=a[3]-a[0],t=a[4]-a[1],n=a[5]-a[2];return 2*(e*t+t*n+n*e)}function mt(a,e){return e[a+15]===Nf}function Dt(a,e){return e[a+6]}function Nt(a,e){return e[a+14]}function St(a){return a+pt}function Et(a,e){const t=e[a+6];return a+t*pt}function bl(a,e){return e[a+7]}function wo(a,e,t,n,i){let s=1/0,r=1/0,o=1/0,c=-1/0,l=-1/0,d=-1/0,h=1/0,f=1/0,u=1/0,b=-1/0,g=-1/0,m=-1/0;const p=a.offset||0;for(let x=(e-p)*6,y=(e+t-p)*6;x<y;x+=6){const _=a[x+0],M=a[x+1],A=_-M,S=_+M;A<s&&(s=A),S>c&&(c=S),_<h&&(h=_),_>b&&(b=_);const w=a[x+2],E=a[x+3],v=w-E,C=w+E;v<r&&(r=v),C>l&&(l=C),w<f&&(f=w),w>g&&(g=w);const D=a[x+4],L=a[x+5],k=D-L,O=D+L;k<o&&(o=k),O>d&&(d=O),D<u&&(u=D),D>m&&(m=D)}n[0]=s,n[1]=r,n[2]=o,n[3]=c,n[4]=l,n[5]=d,i[0]=h,i[1]=f,i[2]=u,i[3]=b,i[4]=g,i[5]=m}const Pn=32,ly=(a,e)=>a.candidate-e.candidate,Qn=new Array(Pn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),$s=new Float32Array(6);function dy(a,e,t,n,i,s){let r=-1,o=0;if(s===Uf)r=sh(e),r!==-1&&(o=(e[r]+e[r+3])/2);else if(s===oy)r=sh(a),r!==-1&&(o=hy(t,n,i,r));else if(s===cy){const c=Ga(a);let l=To*i;const d=t.offset||0,h=(n-d)*6,f=(n+i-d)*6;for(let u=0;u<3;u++){const b=e[u],p=(e[u+3]-b)/Pn;if(i<Pn/4){const x=[...Qn];x.length=i;let y=0;for(let M=h;M<f;M+=6,y++){const A=x[y];A.candidate=t[M+2*u],A.count=0;const{bounds:S,leftCacheBounds:w,rightCacheBounds:E}=A;for(let v=0;v<3;v++)E[v]=1/0,E[v+3]=-1/0,w[v]=1/0,w[v+3]=-1/0,S[v]=1/0,S[v+3]=-1/0;Qs(M,t,S)}x.sort(ly);let _=i;for(let M=0;M<_;M++){const A=x[M];for(;M+1<_&&x[M+1].candidate===A.candidate;)x.splice(M+1,1),_--}for(let M=h;M<f;M+=6){const A=t[M+2*u];for(let S=0;S<_;S++){const w=x[S];A>=w.candidate?Qs(M,t,w.rightCacheBounds):(Qs(M,t,w.leftCacheBounds),w.count++)}}for(let M=0;M<_;M++){const A=x[M],S=A.count,w=i-A.count,E=A.leftCacheBounds,v=A.rightCacheBounds;let C=0;S!==0&&(C=Ga(E)/c);let D=0;w!==0&&(D=Ga(v)/c);const L=ah+To*(C*S+D*w);L<l&&(r=u,l=L,o=A.candidate)}}else{for(let _=0;_<Pn;_++){const M=Qn[_];M.count=0,M.candidate=b+p+_*p;const A=M.bounds;for(let S=0;S<3;S++)A[S]=1/0,A[S+3]=-1/0}for(let _=h;_<f;_+=6){let S=~~((t[_+2*u]-b)/p);S>=Pn&&(S=Pn-1);const w=Qn[S];w.count++,Qs(_,t,w.bounds)}const x=Qn[Pn-1];rh(x.bounds,x.rightCacheBounds);for(let _=Pn-2;_>=0;_--){const M=Qn[_],A=Qn[_+1];oh(M.bounds,A.rightCacheBounds,M.rightCacheBounds)}let y=0;for(let _=0;_<Pn-1;_++){const M=Qn[_],A=M.count,S=M.bounds,E=Qn[_+1].rightCacheBounds;A!==0&&(y===0?rh(S,$s):oh(S,$s,$s)),y+=A;let v=0,C=0;y!==0&&(v=Ga($s)/c);const D=i-y;D!==0&&(C=Ga(E)/c);const L=ah+To*(v*y+C*D);L<l&&(r=u,l=L,o=M.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:r,pos:o}}function hy(a,e,t,n){let i=0;const s=a.offset;for(let r=e,o=e+t;r<o;r++)i+=a[(r-s)*6+n*2];return i/t}class Ro{constructor(){this.boundingData=new Float32Array(6)}}function fy(a,e,t,n,i,s){let r=n,o=n+i-1;const c=s.pos,l=s.axis*2,d=t.offset||0;for(;;){for(;r<=o&&t[(r-d)*6+l]<c;)r++;for(;r<=o&&t[(o-d)*6+l]>=c;)o--;if(r<o){for(let h=0;h<e;h++){let f=a[r*e+h];a[r*e+h]=a[o*e+h],a[o*e+h]=f}for(let h=0;h<6;h++){const f=r-d,u=o-d,b=t[f*6+h];t[f*6+h]=t[u*6+h],t[u*6+h]=b}r++,o--}else return r}}let Bf,Sr,Lc,Of;const uy=Math.pow(2,32);function kc(a){return"count"in a?1:1+kc(a.left)+kc(a.right)}function py(a,e,t){return Bf=new Float32Array(t),Sr=new Uint32Array(t),Lc=new Uint16Array(t),Of=new Uint8Array(t),Uc(a,e)}function Uc(a,e){const t=a/4,n=a/2,i="count"in e,s=e.boundingData;for(let r=0;r<6;r++)Bf[t+r]=s[r];if(i)return e.buffer?(Of.set(new Uint8Array(e.buffer),a),a+e.buffer.byteLength):(Sr[t+6]=e.offset,Lc[n+14]=e.count,Lc[n+15]=Nf,a+Pt);{const{left:r,right:o,splitAxis:c}=e,l=a+Pt;let d=Uc(l,r);const h=a/Pt,u=d/Pt-h;if(u>uy)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Sr[t+6]=u,Sr[t+7]=c,Uc(d,o)}}function my(a,e,t,n,i,s){const{maxDepth:r,verbose:o,maxLeafSize:c,strategy:l,onProgress:d}=i,h=a.primitiveBuffer,f=a.primitiveBufferStride,u=new Float32Array(6);let b=!1;const g=new Ro;return wo(e,t,n,g.boundingData,u),p(g,t,n,u),g;function m(x){d&&d((x-s.offset)/s.count)}function p(x,y,_,M=null,A=0){if(!b&&A>=r&&(b=!0,o&&console.warn(`BVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`)),_<=c||A>=r)return m(y+_),x.offset=y,x.count=_,x;const S=dy(x.boundingData,M,e,y,_,l);if(S.axis===-1)return m(y+_),x.offset=y,x.count=_,x;const w=fy(h,f,e,y,_,S);if(w===y||w===y+_)m(y+_),x.offset=y,x.count=_;else{x.splitAxis=S.axis;const E=new Ro,v=y,C=w-y;x.left=E,wo(e,v,C,E.boundingData,u),p(E,v,C,u,A+1);const D=new Ro,L=w,k=_-C;x.right=D,wo(e,L,k,D.boundingData,u),p(D,L,k,u,A+1)}return x}}function by(a,e){const t=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=a.getRootRanges(e.range),i=n[0],s=n[n.length-1],r={offset:i.offset,count:s.offset+s.count-i.offset},o=new Float32Array(6*r.count);o.offset=r.offset,a.computePrimitiveBounds(r.offset,r.count,o),a._roots=n.map(c=>{const l=my(a,o,c.offset,c.count,e,r),d=kc(l),h=new t(Pt*d);return py(0,l,h),h})}class gl{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class gy{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const rt=new gy;let ri,ra;const Ji=[],er=new gl(()=>new ot);function xy(a,e,t,n,i,s){ri=er.getPrimitive(),ra=er.getPrimitive(),Ji.push(ri,ra),rt.setBuffer(a._roots[e]);const r=Nc(0,a.geometry,t,n,i,s);rt.clearBuffer(),er.releasePrimitive(ri),er.releasePrimitive(ra),Ji.pop(),Ji.pop();const o=Ji.length;return o>0&&(ra=Ji[o-1],ri=Ji[o-2]),r}function Nc(a,e,t,n,i=null,s=0,r=0){const{float32Array:o,uint16Array:c,uint32Array:l}=rt;let d=a*2;if(mt(d,c)){const b=Dt(a,l),g=Nt(d,c);return lt(a,o,ri),n(b,g,!1,r,s+a/pt,ri)}else{let D=function(k){const{uint16Array:O,uint32Array:z}=rt;let X=k*2;for(;!mt(X,O);)k=St(k),X=k*2;return Dt(k,z)},L=function(k){const{uint16Array:O,uint32Array:z}=rt;let X=k*2;for(;!mt(X,O);)k=Et(k,z),X=k*2;return Dt(k,z)+Nt(X,O)};var f=D,u=L;const b=St(a),g=Et(a,l);let m=b,p=g,x,y,_,M;if(i&&(_=ri,M=ra,lt(m,o,_),lt(p,o,M),x=i(_),y=i(M),y<x)){m=g,p=b;const k=x;x=y,y=k,_=M}_||(_=ri,lt(m,o,_));const A=mt(m*2,c),S=t(_,A,x,r+1,s+m/pt);let w;if(S===ih){const k=D(m),z=L(m)-k;w=n(k,z,!0,r+1,s+m/pt,_)}else w=S&&Nc(m,e,t,n,i,s,r+1);if(w)return!0;M=ra,lt(p,o,M);const E=mt(p*2,c),v=t(M,E,y,r+1,s+p/pt);let C;if(v===ih){const k=D(p),z=L(p)-k;C=n(k,z,!0,r+1,s+p/pt,M)}else C=v&&Nc(p,e,t,n,i,s,r+1);return!!C}}const as=new rt.constructor,Rr=new rt.constructor,ti=new gl(()=>new ot),Zi=new ot,Qi=new ot,Co=new ot,Io=new ot;let Po=!1;function _y(a,e,t,n){if(Po)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Po=!0;const i=a._roots,s=e._roots;let r,o=0,c=0;const l=new ye().copy(t).invert();for(let d=0,h=i.length;d<h;d++){as.setBuffer(i[d]),c=0;const f=ti.getPrimitive();lt(0,as.float32Array,f),f.applyMatrix4(l);for(let u=0,b=s.length;u<b&&(Rr.setBuffer(s[u]),r=ln(0,0,t,l,n,o,c,0,0,f),Rr.clearBuffer(),c+=s[u].byteLength/Pt,!r);u++);if(ti.releasePrimitive(f),as.clearBuffer(),o+=i[d].byteLength/Pt,r)break}return Po=!1,r}function ln(a,e,t,n,i,s=0,r=0,o=0,c=0,l=null,d=!1){let h,f;d?(h=Rr,f=as):(h=as,f=Rr);const u=h.float32Array,b=h.uint32Array,g=h.uint16Array,m=f.float32Array,p=f.uint32Array,x=f.uint16Array,y=a*2,_=e*2,M=mt(y,g),A=mt(_,x);let S=!1;if(A&&M)d?S=i(Dt(e,p),Nt(e*2,x),Dt(a,b),Nt(a*2,g),c,r+e/pt,o,s+a/pt):S=i(Dt(a,b),Nt(a*2,g),Dt(e,p),Nt(e*2,x),o,s+a/pt,c,r+e/pt);else if(A){const w=ti.getPrimitive();lt(e,m,w),w.applyMatrix4(t);const E=St(a),v=Et(a,b);lt(E,u,Zi),lt(v,u,Qi);const C=w.intersectsBox(Zi),D=w.intersectsBox(Qi);S=C&&ln(e,E,n,t,i,r,s,c,o+1,w,!d)||D&&ln(e,v,n,t,i,r,s,c,o+1,w,!d),ti.releasePrimitive(w)}else{const w=St(e),E=Et(e,p);lt(w,m,Co),lt(E,m,Io);const v=l.intersectsBox(Co),C=l.intersectsBox(Io);if(v&&C)S=ln(a,w,t,n,i,s,r,o,c+1,l,d)||ln(a,E,t,n,i,s,r,o,c+1,l,d);else if(v)if(M)S=ln(a,w,t,n,i,s,r,o,c+1,l,d);else{const D=ti.getPrimitive();D.copy(Co).applyMatrix4(t);const L=St(a),k=Et(a,b);lt(L,u,Zi),lt(k,u,Qi);const O=D.intersectsBox(Zi),z=D.intersectsBox(Qi);S=O&&ln(w,L,n,t,i,r,s,c,o+1,D,!d)||z&&ln(w,k,n,t,i,r,s,c,o+1,D,!d),ti.releasePrimitive(D)}else if(C)if(M)S=ln(a,E,t,n,i,s,r,o,c+1,l,d);else{const D=ti.getPrimitive();D.copy(Io).applyMatrix4(t);const L=St(a),k=Et(a,b);lt(L,u,Zi),lt(k,u,Qi);const O=D.intersectsBox(Zi),z=D.intersectsBox(Qi);S=O&&ln(E,L,n,t,i,r,s,c,o+1,D,!d)||z&&ln(E,k,n,t,i,r,s,c,o+1,D,!d),ti.releasePrimitive(D)}}return S}const ch=new ot,$i=new Float32Array(6);class yy{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...Ff,...e},by(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,n,i){let s=1/0,r=1/0,o=1/0,c=-1/0,l=-1/0,d=-1/0;for(let h=e,f=e+t;h<f;h++){this.writePrimitiveBounds(h,$i,0);const[u,b,g,m,p,x]=$i;u<s&&(s=u),m>c&&(c=m),b<r&&(r=b),p>l&&(l=p),g<o&&(o=g),x>d&&(d=x)}return n[i+0]=s,n[i+1]=r,n[i+2]=o,n[i+3]=c,n[i+4]=l,n[i+5]=d,n}computePrimitiveBounds(e,t,n){const i=n.offset||0;for(let s=e,r=e+t;s<r;s++){this.writePrimitiveBounds(s,$i,0);const[o,c,l,d,h,f]=$i,u=(o+d)/2,b=(c+h)/2,g=(l+f)/2,m=(d-o)/2,p=(h-c)/2,x=(f-l)/2,y=(s-i)*6;n[y+0]=u,n[y+1]=m+(Math.abs(u)+m)*Mr,n[y+2]=b,n[y+3]=p+(Math.abs(b)+p)*Mr,n[y+4]=g,n[y+5]=x+(Math.abs(g)+x)*Mr}return n}shiftPrimitiveOffsets(e){const t=this._indirectBuffer;if(t)for(let n=0,i=t.length;n<i;n++)t[n]+=e;else{const n=this._roots;for(let i=0;i<n.length;i++){const s=n[i],r=new Uint32Array(s),o=new Uint16Array(s),c=s.byteLength/Pt;for(let l=0;l<c;l++){const d=pt*l,h=2*d;mt(h,o)&&(r[d+6]+=e)}}}}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),s=new Uint16Array(n);r(0);function r(o,c=0){const l=o*2,d=mt(l,s);if(d){const h=i[o+6],f=s[l+14];e(c,d,new Float32Array(n,o*4,6),h,f)}else{const h=St(o),f=Et(o,i),u=bl(o,i);e(c,d,new Float32Array(n,o*4,6),u)||(r(h,c+1),r(f,c+1))}}}refit(){const e=this._roots;for(let t=0,n=e.length;t<n;t++){const i=e[t],s=new Uint32Array(i),r=new Uint16Array(i),o=new Float32Array(i),c=i.byteLength/Pt;for(let l=c-1;l>=0;l--){const d=l*pt,h=d*2;if(mt(h,r)){const u=Dt(d,s),b=Nt(h,r);this.writePrimitiveRangeBounds(u,b,$i,0),o.set($i,d)}else{const u=St(d),b=Et(d,s);for(let g=0;g<3;g++){const m=o[u+g],p=o[u+g+3],x=o[b+g],y=o[b+g+3];o[d+g]=m<x?m:x,o[d+g+3]=p>y?p:y}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{lt(0,new Float32Array(n),ch),e.union(ch)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:s,scratchPrimitive:r,iterate:o}=e;if(i&&s){const h=i;i=(f,u,b,g,m)=>h(f,u,b,g,m)?!0:o(f,u,this,s,b,g,r)}else i||(s?i=(h,f,u,b)=>o(h,f,this,s,u,b,r):i=(h,f,u)=>u);let c=!1,l=0;const d=this._roots;for(let h=0,f=d.length;h<f;h++){const u=d[h];if(c=xy(this,h,n,i,t,l),c)break;l+=u.byteLength/Pt}return c}bvhcast(e,t,n){let{intersectsRanges:i}=n;return _y(this,e,t,i)}}function vy(){return typeof SharedArrayBuffer<"u"}function xl(a){return a.index?a.index.count:a.attributes.position.count}function Fr(a){return xl(a)/3}function My(a,e=ArrayBuffer){return a>65535?new Uint32Array(new e(4*a)):new Uint16Array(new e(2*a))}function Sy(a,e){if(!a.index){const t=a.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=My(t,n);a.setIndex(new gt(i,1));for(let s=0;s<t;s++)i[s]=s}}function Ey(a,e,t){const n=xl(a)/t,i=e||a.drawRange,s=i.start/t,r=(i.start+i.count)/t,o=Math.max(0,s),c=Math.min(n,r)-o;return{offset:Math.floor(o),count:Math.floor(c)}}function Ay(a,e){return a.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function lh(a,e,t){const n=Ey(a,e,t),i=Ay(a,t);if(!i.length)return[n];const s=[],r=n.offset,o=n.offset+n.count,c=xl(a)/t,l=[];for(const f of i){const{offset:u,count:b}=f,g=u,m=isFinite(b)?b:c-u,p=u+m;g<o&&p>r&&(l.push({pos:Math.max(r,g),isStart:!0}),l.push({pos:Math.min(o,p),isStart:!1}))}l.sort((f,u)=>f.pos!==u.pos?f.pos-u.pos:f.type==="end"?-1:1);let d=0,h=null;for(const f of l){const u=f.pos;d!==0&&u!==h&&s.push({offset:h,count:u-h}),d+=f.isStart?1:-1,h=u}return s}function Ty(a,e){const t=a[a.length-1],n=t.offset+t.count>2**16,i=a.reduce((l,d)=>l+d.count,0),s=n?4:2,r=e?new SharedArrayBuffer(i*s):new ArrayBuffer(i*s),o=n?new Uint32Array(r):new Uint16Array(r);let c=0;for(let l=0;l<a.length;l++){const{offset:d,count:h}=a[l];for(let f=0;f<h;f++)o[c+f]=d+f;c+=h}return o}class wy extends yy{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!vy())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...Ff,...t},t[ml]||this.init(t)}init(e){const{geometry:t,primitiveStride:n}=this;if(e.indirect){const i=lh(t,e.range,n),s=Ty(i,e.useSharedArrayBuffer);this._indirectBuffer=s}else Sy(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ot))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:lh(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Gn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,r=e.length;s<r;s++){const c=e[s][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,r=t.length;s<r;s++){const o=t[s],c=e.dot(o);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Gn.prototype.setFromBox=(function(){const a=new P;return function(t,n){const i=n.min,s=n.max;let r=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let d=0;d<=1;d++){a.x=i.x*c+s.x*(1-c),a.y=i.y*l+s.y*(1-l),a.z=i.z*d+s.z*(1-d);const h=t.dot(a);r=Math.min(h,r),o=Math.max(h,o)}this.min=r,this.max=o}})();const Ry=(function(){const a=new P,e=new P,t=new P;return function(i,s,r){const o=i.start,c=a,l=s.start,d=e;t.subVectors(o,l),a.subVectors(i.end,i.start),e.subVectors(s.end,s.start);const h=t.dot(d),f=d.dot(c),u=d.dot(d),b=t.dot(c),m=c.dot(c)*u-f*f;let p,x;m!==0?p=(h*f-b*u)/m:p=0,x=(h+p*f)/u,r.x=p,r.y=x}})(),_l=(function(){const a=new Ee,e=new P,t=new P;return function(i,s,r,o){Ry(i,s,a);let c=a.x,l=a.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,r),s.at(l,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),i.closestPointToPoint(o,!0,r);return}else if(l>=0&&l<=1){c<0?i.at(0,r):i.at(1,r),s.closestPointToPoint(r,!0,o);return}else{let d;c<0?d=i.start:d=i.end;let h;l<0?h=s.start:h=s.end;const f=e,u=t;if(i.closestPointToPoint(h,!0,e),s.closestPointToPoint(d,!0,t),f.distanceToSquared(h)<=u.distanceToSquared(d)){r.copy(f),o.copy(h);return}else{r.copy(d),o.copy(u);return}}}})(),Cy=(function(){const a=new P,e=new P,t=new Ln,n=new jn;return function(s,r){const{radius:o,center:c}=s,{a:l,b:d,c:h}=r;if(n.start=l,n.end=d,n.closestPointToPoint(c,!0,a).distanceTo(c)<=o||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,a).distanceTo(c)<=o)||(n.start=d,n.end=h,n.closestPointToPoint(c,!0,a).distanceTo(c)<=o))return!0;const g=r.getPlane(t);if(Math.abs(g.distanceToPoint(c))<=o){const p=g.projectPoint(c,e);if(r.containsPoint(p))return!0}return!1}})(),Iy=["x","y","z"],kn=1e-15,dh=kn*kn;function en(a){return Math.abs(a)<kn}class mn extends Mt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new P),this.satBounds=new Array(4).fill().map(()=>new Gn),this.points=[this.a,this.b,this.c],this.plane=new Ln,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new jn,this.needsUpdate=!0}intersectsSphere(e){return Cy(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,r=this.satBounds,o=s[0],c=r[0];this.getNormal(o),c.setFromPoints(o,i);const l=s[1],d=r[1];l.subVectors(e,t),d.setFromPoints(l,i);const h=s[2],f=r[2];h.subVectors(t,n),f.setFromPoints(h,i);const u=s[3],b=r[3];u.subVectors(n,e),b.setFromPoints(u,i);const g=l.length(),m=h.length(),p=u.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,g<kn?m<kn||p<kn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<kn?p<kn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<kn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}mn.prototype.closestPointToSegment=(function(){const a=new P,e=new P,t=new jn;return function(i,s=null,r=null){const{start:o,end:c}=i,l=this.points;let d,h=1/0;for(let f=0;f<3;f++){const u=(f+1)%3;t.start.copy(l[f]),t.end.copy(l[u]),_l(t,i,a,e),d=a.distanceToSquared(e),d<h&&(h=d,s&&s.copy(a),r&&r.copy(e))}return this.closestPointToPoint(o,a),d=o.distanceToSquared(a),d<h&&(h=d,s&&s.copy(a),r&&r.copy(o)),this.closestPointToPoint(c,a),d=c.distanceToSquared(a),d<h&&(h=d,s&&s.copy(a),r&&r.copy(c)),Math.sqrt(h)}})();mn.prototype.intersectsTriangle=(function(){const a=new mn,e=new Gn,t=new Gn,n=new P,i=new P,s=new P,r=new P,o=new jn,c=new jn,l=new P,d=new Ee,h=new Ee;function f(y,_,M,A){const S=n;!y.isDegenerateIntoPoint&&!y.isDegenerateIntoSegment?S.copy(y.plane.normal):S.copy(_.plane.normal);const w=y.satBounds,E=y.satAxes;for(let D=1;D<4;D++){const L=w[D],k=E[D];if(e.setFromPoints(k,_.points),L.isSeparated(e)||(r.copy(S).cross(k),e.setFromPoints(r,y.points),t.setFromPoints(r,_.points),e.isSeparated(t)))return!1}const v=_.satBounds,C=_.satAxes;for(let D=1;D<4;D++){const L=v[D],k=C[D];if(e.setFromPoints(k,y.points),L.isSeparated(e)||(r.crossVectors(S,k),e.setFromPoints(r,y.points),t.setFromPoints(r,_.points),e.isSeparated(t)))return!1}return M&&(A||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),M.start.set(0,0,0),M.end.set(0,0,0)),!0}function u(y,_,M,A,S,w,E,v,C,D,L){let k=E/(E-v);D.x=A+(S-A)*k,L.start.subVectors(_,y).multiplyScalar(k).add(y),k=E/(E-C),D.y=A+(w-A)*k,L.end.subVectors(M,y).multiplyScalar(k).add(y)}function b(y,_,M,A,S,w,E,v,C,D,L){if(S>0)u(y.c,y.a,y.b,A,_,M,C,E,v,D,L);else if(w>0)u(y.b,y.a,y.c,M,_,A,v,E,C,D,L);else if(v*C>0||E!=0)u(y.a,y.b,y.c,_,M,A,E,v,C,D,L);else if(v!=0)u(y.b,y.a,y.c,M,_,A,v,E,C,D,L);else if(C!=0)u(y.c,y.a,y.b,A,_,M,C,E,v,D,L);else return!0;return!1}function g(y,_,M,A){const S=_.degenerateSegment,w=y.plane.distanceToPoint(S.start),E=y.plane.distanceToPoint(S.end);return en(w)?en(E)?f(y,_,M,A):(M&&(M.start.copy(S.start),M.end.copy(S.start)),y.containsPoint(S.start)):en(E)?(M&&(M.start.copy(S.end),M.end.copy(S.end)),y.containsPoint(S.end)):y.plane.intersectLine(S,n)!=null?(M&&(M.start.copy(n),M.end.copy(n)),y.containsPoint(n)):!1}function m(y,_,M){const A=_.a;return en(y.plane.distanceToPoint(A))&&y.containsPoint(A)?(M&&(M.start.copy(A),M.end.copy(A)),!0):!1}function p(y,_,M){const A=y.degenerateSegment,S=_.a;return A.closestPointToPoint(S,!0,n),S.distanceToSquared(n)<dh?(M&&(M.start.copy(S),M.end.copy(S)),!0):!1}function x(y,_,M,A){if(y.isDegenerateIntoSegment)if(_.isDegenerateIntoSegment){const S=y.degenerateSegment,w=_.degenerateSegment,E=i,v=s;S.delta(E),w.delta(v);const C=n.subVectors(w.start,S.start),D=E.x*v.y-E.y*v.x;if(en(D))return!1;const L=(C.x*v.y-C.y*v.x)/D,k=-(E.x*C.y-E.y*C.x)/D;if(L<0||L>1||k<0||k>1)return!1;const O=S.start.z+E.z*L,z=w.start.z+v.z*k;return en(O-z)?(M&&(M.start.copy(S.start).addScaledVector(E,L),M.end.copy(S.start).addScaledVector(E,L)),!0):!1}else return _.isDegenerateIntoPoint?p(y,_,M):g(_,y,M,A);else{if(y.isDegenerateIntoPoint)return _.isDegenerateIntoPoint?_.a.distanceToSquared(y.a)<dh?(M&&(M.start.copy(y.a),M.end.copy(y.a)),!0):!1:_.isDegenerateIntoSegment?p(_,y,M):m(_,y,M);if(_.isDegenerateIntoPoint)return m(y,_,M);if(_.isDegenerateIntoSegment)return g(y,_,M,A)}}return function(_,M=null,A=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(a.copy(_),a.update(),_=a);const S=x(this,_,M,A);if(S!==void 0)return S;const w=this.plane,E=_.plane;let v=E.distanceToPoint(this.a),C=E.distanceToPoint(this.b),D=E.distanceToPoint(this.c);en(v)&&(v=0),en(C)&&(C=0),en(D)&&(D=0);const L=v*C,k=v*D;if(L>0&&k>0)return!1;let O=w.distanceToPoint(_.a),z=w.distanceToPoint(_.b),X=w.distanceToPoint(_.c);en(O)&&(O=0),en(z)&&(z=0),en(X)&&(X=0);const V=O*z,ee=O*X;if(V>0&&ee>0)return!1;i.copy(w.normal),s.copy(E.normal);const ie=i.cross(s);let ue=0,we=Math.abs(ie.x);const Ve=Math.abs(ie.y);Ve>we&&(we=Ve,ue=1),Math.abs(ie.z)>we&&(ue=2);const Q=Iy[ue],pe=this.a[Q],ae=this.b[Q],Me=this.c[Q],Ce=_.a[Q],Ne=_.b[Q],tt=_.c[Q];if(b(this,pe,ae,Me,L,k,v,C,D,d,o))return f(this,_,M,A);if(b(_,Ce,Ne,tt,V,ee,O,z,X,h,c))return f(this,_,M,A);if(d.y<d.x){const Fe=d.y;d.y=d.x,d.x=Fe,l.copy(o.start),o.start.copy(o.end),o.end.copy(l)}if(h.y<h.x){const Fe=h.y;h.y=h.x,h.x=Fe,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return d.y<h.x||h.y<d.x?!1:(M&&(h.x>d.x?M.start.copy(c.start):M.start.copy(o.start),h.y<d.y?M.end.copy(c.end):M.end.copy(o.end)),!0)}})();mn.prototype.distanceToPoint=(function(){const a=new P;return function(t){return this.closestPointToPoint(t,a),t.distanceTo(a)}})();mn.prototype.distanceToTriangle=(function(){const a=new P,e=new P,t=["a","b","c"],n=new jn,i=new jn;return function(r,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(r,l,!0))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let d=1/0;for(let h=0;h<3;h++){let f;const u=t[h],b=r[u];this.closestPointToPoint(b,a),f=b.distanceToSquared(a),f<d&&(d=f,o&&o.copy(a),c&&c.copy(b));const g=this[u];r.closestPointToPoint(g,a),f=g.distanceToSquared(a),f<d&&(d=f,o&&o.copy(g),c&&c.copy(a))}for(let h=0;h<3;h++){const f=t[h],u=t[(h+1)%3];n.set(this[f],this[u]);for(let b=0;b<3;b++){const g=t[b],m=t[(b+1)%3];i.set(r[g],r[m]),_l(n,i,a,e);const p=a.distanceToSquared(e);p<d&&(d=p,o&&o.copy(a),c&&c.copy(e))}}return Math.sqrt(d)}})();class jt{constructor(e,t,n){this.isOrientedBox=!0,this.min=new P,this.max=new P,this.matrix=new ye,this.invMatrix=new ye,this.points=new Array(8).fill().map(()=>new P),this.satAxes=new Array(3).fill().map(()=>new P),this.satBounds=new Array(3).fill().map(()=>new Gn),this.alignedSatBounds=new Array(3).fill().map(()=>new Gn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}jt.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let d=0;d<=1;d++)for(let h=0;h<=1;h++){const f=1*l|2*d|4*h,u=i[f];u.x=l?n.x:t.x,u.y=d?n.y:t.y,u.z=h?n.z:t.z,u.applyMatrix4(e)}const s=this.satBounds,r=this.satAxes,o=i[0];for(let l=0;l<3;l++){const d=r[l],h=s[l],f=1<<l,u=i[f];d.subVectors(o,u),h.setFromPoints(d,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();jt.prototype.intersectsBox=(function(){const a=new Gn;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,s=this.satBounds,r=this.satAxes,o=this.alignedSatBounds;if(a.min=n.x,a.max=i.x,o[0].isSeparated(a)||(a.min=n.y,a.max=i.y,o[1].isSeparated(a))||(a.min=n.z,a.max=i.z,o[2].isSeparated(a)))return!1;for(let c=0;c<3;c++){const l=r[c],d=s[c];if(a.setFromBox(l,t),d.isSeparated(a))return!1}return!0}})();jt.prototype.intersectsTriangle=(function(){const a=new mn,e=new Array(3),t=new Gn,n=new Gn,i=new P;return function(r){this.needsUpdate&&this.update(),r.isExtendedTriangle?r.needsUpdate&&r.update():(a.copy(r),a.update(),r=a);const o=this.satBounds,c=this.satAxes;e[0]=r.a,e[1]=r.b,e[2]=r.c;for(let f=0;f<3;f++){const u=o[f],b=c[f];if(t.setFromPoints(b,e),u.isSeparated(t))return!1}const l=r.satBounds,d=r.satAxes,h=this.points;for(let f=0;f<3;f++){const u=l[f],b=d[f];if(t.setFromPoints(b,h),u.isSeparated(t))return!1}for(let f=0;f<3;f++){const u=c[f];for(let b=0;b<4;b++){const g=d[b];if(i.crossVectors(u,g),t.setFromPoints(i,e),n.setFromPoints(i,h),t.isSeparated(n))return!1}}return!0}})();jt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();jt.prototype.distanceToPoint=(function(){const a=new P;return function(t){return this.closestPointToPoint(t,a),t.distanceTo(a)}})();jt.prototype.distanceToBox=(function(){const a=["x","y","z"],e=new Array(12).fill().map(()=>new jn),t=new Array(12).fill().map(()=>new jn),n=new P,i=new P;return function(r,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(r))return(c||l)&&(r.getCenter(i),this.closestPointToPoint(i,n),r.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const d=o*o,h=r.min,f=r.max,u=this.points;let b=1/0;for(let m=0;m<8;m++){const p=u[m];i.copy(p).clamp(h,f);const x=p.distanceToSquared(i);if(x<b&&(b=x,c&&c.copy(p),l&&l.copy(i),x<d))return Math.sqrt(x)}let g=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const y=(m+1)%3,_=(m+2)%3,M=p<<y|x<<_,A=1<<m|p<<y|x<<_,S=u[M],w=u[A];e[g].set(S,w);const v=a[m],C=a[y],D=a[_],L=t[g],k=L.start,O=L.end;k[v]=h[v],k[C]=p?h[C]:f[C],k[D]=x?h[D]:f[C],O[v]=f[v],O[C]=p?h[C]:f[C],O[D]=x?h[D]:f[C],g++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){i.x=m?f.x:h.x,i.y=p?f.y:h.y,i.z=x?f.z:h.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<b&&(b=y,c&&c.copy(n),l&&l.copy(i),y<d))return Math.sqrt(y)}for(let m=0;m<12;m++){const p=e[m];for(let x=0;x<12;x++){const y=t[x];_l(p,y,n,i);const _=n.distanceToSquared(i);if(_<b&&(b=_,c&&c.copy(n),l&&l.copy(i),_<d))return Math.sqrt(_)}}return Math.sqrt(b)}})();class Py extends gl{constructor(){super(()=>new mn)}}const nn=new Py,Va=new P,Do=new P;function Dy(a,e,t={},n=0,i=1/0){const s=n*n,r=i*i;let o=1/0,c=null;if(a.shapecast({boundsTraverseOrder:d=>(Va.copy(e).clamp(d.min,d.max),Va.distanceToSquared(e)),intersectsBounds:(d,h,f)=>f<o&&f<r,intersectsTriangle:(d,h)=>{d.closestPointToPoint(e,Va);const f=e.distanceToSquared(Va);return f<o&&(Do.copy(Va),o=f,c=h),f<s}}),o===1/0)return null;const l=Math.sqrt(o);return t.point?t.point.copy(Do):t.point=Do.clone(),t.distance=l,t.faceIndex=c,t}const tr=parseInt(ds)>=169,Ly=parseInt(ds)<=161,vi=new P,Mi=new P,Si=new P,nr=new Ee,ir=new Ee,ar=new Ee,hh=new P,fh=new P,uh=new P,Wa=new P;function ky(a,e,t,n,i,s,r,o){let c;if(s===Ft?c=a.intersectTriangle(n,t,e,!0,i):c=a.intersectTriangle(e,t,n,s!==dn,i),c===null)return null;const l=a.origin.distanceTo(i);return l<r||l>o?null:{distance:l,point:i.clone()}}function ph(a,e,t,n,i,s,r,o,c,l,d){vi.fromBufferAttribute(e,s),Mi.fromBufferAttribute(e,r),Si.fromBufferAttribute(e,o);const h=ky(a,vi,Mi,Si,Wa,c,l,d);if(h){if(n){nr.fromBufferAttribute(n,s),ir.fromBufferAttribute(n,r),ar.fromBufferAttribute(n,o),h.uv=new Ee;const u=Mt.getInterpolation(Wa,vi,Mi,Si,nr,ir,ar,h.uv);tr||(h.uv=u)}if(i){nr.fromBufferAttribute(i,s),ir.fromBufferAttribute(i,r),ar.fromBufferAttribute(i,o),h.uv1=new Ee;const u=Mt.getInterpolation(Wa,vi,Mi,Si,nr,ir,ar,h.uv1);tr||(h.uv1=u),Ly&&(h.uv2=h.uv1)}if(t){hh.fromBufferAttribute(t,s),fh.fromBufferAttribute(t,r),uh.fromBufferAttribute(t,o),h.normal=new P;const u=Mt.getInterpolation(Wa,vi,Mi,Si,hh,fh,uh,h.normal);h.normal.dot(a.direction)>0&&h.normal.multiplyScalar(-1),tr||(h.normal=u)}const f={a:s,b:r,c:o,normal:new P,materialIndex:0};if(Mt.getNormal(vi,Mi,Si,f.normal),h.face=f,h.faceIndex=s,tr){const u=new P;Mt.getBarycoord(Wa,vi,Mi,Si,u),h.barycoord=u}}return h}function mh(a){return a&&a.isMaterial?a.side:a}function Br(a,e,t,n,i,s,r){const o=n*3;let c=o+0,l=o+1,d=o+2;const{index:h,groups:f}=a;a.index&&(c=h.getX(c),l=h.getX(l),d=h.getX(d));const{position:u,normal:b,uv:g,uv1:m}=a.attributes;if(Array.isArray(e)){const p=n*3;for(let x=0,y=f.length;x<y;x++){const{start:_,count:M,materialIndex:A}=f[x];if(p>=_&&p<_+M){const S=mh(e[A]),w=ph(t,u,b,g,m,c,l,d,S,s,r);if(w)if(w.faceIndex=n,w.face.materialIndex=A,i)i.push(w);else return w}}}else{const p=mh(e),x=ph(t,u,b,g,m,c,l,d,p,s,r);if(x)if(x.faceIndex=n,x.face.materialIndex=0,i)i.push(x);else return x}return null}function ut(a,e,t,n){const i=a.a,s=a.b,r=a.c;let o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),i.x=n.getX(o),i.y=n.getY(o),i.z=n.getZ(o),s.x=n.getX(c),s.y=n.getY(c),s.z=n.getZ(c),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l)}function Uy(a,e,t,n,i,s,r,o){const{geometry:c,_indirectBuffer:l}=a;for(let d=n,h=n+i;d<h;d++)Br(c,e,t,d,s,r,o)}function Ny(a,e,t,n,i,s,r){const{geometry:o,_indirectBuffer:c}=a;let l=1/0,d=null;for(let h=n,f=n+i;h<f;h++){let u;u=Br(o,e,t,h,null,s,r),u&&u.distance<l&&(d=u,l=u.distance)}return d}function Fy(a,e,t,n,i,s,r){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let d=a,h=e+a;d<h;d++){let f;if(f=d,ut(r,f*3,c,l),r.needsUpdate=!0,n(r,f,i,s))return!0}return!1}function By(a,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=a.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,r,o,c,l=0;const d=a._roots;for(let f=0,u=d.length;f<u;f++)s=d[f],r=new Uint32Array(s),o=new Uint16Array(s),c=new Float32Array(s),h(0,l),l+=s.byteLength;function h(f,u,b=!1){const g=f*2;if(mt(g,o)){const m=Dt(f,r),p=Nt(g,o);let x=1/0,y=1/0,_=1/0,M=-1/0,A=-1/0,S=-1/0;for(let w=3*m,E=3*(m+p);w<E;w++){let v=n[w];const C=i.getX(v),D=i.getY(v),L=i.getZ(v);C<x&&(x=C),C>M&&(M=C),D<y&&(y=D),D>A&&(A=D),L<_&&(_=L),L>S&&(S=L)}return c[f+0]!==x||c[f+1]!==y||c[f+2]!==_||c[f+3]!==M||c[f+4]!==A||c[f+5]!==S?(c[f+0]=x,c[f+1]=y,c[f+2]=_,c[f+3]=M,c[f+4]=A,c[f+5]=S,!0):!1}else{const m=St(f),p=Et(f,r);let x=b,y=!1,_=!1;if(e){if(!x){const v=m/pt+u/Pt,C=p/pt+u/Pt;y=e.has(v),_=e.has(C),x=!y&&!_}}else y=!0,_=!0;const M=x||y,A=x||_;let S=!1;M&&(S=h(m,u,x));let w=!1;A&&(w=h(p,u,x));const E=S||w;if(E)for(let v=0;v<3;v++){const C=m+v,D=p+v,L=c[C],k=c[C+3],O=c[D],z=c[D+3];c[f+v]=L<O?L:O,c[f+v+3]=k>z?k:z}return E}}}function di(a,e,t,n,i){let s,r,o,c,l,d;const h=1/t.direction.x,f=1/t.direction.y,u=1/t.direction.z,b=t.origin.x,g=t.origin.y,m=t.origin.z;let p=e[a],x=e[a+3],y=e[a+1],_=e[a+3+1],M=e[a+2],A=e[a+3+2];return h>=0?(s=(p-b)*h,r=(x-b)*h):(s=(x-b)*h,r=(p-b)*h),f>=0?(o=(y-g)*f,c=(_-g)*f):(o=(_-g)*f,c=(y-g)*f),s>c||o>r||((o>s||isNaN(s))&&(s=o),(c<r||isNaN(r))&&(r=c),u>=0?(l=(M-m)*u,d=(A-m)*u):(l=(A-m)*u,d=(M-m)*u),s>d||l>r)?!1:((l>s||s!==s)&&(s=l),(d<r||r!==r)&&(r=d),s<=i&&r>=n)}function Oy(a,e,t,n,i,s,r,o){const{geometry:c,_indirectBuffer:l}=a;for(let d=n,h=n+i;d<h;d++){let f=l?l[d]:d;Br(c,e,t,f,s,r,o)}}function Hy(a,e,t,n,i,s,r){const{geometry:o,_indirectBuffer:c}=a;let l=1/0,d=null;for(let h=n,f=n+i;h<f;h++){let u;u=Br(o,e,t,c?c[h]:h,null,s,r),u&&u.distance<l&&(d=u,l=u.distance)}return d}function zy(a,e,t,n,i,s,r){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let d=a,h=e+a;d<h;d++){let f;if(f=t.resolveTriangleIndex(d),ut(r,f*3,c,l),r.needsUpdate=!0,n(r,f,i,s))return!0}return!1}function jy(a,e,t,n,i,s,r){rt.setBuffer(a._roots[e]),Fc(0,a,t,n,i,s,r),rt.clearBuffer()}function Fc(a,e,t,n,i,s,r){const{float32Array:o,uint16Array:c,uint32Array:l}=rt,d=a*2;if(mt(d,c)){const f=Dt(a,l),u=Nt(d,c);Uy(e,t,n,f,u,i,s,r)}else{const f=St(a);di(f,o,n,s,r)&&Fc(f,e,t,n,i,s,r);const u=Et(a,l);di(u,o,n,s,r)&&Fc(u,e,t,n,i,s,r)}}const Gy=["x","y","z"];function Vy(a,e,t,n,i,s){rt.setBuffer(a._roots[e]);const r=Bc(0,a,t,n,i,s);return rt.clearBuffer(),r}function Bc(a,e,t,n,i,s){const{float32Array:r,uint16Array:o,uint32Array:c}=rt;let l=a*2;if(mt(l,o)){const h=Dt(a,c),f=Nt(l,o);return Ny(e,t,n,h,f,i,s)}else{const h=bl(a,c),f=Gy[h],b=n.direction[f]>=0;let g,m;b?(g=St(a),m=Et(a,c)):(g=Et(a,c),m=St(a));const x=di(g,r,n,i,s)?Bc(g,e,t,n,i,s):null;if(x){const M=x.point[f];if(b?M<=r[m+h]:M>=r[m+h+3])return x}const _=di(m,r,n,i,s)?Bc(m,e,t,n,i,s):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const sr=new ot,ea=new mn,ta=new mn,qa=new ye,bh=new jt,rr=new jt;function Wy(a,e,t,n){rt.setBuffer(a._roots[e]);const i=Oc(0,a,t,n);return rt.clearBuffer(),i}function Oc(a,e,t,n,i=null){const{float32Array:s,uint16Array:r,uint32Array:o}=rt;let c=a*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),bh.set(t.boundingBox.min,t.boundingBox.max,n),i=bh),mt(c,r)){const d=e.geometry,h=d.index,f=d.attributes.position,u=t.index,b=t.attributes.position,g=Dt(a,o),m=Nt(c,r);if(qa.copy(n).invert(),t.boundsTree)return lt(a,s,rr),rr.matrix.copy(qa),rr.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>rr.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=g*3,_=(m+g)*3;y<_;y+=3)if(ut(ta,y,h,f),ta.needsUpdate=!0,x.intersectsTriangle(ta))return!0;return!1}});{const p=Fr(t);for(let x=g*3,y=(m+g)*3;x<y;x+=3){ut(ea,x,h,f),ea.a.applyMatrix4(qa),ea.b.applyMatrix4(qa),ea.c.applyMatrix4(qa),ea.needsUpdate=!0;for(let _=0,M=p*3;_<M;_+=3)if(ut(ta,_,u,b),ta.needsUpdate=!0,ea.intersectsTriangle(ta))return!0}}}else{const d=St(a),h=Et(a,o);return lt(d,s,sr),!!(i.intersectsBox(sr)&&Oc(d,e,t,n,i)||(lt(h,s,sr),i.intersectsBox(sr)&&Oc(h,e,t,n,i)))}}const or=new ye,Lo=new jt,Xa=new jt,qy=new P,Xy=new P,Ky=new P,Yy=new P;function Jy(a,e,t,n={},i={},s=0,r=1/0){e.boundingBox||e.computeBoundingBox(),Lo.set(e.boundingBox.min,e.boundingBox.max,t),Lo.needsUpdate=!0;const o=a.geometry,c=o.attributes.position,l=o.index,d=e.attributes.position,h=e.index,f=nn.getPrimitive(),u=nn.getPrimitive();let b=qy,g=Xy,m=null,p=null;i&&(m=Ky,p=Yy);let x=1/0,y=null,_=null;return or.copy(t).invert(),Xa.matrix.copy(or),a.shapecast({boundsTraverseOrder:M=>Lo.distanceToBox(M),intersectsBounds:(M,A,S)=>S<x&&S<r?(A&&(Xa.min.copy(M.min),Xa.max.copy(M.max),Xa.needsUpdate=!0),!0):!1,intersectsRange:(M,A)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:w=>Xa.distanceToBox(w),intersectsBounds:(w,E,v)=>v<x&&v<r,intersectsRange:(w,E)=>{for(let v=w,C=w+E;v<C;v++){ut(u,3*v,h,d),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let D=M,L=M+A;D<L;D++){ut(f,3*D,l,c),f.needsUpdate=!0;const k=f.distanceToTriangle(u,b,m);if(k<x&&(g.copy(b),p&&p.copy(m),x=k,y=D,_=v),k<s)return!0}}}});{const S=Fr(e);for(let w=0,E=S;w<E;w++){ut(u,3*w,h,d),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let v=M,C=M+A;v<C;v++){ut(f,3*v,l,c),f.needsUpdate=!0;const D=f.distanceToTriangle(u,b,m);if(D<x&&(g.copy(b),p&&p.copy(m),x=D,y=v,_=w),D<s)return!0}}}}}),nn.releasePrimitive(f),nn.releasePrimitive(u),x===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=x,n.faceIndex=y,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(or),g.applyMatrix4(or),i.distance=g.sub(i.point).length(),i.faceIndex=_),n)}function Zy(a,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=a.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,r,o,c,l=0;const d=a._roots;for(let f=0,u=d.length;f<u;f++)s=d[f],r=new Uint32Array(s),o=new Uint16Array(s),c=new Float32Array(s),h(0,l),l+=s.byteLength;function h(f,u,b=!1){const g=f*2;if(mt(g,o)){const m=Dt(f,r),p=Nt(g,o);let x=1/0,y=1/0,_=1/0,M=-1/0,A=-1/0,S=-1/0;for(let w=m,E=m+p;w<E;w++){const v=3*a.resolveTriangleIndex(w);for(let C=0;C<3;C++){let D=v+C;D=n?n[D]:D;const L=i.getX(D),k=i.getY(D),O=i.getZ(D);L<x&&(x=L),L>M&&(M=L),k<y&&(y=k),k>A&&(A=k),O<_&&(_=O),O>S&&(S=O)}}return c[f+0]!==x||c[f+1]!==y||c[f+2]!==_||c[f+3]!==M||c[f+4]!==A||c[f+5]!==S?(c[f+0]=x,c[f+1]=y,c[f+2]=_,c[f+3]=M,c[f+4]=A,c[f+5]=S,!0):!1}else{const m=St(f),p=Et(f,r);let x=b,y=!1,_=!1;if(e){if(!x){const v=m/pt+u/Pt,C=p/pt+u/Pt;y=e.has(v),_=e.has(C),x=!y&&!_}}else y=!0,_=!0;const M=x||y,A=x||_;let S=!1;M&&(S=h(m,u,x));let w=!1;A&&(w=h(p,u,x));const E=S||w;if(E)for(let v=0;v<3;v++){const C=m+v,D=p+v,L=c[C],k=c[C+3],O=c[D],z=c[D+3];c[f+v]=L<O?L:O,c[f+v+3]=k>z?k:z}return E}}}function Qy(a,e,t,n,i,s,r){rt.setBuffer(a._roots[e]),Hc(0,a,t,n,i,s,r),rt.clearBuffer()}function Hc(a,e,t,n,i,s,r){const{float32Array:o,uint16Array:c,uint32Array:l}=rt,d=a*2;if(mt(d,c)){const f=Dt(a,l),u=Nt(d,c);Oy(e,t,n,f,u,i,s,r)}else{const f=St(a);di(f,o,n,s,r)&&Hc(f,e,t,n,i,s,r);const u=Et(a,l);di(u,o,n,s,r)&&Hc(u,e,t,n,i,s,r)}}const $y=["x","y","z"];function ev(a,e,t,n,i,s){rt.setBuffer(a._roots[e]);const r=zc(0,a,t,n,i,s);return rt.clearBuffer(),r}function zc(a,e,t,n,i,s){const{float32Array:r,uint16Array:o,uint32Array:c}=rt;let l=a*2;if(mt(l,o)){const h=Dt(a,c),f=Nt(l,o);return Hy(e,t,n,h,f,i,s)}else{const h=bl(a,c),f=$y[h],b=n.direction[f]>=0;let g,m;b?(g=St(a),m=Et(a,c)):(g=Et(a,c),m=St(a));const x=di(g,r,n,i,s)?zc(g,e,t,n,i,s):null;if(x){const M=x.point[f];if(b?M<=r[m+h]:M>=r[m+h+3])return x}const _=di(m,r,n,i,s)?zc(m,e,t,n,i,s):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const cr=new ot,na=new mn,ia=new mn,Ka=new ye,gh=new jt,lr=new jt;function tv(a,e,t,n){rt.setBuffer(a._roots[e]);const i=jc(0,a,t,n);return rt.clearBuffer(),i}function jc(a,e,t,n,i=null){const{float32Array:s,uint16Array:r,uint32Array:o}=rt;let c=a*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),gh.set(t.boundingBox.min,t.boundingBox.max,n),i=gh),mt(c,r)){const d=e.geometry,h=d.index,f=d.attributes.position,u=t.index,b=t.attributes.position,g=Dt(a,o),m=Nt(c,r);if(Ka.copy(n).invert(),t.boundsTree)return lt(a,s,lr),lr.matrix.copy(Ka),lr.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>lr.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=g,_=m+g;y<_;y++)if(ut(ia,3*e.resolveTriangleIndex(y),h,f),ia.needsUpdate=!0,x.intersectsTriangle(ia))return!0;return!1}});{const p=Fr(t);for(let x=g,y=m+g;x<y;x++){const _=e.resolveTriangleIndex(x);ut(na,3*_,h,f),na.a.applyMatrix4(Ka),na.b.applyMatrix4(Ka),na.c.applyMatrix4(Ka),na.needsUpdate=!0;for(let M=0,A=p*3;M<A;M+=3)if(ut(ia,M,u,b),ia.needsUpdate=!0,na.intersectsTriangle(ia))return!0}}}else{const d=St(a),h=Et(a,o);return lt(d,s,cr),!!(i.intersectsBox(cr)&&jc(d,e,t,n,i)||(lt(h,s,cr),i.intersectsBox(cr)&&jc(h,e,t,n,i)))}}const dr=new ye,ko=new jt,Ya=new jt,nv=new P,iv=new P,av=new P,sv=new P;function rv(a,e,t,n={},i={},s=0,r=1/0){e.boundingBox||e.computeBoundingBox(),ko.set(e.boundingBox.min,e.boundingBox.max,t),ko.needsUpdate=!0;const o=a.geometry,c=o.attributes.position,l=o.index,d=e.attributes.position,h=e.index,f=nn.getPrimitive(),u=nn.getPrimitive();let b=nv,g=iv,m=null,p=null;i&&(m=av,p=sv);let x=1/0,y=null,_=null;return dr.copy(t).invert(),Ya.matrix.copy(dr),a.shapecast({boundsTraverseOrder:M=>ko.distanceToBox(M),intersectsBounds:(M,A,S)=>S<x&&S<r?(A&&(Ya.min.copy(M.min),Ya.max.copy(M.max),Ya.needsUpdate=!0),!0):!1,intersectsRange:(M,A)=>{if(e.boundsTree){const S=e.boundsTree;return S.shapecast({boundsTraverseOrder:w=>Ya.distanceToBox(w),intersectsBounds:(w,E,v)=>v<x&&v<r,intersectsRange:(w,E)=>{for(let v=w,C=w+E;v<C;v++){const D=S.resolveTriangleIndex(v);ut(u,3*D,h,d),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let L=M,k=M+A;L<k;L++){const O=a.resolveTriangleIndex(L);ut(f,3*O,l,c),f.needsUpdate=!0;const z=f.distanceToTriangle(u,b,m);if(z<x&&(g.copy(b),p&&p.copy(m),x=z,y=L,_=v),z<s)return!0}}}})}else{const S=Fr(e);for(let w=0,E=S;w<E;w++){ut(u,3*w,h,d),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let v=M,C=M+A;v<C;v++){const D=a.resolveTriangleIndex(v);ut(f,3*D,l,c),f.needsUpdate=!0;const L=f.distanceToTriangle(u,b,m);if(L<x&&(g.copy(b),p&&p.copy(m),x=L,y=v,_=w),L<s)return!0}}}}}),nn.releasePrimitive(f),nn.releasePrimitive(u),x===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=x,n.faceIndex=y,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(dr),g.applyMatrix4(dr),i.distance=g.sub(i.point).length(),i.faceIndex=_),n)}function xh(a,e,t){return a===null?null:(a.point.applyMatrix4(e.matrixWorld),a.distance=a.point.distanceTo(t.ray.origin),a.object=e,a)}const hr=new jt,fr=new Ea,_h=new P,yh=new ye,vh=new P,Uo=["getX","getY","getZ"];class Cr extends wy{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,s=e._indirectBuffer,r=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=i.map(c=>c.slice()),o.index=r?r.array.slice():null,o.indirectBuffer=s?s.slice():null):(o.roots=i,o.index=r?r.array:null,o.indirectBuffer=s),o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:s,indirectBuffer:r}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(s));const o=new Cr(t,{...n,[ml]:!0});if(o._roots=s,o._indirectBuffer=r||null,n.setIndex){const l=t.getIndex();if(l===null){const d=new gt(e.index,1,!1);t.setIndex(d)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return o;function c(l){for(let d=0;d<l.length;d++){const h=l[d],f=new Uint32Array(h),u=new Uint16Array(h);for(let b=0,g=h.byteLength/Pt;b<g;b++){const m=pt*b,p=2*m;mt(p,u)||(f[m+6]=f[m+6]/pt-b)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),t={...t,maxLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){const i=this.geometry,s=this._indirectBuffer,r=i.attributes.position,o=i.index?i.index.array:null,l=(s?s[e]:e)*3;let d=l+0,h=l+1,f=l+2;o&&(d=o[d],h=o[h],f=o[f]);for(let u=0;u<3;u++){const b=r[Uo[u]](d),g=r[Uo[u]](h),m=r[Uo[u]](f);let p=b;g<p&&(p=g),m<p&&(p=m);let x=b;g>x&&(x=g),m>x&&(x=m),t[n+u]=p,t[n+u+3]=x}return t}computePrimitiveBounds(e,t,n){const i=this.geometry,s=this._indirectBuffer,r=i.attributes.position,o=i.index?i.index.array:null,c=r.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const l=r.array,d=r.offset||0;let h=3;r.isInterleavedBufferAttribute&&(h=r.data.stride);const f=["getX","getY","getZ"],u=n.offset;for(let b=e,g=e+t;b<g;b++){const p=(s?s[b]:b)*3,x=(b-u)*6;let y=p+0,_=p+1,M=p+2;o&&(y=o[y],_=o[_],M=o[M]),c||(y=y*h+d,_=_*h+d,M=M*h+d);for(let A=0;A<3;A++){let S,w,E;c?(S=r[f[A]](y),w=r[f[A]](_),E=r[f[A]](M)):(S=l[y+A],w=l[_+A],E=l[M+A]);let v=S;w<v&&(v=w),E<v&&(v=E);let C=S;w>C&&(C=w),E>C&&(C=E);const D=(C-v)/2,L=A*2;n[x+L+0]=v+D,n[x+L+1]=D+(Math.abs(v)+D)*Mr}}return n}raycastObject3D(e,t,n=[]){const{material:i}=e;if(i===void 0)return;yh.copy(e.matrixWorld).invert(),fr.copy(t.ray).applyMatrix4(yh),vh.setFromMatrixScale(e.matrixWorld),_h.copy(fr.direction).multiply(vh);const s=_h.length(),r=t.near/s,o=t.far/s;if(t.firstHitOnly===!0){let c=this.raycastFirst(fr,i,r,o);c=xh(c,e,t),c&&n.push(c)}else{const c=this.raycast(fr,i,r,o);for(let l=0,d=c.length;l<d;l++){const h=xh(c[l],e,t);h&&n.push(h)}}return n}refit(e=null){return(this.indirect?Zy:By)(this,e)}raycast(e,t=pn,n=0,i=1/0){const s=this._roots,r=[],o=this.indirect?Qy:jy;for(let c=0,l=s.length;c<l;c++)o(this,c,t,e,r,n,i);return r}raycastFirst(e,t=pn,n=0,i=1/0){const s=this._roots;let r=null;const o=this.indirect?ev:Vy;for(let c=0,l=s.length;c<l;c++){const d=o(this,c,t,e,n,i);d!=null&&(r==null||d.distance<r.distance)&&(r=d)}return r}intersectsGeometry(e,t){let n=!1;const i=this._roots,s=this.indirect?tv:Wy;for(let r=0,o=i.length;r<o&&(n=s(this,r,e,t),!n);r++);return n}shapecast(e){const t=nn.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?zy:Fy});return nn.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const r=nn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?b=>{const g=this.resolveTriangleIndex(b);ut(r,g*3,o,c)}:b=>{ut(r,b*3,o,c)},d=nn.getPrimitive(),h=e.geometry.index,f=e.geometry.attributes.position,u=e.indirect?b=>{const g=e.resolveTriangleIndex(b);ut(d,g*3,h,f)}:b=>{ut(d,b*3,h,f)};if(s){if(!(e instanceof Cr))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const b=(g,m,p,x,y,_,M,A)=>{for(let S=p,w=p+x;S<w;S++){u(S),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let E=g,v=g+m;E<v;E++)if(l(E),r.needsUpdate=!0,s(r,d,E,S,y,_,M,A))return!0}return!1};if(i){const g=i;i=function(m,p,x,y,_,M,A,S){return g(m,p,x,y,_,M,A,S)?!0:b(m,p,x,y,_,M,A,S)}}else i=b}return super.bvhcast(e,t,{intersectsRanges:i})}intersectsBox(e,t){return hr.set(e.min,e.max,t),hr.needsUpdate=!0,this.shapecast({intersectsBounds:n=>hr.intersectsBox(n),intersectsTriangle:n=>hr.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,r=1/0){return(this.indirect?rv:Jy)(this,e,t,n,i,s,r)}closestPointToPoint(e,t={},n=0,i=1/0){return Dy(this,e,t,n,i)}}const aa={Mesh:ft.prototype.raycast,Line:ps.prototype.raycast,LineSegments:cl.prototype.raycast,LineLoop:ll.prototype.raycast,Points:dl.prototype.raycast,BatchedMesh:T_.prototype.raycast},At=new ft,ur=[];function ov(a,e){if(this.isBatchedMesh)cv.call(this,a,e);else{const{geometry:t}=this;if(t.boundsTree)t.boundsTree.raycastObject3D(this,a,e);else{let n;if(this instanceof ft)n=aa.Mesh;else if(this instanceof cl)n=aa.LineSegments;else if(this instanceof ll)n=aa.LineLoop;else if(this instanceof ps)n=aa.Line;else if(this instanceof dl)n=aa.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,a,e)}}}function cv(a,e){if(this.boundsTrees){const t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,s=this.matrixWorld;At.material=this.material,At.geometry=this.geometry;const r=At.geometry.boundsTree,o=At.geometry.drawRange;At.geometry.boundingSphere===null&&(At.geometry.boundingSphere=new Ot);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;const d=n[c].geometryIndex;if(At.geometry.boundsTree=t[d],this.getMatrixAt(c,At.matrixWorld).premultiply(s),!At.geometry.boundsTree){this.getBoundingBoxAt(d,At.geometry.boundingBox),this.getBoundingSphereAt(d,At.geometry.boundingSphere);const h=i[d];At.geometry.setDrawRange(h.start,h.count)}At.raycast(a,ur);for(let h=0,f=ur.length;h<f;h++){const u=ur[h];u.object=this,u.batchId=c,e.push(u)}ur.length=0}At.geometry.boundsTree=r,At.geometry.drawRange=o,At.material=null,At.geometry=null}else aa.BatchedMesh.call(this,a,e)}function lv(a={}){const{type:e=Cr}=a;return this.boundsTree=new e(this,a),this.boundsTree}function dv(){this.boundsTree=null}zt.prototype.computeBoundsTree=lv;zt.prototype.disposeBoundsTree=dv;ft.prototype.raycast=ov;const hv=.3,fv=[.55,1.2],uv=10;class pv{constructor(){this.raycaster=new ry,this.colliders=[],this.tmpStep=new P,this.tmpFrom=new P,this.tmpDir=new P,this.tmpAfterX=new P,this.raycaster.firstHitOnly=!0}setColliders(e){this.colliders=e;for(const t of e){const n=t;if(n.isMesh)try{n.geometry.boundsTree===void 0&&n.geometry.computeBoundsTree()}catch{}}}resolveMove(e,t,n,i){return i.set(0,0,0),this.colliders.length===0?i.set(n.x,0,n.z):(this.tmpStep.set(n.x,0,0),this.isStepFree(e,t,this.tmpStep)&&(i.x=n.x),this.tmpAfterX.set(e.x+i.x,e.y,e.z),this.tmpStep.set(0,0,n.z),this.isStepFree(this.tmpAfterX,t,this.tmpStep)&&(i.z=n.z),i)}findFloorHeight(e){if(this.colliders.length===0)return null;this.tmpDir.set(0,-1,0),this.raycaster.set(e,this.tmpDir),this.raycaster.far=uv;const t=this.raycaster.intersectObjects(this.colliders,!0);return t.length>0?t[0].point.y:null}isStepFree(e,t,n){const i=n.length();if(i===0)return!0;this.tmpDir.copy(n).normalize(),this.raycaster.far=i+hv;for(const s of fv)if(this.tmpFrom.set(e.x,t+s,e.z),this.raycaster.set(this.tmpFrom,this.tmpDir),this.raycaster.intersectObjects(this.colliders,!0).length>0)return!1;return!0}}const Mh=1.4,mv=10,bv=.2,gv=.15,xv=.7,_v=.4,Sh=2,Eh=3,yv=new P(0,1,0);class vv{constructor(e,t,n){this.player=e,this.camera=t,this.collision=n,this.smoothMoveEnabled=!0,this.currentSpeedRatio=0,this.snapReady=!0,this.snapRepeatTimer=0,this.forward=new P,this.right=new P,this.desiredDelta=new P,this.allowedDelta=new P,this.headPos=new P,this.headBefore=new P,this.headAfter=new P}update(e,t){if(this.currentSpeedRatio=0,e!==null)for(const n of e.inputSources){const i=n.gamepad;!i||i.axes.length<=Eh||(n.handedness==="left"?this.handleSmoothMove(i,t):n.handedness==="right"&&this.handleSnapTurn(i,t))}}handleSmoothMove(e,t){if(!this.smoothMoveEnabled)return;const n=e.axes[Sh],i=e.axes[Eh],s=Math.hypot(n,i);if(s<gv||(this.camera.getWorldDirection(this.forward),this.forward.y=0,this.forward.lengthSq()===0))return;this.forward.normalize(),this.right.crossVectors(this.forward,yv);const r=Math.min(s,1)*Mh;this.desiredDelta.set(0,0,0).addScaledVector(this.forward,-i).addScaledVector(this.right,n).normalize().multiplyScalar(r*t),this.camera.getWorldPosition(this.headPos),this.collision.resolveMove(this.headPos,this.player.position.y,this.desiredDelta,this.allowedDelta),this.player.position.add(this.allowedDelta),this.currentSpeedRatio=r/Mh}handleSnapTurn(e,t){const n=e.axes[Sh];if(Math.abs(n)<_v){this.snapReady=!0,this.snapRepeatTimer=0;return}if(Math.abs(n)<xv)return;if(this.snapReady)this.snapReady=!1,this.snapRepeatTimer=0;else{if(this.snapRepeatTimer+=t,this.snapRepeatTimer<bv)return;this.snapRepeatTimer=0}const i=-Math.sign(n)*xa.degToRad(mv);this.camera.getWorldPosition(this.headBefore),this.player.rotateY(i),this.player.updateMatrixWorld(!0),this.camera.getWorldPosition(this.headAfter),this.player.position.add(this.headBefore.sub(this.headAfter))}}const Ah=4,Mv=.35,Th=1,Sv=.25;class Ev{constructor(e){this.intensitySetting=1,this.uniforms={uAperture:{value:Th}},this.currentLevel=0;const t=new zn({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:this.uniforms,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform float uAperture;
        void main() {
          // Merkezden uzaklık (0 = merkez, ~0.7 = köşe)
          float dist = length(vUv - vec2(0.5));
          float alpha = smoothstep(uAperture, uAperture + ${Sv.toFixed(2)}, dist);
          gl_FragColor = vec4(0.0, 0.0, 0.0, alpha);
        }
      `});this.mesh=new ft(new us(Ah,Ah),t),this.mesh.position.set(0,0,-.4),this.mesh.renderOrder=9999,this.mesh.frustumCulled=!1,e.add(this.mesh)}update(e,t){const n=xa.clamp(e,0,1)*this.intensitySetting,i=1-Math.exp(-6*t);this.currentLevel+=(n-this.currentLevel)*i,this.uniforms.uAperture.value=xa.lerp(Th,Mv,this.currentLevel),this.mesh.visible=this.currentLevel>.01}}const Av=1.4,wh=.002,Tv=1.6,Rh=Math.PI/2-.05;class wv{constructor(e,t,n,i){this.player=e,this.camera=t,this.collision=n,this.enabled=!0,this.pressedKeys=new Set,this.pitch=0,this.forward=new P,this.right=new P,this.desiredDelta=new P,this.allowedDelta=new P,this.bodyCenter=new P,t.position.y=Tv,i.addEventListener("click",()=>{this.enabled&&document.pointerLockElement!==i&&i.requestPointerLock()}),document.addEventListener("mousemove",s=>{!this.enabled||document.pointerLockElement!==i||(this.player.rotation.y-=s.movementX*wh,this.pitch=xa.clamp(this.pitch-s.movementY*wh,-Rh,Rh),this.camera.rotation.x=this.pitch)}),document.addEventListener("keydown",s=>this.pressedKeys.add(s.code)),document.addEventListener("keyup",s=>this.pressedKeys.delete(s.code)),window.addEventListener("blur",()=>this.pressedKeys.clear())}update(e){if(!this.enabled)return;const t=(this.pressedKeys.has("KeyW")?1:0)-(this.pressedKeys.has("KeyS")?1:0),n=(this.pressedKeys.has("KeyD")?1:0)-(this.pressedKeys.has("KeyA")?1:0);t===0&&n===0||(this.camera.getWorldDirection(this.forward),this.forward.y=0,this.forward.normalize(),this.right.crossVectors(this.forward,new P(0,1,0)),this.desiredDelta.set(0,0,0).addScaledVector(this.forward,t).addScaledVector(this.right,n).normalize().multiplyScalar(Av*e),this.camera.getWorldPosition(this.bodyCenter),this.collision.resolveMove(this.bodyCenter,this.player.position.y,this.desiredDelta,this.allowedDelta),this.player.position.add(this.allowedDelta))}}function Ch(a,e){if(e===wu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===wc||e===cf){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===wc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class Rv extends Ra{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Lv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new Xv(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=is.extractUrlBase(e);r=is.resolveURL(l,this.path)}else r=is.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new kf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(d){t(d),s.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Hf){try{r[Be.KHR_BINARY_GLTF]=new Kv(e)}catch(h){i&&i(h);return}s=JSON.parse(r[Be.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new o0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],f=s.extensionsRequired||[];switch(h){case Be.KHR_MATERIALS_UNLIT:r[h]=new Pv;break;case Be.KHR_DRACO_MESH_COMPRESSION:r[h]=new Yv(s,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:r[h]=new Jv;break;case Be.KHR_MESH_QUANTIZATION:r[h]=new Zv;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Cv(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Iv{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const d=new Te(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],Ht);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new K_(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new q_(d),l.distance=h;break;case"spot":l=new V_(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Dn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Pv{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return ai}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Ht),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,vt))}return Promise.all(i)}}class Dv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Lv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(o,o)}return Promise.all(s)}}class kv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Uv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Nv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ht)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,vt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Fv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Bv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],Ht),Promise.all(s)}}class Ov{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Hv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],Ht),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,vt)),Promise.all(s)}}class zv{constructor(e){this.parser=e,this.name=Be.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class jv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class Gv{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Vv{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Wv{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qv{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,d=i.count,h=i.byteStride,f=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(d,h,f,i.mode,i.filter).then(function(u){return u.buffer}):r.ready.then(function(){const u=new ArrayBuffer(d*h);return r.decodeGltfBuffer(new Uint8Array(u),d,h,f,i.mode,i.filter),u})})}else return null}}class Xv{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==tn.TRIANGLES&&l.mode!==tn.TRIANGLE_STRIP&&l.mode!==tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],f=l[0].count,u=[];for(const b of h){const g=new ye,m=new P,p=new hi,x=new P(1,1,1),y=new __(b.geometry,b.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,g.compose(m,p,x));for(const _ in c)if(_==="_COLOR_0"){const M=c[_];y.instanceColor=new Ic(M.array,M.itemSize,M.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&b.geometry.setAttribute(_,c[_]);st.prototype.copy.call(y,b),this.parser.assignFinalMaterial(y),u.push(y)}return d.isGroup?(d.clear(),d.add(...u),d):u[0]}))}}const Hf="glTF",Ja=12,Ih={JSON:1313821514,BIN:5130562};class Kv{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ja),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ja,s=new DataView(e,Ja);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===Ih.JSON){const l=new Uint8Array(e,Ja+r,o);this.content=n.decode(l)}else if(c===Ih.BIN){const l=Ja+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Yv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const d in r){const h=Gc[d]||d.toLowerCase();o[h]=r[d]}for(const d in e.attributes){const h=Gc[d]||d.toLowerCase();if(r[d]!==void 0){const f=n.accessors[e.attributes[d]],u=da[f.componentType];l[h]=u.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(h,f){i.decodeDracoFile(d,function(u){for(const b in u.attributes){const g=u.attributes[b],m=c[b];m!==void 0&&(g.normalized=m)}h(u)},o,l,Ht,f)})})}}class Jv{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Zv{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class zf extends ms{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=i-t,h=(n-t)/d,f=h*h,u=f*h,b=e*l,g=b-l,m=-2*u+3*f,p=u-f,x=1-m,y=p-f+h;for(let _=0;_!==o;_++){const M=r[g+_+o],A=r[g+_+c]*d,S=r[b+_+o],w=r[b+_]*d;s[_]=x*M+y*A+m*S+p*w}return s}}const Qv=new hi;class $v extends zf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Qv.fromArray(s).normalize().toArray(s),s}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},da={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ph={9728:Bt,9729:Yt,9984:Zh,9985:mr,9986:Za,9987:Un},Dh={33071:ii,33648:Er,10497:pa},No={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},e0={CUBICSPLINE:void 0,LINEAR:os,STEP:rs},Fo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function t0(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new hl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pn})),a.DefaultMaterial}function Ei(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Dn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function n0(a,e,t){let n=!1,i=!1,s=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;r.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;c.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],f=l[2];return n&&(a.morphAttributes.position=d),i&&(a.morphAttributes.normal=h),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function i0(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function a0(a){let e;const t=a.extensions&&a.extensions[Be.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bo(t.attributes):e=a.indices+":"+Bo(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+Bo(a.targets[n]);return e}function Bo(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Vc(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function s0(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const r0=new ye;class o0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new z_(this.options.manager):this.textureLoader=new Y_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Ei(s,o,i),Dn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,d]of r.children.entries())s(d,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(is.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=No[i.type],o=da[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new gt(l,r,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],c=No[i.type],l=da[i.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0;let g,m;if(u&&u!==h){const p=Math.floor(f/u),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(x);y||(g=new l(o,p*u,i.count*u/d),y=new Tf(g,u/d),t.cache.add(x,y)),m=new ls(y,c,f%u/d,b)}else o===null?g=new l(i.count*c):g=new l(o,f,i.count*c),m=new gt(g,c,b);if(i.sparse!==void 0){const p=No.SCALAR,x=da[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,M=new x(r[1],y,i.sparse.count*p),A=new l(r[2],_,i.sparse.count*c);o!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,w=M.length;S<w;S++){const E=M[S];if(m.setX(E,A[S*c]),c>=2&&m.setY(E,A[S*c+1]),c>=3&&m.setZ(E,A[S*c+2]),c>=4&&m.setW(E,A[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=b}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=r.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const f=(s.samplers||{})[r.sampler]||{};return d.magFilter=Ph[f.magFilter]||Yt,d.minFilter=Ph[f.minFilter]||Un,d.wrapS=Dh[f.wrapS]||pa,d.wrapT=Dh[f.wrapT]||pa,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Bt&&d.minFilter!==Yt,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=i.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:r.mimeType});return c=o.createObjectURL(f),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(f,u){let b=f;t.isImageBitmapLoader===!0&&(b=function(g){const m=new bt(g);m.needsUpdate=!0,f(m)}),t.load(is.resolveURL(h,s.path),b,void 0,u)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Dn(h,r),h.userData.mimeType=r.mimeType||s0(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[Be.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(r);r=s.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Pf,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new If,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return hl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},c=s.extensions||{},l=[];if(c[Be.KHR_MATERIALS_UNLIT]){const h=i[Be.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Ht),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,vt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=dn);const d=s.alphaMode||Fo.OPAQUE;if(d===Fo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Fo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==ai&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ee(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&r!==ai&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==ai){const h=s.emissiveFactor;o.emissive=new Te().setRGB(h[0],h[1],h[2],Ht)}return s.emissiveTexture!==void 0&&r!==ai&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,vt)),Promise.all(l).then(function(){const h=new r(o);return s.name&&(h.name=s.name),Dn(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ei(i,h,s),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Lh(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=a0(l),h=i[d];if(h)r.push(h.promise);else{let f;l.extensions&&l.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Lh(new zt,l,t),i[d]={primitive:l,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const d=r[c].material===void 0?t0(this.cache):this.getDependency("material",r[c].material);o.push(d)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let u=0,b=d.length;u<b;u++){const g=d[u],m=r[u];let p;const x=l[u];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new b_(g,x):new ft(g,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?p.geometry=Ch(p.geometry,cf):m.mode===tn.TRIANGLE_FAN&&(p.geometry=Ch(p.geometry,wc));else if(m.mode===tn.LINES)p=new cl(g,x);else if(m.mode===tn.LINE_STRIP)p=new ps(g,x);else if(m.mode===tn.LINE_LOOP)p=new ll(g,x);else if(m.mode===tn.POINTS)p=new dl(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&i0(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Dn(p,s),m.extensions&&Ei(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let u=0,b=h.length;u<b;u++)t.associations.set(h[u],{meshes:e,primitives:u});if(h.length===1)return s.extensions&&Ei(i,h[0],s),h[0];const f=new Fn;s.extensions&&Ei(i,f,s),t.associations.set(f,{meshes:e});for(let u=0,b=h.length;u<b;u++)f.add(h[u]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(xa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new sl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Dn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],c=[];for(let l=0,d=r.length;l<d;l++){const h=r[l];if(h){o.push(h);const f=new ye;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ol(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],d=[];for(let h=0,f=i.channels.length;h<f;h++){const u=i.channels[h],b=i.samplers[u.sampler],g=u.target,m=g.node,p=i.parameters!==void 0?i.parameters[b.input]:b.input,x=i.parameters!==void 0?i.parameters[b.output]:b.output;g.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(b),d.push(g))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const f=h[0],u=h[1],b=h[2],g=h[3],m=h[4],p=[];for(let x=0,y=f.length;x<y;x++){const _=f[x],M=u[x],A=b[x],S=g[x],w=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const E=n._createAnimationTracks(_,M,A,S,w);if(E)for(let v=0;v<E.length;v++)p.push(E[v])}return new k_(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,d=o.length;l<d;l++)r.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const d=l[0],h=l[1],f=l[2];f!==null&&d.traverse(function(u){u.isSkinnedMesh&&u.bind(f,r0)});for(let u=0,b=h.length;u<b;u++)d.add(h[u]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(s.isBone===!0?d=new Cf:l.length>1?d=new Fn:l.length===1?d=l[0]:d=new st,d!==l[0])for(let h=0,f=l.length;h<f;h++)d.add(l[h]);if(s.name&&(d.userData.name=s.name,d.name=r),Dn(d,s),s.extensions&&Ei(n,d,s),s.matrix!==void 0){const h=new ye;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Fn;n.name&&(s.name=i.createUniqueName(n.name)),Dn(s,n),n.extensions&&Ei(t,s,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let d=0,h=c.length;d<h;d++)s.add(c[d]);const l=d=>{const h=new Map;for(const[f,u]of i.associations)(f instanceof un||f instanceof bt)&&h.set(f,u);return d.traverse(f=>{const u=i.associations.get(f);u!=null&&h.set(f,u)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],o=e.name?e.name:e.uuid,c=[];$n[s.path]===$n.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch($n[s.path]){case $n.weights:l=ya;break;case $n.rotation:l=va;break;case $n.position:case $n.scale:l=Ma;break;default:switch(n.itemSize){case 1:l=ya;break;case 2:case 3:default:l=Ma;break}break}const d=i.interpolation!==void 0?e0[i.interpolation]:os,h=this._getArrayFromAccessor(n);for(let f=0,u=c.length;f<u;f++){const b=new l(c[f]+"."+$n[s.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),r.push(b)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Vc(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof va?$v:zf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function c0(a,e,t){const n=e.attributes,i=new ot;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){const d=Vc(da[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,c=new P;for(let l=0,d=s.length;l<d;l++){const h=s[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],u=f.min,b=f.max;if(u!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(b[2]))),f.normalized){const g=Vc(da[f.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Ot;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function Lh(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){a.setAttribute(o,c)})}for(const r in n){const o=Gc[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return Oe.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Oe.workingColorSpace}" not supported.`),Dn(a,e),c0(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?n0(a,e.targets,t):a})}(function(){var a="b9H79TebbbeJq9Geueu9Geub9Gbb9Gvuuuuueu9Gduueu9Gluuuueu9Gvuuuuub9Gouuuuuub9Gluuuub9GiuuueuiKLdilevlevlooroowwvwbDDbelve9Weiiviebeoweuec:G:Qdkr;RiOo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWVbe8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9c9V919U9KbdE9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949wWV79P9V9UbiY9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWVbl8E9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWV9c9V919U9Kbv8A9TW79O9V9Wt9FW9U9J9V9KW69U9KW949wWV79P9V9UboE9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JWbra9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JW9c9V919U9KbwL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9p9JtbDK9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9r919HtbqL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVT949WbkE9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OWbPa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OW9ttV9P9Wbsa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbzK9TW79O9V9Wt9F79W9Ht9P9H29t9VVt9sW9T9H9WbHl79IV9RbODwebcekdQXq;A9pLdbk;QqeKu8Jjjjjbcjo9Rgv8Kjjjjbcbhodnalcefae0mbabcbRbN:kjjbc:GeV86bbavcjdfcbcjdzNjjjb8AdnaiTmbavcjdfadalz:tjjjb8Akabaefhrabcefhwavalfcbcbcjdal9RalcFe0EzNjjjb8Aavavcjdfalz:tjjjbhDcj;abal9Uc;WFbGgecjdaecjd6Ehqcbhkindndnaiak9nmbaDcjlfcbcjdzNjjjb8Aaqaiak9Rakaqfai6Egxcsfgecl4cifcd4hmadakal2fhPdndndnaec9WGgsTmbcbhzaPhHawhOxekdnaxmbalheinaraw9Ram6miawcbamzNjjjbamfhwaecufgembxvkkcbhAaPhOinaDaAfRbbhCaDcjlfheaOhoaxhXinaeaoRbbgQaC9RgCcetaCcKtcK91cr4786bbaoalfhoaecefheaQhCaXcufgXmbkaraw9Ram6mdaOcefhOawcbamzNjjjbamfhwaAcefgAal9hmbxlkkindnaxTmbaDazfRbbhCaDcjlfheaHhoaxhXinaeaoRbbgQaC9RgCcetaCcKtcK91cr4786bbaoalfhoaecefheaQhCaXcufgXmbkkaraO9Ram6mearaOcbamzNjjjbgLamfgw9RcK6mecbhKaDcjlfhOinaDcjlfaKfhYcwhAczhQceheindndnaegXce9hmbcuhoaYRbbmecbhodninaogecsSmeaecefhoaOaefcefRbbTmbkkcucbaecs6EhoxekaXcethocuaXtc;:bGcFb7hCcbheinaoaCaOaefRbb9nfhoaecefgecz9hmbkkaoaQaoaQ6geEhQaXaAaeEhAaXcetheaXcl6mbkdndndndnaAcufPdiebkaLaKco4fgeaeRbbcdciaAclSEaKci4coGtV86bbaAcw9hmeawaY8Pbb83bbawcwfaYcwf8Pbb83bbawczfhwxdkaLaKco4fgeaeRbbceaKci4coGtV86bbkdncwaA9Tg8Ambinawcb86bbawcefhwxbkkcuaAtcu7hYcbhEaOh3ina3hea8AhCcbhoinaeRbbgQaYcFeGgXaQaX6EaoaAtVhoaecefheaCcufgCmbkawao86bba3a8Afh3awcefhwaEa8AfgEcz6mbkcbheindnaOaefRbbgoaX6mbawao86bbawcefhwkaecefgecz9hmbkkdnaKczfgKas9pmbaOczfhOaraw9RcL0mekkaKas6meawTmeaHcefhHawhOazcefgzalSmixbkkcbhoxikcbhoaraw9Ralcaalca0E6mddnalc8F0mbawcbcaal9RgezNjjjbaefhwkawaDcjdfalz:tjjjbalfab9RhoxdkaDaPaxcufal2falz:tjjjb8Aaxakfhkawmbkcbhokavcjof8Kjjjjbaok9heeuaecaaeca0Eabcj;abae9Uc;WFbGgdcjdadcjd6Egdfcufad9Uae2adcl4cifcd4adV2fcefkmbcbabBdN:kjjbk:zse5u8Jjjjjbc;ae9Rgl8Kjjjjbcbhvdnaici9UgocHfae0mbabcbyd:e:kjjbgrc;GeV86bbalc;abfcFecjezNjjjb8AalcUfgw9cu83ibalc8WfgD9cu83ibalcyfgq9cu83ibalcafgk9cu83ibalcKfgx9cu83ibalczfgm9cu83ibal9cu83iwal9cu83ibabaefc9WfhPabcefgsaofhednaiTmbcmcsarcb9kgzEhHcbhOcbhAcbhCcbhXcbhQindnaeaP9nmbcbhvxikaQcufhvadaCcdtfgLydbhKaLcwfydbhYaLclfydbh8AcbhEdndndninalc;abfavcsGcitfgoydlh3dndndnaoydbgoaK9hmba3a8ASmekdnaoa8A9hmba3aY9hmbaEcefhExekaoaY9hmea3aK9hmeaEcdfhEkaEc870mdaXcufhvaLaEciGcx2goc:y1jjbfydbcdtfydbh3aLaocN1jjbfydbcdtfydbh8AaLaoc:q1jjbfydbcdtfydbhKcbhodnindnalavcsGcdtfydba39hmbaohYxdkcuhYavcufhvaocefgocz9hmbkkaOa3aOSgvaYce9iaYaH9oVgoGfhOdndndncbcsavEaYaoEgvcs9hmbarce9imba3a3aAa3cefaASgvEgAcefSmecmcsavEhvkasavaEcdtc;WeGV86bbavcs9hmea3aA9Rgvcetavc8F917hvinaeavcFb0crtavcFbGV86bbaecefheavcje6hoavcr4hvaoTmbka3hAxvkcPhvasaEcdtcPV86bba3hAkavTmiavaH9omicdhocehEaQhYxlkavcufhvaEclfgEc;ab9hmbkkdnaLceaYaOSceta8AaOSEcx2gvc:q1jjbfydbcdtfydbgKTaLavcN1jjbfydbcdtfydbg8AceSGaLavc:y1jjbfydbcdtfydbg3cdSGaOcb9hGazGg5ce9hmbaw9cu83ibaD9cu83ibaq9cu83ibak9cu83ibax9cu83ibam9cu83ibal9cu83iwal9cu83ibcbhOkcbhEaXcufgvhodnindnalaocsGcdtfydba8A9hmbaEhYxdkcuhYaocufhoaEcefgEcz9hmbkkcbhodnindnalavcsGcdtfydba39hmbaohExdkcuhEavcufhvaocefgocz9hmbkkaOaKaOSg8EfhLdndnaYcm0mbaYcefhYxekcbcsa8AaLSgvEhYaLavfhLkdndnaEcm0mbaEcefhExekcbcsa3aLSgvEhEaLavfhLkc9:cua8EEh8FcbhvaEaYcltVgacFeGhodndndninavcj1jjbfRbbaoSmeavcefgvcz9hmbxdkka5aKaO9havcm0VVmbasavc;WeV86bbxekasa8F86bbaeaa86bbaecefhekdna8EmbaKaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombkaKhAkdnaYcs9hmba8AaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka8AhAkdnaEcs9hmba3aA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka3hAkalaXcdtfaKBdbaXcefcsGhvdndnaYPzbeeeeeeeeeeeeeebekalavcdtfa8ABdbaXcdfcsGhvkdndnaEPzbeeeeeeeeeeeeeebekalavcdtfa3BdbavcefcsGhvkcihoalc;abfaQcitfgEaKBdlaEa8ABdbaQcefcsGhYcdhEavhXaLhOxekcdhoalaXcdtfa3BdbcehEaXcefcsGhXaQhYkalc;abfaYcitfgva8ABdlava3Bdbalc;abfaQaEfcsGcitfgva3BdlavaKBdbascefhsaQaofcsGhQaCcifgCai6mbkkcbhvaeaP0mbcbhvinaeavfavcj1jjbfRbb86bbavcefgvcz9hmbkaeab9Ravfhvkalc;aef8KjjjjbavkZeeucbhddninadcefgdc8F0meceadtae6mbkkadcrfcFeGcr9Uci2cdfabci9U2cHfkmbcbabBd:e:kjjbk:ydewu8Jjjjjbcz9Rhlcbhvdnaicvfae0mbcbhvabcbRb:e:kjjbc;qeV86bbal9cb83iwabcefhoabaefc98fhrdnaiTmbcbhwcbhDindnaoar6mbcbskadaDcdtfydbgqalcwfawaqav9Rgvavc8F91gv7av9Rc507gwcdtfgkydb9Rgvc8E91c9:Gavcdt7awVhvinaoavcFb0gecrtavcFbGV86bbavcr4hvaocefhoaembkakaqBdbaqhvaDcefgDai9hmbkkcbhvaoar0mbaocbBbbaoab9RclfhvkavkBeeucbhddninadcefgdc8F0meceadtae6mbkkadcwfcFeGcr9Uab2cvfk:bvli99dui99ludnaeTmbcuadcetcuftcu7:Yhvdndncuaicuftcu7:YgoJbbbZMgr:lJbbb9p9DTmbar:Ohwxekcjjjj94hwkcbhicbhDinalclfIdbgrJbbbbJbbjZalIdbgq:lar:lMalcwfIdbgk:lMgr:varJbbbb9BEgrNhxaqarNhrdndnakJbbbb9GTmbaxhqxekJbbjZar:l:tgqaq:maxJbbbb9GEhqJbbjZax:l:tgxax:marJbbbb9GEhrkdndnalcxfIdbgxJbbj:;axJbbj:;9GEgkJbbjZakJbbjZ9FEavNJbbbZJbbb:;axJbbbb9GEMgx:lJbbb9p9DTmbax:Ohmxekcjjjj94hmkdndnaqJbbj:;aqJbbj:;9GEgxJbbjZaxJbbjZ9FEaoNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:OhPxekcjjjj94hPkdndnarJbbj:;arJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;arJbbbb9GEMgr:lJbbb9p9DTmbar:Ohsxekcjjjj94hskdndnadcl9hmbabaifgzas86bbazcifam86bbazcdfaw86bbazcefaP86bbxekabaDfgzas87ebazcofam87ebazclfaw87ebazcdfaP87ebkalczfhlaiclfhiaDcwfhDaecufgembkkk;hlld99eud99eudnaeTmbdndncuaicuftcu7:YgvJbbbZMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikaic;8FiGhrinabcofcicdalclfIdb:lalIdb:l9EgialcwfIdb:lalaicdtfIdb:l9EEgialcxfIdb:lalaicdtfIdb:l9EEgiarV87ebdndnJbbj:;JbbjZalaicdtfIdbJbbbb9DEgoalaicd7cdtfIdbJ;Zl:1ZNNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabcdfaq87ebdndnalaicefciGcdtfIdbJ;Zl:1ZNaoNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabaq87ebdndnaoalaicufciGcdtfIdbJ;Zl:1ZNNgoJbbj:;aoJbbj:;9GEgwJbbjZawJbbjZ9FEavNJbbbZJbbb:;aoJbbbb9GEMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikabclfai87ebabcwfhbalczfhlaecufgembkkk;3viDue99eu8Jjjjjbcjd9Rgo8Kjjjjbadcd4hrdndndndnavcd9hmbadcl6meaohwarhDinawc:CuBdbawclfhwaDcufgDmbkaeTmiadcl6mdarcdthqalhkcbhxinaohwakhDarhminawawydbgPcbaDIdbgs:8cL4cFeGc:cufasJbbbb9BEgzaPaz9kEBdbaDclfhDawclfhwamcufgmmbkakaqfhkaxcefgxaeSmixbkkaeTmdxekaeTmekarcdthkavce9hhqadcl6hdcbhxindndndnaqmbadmdc:CuhDalhwarhminaDcbawIdbgs:8cL4cFeGc:cufasJbbbb9BEgPaDaP9kEhDawclfhwamcufgmmbxdkkc:CuhDdndnavPleddbdkadmdaohwalhmarhPinawcbamIdbgs:8cL4cFeGgzc;:bazc;:b9kEc:cufasJbbbb9BEBdbamclfhmawclfhwaPcufgPmbxdkkadmecbhwarhminaoawfcbalawfIdbgs:8cL4cFeGgPc8AaPc8A9kEc:cufasJbbbb9BEBdbawclfhwamcufgmmbkkadmbcbhwarhPinaDhmdnavceSmbaoawfydbhmkdndnalawfIdbgscjjj;8iamai9RcefgmcLt9R::NJbbbZJbbb:;asJbbbb9GEMgs:lJbbb9p9DTmbas:Ohzxekcjjjj94hzkabawfazcFFFrGamcKtVBdbawclfhwaPcufgPmbkkabakfhbalakfhlaxcefgxae9hmbkkaocjdf8Kjjjjbk;HqdCui998Jjjjjbc:qd9Rgv8Kjjjjbavc:Sefcbc;KbzNjjjb8AcbhodnadTmbcbhoaiTmbdnabae9hmbavcuadcdtgradcFFFFi0Ecbyd:m:kjjbHjjjjbbgeBd:SeavceBd:mdaeabarz:tjjjb8Akavc:GefcwfcbBdbav9cb83i:Geavc:Gefaeadaiavc:Sefz:njjjbavyd:Gehwadci9UgDcbyd:m:kjjbHjjjjbbhravc:Sefavyd:mdgqcdtfarBdbavaqcefgkBd:mdarcbaDzNjjjbhxavc:SefakcdtfcuaicdtaicFFFFi0Ecbyd:m:kjjbHjjjjbbgmBdbavaqcdfgPBd:mdawhramhkinakalIdbalarydbgscwascw6Ecdtfc;ebfIdbMUdbarclfhrakclfhkaicufgimbkavc:SefaPcdtfcuaDcdtadcFFFF970Ecbyd:m:kjjbHjjjjbbgPBdbdnadci6mbaehraPhkaDhiinakamarydbcdtfIdbamarclfydbcdtfIdbMamarcwfydbcdtfIdbMUdbarcxfhrakclfhkaicufgimbkkaqcifhoavc;qbfhzavhravyd:KehHavyd:OehOcbhscbhkcbhAcehCinarhXcihQaeakci2gLcdtfgrydbhdarclfydbhqabaAcx2fgicwfarcwfydbgKBdbaiclfaqBdbaiadBdbaxakfce86bbazaKBdwazaqBdlazadBdbaPakcdtfcbBdbdnasTmbcihQaXhiinazaQcdtfaiydbgrBdbaQaraK9harad9haraq9hGGfhQaiclfhiascufgsmbkkaAcefhAcbhsinaOaHaeasaLfcdtfydbcdtgifydbcdtfgKhrawaifgqydbgdhidnadTmbdninarydbakSmearclfhraicufgiTmdxbkkaraKadcdtfc98fydbBdbaqaqydbcufBdbkascefgsci9hmbkdndnaQTmbcuhkJbbbbhYcbhqavyd:KehKavyd:OehLindndnawazaqcdtfydbcdtgsfydbgrmbaqcefhqxekaqcs0hiamasfgdIdbh8AadalcbaqcefgqaiEcdtfIdbalarcwarcw6Ecdtfc;ebfIdbMgEUdbaEa8A:thEarcdthiaLaKasfydbcdtfhrinaParydbgscdtfgdaEadIdbMg8AUdba8AaYaYa8A9DgdEhYasakadEhkarclfhraic98fgimbkkaqaQ9hmbkakcu9hmekaCaD9pmdindnaxaCfRbbmbaChkxdkaDaCcefgC9hmbxikkaQczaQcz6EhsazhraXhzakcu9hmbkkaocdtavc:Seffc98fhrdninaoTmearydbcbyd1:kjjbH:bjjjbbarc98fhraocufhoxbkkavc:qdf8Kjjjjbk;IlevucuaicdtgvaicFFFFi0Egocbyd:m:kjjbHjjjjbbhralalyd9GgwcdtfarBdbalawcefBd9GabarBdbaocbyd:m:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdlcuadcdtadcFFFFi0Ecbyd:m:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdwabydbcbavzNjjjb8Aadci9UhDdnadTmbabydbhoaehladhrinaoalydbcdtfgvavydbcefBdbalclfhlarcufgrmbkkdnaiTmbabydbhlabydlhrcbhvaihoinaravBdbarclfhralydbavfhvalclfhlaocufgombkkdnadci6mbabydlhrabydwhvcbhlinaecwfydbhoaeclfydbhdaraeydbcdtfgwawydbgwcefBdbavawcdtfalBdbaradcdtfgdadydbgdcefBdbavadcdtfalBdbaraocdtfgoaoydbgocefBdbavaocdtfalBdbaecxfheaDalcefgl9hmbkkdnaiTmbabydlheabydbhlinaeaeydbalydb9RBdbalclfhlaeclfheaicufgimbkkkQbabaeadaic:01jjbz:mjjjbkQbabaeadaic:C:jjjbz:mjjjbk9DeeuabcFeaicdtzNjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;Wkivuo99lu8Jjjjjbc;W;Gb9Rgl8Kjjjjbcbhvalcj;Gbfcbc;KbzNjjjb8AalcuadcdtadcFFFFi0Egocbyd:m:kjjbHjjjjbbgrBdj9GalceBd;G9GalcFFF;7rBdwal9cFFF;7;3FF:;Fb83dbalcFFF97Bd;S9Gal9cFFF;7FFF:;u83d;K9Gaicd4hwdndnadmbJFFuFhDJFFuuhqJFFuuhkJFFuFhxJFFuuhmJFFuFhPxekawcdthsaehzincbhiinalaifgHazaifIdbgDaHIdbgxaxaD9EEUdbalc;K;GbfaifgHaDaHIdbgxaxaD9DEUdbaiclfgicx9hmbkazasfhzavcefgvad9hmbkalIdwhqalId;S9GhDalIdlhkalId;O9GhxalIdbhmalId;K9GhPkdndnadTmbJbbbbJbbjZJbbbbaPam:tgPaPJbbbb9DEgPaxak:tgxaxaP9DEgxaDaq:tgDaDax9DEgD:vaDJbbbb9BEhDawcdthsarhHadhzindndnaDaeIdbam:tNJb;au9eNJbbbZMgx:lJbbb9p9DTmbax:Ohixekcjjjj94hikaicztaicwtcj;GiGVaicsGVc:p;G:dKGcH2c;d;H:WKGcv2c;j:KM;jbGhvdndnaDaeclfIdbak:tNJb;au9eNJbbbZMgx:lJbbb9p9DTmbax:Ohixekcjjjj94hikaicztaicwtcj;GiGVaicsGVc:p;G:dKGcH2c;d;H:WKGcq2cM;j:KMeGavVhvdndnaDaecwfIdbaq:tNJb;au9eNJbbbZMgx:lJbbb9p9DTmbax:Ohixekcjjjj94hikaHavaicztaicwtcj;GiGVaicsGVc:p;G:dKGcH2c;d;H:WKGcC2c:KM;j:KdGVBdbaeasfheaHclfhHazcufgzmbkalcbcj;GbzNjjjbhiarhHadheinaiaHydbgzcFrGcx2fgvavydbcefBdbaiazcq4cFrGcx2fgvavydlcefBdlaiazcC4cFrGcx2fgzazydwcefBdwaHclfhHaecufgembxdkkalcbcj;GbzNjjjb8AkcbhHcbhzcbhecbhvinalaHfgiydbhsaiazBdbaicwfgwydbhOawavBdbaiclfgiydbhwaiaeBdbasazfhzaOavfhvawaefheaHcxfgHcj;Gb9hmbkcbhHalaocbyd:m:kjjbHjjjjbbgiBd:e9GdnadTmbabhzinazaHBdbazclfhzadaHcefgH9hmbkabhHadhzinalaraHydbgecdtfydbcFrGcx2fgvavydbgvcefBdbaiavcdtfaeBdbaHclfhHazcufgzmbkaihHadhzinalaraHydbgecdtfydbcq4cFrGcx2fgvavydlgvcefBdlabavcdtfaeBdbaHclfhHazcufgzmbkabhHadhzinalaraHydbgecdtfydbcC4cFrGcx2fgvavydwgvcefBdwaiavcdtfaeBdbaHclfhHazcufgzmbkcbhHinabaiydbcdtfaHBdbaiclfhiadaHcefgH9hmbkkclhidninaic98Smealcj;Gbfaifydbcbyd1:kjjbH:bjjjbbaic98fhixbkkalc;W;Gbf8Kjjjjbk9teiucbcbyd:q:kjjbgeabcifc98GfgbBd:q:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:q:kjjbgeabcrfc94GfgbBd:q:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd:q:kjjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd:q:kjjbfgdBd:q:kjjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akkk:Iddbcjwk:edb4:h9w9N94:P:gW:j9O:ye9Pbbbbbbebbbdbbbebbbdbbbbbbbdbbbbbbbebbbbbbb:l29hZ;69:9kZ;N;76Z;rg97Z;z;o9xZ8J;B85Z;:;u9yZ;b;k9HZ:2;Z9DZ9e:l9mZ59A8KZ:r;T3Z:A:zYZ79OHZ;j4::8::Y:D9V8:bbbb9s:49:Z8R:hBZ9M9M;M8:L;z;o8:;8:PG89q;x:J878R:hQ8::M:B;e87bbbbbbjZbbjZbbjZ:E;V;N8::Y:DsZ9i;H;68:xd;R8:;h0838:;W:NoZbbbb:WV9O8:uf888:9i;H;68:9c9G;L89;n;m9m89;D8Ko8:bbbbf:8tZ9m836ZS:2AZL;zPZZ818EZ9e:lxZ;U98F8:819E;68:bc:eqkzebbbebbbdbbba:vbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,n=WebAssembly.instantiate(i(a),{}).then(function(u){t=u.instance,t.exports.__wasm_call_ctors(),t.exports.meshopt_encodeVertexVersion(0),t.exports.meshopt_encodeIndexVersion(1)});function i(u){for(var b=new Uint8Array(u.length),g=0;g<u.length;++g){var m=u.charCodeAt(g);b[g]=m>96?m-97:m>64?m-39:m+4}for(var p=0,g=0;g<u.length;++g)b[p++]=b[g]<60?e[b[g]]:(b[g]-60)*64+b[++g];return b.buffer.slice(0,p)}function s(u){if(!u)throw new Error("Assertion failed")}function r(u){return new Uint8Array(u.buffer,u.byteOffset,u.byteLength)}function o(u,b,g,m){var p=t.exports.sbrk,x=p(b.length*4),y=p(g*4),_=new Uint8Array(t.exports.memory.buffer),M=r(b);_.set(M,x),m&&m(x,x,b.length,g);var A=u(y,x,b.length,g);_=new Uint8Array(t.exports.memory.buffer);var S=new Uint32Array(g);new Uint8Array(S.buffer).set(_.subarray(y,y+g*4)),M.set(_.subarray(x,x+b.length*4)),p(x-p(0));for(var w=0;w<b.length;++w)b[w]=S[b[w]];return[S,A]}function c(u,b,g,m){var p=t.exports.sbrk,x=p(g*4),y=p(g*m),_=new Uint8Array(t.exports.memory.buffer);_.set(r(b),y),u(x,y,g,m),_=new Uint8Array(t.exports.memory.buffer);var M=new Uint32Array(g);return new Uint8Array(M.buffer).set(_.subarray(x,x+g*4)),p(x-p(0)),M}function l(u,b,g,m,p){var x=t.exports.sbrk,y=x(b),_=x(m*p),M=new Uint8Array(t.exports.memory.buffer);M.set(r(g),_);var A=u(y,b,_,m,p),S=new Uint8Array(A);return S.set(M.subarray(y,y+A)),x(y-x(0)),S}function d(u){for(var b=0,g=0;g<u.length;++g){var m=u[g];b=b<m?m:b}return b}function h(u,b){if(s(b==2||b==4),b==4)return new Uint32Array(u.buffer,u.byteOffset,u.byteLength/4);var g=new Uint16Array(u.buffer,u.byteOffset,u.byteLength/2);return new Uint32Array(g)}function f(u,b,g,m,p,x,y){var _=t.exports.sbrk,M=_(g*m),A=_(g*x),S=new Uint8Array(t.exports.memory.buffer);S.set(r(b),A),u(M,g,m,p,A,y);var w=new Uint8Array(g*m);return w.set(S.subarray(M,M+g*m)),_(M-_(0)),w}return{ready:n,supported:!0,reorderMesh:function(u,b,g){var m=b?g?t.exports.meshopt_optimizeVertexCacheStrip:t.exports.meshopt_optimizeVertexCache:void 0;return o(t.exports.meshopt_optimizeVertexFetchRemap,u,d(u)+1,m)},reorderPoints:function(u,b){return s(u instanceof Float32Array),s(u.length%b==0),s(b>=3),c(t.exports.meshopt_spatialSortRemap,u,u.length/b,b*4)},encodeVertexBuffer:function(u,b,g){s(g>0&&g<=256),s(g%4==0);var m=t.exports.meshopt_encodeVertexBufferBound(b,g);return l(t.exports.meshopt_encodeVertexBuffer,m,u,b,g)},encodeIndexBuffer:function(u,b,g){s(g==2||g==4),s(b%3==0);var m=h(u,g),p=t.exports.meshopt_encodeIndexBufferBound(b,d(m)+1);return l(t.exports.meshopt_encodeIndexBuffer,p,m,b,4)},encodeIndexSequence:function(u,b,g){s(g==2||g==4);var m=h(u,g),p=t.exports.meshopt_encodeIndexSequenceBound(b,d(m)+1);return l(t.exports.meshopt_encodeIndexSequence,p,m,b,4)},encodeGltfBuffer:function(u,b,g,m){var p={ATTRIBUTES:this.encodeVertexBuffer,TRIANGLES:this.encodeIndexBuffer,INDICES:this.encodeIndexSequence};return s(p[m]),p[m](u,b,g)},encodeFilterOct:function(u,b,g,m){return s(g==4||g==8),s(m>=1&&m<=16),f(t.exports.meshopt_encodeFilterOct,u,b,g,m,16)},encodeFilterQuat:function(u,b,g,m){return s(g==8),s(m>=4&&m<=16),f(t.exports.meshopt_encodeFilterQuat,u,b,g,m,16)},encodeFilterExp:function(u,b,g,m,p){s(g>0&&g%4==0),s(m>=1&&m<=24);var x={Separate:0,SharedVector:1,SharedComponent:2,Clamped:3};return f(t.exports.meshopt_encodeFilterExp,u,b,g,m,g,p?x[p]:1)}}})();var l0=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),y=0;y<p.length;++y){var _=p.charCodeAt(y);x[y]=_>96?_-97:_>64?_-39:_+4}for(var M=0,y=0;y<p.length;++y)x[M++]=x[y]<60?n[x[y]]:(x[y]-60)*64+x[++y];return x.buffer.slice(0,M)}function c(p,x,y,_,M,A,S){var w=p.exports.sbrk,E=_+3&-4,v=w(E*M),C=w(A.length),D=new Uint8Array(p.exports.memory.buffer);D.set(A,C);var L=x(v,_,M,C,A.length);if(L==0&&S&&S(v,E,M),y.set(D.subarray(v,v+_*M)),w(v-w(0)),L!=0)throw new Error("Malformed buffer data: "+L)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function u(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(y){var _=y.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function b(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),y=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(y),M=h.length;M<p;++M)h[M]=u(_);for(var M=p;M<h.length;++M)h[M].object.postMessage({});h.length=p,URL.revokeObjectURL(_)}function g(p,x,y,_,M){for(var A=h[0],S=1;S<h.length;++S)h[S].pending<A.pending&&(A=h[S]);return new Promise(function(w,E){var v=new Uint8Array(y),C=++f;A.pending+=p,A.requests[C]={resolve:w,reject:E},A.object.postMessage({id:C,count:p,size:x,source:v,mode:_,filter:M},[v.buffer])})}function m(p){var x=p.data;if(!x.id)return self.close();self.ready.then(function(y){try{var _=new Uint8Array(x.count*x.size);c(y,y.exports[x.mode],_,x.count,x.size,x.source,y.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(M){self.postMessage({id:x.id,count:x.count,action:"reject",value:M})}})}return{ready:r,supported:!0,useWorkers:function(p){b(p)},decodeVertexBuffer:function(p,x,y,_,M){c(s,s.exports.meshopt_decodeVertexBuffer,p,x,y,_,s.exports[l[M]])},decodeIndexBuffer:function(p,x,y,_){c(s,s.exports.meshopt_decodeIndexBuffer,p,x,y,_)},decodeIndexSequence:function(p,x,y,_){c(s,s.exports.meshopt_decodeIndexSequence,p,x,y,_)},decodeGltfBuffer:function(p,x,y,_,M,A){c(s,s.exports[d[M]],p,x,y,_,s.exports[l[A]])},decodeGltfBufferAsync:function(p,x,y,_,M){return h.length>0?g(p,x,y,d[_],l[M]):r.then(function(){var A=new Uint8Array(p*x);return c(s,s.exports[d[_]],A,p,x,y,s.exports[l[M]]),A})}}})();(function(){var a="b9H79Tebbbe9Hk9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gvuuuuue999Gquuuuuuu99uueu9Gwuuuuuu99ueu9Giuuue999Gluuuueu9GiuuueuizsdilvoirwDbqqbeqlve9Weiiviebeoweuecj:Pdkr:Tewo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bl8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bvQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7boX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2Wbra9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9Wbwl79IV9RbDDwebcekdmxq;UMesdbk:kfvKue99euY99Qu8Jjjjjbc;W;qb9Rgs8Kjjjjbcbhzascxfcbc;Kbz:ljjjb8AdnabaeSmbabaeadcdtz:kjjjb8AkdnamcdGTmbalcrfci4gHcbyd;S1jjbHjjjjbbheascxfasyd2gOcdtfaeBdbasaOcefBd2aecbaHz:ljjjbhAcbhlcbhednadTmbcbhlabheadhHinaAaeydbgOci4fgCaCRbbgCceaOcrGgOtV86bbaCcu7aO4ceGalfhlaeclfheaHcufgHmbkcualcdtalcFFFFi0Ehekaecbyd;S1jjbHjjjjbbhzascxfasyd2gecdtfazBdbasaecefBd2alcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd;S1jjbHjjjjbbhHascxfasyd2gCcdtfaHBdbasaCcefBd2aHcFeaOz:ljjjbhQdnadTmbaecufhCcbhLinabaXcdtfgKydbgAc:v;t;h;Ev2hOcbhedndninaQaOaCGgOcdtfgYydbgHcuSmeazaHcdtfydbaASmdaecefgeaOfhOaeaC9nmbxdkkazaLcdtfaABdbaYaLBdbaLhHaLcefhLkaKaHBdbaXcefgXad9hmbkkaQcbyd;O1jjbH:bjjjbbasasyd2cufBd2kcualcefgecdtaecFFFFi0Ecbyd;S1jjbHjjjjbbh8Aascxfasyd2gecdtfa8ABdbasa8ABdlasaecefBd2cuadcitadcFFFFe0Ecbyd;S1jjbHjjjjbbhEascxfasyd2gecdtfaEBdbasaEBdwasaecefBd2asclfabadalcbz:cjjjbcualcdtg3alcFFFFi0Eg5cbyd;S1jjbHjjjjbbhQascxfasyd2gecdtfaQBdbasaecefBd2a5cbyd;S1jjbHjjjjbbh8Eascxfasyd2gecdtfa8EBdbasaecefBd2alcd4alfhOcehHinaHgecethHaeaO6mbkcbhLcuaecdtgOaecFFFFi0Ecbyd;S1jjbHjjjjbbhHascxfasyd2gCcdtfaHBdbasaCcefBd2aHcFeaOz:ljjjbhXdnalTmbavcd4hCaecufhHinaLhednazTmbazaLcdtfydbhekaiaeaC2cdtfgeydlgOcH4aO7c:F:b:DD2aeydbgOcH4aO7c;D;O:B8J27aeydwgecH4ae7c:3F;N8N27aHGheaLcdth8FdndndndndnazTmbaza8FfhKcbhOinaXaecdtfgYydbgAcuSmlaiazaAcdtfydbaC2cdtfaiaKydbaC2cdtfcxz:ojjjbTmiaOcefgOaefaHGheaOaH9nmbxdkkaiaLaC2cdtfhKcbhOinaXaecdtfgYydbgAcuSmiaiaAaC2cdtfaKcxz:ojjjbTmdaOcefgOaefaHGheaOaH9nmbkkcbhYkaYydbgecu9hmekaYaLBdbaLhekaQa8FfaeBdbaLcefgLal9hmbkcbhea8EhHinaHaeBdbaHclfhHalaecefge9hmbkcbheaQhHa8EhOindnaeaHydbgCSmbaOa8EaCcdtfgCydbBdbaCaeBdbkaHclfhHaOclfhOalaecefge9hmbkkcbhaaXcbyd;O1jjbH:bjjjbbasasyd2cufBd2alcbyd;S1jjbHjjjjbbhXascxfasyd2gecdtfaXBdbasaecefBd2a5cbyd;S1jjbHjjjjbbheascxfasyd2gHcdtfaeBdbasaHcefBd2a5cbyd;S1jjbHjjjjbbhHascxfasyd2gOcdtfaHBdbasaOcefBd2aecFea3z:ljjjbhhaHcFea3z:ljjjbhgdnalTmbaEcwfh8Jindna8AaagOcefgacdtfydbgCa8AaOcdtgefydbgHSmbaCaH9Rh8FaEaHcitfh3agaefh8KahaefhLcbhAindndna3aAcitfydbgYaO9hmbaLaOBdba8KaOBdbxekdna8AaYcdtg8LfgeclfydbgHaeydbgeSmbaEaecitgCfydbaOSmeaHae9Rh8Maecu7aHfhKa8JaCfhHcbheinaKaeSmeaecefheaHydbhCaHcwfhHaCaO9hmbkaea8M6mekaga8LfgeaOaYaeydbcuSEBdbaLaYaOaLydbcuSEBdbkaAcefgAa8F9hmbkkaaal9hmbkaQhHa8EhOaghCahhAcbheindndnaeaHydbgY9hmbdnaeaOydbgY9hmbaAydbhYdnaCydbgKcu9hmbaYcu9hmbaXaefcb86bbxikaXaefhLdnaeaKSmbaeaYSmbaLce86bbxikaLcl86bbxdkdnaea8EaYcdtgKfydb9hmbdnaCydbgLcuSmbaeaLSmbaAydbg8FcuSmbaea8FSmbagaKfydbg3cuSmba3aYSmbahaKfydbgKcuSmbaKaYSmbdnaQaLcdtfydbgYaQaKcdtfydb9hmbaYaQa8FcdtfydbgKSmbaKaQa3cdtfydb9hmbaXaefcd86bbxlkaXaefcl86bbxikaXaefcl86bbxdkaXaefcl86bbxekaXaefaXaYfRbb86bbkaHclfhHaOclfhOaCclfhCaAclfhAalaecefge9hmbkdnaqTmbdndnazTmbazheaQhHalhOindnaqaeydbfRbbTmbaXaHydbfcl86bbkaeclfheaHclfhHaOcufgOmbxdkkaQhealhHindnaqRbbTmbaXaeydbfcl86bbkaqcefhqaeclfheaHcufgHmbkkaQhealhOaXhHindnaXaeydbfRbbcl9hmbaHcl86bbkaeclfheaHcefhHaOcufgOmbkkamceGTmbaXhealhHindnaeRbbce9hmbaecl86bbkaecefheaHcufgHmbkkcualcx2alc;v:Q;v:Qe0Ecbyd;S1jjbHjjjjbbhaascxfasyd2gecdtfaaBdbasaecefBd2aaaialavazz:djjjbh8NdndnaDmbcbhycbh8Jxekcbh8JawhecbhHindnaeIdbJbbbb9ETmbasc;Wbfa8JcdtfaHBdba8Jcefh8JkaeclfheaDaHcefgH9hmbkcua8Jal2gecdtaecFFFFi0Ecbyd;S1jjbHjjjjbbhyascxfasyd2gecdtfayBdbasaecefBd2alTmba8JTmbarcd4hLdnazTmba8JcdthicbhYayhKinaoazaYcdtfydbaL2cdtfhAasc;WbfheaKhHa8JhOinaHaAaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaHclfhHaOcufgOmbkaKaifhKaYcefgYal9hmbxdkka8JcdthicbhYayhKinaoaYaL2cdtfhAasc;WbfheaKhHa8JhOinaHaAaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaHclfhHaOcufgOmbkaKaifhKaYcefgYal9hmbkkcualc8S2gHalc;D;O;f8U0EgCcbyd;S1jjbHjjjjbbheascxfasyd2gOcdtfaeBdbasaOcefBd2aecbaHz:ljjjbhqdndndndna8JTmbaCcbyd;S1jjbHjjjjbbhvascxfasyd2gecdtfavBdbcehOasaecefBd2avcbaHz:ljjjb8Acua8Jal2gecltgHaecFFFFb0Ecbyd;S1jjbHjjjjbbhrascxfasyd2gecdtfarBdbasaecefBd2arcbaHz:ljjjb8AadmexikcbhvadTmecbhrkcbhAabhHindnaaaHclfydbgYcx2fgeIdbaaaHydbgKcx2fgOIdbg8P:tgIaaaHcwfydbgLcx2fgCIdlaOIdlg8R:tg8SNaCIdba8P:tgRaeIdla8R:tg8UN:tg8Va8VNa8UaCIdwaOIdwg8W:tg8XNa8SaeIdwa8W:tg8UN:tg8Sa8SNa8UaRNa8XaIN:tgIaINMM:rgRJbbbb9ETmba8VaR:vh8VaIaR:vhIa8SaR:vh8SkaqaQaKcdtfydbc8S2fgea8SaR:rgRa8SNNg8UaeIdbMUdbaeaIaRaINg8YNg8XaeIdlMUdlaea8VaRa8VNg8ZNg80aeIdwMUdwaea8Ya8SNg8YaeIdxMUdxaea8Za8SNg81aeIdzMUdzaea8ZaINg8ZaeIdCMUdCaea8SaRa8Va8WNa8Sa8PNa8RaINMM:mg8RNg8PNg8SaeIdKMUdKaeaIa8PNgIaeId3MUd3aea8Va8PNg8VaeIdaMUdaaea8Pa8RNg8PaeId8KMUd8KaeaRaeIdyMUdyaqaQaYcdtfydbc8S2fgea8UaeIdbMUdbaea8XaeIdlMUdlaea80aeIdwMUdwaea8YaeIdxMUdxaea81aeIdzMUdzaea8ZaeIdCMUdCaea8SaeIdKMUdKaeaIaeId3MUd3aea8VaeIdaMUdaaea8PaeId8KMUd8KaeaRaeIdyMUdyaqaQaLcdtfydbc8S2fgea8UaeIdbMUdbaea8XaeIdlMUdlaea80aeIdwMUdwaea8YaeIdxMUdxaea81aeIdzMUdzaea8ZaeIdCMUdCaea8SaeIdKMUdKaeaIaeId3MUd3aea8VaeIdaMUdaaea8PaeId8KMUd8KaeaRaeIdyMUdyaHcxfhHaAcifgAad6mbkcbhiabhKinabaicdtfhYcbhHinaXaYaHc:G1jjbfydbcdtfydbgOfRbbhedndnaXaKaHfydbgCfRbbgAc99fcFeGcpe0mbaeceSmbaecd9hmekdnaAcufcFeGce0mbahaCcdtfydbaO9hmekdnaecufcFeGce0mbagaOcdtfydbaC9hmekdnaAcv2aefcj1jjbfRbbTmbaQaOcdtfydbaQaCcdtfydb0mekJbbacJbbacJbbjZaeceSEaAceSEh8ZdnaaaYaHc:K1jjbfydbcdtfydbcx2fgeIdwaaaCcx2fgAIdwg8R:tg8VaaaOcx2fgLIdwa8R:tg8Sa8SNaLIdbaAIdbg8W:tgIaINaLIdlaAIdlg8U:tgRaRNMMg8PNa8Va8SNaeIdba8W:tg80aINaRaeIdla8U:tg8YNMMg8Xa8SN:tg8Va8VNa80a8PNa8XaIN:tg8Sa8SNa8Ya8PNa8XaRN:tgIaINMM:rgRJbbbb9ETmba8VaR:vh8VaIaR:vhIa8SaR:vh8SkaqaQaCcdtfydbc8S2fgea8Sa8Za8P:rNgRa8SNNg8XaeIdbMUdbaeaIaRaINg8ZNg80aeIdlMUdlaea8VaRa8VNg8PNg8YaeIdwMUdwaea8Za8SNg8ZaeIdxMUdxaea8Pa8SNg81aeIdzMUdzaea8PaINgBaeIdCMUdCaea8SaRa8Va8RNa8Sa8WNa8UaINMM:mg8RNg8PNg8SaeIdKMUdKaeaIa8PNgIaeId3MUd3aea8Va8PNg8VaeIdaMUdaaea8Pa8RNg8PaeId8KMUd8KaeaRaeIdyMUdyaqaQaOcdtfydbc8S2fgea8XaeIdbMUdbaea80aeIdlMUdlaea8YaeIdwMUdwaea8ZaeIdxMUdxaea81aeIdzMUdzaeaBaeIdCMUdCaea8SaeIdKMUdKaeaIaeId3MUd3aea8VaeIdaMUdaaea8PaeId8KMUd8KaeaRaeIdyMUdykaHclfgHcx9hmbkaKcxfhKaicifgiad6mbkdna8JTmbcbhKinJbbbbh8WaaabaKcdtfgeclfydbgLcx2fgHIdwaaaeydbgicx2fgOIdwg8Y:tgIaINaHIdbaOIdbg81:tg8Va8VNaHIdlaOIdlgB:tgRaRNMMg8Zaaaecwfydbg8Fcx2fgeIdwa8Y:tg8PNaIaIa8PNa8VaeIdba81:tg8RNaRaeIdlaB:tg8UNMMg8SN:tJbbbbJbbjZa8Za8Pa8PNa8Ra8RNa8Ua8UNMMg80Na8Sa8SN:tg8X:va8XJbbbb9BEg8XNh83a80aINa8Pa8SN:ta8XNhUa8Za8UNaRa8SN:ta8XNh85a80aRNa8Ua8SN:ta8XNh86a8Za8RNa8Va8SN:ta8XNh87a80a8VNa8Ra8SN:ta8XNh88a8Va8UNa8RaRN:tg8Sa8SNaRa8PNa8UaIN:tg8Sa8SNaIa8RNa8Pa8VN:tg8Sa8SNMM:rJbbbZNh8Sayaia8J2g3cdtfhHaya8Fa8J2gwcdtfhOayaLa8J2g8LcdtfhCa8Y:mh89aB:mh8:a81:mhZcbhAa8JhYJbbbbh8UJbbbbh8XJbbbbh8ZJbbbbh80Jbbbbh8YJbbbbh81JbbbbhBJbbbbhnJbbbbhcinasc;WbfaAfgecwfa8SaUaCIdbaHIdbg8P:tgRNa83aOIdba8P:tg8RNMgINUdbaeclfa8Sa86aRNa85a8RNMg8VNUdbaea8Sa88aRNa87a8RNMgRNUdbaecxfa8Sa89aINa8:a8VNa8PaZaRNMMMg8PNUdba8SaIa8VNNa80Mh80a8SaIaRNNa8YMh8Ya8Sa8VaRNNa81Mh81a8Sa8Pa8PNNa8WMh8Wa8SaIa8PNNa8UMh8Ua8Sa8Va8PNNa8XMh8Xa8SaRa8PNNa8ZMh8Za8SaIaINNaBMhBa8Sa8Va8VNNanMhna8SaRaRNNacMhcaHclfhHaCclfhCaOclfhOaAczfhAaYcufgYmbkavaic8S2fgeacaeIdbMUdbaeanaeIdlMUdlaeaBaeIdwMUdwaea81aeIdxMUdxaea8YaeIdzMUdzaea80aeIdCMUdCaea8ZaeIdKMUdKaea8XaeId3MUd3aea8UaeIdaMUdaaea8WaeId8KMUd8Kaea8SaeIdyMUdyavaLc8S2fgeacaeIdbMUdbaeanaeIdlMUdlaeaBaeIdwMUdwaea81aeIdxMUdxaea8YaeIdzMUdzaea80aeIdCMUdCaea8ZaeIdKMUdKaea8XaeId3MUd3aea8UaeIdaMUdaaea8WaeId8KMUd8Kaea8SaeIdyMUdyava8Fc8S2fgeacaeIdbMUdbaeanaeIdlMUdlaeaBaeIdwMUdwaea81aeIdxMUdxaea8YaeIdzMUdzaea80aeIdCMUdCaea8ZaeIdKMUdKaea8XaeId3MUd3aea8UaeIdaMUdaaea8WaeId8KMUd8Kaea8SaeIdyMUdyara3cltfhYcbhHa8JhCinaYaHfgeasc;WbfaHfgOIdbaeIdbMUdbaeclfgAaOclfIdbaAIdbMUdbaecwfgAaOcwfIdbaAIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaCcufgCmbkara8LcltfhYcbhHa8JhCinaYaHfgeasc;WbfaHfgOIdbaeIdbMUdbaeclfgAaOclfIdbaAIdbMUdbaecwfgAaOcwfIdbaAIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaCcufgCmbkarawcltfhYcbhHa8JhCinaYaHfgeasc;WbfaHfgOIdbaeIdbMUdbaeclfgAaOclfIdbaAIdbMUdbaecwfgAaOcwfIdbaAIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaCcufgCmbkaKcifgKad6mbkkcbhOxekcehOcbhrkcbh8FdndnamcwGg9cmbJbbbbh8ZcbhJcbhocbhCxekcbhea5cbyd;S1jjbHjjjjbbhCascxfasyd2gHcdtfaCBdbasaHcefBd2dnalTmbaChHinaHaeBdbaHclfhHalaecefge9hmbkkdnaOmbcbhiinabaicdtfhLcbhKinaQaLaKcdtgec:G1jjbfydbcdtfydbcdtfydbhHdnaCaQaLaefydbcdtfydbgOcdtfgAydbgeaOSmbinaAaCaegOcdtfgYydbgeBdbaYhAaOae9hmbkkdnaCaHcdtfgAydbgeaHSmbinaAaCaegHcdtfgYydbgeBdbaYhAaHae9hmbkkdnaOaHSmbaCaOaHaOaH0EcdtfaOaHaOaH6EBdbkaKcefgKci9hmbkaicifgiad6mbkkcbhJdnalTmbcbhYindnaQaYcdtgefydbaY9hmbaYhHdnaCaefgKydbgeaYSmbaKhOinaOaCaegHcdtfgAydbgeBdbaAhOaHae9hmbkkaKaHBdbkaYcefgYal9hmbkcbheaQhOaChHcbhJindndnaeaOydbgA9hmbdnaeaHydbgA9hmbaHaJBdbaJcefhJxdkaHaCaAcdtfydbBdbxekaHaCaAcdtfydbBdbkaOclfhOaHclfhHalaecefge9hmbkkcuaJcltgeaJcjjjjiGEcbyd;S1jjbHjjjjbbhoascxfasyd2gHcdtfaoBdbasaHcefBd2aocbaez:ljjjbhAdnalTmbaChOaahealhYinaecwfIdbh8SaeclfIdbhIaAaOydbcltfgHaeIdbaHIdbMUdbaHclfgKaIaKIdbMUdbaHcwfgKa8SaKIdbMUdbaHcxfgHaHIdbJbbjZMUdbaOclfhOaecxfheaYcufgYmbkkdnaJTmbaAheaJhHinaecxfgOIdbh8SaOcbBdbaeaeIdbJbbbbJbbjZa8S:va8SJbbbb9BEg8SNUdbaeclfgOa8SaOIdbNUdbaecwfgOa8SaOIdbNUdbaeczfheaHcufgHmbkkdnalTmbaChOaahealhYinaAaOydbcltfgHcxfgKaecwfIdbaHcwfIdb:tg8Sa8SNaeIdbaHIdb:tg8Sa8SNaeclfIdbaHclfIdb:tg8Sa8SNMMg8SaKIdbgIaIa8S9DEUdbaOclfhOaecxfheaYcufgYmbkkdnaJmbcbhJJFFuuh8ZxekaAcxfheaAhHaJhOinaHaeIdbUdbaeczfheaHclfhHaOcufgOmbkJFFuuh8ZaAheaJhHinaeIdbg8Sa8Za8Za8S9EEh8ZaeclfheaHcufgHmbkkasydlh9ednalTmba9eclfhea9eydbhAaXhHalhYcbhOincbaeydbgKaA9RaHRbbcpeGEaOfhOaHcefhHaeclfheaKhAaYcufgYmbkaOce4h8Fkcuada8F9RcifgTcx2aTc;v:Q;v:Qe0Ecbyd;S1jjbHjjjjbbhDascxfasyd2gecdtfaDBdbasaecefBd2cuaTcdtaTcFFFFi0Ecbyd;S1jjbHjjjjbbhSascxfasyd2gecdtfaSBdbasaecefBd2a5cbyd;S1jjbHjjjjbbh8Mascxfasyd2gecdtfa8MBdbasaecefBd2alcbyd;S1jjbHjjjjbbh9hascxfasyd2gecdtfa9hBdbasaecefBd2axaxNa8NJbbjZamclGEg83a83N:vhcJbbbbhndnadak9nmbdnaTci6mba8Jclth9iaDcwfh6JbbbbhBJbbbbhninasclfabadalaQz:cjjjbabh8FcbhEcbh5inaba5cdtfh3cbheindnaQa8FaefydbgOcdtgifydbgYaQa3aec:W1jjbfydbcdtfydbgHcdtgwfydbgKSmbaXaHfRbbgLcv2aXaOfRbbgAfc;a1jjbfRbbg8AaAcv2aLfg8Lc;a1jjbfRbbg8KVcFeGTmbdnaKaY9nmba8Lcj1jjbfRbbcFeGmekaAcufhYdnaAaL9hmbaYcFeGce0mbahaifydbaH9hmekdndnaAclSmbaLcl9hmekdnaYcFeGce0mbahaifydbaH9hmdkaLcufcFeGce0mbagawfydbaO9hmekaDaEcx2fgAaHaOa8KcFeGgYEBdlaAaOaHaYEBdbaAaYa8AGcb9hBdwaEcefhEkaeclfgecx9hmbkdna5cifg5ad9pmba8Fcxfh8FaEcifaT9nmekkaETmdcbhiinJbbbbJbbjZaqaQaDaicx2fgAydlgKaAydbgYaAydwgHEgLcdtfydbc8S2fgeIdyg8S:va8SJbbbb9BEaeIdwaaaYaKaHEg8Fcx2fgHIdwgRNaeIdzaHIdbg8PNaeIdaMg8Sa8SMMaRNaeIdlaHIdlg8RNaeIdCaRNaeId3Mg8Sa8SMMa8RNaeIdba8PNaeIdxa8RNaeIdKMg8Sa8SMMa8PNaeId8KMMM:lNh80JbbbbJbbjZaqaQaYcdtfydbc8S2fgeIdyg8S:va8SJbbbb9BEaeIdwaaaKcx2fgHIdwg8VNaeIdzaHIdbg8WNaeIdaMg8Sa8SMMa8VNaeIdlaHIdlg8UNaeIdCa8VNaeId3Mg8Sa8SMMa8UNaeIdba8WNaeIdxa8UNaeIdKMg8Sa8SMMa8WNaeId8KMMM:lNh8YaAcwfh3aAclfhwdna8JTmbavaYc8S2fgOIdwa8VNaOIdza8WNaOIdaMg8Sa8SMMa8VNaOIdla8UNaOIdCa8VNaOId3Mg8Sa8SMMa8UNaOIdba8WNaOIdxa8UNaOIdKMg8Sa8SMMa8WNaOId8KMMMh8SayaKa8J2cdtfhHaraYa8J2cltfheaOIdyh8Xa8JhOinaHIdbgIaIa8XNaecxfIdba8VaecwfIdbNa8WaeIdbNa8UaeclfIdbNMMMgIaIM:tNa8SMh8SaHclfhHaeczfheaOcufgOmbkavaLc8S2fgOIdwaRNaOIdza8PNaOIdaMgIaIMMaRNaOIdla8RNaOIdCaRNaOId3MgIaIMMa8RNaOIdba8PNaOIdxa8RNaOIdKMgIaIMMa8PNaOId8KMMMhIaya8Fa8J2cdtfhHaraLa8J2cltfheaOIdyh8Wa8JhOinaHIdbg8Va8Va8WNaecxfIdbaRaecwfIdbNa8PaeIdbNa8RaeclfIdbNMMMg8Va8VM:tNaIMhIaHclfhHaeczfheaOcufgOmbka80aI:lMh80a8Ya8S:lMh8YkawaKa8Fa8Ya809FgeEBdbaAaYaLaeEBdba3a8Ya80aeEUdbaicefgiaE9hmbkasc;Wbfcbcj;qbz:ljjjb8Aa6heaEhHinasc;WbfaeydbcA4cF8FGgOcFAaOcFA6EcdtfgOaOydbcefBdbaecxfheaHcufgHmbkcbhecbhHinasc;WbfaefgOydbhAaOaHBdbaAaHfhHaeclfgecj;qb9hmbkcbhea6hHinasc;WbfaHydbcA4cF8FGgOcFAaOcFA6EcdtfgOaOydbgOcefBdbaSaOcdtfaeBdbaHcxfhHaEaecefge9hmbkadak9RgOci9Uh9kdnalTmbcbhea8MhHinaHaeBdbaHclfhHalaecefge9hmbkkcbh0a9hcbalz:ljjjbh9maOcO9Uh9na9kce4h9oasydwh9pcbh8KcbhwdninaDaSawcdtfydbcx2fg3Idwg8Sac9Emea8Ka9k9pmeJFFuuhIdna9oaE9pmbaDaSa9ocdtfydbcx2fIdwJbb;aZNhIkdna8SaI9ETmba8San9ETmba8Ka9n0mdkdna9maQa3ydlgicdtg9qfydbgAfg9rRbba9maQa3ydbgLcdtg9sfydbgHfg9tRbbVmbaXaLfRbbh9udna9eaHcdtfgeclfydbgOaeydbgeSmbaOae9RhKa9paecitfheaaaAcx2fg8Lcwfh5a8Lclfh9vaaaHcx2fg8Acwfh9wa8Aclfh9xcbhHceh8Fdnindna8MaeydbcdtfydbgOaASmba8MaeclfydbcdtfydbgYaASmbaOaYSmbaaaYcx2fgYIdbaaaOcx2fgOIdbg8V:tg8Sa9xIdbaOIdlgR:tg8WNa8AIdba8V:tg8UaYIdlaR:tgIN:tg8Pa8Sa9vIdbaR:tg8XNa8LIdba8V:tg80aIN:tgRNaIa9wIdbaOIdwg8R:tg8YNa8WaYIdwa8R:tg8VN:tg8WaIa5Idba8R:tg81Na8Xa8VN:tgINa8Va8UNa8Ya8SN:tg8Ra8Va80Na81a8SN:tg8SNMMa8Pa8PNa8Wa8WNa8Ra8RNMMaRaRNaIaINa8Sa8SNMMN:rJbbj8:N9FmdkaecwfheaHcefgHaK6h8FaKaH9hmbkka8FceGTmba9ocefh9oxeka3cwfhHdndndndna9uc9:fPdebdkaLheina8MaecdtgefaiBdba8EaefydbgeaL9hmbxikkdnagahaha9sfydbaiSEa8Ea9sfydbgLcdtfydbgecu9hmba8Ea9qfydbheka8Ma9sfaiBdbaehika8MaLcdtfaiBdbka9tce86bba9rce86bbaHIdbg8Sanana8S9DEhna0cefh0cecda9uceSEa8Kfh8KkawcefgwaE9hmbkka0TmddnalTmbcbhKcbhiindna8MaicdtgefydbgOaiSmbaQaOcdtfydbh8FdnaiaQaefydb9hg3mbaqa8Fc8S2fgeaqaic8S2fgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdyka8JTmbavaOc8S2fgeavaic8S2gwfgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdya9iaO2hLarhHa8JhAinaHaLfgeaHaKfgOIdbaeIdbMUdbaeclfgYaOclfIdbaYIdbMUdbaecwfgYaOcwfIdbaYIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaAcufgAmbka3mbJbbbbJbbjZaqawfgeIdyg8S:va8SJbbbb9BEaeIdwaaa8Fcx2fgHIdwg8SNaeIdzaHIdbgINaeIdaMg8Va8VMMa8SNaeIdlaHIdlg8VNaeIdCa8SNaeId3Mg8Sa8SMMa8VNaeIdbaINaeIdxa8VNaeIdKMg8Sa8SMMaINaeId8KMMM:lNg8SaBaBa8S9DEhBkaKa9ifhKaicefgial9hmbkcbhHahheindnaeydbgOcuSmbdnaHa8MaOcdtgAfydbgO9hmbcuhOahaAfydbgAcuSmba8MaAcdtfydbhOkaeaOBdbkaeclfhealaHcefgH9hmbkcbhHagheindnaeydbgOcuSmbdnaHa8MaOcdtgAfydbgO9hmbcuhOagaAfydbgAcuSmba8MaAcdtfydbhOkaeaOBdbkaeclfhealaHcefgH9hmbkkaBana8JEhBcbhYabhecbhKindna8MaeydbcdtfydbgHa8MaeclfydbcdtfydbgOSmbaHa8MaecwfydbcdtfydbgASmbaOaASmbabaYcdtfgLaHBdbaLcwfaABdbaLclfaOBdbaYcifhYkaecxfheaKcifgKad6mbkdndna9cTmbaYak9nmba8ZaB9FTmbcbhdabhecbhHindnaoaCaeydbgOcdtfydbcdtfIdbaB9ETmbabadcdtfgAaOBdbaAclfaeclfydbBdbaAcwfaecwfydbBdbadcifhdkaecxfheaHcifgHaY6mbkJFFuuh8ZaJTmeaoheaJhHJFFuuh8SinaeIdbgIa8Sa8SaI9EEg8Va8SaIaB9EgOEh8Sa8Va8ZaOEh8ZaeclfheaHcufgHmbxdkkaYhdkadak0mbxdkkasclfabadalaQz:cjjjbkdndnadak0mbadhOxekdna9cmbadhOxekdna8Zac9FmbadhOxekina8ZJbb;aZNg8Saca8Sac9DEh8VJbbbbh8SdnaJTmbaoheaJhHinaeIdbgIa8SaIa8V9FEa8SaIa8S9EEh8SaeclfheaHcufgHmbkkcbhOabhecbhHindnaoaCaeydbgAcdtfydbcdtfIdba8V9ETmbabaOcdtfgYaABdbaYclfaeclfydbBdbaYcwfaecwfydbBdbaOcifhOkaecxfheaHcifgHad6mbkJFFuuh8ZdnaJTmbaoheaJhHJFFuuhIinaeIdbgRaIaIaR9EEg8PaIaRa8V9EgAEhIa8Pa8ZaAEh8ZaeclfheaHcufgHmbkkdnaOad9hmbadhOxdka8Sanana8S9DEhnaOak9nmeaOhda8Zac9FmbkkdnamcjjjjlGTmbazmbaOTmbcbhQabheinaXaeydbgAfRbbc3thKaecwfgLydbhHdndnahaAcdtg8FfydbaeclfgiydbgCSmbcbhYagaCcdtfydbaA9hmekcjjjj94hYkaeaKaYVaAVBdbaXaCfRbbc3thKdndnahaCcdtfydbaHSmbcbhYagaHcdtfydbaC9hmekcjjjj94hYkaiaKaYVaCVBdbaXaHfRbbc3thYdndnahaHcdtfydbaASmbcbhCaga8FfydbaH9hmekcjjjj94hCkaLaYaCVaHVBdbaecxfheaQcifgQaO6mbkkdnazTmbaOTmbaOheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPa83an:rNUdbkasyd2gecdtascxffc98fhHdninaeTmeaHydbcbyd;O1jjbH:bjjjbbaHc98fhHaecufhexbkkasc;W;qbf8KjjjjbaOk;Yieouabydlhvabydbclfcbaicdtz:ljjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk;Podvuv998Jjjjjbca9RgvcFFF;7rBd3av9cFFF;7;3FF:;Fb83dCavcFFF97Bdzav9cFFF;7FFF:;u83dwdnadTmbaicd4hodnabmbdnalTmbcbhrinaealarcdtfydbao2cdtfhwcbhiinavcCfaifgDawaifIdbgqaDIdbgkakaq9EEUdbavcwfaifgDaqaDIdbgkakaq9DEUdbaiclfgicx9hmbkarcefgrad9hmbxikkaocdthrcbhwincbhiinavcCfaifgDaeaifIdbgqaDIdbgkakaq9EEUdbavcwfaifgDaqaDIdbgkakaq9DEUdbaiclfgicx9hmbkaearfheawcefgwad9hmbxdkkdnalTmbcbhrinabarcx2fgiaealarcdtfydbao2cdtfgwIdbUdbaiawIdlUdlaiawIdwUdwcbhiinavcCfaifgDawaifIdbgqaDIdbgkakaq9EEUdbavcwfaifgDaqaDIdbgkakaq9DEUdbaiclfgicx9hmbkarcefgrad9hmbxdkkaocdthlcbhraehwinabarcx2fgiaearao2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinavcCfaifgDawaifIdbgqaDIdbgkakaq9EEUdbavcwfaifgDaqaDIdbgkakaq9DEUdbaiclfgicx9hmbkawalfhwarcefgrad9hmbkkJbbbbavIdwavIdCgk:tgqaqJbbbb9DEgqavIdxavIdKgx:tgmamaq9DEgqavIdzavId3gm:tgPaPaq9DEhPdnabTmbadTmbJbbbbJbbjZaP:vaPJbbbb9BEhqinabaqabIdbak:tNUdbabclfgvaqavIdbax:tNUdbabcwfgvaqavIdbam:tNUdbabcxfhbadcufgdmbkkaPk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbk:nCoDud99rue99lul998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:ljjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd;S1jjbHjjjjbbgqBdxawceBd2aqaeadaicbz:djjjb8AawcuadcdtadcFFFFi0Egkcbyd;S1jjbHjjjjbbgxBdzawcdBd2adcd4adfhmceheinaegicetheaiam6mbkcbhPawcuaicdtgsaicFFFFi0Ecbyd;S1jjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohexekcjjjj94hekaicufhAc:bwhmcbhCadhXcbhQinaChLaeamgKcufaeaK9iEaPgDcefaeaD9kEhYdndnadTmbaYcuf:YhOaqhiaxheadhmindndnaiIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhCxekcjjjj94hCkaCcCthCdndnaiclfIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhExekcjjjj94hEkaEcqtaCVhCdndnaicwfIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhExekcjjjj94hEkaeaCaEVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:ljjjbh3cbh5cbh8Eindna3axa8EcdtfydbgCcm4aC7c:v;t;h;Ev2gics4ai7aAGgmcdtfgEydbgecuSmbaeaCSmbcehiina3amaifaAGgmcdtfgEydbgecuSmeaicefhiaeaC9hmbkkaEaCBdba5aecuSfh5a8Ecefg8Ead9hmbxdkkazcFeasz:ljjjb8Acbh5kaDaYa5ar0giEhPaLa5aiEhCdna5arSmbaYaKaiEgmaP9Rcd9imbdndnaQcl0mbdnaX:ZgOaL:Zg8A:taY:Yg8FaD:Y:tgaa8FaK:Y:tgha5:ZggaH:tNNNaOaH:tahNa8Aag:tNa8AaH:taaNagaO:tNM:va8FMJbbbZMgO:lJbbb9p9DTmbaO:Ohexdkcjjjj94hexekaPamfcd9Theka5aXaiEhXaQcefgQcs9hmekkdndnaCmbcihicbhDxekcbhiawakcbyd;S1jjbHjjjjbbg8EBdKawclBd2aPcuf:Yh8AdndnadTmbaqhiaxheadhmindndnaiIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhCxekcjjjj94hCkaCcCthCdndnaiclfIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaEcqtaCVhCdndnaicwfIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaeaCaEVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:ljjjbh3cbhDcbh5inaxa5cdtgYfydbgCcm4aC7c:v;t;h;Ev2gics4ai7hecbhidndnina3aeaAGgmcdtfgEydbgecuSmednaxaecdtgEfydbaCSmbaicefgiamfheaiaA9nmekka8EaEfydbhixekaEa5BdbaDhiaDcefhDka8EaYfaiBdba5cefg5ad9hmbkcuaDc32giaDc;j:KM;jb0EhexekazcFeasz:ljjjb8AcbhDcbhekawaecbyd;S1jjbHjjjjbbgeBd3awcvBd2aecbaiz:ljjjbhEavcd4hxdnadTmbdnalTmbaxcdth3a8EhCalheaqhmadhAinaEaCydbc32fgiamIdbaiIdbMUdbaiamclfIdbaiIdlMUdlaiamcwfIdbaiIdwMUdwaiaeIdbaiIdxMUdxaiaeclfIdbaiIdzMUdzaiaecwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaCclfhCaea3fheamcxfhmaAcufgAmbxdkka8EhmaqheadhCinaEamydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKamclfhmaecxfheaCcufgCmbkkdnaDTmbaEhiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgmaOamIdbNUdbaicwfgmaOamIdbNUdbaicxfgmaOamIdbNUdbaiczfgmaOamIdbNUdbaicCfgmaOamIdbNUdbaic3fhiaecufgembkkcbhCawcuaDcdtgYaDcFFFFi0Egicbyd;S1jjbHjjjjbbgeBdaawcoBd2awaicbyd;S1jjbHjjjjbbg3Bd8KaecFeaYz:ljjjbh5dnadTmbJbbjZJbbjZa8A:vaPceSEaoNgOaONh8Aaxcdthxalheina8Aaec;C1jjbalEgmIdwaEa8EydbgAc32fgiIdC:tgOaONamIdbaiIdx:tgOaONamIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndna5aAcdtgifgmydbcuSmba3aifIdbaO9ETmekamaCBdba3aifaOUdbka8Eclfh8EaeaxfheaqcxfhqadaCcefgC9hmbkkaba5aYz:kjjjb8AcrhikaicdthiinaiTmeaic98fgiawcxffydbcbyd;O1jjbH:bjjjbbxbkkawc;Wbf8KjjjjbaDk:Odieui99iu8Jjjjjbca9RgicFFF;7rBd3ai9cFFF;7;3FF:;Fb83dCaicFFF97Bdzai9cFFF;7FFF:;u83dwdndnaembJbbjFhlJbbjFhvJbbjFhoxekadcd4cdthrcbhwincbhdinaicCfadfgDabadfIdbglaDIdbgvaval9EEUdbaicwfadfgDalaDIdbgvaval9DEUdbadclfgdcx9hmbkabarfhbawcefgwae9hmbkaiIdzaiId3:thoaiIdxaiIdK:thvaiIdwaiIdC:thlkJbbbbalalJbbbb9DEglavaval9DEglaoaoal9DEk9DeeuabcFeaicdtz:ljjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk9teiucbcbyd;W1jjbgeabcifc98GfgbBd;W1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;W1jjbgeabcrfc94GfgbBd;W1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd;W1jjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd;W1jjbfgdBd;W1jjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akk6eiucbhidnadTmbdninabRbbglaeRbbgv9hmeaecefheabcefhbadcufgdmbxdkkalav9Rhikaikk:bedbcjwk9Oeeebeebebbeeebebbbbbebebbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeebebbebbebebbbeebbbbbbbbbbbbbbbbbbbbbc;OwkxebbbdbbbjNbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,n=WebAssembly.instantiate(i(a),{}).then(function(b){t=b.instance,t.exports.__wasm_call_ctors()});function i(b){for(var g=new Uint8Array(b.length),m=0;m<b.length;++m){var p=b.charCodeAt(m);g[m]=p>96?p-97:p>64?p-39:p+4}for(var x=0,m=0;m<b.length;++m)g[x++]=g[m]<60?e[g[m]]:(g[m]-60)*64+g[++m];return g.buffer.slice(0,x)}function s(b){if(!b)throw new Error("Assertion failed")}function r(b){return new Uint8Array(b.buffer,b.byteOffset,b.byteLength)}function o(b,g,m){var p=t.exports.sbrk,x=p(g.length*4),y=p(m*4),_=new Uint8Array(t.exports.memory.buffer),M=r(g);_.set(M,x);var A=b(y,x,g.length,m);_=new Uint8Array(t.exports.memory.buffer);var S=new Uint32Array(m);new Uint8Array(S.buffer).set(_.subarray(y,y+m*4)),M.set(_.subarray(x,x+g.length*4)),p(x-p(0));for(var w=0;w<g.length;++w)g[w]=S[g[w]];return[S,A]}function c(b){for(var g=0,m=0;m<b.length;++m){var p=b[m];g=g<p?p:g}return g}function l(b,g,m,p,x,y,_,M,A){var S=t.exports.sbrk,w=S(4),E=S(m*4),v=S(x*y),C=S(m*4),D=new Uint8Array(t.exports.memory.buffer);D.set(r(p),v),D.set(r(g),C);var L=b(E,C,m,v,x,y,_,M,A,w);D=new Uint8Array(t.exports.memory.buffer);var k=new Uint32Array(L);r(k).set(D.subarray(E,E+L*4));var O=new Float32Array(1);return r(O).set(D.subarray(w,w+4)),S(w-S(0)),[k,O[0]]}function d(b,g,m,p,x,y,_,M,A,S,w,E,v){var C=t.exports.sbrk,D=C(4),L=C(m*4),k=C(x*y),O=C(x*M),z=C(A.length*4),X=C(m*4),V=S?C(x):0,ee=new Uint8Array(t.exports.memory.buffer);ee.set(r(p),k),ee.set(r(_),O),ee.set(r(A),z),ee.set(r(g),X),S&&ee.set(r(S),V);var ie=b(L,X,m,k,x,y,O,M,z,A.length,V,w,E,v,D);ee=new Uint8Array(t.exports.memory.buffer);var ue=new Uint32Array(ie);r(ue).set(ee.subarray(L,L+ie*4));var we=new Float32Array(1);return r(we).set(ee.subarray(D,D+4)),C(D-C(0)),[ue,we[0]]}function h(b,g,m,p){var x=t.exports.sbrk,y=x(m*p),_=new Uint8Array(t.exports.memory.buffer);_.set(r(g),y);var M=b(y,m,p);return x(y-x(0)),M}function f(b,g,m,p,x,y,_,M){var A=t.exports.sbrk,S=A(M*4),w=A(m*p),E=A(m*y),v=new Uint8Array(t.exports.memory.buffer);v.set(r(g),w),x&&v.set(r(x),E);var C=b(S,w,m,p,E,y,_,M);v=new Uint8Array(t.exports.memory.buffer);var D=new Uint32Array(C);return r(D).set(v.subarray(S,S+C*4)),A(S-A(0)),D}var u={LockBorder:1,Sparse:2,ErrorAbsolute:4,Prune:8,_InternalDebug:1<<30};return{ready:n,supported:!0,useExperimentalFeatures:!1,compactMesh:function(b){s(b instanceof Uint32Array||b instanceof Int32Array||b instanceof Uint16Array||b instanceof Int16Array),s(b.length%3==0);var g=b.BYTES_PER_ELEMENT==4?b:new Uint32Array(b);return o(t.exports.meshopt_optimizeVertexFetchRemap,g,c(b)+1)},simplify:function(b,g,m,p,x,y){s(b instanceof Uint32Array||b instanceof Int32Array||b instanceof Uint16Array||b instanceof Int16Array),s(b.length%3==0),s(g instanceof Float32Array),s(g.length%m==0),s(m>=3),s(p>=0&&p<=b.length),s(p%3==0),s(x>=0);for(var _=0,M=0;M<(y?y.length:0);++M)s(y[M]in u),s(this.useExperimentalFeatures||y[M]!="Prune"),_|=u[y[M]];var A=b.BYTES_PER_ELEMENT==4?b:new Uint32Array(b),S=l(t.exports.meshopt_simplify,A,b.length,g,g.length/m,m*4,p,x,_);return S[0]=b instanceof Uint32Array?S[0]:new b.constructor(S[0]),S},simplifyWithAttributes:function(b,g,m,p,x,y,_,M,A,S){s(this.useExperimentalFeatures),s(b instanceof Uint32Array||b instanceof Int32Array||b instanceof Uint16Array||b instanceof Int16Array),s(b.length%3==0),s(g instanceof Float32Array),s(g.length%m==0),s(m>=3),s(p instanceof Float32Array),s(p.length%x==0),s(x>=0),s(_==null||_ instanceof Uint8Array),s(_==null||_.length==g.length/m),s(M>=0&&M<=b.length),s(M%3==0),s(A>=0),s(Array.isArray(y)),s(x>=y.length),s(y.length<=32);for(var w=0;w<y.length;++w)s(y[w]>=0);for(var E=0,w=0;w<(S?S.length:0);++w)s(S[w]in u),E|=u[S[w]];var v=b.BYTES_PER_ELEMENT==4?b:new Uint32Array(b),C=d(t.exports.meshopt_simplifyWithAttributes,v,b.length,g,g.length/m,m*4,p,x*4,new Float32Array(y),_?new Uint8Array(_):null,M,A,E);return C[0]=b instanceof Uint32Array?C[0]:new b.constructor(C[0]),C},getScale:function(b,g){return s(b instanceof Float32Array),s(b.length%g==0),s(g>=3),h(t.exports.meshopt_simplifyScale,b,b.length/g,g*4)},simplifyPoints:function(b,g,m,p,x,y){return s(this.useExperimentalFeatures),s(b instanceof Float32Array),s(b.length%g==0),s(g>=3),s(m>=0&&m<=b.length/g),p?(s(p instanceof Float32Array),s(p.length%x==0),s(x>=3),s(b.length/g==p.length/x),f(t.exports.meshopt_simplifyPoints,b,b.length/g,g*4,p,x*4,y,m)):f(t.exports.meshopt_simplifyPoints,b,b.length/g,g*4,void 0,0,0,m)}}})();(function(){var a="b9H79Tebbbefx9Geueu9Geub9Gbb9Giuuueu9Gkuuuuuuuuuu99eu9Gvuuuuueu9Gkuuuuuuuuu9999eu9Gruuuuuuub9Gkuuuuuuuuuuueu9Gouuuuuub9Giuuub9GluuuubiOHdilvorwDqrkbiibeilve9Weiiviebeoweuec:q:Odkr:Yewo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9I919P29K9nW79O2Wt79c9V919U9KbeX9TW79O9V9Wt9F9I919P29K9nW79O2Wt7bd39TW79O9V9Wt9F9J9V9T9W91tWJ2917tWV9c9V919U9K7br39TW79O9V9Wt9F9J9V9T9W91tW9nW79O2Wt9c9V919U9K7bDL9TW79O9V9Wt9F9V9Wt9P9T9P96W9nW79O2Wtbql79IV9RbkDwebcekdsPq;L9kHdbkIbabaec9:fgefcufae9Ugeabci9Uadfcufad9Ugbaeab0Ek:oAlPue99eux998Jjjjjbc:We9Rgk8Kjjjjbakc;mbfcbc;Kbz:njjjb8AakcuaocdtgxaocFFFFi0Egmcbyd:e1jjbHjjjjbbgPBd9makceBd:SeakaPBdnakamcbyd:e1jjbHjjjjbbgsBd9qakcdBd:SeakasBd9eakcualcdtalcFFFFi0Ecbyd:e1jjbHjjjjbbgzBd9uakazBd9iakciBd:SeaPcbaxz:njjjbhHalci9UhOdnalTmbaihPalhAinaHaPydbcdtfgCaCydbcefBdbaPclfhPaAcufgAmbkkdnaoTmbcbhPashAaHhCaohXinaAaPBdbaAclfhAaCydbaPfhPaCclfhCaXcufgXmbkkdnalci6mbcbhPaihAinaAcwfydbhCaAclfydbhXasaAydbcdtfgQaQydbgQcefBdbazaQcdtfaPBdbasaXcdtfgXaXydbgXcefBdbazaXcdtfaPBdbasaCcdtfgCaCydbgCcefBdbazaCcdtfaPBdbaAcxfhAaOaPcefgP9hmbkkdnaoTmbaHhAashPaohCinaPaPydbaAydb9RBdbaAclfhAaPclfhPaCcufgCmbkkakamcbyd:e1jjbHjjjjbbgPBd9yakclBd:SeaPaHaxz:mjjjbhmakaOcbyd:e1jjbHjjjjbbgPBd9CakcvBd:SeaPcbaOz:njjjbhLakcuaOcK2alcjjjjd0Ecbyd:e1jjbHjjjjbbgKBd9GakcoBd:SeJbbbbhYdnalci6g8Ambarcd4hxaihAaKhPaOhrJbbbbhEinavaAclfydbax2cdtfgCIdlh3avaAydbax2cdtfgXIdlhYavaAcwfydbax2cdtfgQIdlh5aCIdwh8EaXIdwh8FaQIdwhaaPaCIdbghaXIdbggMaQIdbg8JMJbbnn:vUdbaPclfaXIdlaCIdlMaQIdlMJbbnn:vUdbaQIdwh8KaCIdwh8LaXIdwh8MaPcxfa3aY:tg3aaa8F:tgaNa5aY:tg5a8Ea8F:tg8EN:tgYJbbbbJbbjZahag:tgha5Na8Jag:tgga3N:tg8Fa8FNaYaYNa8EagNaaahN:tgYaYNMM:rgg:vagJbbbb9BEg3NUdbaPczfaYa3NUdbaPcCfa8Fa3NUdbaPcwfa8Ka8Ma8LMMJbbnn:vUdbaEagMhEaAcxfhAaPcKfhParcufgrmbkaEaO:Z:vJbbbZNhYkakcuaOcdtalcFFFF970Ecbyd:e1jjbHjjjjbbgCBd9KakcrBd:SeaYaD:ZN:rhYdna8AmbcbhPaChAinaAaPBdbaAclfhAaOaPcefgP9hmbkkaYJbbbZNh8MakcuaOcltalcFFFFd0Ecbyd:e1jjbHjjjjbbg8ABd9OakcwBd:Secba8AaKaCaOz:djjjb8Aakaocbyd:e1jjbHjjjjbbgPBd2aPcFeaoz:njjjbhrakc8Wfcwf9cb83ibak9cb83i8WcbhPJbbbbhEJbbbbh5Jbbbbh8EJbbbbhYJbbbbh8FJbbbbhgcbhlinJbbbbh3dnaPTmbJbbjZaP:Z:vh3kaka8Ea3NgaUdaaka5a3NghUd3akaEa3Ng8JUdKJbbbbh3dnagagNaYaYNa8Fa8FNMMg8KJbbbb9BmbJbbjZa8K:r:vh3kakaga3NUd8Saka8Fa3NUdyakaYa3NUd8Kdndndnakyd8WgQakydUgAakcKfaeaiakc;abfaKamara8Maqz:ejjjbgCcuSmbdnaPaD9pmbaAaraiaCcx2fgXydbfRbbcFeSfaraXclfydbfRbbcFeSfaraXcwfydbfRbbcFeSfaw9nmdkaQaAcbaeaiakc;abfaKamara8MJbbbbz:ejjjbgCcu9hmekakaaUdCakahUdzaka8JUdxakcuBdwakcFFF;7rBdla8AcbaKaLakcxfakcwfakclfz:fjjjbakydwgCcuSmekdnakc8WfaiaCcx2fgOydbgPaOclfydbgAaOcwfydbgXarabaeadalawaDz:gjjjbTmbalcefhlJbbbbhEJbbbbh5Jbbbbh8EJbbbbhYJbbbbh8FJbbbbhgkamaPcdtfgPaPydbcufBdbamaAcdtfgPaPydbcufBdbamaXcdtfgPaPydbcufBdbcbhXinazasaOaXcdtfydbcdtgAfydbcdtfgxhPaHaAfgvydbgQhAdnaQTmbdninaPydbaCSmeaPclfhPaAcufgATmdxbkkaPaxaQcdtfc98fydbBdbavavydbcufBdbkaXcefgXci9hmbkaKaCcK2fgPIdbh3aPIdlhaaPIdwhhaPIdxh8JaPIdzh8KaPIdCh8LaLaCfce86bbaga8LMhga8Fa8KMh8FaYa8JMhYa8EahMh8Ea5aaMh5aEa3MhEakyd88hPxekkdnaPTmbdnakyd80gAaPci2fgCciGTmbadaCfcbaPaAcu7fciGcefz:njjjb8AkabalcltfgPak8Pi8W83dbaPcwfakc8Wfcwf8Pib83dbalcefhlkcahPdninaPc98Smeakc;mbfaPfydbcbydj1jjbH:bjjjbbaPc98fhPxbkkakc:Wef8Kjjjjbalk;3vivuv99lu8Jjjjjbca9Rgv8Kjjjjbdndnalcw0mbaiydbhoaeabcitfgralcdtcufBdlaraoBdbdnalcd6mbaiclfhoalcufhwarcxfhrinaoydbhDarcuBdbarc98faDBdbarcwfhraoclfhoawcufgwmbkkalabfhrxekcbhDavczfcwfcbBdbav9cb83izavcwfcbBdbav9cb83ibJbbjZhqJbbjZhkinadaiaDcdtfydbcK2fhwcbhrinavczfarfgoawarfIdbgxaoIdbgm:tgPakNamMgmUdbavarfgoaPaxam:tNaoIdbMUdbarclfgrcx9hmbkJbbjZaqJbbjZMgq:vhkaDcefgDal9hmbkcbhoadcbcecdavIdlgxavIdwgm9GEgravIdbgPam9GEaraPax9GEgscdtgrfhzavczfarfIdbhxaihralhwinaiaocdtfgDydbhHaDarydbgOBdbaraHBdbarclfhraoazaOcK2fIdbax9Dfhoawcufgwmbkaeabcitfhrdndnaocv6mbaoalc98f6mekaraiydbBdbaralcdtcufBdlaiclfhoalcufhwarcxfhrinaoydbhDarcuBdbarc98faDBdbarcwfhraoclfhoawcufgwmbkalabfhrxekaraxUdbaeabcitfgrarydlc98GasVBdlabcefaeadaiaoz:djjjbhwararydlciGawabcu7fcdtVBdlawaeadaiaocdtfalao9Rz:djjjbhrkavcaf8Kjjjjbark;Bloeue99vue99Due99dndnaembcuhkxekJbbjZaq:thxaiabcdtfhmavydbhPavydlhsavydwhzcbhHJFFuuhOcvhbcuhkindnaPamaHcdtfydbcdtgvfydbgATmbazasavfydbcdtfhiindndnawalaiydbgCcx2fgvclfydbgXfRbbcFeSawavydbgQfRbbcFeSfawavcwfydbgLfRbbcFeSfgKmbcbhvxekcehvaraQcdtfydbgYceSmbcehvaraXcdtfydbg8AceSmbcehvaraLcdtfydbgEceSmbdna8AcdSaYcdSfaEcdSfcd6mbaKcefhvxekaKcdfhvkdnavab9kmbdndnadTmbaoaCcK2fgQIdwadIdw:tg3a3NaQIdbadIdb:tg3a3NaQIdladIdl:tg3a3NMM:raD:vaxNJbbjZMJ9VO:d86JbbjZaQIdCadIdCNaQIdxadIdxNaQIdzadIdzNMMaqN:tg3a3J9VO:d869DENh3xekaraQcdtfydbaraXcdtfydbfaraLcdtfydbfc99f:Zh3kaCakavab6a3aO9DVgQEhkavabaQEhba3aOaQEhOkaiclfhiaAcufgAmbkkaHcefgHae9hmbkkakk;bddlue99dndndnabaecitfgrydlgwciGgDci9hmbarclfhqxekinabcbawcd4gwalaDcdtfIdbabaecitfIdb:tgkJbbbb9FEgDaecefgefadaialavaoz:fjjjbak:laoIdb9FTmdabaDaw7aefgecitfgrydlgwciGgDci9hmbkarclfhqkabaecitfhecuhbindnaiaeydbgDfRbbmbadaDcK2fgrIdwalIdw:tgkakNarIdbalIdb:tgkakNarIdlalIdl:tgkakNMM:rgkaoIdb9DTmbaoakUdbavaDBdbaqydbhwkaecwfheabcefgbawcd46mbkkk;yleoudnaladfgkRbbcFeSalaefgxRbbgmcFeSfabydwgPfalaifgsRbbcFeSfaD0abydxaq9pVgzce9hmbavawcltfgmab8Pdb83dbamcwfabcwfgm8Pdb83dbdndnamydbmbcbhqxekcbhDaohminalamabydbcdtfydbfcFe86bbamclfhmaDcefgDabydwgq6mbkkdnabydxglci2gDabydlgmfgPciGTmbaraPfcbalamcu7fciGcefz:njjjb8Aabydxci2hDabydlhmabydwhqkab9cb83dwababydbaqfBdbabaDcifc98GamfBdlaxRbbhmcbhPkdnamcFeGcFe9hmbaxaP86bbababydwgmcefBdwaoabydbcdtfamcdtfaeBdbkdnakRbbcFe9hmbakabydw86bbababydwgmcefBdwaoabydbcdtfamcdtfadBdbkdnasRbbcFe9hmbasabydw86bbababydwgmcefBdwaoabydbcdtfamcdtfaiBdbkarabydlfabydxci2faxRbb86bbarabydlfabydxci2fcefakRbb86bbarabydlfabydxci2fcdfasRbb86bbababydxcefBdxazk;Ckovud99euv99eul998Jjjjjbc:G;ae9Rgo8KjjjjbdndnadTmbavcd4hrcbhwcbhDindnaiaeclfydbar2cdtfgvIdbaiaeydbar2cdtfgqIdbgk:tgxaiaecwfydbar2cdtfgmIdlaqIdlgP:tgsNamIdbak:tgzavIdlaP:tgPN:tgkakNaPamIdwaqIdwgH:tgONasavIdwaH:tgHN:tgPaPNaHazNaOaxN:tgxaxNMM:rgsJbbbb9Bmbaoc:G:qefawcx2fgAakas:vUdwaAaxas:vUdlaAaPas:vUdbaocafawc8K2fgAaq8Pdb83dbaAav8Pdb83dxaAam8Pdb83dKaAcwfaqcwfydbBdbaAcCfavcwfydbBdbaAcafamcwfydbBdbawcefhwkaecxfheaDcifgDad6mbkab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbawTmeao9cb83iKao9cb83izaoczfaocafawci2z1jjjbaoIdKhCaoIdChXaoIdzhQao9cb83iwao9cb83ibaoaoc:G:qefawz1jjjbJbbjZhkaoIdwgPJbbbbJbbjZaPaPNaoIdbgPaPNaoIdlgsasNMM:rgx:vaxJbbbb9BEgzNhxasazNhsaPazNhzaoc:G:qefheawhvinaecwfIdbaxNaeIdbazNasaeclfIdbNMMgPakaPak9DEhkaecxfheavcufgvmbkabaCUdwabaXUdlabaQUdbabaoId3UdxdndnakJ;n;m;m899FmbJbbbbhPaoc:G:qefheaocafhvinaCavcwfIdb:taecwfIdbgHNaQavIdb:taeIdbgONaXavclfIdb:taeclfIdbgLNMMaxaHNazaONasaLNMM:vgHaPaHaP9EEhPavc8KfhvaecxfheawcufgwmbkabazUd3abc8KfaxUdbabcafasUdbabcKfaCaxaPN:tUdbabcCfaXasaPN:tUdbabaQazaPN:tUdzabJbbjZakakN:t:rgkUdydndnaxJbbj:;axJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;axJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohexekcjjjj94hekabc8Ufae86bbdndnasJbbj:;asJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;asJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabcRfav86bbdndnazJbbj:;azJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;azJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohqxekcjjjj94hqkabaq86b8SdndnaecKtcK91:YJbb;:9c:vax:t:lavcKtcK91:YJbb;:9c:vas:t:laqcKtcK91:YJbb;:9c:vaz:t:lakMMMJbb;:9cNJbbjZMgk:lJbbb9p9DTmbak:Ohexekcjjjj94hekaecFbaecFb9iEhexekabcjjj;8iBdycFbhekabae86b8Vxekab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbkaoc:G;aef8Kjjjjbk:mvdouq99cbhi8Jjjjjbca9RglczfcwfcbBdbal9cb83izalcwfcbBdbal9cb83ibdnadTmbcbhvinaeaifhocbhrinalczfarfgwavawydbgwaoarfIdbgDaearawcx2ffIdb9DEBdbalarfgwavawydbgwaDaearawcx2ffIdb9EEBdbarclfgrcx9hmbkaicxfhiavcefgvad9hmbkkJbbbbhDcbhrcbhicbhvinaealarfydbcx2fgwIdwaealczfarfydbcx2fgoIdw:tgqaqNawIdbaoIdb:tgqaqNawIdlaoIdl:tgqaqNMMgqaDaqaD9EgwEhDavaiawEhiarclfhravcefgvci9hmbkaealczfaicdtgvfydbcx2fgrIdwaealavfydbcx2fglIdwMJbbbZNhqarIdlalIdlMJbbbZNhkarIdbalIdbMJbbbZNhxaD:rJbbbZNhDdnadTmbindnaecwfIdbgmaq:tgPaPNaeIdbgsax:tgPaPNaeclfIdbgzak:tgPaPNMMgPaDaDN9ETmbaqaDaP:rgH:vJbbbZNJbbbZMgPNamJbbjZaP:tgONMhqakaPNazaONMhkaxaPNasaONMhxaDaHMJbbbZNhDkaecxfheadcufgdmbkkabaDUdxabaqUdwabakUdlabaxUdbkjeeiu8Jjjjjbcj8W9Rgr8Kjjjjbaici2hwdnaiTmbawceawce0EhDarhiinaiaeadRbbcdtfydbBdbadcefhdaiclfhiaDcufgDmbkkabarawaladaoz:hjjjbarcj8Wf8Kjjjjbk:Ylequ8Jjjjjbcjx9Rgl8Kjjjjbcbhvalcjqfcbaiz:njjjb8AdndnadTmbcjehoaehrincuhwarhDcuhqavhkdninawakaoalcjqfaDcefRbbfRbb9RcFeGci6aoalcjqfaDRbbfRbb9RcFeGci6faoalcjqfaDcdfRbbfRbb9RcFeGci6fgxaq9mgmEhwdnammbaxce0mdkaxaqaxaq9kEhqaDcifhDadakcefgk9hmbkkaeawci2fgDcdfRbbhqaDcefRbbhxaDRbbhkaeavci2fgDcifaDawav9Rci2z:qjjjb8Aakalcjqffaocefgo86bbaxalcjqffao86bbaDcdfaq86bbaDcefax86bbaDak86bbaqalcjqffao86bbarcifhravcefgvad9hmbkalcFeaiz:njjjbhoadci2gDceaDce0EhqcbhxindnaoaeRbbgkfgwRbbgDcFe9hmbawax86bbaocjdfaxcdtfabakcdtfydbBdbaxhDaxcefhxkaeaD86bbaecefheaqcufgqmbkaxcdthDxekcbhDkabalcjdfaDz:mjjjb8Aalcjxf8Kjjjjbk9teiucbcbyd11jjbgeabcifc98GfgbBd11jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd11jjbgeabcrfc94GfgbBd11jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd11jjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd11jjbfgdBd11jjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akk:;Deludndndnadch9pmbabaeSmdaeabadfgi9Rcbadcet9R0mekabaead;8qbbxekaeab7ciGhldndndnabae9pmbdnalTmbadhvabhixikdnabciGmbadhvabhixdkadTmiabaeRbb86bbadcufhvdnabcefgiciGmbaecefhexdkavTmiabaeRbe86beadc9:fhvdnabcdfgiciGmbaecdfhexdkavTmiabaeRbd86bdadc99fhvdnabcifgiciGmbaecifhexdkavTmiabaeRbi86biabclfhiaeclfheadc98fhvxekdnalmbdnaiciGTmbadTmlabadcufgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc9:fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc99fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc98fgdfaeadfRbb86bbkadcl6mbdnadc98fgocd4cefciGgiTmbaec98fhlabc98fhvinavadfaladfydbBdbadc98fhdaicufgimbkkaocx6mbaec9Wfhvabc9WfhoinaoadfgicxfavadfglcxfydbBdbaicwfalcwfydbBdbaiclfalclfydbBdbaialydbBdbadc9Wfgdci0mbkkadTmdadhidnadciGglTmbaecufhvabcufhoadhiinaoaifavaifRbb86bbaicufhialcufglmbkkadcl6mdaec98fhlabc98fhvinavaifgecifalaifgdcifRbb86bbaecdfadcdfRbb86bbaecefadcefRbb86bbaeadRbb86bbaic98fgimbxikkavcl6mbdnavc98fglcd4cefcrGgdTmbavadcdt9RhvinaiaeydbBdbaeclfheaiclfhiadcufgdmbkkalc36mbinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaiaeydzBdzaiaeydCBdCaiaeydKBdKaiaeyd3Bd3aecafheaicafhiavc9Gfgvci0mbkkavTmbdndnavcrGgdmbavhlxekavc94GhlinaiaeRbb86bbaicefhiaecefheadcufgdmbkkavcw6mbinaiaeRbb86bbaiaeRbe86beaiaeRbd86bdaiaeRbi86biaiaeRbl86blaiaeRbv86bvaiaeRbo86boaiaeRbr86braicwfhiaecwfhealc94fglmbkkabkkAebcjwkxebbbdbbbzNbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,n=WebAssembly.instantiate(i(a),{}).then(function(b){t=b.instance,t.exports.__wasm_call_ctors()});function i(b){for(var g=new Uint8Array(b.length),m=0;m<b.length;++m){var p=b.charCodeAt(m);g[m]=p>96?p-97:p>64?p-39:p+4}for(var x=0,m=0;m<b.length;++m)g[x++]=g[m]<60?e[g[m]]:(g[m]-60)*64+g[++m];return g.buffer.slice(0,x)}function s(b){if(!b)throw new Error("Assertion failed")}function r(b){return new Uint8Array(b.buffer,b.byteOffset,b.byteLength)}var o=48,c=16;function l(b,g){var m=b.meshlets[g*4+0],p=b.meshlets[g*4+1],x=b.meshlets[g*4+2],y=b.meshlets[g*4+3];return{vertices:b.vertices.subarray(m,m+x),triangles:b.triangles.subarray(p,p+y*3)}}function d(b,g,m,p,x,y,_){var M=t.exports.sbrk,A=t.exports.meshopt_buildMeshletsBound(b.length,x,y),S=M(A*c),w=M(A*x*4),E=M(A*y*3),v=M(b.byteLength),C=M(g.byteLength),D=new Uint8Array(t.exports.memory.buffer);D.set(r(b),v),D.set(r(g),C);var L=t.exports.meshopt_buildMeshlets(S,w,E,v,b.length,C,m,p,x,y,_);D=new Uint8Array(t.exports.memory.buffer);for(var k=D.subarray(S,S+L*c),O=new Uint32Array(k.buffer,k.byteOffset,k.byteLength/4).slice(),z=0;z<L;++z){var X=O[z*4+0],V=O[z*4+1],m=O[z*4+2],ee=O[z*4+3];t.exports.meshopt_optimizeMeshlet(w+X*4,E+V,ee,m)}var ie=O[(L-1)*4+0],ue=O[(L-1)*4+1],we=O[(L-1)*4+2],Ve=O[(L-1)*4+3],q=ie+we,Q=ue+(Ve*3+3&-4),pe={meshlets:O,vertices:new Uint32Array(D.buffer,w,q).slice(),triangles:new Uint8Array(D.buffer,E,Q*3).slice(),meshletCount:L};return M(S-M(0)),pe}function h(b){var g=new Float32Array(t.exports.memory.buffer,b,o/4);return{centerX:g[0],centerY:g[1],centerZ:g[2],radius:g[3],coneApexX:g[4],coneApexY:g[5],coneApexZ:g[6],coneAxisX:g[7],coneAxisY:g[8],coneAxisZ:g[9],coneCutoff:g[10]}}function f(b,g,m,p){var x=t.exports.sbrk,y=[],_=x(g.byteLength),M=x(b.vertices.byteLength),A=x(b.triangles.byteLength),S=x(o),w=new Uint8Array(t.exports.memory.buffer);w.set(r(g),_),w.set(r(b.vertices),M),w.set(r(b.triangles),A);for(var E=0;E<b.meshletCount;++E){var v=b.meshlets[E*4+0],C=b.meshlets[E*4+0+1],D=b.meshlets[E*4+0+3];t.exports.meshopt_computeMeshletBounds(S,M+v*4,A+C,D,_,m,p),y.push(h(S))}return x(_-x(0)),y}function u(b,g,m,p){var x=t.exports.sbrk,y=x(o),_=x(b.byteLength),M=x(g.byteLength),A=new Uint8Array(t.exports.memory.buffer);A.set(r(b),_),A.set(r(g),M),t.exports.meshopt_computeClusterBounds(y,_,b.length,M,m,p);var S=h(y);return x(y-x(0)),S}return{ready:n,supported:!0,buildMeshlets:function(b,g,m,p,x,y){s(b.length%3==0),s(g instanceof Float32Array),s(g.length%m==0),s(m>=3),s(p<=255||p>0),s(x<=512),s(x%4==0),y=y||0;var _=b.BYTES_PER_ELEMENT==4?b:new Uint32Array(b);return d(_,g,g.length/m,m*4,p,x,y)},computeClusterBounds:function(b,g,m){s(b.length%3==0),s(b.length/3<=512),s(g instanceof Float32Array),s(g.length%m==0),s(m>=3);var p=b.BYTES_PER_ELEMENT==4?b:new Uint32Array(b);return u(p,g,g.length/m,m*4)},computeMeshletBounds:function(b,g,m){return s(b.meshletCount!=0),s(g instanceof Float32Array),s(g.length%m==0),s(m>=3),f(b,g,g.length/m,m*4)},extractMeshlet:function(b,g){return s(g>=0&&g<b.meshletCount),l(b,g)}}})();const d0="archvr",h0=1;function f0(a){const e=/^(\d+)\.(\d+)$/.exec(a);return e===null?null:Number(e[1])}function kh(a){return Array.isArray(a)&&a.length===3&&a.every(e=>typeof e=="number"&&Number.isFinite(e))}function u0(a){const e=[];if(typeof a!="object"||a===null)return{valid:!1,errors:["Metadata bulunamadı: bu dosya bir ArchVR paketi değil. Dosyayı ArchVR Hazırlayıcı ile yeniden oluşturun."]};const t=a;if(typeof t.formatVersion!="string")e.push("Format sürümü eksik. Dosyayı ArchVR Hazırlayıcı ile yeniden oluşturun.");else{const i=f0(t.formatVersion);i===null?e.push(`Format sürümü bozuk: "${t.formatVersion}". Dosyayı ArchVR Hazırlayıcı ile yeniden oluşturun.`):i>h0&&e.push(`Bu dosya daha yeni bir ArchVR sürümüyle oluşturulmuş (format ${t.formatVersion}). Uygulamayı güncelleyin.`)}(typeof t.projectName!="string"||t.projectName.trim().length===0)&&e.push("Proje adı eksik. Paketlemeden önce bir proje adı girin."),(typeof t.createdAt!="string"||Number.isNaN(Date.parse(t.createdAt)))&&e.push("Oluşturulma tarihi eksik veya bozuk."),(typeof t.generator!="string"||t.generator.trim().length===0)&&e.push("Üretici bilgisi (generator) eksik.");const n=t.spawn;if(typeof n!="object"||n===null?e.push("Başlangıç noktası (spawn) eksik. Paketlemeden önce başlangıç noktasını işaretleyin."):(kh(n.position)||e.push("Başlangıç noktasının konumu (spawn.position) [x, y, z] biçiminde üç sayı olmalı."),(typeof n.yawDegrees!="number"||!Number.isFinite(n.yawDegrees))&&e.push("Başlangıç bakış yönü (spawn.yawDegrees) bir sayı olmalı.")),t.labels!==void 0)if(!Array.isArray(t.labels))e.push("Etiket listesi (labels) bir dizi olmalı.");else for(const[i,s]of t.labels.entries()){const r=s;typeof r!="object"||r===null||!kh(r.position)||typeof r.text!="string"||r.text.trim().length===0?e.push(`Etiket #${i+1} bozuk: position [x,y,z] ve boş olmayan text zorunlu.`):r.subtext!==void 0&&typeof r.subtext!="string"&&e.push(`Etiket #${i+1} bozuk: subtext bir metin olmalı.`)}return t.nightBaked!==void 0&&typeof t.nightBaked!="boolean"&&e.push("nightBaked alanı true/false olmalı."),{valid:e.length===0,errors:e}}const p0=1179937895,m0=2,Uh=12,Nh=8,b0=1313821514,g0=5130562,Fh=4;class ei extends Error{constructor(e){super(e),this.name="GlbError"}}function x0(a){return a instanceof Uint8Array?a:new Uint8Array(a)}function _0(a){const e=x0(a);if(e.byteLength<Uh)throw new ei("Dosya çok küçük, geçerli bir GLB değil.");const t=new DataView(e.buffer,e.byteOffset,e.byteLength);if(t.getUint32(0,!0)!==p0)throw new ei("Bu bir GLB dosyası değil (dosya imzası uyuşmuyor). .glb uzantılı, binary glTF dosyası seçin.");const n=t.getUint32(4,!0);if(n!==m0)throw new ei(`Desteklenmeyen GLB sürümü: ${n}. glTF 2.0 (GLB v2) dosyası gerekli.`);const i=t.getUint32(8,!0);if(i>e.byteLength)throw new ei("GLB dosyası eksik görünüyor (beklenen uzunluk dosyadan büyük). Dosya kopyalanırken bozulmuş olabilir, yeniden aktarın.");let s=null,r=null,o=Uh;for(;o+Nh<=i;){const c=t.getUint32(o,!0),l=t.getUint32(o+4,!0),d=o+Nh;if(d+c>i)throw new ei("GLB chunk'ı dosya sınırını aşıyor, dosya bozuk.");const h=e.subarray(d,d+c);if(l===b0&&s===null)try{s=JSON.parse(new TextDecoder().decode(h))}catch{throw new ei("GLB içindeki JSON bölümü çözümlenemedi, dosya bozuk.")}else l===g0&&r===null&&(r=h);o=d+c;const f=o%Fh;f!==0&&(o+=Fh-f)}if(s===null)throw new ei("GLB dosyasında JSON bölümü bulunamadı, dosya bozuk.");return{json:s,bin:r}}function y0(a){const{json:e}=_0(a),n=e.extras?.[d0];if(n===void 0)return null;const i=u0(n);if(!i.valid)throw new ei(i.errors.join(" "));return n}function v0(a,e){a.traverse(t=>{const n=t;if(!n.isMesh)return;const s=(Array.isArray(n.material)?n.material:[n.material]).map(r=>{const o=r,c=new ai({map:o.map??null,color:o.map!==null?16777215:o.color??new Te(16777215)});c.name=r.name,e&&o.emissiveMap!==null&&o.map!==null&&(c.userData.dayMap=o.map,c.userData.nightMap=o.emissiveMap),c.side=o.side,c.transparent=o.transparent,c.opacity=o.opacity,c.alphaTest=o.alphaTest,c.alphaMap=o.alphaMap??null;const l=o;return typeof l.transmission=="number"&&l.transmission>0&&(c.transparent=!0,c.opacity=Math.min(c.opacity,.35)),c});n.material=Array.isArray(n.material)?s:s[0]})}async function jf(a){const e=y0(a),t=new Rv;t.setMeshoptDecoder(l0);const n=await t.parseAsync(a,"");return e?.lighting==="baked"&&v0(n.scene,e.nightBaked===!0),{scene:n.scene,metadata:e}}async function M0(a){const e=await fetch(a);if(!e.ok)throw new Error(`Model indirilemedi (HTTP ${e.status}). Sayfayı yenileyip tekrar deneyin.`);return jf(await e.arrayBuffer())}const S0=1.9,Bh=.0027,Oh="bold 64px 'Segoe UI', sans-serif",Hh="44px 'Segoe UI', sans-serif",E0=28,A0="rgba(12, 16, 24, 0.78)",T0="#ffffff",w0="#9fb6d9",R0=22;function C0(a,e){const t=document.createElement("canvas"),n=t.getContext("2d");if(n===null)throw new Error("Canvas 2D bağlamı alınamadı.");n.font=Oh;const i=n.measureText(a).width;n.font=Hh;const s=e!==void 0?n.measureText(e).width:0,r=Math.ceil(Math.max(i,s))+E0*2,o=e!==void 0?190:128;t.width=r,t.height=o,n.fillStyle=A0,n.beginPath(),n.roundRect(0,0,r,o,R0),n.fill(),n.textAlign="center",n.fillStyle=T0,n.font=Oh,n.fillText(a,r/2,84),e!==void 0&&(n.fillStyle=w0,n.font=Hh,n.fillText(e,r/2,152));const c=new w_(t);c.colorSpace=vt;const l=new p_(new wf({map:c,transparent:!0}));return l.scale.set(r*Bh,o*Bh,1),l}const Oo=14674160,I0=658968,P0=5,D0=3,L0=.1,k0=200,U0=8,N0=.45;class F0{constructor(e){this.scene=new u_,this.player=new Fn,this.clock=new J_,this.collision=new pv,this.metadata=null,this.currentModel=null,this.labelsGroup=new Fn,this.nightMode=!1,this.nightButtonHeld=!1,this.headPosition=new P,this.renderer=new f_({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(Oo),this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local-floor"),e.appendChild(this.renderer.domElement),this.camera=new Ut(70,window.innerWidth/window.innerHeight,L0,k0),this.camera.rotation.order="YXZ",this.player.add(this.camera),this.scene.add(this.player),this.ambientLight=new j_(16777215,7828582,D0),this.scene.add(this.ambientLight),this.scene.add(this.labelsGroup),this.locomotion=new vv(this.player,this.camera,this.collision),this.vignette=new Ev(this.camera),this.desktopControls=new wv(this.player,this.camera,this.collision,this.renderer.domElement),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("keydown",t=>{t.key.toLowerCase()==="n"&&this.toggleNight()}),this.renderer.xr.addEventListener("sessionstart",()=>{this.desktopControls.enabled=!1}),this.renderer.xr.addEventListener("sessionend",()=>{this.desktopControls.enabled=!0})}async loadPackage(e){const t=await M0(e);return this.installPackage(t.scene,t.metadata)}async loadPackageFromBuffer(e){const t=await jf(e);return this.installPackage(t.scene,t.metadata)}installPackage(e,t){this.currentModel!==null&&this.scene.remove(this.currentModel),this.currentModel=e,this.scene.add(e),this.ambientLight.visible=t?.lighting!=="baked";const n=[];e.traverse(i=>{i.isMesh&&n.push(i)}),this.collision.setColliders(n);for(const i of this.labelsGroup.children){const s=i;s.material.map?.dispose(),s.material.dispose()}this.labelsGroup.clear();for(const i of t?.labels??[]){const s=C0(i.text,i.subtext);s.position.set(i.position[0],i.position[1]+S0,i.position[2]),this.labelsGroup.add(s)}return this.metadata=t,this.nightMode=!1,this.renderer.setClearColor(Oo),this.applySpawn(),t}get nightAvailable(){return this.metadata?.nightBaked===!0}toggleNight(){!this.nightAvailable||this.currentModel===null||(this.nightMode=!this.nightMode,this.renderer.setClearColor(this.nightMode?I0:Oo),this.currentModel.traverse(e=>{const t=e;if(!t.isMesh)return;const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n){const s=i,r=s.userData.dayMap,o=s.userData.nightMap;r!==void 0&&o!==void 0&&(s.map=this.nightMode?o:r,s.needsUpdate=!0)}}))}pollNightToggle(e){if(e===null||!this.nightAvailable)return;let t=!1;for(const n of e.inputSources)n.gamepad?.buttons[P0]?.pressed===!0&&(t=!0);t&&!this.nightButtonHeld&&this.toggleNight(),this.nightButtonHeld=t}applySpawn(){if(this.metadata!==null){const{position:e,yawDegrees:t}=this.metadata.spawn;this.player.position.set(e[0],e[1],e[2]),this.player.rotation.set(0,xa.degToRad(t),0)}else this.player.position.set(0,0,0),this.player.rotation.set(0,0,0)}start(){this.renderer.setAnimationLoop(()=>{const e=this.clock.getDelta(),t=this.renderer.xr.getSession();this.locomotion.update(t,e),this.desktopControls.update(e),this.pollNightToggle(t),this.updateGroundFollow(e),this.vignette.update(this.locomotion.currentSpeedRatio,e),this.renderer.render(this.scene,this.camera)})}updateGroundFollow(e){this.camera.getWorldPosition(this.headPosition);const t=this.collision.findFloorHeight(this.headPosition);if(t===null)return;const n=t-this.player.position.y;if(n>N0||n<-3)return;const i=Math.min(1,U0*e);this.player.position.y+=n*i}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}const Wc=(a,e)=>e.some(t=>a instanceof t);let zh,jh;function B0(){return zh||(zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O0(){return jh||(jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qc=new WeakMap,Ho=new WeakMap,Or=new WeakMap;function H0(a){const e=new Promise((t,n)=>{const i=()=>{a.removeEventListener("success",s),a.removeEventListener("error",r)},s=()=>{t(Ri(a.result)),i()},r=()=>{n(a.error),i()};a.addEventListener("success",s),a.addEventListener("error",r)});return Or.set(e,a),e}function z0(a){if(qc.has(a))return;const e=new Promise((t,n)=>{const i=()=>{a.removeEventListener("complete",s),a.removeEventListener("error",r),a.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(a.error||new DOMException("AbortError","AbortError")),i()};a.addEventListener("complete",s),a.addEventListener("error",r),a.addEventListener("abort",r)});qc.set(a,e)}let Xc={get(a,e,t){if(a instanceof IDBTransaction){if(e==="done")return qc.get(a);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ri(a[e])},set(a,e,t){return a[e]=t,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function Gf(a){Xc=a(Xc)}function j0(a){return O0().includes(a)?function(...e){return a.apply(Kc(this),e),Ri(this.request)}:function(...e){return Ri(a.apply(Kc(this),e))}}function G0(a){return typeof a=="function"?j0(a):(a instanceof IDBTransaction&&z0(a),Wc(a,B0())?new Proxy(a,Xc):a)}function Ri(a){if(a instanceof IDBRequest)return H0(a);if(Ho.has(a))return Ho.get(a);const e=G0(a);return e!==a&&(Ho.set(a,e),Or.set(e,a)),e}const Kc=a=>Or.get(a);function V0(a,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const r=indexedDB.open(a,e),o=Ri(r);return n&&r.addEventListener("upgradeneeded",c=>{n(Ri(r.result),c.oldVersion,c.newVersion,Ri(r.transaction),c)}),t&&r.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const W0=["get","getKey","getAll","getAllKeys","count"],q0=["put","add","delete","clear"],zo=new Map;function Gh(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(zo.get(e))return zo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=q0.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||W0.includes(t)))return;const s=async function(r,...o){const c=this.transaction(r,i?"readwrite":"readonly");let l=c.store;return n&&(l=l.index(o.shift())),(await Promise.all([l[t](...o),i&&c.done]))[0]};return zo.set(e,s),s}Gf(a=>({...a,get:(e,t,n)=>Gh(e,t)||a.get(e,t,n),has:(e,t)=>!!Gh(e,t)||a.has(e,t)}));const X0=["continue","continuePrimaryKey","advance"],Vh={},Yc=new WeakMap,Vf=new WeakMap,K0={get(a,e){if(!X0.includes(e))return a[e];let t=Vh[e];return t||(t=Vh[e]=function(...n){Yc.set(this,Vf.get(this)[e](...n))}),t}};async function*Y0(...a){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...a)),!e)return;e=e;const t=new Proxy(e,K0);for(Vf.set(t,e),Or.set(t,Kc(e));e;)yield t,e=await(Yc.get(t)||e.continue()),Yc.delete(t)}function Wh(a,e){return e===Symbol.asyncIterator&&Wc(a,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&Wc(a,[IDBIndex,IDBObjectStore])}Gf(a=>({...a,get(e,t,n){return Wh(e,t)?Y0:a.get(e,t,n)},has(e,t){return Wh(e,t)||a.has(e,t)}}));const J0="archvr",Z0=1,bs="projects";let qh=null;function Hr(){return qh??(qh=V0(J0,Z0,{upgrade(a){a.createObjectStore(bs,{keyPath:"id"})}})),qh}async function Q0(a,e){const t={id:String(Date.now()),name:a,sizeBytes:e.byteLength,addedAt:new Date().toISOString(),data:e};await(await Hr()).put(bs,t);const{data:n,...i}=t;return i}async function $0(){return(await(await Hr()).getAll(bs)).map(({data:e,...t})=>t).sort((e,t)=>t.id.localeCompare(e.id))}async function eM(a){return(await(await Hr()).get(bs,a))?.data??null}async function tM(a){await(await Hr()).delete(bs,a)}const nM="./models/ornek-daire.archvr.glb",iM={requiredFeatures:["local-floor"]},Xh=document.getElementById("overlay"),jo=document.getElementById("project-list"),aM=document.getElementById("status"),Jc=document.getElementById("enter-vr"),Go=document.getElementById("file-picker"),sM=document.getElementById("loaded-name");let pr=null,Ir=!1;function xn(a){aM.textContent=a}function rM(a){return`${(a/(1024*1024)).toFixed(1)} MB`}function Wf(){if(pr===null){const a=document.getElementById("app");if(a===null)throw new Error("#app bulunamadı");pr=new F0(a),pr.start()}return pr}async function yl(a,e){xn("Model yükleniyor…");try{const t=await Wf().loadPackageFromBuffer(a);sM.textContent=t?.projectName??e,Jc.disabled=!Ir,xn(Ir?"Hazır. Gözlükte 'VR'a Gir'e basın veya masaüstünde sahneye tıklayıp WASD ile gezin.":"Model hazır (bu cihazda VR yok — masaüstü önizleme: sahneye tıklayın, WASD + fare).")}catch(t){xn(t instanceof Error?t.message:"Paket açılamadı.")}}async function vl(){const a=await $0();jo.innerHTML="";const e=document.createElement("li");e.innerHTML='<span class="p-name">🏠 Örnek Daire (yerleşik)</span>';const t=document.createElement("button");t.textContent="Aç",t.addEventListener("click",async()=>{xn("Örnek indiriliyor…");const n=await fetch(nM);await yl(await n.arrayBuffer(),"Örnek Daire")}),e.appendChild(t),jo.appendChild(e);for(const n of a)jo.appendChild(oM(n))}function oM(a){const e=document.createElement("li"),t=document.createElement("span");t.className="p-name",t.textContent=`${a.name} · ${rM(a.sizeBytes)}`,e.appendChild(t);const n=document.createElement("button");n.textContent="Aç",n.addEventListener("click",async()=>{const s=await eM(a.id);if(s===null){xn("Proje verisi bulunamadı; silinip yeniden eklenmesi gerekiyor.");return}await yl(s,a.name)}),e.appendChild(n);const i=document.createElement("button");return i.textContent="Sil",i.className="danger",i.addEventListener("click",async()=>{await tM(a.id),await vl()}),e.appendChild(i),e}async function cM(a){if(!a.name.toLowerCase().endsWith(".glb")){xn("Lütfen .archvr.glb uzantılı paket dosyası seçin.");return}xn("Paket ekleniyor…");const e=await a.arrayBuffer(),t=a.name.replace(/\.archvr\.glb$|\.glb$/i,"");await Q0(t,e),await vl(),await yl(e,t)}async function lM(){"serviceWorker"in navigator&&!location.hostname.startsWith("localhost")&&navigator.serviceWorker.register("./sw.js"),await vl(),Go.addEventListener("change",()=>{const a=Go.files?.[0];a!==void 0&&cM(a),Go.value=""}),navigator.xr!==void 0&&(Ir=await navigator.xr.isSessionSupported("immersive-vr")),Ir||(Jc.textContent="VR gözlük bulunamadı"),xn("Bir proje seçin veya paket dosyası ekleyin."),Jc.addEventListener("click",async()=>{const a=Wf();if(!a.renderer.xr.isPresenting)try{const e=await navigator.xr.requestSession("immersive-vr",iM);await a.renderer.xr.setSession(e),Xh.classList.add("hidden"),e.addEventListener("end",()=>{Xh.classList.remove("hidden"),xn("VR oturumu kapandı. Tekrar girebilirsiniz.")})}catch{xn("VR oturumu başlatılamadı. Gözlüğün takılı olduğundan emin olun.")}})}lM();
