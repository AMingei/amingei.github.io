import{d as g,r as f,f as s,a as r,b as C,e as n,h as o,l as V,j as p,n as k,F as y,t as B}from"./vendor-e419f654.js";const F={class:"log"},R=g({__name:"number-event",setup($){const c=f(),e=f([]);function i(){e.value.push("focus")}function _(){e.value.push("focusout")}function d(t){e.value.push(`input ${t}`)}function m(t){e.value.push(`change ${t}`)}function v(t){e.value.push(`before-clear ${t}`)}function x(){e.value.push("clear")}return(t,u)=>{const h=s("ex-button"),a=s("ex-flex"),b=s("ex-number");return r(),C(a,{vertical:""},{default:n(()=>[o(a,null,{default:n(()=>[o(h,{type:"primary",onClick:u[0]||(u[0]=l=>e.value.length=0)},{default:n(()=>[V("clear logs")]),_:1})]),_:1}),o(a,{width:"50%"},{default:n(()=>[o(b,{resetable:"",modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=l=>c.value=l),id:"example-event-1",style:{flex:"auto"},onFocus:i,onFocusout:_,onInput:d,onChange:m,onBeforeReset:v,onReset:x},null,8,["modelValue"])]),_:1}),o(a,{wrap:""},{default:n(()=>[(r(!0),p(y,null,k(e.value,l=>(r(),p("code",F,B(l),1))),256))]),_:1})]),_:1})}}});export{R as default};