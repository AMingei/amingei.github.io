import{d as u,r as d,b as l,o as p,e as _,w as o,f as n,a as s,t as i}from"./index-52b06097.js";const c=s("label",{for:"example-1"},"数字输入",-1),f={style:{height:"1.5em","padding-left":".5em"}},v=u({__name:"number",setup(x){const e=d();return(b,t)=>{const r=l("ex-number"),a=l("ex-flex");return p(),_(a,{style:{"align-items":"baseline"},width:"50%"},{default:o(()=>[c,n(a,{style:{flex:"auto"},vertical:""},{default:o(()=>[n(r,{id:"example-1",placeholder:"Please input number...",modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=m=>e.value=m)},null,8,["modelValue"]),s("span",f,i(e.value),1)]),_:1})]),_:1})}}});export{v as default};