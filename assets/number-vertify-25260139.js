import{d as c,r as f,f as a,a as m,j as p,h as s,e as _,i}from"./vendor-e419f654.js";const d=i("label",{for:"example-vertify-1",style:{width:"15%"}},"必填选项",-1),b=i("button",{type:"submit"},"提交",-1),v=c({__name:"number-vertify",setup(x){const o=f("obj");function l(n){const t=o.value.querySelectorAll("input");for(let e of Array.from(t)){e.focus(),e.blur();const r=e.validity;if(r.valueMissing||r.patternMismatch){e.focus();break}}n.preventDefault()}return(n,u)=>{const t=a("ex-number"),e=a("ex-flex");return m(),p("form",{ref_key:"obj",ref:o,onSubmit:l,novalidate:""},[s(e,{width:"50%"},{default:_(()=>[d,s(t,{id:"example-vertify-1",style:{flex:"auto"},placeholder:"Please input a number...",required:""})]),_:1}),b],544)}}});export{v as default};
