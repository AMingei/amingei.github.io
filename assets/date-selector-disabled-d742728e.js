import{d as s,r,f as t,a as u,b as m,e as p,h as n}from"./vendor-e419f654.js";const f=s({__name:"date-selector-disabled",setup(_){const e=r(new Date);return(c,l)=>{const o=t("ex-date-selector"),d=t("ex-flex");return u(),m(d,{width:"290px",vertical:""},{default:p(()=>[n(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a),disabled:""},null,8,["modelValue"]),n(o,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value=a),readonly:""},null,8,["modelValue"])]),_:1})}}});export{f as default};