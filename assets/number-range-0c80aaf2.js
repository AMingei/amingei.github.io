import{d as p,r as t,f as r,a as V,b as i,e as f,h as u,l as d}from"./vendor-e419f654.js";const c=p({__name:"number-range",setup(x){const a=t(-1/0),n=t(1/0),m=t();return(v,e)=>{const o=r("ex-number"),s=r("ex-flex");return V(),i(s,{width:"60%",gap:".5rem"},{default:f(()=>[u(o,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),style:{width:"6rem"}},null,8,["modelValue"]),d(" ≤ "),u(o,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=l=>m.value=l),range:[a.value,n.value],controller:""},null,8,["modelValue","range"]),d(" ≤ "),u(o,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),style:{width:"6rem"}},null,8,["modelValue"])]),_:1})}}});export{c as default};