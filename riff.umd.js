(function(w,P){typeof exports=="object"&&typeof module<"u"?P(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],P):(w=typeof globalThis<"u"?globalThis:w||self,P(w.Riff={},w.React))})(this,function(w,P){"use strict";function yr(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const J=yr(P);var be={exports:{}},oe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie;function xr(){if(Ie)return oe;Ie=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,o){var s=null;if(o!==void 0&&(s=""+o),a.key!==void 0&&(s=""+a.key),"key"in a){o={};for(var l in a)l!=="key"&&(o[l]=a[l])}else o=a;return a=o.ref,{$$typeof:e,type:n,key:s,ref:a!==void 0?a:null,props:o}}return oe.Fragment=r,oe.jsx=t,oe.jsxs=t,oe}var ie={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me;function vr(){return Me||(Me=1,process.env.NODE_ENV!=="production"&&function(){function e(c){if(c==null)return null;if(typeof c=="function")return c.$$typeof===ne?null:c.displayName||c.name||null;if(typeof c=="string")return c;switch(c){case g:return"Fragment";case S:return"Profiler";case $:return"StrictMode";case Y:return"Suspense";case z:return"SuspenseList";case ze:return"Activity"}if(typeof c=="object")switch(typeof c.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),c.$$typeof){case T:return"Portal";case D:return(c.displayName||"Context")+".Provider";case F:return(c._context.displayName||"Context")+".Consumer";case W:var m=c.render;return c=c.displayName,c||(c=m.displayName||m.name||"",c=c!==""?"ForwardRef("+c+")":"ForwardRef"),c;case E:return m=c.displayName||null,m!==null?m:e(c.type)||"Memo";case fe:m=c._payload,c=c._init;try{return e(c(m))}catch{}}return null}function r(c){return""+c}function t(c){try{r(c);var m=!1}catch{m=!0}if(m){m=console;var C=m.error,N=typeof Symbol=="function"&&Symbol.toStringTag&&c[Symbol.toStringTag]||c.constructor.name||"Object";return C.call(m,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",N),r(c)}}function n(c){if(c===g)return"<>";if(typeof c=="object"&&c!==null&&c.$$typeof===fe)return"<...>";try{var m=e(c);return m?"<"+m+">":"<...>"}catch{return"<...>"}}function a(){var c=Z.A;return c===null?null:c.getOwner()}function o(){return Error("react-stack-top-frame")}function s(c){if(fr.call(c,"key")){var m=Object.getOwnPropertyDescriptor(c,"key").get;if(m&&m.isReactWarning)return!1}return c.key!==void 0}function l(c,m){function C(){br||(br=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",m))}C.isReactWarning=!0,Object.defineProperty(c,"key",{get:C,configurable:!0})}function d(){var c=e(this.type);return pr[c]||(pr[c]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),c=this.props.ref,c!==void 0?c:null}function f(c,m,C,N,K,X,Oe,De){return C=X.ref,c={$$typeof:R,type:c,key:m,props:X,_owner:K},(C!==void 0?C:null)!==null?Object.defineProperty(c,"ref",{enumerable:!1,get:d}):Object.defineProperty(c,"ref",{enumerable:!1,value:null}),c._store={},Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(c,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(c,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Oe}),Object.defineProperty(c,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:De}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c}function p(c,m,C,N,K,X,Oe,De){var I=m.children;if(I!==void 0)if(N)if(_n(I)){for(N=0;N<I.length;N++)x(I[N]);Object.freeze&&Object.freeze(I)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else x(I);if(fr.call(m,"key")){I=e(c);var ae=Object.keys(m).filter(function(jn){return jn!=="key"});N=0<ae.length?"{key: someKey, "+ae.join(": ..., ")+": ...}":"{key: someKey}",mr[I+N]||(ae=0<ae.length?"{"+ae.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,N,I,ae,I),mr[I+N]=!0)}if(I=null,C!==void 0&&(t(C),I=""+C),s(m)&&(t(m.key),I=""+m.key),"key"in m){C={};for(var Ne in m)Ne!=="key"&&(C[Ne]=m[Ne])}else C=m;return I&&l(C,typeof c=="function"?c.displayName||c.name||"Unknown":c),f(c,I,X,K,a(),C,Oe,De)}function x(c){typeof c=="object"&&c!==null&&c.$$typeof===R&&c._store&&(c._store.validated=1)}var B=P,R=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),D=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ze=Symbol.for("react.activity"),ne=Symbol.for("react.client.reference"),Z=B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fr=Object.prototype.hasOwnProperty,_n=Array.isArray,Pe=console.createTask?console.createTask:function(){return null};B={"react-stack-bottom-frame":function(c){return c()}};var br,pr={},hr=B["react-stack-bottom-frame"].bind(B,o)(),gr=Pe(n(o)),mr={};ie.Fragment=g,ie.jsx=function(c,m,C,N,K){var X=1e4>Z.recentlyCreatedOwnerStacks++;return p(c,m,C,!1,N,K,X?Error("react-stack-top-frame"):hr,X?Pe(n(c)):gr)},ie.jsxs=function(c,m,C,N,K){var X=1e4>Z.recentlyCreatedOwnerStacks++;return p(c,m,C,!0,N,K,X?Error("react-stack-top-frame"):hr,X?Pe(n(c)):gr)}}()),ie}var Le;function kr(){return Le||(Le=1,process.env.NODE_ENV==="production"?be.exports=xr():be.exports=vr()),be.exports}var u=kr();const i={primary:"#FF6200",primaryText:"#FFFFFF",secondary:"#0061FF",secondaryText:"#FFFFFF",accent:"#00D1B2",success:"#2ECC71",successBackground:"#EAF7F0",successBorder:"#2ECC71",successText:"#1B4332",error:"#E74C3C",errorBackground:"#FDEDEC",errorBorder:"#E74C3C",errorText:"#641E16",warning:"#F39C12",warningBackground:"#FFF4E5",warningBorder:"#F39C12",warningText:"#7D5102",info:"#3498DB",infoBackground:"#E8F4FD",infoBorder:"#3498DB",infoText:"#1D3557",text:"#111111",background:"#FAFAFA",surface:"#FFFFFF",border:"#E0E0E0",skeletonBase:"#e0e0e0",skeletonHighlight:"#f0f0f0",alert:{info:{background:"#E8F4FD",border:"#A0D2F2",text:"#0C5460"},success:{background:"#E6F4EA",border:"#A8D5B9",text:"#155724"},warning:{background:"#FFF4E5",border:"#FFD9A8",text:"#856404"},error:{background:"#FDECEA",border:"#F5A8A8",text:"#721C24"}},badge:{primary:{background:"#005FCC",text:"#FFFFFF"},secondary:{background:"#E0E0E0",text:"#333333"},success:{background:"#28a745",text:"#FFFFFF"},error:{background:"#dc3545",text:"#FFFFFF"},warning:{background:"#ffc107",text:"#111111"},info:{background:"#c82b9f",text:"#FFFFFF"}},button:{primary:{background:"#D7263D",hover:"#E96278",active:"#F191A1",disabledBg:"#B0B0B0",text:"#FFFFFF",disabledText:"#8A8A8A"},primaryBlack:{background:"#212529",hover:"#333333",active:"#444444",disabledBg:"#B0B0B0",text:"#FFFFFF",disabledText:"#8A8A8A"},secondary:{border:"#D7263D",hoverBorder:"#E96278",hoverBg:"#FCE3E8",activeBorder:"#F191A1",disabledBorder:"#B0B0B0",text:"#D7263D",disabledText:"#B0B0B0"},secondaryBlack:{border:"#212529",hoverBorder:"#333333",hoverBg:"#E6E6E6",activeBorder:"#444444",disabledBorder:"#B0B0B0",text:"#212529",disabledText:"#B0B0B0"},tertiary:{text:"#D7263D",hoverBg:"#FCE3E8",activeBg:"#F6BBC5",disabledText:"#B0B0B0"},tertiaryBlack:{text:"#212529",hoverBg:"#E6E6E6",activeBg:"#CCCCCC",disabledText:"#B0B0B0"},link:{text:"#D7263D",hover:"#D7263D",active:"#D7263D",disabled:"#8A8A8A"},linkBlack:{text:"#000000",hover:"#000000",active:"#000000",disabled:"#8A8A8A"}},white:"#FFFFFF",black:"#000000",transparent:"transparent","color-primary-crimson-red":"#D7263D","color-primary-deep-charcoal":"#212529","color-primary-grass":"#84C3A8","color-primary-sky":"#232DCE","color-primary-grove":"#C82B9F","color-primary-soft-grass":"#DEF6EC","color-primary-soft-sky":"#F0F4FC","color-primary-soft-grove":"#FEF3F9","color-primary-white":"#FFFFFF","color-extended-crimson-red-2":"#E96278","color-extended-crimson-red-3":"#F191A1","color-extended-crimson-red-4":"#F6BBC5","color-extended-crimson-red-5":"#FCE3E8","color-extended-deeper-grass":"#A9D4C1","color-extended-deep-grass":"#B2D6C7","color-extended-deeper-sky":"#97AAD8","color-extended-deep-sky":"#ACBCE2","color-neutral-black":"#000000","color-neutral-5":"#333333","color-neutral-4":"#545454","color-neutral-3":"#8A8A8A","color-neutral-2":"#B0B0B0","color-neutral-1":"#E6E6E6"},h={fonts:{base:"'Fira Sans', sans-serif"},sizes:{display:"32px",heading:"24px",subheading:"20px",body:"18px",small:"16px",caption:"14px"},weights:{regular:400,medium:500,bold:700},lineHeights:{tight:1.2,normal:1.5,relaxed:1.75},spacing:{400:"16px"}},b={0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"24px",6:"32px",7:"40px",8:"48px",9:"64px",10:"80px"},Q={none:"0px",sm:"4px",md:"8px",lg:"16px",full:"9999px"},He={none:"none",sm:"0 1px 2px rgba(0,0,0,0.05)",md:"0 2px 4px rgba(0,0,0,0.08)",lg:"0 4px 8px rgba(0,0,0,0.12)"},We={none:"0",thin:"1px",medium:"2px",thick:"4px"},Se={size0:"0px",size1:"4px",size2:"8px",size3:"12px",size4:"16px",size5:"20px",size6:"24px",size7:"32px",size8:"40px",size9:"48px",size10:"64px",size11:"80px",size12:"96px",size13:"128px",size14:"160px",size15:"192px",size16:"256px",size17:"300px",size18:"320px",size19:"384px",size20:"448px",size21:"512px",size22:"1024px",size23:"2048",size24:"3072px",sizeFull:"100%",sizeAuto:"auto",sizeMin:"min-content",sizeMax:"max-content"};function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ee.apply(null,arguments)}function $r(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function wr(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Sr=function(){function e(t){var n=this;this._insertTag=function(a){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,o),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(wr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=$r(a);try{o.insertRule(n,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},e}(),O="-ms-",pe="-moz-",v="-webkit-",Ye="comm",Fe="rule",Ce="decl",Er="@import",Ue="@keyframes",Fr="@layer",Cr=Math.abs,he=String.fromCharCode,Ar=Object.assign;function Br(e,r){return _(e,0)^45?(((r<<2^_(e,0))<<2^_(e,1))<<2^_(e,2))<<2^_(e,3):0}function qe(e){return e.trim()}function Tr(e,r){return(e=r.exec(e))?e[0]:e}function k(e,r,t){return e.replace(r,t)}function Ae(e,r){return e.indexOf(r)}function _(e,r){return e.charCodeAt(r)|0}function se(e,r,t){return e.slice(r,t)}function q(e){return e.length}function Be(e){return e.length}function ge(e,r){return r.push(e),e}function _r(e,r){return e.map(r).join("")}var me=1,ee=1,Ge=0,M=0,A=0,re="";function ye(e,r,t,n,a,o,s){return{value:e,root:r,parent:t,type:n,props:a,children:o,line:me,column:ee,length:s,return:""}}function ce(e,r){return Ar(ye("",null,null,"",null,null,0),e,{length:-e.length},r)}function jr(){return A}function Rr(){return A=M>0?_(re,--M):0,ee--,A===10&&(ee=1,me--),A}function L(){return A=M<Ge?_(re,M++):0,ee++,A===10&&(ee=1,me++),A}function G(){return _(re,M)}function xe(){return M}function le(e,r){return se(re,e,r)}function de(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ve(e){return me=ee=1,Ge=q(re=e),M=0,[]}function Xe(e){return re="",e}function ve(e){return qe(le(M-1,Te(e===91?e+2:e===40?e+1:e)))}function zr(e){for(;(A=G())&&A<33;)L();return de(e)>2||de(A)>3?"":" "}function Pr(e,r){for(;--r&&L()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return le(e,xe()+(r<6&&G()==32&&L()==32))}function Te(e){for(;L();)switch(A){case e:return M;case 34:case 39:e!==34&&e!==39&&Te(A);break;case 40:e===41&&Te(e);break;case 92:L();break}return M}function Or(e,r){for(;L()&&e+A!==57;)if(e+A===84&&G()===47)break;return"/*"+le(r,M-1)+"*"+he(e===47?e:L())}function Dr(e){for(;!de(G());)L();return le(e,M)}function Nr(e){return Xe(ke("",null,null,null,[""],e=Ve(e),0,[0],e))}function ke(e,r,t,n,a,o,s,l,d){for(var f=0,p=0,x=s,B=0,R=0,T=0,g=1,$=1,S=1,F=0,D="",W=a,Y=o,z=n,E=D;$;)switch(T=F,F=L()){case 40:if(T!=108&&_(E,x-1)==58){Ae(E+=k(ve(F),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:E+=ve(F);break;case 9:case 10:case 13:case 32:E+=zr(T);break;case 92:E+=Pr(xe()-1,7);continue;case 47:switch(G()){case 42:case 47:ge(Ir(Or(L(),xe()),r,t),d);break;default:E+="/"}break;case 123*g:l[f++]=q(E)*S;case 125*g:case 59:case 0:switch(F){case 0:case 125:$=0;case 59+p:S==-1&&(E=k(E,/\f/g,"")),R>0&&q(E)-x&&ge(R>32?Ze(E+";",n,t,x-1):Ze(k(E," ","")+";",n,t,x-2),d);break;case 59:E+=";";default:if(ge(z=Je(E,r,t,f,p,a,l,D,W=[],Y=[],x),o),F===123)if(p===0)ke(E,r,z,z,W,o,x,l,Y);else switch(B===99&&_(E,3)===110?100:B){case 100:case 108:case 109:case 115:ke(e,z,z,n&&ge(Je(e,z,z,0,0,a,l,D,a,W=[],x),Y),a,Y,x,l,n?W:Y);break;default:ke(E,z,z,z,[""],Y,0,l,Y)}}f=p=R=0,g=S=1,D=E="",x=s;break;case 58:x=1+q(E),R=T;default:if(g<1){if(F==123)--g;else if(F==125&&g++==0&&Rr()==125)continue}switch(E+=he(F),F*g){case 38:S=p>0?1:(E+="\f",-1);break;case 44:l[f++]=(q(E)-1)*S,S=1;break;case 64:G()===45&&(E+=ve(L())),B=G(),p=x=q(D=E+=Dr(xe())),F++;break;case 45:T===45&&q(E)==2&&(g=0)}}return o}function Je(e,r,t,n,a,o,s,l,d,f,p){for(var x=a-1,B=a===0?o:[""],R=Be(B),T=0,g=0,$=0;T<n;++T)for(var S=0,F=se(e,x+1,x=Cr(g=s[T])),D=e;S<R;++S)(D=qe(g>0?B[S]+" "+F:k(F,/&\f/g,B[S])))&&(d[$++]=D);return ye(e,r,t,a===0?Fe:l,d,f,p)}function Ir(e,r,t){return ye(e,r,t,Ye,he(jr()),se(e,2,-2),0)}function Ze(e,r,t,n){return ye(e,r,t,Ce,se(e,0,n),se(e,n+1,-1),n)}function te(e,r){for(var t="",n=Be(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Mr(e,r,t,n){switch(e.type){case Fr:if(e.children.length)break;case Er:case Ce:return e.return=e.return||e.value;case Ye:return"";case Ue:return e.return=e.value+"{"+te(e.children,n)+"}";case Fe:e.value=e.props.join(",")}return q(t=te(e.children,n))?e.return=e.value+"{"+t+"}":""}function Lr(e){var r=Be(e);return function(t,n,a,o){for(var s="",l=0;l<r;l++)s+=e[l](t,n,a,o)||"";return s}}function Hr(e){return function(r){r.root||(r=r.return)&&e(r)}}function Ke(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Wr=function(r,t,n){for(var a=0,o=0;a=o,o=G(),a===38&&o===12&&(t[n]=1),!de(o);)L();return le(r,M)},Yr=function(r,t){var n=-1,a=44;do switch(de(a)){case 0:a===38&&G()===12&&(t[n]=1),r[n]+=Wr(M-1,t,n);break;case 2:r[n]+=ve(a);break;case 4:if(a===44){r[++n]=G()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=he(a)}while(a=L());return r},Ur=function(r,t){return Xe(Yr(Ve(r),t))},Qe=new WeakMap,qr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!Qe.get(n))&&!a){Qe.set(r,!0);for(var o=[],s=Ur(t,o),l=n.props,d=0,f=0;d<s.length;d++)for(var p=0;p<l.length;p++,f++)r.props[f]=o[d]?s[d].replace(/&\f/g,l[p]):l[p]+" "+s[d]}}},Gr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function er(e,r){switch(Br(e,r)){case 5103:return v+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return v+e+pe+e+O+e+e;case 6828:case 4268:return v+e+O+e+e;case 6165:return v+e+O+"flex-"+e+e;case 5187:return v+e+k(e,/(\w+).+(:[^]+)/,v+"box-$1$2"+O+"flex-$1$2")+e;case 5443:return v+e+O+"flex-item-"+k(e,/flex-|-self/,"")+e;case 4675:return v+e+O+"flex-line-pack"+k(e,/align-content|flex-|-self/,"")+e;case 5548:return v+e+O+k(e,"shrink","negative")+e;case 5292:return v+e+O+k(e,"basis","preferred-size")+e;case 6060:return v+"box-"+k(e,"-grow","")+v+e+O+k(e,"grow","positive")+e;case 4554:return v+k(e,/([^-])(transform)/g,"$1"+v+"$2")+e;case 6187:return k(k(k(e,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),e,"")+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+e+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,v+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(q(e)-1-r>6)switch(_(e,r+1)){case 109:if(_(e,r+4)!==45)break;case 102:return k(e,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+pe+(_(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Ae(e,"stretch")?er(k(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(_(e,r+1)!==115)break;case 6444:switch(_(e,q(e)-3-(~Ae(e,"!important")&&10))){case 107:return k(e,":",":"+v)+e;case 101:return k(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+v+(_(e,14)===45?"inline-":"")+"box$3$1"+v+"$2$3$1"+O+"$2box$3")+e}break;case 5936:switch(_(e,r+11)){case 114:return v+e+O+k(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return v+e+O+k(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return v+e+O+k(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return v+e+O+e+e}return e}var Vr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case Ce:r.return=er(r.value,r.length);break;case Ue:return te([ce(r,{value:k(r.value,"@","@"+v)})],a);case Fe:if(r.length)return _r(r.props,function(o){switch(Tr(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return te([ce(r,{props:[k(o,/:(read-\w+)/,":"+pe+"$1")]})],a);case"::placeholder":return te([ce(r,{props:[k(o,/:(plac\w+)/,":"+v+"input-$1")]}),ce(r,{props:[k(o,/:(plac\w+)/,":"+pe+"$1")]}),ce(r,{props:[k(o,/:(plac\w+)/,O+"input-$1")]})],a)}return""})}},Xr=[Vr],Jr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(g){var $=g.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var a=r.stylisPlugins||Xr,o={},s,l=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(g){for(var $=g.getAttribute("data-emotion").split(" "),S=1;S<$.length;S++)o[$[S]]=!0;l.push(g)});var d,f=[qr,Gr];{var p,x=[Mr,Hr(function(g){p.insert(g)})],B=Lr(f.concat(a,x)),R=function($){return te(Nr($),B)};d=function($,S,F,D){p=F,R($?$+"{"+S.styles+"}":S.styles),D&&(T.inserted[S.name]=!0)}}var T={key:t,sheet:new Sr({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:d};return T.sheet.hydrate(l),T},Zr=!0;function Kr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):a&&(n+=a+" ")}),n}var rr=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||Zr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},Qr=function(r,t,n){rr(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var o=t;do r.insert(t===o?"."+a:"",o,r.sheet,!0),o=o.next;while(o!==void 0)}};function et(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var rt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tt=/[A-Z]|^ms/g,nt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,tr=function(r){return r.charCodeAt(1)===45},nr=function(r){return r!=null&&typeof r!="boolean"},_e=Ke(function(e){return tr(e)?e:e.replace(tt,"-$&").toLowerCase()}),ar=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(nt,function(n,a,o){return V={name:a,styles:o,next:V},a})}return rt[r]!==1&&!tr(r)&&typeof t=="number"&&t!==0?t+"px":t};function ue(e,r,t){if(t==null)return"";var n=t;if(n.__emotion_styles!==void 0)return n;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return V={name:a.name,styles:a.styles,next:V},a.name;var o=t;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)V={name:s.name,styles:s.styles,next:V},s=s.next;var l=o.styles+";";return l}return at(e,r,t)}case"function":{if(e!==void 0){var d=V,f=t(e);return V=d,ue(e,r,f)}break}}var p=t;if(r==null)return p;var x=r[p];return x!==void 0?x:p}function at(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=ue(e,r,t[a])+";";else for(var o in t){var s=t[o];if(typeof s!="object"){var l=s;r!=null&&r[l]!==void 0?n+=o+"{"+r[l]+"}":nr(l)&&(n+=_e(o)+":"+ar(o,l)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var d=0;d<s.length;d++)nr(s[d])&&(n+=_e(o)+":"+ar(o,s[d])+";");else{var f=ue(e,r,s);switch(o){case"animation":case"animationName":{n+=_e(o)+":"+f+";";break}default:n+=o+"{"+f+"}"}}}return n}var or=/label:\s*([^\s;{]+)\s*(;|$)/g,V;function ot(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";V=void 0;var o=e[0];if(o==null||o.raw===void 0)n=!1,a+=ue(t,r,o);else{var s=o;a+=s[0]}for(var l=1;l<e.length;l++)if(a+=ue(t,r,e[l]),n){var d=o;a+=d[l]}or.lastIndex=0;for(var f="",p;(p=or.exec(a))!==null;)f+="-"+p[1];var x=et(a)+f;return{name:x,styles:a,next:V}}var it=function(r){return r()},st=J.useInsertionEffect?J.useInsertionEffect:!1,ct=st||it,ir=J.createContext(typeof HTMLElement<"u"?Jr({key:"css"}):null);ir.Provider;var lt=function(r){return P.forwardRef(function(t,n){var a=P.useContext(ir);return r(t,a,n)})},dt=J.createContext({}),ut=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ft=Ke(function(e){return ut.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),bt=ft,pt=function(r){return r!=="theme"},sr=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?bt:pt},cr=function(r,t,n){var a;if(t){var o=t.shouldForwardProp;a=r.__emotion_forwardProp&&o?function(s){return r.__emotion_forwardProp(s)&&o(s)}:o}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},ht=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return rr(t,n,a),ct(function(){return Qr(t,n,a)}),null},gt=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,o,s;t!==void 0&&(o=t.label,s=t.target);var l=cr(r,t,n),d=l||sr(a),f=!d("as");return function(){var p=arguments,x=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(o!==void 0&&x.push("label:"+o+";"),p[0]==null||p[0].raw===void 0)x.push.apply(x,p);else{var B=p[0];x.push(B[0]);for(var R=p.length,T=1;T<R;T++)x.push(p[T],B[T])}var g=lt(function($,S,F){var D=f&&$.as||a,W="",Y=[],z=$;if($.theme==null){z={};for(var E in $)z[E]=$[E];z.theme=J.useContext(dt)}typeof $.className=="string"?W=Kr(S.registered,Y,$.className):$.className!=null&&(W=$.className+" ");var fe=ot(x.concat(Y),S.registered,z);W+=S.key+"-"+fe.name,s!==void 0&&(W+=" "+s);var ze=f&&l===void 0?sr(D):d,ne={};for(var Z in $)f&&Z==="as"||ze(Z)&&(ne[Z]=$[Z]);return ne.className=W,F&&(ne.ref=F),J.createElement(J.Fragment,null,J.createElement(ht,{cache:S,serialized:fe,isStringTag:typeof D=="string"}),J.createElement(D,ne))});return g.displayName=o!==void 0?o:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",g.defaultProps=r.defaultProps,g.__emotion_real=g,g.__emotion_base=a,g.__emotion_styles=x,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+s}}),g.withComponent=function($,S){var F=e($,Ee({},t,S,{shouldForwardProp:cr(g,S,!0)}));return F.apply(void 0,x)},g}},mt=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],y=gt.bind(null);mt.forEach(function(e){y[e]=y(e)});const yt=y("span")`
  font-family: ${h.fonts.base};
  font-size: ${({fontSize:e="body"})=>h.sizes[e]};
  font-weight: ${({fontWeight:e="regular"})=>h.weights[e]};
  line-height: ${({lineHeight:e="normal"})=>h.lineHeights[e]};
  color: ${({color:e="color-neutral-black"})=>i[e]??e};
  margin-bottom: ${({marginBottom:e="0"})=>b[e]??e};
`,H=({as:e="span",fontSize:r="body",fontWeight:t="regular",lineHeight:n="normal",color:a="color-neutral-black",marginBottom:o=0,children:s,...l})=>u.jsx(yt,{as:e,fontSize:r,fontWeight:t,lineHeight:n,color:a,marginBottom:o,...l,children:s}),xt=y("div")`
  background-color: ${({backgroundColor:e="transparent"})=>i[e]??e};

  border-radius: ${({borderRadius:e="none"})=>Q[e]??e};

  border-width: ${({borderWidth:e="0"})=>We[e]??e};
  border-style: solid;
  border-color: ${({borderColor:e="transparent"})=>i[e]??e};

  padding: ${({padding:e="0"})=>b[e]??e};

  margin: ${({margin:e="0"})=>b[e]??e};

  box-shadow: ${({boxShadow:e})=>e?He[e]??e:"none"};

  width: ${({width:e})=>e?Se[e]:"auto"};
  height: ${({height:e})=>e?Se[e]:"auto"};
`,j=({as:e="div",backgroundColor:r="transparent",borderRadius:t="none",padding:n=0,margin:a=0,boxShadow:o,children:s,...l})=>u.jsx(xt,{as:e,backgroundColor:r,borderRadius:t,padding:n,margin:a,boxShadow:o,...l,children:s}),vt=y("div")`
  display: flex;
  flex-direction: ${({direction:e})=>e==="vertical"?"column":"row"};
  gap: ${({gap:e})=>b[e??0]};
`,kt=({direction:e="vertical",gap:r=4,children:t,role:n,"aria-label":a,"aria-describedby":o,...s})=>u.jsx(vt,{direction:e,gap:r,role:n,"aria-label":a,"aria-describedby":o,...s,children:t}),$t=y("div")`
  display: flex;
  justify-content: ${({justify:e})=>e??"flex-start"};
  align-items: ${({align:e})=>e??"stretch"};
  flex-direction: ${({direction:e})=>e??"row"};
  gap: ${({gap:e=0})=>b[e]};
  flex-grow: ${({grow:e=0})=>e};
  flex-shrink: ${({shrink:e=1})=>e};
  flex-basis: ${({basis:e})=>e?Se[e]:"auto"};
  margin: ${({margin:e})=>e!==void 0?b[e]:"0"};
  margin-top: ${({marginTop:e})=>e!==void 0?b[e]:void 0};
  margin-bottom: ${({marginBottom:e})=>e!==void 0?b[e]:void 0};
  margin-left: ${({marginLeft:e})=>e!==void 0?b[e]:void 0};
  margin-right: ${({marginRight:e})=>e!==void 0?b[e]:void 0};
  padding: ${({padding:e})=>e?b[e]:void 0};
  padding-top: ${({paddingTop:e})=>e?b[e]:void 0};
  padding-bottom: ${({paddingBottom:e})=>e?b[e]:void 0};
  padding-left: ${({paddingLeft:e})=>e?b[e]:void 0};
  padding-right: ${({paddingRight:e})=>e?b[e]:void 0};
`,wt=({justify:e="flex-start",align:r="stretch",direction:t="row",gap:n=4,children:a,role:o,"aria-label":s,"aria-describedby":l,...d})=>u.jsx($t,{justify:e,align:r,direction:t,gap:n,role:o,"aria-label":s,"aria-describedby":l,...d,children:a}),U={1:{fontSize:"display",fontWeight:"bold",lineHeight:"tight",fontFamily:"base",color:"color-primary-crimson-red",marginBottom:5},2:{fontSize:"heading",fontWeight:"bold",lineHeight:"normal",fontFamily:"base",color:"color-primary-crimson-red",marginBottom:4},3:{fontSize:"subheading",fontWeight:"bold",lineHeight:"normal",fontFamily:"base",color:"color-primary-crimson-red",marginBottom:4},4:{fontSize:"body",fontWeight:"bold",lineHeight:"normal",fontFamily:"base",color:"text",marginBottom:3},5:{fontSize:"small",fontWeight:"bold",lineHeight:"relaxed",fontFamily:"base",color:"text",marginBottom:2},6:{fontSize:"caption",fontWeight:"bold",lineHeight:"relaxed",fontFamily:"base",color:"text",marginBottom:1}},St=y(H)`
  font-size: ${({level:e})=>U[e].fontSize};
  font-weight: ${({level:e})=>U[e].fontWeight};
  line-height: ${({level:e})=>U[e].lineHeight};
  // font-family: ${({level:e})=>U[e].fontFamily};
  color: ${({level:e})=>U[e].color};
  margin-bottom: ${({level:e})=>U[e].marginBottom};
`,Et=({as:e,level:r=1,children:t,role:n,"aria-label":a,"aria-describedby":o})=>{const s=e??`h${r}`;return u.jsx(St,{as:s,level:r,fontWeight:U[r].fontWeight,lineHeight:U[r].lineHeight,fontSize:U[r].fontSize,color:U[r].color,marginBottom:U[r].marginBottom,role:n??"heading","aria-label":a,"aria-describedby":o,children:t})},Ft=y(H)`
  font-size: ${h.sizes.body};
  font-weight: ${h.weights.regular};
  line-height: ${h.lineHeights.normal};
  font-family: ${h.fonts.base};
  color: ${i.black};
  margin-bottom: ${h.spacing[400]};
`,Ct=({children:e,role:r,"aria-label":t,"aria-describedby":n})=>u.jsx(Ft,{as:"p",role:r??"paragraph","aria-label":t,"aria-describedby":n,children:e}),At=y(H)`
  font-size: ${h.sizes.body};
  font-weight: ${h.weights.regular};
  line-height: ${h.lineHeights.normal};
  // font-family: ${h.fonts.base};
  color: ${i.text};
  margin-bottom: ${h.spacing[400]};
  padding-left: ${b[5]};
`,Bt=({type:e="unordered",children:r,role:t,"aria-label":n,"aria-describedby":a})=>{const o=e==="ordered"?"ol":"ul";return u.jsx(At,{as:o,role:t??"list","aria-label":n,"aria-describedby":a,children:r})},Tt=y(j)`
  background-color: ${({variant:e})=>i.alert[e].background};
  border: ${We.thin} solid ${({variant:e})=>i.alert[e].border};
  border-radius: ${Q.md};
  padding: ${b[4]} ${b[5]};
  margin: ${b[4]} 0;
`,_t=({children:e,variant:r="info",role:t,"aria-label":n,"aria-describedby":a})=>u.jsx(Tt,{variant:r,role:t??(r==="error"?"alert":"status"),"aria-label":n,"aria-describedby":a,children:u.jsx(H,{as:"div",fontSize:"body",style:{color:i.alert[r].text},children:e})}),jt=y(j)`
  display: inline-block;
  background-color: ${({tone:e})=>i.badge[e].background};
  border-radius: ${Q.md};
  padding: ${b[0]} ${b[1]};
`,Rt=({children:e,tone:r="primary",role:t,"aria-label":n,"aria-describedby":a,"aria-hidden":o})=>u.jsx(jt,{as:"span",tone:r,role:t,"aria-label":n,"aria-describedby":a,"aria-hidden":o,children:u.jsx(H,{as:"span",fontSize:"caption",fontWeight:"regular",style:{color:i.badge[r].text},children:e})}),zt=y(j)`
  background-color: ${i.background};
  box-shadow: ${({elevation:e})=>He[e]};
  border-radius: ${({borderRadius:e})=>Q[e]};
  padding: ${({padding:e})=>b[e]};
  display: flex;
  flex-direction: column;
  gap: ${b[3]}; 
`,Pt=y(H)`
  font-size: ${b[5]}; 
  font-weight: 700;
`,Ot=y(j)`
  display: flex;
  gap: ${b[2]};
`,Dt=({title:e,children:r,actions:t,elevation:n="md",padding:a=4,borderRadius:o="md",role:s,"aria-label":l,"aria-describedby":d,"aria-hidden":f})=>u.jsxs(zt,{elevation:n,padding:a,borderRadius:o,role:s,"aria-label":l,"aria-describedby":d,"aria-hidden":f,children:[e&&u.jsx(Pt,{as:"h3",children:e}),u.jsx(j,{as:"div",children:r}),t&&u.jsx(Ot,{children:t})]}),je={sm:"32px",md:"40px",lg:"64px",xl:"96px"},Nt=y(j)`
  background-color: ${i["color-neutral-1"]}; // fallback background
  border-radius: 50%;
  width: ${({size:e})=>je[e]};
  height: ${({size:e})=>je[e]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({size:e})=>`calc(${je[e]} / 2)`};
  color: ${i["color-neutral-4"]};
`,It=y("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Mt=({size:e="md",src:r,alt:t,initials:n,role:a,"aria-label":o,"aria-describedby":s})=>u.jsx(Nt,{as:"div",size:e,role:a??"img","aria-label":o??(t||"Avatar"),"aria-describedby":s,children:r?u.jsx(It,{src:r,alt:t||"Avatar"}):n}),Lt=y(j)`
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  border-radius: ${({$borderRadius:e})=>Q[e]};
  background-color: ${i.skeletonBase};
  animation: skeleton-loading 1.2s infinite ease-in-out;

  @keyframes skeleton-loading {
    0% {
      background-color: ${i.skeletonBase};
    }
    50% {
      background-color: ${i.skeletonHighlight};
    }
    100% {
      background-color: ${i.skeletonBase};
    }
  }
`,Ht=({width:e="100%",height:r="16px",variant:t="rect",role:n,"aria-label":a,"aria-describedby":o})=>{let s=e,l=r,d="sm";return t==="circle"?(s=e==="100%"?"40px":e,l=s,d="full"):t==="text"&&(l="1em",d="sm"),u.jsx(Lt,{backgroundColor:"skeletonBase",$width:s,$height:l,$borderRadius:d,role:n??"presentation","aria-hidden":"true","aria-label":a,"aria-describedby":o})};/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yt=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,t,n)=>n?n.toUpperCase():t.toLowerCase()),lr=e=>{const r=Yt(e);return r.charAt(0).toUpperCase()+r.slice(1)},dr=(...e)=>e.filter((r,t,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===t).join(" ").trim(),Ut=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=P.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:s,...l},d)=>P.createElement("svg",{ref:d,...qt,width:r,height:r,stroke:e,strokeWidth:n?Number(t)*24/Number(r):t,className:dr("lucide",a),...!o&&!Ut(l)&&{"aria-hidden":"true"},...l},[...s.map(([f,p])=>P.createElement(f,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=(e,r)=>{const t=P.forwardRef(({className:n,...a},o)=>P.createElement(Gt,{ref:o,iconNode:r,className:dr(`lucide-${Wt(lr(e))}`,`lucide-${e}`,n),...a}));return t.displayName=lr(e),t};/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=$e("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=$e("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=$e("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=$e("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),Kt=y(j)`
  display: flex;
  flex-direction: column;
  gap: ${({gap:e})=>b[e]};
`,Qt=y("button")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.body};
  font-weight: ${h.weights.medium};
  color: ${i.text};
  background-color: transparent;
  border: none;
  padding: ${b[3]} 0;
  cursor: pointer;
  border-bottom: 1px solid ${i.border};
  transition: color 0.2s ease;

  &:hover {
    color: ${i["color-primary-crimson-red"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,en=y(j)`
  padding: ${b[3]} 0;
  color: ${i.text};
  font-size: ${h.sizes.body};
  line-height: ${h.lineHeights.normal};
  /* Optional: add subtle animation */
  transition: all 0.2s ease-in-out;
`,rn=({items:e,defaultOpenId:r,gap:t=3,ariaLabel:n,ariaDescribedBy:a})=>{const[o,s]=P.useState(r??""),l=d=>{s(f=>f===d?"":d)};return u.jsx(Kt,{gap:t,role:"region","aria-label":n,"aria-describedby":a,children:e.map(d=>{const f=o===d.id;return u.jsxs(P.Fragment,{children:[u.jsxs(Qt,{type:"button",expanded:f,onClick:()=>l(d.id),"aria-expanded":f,"aria-controls":`accordion-panel-${d.id}`,id:`accordion-header-${d.id}`,"aria-label":`Toggle ${d.title}`,children:[u.jsx(H,{as:"span",children:d.title}),f?u.jsx(Jt,{size:20,color:i["color-primary-crimson-red"]}):u.jsx(Xt,{size:20,color:i["color-primary-crimson-red"]})]}),f&&u.jsx(en,{role:"region",id:`accordion-panel-${d.id}`,"aria-labelledby":`accordion-header-${d.id}`,children:d.content})]},d.id)})})},tn={info:{background:"infoBackground",border:"infoBorder",text:"infoText"},success:{background:"successBackground",border:"successBorder",text:"successText"},warning:{background:"warningBackground",border:"warningBorder",text:"warningText"},error:{background:"errorBackground",border:"errorBorder",text:"errorText"}},nn=({variant:e="info",title:r,children:t})=>{const n=tn[e];return u.jsxs(j,{as:"section",role:"region","aria-label":`${e} callout`,backgroundColor:n.background,borderWidth:"thin",borderColor:n.border,borderRadius:"md",padding:5,margin:5,children:[u.jsx(H,{as:"h3",fontSize:"heading",fontWeight:"bold",color:n.text,marginBottom:3,children:r}),u.jsx(H,{as:"p",fontSize:"body",color:n.text,children:t})]})},an=y("a")`
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;

  color: ${({variant:e})=>e==="internalRed"||e==="externalRed"?i["color-primary-crimson-red"]:i.black};

  &:hover,
  &:focus {
    color: ${i.black};
  }

  svg {
    width: 1em;
    height: 1em;
  }
`,on=({href:e,variant:r="internal",children:t,role:n,"aria-label":a,"aria-describedby":o,...s})=>{const l=r==="external"||r==="externalRed";return u.jsxs(an,{href:e,target:l?"_blank":void 0,rel:l?"noopener noreferrer":void 0,role:n??"anchor","aria-label":a,"aria-describedby":o,variant:r,...s,children:[t,l?u.jsx(Zt,{}):u.jsx(Vt,{})]})},sn=y(j)`
  display: flex;
  gap: ${({gap:e})=>b[e]};
  margin-bottom: ${({marginBottom:e})=>b[e]};
`,cn=y("button")`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.body};
  font-weight: ${h.weights.medium};
  color: ${({selected:e})=>e?i["color-primary-crimson-red"]:i["color-neutral-4"]};
  border-bottom: ${({selected:e})=>e?`4px solid ${i["color-primary-crimson-red"]}`:"4px solid transparent"};
  transition: color 0.2s ease, border-bottom 0.2s ease;

  &:hover:not(:disabled) {
    color: ${i["color-primary-crimson-red"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,ln=({tabs:e,defaultActiveId:r,gap:t=2,marginBottom:n=4})=>{const[a,o]=P.useState(r??e[0].id),s=e.find(l=>l.id===a);return u.jsxs(j,{as:"section",role:"region","aria-label":"Tabs",children:[u.jsx(sn,{role:"tablist",gap:t,marginBottom:n,children:e.map(l=>u.jsx(cn,{type:"button",onClick:()=>o(l.id),selected:l.id===a,role:"tab","aria-selected":l.id===a,"aria-controls":`tabpanel-${l.id}`,id:`tab-${l.id}`,children:l.label},l.id))}),u.jsx(j,{role:"tabpanel",id:`tabpanel-${a}`,"aria-labelledby":`tab-${a}`,children:s==null?void 0:s.content})]})},ur={small:{padding:`${b[3]} ${b[3]}`,fontSize:h.sizes.caption},large:{padding:`${b[3]} ${b[4]}`,fontSize:h.sizes.body}},dn=y("button")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${h.fonts.base};
  font-weight: ${h.weights.medium};
  line-height: 1;
  text-align: center;
  cursor: pointer;
  border-radius: ${Q.md};
  transition: all 0.2s ease;
  padding: ${({size:e="small"})=>ur[e].padding};
  font-size: ${({size:e="small"})=>ur[e].fontSize};

  ${({variant:e})=>e==="primary"&&`
    background-color: ${i.button.primary.background};
    color: ${i.button.primary.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${i.button.primary.hover};
    }

    &:active:not(:disabled) {
      background-color: ${i.button.primary.active};
    }

    &:disabled {
      background-color: ${i.button.primary.disabledBg};
      color: ${i.button.primary.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({variant:e})=>e==="primaryBlack"&&`
    background-color: ${i.button.primaryBlack.background};
    color: ${i.button.primaryBlack.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${i.button.primaryBlack.hover};
    }

    &:active:not(:disabled) {
      background-color: ${i.button.primaryBlack.active};
    }

    &:disabled {
      background-color: ${i.button.primaryBlack.disabledBg};
      color: ${i.button.primaryBlack.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({variant:e})=>e==="secondary"&&`
    background-color: transparent;
    color: ${i.button.secondary.text};
    border: 2px solid ${i.button.secondary.border};

    &:hover:not(:disabled) {
      border-color: ${i.button.secondary.hoverBorder};
      background-color: ${i.button.secondary.hoverBg};
    }

    &:active:not(:disabled) {
      border-color: ${i.button.secondary.activeBorder};
    }

    &:disabled {
      border-color: ${i.button.secondary.disabledBorder};
      color: ${i.button.secondary.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({variant:e})=>e==="secondaryBlack"&&`
    background-color: transparent;
    color: ${i.button.secondaryBlack.text};
    border: 2px solid ${i.button.secondaryBlack.border};

    &:hover:not(:disabled) {
      border-color: ${i.button.secondaryBlack.hoverBorder};
      background-color: ${i.button.secondaryBlack.hoverBg};
    }

    &:active:not(:disabled) {
      border-color: ${i.button.secondaryBlack.activeBorder};
    }

    &:disabled {
      border-color: ${i.button.secondaryBlack.disabledBorder};
      color: ${i.button.secondaryBlack.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({variant:e})=>e==="tertiary"&&`
    background-color: transparent;
    color: ${i.button.tertiary.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${i.button.tertiary.hoverBg};
    }

    &:active:not(:disabled) {
      background-color: ${i.button.tertiary.activeBg};
    }

    &:disabled {
      color: ${i.button.tertiary.disabledText};
      background-color: transparent;
      cursor: not-allowed;
    }
  `}

  ${({variant:e})=>e==="tertiaryBlack"&&`
    background-color: transparent;
    color: ${i.button.tertiaryBlack.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${i.button.tertiaryBlack.hoverBg};
    }

    &:active:not(:disabled) {
      background-color: ${i.button.tertiaryBlack.activeBg};
    }

    &:disabled {
      color: ${i.button.tertiaryBlack.disabledText};
      background-color: transparent;
      cursor: not-allowed;
    }
  `}

    ${({variant:e})=>{var r,t,n,a;return e==="link"&&`
    background-color: transparent;
    color: ${((r=i.button.link)==null?void 0:r.text)??i["color-primary-crimson-red"]};
    border: none;
    padding: 0;
    text-decoration: underline;
    font-weight: ${h.weights.medium};
    cursor: pointer;

    &:hover:not(:disabled) {
      color: ${((t=i.button.link)==null?void 0:t.hover)??i["color-primary-crimson-red"]};
      text-decoration: underline;
    }

    &:active:not(:disabled) {
      color: ${((n=i.button.link)==null?void 0:n.active)??i["color-primary-crimson-red"]};
    }

    &:disabled {
      color: ${((a=i.button.link)==null?void 0:a.disabled)??i["color-neutral-3"]};
      text-decoration: none;
      cursor: not-allowed;
    }
  `}}

    ${({variant:e})=>{var r,t,n,a;return e==="linkBlack"&&`
    background-color: transparent;
    color: ${((r=i.button.linkBlack)==null?void 0:r.text)??i["color-neutral-black"]};
    border: none;
    padding: 0;
    text-decoration: underline;
    font-weight: ${h.weights.medium};
    cursor: pointer;

    &:hover:not(:disabled) {
      color: ${((t=i.button.linkBlack)==null?void 0:t.hover)??i["color-neutral-black"]};
      text-decoration: underline;
    }

    &:active:not(:disabled) {
      color: ${((n=i.button.linkBlack)==null?void 0:n.active)??i["color-neutral-black"]};
    }

    &:disabled {
      color: ${((a=i.button.linkBlack)==null?void 0:a.disabled)??i["color-neutral-3"]};
      text-decoration: none;
      cursor: not-allowed;
    }
  `}}

`,we=({variant:e="primary",size:r="small",role:t,"aria-label":n,"aria-describedby":a,"aria-hidden":o,disabled:s,children:l,...d})=>u.jsx(dn,{variant:e,size:r,role:t,"aria-label":n,"aria-describedby":a,"aria-hidden":o,"aria-disabled":s,disabled:s,...d,children:l}),un=y(j)`
  display: flex;
  align-items: center;
  gap: ${({gap:e})=>b[e]};
`,fn=({currentPage:e,totalPages:r,onPageChange:t,gap:n=2})=>{const a=Array.from({length:r},(o,s)=>s+1);return u.jsxs(un,{as:"nav",role:"navigation","aria-label":"Pagination",gap:n,children:[u.jsx(we,{onClick:()=>t(Math.max(1,e-1)),disabled:e===1,children:"Previous"}),a.map(o=>u.jsx(we,{onClick:()=>t(o),variant:o===e?"primary":"secondary","aria-current":o===e?"page":void 0,children:o},o)),u.jsx(we,{onClick:()=>t(Math.min(r,e+1)),disabled:e===r,children:"Next"})]})},bn={default:i.text,error:i.errorText,success:i.successText},Re=({id:e,children:r,tone:t="default",role:n,"aria-label":a,"aria-describedby":o,"aria-hidden":s})=>u.jsx(H,{as:"p",id:e,fontSize:"caption",style:{color:bn[t]},marginBottom:0,role:n,"aria-label":a,"aria-describedby":o,"aria-hidden":s,children:r}),pn=y(j)`
  display: flex;
  flex-direction: column;
  gap: ${({gap:e})=>b[e]};
`,hn=y("label")`
  display: flex;
  align-items: center;
  gap: ${b[2]};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,gn=({name:e,options:r,selectedValue:t,onChange:n,gap:a=2,tone:o="default",ariaLabel:s,ariaLabelledBy:l,ariaDescribedBy:d})=>u.jsx(pn,{role:"radiogroup",gap:a,"aria-label":s,"aria-labelledby":l,"aria-describedby":d,children:r.map(f=>{const p=`${e}-${f.value}`;return u.jsxs(hn,{htmlFor:p,disabled:f.disabled,children:[u.jsx("input",{type:"radio",id:p,name:e,value:f.value,checked:t===f.value,onChange:()=>n(f.value),"aria-checked":t===f.value,disabled:f.disabled}),u.jsx(H,{as:"span",color:f.disabled?"color-neutral-3":o==="error"?"error":"text",children:f.label})]},f.value)})}),mn=y(j)`
  display: flex;
  flex-direction: column;
  gap: ${({gap:e})=>b[e]};
`,yn=({name:e,options:r,selectedValues:t,onChange:n,gap:a=2,ariaLabel:o,ariaDescribedBy:s})=>{const l=d=>{t.includes(d)?n(t.filter(f=>f!==d)):n([...t,d])};return u.jsx(mn,{role:"group",gap:a,"aria-label":o,"aria-describedby":s,children:r.map(d=>u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:b[2],opacity:d.disabled?.6:1,cursor:d.disabled?"not-allowed":"pointer"},children:[u.jsx("input",{type:"checkbox",name:e,value:d.value,checked:t.includes(d.value),onChange:()=>l(d.value),disabled:d.disabled}),u.jsx(H,{as:"span",children:d.label})]},d.value))})},xn=y("div")`
  display: flex;
  flex-direction: column;
  gap: ${b[1]};
`,vn=y("label")`
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.small};
  color: ${i["color-neutral-4"]};
`,kn=y("div")`
  position: relative;
  width: 100%;
`,$n=y("select")`
  width: 100%;
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.body};
  padding: ${b[2]} ${b[5]} ${b[2]} ${b[2]};
  border: none;
  border-bottom: 1px solid
    ${({tone:e})=>e==="error"?i.error:e==="success"?i.success:i.border};
  background-color: transparent;
  color: ${i.text};
  line-height: ${h.lineHeights.normal};
  appearance: none;
  cursor: pointer;

  &:disabled {
    color: ${i["color-neutral-3"]};
    border-bottom: 1px solid ${i["color-neutral-2"]};
    cursor: not-allowed;
  }
`,wn=y("div")`
  position: absolute;
  right: ${b[2]};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-left: 2px solid ${i.text};
    border-bottom: 2px solid ${i.text};
    transform: rotate(-45deg);
  }
`,Sn=({label:e,helperText:r,options:t,tone:n="default",placeholder:a,id:o,role:s,"aria-label":l,"aria-describedby":d,"aria-hidden":f,...p})=>{const x=o??`select-${Math.random().toString(36).substr(2,9)}`,B=r?`${x}-helper`:void 0;return u.jsxs(xn,{children:[e&&u.jsx(vn,{htmlFor:x,children:e}),u.jsxs(kn,{children:[u.jsxs($n,{id:x,tone:n,role:s,"aria-label":l,"aria-describedby":B??d,"aria-hidden":f,"aria-invalid":n==="error",...p,children:[a&&u.jsx("option",{value:"",children:a}),t.map(R=>u.jsx("option",{value:R.value,children:R.label},R.value))]}),u.jsx(wn,{})]}),r&&u.jsx(Re,{id:B,tone:n,children:r})]})},En=y("div")`
  display: flex;
  flex-direction: column;
  gap: ${b[1]};
`,Fn=y("label")`
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.small};
  color: ${i["color-neutral-4"]};
`,Cn=y("input")`
  width: 100%;
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.body};
  padding: ${b[2]} 0 ${b[2]} 0;
  border: none;
  border-bottom: 2px solid
    ${({tone:e})=>e==="error"?i.error:e==="success"?i.success:i.black};
  background-color: transparent;
  color: ${i.text};
  line-height: ${h.lineHeights.normal};
  outline: none;

  &:disabled {
    color: ${i["color-neutral-2"]};
    border-bottom: 2px solid ${i["color-neutral-2"]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${i["color-neutral-3"]};
  }
    &:disabled::placeholder {
  color: ${i["color-neutral-1"]};
}
`,An=({label:e,helperText:r,tone:t="default",id:n,role:a,"aria-label":o,"aria-describedby":s,"aria-hidden":l,...d})=>{const f=n??`textinput-${Math.random().toString(36).substr(2,9)}`,p=r?`${f}-helper`:void 0;return u.jsxs(En,{children:[e&&u.jsx(Fn,{htmlFor:f,children:e}),u.jsx(Cn,{id:f,tone:t,role:a,"aria-label":o,"aria-describedby":p??s,"aria-hidden":l,"aria-invalid":t==="error",...d}),r&&u.jsx(Re,{id:p,tone:t,children:r})]})},Bn=y("textarea")`
  width: 100%;
  min-height: 120px; /* make taller by default */
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.body};
  padding: ${b[2]} 0 ${b[2]} 0;
  border: none;
  border-bottom: 2px solid
    ${({tone:e})=>e==="error"?i.error:e==="success"?i.success:i.black};
  background-color: transparent;
  color: ${i.text};
  line-height: ${h.lineHeights.normal};
  outline: none;
  resize: vertical; /* allow user to resize vertically */

  &:disabled {
    color: ${i["color-neutral-2"]};
    border-bottom: 2px solid ${i["color-neutral-2"]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${i["color-neutral-3"]};
  }

  &:disabled::placeholder {
    color: ${i["color-neutral-2"]};
  }
`,Tn=({tone:e="default",disabled:r=!1,role:t,"aria-label":n,"aria-describedby":a,"aria-hidden":o,...s})=>u.jsx(Bn,{tone:e,disabled:r,role:t,"aria-label":n,"aria-describedby":a,"aria-hidden":o,"aria-invalid":e==="error",...s});w.Accordion=rn,w.Alert=_t,w.Anchor=on,w.Avatar=Mt,w.Badge=Rt,w.Box=j,w.Button=we,w.Callout=nn,w.Card=Dt,w.CheckboxGroup=yn,w.Flex=wt,w.Heading=Et,w.HelpText=Re,w.List=Bt,w.Pagination=fn,w.Paragraph=Ct,w.RadioGroup=gn,w.Select=Sn,w.Skeleton=Ht,w.Stack=kt,w.Tabs=ln,w.Text=H,w.TextArea=Tn,w.TextInput=An,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});
