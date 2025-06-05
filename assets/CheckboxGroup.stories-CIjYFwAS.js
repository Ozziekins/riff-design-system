import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CaYYB5Wd.js";import{B as V}from"./Box-B7KEHrde.js";import{T as G}from"./Text-Chyu72Aq.js";import{s as i}from"./spacing-CXxPM5Gd.js";import"./colors-1P3P2RfF.js";import"./radii-D7JxPC8t.js";import"./emotion-styled.browser.esm-CAKTqAiw.js";import"./typography-DRdEHkvb.js";const u=({name:s,options:l,selectedValues:a,onChange:t,gap:f=2,ariaLabel:C,ariaDescribedBy:k})=>{const z=e=>{a.includes(e)?t(a.filter(j=>j!==e)):t([...a,e])};return r.jsx(V,{role:"group","aria-label":C,"aria-describedby":k,style:{display:"flex",flexDirection:"column",gap:i[f]},children:l.map(e=>r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:i[2],opacity:e.disabled?.6:1,cursor:e.disabled?"not-allowed":"pointer"},children:[r.jsx("input",{type:"checkbox",name:s,value:e.value,checked:a.includes(e.value),onChange:()=>z(e.value),disabled:e.disabled}),r.jsx(G,{as:"span",children:e.label})]},e.value))})},A={title:"Form/CheckboxGroup",component:u,tags:["autodocs"],args:{name:"genres",options:[{value:"rock",label:"Rock"},{value:"jazz",label:"Jazz"},{value:"blues",label:"Blues"},{value:"country",label:"Country",disabled:!0}],selectedValues:["rock"],gap:2,ariaLabel:"Select genres",ariaDescribedBy:void 0,onChange:void 0},argTypes:{gap:{control:{type:"select"},options:[0,1,2,3,4,5,6]},selectedValues:{control:{type:"check"},options:["rock","jazz","blues","country"]},name:{control:"text"},ariaLabel:{control:"text"},ariaDescribedBy:{control:"text"}},parameters:{docs:{description:{component:"The `CheckboxGroup` component allows users to select one or more options from a list. It supports spacing (`gap`), disabled options, and ARIA accessibility — perfect for flexible form controls! 🎸✨"}}}},o={render:s=>{const[l,a]=d.useState(s.selectedValues);return r.jsx(u,{...s,selectedValues:l,onChange:t=>a(t)})}},c={render:s=>{const[l,a]=d.useState(s.selectedValues);return r.jsx(u,{...s,options:[{value:"rock",label:"Rock"},{value:"jazz",label:"Jazz",disabled:!0},{value:"blues",label:"Blues"},{value:"country",label:"Country"}],selectedValues:l,onChange:t=>a(t)})}},n={render:s=>{const[l,a]=d.useState(s.selectedValues);return r.jsx(u,{...s,gap:4,selectedValues:l,onChange:t=>a(t)})}};var p,b,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selectedValues);
    return <CheckboxGroup {...args} selectedValues={selected} onChange={values => setSelected(values)} />;
  }
}`,...(m=(b=o.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var g,x,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selectedValues);
    return <CheckboxGroup {...args} options={[{
      value: 'rock',
      label: 'Rock'
    }, {
      value: 'jazz',
      label: 'Jazz',
      disabled: true
    }, {
      value: 'blues',
      label: 'Blues'
    }, {
      value: 'country',
      label: 'Country'
    }]} selectedValues={selected} onChange={values => setSelected(values)} />;
  }
}`,...(h=(x=c.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,y,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selectedValues);
    return <CheckboxGroup {...args} gap={4} selectedValues={selected} onChange={values => setSelected(values)} />;
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const L=["Default","WithDisabledOption","CustomGap"];export{n as CustomGap,o as Default,c as WithDisabledOption,L as __namedExportsOrder,A as default};
