import{d as u,r as d,f as l,a as i,b as p,e as o,h as n,i as s,t as _}from"./vendor-e419f654.js";const c=s("label",{for:"example-1"},"数字输入",-1),f={style:{height:"1.5em","padding-left":".5em"}},v=u({__name:"number",setup(x){const e=d();return(b,t)=>{const r=l("ex-number"),a=l("ex-flex");return i(),p(a,{style:{"align-items":"baseline"},width:"50%"},{default:o(()=>[c,n(a,{style:{flex:"auto"},vertical:""},{default:o(()=>[n(r,{id:"example-1",placeholder:"Please input number...",modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=m=>e.value=m)},null,8,["modelValue"]),s("span",f,_(e.value),1)]),_:1})]),_:1})}}});export{v as default};