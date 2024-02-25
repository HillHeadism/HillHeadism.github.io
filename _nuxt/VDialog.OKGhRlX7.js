import{N as M,z as n,b2 as J,af as xe,L as E,M as O,O as Fe,P as G,Q as F,Z as ne,S as ie,U as ve,c as g,b$ as le,bo as Me,cs as j,co as Le,ca as ce,cC as Re,c7 as fe,aS as va,c8 as he,r as te,bx as K,W as fa,b7 as ma,e as ga,o as ya,cm as Pe,H as X,b3 as De,cz as be,R as ha,T as ba,ch as Ae,ck as Oe,cd as Ge,ci as pa,c6 as ka,V as ee,bU as pe,cn as Ca,cD as Sa,cE as Va}from"./entry.BnpdOWKH.js";import{c as ke,a as me,l as U,V as Y,m as He,b as Ia,d as Ne,e as Ce,s as Ue,f as ge,t as Se,R as je,g as qe,v as We,h as Ve,i as xa,j as Ke,k as Ie,w as Xe,x as Pa,y as Ye,o as Qe,z as Ze,n as Je,M as ea,p as _e,A as Aa,B as _a,C as aa,u as Ba}from"./index.DMUjZW0j.js";import{V as de}from"./VList.CfXI509e.js";import{g as ta,m as wa,a as za,h as na,u as Ea,b as Ta,L as la,i as ia,j as sa,k as $a,l as Fa}from"./VSpacer.BqmXq50x.js";import{b as ae,d as Ma,s as ye,c as La,e as Ra,n as oa,m as Da,f as Oa,a as Be}from"./forwardRefs.gpgpW3rb.js";import{u as Ga}from"./scopeId.JUXDCElC.js";const Ha=E({target:[Object,Array]},"v-dialog-transition"),Na=M()({name:"VDialogTransition",props:Ha(),setup(e,u){let{slots:t}=u;const a={onBeforeEnter(l){l.style.pointerEvents="none",l.style.visibility="hidden"},async onEnter(l,i){var y;await new Promise(h=>requestAnimationFrame(h)),await new Promise(h=>requestAnimationFrame(h)),l.style.visibility="";const{x:o,y:d,sx:s,sy:c,speed:r}=ze(e.target,l),v=ae(l,[{transform:`translate(${o}px, ${d}px) scale(${s}, ${c})`,opacity:0},{}],{duration:225*r,easing:Ma});(y=we(l))==null||y.forEach(h=>{ae(h,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*r,easing:ye})}),v.finished.then(()=>i())},onAfterEnter(l){l.style.removeProperty("pointer-events")},onBeforeLeave(l){l.style.pointerEvents="none"},async onLeave(l,i){var y;await new Promise(h=>requestAnimationFrame(h));const{x:o,y:d,sx:s,sy:c,speed:r}=ze(e.target,l);ae(l,[{},{transform:`translate(${o}px, ${d}px) scale(${s}, ${c})`,opacity:0}],{duration:125*r,easing:La}).finished.then(()=>i()),(y=we(l))==null||y.forEach(h=>{ae(h,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:ye})})},onAfterLeave(l){l.style.removeProperty("pointer-events")}};return()=>e.target?n(xe,J({name:"dialog-transition"},a,{css:!1}),t):n(xe,{name:"dialog-transition"},t)}});function we(e){var t;const u=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return u&&[...u]}function ze(e,u){const t=Ra(e),a=oa(u),[l,i]=getComputedStyle(u).transformOrigin.split(" ").map(C=>parseFloat(C)),[o,d]=getComputedStyle(u).getPropertyValue("--v-overlay-anchor-origin").split(" ");let s=t.left+t.width/2;o==="left"||d==="left"?s-=t.width/2:(o==="right"||d==="right")&&(s+=t.width/2);let c=t.top+t.height/2;o==="top"||d==="top"?c-=t.height/2:(o==="bottom"||d==="bottom")&&(c+=t.height/2);const r=t.width/a.width,v=t.height/a.height,y=Math.max(1,r,v),h=r/y||0,b=v/y||0,I=a.width*a.height/(window.innerWidth*window.innerHeight),f=I>.12?Math.min(1.5,(I-.12)*10+1):1;return{x:s-(l+a.left),y:c-(i+a.top),sx:h,sy:b,speed:f}}const Ua=M()({name:"VCardActions",props:O(),setup(e,u){let{slots:t}=u;return Fe({VBtn:{slim:!0,variant:"text"}}),G(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ja=ke("v-card-subtitle"),qa=ke("v-card-title"),Wa=E({appendAvatar:String,appendIcon:F,prependAvatar:String,prependIcon:F,subtitle:[String,Number],title:[String,Number],...O(),...me()},"VCardItem"),Ka=M()({name:"VCardItem",props:Wa(),setup(e,u){let{slots:t}=u;return G(()=>{var c;const a=!!(e.prependAvatar||e.prependIcon),l=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),o=!!(i||t.append),d=!!(e.title!=null||t.title),s=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[l&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(Y,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(ne,null,[e.prependAvatar&&n(de,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(U,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[d&&n(qa,{key:"title"},{default:()=>{var r;return[((r=t.title)==null?void 0:r.call(t))??e.title]}}),s&&n(ja,{key:"subtitle"},{default:()=>{var r;return[((r=t.subtitle)==null?void 0:r.call(t))??e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(Y,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(ne,null,[e.appendIcon&&n(U,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(de,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Xa=ke("v-card-text"),Ya=E({appendAvatar:String,appendIcon:F,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:F,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...He(),...O(),...me(),...Ia(),...Ne(),...ta(),...wa(),...za(),...Ce(),...Ue(),...ge(),...ie(),...Se({variant:"elevated"})},"VCard"),Vt=M()({name:"VCard",directives:{Ripple:je},props:Ya(),setup(e,u){let{attrs:t,slots:a}=u;const{themeClasses:l}=ve(e),{borderClasses:i}=qe(e),{colorClasses:o,colorStyles:d,variantClasses:s}=We(e),{densityClasses:c}=Ve(e),{dimensionStyles:r}=xa(e),{elevationClasses:v}=Ke(e),{loaderClasses:y}=na(e),{locationStyles:h}=Ea(e),{positionClasses:b}=Ta(e),{roundedClasses:I}=Ie(e),f=Xe(e,t),C=g(()=>e.link!==!1&&f.isLink.value),_=g(()=>!e.disabled&&e.link!==!1&&(e.link||f.isClickable.value));return G(()=>{const S=C.value?"a":e.tag,p=!!(a.title||e.title!=null),x=!!(a.subtitle||e.subtitle!=null),B=p||x,P=!!(a.append||e.appendAvatar||e.appendIcon),A=!!(a.prepend||e.prependAvatar||e.prependIcon),L=!!(a.image||e.image),H=B||A||P,R=!!(a.text||e.text!=null);return le(n(S,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":_.value},l.value,i.value,o.value,c.value,v.value,y.value,b.value,I.value,s.value,e.class],style:[d.value,r.value,h.value,e.style],href:f.href.value,onClick:_.value&&f.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var D;return[L&&n("div",{key:"image",class:"v-card__image"},[a.image?n(Y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(Pa,{key:"image-img",cover:!0,src:e.image},null)]),n(la,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&n(Ka,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),R&&n(Xa,{key:"text"},{default:()=>{var z;return[((z=a.text)==null?void 0:z.call(a))??e.text]}}),(D=a.default)==null?void 0:D.call(a),a.actions&&n(Ua,null,{default:a.actions}),Ye(_.value,"v-card")]}}),[[Me("ripple"),_.value&&e.ripple]])}),{}}}),Qa=E({text:String,onClick:j(),...O(),...ie()},"VLabel"),Za=M()({name:"VLabel",props:Qa(),setup(e,u){let{slots:t}=u;return G(()=>{var a;return n("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(a=t.default)==null?void 0:a.call(t)])}),{}}});function ua(e){const{t:u}=Le();function t(a){let{name:l}=a;const i={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[l],o=e[`onClick:${l}`],d=o&&i?u(`$vuetify.input.${i}`,e.label??""):void 0;return n(U,{icon:e[`${l}Icon`],"aria-label":d,onClick:o},null)}return{InputIcon:t}}const Ja=E({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...O(),...Qe({transition:{component:Ze,leaveAbsolute:!0,group:!0}})},"VMessages"),et=M()({name:"VMessages",props:Ja(),setup(e,u){let{slots:t}=u;const a=g(()=>ce(e.messages)),{textColorClasses:l,textColorStyles:i}=Je(g(()=>e.color));return G(()=>n(ea,{transition:e.transition,tag:"div",class:["v-messages",l.value,e.class],style:[i.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&a.value.map((o,d)=>n("div",{class:"v-messages__message",key:`${d}-${a.value}`},[t.message?t.message({message:o}):o]))]})),{}}}),ra=E({focused:Boolean,"onUpdate:focused":j()},"focus");function at(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Re();const t=fe(e,"focused"),a=g(()=>({[`${u}--focused`]:t.value}));function l(){t.value=!0}function i(){t.value=!1}return{focusClasses:a,isFocused:t,focus:l,blur:i}}const tt=Symbol.for("vuetify:form");function nt(){return va(tt,null)}const lt=E({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...ra()},"validation");function it(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Re(),t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:he();const a=fe(e,"modelValue"),l=g(()=>e.validationValue===void 0?a.value:e.validationValue),i=nt(),o=te([]),d=K(!0),s=g(()=>!!(ce(a.value===""?null:a.value).length||ce(l.value===""?null:l.value).length)),c=g(()=>!!(e.disabled??(i==null?void 0:i.isDisabled.value))),r=g(()=>!!(e.readonly??(i==null?void 0:i.isReadonly.value))),v=g(()=>{var p;return(p=e.errorMessages)!=null&&p.length?ce(e.errorMessages).concat(o.value).slice(0,Math.max(0,+e.maxErrors)):o.value}),y=g(()=>{let p=(e.validateOn??(i==null?void 0:i.validateOn.value))||"input";p==="lazy"&&(p="input lazy");const x=new Set((p==null?void 0:p.split(" "))??[]);return{blur:x.has("blur")||x.has("input"),input:x.has("input"),submit:x.has("submit"),lazy:x.has("lazy")}}),h=g(()=>{var p;return e.error||(p=e.errorMessages)!=null&&p.length?!1:e.rules.length?d.value?o.value.length||y.value.lazy?null:!0:!o.value.length:!0}),b=K(!1),I=g(()=>({[`${u}--error`]:h.value===!1,[`${u}--dirty`]:s.value,[`${u}--disabled`]:c.value,[`${u}--readonly`]:r.value})),f=g(()=>e.name??fa(t));ma(()=>{i==null||i.register({id:f.value,validate:S,reset:C,resetValidation:_})}),ga(()=>{i==null||i.unregister(f.value)}),ya(async()=>{y.value.lazy||await S(!0),i==null||i.update(f.value,h.value,v.value)}),Pe(()=>y.value.input,()=>{X(l,()=>{if(l.value!=null)S();else if(e.focused){const p=X(()=>e.focused,x=>{x||S(),p()})}})}),Pe(()=>y.value.blur,()=>{X(()=>e.focused,p=>{p||S()})}),X([h,v],()=>{i==null||i.update(f.value,h.value,v.value)});function C(){a.value=null,De(_)}function _(){d.value=!0,y.value.lazy?o.value=[]:S(!0)}async function S(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const x=[];b.value=!0;for(const B of e.rules){if(x.length>=+(e.maxErrors??1))break;const A=await(typeof B=="function"?B:()=>B)(l.value);if(A!==!0){if(A!==!1&&typeof A!="string"){console.warn(`${A} is not a valid value. Rule functions must return boolean true or a string.`);continue}x.push(A||"")}}return o.value=x,b.value=!1,d.value=p,o.value}return{errorMessages:v,isDirty:s,isDisabled:c,isReadonly:r,isPristine:d,isValid:h,isValidating:b,reset:C,resetValidation:_,validate:S,validationClasses:I}}const st=E({id:String,appendIcon:F,centerAffix:{type:Boolean,default:!0},prependIcon:F,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":j(),"onClick:append":j(),...O(),...me(),...lt()},"VInput"),It=M()({name:"VInput",props:{...st()},emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:t,slots:a,emit:l}=u;const{densityClasses:i}=Ve(e),{rtlClasses:o}=be(),{InputIcon:d}=ua(e),s=he(),c=g(()=>e.id||`input-${s}`),r=g(()=>`${c.value}-messages`),{errorMessages:v,isDirty:y,isDisabled:h,isReadonly:b,isPristine:I,isValid:f,isValidating:C,reset:_,resetValidation:S,validate:p,validationClasses:x}=it(e,"v-input",c),B=g(()=>({id:c,messagesId:r,isDirty:y,isDisabled:h,isReadonly:b,isPristine:I,isValid:f,isValidating:C,reset:_,resetValidation:S,validate:p})),P=g(()=>{var A;return(A=e.errorMessages)!=null&&A.length||!I.value&&v.value.length?v.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return G(()=>{var D,z,V,w;const A=!!(a.prepend||e.prependIcon),L=!!(a.append||e.appendIcon),H=P.value.length>0,R=!e.hideDetails||e.hideDetails==="auto"&&(H||!!a.details);return n("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},i.value,o.value,x.value,e.class],style:e.style},[A&&n("div",{key:"prepend",class:"v-input__prepend"},[(D=a.prepend)==null?void 0:D.call(a,B.value),e.prependIcon&&n(d,{key:"prepend-icon",name:"prepend"},null)]),a.default&&n("div",{class:"v-input__control"},[(z=a.default)==null?void 0:z.call(a,B.value)]),L&&n("div",{key:"append",class:"v-input__append"},[e.appendIcon&&n(d,{key:"append-icon",name:"append"},null),(V=a.append)==null?void 0:V.call(a,B.value)]),R&&n("div",{class:"v-input__details"},[n(et,{id:r.value,active:H,messages:P.value},{message:a.message}),(w=a.details)==null?void 0:w.call(a,B.value)])])}),{reset:_,resetValidation:S,validate:p,isValid:f,errorMessages:v}}});function Ee(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function Te(e){let{selectedElement:u,containerSize:t,contentSize:a,isRtl:l,currentScrollOffset:i,isHorizontal:o}=e;const d=o?u.clientWidth:u.clientHeight,s=o?u.offsetLeft:u.offsetTop,c=l&&o?a-s-d:s,r=t+i,v=d+c,y=d*.4;return c<=i?i=Math.max(c-y,0):r<=v&&(i=Math.min(i-(r-v-y),a-t)),i}function ot(e){let{selectedElement:u,containerSize:t,contentSize:a,isRtl:l,isHorizontal:i}=e;const o=i?u.clientWidth:u.clientHeight,d=i?u.offsetLeft:u.offsetTop,s=l&&i?a-d-o/2-t/2:d+o/2-t/2;return Math.min(a-t,Math.max(0,s))}const ut=Symbol.for("vuetify:v-slide-group"),ca=E({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ut},nextIcon:{type:F,default:"$next"},prevIcon:{type:F,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...O(),...ha(),...ge(),...ia({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),$e=M()({name:"VSlideGroup",props:ca(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const{isRtl:a}=be(),{displayClasses:l,mobile:i}=ba(e),o=sa(e,e.symbol),d=K(!1),s=K(0),c=K(0),r=K(0),v=g(()=>e.direction==="horizontal"),{resizeRef:y,contentRect:h}=Ae(),{resizeRef:b,contentRect:I}=Ae(),f=g(()=>o.selected.value.length?o.items.value.findIndex(m=>m.id===o.selected.value[0]):-1),C=g(()=>o.selected.value.length?o.items.value.findIndex(m=>m.id===o.selected.value[o.selected.value.length-1]):-1);if(Oe){let m=-1;X(()=>[o.selected.value,h.value,I.value,v.value],()=>{cancelAnimationFrame(m),m=requestAnimationFrame(()=>{if(h.value&&I.value){const k=v.value?"width":"height";c.value=h.value[k],r.value=I.value[k],d.value=c.value+1<r.value}if(f.value>=0&&b.value){const k=b.value.children[C.value];f.value===0||!d.value?s.value=0:e.centerActive?s.value=ot({selectedElement:k,containerSize:c.value,contentSize:r.value,isRtl:a.value,isHorizontal:v.value}):d.value&&(s.value=Te({selectedElement:k,containerSize:c.value,contentSize:r.value,isRtl:a.value,currentScrollOffset:s.value,isHorizontal:v.value}))}})})}const _=K(!1);let S=0,p=0;function x(m){const k=v.value?"clientX":"clientY";p=(a.value&&v.value?-1:1)*s.value,S=m.touches[0][k],_.value=!0}function B(m){if(!d.value)return;const k=v.value?"clientX":"clientY",$=a.value&&v.value?-1:1;s.value=$*(p+S-m.touches[0][k])}function P(m){const k=r.value-c.value;s.value<0||!d.value?s.value=0:s.value>=k&&(s.value=k),_.value=!1}function A(){y.value&&(y.value[v.value?"scrollLeft":"scrollTop"]=0)}const L=K(!1);function H(m){if(L.value=!0,!(!d.value||!b.value)){for(const k of m.composedPath())for(const $ of b.value.children)if($===k){s.value=Te({selectedElement:$,containerSize:c.value,contentSize:r.value,isRtl:a.value,currentScrollOffset:s.value,isHorizontal:v.value});return}}}function R(m){L.value=!1}function D(m){var k;!L.value&&!(m.relatedTarget&&((k=b.value)!=null&&k.contains(m.relatedTarget)))&&V()}function z(m){b.value&&(v.value?m.key==="ArrowRight"?V(a.value?"prev":"next"):m.key==="ArrowLeft"&&V(a.value?"next":"prev"):m.key==="ArrowDown"?V("next"):m.key==="ArrowUp"&&V("prev"),m.key==="Home"?V("first"):m.key==="End"&&V("last"))}function V(m){var k,$,se,oe,ue;if(b.value)if(!m)(k=Ge(b.value)[0])==null||k.focus();else if(m==="next"){const Z=($=b.value.querySelector(":focus"))==null?void 0:$.nextElementSibling;Z?Z.focus():V("first")}else if(m==="prev"){const Z=(se=b.value.querySelector(":focus"))==null?void 0:se.previousElementSibling;Z?Z.focus():V("last")}else m==="first"?(oe=b.value.firstElementChild)==null||oe.focus():m==="last"&&((ue=b.value.lastElementChild)==null||ue.focus())}function w(m){const k=s.value+(m==="prev"?-1:1)*c.value;s.value=pa(k,0,r.value-c.value)}const N=g(()=>{let m=s.value>r.value-c.value?-(r.value-c.value)+Ee(r.value-c.value-s.value):-s.value;s.value<=0&&(m=Ee(-s.value));const k=a.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${k*m}px)`,transition:_.value?"none":"",willChange:_.value?"transform":""}}),T=g(()=>({next:o.next,prev:o.prev,select:o.select,isSelected:o.isSelected})),q=g(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!i.value;case!0:return d.value||Math.abs(s.value)>0;case"mobile":return i.value||d.value||Math.abs(s.value)>0;default:return!i.value&&(d.value||Math.abs(s.value)>0)}}),Q=g(()=>Math.abs(s.value)>0),W=g(()=>r.value>Math.abs(s.value)+c.value);return G(()=>n(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":q.value,"v-slide-group--is-overflowing":d.value},l.value,e.class],style:e.style,tabindex:L.value||o.selected.value.length?-1:0,onFocus:D},{default:()=>{var m,k,$;return[q.value&&n("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Q.value}],onClick:()=>Q.value&&w("prev")},[((m=t.prev)==null?void 0:m.call(t,T.value))??n(_e,null,{default:()=>[n(U,{icon:a.value?e.nextIcon:e.prevIcon},null)]})]),n("div",{key:"container",ref:y,class:"v-slide-group__container",onScroll:A},[n("div",{ref:b,class:"v-slide-group__content",style:N.value,onTouchstartPassive:x,onTouchmovePassive:B,onTouchendPassive:P,onFocusin:H,onFocusout:R,onKeydown:z},[(k=t.default)==null?void 0:k.call(t,T.value)])]),q.value&&n("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!W.value}],onClick:()=>W.value&&w("next")},[(($=t.next)==null?void 0:$.call(t,T.value))??n(_e,null,{default:()=>[n(U,{icon:a.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:o.selected,scrollTo:w,scrollOffset:s,focus:V}}}),da=Symbol.for("vuetify:v-chip-group"),rt=E({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ka},...ca(),...O(),...ia({selectedClass:"v-chip--selected"}),...ge(),...ie(),...Se({variant:"tonal"})},"VChipGroup");M()({name:"VChipGroup",props:rt(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const{themeClasses:a}=ve(e),{isSelected:l,select:i,next:o,prev:d,selected:s}=sa(e,da);return Fe({VChip:{color:ee(e,"color"),disabled:ee(e,"disabled"),filter:ee(e,"filter"),variant:ee(e,"variant")}}),G(()=>{const c=$e.filterProps(e);return n($e,J(c,{class:["v-chip-group",{"v-chip-group--column":e.column},a.value,e.class],style:e.style}),{default:()=>{var r;return[(r=t.default)==null?void 0:r.call(t,{isSelected:l,select:i,next:o,prev:d,selected:s.value})]}})}),{}}});const ct=E({activeClass:String,appendAvatar:String,appendIcon:F,closable:Boolean,closeIcon:{type:F,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:F,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:j(),onClickOnce:j(),...He(),...O(),...me(),...Ne(),...$a(),...Ce(),...Ue(),...Aa(),...ge({tag:"span"}),...ie(),...Se({variant:"tonal"})},"VChip"),xt=M()({name:"VChip",directives:{Ripple:je},props:ct(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,u){let{attrs:t,emit:a,slots:l}=u;const{t:i}=Le(),{borderClasses:o}=qe(e),{colorClasses:d,colorStyles:s,variantClasses:c}=We(e),{densityClasses:r}=Ve(e),{elevationClasses:v}=Ke(e),{roundedClasses:y}=Ie(e),{sizeClasses:h}=_a(e),{themeClasses:b}=ve(e),I=fe(e,"modelValue"),f=Fa(e,da,!1),C=Xe(e,t),_=g(()=>e.link!==!1&&C.isLink.value),S=g(()=>!e.disabled&&e.link!==!1&&(!!f||e.link||C.isClickable.value)),p=g(()=>({"aria-label":i(e.closeLabel),onClick(P){P.stopPropagation(),I.value=!1,a("click:close",P)}}));function x(P){var A;a("click",P),S.value&&((A=C.navigate)==null||A.call(C,P),f==null||f.toggle())}function B(P){(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),x(P))}return()=>{const P=C.isLink.value?"a":e.tag,A=!!(e.appendIcon||e.appendAvatar),L=!!(A||l.append),H=!!(l.close||e.closable),R=!!(l.filter||e.filter)&&f,D=!!(e.prependIcon||e.prependAvatar),z=!!(D||l.prepend),V=!f||f.isSelected.value;return I.value&&le(n(P,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":R,"v-chip--pill":e.pill},b.value,o.value,V?d.value:void 0,r.value,v.value,y.value,h.value,c.value,f==null?void 0:f.selectedClass.value,e.class],style:[V?s.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:C.href.value,tabindex:S.value?0:void 0,onClick:x,onKeydown:S.value&&!_.value&&B},{default:()=>{var w;return[Ye(S.value,"v-chip"),R&&n(aa,{key:"filter"},{default:()=>[le(n("div",{class:"v-chip__filter"},[l.filter?n(Y,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},l.filter):n(U,{key:"filter-icon",icon:e.filterIcon},null)]),[[pe,f.isSelected.value]])]}),z&&n("div",{key:"prepend",class:"v-chip__prepend"},[l.prepend?n(Y,{key:"prepend-defaults",disabled:!D,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},l.prepend):n(ne,null,[e.prependIcon&&n(U,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&n(de,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),n("div",{class:"v-chip__content","data-no-activator":""},[((w=l.default)==null?void 0:w.call(l,{isSelected:f==null?void 0:f.isSelected.value,selectedClass:f==null?void 0:f.selectedClass.value,select:f==null?void 0:f.select,toggle:f==null?void 0:f.toggle,value:f==null?void 0:f.value.value,disabled:e.disabled}))??e.text]),L&&n("div",{key:"append",class:"v-chip__append"},[l.append?n(Y,{key:"append-defaults",disabled:!A,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},l.append):n(ne,null,[e.appendIcon&&n(U,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&n(de,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),H&&n("button",J({key:"close",class:"v-chip__close",type:"button"},p.value),[l.close?n(Y,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},l.close):n(U,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Me("ripple"),S.value&&e.ripple,null]])}}}),dt=E({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...O(),...Qe({transition:{component:Ze}})},"VCounter"),Pt=M()({name:"VCounter",functional:!0,props:dt(),setup(e,u){let{slots:t}=u;const a=g(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return G(()=>n(ea,{transition:e.transition},{default:()=>[le(n("div",{class:["v-counter",e.class],style:e.style},[t.default?t.default({counter:a.value,max:e.max,value:e.value}):a.value]),[[pe,e.active]])]})),{}}}),vt=E({floating:Boolean,...O()},"VFieldLabel"),re=M()({name:"VFieldLabel",props:vt(),setup(e,u){let{slots:t}=u;return G(()=>n(Za,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},t)),{}}}),ft=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],mt=E({appendInnerIcon:F,bgColor:String,clearable:Boolean,clearIcon:{type:F,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:F,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>ft.includes(e)},"onClick:clear":j(),"onClick:appendInner":j(),"onClick:prependInner":j(),...O(),...ta(),...Ce(),...ie()},"VField"),gt=M()({name:"VField",inheritAttrs:!1,props:{id:String,...ra(),...mt()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:t,emit:a,slots:l}=u;const{themeClasses:i}=ve(e),{loaderClasses:o}=na(e),{focusClasses:d,isFocused:s,focus:c,blur:r}=at(e),{InputIcon:v}=ua(e),{roundedClasses:y}=Ie(e),{rtlClasses:h}=be(),b=g(()=>e.dirty||e.active),I=g(()=>!e.singleLine&&!!(e.label||l.label)),f=he(),C=g(()=>e.id||`input-${f}`),_=g(()=>`${C.value}-messages`),S=te(),p=te(),x=te(),B=g(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:P,backgroundColorStyles:A}=Ba(ee(e,"bgColor")),{textColorClasses:L,textColorStyles:H}=Je(g(()=>e.error||e.disabled?void 0:b.value&&s.value?e.color:e.baseColor));X(b,z=>{if(I.value){const V=S.value.$el,w=p.value.$el;requestAnimationFrame(()=>{const N=oa(V),T=w.getBoundingClientRect(),q=T.x-N.x,Q=T.y-N.y-(N.height/2-T.height/2),W=T.width/.75,m=Math.abs(W-N.width)>1?{maxWidth:Ca(W)}:void 0,k=getComputedStyle(V),$=getComputedStyle(w),se=parseFloat(k.transitionDuration)*1e3||150,oe=parseFloat($.getPropertyValue("--v-field-label-scale")),ue=$.getPropertyValue("color");V.style.visibility="visible",w.style.visibility="hidden",ae(V,{transform:`translate(${q}px, ${Q}px) scale(${oe})`,color:ue,...m},{duration:se,easing:ye,direction:z?"normal":"reverse"}).finished.then(()=>{V.style.removeProperty("visibility"),w.style.removeProperty("visibility")})})}},{flush:"post"});const R=g(()=>({isActive:b,isFocused:s,controlRef:x,blur:r,focus:c}));function D(z){z.target!==document.activeElement&&z.preventDefault()}return G(()=>{var q,Q,W;const z=e.variant==="outlined",V=l["prepend-inner"]||e.prependInnerIcon,w=!!(e.clearable||l.clear),N=!!(l["append-inner"]||e.appendInnerIcon||w),T=()=>l.label?l.label({...R.value,label:e.label,props:{for:C.value}}):e.label;return n("div",J({class:["v-field",{"v-field--active":b.value,"v-field--appended":N,"v-field--center-affix":e.centerAffix??!B.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":V,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!T(),[`v-field--variant-${e.variant}`]:!0},i.value,P.value,d.value,o.value,y.value,h.value,e.class],style:[A.value,e.style],onClick:D},t),[n("div",{class:"v-field__overlay"},null),n(la,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:l.loader}),V&&n("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&n(v,{key:"prepend-icon",name:"prependInner"},null),(q=l["prepend-inner"])==null?void 0:q.call(l,R.value)]),n("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&I.value&&n(re,{key:"floating-label",ref:p,class:[L.value],floating:!0,for:C.value,style:H.value},{default:()=>[T()]}),n(re,{ref:S,for:C.value},{default:()=>[T()]}),(Q=l.default)==null?void 0:Q.call(l,{...R.value,props:{id:C.value,class:"v-field__input","aria-describedby":_.value},focus:c,blur:r})]),w&&n(aa,{key:"clear"},{default:()=>[le(n("div",{class:"v-field__clearable",onMousedown:m=>{m.preventDefault(),m.stopPropagation()}},[l.clear?l.clear():n(v,{name:"clear"},null)]),[[pe,e.dirty]])]}),N&&n("div",{key:"append",class:"v-field__append-inner"},[(W=l["append-inner"])==null?void 0:W.call(l,R.value),e.appendInnerIcon&&n(v,{key:"append-icon",name:"appendInner"},null)]),n("div",{class:["v-field__outline",L.value],style:H.value},[z&&n(ne,null,[n("div",{class:"v-field__outline__start"},null),I.value&&n("div",{class:"v-field__outline__notch"},[n(re,{ref:p,floating:!0,for:C.value},{default:()=>[T()]})]),n("div",{class:"v-field__outline__end"},null)]),B.value&&I.value&&n(re,{ref:p,floating:!0,for:C.value},{default:()=>[T()]})])])}),{controlRef:x}}});function At(e){const u=Object.keys(gt.props).filter(t=>!Sa(t)&&t!=="class"&&t!=="style");return Va(e,u)}const yt=E({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Da({origin:"center center",scrollStrategy:"block",transition:{component:Na},zIndex:2400})},"VDialog"),_t=M()({name:"VDialog",props:yt(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const a=fe(e,"modelValue"),{scopeId:l}=Ga(),i=te();function o(s){var v,y;const c=s.relatedTarget,r=s.target;if(c!==r&&((v=i.value)!=null&&v.contentEl)&&((y=i.value)!=null&&y.globalTop)&&![document,i.value.contentEl].includes(r)&&!i.value.contentEl.contains(r)){const h=Ge(i.value.contentEl);if(!h.length)return;const b=h[0],I=h[h.length-1];c===b?I.focus():b.focus()}}Oe&&X(()=>a.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",o):document.removeEventListener("focusin",o)},{immediate:!0}),X(a,async s=>{var c,r;await De(),s?(c=i.value.contentEl)==null||c.focus({preventScroll:!0}):(r=i.value.activatorEl)==null||r.focus({preventScroll:!0})});const d=g(()=>J({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps));return G(()=>{const s=Be.filterProps(e);return n(Be,J({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},s,{modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,"aria-modal":"true",activatorProps:d.value,role:"dialog"},l),{activator:t.activator,default:function(){for(var c=arguments.length,r=new Array(c),v=0;v<c;v++)r[v]=arguments[v];return n(Y,{root:"VDialog"},{default:()=>{var y;return[(y=t.default)==null?void 0:y.call(t,...r)]}})}})}),Oa({},i)}});export{Vt as V,Za as a,Na as b,mt as c,It as d,gt as e,At as f,Pt as g,nt as h,xt as i,qa as j,ja as k,Xa as l,st as m,Ua as n,_t as o,at as u};
