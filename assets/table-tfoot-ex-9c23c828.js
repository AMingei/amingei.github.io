import{d as f,P as u,r as b,o as m,w as i,f as v,a as E,b as p}from"./vendor-e419f654.js";const A=f({__name:"table-tfoot-ex",setup(y){const e={Odd:Symbol("Odd numbers"),Eve:Symbol("Even numbers"),Alt:Symbol("Alternate accumulate")},s=u({thead:[e.Odd,e.Eve,e.Alt],tbody:[{key:0,[e.Odd]:1,[e.Eve]:1,[e.Alt]:1},{key:1,[e.Odd]:2,[e.Eve]:2,[e.Alt]:2},{key:2,[e.Odd]:3,[e.Eve]:3,[e.Alt]:3},{key:3,[e.Odd]:4,[e.Eve]:4,[e.Alt]:4},{key:4,[e.Odd]:5,[e.Eve]:5,[e.Alt]:5}],tfoot:[{}]}),c=b();return m(()=>{i(()=>c.value.currentData,d=>{if(d){s.tfoot[0][e.Odd]=d.reduce((l,r)=>{let t=r.cells.find(a=>a.colId===e.Odd).label;return t%2===1?l+`${t} `:l},""),s.tfoot[0][e.Eve]=d.reduce((l,r)=>{let t=r.cells.find(a=>a.colId===e.Eve).label;return t%2===0?l+`${t} `:l},"");let n,o;d.forEach((l,r)=>{let t=l.cells.find(a=>a.colId===e.Eve).label;r===0?(n=`${t}`,o=t):r%2===0?(n+=` + ${t}`,o+=t):(n+=` - ${t}`,o-=t)}),s.tfoot[0][e.Alt]=`${n} = ${o}`}},{immediate:!0})}),(d,n)=>{const o=v("ex-table");return E(),p(o,{data:s,ref_key:"table",ref:c},null,8,["data"])}}});export{A as default};
