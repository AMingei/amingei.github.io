import{d as k,r as f,f as o,a,b as s,e as n,h as u,j as d,n as x,F as r}from"./vendor-e419f654.js";const C=k({__name:"selector-group",setup(V){const _=f(1),b=f(1),c=[{index:0,label:"第一部 群雄逐鹿",content:[{index:0,value:1,label:"第一集：桃园三结义"},{index:1,value:2,label:"第二集：十常侍乱政"},{index:2,value:3,label:"第三集：董卓霸京师"}]},{index:1,label:"第二部 赤壁鏖战",content:[{index:0,value:4,label:"第二十四集：跃马檀溪"},{index:1,value:5,label:"第二十五集：刘备求贤"},{index:2,value:6,label:"第二十六集：回马荐诸葛"}]},{index:2,label:"第三部 三足鼎立",content:[{index:0,value:7,label:"第四十八集：张松献图"},{index:1,value:8,label:"第四十九集：刘备入川"},{index:2,value:9,label:"第五十集：凤雏落坡"}]}];return(y,t)=>{const i=o("ex-option"),v=o("ex-option-group"),p=o("ex-selector"),m=o("ex-flex");return a(),s(m,{width:"600px"},{default:n(()=>[u(p,{style:{flex:"auto"},modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=e=>_.value=e)},{default:n(()=>[(a(),d(r,null,x(c,e=>u(v,{key:e.index},{default:n(()=>[(a(!0),d(r,null,x(e.content,l=>(a(),s(i,{key:l.index,value:l.value,label:l.label},null,8,["value","label"]))),128))]),_:2},1024)),64))]),_:1},8,["modelValue"]),u(p,{style:{flex:"auto"},modelValue:b.value,"onUpdate:modelValue":t[1]||(t[1]=e=>b.value=e)},{default:n(()=>[(a(),d(r,null,x(c,e=>u(v,{key:e.index,label:e.label},{default:n(()=>[(a(!0),d(r,null,x(e.content,l=>(a(),s(i,{key:l.index,value:l.value,label:l.label},null,8,["value","label"]))),128))]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1})}}});export{C as default};
