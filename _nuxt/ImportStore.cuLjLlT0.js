import{cy as k}from"./entry.BnpdOWKH.js";import{d as w}from"./dexie.BGUucr1y.js";function p(e){return e&&e.normalize&&e.normalize(),e&&e.textContent||""}function c(e,t){const n=e.getElementsByTagName(t);return n.length?n[0]:null}function h(e){if(e.children.length==0)return e.textContent;var t={};if(e.children){console.log(e.children);for(let n=0;n<e.childNodes.length;n++){const r=e.childNodes[n].nodeName;t[r]?(Array.isArray(t[r])||(t[r]=[t[r]]),t[r].push(h(e.children[n]))):t[r]=h(e.children[n])}}return t}function y(e){const t={};if(e){const n=c(e,"line");if(n){const r=p(c(n,"color")),s=parseFloat(p(c(n,"opacity"))),i=parseFloat(p(c(n,"width")));r&&(t.stroke=r),isNaN(s)||(t["stroke-opacity"]=s),isNaN(i)||(t["stroke-width"]=i*96/25.4)}}return t}function m(e,t){const n={};let r,s;for(s=0;s<t.length;s++)r=c(e,t[s]),r&&(n[t[s]]=p(r));return n}function d(e){const t=m(e,["name","cmt","desc","type","time","keywords"]),n=e.getElementsByTagNameNS("http://www.garmin.com/xmlschemas/GpxExtensions/v3","*");for(let s=0;s<n.length;s++){const i=n[s];i.parentNode.parentNode===e&&(t[i.tagName.replace(":","_")]=p(i))}const r=e.getElementsByTagName("link");r.length&&(t.links=[]);for(let s=0;s<r.length;s++)t.links.push(Object.assign({href:r[s].getAttribute("href")},m(r[s],["text","type"])));return t}function x(e){const t=[parseFloat(e.getAttribute("lon")),parseFloat(e.getAttribute("lat"))],n=c(e,"ele"),r=c(e,"gpxtpx:hr")||c(e,"hr"),s=c(e,"time");let i;n&&(i=parseFloat(p(n)),isNaN(i)||t.push(i));const a={coordinates:t,time:s?p(s):null,extendedValues:[]};r&&a.extendedValues.push(["heart",parseFloat(p(r))]);const o=c(e,"extensions");if(o!==null)for(const l of["speed","course","hAcc","vAcc"]){const u=parseFloat(p(c(o,l)));isNaN(u)||a.extendedValues.push([l,u])}return a}function b(e){const t=N(e,"rtept");if(t)return{type:"Feature",properties:Object.assign(d(e),y(c(e,"extensions")),{_gpxType:"rte"}),geometry:{type:"LineString",coordinates:t.line}}}function N(e,t){const n=e.getElementsByTagName(t);if(n.length<2)return;const r=[],s=[],i={};for(let a=0;a<n.length;a++){const o=x(n[a]);r.push(o.coordinates),o.time&&s.push(o.time);for(let l=0;l<o.extendedValues.length;l++){const[u,f]=o.extendedValues[l],g=u==="heart"?u:u+"s";i[g]||(i[g]=Array(n.length).fill(null)),i[g][a]=f}}return{line:r,times:s,extendedValues:i}}function q(e){const t=e.getElementsByTagName("trkseg"),n=[],r=[],s=[];for(let o=0;o<t.length;o++){const l=N(t[o],"trkpt");l&&(s.push(l),l.times&&l.times.length&&r.push(l.times))}if(s.length===0)return;const i=s.length>1,a=Object.assign(d(e),y(c(e,"extensions")),{_gpxType:"trk"},r.length?{coordinateProperties:{times:i?r:r[0]}}:{});for(let o=0;o<s.length;o++){const l=s[o];n.push(l.line);for(const[u,f]of Object.entries(l.extendedValues)){let g=a;u==="heart"&&(a.coordinateProperties||(a.coordinateProperties={}),g=a.coordinateProperties),i?(g[u]||(g[u]=s.map(T=>new Array(T.line.length).fill(null))),g[u][o]=f):g[u]=f}}return{type:"Feature",properties:a,geometry:i?{type:"MultiLineString",coordinates:n}:{type:"LineString",coordinates:n[0]}}}function F(e){return{type:"Feature",properties:Object.assign(d(e),m(e,["sym"])),geometry:{type:"Point",coordinates:x(e).coordinates}}}function*S(e){const t=e.getElementsByTagName("trk"),n=e.getElementsByTagName("rte"),r=e.getElementsByTagName("wpt");for(let s=0;s<t.length;s++){const i=q(t[s]);i&&(yield i)}for(let s=0;s<n.length;s++){const i=b(n[s]);i&&(yield i)}for(let s=0;s<r.length;s++)yield F(r[s])}function v(e){return e.length>0?h(e[0]):{}}function A(e){const n=new DOMParser().parseFromString(e,"text/xml"),r=n.getElementsByTagName("metadata");return Object.assign(v(r),{type:"FeatureCollection",features:Array.from(S(n))})}const j=k("importStore",{state:()=>({queue:[]}),actions:{importFiles(e){for(var t=0;t<e.length;t++)this.queue.push({success:!1,error:!1,loading:!1,subText:null,text:e[t].name,file:e[t]})},async startImport(){var e=async(n,r)=>{var s=A(n);return await w.addRoute(Object.assign(s,{fileName:r,_id:`HHR_${new Date().getTime()}-${s.name}`}))};console.log(this.queue);for(var t=0;t<this.queue.length;t++){if(this.queue[t].success){console.log("done import, skipping");continue}this.queue[t].loading=!0,await this.queue[t].file.text().then(n=>e(n,this.queue[t].file.name)).then(n=>{console.log(n+" rendering is successful"),this.queue[t].subText=n,this.queue[t].success=!0}).catch(n=>{throw this.queue[t].subText=n,this.queue[t].error=!0,n}).finally(()=>{this.queue[t].loading=!1})}}}});export{j as u};
