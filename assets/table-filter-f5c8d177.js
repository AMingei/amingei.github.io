import{d as p,r as b,b as r,o as f,e as m,w as n,f as i,g as s}from"./index-52b06097.js";const k=p({__name:"table-filter",setup(S){const l=b(),e={Unit:Symbol("Unit"),Strength:Symbol("Strength"),Agility:Symbol("Agility"),Intelligence:Symbol("Intelligence"),HitPoints:Symbol("Hit Points"),Mana:Symbol("Mana")},c={thead:[{key:1,[e.Unit]:{id:e.Unit,label:e.Unit.description,rowspan:3,order:1},[e.Strength]:{label:"Attributes",colspan:5}},{key:2,[e.Strength]:{label:"Base",colspan:3},[e.HitPoints]:{id:e.HitPoints,label:e.HitPoints.description,rowspan:2,order:5},[e.Mana]:{id:e.Mana,label:e.Mana.description,rowspan:2,order:6}},{key:3,[e.Strength]:{id:e.Strength,label:e.Strength.description,order:2},[e.Agility]:{id:e.Agility,label:e.Agility.description,order:3},[e.Intelligence]:{id:e.Intelligence,label:e.Intelligence.description,order:4}}],tbody:[{key:0,[e.Unit]:"Paladin",[e.Strength]:46,[e.Agility]:26,[e.Intelligence]:33,[e.HitPoints]:1250,[e.Mana]:495},{key:1,[e.Unit]:"Archmage",[e.Strength]:30,[e.Agility]:26,[e.Intelligence]:47,[e.HitPoints]:850,[e.Mana]:705},{key:2,[e.Unit]:"Mountain King",[e.Strength]:51,[e.Agility]:24,[e.Intelligence]:28,[e.HitPoints]:1375,[e.Mana]:420},{key:3,[e.Unit]:"Blood Mage",[e.Strength]:36,[e.Agility]:23,[e.Intelligence]:46,[e.HitPoints]:1e3,[e.Mana]:690}]};return(u,t)=>{const o=r("ex-button"),g=r("ex-flex"),y=r("ex-table");return f(),m(g,{vertical:""},{default:n(()=>[i(g,null,{default:n(()=>[i(o,{type:"primary",onClick:t[0]||(t[0]=d=>l.value.filter(a=>a[e.Strength]>30))},{default:n(()=>[s(" Strength > 30 ")]),_:1}),i(o,{type:"primary",onClick:t[1]||(t[1]=d=>l.value.filter(a=>a[e.Intelligence]>30))},{default:n(()=>[s(" Intelligence > 30 ")]),_:1}),i(o,{type:"primary",onClick:t[2]||(t[2]=d=>l.value.filter())},{default:n(()=>[s(" reset ")]),_:1})]),_:1}),i(y,{data:c,border:"both",ref_key:"table",ref:l},null,512)]),_:1})}}});export{k as default};
