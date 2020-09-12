var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function d(){return s(" ")}function h(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t){return""===t?null:+t}function g(t,e){t.value=null==e?"":e}let m;function $(t){m=t}function v(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const w=[],y=[],x=[],b=[],_=Promise.resolve();let k=!1;function E(t){x.push(t)}let L=!1;const A=new Set;function D(){if(!L){L=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];$(e),I(e.$$)}for($(null),w.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];A.has(e)||(A.add(e),e())}x.length=0}while(w.length);for(;b.length;)b.pop()();k=!1,L=!1,A.clear()}}function I(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const T=new Set;function U(t,e){t&&t.i&&(T.delete(t),t.i(e))}function C(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),undefined.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function P(t){t&&t.c()}function j(t,n,r){const{fragment:u,on_mount:a,on_destroy:c,after_update:l}=t.$$;u&&u.m(n,r),E(()=>{const n=a.map(e).filter(o);c?c.push(...n):i(n),t.$$.on_mount=[]}),l.forEach(E)}function z(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(w.push(t),k||(k=!0,_.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,o,r,u,a,l,s=[-1]){const d=m;$(e);const h=o.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:s,skip_bound:!1};let p=!1;if(f.ctx=r?r(e,h,(t,n,...i)=>{const o=i.length?i[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&O(e,t)),n}):[],f.update(),p=!0,i(f.before_update),f.fragment=!!u&&u(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();o.intro&&U(e.$$.fragment),j(e,o.target,o.anchor),D()}$(d)}class S{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(e){let n,o,r,p,m,$,v,w,y,x,b,_,k,E,L,A,D,I,T,U,C,P,j,z,O,R,S,M,N,q,G,X;return{c(){n=l("canvas"),o=d(),r=l("div"),p=l("div"),m=l("input"),$=d(),v=l("div"),w=l("label"),y=s("zoom\n      "),x=l("input"),b=d(),_=l("input"),k=d(),E=l("div"),L=l("label"),A=s("grid\n      "),D=l("input"),I=d(),T=l("input"),U=d(),C=l("div"),P=l("label"),j=s("Global Alpha\n      "),z=l("input"),O=d(),R=l("input"),S=d(),M=l("div"),N=l("button"),q=s(e[2]),f(n,"class","svelte-mt9coy"),f(m,"type","file"),f(p,"id","fileupload"),f(x,"type","text"),f(x,"min","0"),f(x,"max","1"),f(_,"type","range"),f(_,"min","0"),f(_,"max","1"),f(_,"step",".0001"),f(w,"for",""),f(v,"id","zoom"),f(D,"type","text"),f(D,"min","5"),f(D,"max","20"),f(T,"type","range"),f(T,"min","5"),f(T,"max","20"),f(T,"step","1"),f(L,"for",""),f(E,"id","grid"),f(z,"type","text"),f(z,"min","0"),f(z,"max","1"),f(R,"type","range"),f(R,"min","0"),f(R,"max","1"),f(R,"step",".001"),f(P,"for",""),f(C,"id","GA"),f(M,"id","slowmo"),f(r,"id","holder")},m(t,i){a(t,n,i),e[7](n),a(t,o,i),a(t,r,i),u(r,p),u(p,m),u(r,$),u(r,v),u(v,w),u(w,y),u(w,x),g(x,e[4]),u(w,b),u(w,_),g(_,e[4]),u(r,k),u(r,E),u(E,L),u(L,A),u(L,D),g(D,e[3]),u(L,I),u(L,T),g(T,e[3]),u(r,U),u(r,C),u(C,P),u(P,j),u(P,z),g(z,e[1]),u(P,O),u(P,R),g(R,e[1]),u(r,S),u(r,M),u(M,N),u(N,q),G||(X=[h(m,"change",e[5]),h(x,"input",e[8]),h(_,"change",e[9]),h(_,"input",e[9]),h(D,"input",e[10]),h(T,"change",e[11]),h(T,"input",e[11]),h(z,"input",e[12]),h(R,"change",e[13]),h(R,"input",e[13]),h(N,"click",e[6])],G=!0)},p(t,[e]){16&e&&x.value!==t[4]&&g(x,t[4]),16&e&&g(_,t[4]),8&e&&D.value!==t[3]&&g(D,t[3]),8&e&&g(T,t[3]),2&e&&z.value!==t[1]&&g(z,t[1]),2&e&&g(R,t[1]),4&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(q,t[2])},i:t,o:t,d(t){t&&c(n),e[7](null),t&&c(o),t&&c(r),G=!1,i(X)}}}function N(t,e,n){let i,o,r,u=.1,a="slo-mo",c=10,l=1,s=1,d=0,h=0,f=0,g=0,m=new Image;v(()=>{n(0,i.height=500,i),n(0,i.width=800,i)});return t.$$.update=()=>{393234&t.$$.dirty&&u&&(console.log(d,h,u,s),null!=o&&(n(0,i.width=800,i),n(0,i.height=500,i),o.globalAlpha=u,o.drawImage(m,d,h,r.width*s,r.height*s,0,0,i.width,r.height*i.width/r.width))),8&t.$$.dirty&&c&&(console.log(c),(()=>{if(null==o)return;console.log("running grid"),n(0,i.width=r.width,i),n(0,i.height=r.height,i);let t=r.width/i.width;o.drawImage(r,0,0,r.width,r.height,0,0,i.width,r.height/t),o.lineWidth=1,o.strokeStyle="white";for(let t=0;t<c;t++)o.beginPath(),o.moveTo(0,i.height/c*t),o.lineTo(i.width,i.height/c*t),o.closePath(),o.stroke(),o.beginPath(),o.moveTo(i.width/c*t,0),o.lineTo(i.width/c*t,i.height),o.closePath(),o.stroke();m.src=i.toDataURL()})())},[i,u,a,c,s,t=>{let e=window.webkitURL||window.URL;o=i.getContext("2d"),r=new Image,r.onload=()=>{f=r.width,g=r.height,n(0,i.width=r.width,i),n(0,i.height=r.height,i);let t=r.width/i.width;o.drawImage(r,0,0,r.width,r.height,0,0,i.width,r.height/t),m.src=i.toDataURL()};let u=e.createObjectURL(t.target.files[0]);r.src=u;let a,c,s={x:0,y:0};i.addEventListener("touchstart",(function(t){var e=t.touches[0];a={x:e.clientX*l,y:e.clientY*l}}),!1),i.addEventListener("touchmove",(function(t){var e=t.touches[0];c={x:e.clientX*l,y:e.clientY*l};let i=a.x-c.x,o=a.y-c.y;n(17,d=s.x+i),n(18,h=s.y+o)})),i.addEventListener("touchend",(function(t){s={x:s.x+(a.x-c.x),y:s.y+(a.y-c.y)}})),document.body.addEventListener("touchstart",(function(t){t.target==i&&t.preventDefault()}),{passive:!1}),document.body.addEventListener("touchend",(function(t){t.target==i&&t.preventDefault()}),{passive:!1}),document.body.addEventListener("touchmove",(function(t){t.target==i&&t.preventDefault()}),{passive:!1})},()=>{1==l?(l=.1,n(2,a="super-slow-mo")):.1==l?(l=.01,n(2,a="fast-mo")):(l=1,n(2,a="slo-mo"))},function(t){y[t?"unshift":"push"](()=>{i=t,n(0,i)})},function(){s=this.value,n(4,s)},function(){s=p(this.value),n(4,s)},function(){c=this.value,n(3,c)},function(){c=p(this.value),n(3,c)},function(){u=this.value,n(1,u)},function(){u=p(this.value),n(1,u)}]}class q extends S{constructor(t){super(),R(this,t,N,M,r,{})}}function G(e){let n;return{c(){n=l("video"),n.autoplay=!0,n.playsInline=!0,f(n,"class","svelte-1fhv43z")},m(t,i){a(t,n,i),e[1](n)},p:t,i:t,o:t,d(t){t&&c(n),e[1](null)}}}function X(t,e,n){let i;return v(()=>{navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"}}}).then((function(t){n(0,i.srcObject=t,i);const e=t.getVideoTracks()[0];new ImageCapture(e).getPhotoCapabilities().then(()=>{let t=document.querySelector("#flashlight");t.style.position="absolute",t.style["z-index"]=200,t.addEventListener("click",()=>{e.applyConstraints({advanced:[{torch:!0}]})})})})).catch((function(t){console.log("Something went wrong!",t)}))}),[i,function(t){y[t?"unshift":"push"](()=>{i=t,n(0,i)})}]}class Y extends S{constructor(t){super(),R(this,t,X,G,r,{})}}function B(e){let n,i,o,r;return n=new Y({}),o=new q({}),{c(){P(n.$$.fragment),i=d(),P(o.$$.fragment)},m(t,e){j(n,t,e),a(t,i,e),j(o,t,e),r=!0},p:t,i(t){r||(U(n.$$.fragment,t),U(o.$$.fragment,t),r=!0)},o(t){C(n.$$.fragment,t),C(o.$$.fragment,t),r=!1},d(t){z(n,t),t&&c(i),z(o,t)}}}function F(t,e,n){let{name:i}=e;return t.$$set=t=>{"name"in t&&n(0,i=t.name)},[i]}return new class extends S{constructor(t){super(),R(this,t,F,B,r,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
