import{d as v,r as _,b as i,o as m,e as g,w as a,a as l,f as t,t as f,x as p,g as x,p as b,j as k,_ as V}from"./index-52b06097.js";const y=s=>(b("data-v-9fcfd9d0"),s=s(),k(),s),S={class:"container"},w=y(()=>l("div",{class:"example-box"},"offset",-1)),I={class:"skidding-box"},$=v({__name:"tooltip-offset",setup(s){const o=_(10),e=_(20);return(h,d)=>{const r=i("ex-tooltip"),u=i("ex-number"),n=i("ex-flex");return m(),g(n,null,{default:a(()=>[l("div",S,[t(r,{title:"阿巴阿巴",placement:"top","trigger-mode":"always",skidding:o.value,distance:e.value},{default:a(()=>[w]),_:1},8,["skidding","distance"]),l("div",I,"skidding "+f(o.value)+"px",1),l("div",{class:"skidding-box-2",style:p({top:`calc(50% - ${e.value+57.8}px)`,bottom:`calc(50% + ${e.value+20-10}px)`,left:`calc(50% + ${o.value-1}px`})},null,4),l("div",{class:"distance-box",style:p({top:"calc(50% - 42px)"})},"distance "+f(e.value)+"px",5),l("div",{class:"distance-box-2",style:p({top:`calc(50% - ${e.value+22}px)`})},null,4)]),t(n,{vertical:""},{default:a(()=>[t(n,null,{default:a(()=>[x(" skidding "),t(u,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=c=>o.value=c),suffix:"px",controller:""},null,8,["modelValue"])]),_:1}),t(n,null,{default:a(()=>[x(" distance "),t(u,{modelValue:e.value,"onUpdate:modelValue":d[1]||(d[1]=c=>e.value=c),suffix:"px",controller:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}});const C=V($,[["__scopeId","data-v-9fcfd9d0"]]);export{C as default};