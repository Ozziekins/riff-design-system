import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{n as j}from"./emotion-styled.browser.esm-CAKTqAiw.js";import{B as T}from"./Box-B7KEHrde.js";import{T as W}from"./Text-Chyu72Aq.js";import{s as R}from"./spacing-CXxPM5Gd.js";import{r as i}from"./iframe-CaYYB5Wd.js";import"./colors-1P3P2RfF.js";import"./radii-D7JxPC8t.js";import"./typography-DRdEHkvb.js";const w=j(T)`
  display: flex;
  flex-direction: column;
  gap: ${({gap:e})=>R[e]};
`,O=j("label")`
  display: flex;
  align-items: center;
  gap: ${R[2]};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,o=({name:e,options:r,selectedValue:a,onChange:s,gap:k=2,tone:$="default",ariaLabel:B,ariaLabelledBy:E,ariaDescribedBy:D})=>l.jsx(w,{role:"radiogroup",gap:k,"aria-label":B,"aria-labelledby":E,"aria-describedby":D,children:r.map(t=>{const p=`${e}-${t.value}`;return l.jsxs(O,{htmlFor:p,disabled:t.disabled,children:[l.jsx("input",{type:"radio",id:p,name:e,value:t.value,checked:a===t.value,onChange:()=>s(t.value),"aria-checked":a===t.value,disabled:t.disabled}),l.jsx(W,{as:"span",color:t.disabled?"color-neutral-3":$==="error"?"error":"text",children:t.label})]},t.value)})}),J={title:"Form/RadioGroup",component:o,tags:["autodocs"],args:{name:"instrument",options:[{value:"guitar",label:"Guitar"},{value:"bass",label:"Bass"},{value:"ukulele",label:"Ukulele",disabled:!0}],selectedValue:"guitar",gap:2,tone:"default",onChange:void 0},argTypes:{gap:{control:{type:"select"},options:[0,1,2,3,4,5,6]},tone:{control:{type:"select"},options:["default","error"]},selectedValue:{control:"text"},name:{control:"text"}},parameters:{docs:{description:{component:"The `RadioGroup` component allows users to select a single option from a list. It supports spacing (`gap`), tone (`default` or `error`), and disabled options — perfect for building interactive forms in your app! 🎵✨"}}}},n={render:e=>{const[r,a]=i.useState(e.selectedValue);return l.jsx(o,{...e,selectedValue:r,onChange:s=>a(s)})}},d={render:e=>{const[r,a]=i.useState(e.selectedValue);return l.jsx(o,{...e,tone:"error",selectedValue:r,onChange:s=>a(s)})}},u={render:e=>{const[r,a]=i.useState(e.selectedValue);return l.jsx(o,{...e,options:[{value:"guitar",label:"Guitar"},{value:"bass",label:"Bass",disabled:!0},{value:"ukulele",label:"Ukulele"}],selectedValue:r,onChange:s=>a(s)})}},c={render:e=>{const[r,a]=i.useState(e.selectedValue);return l.jsx(o,{...e,gap:4,selectedValue:r,onChange:s=>a(s)})}};var m,g,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selectedValue);
    return <RadioGroup {...args} selectedValue={selected} onChange={value => setSelected(value)} />;
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,v,h;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selectedValue);
    return <RadioGroup {...args} tone="error" selectedValue={selected} onChange={value => setSelected(value)} />;
  }
}`,...(h=(v=d.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,f,V;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selectedValue);
    return <RadioGroup {...args} options={[{
      value: 'guitar',
      label: 'Guitar'
    }, {
      value: 'bass',
      label: 'Bass',
      disabled: true
    }, {
      value: 'ukulele',
      label: 'Ukulele'
    }]} selectedValue={selected} onChange={value => setSelected(value)} />;
  }
}`,...(V=(f=u.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var y,G,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selectedValue);
    return <RadioGroup {...args} gap={4} selectedValue={selected} onChange={value => setSelected(value)} />;
  }
}`,...(C=(G=c.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};const K=["Default","WithError","WithDisabledOption","CustomGap"];export{c as CustomGap,n as Default,u as WithDisabledOption,d as WithError,K as __namedExportsOrder,J as default};
