import{F as y,D as b,a as u}from"./client-BWPD90IX.js";var f=({children:s,fallback:c})=>{const l=y({children:s});return l[b]=(n,a)=>{if(!(n instanceof Promise))throw n;return n.finally(a),c},l};const g=s=>{const c=async n=>{const a={children:await l(n.childNodes)},o=n.attributes;for(let e=0;e<o.length;e++)a[o[e].name]=o[e].value;return s(n.nodeName,a)},l=async n=>{const a=[];for(let o=0;o<n.length;o++){const e=n[o];if(e.nodeType!==8)if(e.nodeType===3)a.push(e.textContent);else if(e.nodeName==="TEMPLATE"&&e.id.match(/(?:H|E):\d+/)){const i=document.createElement("hono-placeholder");i.style.display="none";let p;const m=new Promise(t=>p=t);e.replaceWith=t=>{l(t.childNodes).then(p),i.remove()};let r=[];for(i.appendChild(e);o<n.length;o++){const t=n[o];if(t.nodeType===8){i.appendChild(t),o--;break}else t.nodeType===3?r.push(t.textContent):r.push(await c(t))}const d=document.querySelectorAll(`[data-hono-target="${e.id}"]`);if(d.length>0){const t=d[d.length-1];r=await l(t.content.childNodes)}if(r.length===0&&e.id.startsWith("E:")){let t;const w=new Promise(h=>t=h);r=await s(f,{fallback:[],children:[await s(()=>u(w),{})]}),i.insertBefore=h=>{l(h.childNodes).then(t)}}document.body.appendChild(i),a.push(await s(f,{fallback:r,children:[await s(()=>u(m),{})]}))}else a.push(await c(e))}return a};return l};export{g as buildCreateChildrenFn};
