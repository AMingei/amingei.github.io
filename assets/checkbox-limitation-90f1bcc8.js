import{d as x,r as p,f as n,a as m,b as d,e,h as o,l as a,t as f}from"./vendor-e419f654.js";const V=x({__name:"checkbox-limitation",setup(i){const u=["魏国"],t=p(u);return(v,c)=>{const l=n("ex-checkbox"),s=n("ex-flex"),_=n("ex-checkbox-group");return m(),d(_,{name:"example-group",modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=r=>t.value=r),value:u,limit:"2"},{default:e(()=>[o(s,null,{default:e(()=>[o(l,{value:"魏国"},{default:e(()=>[a("魏国")]),_:1}),o(l,{value:"蜀国"},{default:e(()=>[a("蜀国")]),_:1}),o(l,{value:"吴国"},{default:e(()=>[a("吴国")]),_:1}),a(" "+f(t.value),1)]),_:1})]),_:1},8,["modelValue"])}}});export{V as default};