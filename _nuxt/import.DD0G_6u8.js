import{_ as $}from"./Toolbar.SyTgNAG-.js";import{u as M}from"./ImportStore.SGARuJ_5.js";import{L as h,M as T,N as D,O as A,P as I,z as a,Q as Y,R as j,S as z,T as G,U as O,V as x,_ as Q,v as B,W as i,A as n,X as c,i as P,t as o,B as u,Y as U,Z as W,x as X,y as p}from"./entry.DdhUEr0K.js";import{c as Z,m as H,a as J,b as K,d as ee,e as te,f as ae,u as ne,g as se,h as oe,i as re,j as le,k as ie,V as ce,l as S}from"./index.Bz74hZy1.js";import{m as ue,a as de,u as me,b as ve,V as _e,c as ye}from"./VSpacer.DxsQY8Kh.js";import{V as ke,a as Ve,b as fe,c as ge,d as be}from"./VList.BRdpvtPk.js";import{V as Ce}from"./VContainer.D8yR9xwI.js";import"./dexie.D-7-Z1O5.js";const xe=h({color:String,density:String,...T()},"VBannerActions"),Be=D()({name:"VBannerActions",props:xe(),setup(e,l){let{slots:t}=l;return A({VBtn:{color:e.color,density:e.density,slim:!0,variant:"text"}}),I(()=>{var s;return a("div",{class:["v-banner-actions",e.class],style:e.style},[(s=t.default)==null?void 0:s.call(t)])}),{}}}),L=Z("v-banner-text"),Pe=h({avatar:String,bgColor:String,color:String,icon:Y,lines:String,stacked:Boolean,sticky:Boolean,text:String,...H(),...T(),...J(),...K(),...j(),...ee(),...ue(),...de(),...te(),...ae(),...z()},"VBanner"),pe=D()({name:"VBanner",props:Pe(),setup(e,l){let{slots:t}=l;const{backgroundColorClasses:s,backgroundColorStyles:V}=ne(e,"bgColor"),{borderClasses:f}=se(e),{densityClasses:d}=oe(e),{displayClasses:m,mobile:v}=G(e),{dimensionStyles:r}=re(e),{elevationClasses:_}=le(e),{locationStyles:q}=me(e),{positionClasses:N}=ve(e),{roundedClasses:R}=ie(e),{themeClasses:w}=O(e),y=x(e,"color"),k=x(e,"density");A({VBannerActions:{color:y,density:k}}),I(()=>{const E=!!(e.text||t.text),g=!!(e.avatar||e.icon),F=!!(g||t.prepend);return a(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||v.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},w.value,s.value,f.value,d.value,m.value,_.value,N.value,R.value,e.class],style:[V.value,r.value,q.value,e.style],role:"banner"},{default:()=>{var b;return[F&&a("div",{key:"prepend",class:"v-banner__prepend"},[t.prepend?a(ce,{key:"prepend-defaults",disabled:!g,defaults:{VAvatar:{color:y.value,density:k.value,icon:e.icon,image:e.avatar}}},t.prepend):a(ke,{key:"prepend-avatar",color:y.value,density:k.value,icon:e.icon,image:e.avatar},null)]),a("div",{class:"v-banner__content"},[E&&a(L,{key:"text"},{default:()=>{var C;return[((C=t.text)==null?void 0:C.call(t))??e.text]}}),(b=t.default)==null?void 0:b.call(t)]),t.actions&&a(Be,{key:"actions"},t.actions)]}})})}}),Se={setup(){const e=M(),{queue:l}=e;return e.startImport(),{queue:l}}},he=X("br",null,null,-1);function Te(e,l,t,s,V,f){const d=$,m=P("v-list-item-icon"),v=P("v-list-item-content");return o(),B("div",null,[a(d,{title:"Import"}),s.queue.length==0?(o(),i(pe,{key:0,icon:"$warning",color:"warning",class:"my-4"},{actions:n(()=>[a(_e,{to:"route/"},{default:n(()=>[u("Go")]),_:1})]),default:n(()=>[a(L,null,{default:n(()=>[u(" Your import queue is empty. "),he,u(" Start by importing files from the routes page. ")]),_:1})]),_:1})):c("",!0),a(Ce,null,{default:n(()=>[s.queue?(o(),i(Ve,{key:0},{default:n(()=>[(o(!0),B(U,null,W(s.queue,(r,_)=>(o(),i(fe,{key:_},{default:n(()=>[a(m,null,{default:n(()=>[r.loading?(o(),i(ye,{key:0,indeterminate:"",color:"primary"})):c("",!0),r.error?(o(),i(S,{key:1,color:"error"},{default:n(()=>[u("mdi-alert-circle")]),_:1})):c("",!0),r.success?(o(),i(S,{key:2,color:"secondary"},{default:n(()=>[u("mdi-check")]),_:1})):c("",!0)]),_:2},1024),a(v,null,{default:n(()=>[a(ge,{textContent:p(r.text)},null,8,["textContent"]),a(be,{textContent:p(r.subText)},null,8,["textContent"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):c("",!0)]),_:1})])}const Ee=Q(Se,[["render",Te]]);export{Ee as default};
