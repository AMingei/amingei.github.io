import{e as p,o as a,g as i,d as r,F as y,k as C,n as x,l as k,t as w,p as h,j as u,_ as m,f as I,m as b,q as N,r as R,a as d,w as S,c as _,s as $,K as B}from"./index-804729dc.js";const L=t=>(h("data-v-27c57193"),t=t(),u(),t),M={class:"right-aside"},A=L(()=>r("li",null,"contents",-1)),U=["href"],H=p({__name:"RightAside",props:{anchors:{}},setup(t){const o=t;return(c,l)=>(a(),i("aside",M,[r("ul",null,[A,(a(!0),i(y,null,C(o.anchors,n=>(a(),i("li",{class:x({subtitle:n.type}),style:k({marginLeft:`${Math.max(n.type-1,0)}rem`,paddingLeft:`${n.type?1:0}rem`})},[r("a",{href:n.hash,class:"undec-router-link"},w(n.text),9,U)],6))),256))])]))}});const q=m(H,[["__scopeId","data-v-27c57193"]]),f=t=>(h("data-v-b63ed4c5"),t=t(),u(),t),z=f(()=>r("div",{class:"before"},null,-1)),D=f(()=>r("div",{class:"after"},null,-1)),F=p({__name:"MainContent",setup(t){const o=I(),c=b([]),l=N(()=>c.reduce((s,e)=>(s.push({type:Number(e.tagName.slice(-1))-1,text:e.textContent,hash:`#${e.id}`}),s),[]));function n(){if(o.value){c.length=0;const s=o.value.querySelector(".markdown-body");if(s)for(const e of s.children)/H[1-6]/g.test(e.tagName)?(e.id=encodeURI(e.textContent),c.push(e)):/P/g.test(e.tagName)&&e.children[0]&&/H[1-6]/g.test(e.children[0].tagName)&&(e.children[0].id=encodeURI(e.children[0].textContent),c.push(e.children[0]))}}return(s,e)=>{const g=R("router-view");return a(),i("main",{ref_key:"mainContentRef",ref:o,class:"main-content"},[z,d(g,{onUpdateContent:n},{default:S(({Component:v})=>[(a(),_(B,null,[(a(),_($(v)))],1024))]),_:1}),D,d(q,{anchors:l.value},null,8,["anchors"])],512)}}});const V=m(F,[["__scopeId","data-v-b63ed4c5"]]);export{V as M};
