import{d as C,r as b,f as _,a as f,b as x,e as a,h as o,l as d}from"./vendor-e419f654.js";const u=24,s=5,y=C({__name:"table-pagination",setup(v){const l={Column_1:Symbol("Column 1"),Column_2:Symbol("Column 2"),Column_3:Symbol("Column 3")},r={thead:[l.Column_1,l.Column_2,l.Column_3],tbody:[]},e=b(1);for(let t=1;t<=u;t++)r.tbody.push({key:t,[l.Column_1]:`1-${t}`,[l.Column_2]:`2-${t}`,[l.Column_3]:`3-${t}`});return(t,n)=>{const m=_("ex-button"),p=_("ex-flex"),i=_("ex-table");return f(),x(p,{vertical:""},{default:a(()=>[o(p,null,{default:a(()=>[o(m,{type:"primary",onClick:n[0]||(n[0]=c=>e.value--),disabled:e.value===1},{default:a(()=>[d("last page")]),_:1},8,["disabled"]),o(m,{type:"primary",onClick:n[1]||(n[1]=c=>e.value++),disabled:e.value===Math.ceil(u/s)},{default:a(()=>[d("next page")]),_:1},8,["disabled"])]),_:1}),o(i,{data:r,"current-page":e.value,"page-size":s,title:`${(e.value-1)*s+1}~${Math.min(e.value*s,u)}/${u}, current page: ${e.value}`},null,8,["current-page","title"])]),_:1})}}});export{y as default};