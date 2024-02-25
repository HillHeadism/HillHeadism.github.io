import{_ as re}from"./Toolbar.DHF4ERVA.js";import{L as E,M as G,N as U,P as K,z as o,Q as ie,S as q,c7 as Y,c as x,U as Q,V as ce,co as ue,b2 as A,cc as de,r as R,bx as W,H as $,o as me,cF as ve,bc as fe,b3 as ge,_ as ye,v as ke,A as r,i as Ve,t as L,B as m,X as N,y as j,Y as I}from"./entry.BnpdOWKH.js";import{a as be,V as we}from"./VRow.CEVlsM0E.js";import{m as he,f as Pe,a as F}from"./forwardRefs.gpgpW3rb.js";import{m as X,a as Z,u as J,b as ee,V as Ce,n as Se,c as _e}from"./VSpacer.BqmXq50x.js";import{f as te,c as Be,a as pe,b as Te,d as xe,e as ae,t as oe,v as se,h as Le,i as Ie,j as Ae,k as ne,n as De,y as le,l as Ee,V as D}from"./index.DMUjZW0j.js";import{u as Ue}from"./scopeId.JUXDCElC.js";import{a as Me,e as Re,b as z,c as H,d as O}from"./VList.CfXI509e.js";const $e=E({start:Boolean,end:Boolean,...G(),...te()},"VListItemAction"),Ne=U()({name:"VListItemAction",props:$e(),setup(e,a){let{slots:s}=a;return K(()=>o(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},s)),{}}}),je=Be("v-alert-title"),Fe=["success","info","warning","error"],ze=E({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:ie,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Fe.includes(e)},...G(),...pe(),...Te(),...xe(),...X(),...Z(),...ae(),...te(),...q(),...oe({variant:"flat"})},"VAlert"),ot=U()({name:"VAlert",props:ze(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:s,slots:t}=a;const i=Y(e,"modelValue"),n=x(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),u=x(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:d}=Q(e),{colorClasses:l,colorStyles:y,variantClasses:k}=se(u),{densityClasses:B}=Le(e),{dimensionStyles:v}=Ie(e),{elevationClasses:C}=Ae(e),{locationStyles:S}=J(e),{positionClasses:V}=ee(e),{roundedClasses:b}=ne(e),{textColorClasses:f,textColorStyles:p}=De(ce(e,"borderColor")),{t:T}=ue(),_=x(()=>({"aria-label":T(e.closeLabel),onClick(c){i.value=!1,s("click:close",c)}}));return()=>{const c=!!(t.prepend||n.value),w=!!(t.title||e.title),g=!!(t.close||e.closable);return i.value&&o(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},d.value,l.value,B.value,C.value,V.value,b.value,k.value,e.class],style:[y.value,v.value,S.value,e.style],role:"alert"},{default:()=>{var h,M;return[le(!1,"v-alert"),e.border&&o("div",{key:"border",class:["v-alert__border",f.value],style:p.value},null),c&&o("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?o(D,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},t.prepend):o(Ee,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),o("div",{class:"v-alert__content"},[w&&o(je,{key:"title"},{default:()=>{var P;return[((P=t.title)==null?void 0:P.call(t))??e.title]}}),((h=t.text)==null?void 0:h.call(t))??e.text,(M=t.default)==null?void 0:M.call(t)]),t.append&&o("div",{key:"append",class:"v-alert__append"},[t.append()]),g&&o("div",{key:"close",class:"v-alert__close"},[t.close?o(D,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var P;return[(P=t.close)==null?void 0:P.call(t,{props:_.value})]}}):o(Ce,A({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},_.value),null)])]}})}}});function He(e){const a=W(e);let s=-1;function t(){clearInterval(s)}function i(){t(),ge(()=>a.value=e)}function n(u){const d=u?getComputedStyle(u):{transitionDuration:.2},l=parseFloat(d.transitionDuration)*1e3||200;if(t(),a.value<=0)return;const y=performance.now();s=window.setInterval(()=>{const k=performance.now()-y+l;a.value=Math.max(e-k,0),a.value<=0&&t()},l)}return fe(t),{clear:t,time:a,start:n,reset:i}}const Oe=E({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...X({location:"bottom"}),...Z(),...ae(),...oe(),...q(),...de(he({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Ge=U()({name:"VSnackbar",props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:s}=a;const t=Y(e,"modelValue"),{locationStyles:i}=J(e),{positionClasses:n}=ee(e),{scopeId:u}=Ue(),{themeClasses:d}=Q(e),{colorClasses:l,colorStyles:y,variantClasses:k}=se(e),{roundedClasses:B}=ne(e),v=He(Number(e.timeout)),C=R(),S=R(),V=W(!1);$(t,f),$(()=>e.timeout,f),me(()=>{t.value&&f()});let b=-1;function f(){v.reset(),window.clearTimeout(b);const c=Number(e.timeout);if(!t.value||c===-1)return;const w=ve(S.value);v.start(w),b=window.setTimeout(()=>{t.value=!1},c)}function p(){v.reset(),window.clearTimeout(b)}function T(){V.value=!0,p()}function _(){V.value=!1,f()}return K(()=>{const c=F.filterProps(e),w=!!(s.default||s.text||e.text);return o(F,A({ref:C,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},n.value,e.class],style:e.style},c,{modelValue:t.value,"onUpdate:modelValue":g=>t.value=g,contentProps:A({class:["v-snackbar__wrapper",d.value,l.value,B.value,k.value],style:[i.value,y.value],onPointerenter:T,onPointerleave:_},c.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},u),{default:()=>{var g,h;return[le(!1,"v-snackbar"),e.timer&&!V.value&&o("div",{key:"timer",class:"v-snackbar__timer"},[o(Se,{ref:S,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":v.time.value},null)]),w&&o("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((g=s.text)==null?void 0:g.call(s))??e.text,(h=s.default)==null?void 0:h.call(s)]),s.actions&&o(D,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[o("div",{class:"v-snackbar__actions"},[s.actions()])]})]},activator:s.activator})}),Pe({},C)}}),Ke=[{name:"Basic Map Package",description:"Hong Kong map with elevation information -- required for basic offline functionalities",required:!0,url:"https://data.jsdelivr.com/v1/package/gh/HillHeadism/HKTiles@0.0.1/flat?"}],qe={created(){if(navigator.storage&&navigator.storage.estimate().then(a=>{console.log(a),this.storageUse=this.formatBytes(a.usageDetails.caches)}),"caches"in window){var e=Ke[0].url;fetch(e).then(a=>a.json()).then(a=>{})}},methods:{async download(){"caches"in window&&(this.downloading=!0,this.downloadProgress=0,this.worker=new Worker("./downloader.js"),this.worker.onmessage=e=>{console.log(e),e.data.kind=="PROGRESS"?(this.downloadProgress+=e.data.progress,navigator.storage&&navigator.storage.estimate().then(a=>{this.storageUse=this.formatBytes(a.usageDetails.caches)})):(this.downloadProgress=0,this.downloading=!1,e.data.kind!=="SUCCESS"&&(this.downloadError=!0))})},async persist(){return await navigator.storage&&navigator.storage.persist&&navigator.storage.persist()},formatBytes(e,a=2){if(e===0||!e)return null;const s=1024,t=a<0?0:a,i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(s));return parseFloat((e/Math.pow(s,n)).toFixed(t))+" "+i[n]}},unmount(){this.worker&&this.worker.terminate()},data:()=>({settings:[],storageUse:null,downloading:!1,downloadProgress:0,downloadError:!1,logs:""})};function Ye(e,a,s,t,i,n){const u=re,d=Ve("v-list-item-group");return L(),ke("div",null,[o(u,{title:"Settings"}),o(be,{justify:"center",align:"center"},{default:r(()=>[o(we,{cols:"12",sm:"8",md:"6"},{default:r(()=>[o(Me,{lines:"three"},{default:r(()=>[o(Re,null,{default:r(()=>[m("Data management")]),_:1}),o(d,{modelValue:e.settings,"onUpdate:modelValue":a[2]||(a[2]=l=>e.settings=l),multiple:""},{default:r(()=>[o(z,{onClick:a[0]||(a[0]=l=>n.download())},{default:r(({active:l})=>[o(H,null,{default:r(()=>[m("Download Offline Tiles")]),_:1}),e.storageUse?(L(),N(O,{key:0},{default:r(()=>[m(" Caches: "+j(e.storageUse),1)]),_:1})):I("",!0),o(Ne,null,{default:r(()=>[e.downloading?(L(),N(_e,{key:0,value:e.downloadProgress},null,8,["value"])):I("",!0)]),_:1})]),_:1}),o(z,{onClick:a[1]||(a[1]=l=>n.persist())},{default:r(()=>[o(H,null,{default:r(()=>[m("Try persist database")]),_:1}),o(O,null,{default:r(()=>[m("Ask your browser to keep your data in this application as much as possible. Useful if your device runs out on storage space.")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),I("",!0),m(" "+j(e.logs),1)]),_:1})]),_:1}),o(Ge,{modelValue:e.downloadError,"onUpdate:modelValue":a[3]||(a[3]=l=>e.downloadError=l)},{default:r(()=>[m(" Something went wrong. Try again later. ")]),_:1},8,["modelValue"])])}const st=ye(qe,[["render",Ye]]);export{st as default};
