import{d,f as a,a as r,b as l,e as p,h as t}from"./vendor-e419f654.js";const h=d({__name:"input-feedback",setup(u){const e={pass:"当前用户名可用",fail:"用户名已被占用，请重新选择",judge:"正在检测用户名可用性，请稍候……"},o={isShown:!0,isPassed:!0,isJudging:!1,content:e},n={isShown:!0,isPassed:!1,isJudging:!1,content:e},c={isShown:!0,isPassed:!0,isJudging:!0,content:e};return(f,_)=>{const s=a("ex-input"),i=a("ex-flex");return r(),l(i,{style:{"padding-bottom":"1.75em"},gap:"1.75em",width:"50%",vertical:""},{default:p(()=>[t(s,{placeholder:"请输入用户名",feedback:o}),t(s,{placeholder:"请输入用户名",feedback:n}),t(s,{placeholder:"请输入用户名",feedback:c})]),_:1})}}});export{h as default};
