const defaultPartytownForwardPropertySettings={preserveBehavior:!1},resolvePartytownForwardProperty=t=>{if("string"==typeof t)return[t,defaultPartytownForwardPropertySettings];const[e,r=defaultPartytownForwardPropertySettings]=t;return[e,{...defaultPartytownForwardPropertySettings,...r}]},arrayMethods=Object.freeze((t=>{const e=new Set;let r=[];do{Object.getOwnPropertyNames(r).forEach((t=>{"function"==typeof r[t]&&e.add(t)}))}while((r=Object.getPrototypeOf(r))!==Object.prototype);return Array.from(e)})());!function(t,e,r,n,o,a,i,s,d,l,c=t,p){function y(){p||(p=1,"/"==(i=(a.lib||"/~partytown/")+(!1!==a.debug?"debug/":""))[0]?(d=e.querySelectorAll('script[type="text/partytown"]'),n!=t?n.dispatchEvent(new CustomEvent("pt1",{detail:t})):(s=setTimeout(u,1e4),e.addEventListener("pt0",f),o?w(1):r.serviceWorker?r.serviceWorker.register(i+(a.swPath||"partytown-sw.js"),{scope:i}).then((function(t){t.active?w():t.installing?t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&w()})):console.warn(t)}),console.error):u())):console.warn('Partytown config.lib url must start with "/"'))}function w(r){l=e.createElement(r?"script":"iframe"),t._pttab=Date.now(),r||(l.style.display="block",l.style.width="0",l.style.height="0",l.style.border="0",l.style.visibility="hidden",l.setAttribute("aria-hidden",!0)),l.src=i+"partytown-"+(r?"atomics.js?v=0.10.1":"sandbox-sw.html?"+t._pttab),e.querySelector(a.sandboxParent||"body").appendChild(l)}function u(r,o){for(console.warn("Partytown script fallback"),f(),n==t&&(a.forward||[]).map((function(e){const[r]=resolvePartytownForwardProperty(e);delete t[r.split(".")[0]]})),r=0;r<d.length;r++)(o=e.createElement("script")).innerHTML=d[r].innerHTML,o.nonce=a.nonce,e.head.appendChild(o);l&&l.parentNode.removeChild(l)}function f(){clearTimeout(s)}a=t.partytown||{},n==t&&(a.forward||[]).map((function(e){const[r,{preserveBehavior:n}]=resolvePartytownForwardProperty(e);c=t,r.split(".").map((function(e,r,o){var a;c=c[o[r]]=r+1<o.length?c[o[r]]||(a=o[r+1],arrayMethods.includes(a)?[]:{}):(()=>{let e=null;if(n){const{methodOrProperty:r,thisObject:n}=((t,e)=>{let r=t;for(let t=0;t<e.length-1;t+=1)r=r[e[t]];return{thisObject:r,methodOrProperty:e.length>0?r[e[e.length-1]]:void 0}})(t,o);"function"==typeof r&&(e=(...t)=>r.apply(n,...t))}return function(){let r;return e&&(r=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),r}})()}))})),"complete"==e.readyState?y():(t.addEventListener("DOMContentLoaded",y),t.addEventListener("load",y))}(window,document,navigator,top,window.crossOriginIsolated);