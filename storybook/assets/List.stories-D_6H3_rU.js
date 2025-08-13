import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as y,n as f}from"./colors-BjsORBRh.js";import{T as x}from"./Text-BCPe3trr.js";import{t as e}from"./typography-CGyrGtcf.js";import{s as j}from"./spacing-CXxPM5Gd.js";import"./iframe-jDtwaOzH.js";const b=f(x)`
  font-size: ${e.sizes.body};
  font-weight: ${e.weights.regular};
  line-height: ${e.lineHeights.normal};
  // font-family: ${e.fonts.base};
  color: ${y.text};
  margin-bottom: ${e.spacing[400]};
  padding-left: ${j[5]};
`,L=({type:l="unordered",children:p,role:m,"aria-label":g,"aria-describedby":h})=>{const u=l==="ordered"?"ol":"ul";return r.jsx(b,{as:u,role:m??"list","aria-label":g,"aria-describedby":h,children:p})},O={title:"Typography/List",component:L,tags:["autodocs"],args:{type:"unordered",children:r.jsxs(r.Fragment,{children:[r.jsx("li",{children:"Warm up your fingers"}),r.jsx("li",{children:"Practice chord transitions"}),r.jsx("li",{children:"Jam to your favorite track"})]})},argTypes:{type:{control:{type:"select"},options:["unordered","ordered"]},children:{control:!1}},parameters:{docs:{description:{component:"The `List` component renders ordered (`ol`) or unordered (`ul`) lists with consistent typography and spacing. Ideal for lesson steps, practice tips, and song breakdowns. 🎵✨"}}}},s={args:{}},t={args:{type:"ordered",children:r.jsxs(r.Fragment,{children:[r.jsx("li",{children:"Pick a song"}),r.jsx("li",{children:"Learn the chords"}),r.jsx("li",{children:"Play along with the track"})]})}};var o,a,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'ordered',
    children: <>
        <li>Pick a song</li>
        <li>Learn the chords</li>
        <li>Play along with the track</li>
      </>
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const z=["Default","OrderedList"];export{s as Default,t as OrderedList,z as __namedExportsOrder,O as default};
