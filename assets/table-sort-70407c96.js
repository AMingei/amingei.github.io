import{d as S,r as c,f as s,a as m,b as u,e as n,h as i,l as r}from"./vendor-e419f654.js";const _=S({__name:"table-sort",setup(f){const l=c(),t={Unit:Symbol("Unit"),Strength:Symbol("Strength"),Agility:Symbol("Agility"),Intelligence:Symbol("Intelligence"),HitPoints:Symbol("Hit Points"),Mana:Symbol("Mana")},y={thead:[{key:1,[t.Unit]:{id:t.Unit,label:t.Unit.description,rowspan:3,order:1},[t.Strength]:{label:"Attributes",colspan:5}},{key:2,[t.Strength]:{label:"Base",colspan:3},[t.HitPoints]:{id:t.HitPoints,label:t.HitPoints.description,rowspan:2,order:5},[t.Mana]:{id:t.Mana,label:t.Mana.description,rowspan:2,order:6}},{key:3,[t.Strength]:{id:t.Strength,label:t.Strength.description,order:2},[t.Agility]:{id:t.Agility,label:t.Agility.description,order:3},[t.Intelligence]:{id:t.Intelligence,label:t.Intelligence.description,order:4}}],tbody:[{key:0,[t.Unit]:"Paladin",[t.Strength]:46,[t.Agility]:26,[t.Intelligence]:33,[t.HitPoints]:1250,[t.Mana]:495},{key:1,[t.Unit]:"Archmage",[t.Strength]:30,[t.Agility]:26,[t.Intelligence]:47,[t.HitPoints]:850,[t.Mana]:705},{key:2,[t.Unit]:"Mountain King",[t.Strength]:51,[t.Agility]:24,[t.Intelligence]:28,[t.HitPoints]:1375,[t.Mana]:420},{key:3,[t.Unit]:"Blood Mage",[t.Strength]:36,[t.Agility]:23,[t.Intelligence]:46,[t.HitPoints]:1e3,[t.Mana]:690}]};return(h,e)=>{const o=s("ex-button"),g=s("ex-flex"),d=s("ex-table");return m(),u(g,{vertical:""},{default:n(()=>[i(g,{wrap:""},{default:n(()=>[i(o,{type:"primary",onClick:e[0]||(e[0]=a=>l.value.sortBy(t.Strength))},{default:n(()=>[r(" Sort by Strength ")]),_:1}),i(o,{type:"primary",onClick:e[1]||(e[1]=a=>l.value.sortToggle(t.Strength))},{default:n(()=>[r(" Toggle by Strength ")]),_:1}),i(o,{type:"primary",onClick:e[2]||(e[2]=a=>l.value.sortBy([t.Agility,t.Strength]))},{default:n(()=>[r(" Sort by Agility, then Strength ")]),_:1}),i(o,{type:"primary",onClick:e[3]||(e[3]=a=>l.value.sortBy((p,b)=>p[t.Unit].length>b[t.Unit].length))},{default:n(()=>[r(" Sort by Unit.leangth ")]),_:1}),i(o,{type:"primary",onClick:e[4]||(e[4]=a=>l.value.resort())},{default:n(()=>[r(" reset ")]),_:1})]),_:1}),i(d,{data:y,border:"both",ref_key:"table",ref:l},null,512)]),_:1})}}});export{_ as default};