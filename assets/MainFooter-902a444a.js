import{d as u,r as x,c as C,f as w,a as s,j as i,i as r,G as h,F as m,n as f,t as v,b as y,e as k,$ as b,a0 as A,u as $,P as R,h as g,H as S,Y as L}from"./vendor-e419f654.js";import{_ as p,b as M}from"./index-92da26ad.js";const N={class:"group-title"},B=u({__name:"LeftAside",props:{routes:{}},setup(t){const o=t,a=x(),n=C(()=>a.value?a.value.clientWidth+"px":"");return(c,l)=>{const e=w("router-link");return s(),i("aside",{ref_key:"leftAsideRef",ref:a,class:"left-aside"},[r("div",{class:"before",style:h({width:n.value})},null,4),(s(!0),i(m,null,f(o.routes,d=>(s(),i("ul",null,[r("div",N,v(d.name),1),(s(!0),i(m,null,f(d.routes,_=>(s(),y(e,{to:_.path,class:"undec-router-link"},{default:k(()=>[r("li",null,v(_.meta.name),1)]),_:2},1032,["to"]))),256))]))),256)),r("div",{class:"after",style:h({width:n.value})},null,4)],512)}}});const T=p(B,[["__scopeId","data-v-6da3e06a"]]),F=t=>(b("data-v-88c2128e"),t=t(),A(),t),U={class:"right-aside"},H=F(()=>r("li",null,"目录",-1)),E=["href"],z=u({__name:"RightAside",props:{anchors:{}},setup(t){const o=t;return(a,n)=>(s(),i("aside",U,[r("ul",null,[H,(s(!0),i(m,null,f(o.anchors,c=>(s(),i("li",{class:$({subtitle:c.type}),style:h({paddingLeft:`${Math.max(c.type,0)}rem`})},[r("a",{href:c.hash,class:"undec-router-link"},v(c.text),9,E)],6))),256))])]))}});const D=p(z,[["__scopeId","data-v-88c2128e"]]),P=u({__name:"MainContent",setup(t){const o=x(),a=R([]),n=C(()=>a.reduce((l,e)=>(l.push({type:Number(e.tagName.slice(-1))-1,text:e.textContent,hash:`#${e.id}`}),l),[]));function c(){if(o.value){a.length=0;const l=o.value.querySelector(".markdown-body");if(l)for(const e of l.children)/H[1-6]/g.test(e.tagName)?(e.id=encodeURI(e.textContent),a.push(e)):/P/g.test(e.tagName)&&e.children[0]&&/H[1-6]/g.test(e.children[0].tagName)&&(e.children[0].id=encodeURI(e.children[0].textContent),a.push(e.children[0]))}}return(l,e)=>{const d=w("router-view");return s(),i("main",{ref_key:"mainContentRef",ref:o,class:"main-content"},[g(d,{onUpdateContent:c},{default:k(({Component:_})=>[(s(),y(L,null,[(s(),y(S(_)))],1024))]),_:1}),g(D,{anchors:n.value},null,8,["anchors"])],512)}}});const Y=p(P,[["__scopeId","data-v-7940b759"]]),I=t=>(b("data-v-36311edd"),t=t(),A(),t),V={class:"main-footer"},W=I(()=>r("span",{class:"can-hover"},"Extra UI 0.0.1",-1)),j=I(()=>r("a",{href:"http://ex-ui.site",style:{color:"var(--text-color--link)"}},"ex-ui.site",-1)),q=u({__name:"MainFooter",setup(t){const o=M();async function a(){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText("shihyungming@yeah.net"),o.success("Copied!");else{const n=document.createElement("textarea");n.value="shihyungming@yeah.net",n.style.position="absolute",n.style.left="-999999px",document.body.prepend(n),n.select();try{document.execCommand("copy"),o.success("Copied!")}catch(c){console.error(c),o.warning("Something wrong...")}finally{n.remove()}}}return(n,c)=>(s(),i("footer",V,[W,r("address",{class:"can-hover",onClick:a},"shihyungming@yeah.net"),j]))}});const J=p(q,[["__scopeId","data-v-36311edd"]]);export{T as L,Y as M,J as a};
