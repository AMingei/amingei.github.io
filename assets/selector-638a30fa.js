import{d as p,r,b as t,o as a,e as c,w as o,f as u,c as i,h as b,F as _}from"./index-52b06097.js";const y=p({__name:"selector",setup(f){const d=[{index:0,value:1,label:"第一部 群雄逐鹿",content:[{index:0,value:1,label:"第一集：桃园三结义"},{index:1,value:2,label:"第二集：十常侍乱政"},{index:2,value:3,label:"第三集：董卓霸京师"}]},{index:1,value:2,label:"第二部 赤壁鏖战",content:[{index:0,value:24,label:"第二十四集：跃马檀溪"},{index:1,value:25,label:"第二十五集：刘备求贤"},{index:2,value:26,label:"第二十六集：回马荐诸葛"}]},{index:2,value:3,label:"第三部 三足鼎立",content:[{index:0,value:48,label:"第四十八集：张松献图"},{index:1,value:49,label:"第四十九集：刘备入川"},{index:2,value:50,label:"第五十集：凤雏落坡"}]}],n=r(1),s=r();return(V,l)=>{const x=t("ex-option"),v=t("ex-selector"),m=t("ex-flex");return a(),c(m,{width:"600px"},{default:o(()=>[u(v,{style:{flex:"auto"},modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e)},{default:o(()=>[(a(),i(_,null,b(d,e=>u(x,{key:e.index,value:e.value,label:e.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"]),u(v,{style:{flex:"auto"},modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value=e)},{default:o(()=>[(a(!0),i(_,null,b(d[n.value-1].content,e=>(a(),c(x,{key:e.index,value:e.value,label:e.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})}}});export{y as default};