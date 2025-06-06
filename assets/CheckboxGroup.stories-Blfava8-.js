import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BrP2Cd0t.js";import{B as V}from"./Box-CAefuGTT.js";import{T as G}from"./Text-B-YjTJ7F.js";import{s as S}from"./spacing-CXxPM5Gd.js";import{n as B}from"./colors-Cf755qi4.js";import"./radii-D7JxPC8t.js";import"./typography-CGyrGtcf.js";const D=B(V)`
  display: flex;
  flex-direction: column;
  gap: ${({gap:e})=>S[e]};
`,u=({name:e,options:l,selectedValues:a,onChange:t,gap:f=2,ariaLabel:C,ariaDescribedBy:k})=>{const z=s=>{a.includes(s)?t(a.filter(j=>j!==s)):t([...a,s])};return r.jsx(D,{role:"group",gap:f,"aria-label":C,"aria-describedby":k,children:l.map(s=>r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:S[2],opacity:s.disabled?.6:1,cursor:s.disabled?"not-allowed":"pointer"},children:[r.jsx("input",{type:"checkbox",name:e,value:s.value,checked:a.includes(s.value),onChange:()=>z(s.value),disabled:s.disabled}),r.jsx(G,{as:"span",children:s.label})]},s.value))})},L={title:"Form/CheckboxGroup",component:u,tags:["autodocs"],args:{name:"genres",options:[{value:"rock",label:"Rock"},{value:"jazz",label:"Jazz"},{value:"blues",label:"Blues"},{value:"country",label:"Country",disabled:!0}],selectedValues:["rock"],gap:2,ariaLabel:"Select genres",ariaDescribedBy:void 0,onChange:void 0},argTypes:{gap:{control:{type:"select"},options:[0,1,2,3,4,5,6]},selectedValues:{control:{type:"check"},options:["rock","jazz","blues","country"]},name:{control:"text"},ariaLabel:{control:"text"},ariaDescribedBy:{control:"text"}},parameters:{docs:{description:{component:"The `CheckboxGroup` component allows users to select one or more options from a list. It supports spacing (`gap`), disabled options, and ARIA accessibility — perfect for flexible form controls! 🎸✨"}}}},o={render:e=>{const[l,a]=d.useState(e.selectedValues);return r.jsx(u,{...e,selectedValues:l,onChange:t=>a(t)})}},c={render:e=>{const[l,a]=d.useState(e.selectedValues);return r.jsx(u,{...e,options:[{value:"rock",label:"Rock"},{value:"jazz",label:"Jazz",disabled:!0},{value:"blues",label:"Blues"},{value:"country",label:"Country"}],selectedValues:l,onChange:t=>a(t)})}},n={render:e=>{const[l,a]=d.useState(e.selectedValues);return r.jsx(u,{...e,gap:4,selectedValues:l,onChange:t=>a(t)})}};var i,p,b;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selectedValues);
    return <CheckboxGroup {...args} selectedValues={selected} onChange={values => setSelected(values)} />;
  }
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var m,g,x;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selectedValues);
    return <CheckboxGroup {...args} gap={4} selectedValues={selected} onChange={values => setSelected(values)} />;
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const W=["Default","WithDisabledOption","CustomGap"];export{n as CustomGap,o as Default,c as WithDisabledOption,W as __namedExportsOrder,L as default};
