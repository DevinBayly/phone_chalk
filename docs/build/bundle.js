var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function d(){return s(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function p(t,e){t.value=null==e?"":e}let m;function v(t){m=t}function $(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const y=[],w=[],x=[],b=[],k=Promise.resolve();let _=!1;function E(t){x.push(t)}let L=!1;const C=new Set;function D(){if(!L){L=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];v(e),I(e.$$)}for(v(null),y.length=0;w.length;)w.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];C.has(e)||(C.add(e),e())}x.length=0}while(y.length);for(;b.length;)b.pop()();_=!1,L=!1,C.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const R=new Set;function A(t,e){t&&t.i&&(R.delete(t),t.i(e))}function S(t,n,r){const{fragment:c,on_mount:a,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,r),E(()=>{const n=a.map(e).filter(i);u?u.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(E)}function U(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&(y.push(t),_||(_=!0,k.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,i,r,c,a,l,s=[-1]){const d=m;v(e);const h=i.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:s,skip_bound:!1};let g=!1;if(f.ctx=r?r(e,h,(t,n,...o)=>{const i=o.length?o[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),g&&j(e,t)),n}):[],f.update(),g=!0,o(f.before_update),f.fragment=!!c&&c(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(u)}else f.fragment&&f.fragment.c();i.intro&&A(e.$$.fragment),S(e,i.target,i.anchor),D()}v(d)}class O{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function T(e){let n,i,r,g,m,v,$,y,w,x,b,k,_,E,L,C,D,I,R,A,S,U,j,M,O,T,z,B,N;return{c(){n=l("canvas"),i=d(),r=l("div"),g=l("div"),m=d(),v=l("div"),$=l("label"),y=s("zoom\n      "),w=l("input"),x=d(),b=l("input"),k=d(),_=l("div"),E=l("label"),L=s("Global Alpha\n      "),C=l("input"),D=d(),I=l("input"),R=d(),A=l("div"),S=l("button"),U=s(e[2]),j=d(),M=l("div"),O=l("button"),O.textContent="flashlight",T=d(),z=l("button"),z.textContent="Reset",f(n,"class","svelte-gsye9w"),f(g,"id","fileupload"),f(w,"type","text"),f(w,"min","0"),f(w,"max","1"),f(b,"type","range"),f(b,"min","0"),f(b,"max","1"),f(b,"step",".0001"),f($,"for",""),f(v,"id","zoom"),f(C,"type","text"),f(C,"min","0"),f(C,"max","1"),f(I,"type","range"),f(I,"min","0"),f(I,"max","1"),f(I,"step",".001"),f(E,"for",""),f(_,"id","GA"),f(A,"id","mark"),f(O,"id","flashlight"),f(M,"id","flash"),f(r,"id","holder"),f(r,"class","svelte-gsye9w")},m(t,o){a(t,n,o),e[8](n),a(t,i,o),a(t,r,o),c(r,g),c(r,m),c(r,v),c(v,$),c($,y),c($,w),p(w,e[3]),c($,x),c($,b),p(b,e[3]),c(r,k),c(r,_),c(_,E),c(E,L),c(E,C),p(C,e[1]),c(E,D),c(E,I),p(I,e[1]),c(r,R),c(r,A),c(A,S),c(S,U),c(r,j),c(r,M),c(M,O),c(M,T),c(M,z),B||(N=[h(w,"input",e[9]),h(b,"change",e[10]),h(b,"input",e[10]),h(C,"input",e[11]),h(I,"change",e[12]),h(I,"input",e[12]),h(S,"click",e[4]),h(z,"click",e[5])],B=!0)},p(t,[e]){8&e&&w.value!==t[3]&&p(w,t[3]),8&e&&p(b,t[3]),2&e&&C.value!==t[1]&&p(C,t[1]),2&e&&p(I,t[1]),4&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(U,t[2])},i:t,o:t,d(t){t&&u(n),e[8](null),t&&u(i),t&&u(r),B=!1,o(N)}}}function z(t,e,n){let o,i,r,c,{cw:a}=e,{ch:u}=e,l={on:!1,active(){return this.on},run(t,e){"mark-on"==d&&this.mark(t,e)},mark(t,e){let n=o.getBoundingClientRect();r.fillStyle="red",t=t*(h.width/o.width)*v+p-n.left,e=e*(h.height/o.height)*(h.width/h.height)*v+m-n.top,r.fillRect(t,e,5,5),f.src=i.toDataURL()}},s=1,d="mark-off",h=new Image,f=new Image,p=0,m=0,v=1,y=()=>{if(null==o)return;let t,e;h.height>h.width?(t=o.width*h.width/h.height,e=o.height):(t=o.width,e=o.height*h.height/h.width),c.clearRect(0,0,o.width,o.height),c.globalAlpha=s,c.drawImage(f,p,m,h.width*v,h.height*v,0,0,t,e)};return $(()=>{i=document.createElement("canvas"),c=o.getContext("2d"),r=i.getContext("2d"),h.onload=()=>{i.height=h.height,i.width=h.width,r.drawImage(h,0,0);r.getImageData(0,0,i.width,i.height);f.src=i.toDataURL()},h.src="chad.png",f.onload=()=>{y()},n(0,o.height=u,o),n(0,o.width=a,o);let t,e,s={x:0,y:0};o.addEventListener("touchstart",(function(e){var n=e.touches[0];t={x:1*n.clientX,y:1*n.clientY},l.run(t.x,t.y)}),!1),o.addEventListener("touchmove",(function(o){var i=o.touches[0];e={x:1*i.clientX,y:1*i.clientY};let r=t.x-e.x,c=t.y-e.y;n(18,p=s.x+r),n(19,m=s.y+c)})),o.addEventListener("touchend",(function(n){s={x:s.x+(t.x-e.x),y:s.y+(t.y-e.y)}})),document.body.addEventListener("touchstart",(function(t){t.target==o&&t.preventDefault()}),{passive:!1}),document.body.addEventListener("touchend",(function(t){t.target==o&&t.preventDefault()}),{passive:!1}),document.body.addEventListener("touchmove",(function(t){t.target==o&&t.preventDefault()}),{passive:!1})}),t.$$set=t=>{"cw"in t&&n(6,a=t.cw),"ch"in t&&n(7,u=t.ch)},t.$$.update=()=>{786442&t.$$.dirty&&s&&(console.log(p,m,v,s),y())},[o,s,d,v,()=>{n(2,d="mark-on"==d?"mark-off":"mark-on")},()=>{r.drawImage(h,0,0),f.src=i.toDataURL()},a,u,function(t){w[t?"unshift":"push"](()=>{o=t,n(0,o)})},function(){v=this.value,n(3,v)},function(){v=g(this.value),n(3,v)},function(){s=this.value,n(1,s)},function(){s=g(this.value),n(1,s)}]}class B extends O{constructor(t){super(),M(this,t,z,T,r,{cw:6,ch:7})}}function N(e){let n;return{c(){n=l("video"),n.autoplay=!0,n.playsInline=!0,f(n,"class","svelte-kfn000")},m(t,o){a(t,n,o),e[1](n)},p:t,i:t,o:t,d(t){t&&u(n),e[1](null)}}}function q(t,e,n){let o;return $(()=>{navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"}}}).then((function(t){n(0,o.srcObject=t,o);const e=t.getVideoTracks()[0];new ImageCapture(e).getPhotoCapabilities().then(()=>{let t=o.getBoundingClientRect();new B({target:document.body,props:{ch:t.height,cw:t.width}});setTimeout(()=>{document.querySelector("#flashlight").addEventListener("click",()=>{e.applyConstraints({advanced:[{torch:!0}]})})},1e3)})})).catch((function(t){console.log("Something went wrong!",t)}))}),[o,function(t){w[t?"unshift":"push"](()=>{o=t,n(0,o)})}]}class G extends O{constructor(t){super(),M(this,t,q,N,r,{})}}function P(e){let n,o;return n=new G({}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){S(n,t,e),o=!0},p:t,i(t){o||(A(n.$$.fragment,t),o=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),(void 0).c.push(()=>{R.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}(n.$$.fragment,t),o=!1},d(t){U(n,t)}}}return new class extends O{constructor(t){super(),M(this,t,null,P,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
