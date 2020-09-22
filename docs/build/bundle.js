var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(){return l(" ")}function s(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let w;function v(t){w=t}function $(t){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.on_mount.push(t)}const y=[],x=[],b=[],k=[],_=Promise.resolve();let L=!1;function E(t){b.push(t)}let R=!1;const C=new Set;function D(){if(!R){R=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];v(e),I(e.$$)}for(v(null),y.length=0;x.length;)x.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];C.has(e)||(C.add(e),e())}b.length=0}while(y.length);for(;k.length;)k.pop()();L=!1,R=!1,C.clear()}}function I(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const U=new Set;function T(t,e){t&&t.i&&(U.delete(t),t.i(e))}function A(t,n,r){const{fragment:a,on_mount:c,on_destroy:u,after_update:h}=t.$$;a&&a.m(n,r),E(()=>{const n=c.map(e).filter(o);u?u.push(...n):i(n),t.$$.on_mount=[]}),h.forEach(E)}function P(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function S(t,e){-1===t.$$.dirty[0]&&(y.push(t),L||(L=!0,_.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,o,r,a,c,h,l=[-1]){const d=w;v(e);const s=o.props||{},f=e.$$={fragment:null,ctx:null,props:h,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let g=!1;if(f.ctx=r?r(e,s,(t,n,...i)=>{const o=i.length?i[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),g&&S(e,t)),n}):[],f.update(),g=!0,i(f.before_update),f.fragment=!!a&&a(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(u)}else f.fragment&&f.fragment.c();o.intro&&T(e.$$.fragment),A(e,o.target,o.anchor),D()}v(d)}class O{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(e){let n,o,r,g,w,v,$,y,x,b,k,_,L,E,R,C,D,I,U,T,A,P,S,j,O,M,z,N,X,Y,q,B,G,F,V,W,H,J,K,Q,Z;return{c(){n=h("canvas"),o=d(),r=h("div"),g=h("div"),w=h("input"),v=d(),$=h("div"),y=h("label"),x=l("zoom\n      "),b=h("input"),k=d(),_=h("input"),L=d(),E=h("div"),R=h("label"),C=l("grid\n      "),D=h("input"),I=d(),U=h("input"),T=d(),A=h("div"),P=h("label"),S=l("Global Alpha\n      "),j=h("input"),O=d(),M=h("input"),z=d(),N=h("div"),X=h("button"),Y=l(e[3]),q=d(),B=h("div"),G=h("button"),F=l(e[1]),V=d(),W=h("div"),H=h("button"),H.textContent="flashlight",J=d(),K=h("button"),K.textContent="Reset",f(n,"class","svelte-14ebd9s"),f(w,"type","file"),f(g,"id","fileupload"),f(b,"type","text"),f(b,"min","0"),f(b,"max","1"),f(_,"type","range"),f(_,"min","0"),f(_,"max","1"),f(_,"step",".0001"),f(y,"for",""),f($,"id","zoom"),f(D,"type","text"),f(D,"min","5"),f(D,"max","20"),f(U,"type","range"),f(U,"min","5"),f(U,"max","20"),f(U,"step","1"),f(R,"for",""),f(E,"id","grid"),f(j,"type","text"),f(j,"min","0"),f(j,"max","1"),f(M,"type","range"),f(M,"min","0"),f(M,"max","1"),f(M,"step",".001"),f(P,"for",""),f(A,"id","GA"),f(N,"id","slowmo"),f(B,"id","mark"),f(H,"id","flashlight"),f(W,"id","flash"),f(r,"id","holder")},m(t,i){c(t,n,i),e[12](n),c(t,o,i),c(t,r,i),a(r,g),a(g,w),a(r,v),a(r,$),a($,y),a(y,x),a(y,b),m(b,e[5]),a(y,k),a(y,_),m(_,e[5]),a(r,L),a(r,E),a(E,R),a(R,C),a(R,D),m(D,e[4]),a(R,I),a(R,U),m(U,e[4]),a(r,T),a(r,A),a(A,P),a(P,S),a(P,j),m(j,e[2]),a(P,O),a(P,M),m(M,e[2]),a(r,z),a(r,N),a(N,X),a(X,Y),a(r,q),a(r,B),a(B,G),a(G,F),a(r,V),a(r,W),a(W,H),a(W,J),a(W,K),Q||(Z=[s(w,"change",e[6]),s(b,"input",e[13]),s(_,"change",e[14]),s(_,"input",e[14]),s(D,"input",e[15]),s(U,"change",e[16]),s(U,"input",e[16]),s(j,"input",e[17]),s(M,"change",e[18]),s(M,"input",e[18]),s(X,"click",e[8]),s(G,"click",e[9]),s(K,"click",e[7])],Q=!0)},p(t,[e]){32&e&&b.value!==t[5]&&m(b,t[5]),32&e&&m(_,t[5]),16&e&&D.value!==t[4]&&m(D,t[4]),16&e&&m(U,t[4]),4&e&&j.value!==t[2]&&m(j,t[2]),4&e&&m(M,t[2]),8&e&&p(Y,t[3]),2&e&&p(F,t[1])},i:t,o:t,d(t){t&&u(n),e[12](null),t&&u(o),t&&u(r),Q=!1,i(Z)}}}function z(t,e,n){let i,o,r,a="mark-off",c=!1,u=.1,h="slo-mo",l=10,d=1,s=1,f=0,p=0,m=0,w=0,v=new Image,{ch:y}=e,{cw:b}=e;$(()=>{n(0,i.height=y,i),n(0,i.width=b,i)});let k=(t,e)=>{if(c){n(0,i.width=r.width,i),n(0,i.height=r.height,i);let t=r.width/i.width;o.drawImage(r,0,0,r.width,r.height,0,0,i.width,r.height/t),c=!1}else o.fillStyle="red",o.fillRect(t,e,5,5),v.src=i.toDataURL()};return t.$$set=t=>{"ch"in t&&n(10,y=t.ch),"cw"in t&&n(11,b=t.cw)},t.$$.update=()=>{25165860&t.$$.dirty&&u&&(console.log(f,p,u,s),null!=o&&(n(0,i.width=b,i),n(0,i.height=y,i),o.globalAlpha=u,o.drawImage(v,f,p,r.width*s,r.height*s,0,0,r.width*i.height/r.height,i.height))),16&t.$$.dirty&&l&&(console.log(l),(()=>{if(null==o)return;console.log("running grid"),n(0,i.width=r.width,i),n(0,i.height=r.height,i);let t=r.width/i.width;o.drawImage(r,0,0,r.width,r.height,0,0,i.width,r.height/t),o.lineWidth=1,o.strokeStyle="red";for(let t=0;t<l;t++)o.beginPath(),o.moveTo(0,i.height/l*t),o.lineTo(i.width,i.height/l*t),o.closePath(),o.stroke(),o.beginPath(),o.moveTo(i.width/l*t,0),o.lineTo(i.width/l*t,i.height),o.closePath(),o.stroke();v.src=i.toDataURL()})())},[i,a,u,h,l,s,t=>{let e=window.webkitURL||window.URL;o=i.getContext("2d"),r=new Image,r.onload=()=>{m=r.width,w=r.height,n(0,i.width=r.width,i),n(0,i.height=r.height,i);let t=r.width/i.width;o.drawImage(r,0,0,r.width,r.height,0,0,i.width,r.height/t),v.src=i.toDataURL()};e.createObjectURL(t.target.files[0]);let c,u,h={x:0,y:0};i.addEventListener("touchstart",(function(t){var e=t.touches[0];"mark-on"==a?k(e.clientX,e.clientY):c={x:e.clientX*d,y:e.clientY*d}}),!1),i.addEventListener("touchmove",(function(t){if("mark-on"!=a){var e=t.touches[0];u={x:e.clientX*d,y:e.clientY*d};let i={x:c.x-u.x,y:c.y-u.y};n(23,f=h.x+i.x),n(24,p=h.y+i.y)}})),i.addEventListener("touchend",(function(t){"mark-on"!=a&&(h={x:h.x+(c.x-u.x),y:h.y+(c.y-u.y)})})),document.body.addEventListener("touchstart",(function(t){t.target==i&&t.preventDefault()}),{passive:!1}),document.body.addEventListener("touchend",(function(t){t.target==i&&t.preventDefault()}),{passive:!1}),document.body.addEventListener("touchmove",(function(t){t.target==i&&t.preventDefault()}),{passive:!1})},()=>{n(0,i.width=r.width,i),n(0,i.height=r.height,i);let t=r.width/i.width;o.drawImage(r,0,0,r.width,r.height,0,0,i.width,r.height/t),v.src=i.toDataURL()},()=>{1==d?(d=.1,n(3,h="super-slow-mo")):.1==d?(d=.01,n(3,h="fast-mo")):(d=1,n(3,h="slo-mo"))},()=>{"mark-on"==a?n(1,a="mark-off"):(n(1,a="mark-on"),c=!0)},y,b,function(t){x[t?"unshift":"push"](()=>{i=t,n(0,i)})},function(){s=this.value,n(5,s)},function(){s=g(this.value),n(5,s)},function(){l=this.value,n(4,l)},function(){l=g(this.value),n(4,l)},function(){u=this.value,n(2,u)},function(){u=g(this.value),n(2,u)}]}class N extends O{constructor(t){super(),j(this,t,z,M,r,{ch:10,cw:11})}}function X(e){let n;return{c(){n=h("video"),n.autoplay=!0,n.playsInline=!0,f(n,"class","svelte-kfn000")},m(t,i){c(t,n,i),e[1](n)},p:t,i:t,o:t,d(t){t&&u(n),e[1](null)}}}function Y(t,e,n){let i;return $(()=>{navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"}}}).then((function(t){n(0,i.srcObject=t,i);const e=t.getVideoTracks()[0];new ImageCapture(e).getPhotoCapabilities().then(()=>{let t=i.getBoundingClientRect();new N({target:document.body,props:{ch:t.height,cw:t.width}});setTimeout(()=>{document.querySelector("#flashlight").addEventListener("click",()=>{e.applyConstraints({advanced:[{torch:!0}]})})},1e3)})})).catch((function(t){console.log("Something went wrong!",t)}))}),[i,function(t){x[t?"unshift":"push"](()=>{i=t,n(0,i)})}]}class q extends O{constructor(t){super(),j(this,t,Y,X,r,{})}}function B(e){let n,i;return n=new q({}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){A(n,t,e),i=!0},p:t,i(t){i||(T(n.$$.fragment,t),i=!0)},o(t){!function(t,e,n,i){if(t&&t.o){if(U.has(t))return;U.add(t),(void 0).c.push(()=>{U.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}(n.$$.fragment,t),i=!1},d(t){P(n,t)}}}function G(t,e,n){let{name:i}=e;return t.$$set=t=>{"name"in t&&n(0,i=t.name)},[i]}return new class extends O{constructor(t){super(),j(this,t,G,B,r,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
