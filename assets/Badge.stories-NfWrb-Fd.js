import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as m,n as b}from"./colors-CVEax6ej.js";import{B as h}from"./Box-BScyEBd-.js";import{T as w}from"./Text-C97pHmEJ.js";import{s as n}from"./spacing-CXxPM5Gd.js";import{r as B}from"./radii-D7JxPC8t.js";import"./iframe-BZ8tIeOt.js";import"./borders-DKG7WGak.js";import"./typography-CGyrGtcf.js";const j=b(h)`
  display: inline-block;
  background-color: ${({tone:r})=>m.badge[r].background};
  border-radius: ${B.md};
  padding: ${n[0]} ${n[1]};
`,g=({children:r,tone:o="primary",role:y,"aria-label":u,"aria-describedby":f,"aria-hidden":x})=>s.jsx(j,{as:"span",tone:o,role:y,"aria-label":u,"aria-describedby":f,"aria-hidden":x,children:s.jsx(w,{as:"span",fontSize:"caption",fontWeight:"regular",style:{color:m.badge[o].text},children:r})}),_={title:"Display/Badge",component:g,tags:["autodocs"],args:{tone:"primary",children:"New"},argTypes:{tone:{control:{type:"select"},options:["primary","secondary","success","error","warning","info"]},children:{control:"text"}},parameters:{docs:{description:{component:"The `Badge` component displays a small label for status, counts, or new content. Perfect for highlighting new lessons, features, or updates in your app! 🎵✨"}}}},e={args:{}},a={render:()=>s.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["primary","secondary","success","error","warning","info"].map(r=>s.jsx(g,{tone:r,children:r},r))})};var t,i,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map(tone => <Badge key={tone} tone={tone as any}>
          {tone}
        </Badge>)}
    </div>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const z=["Default","AllTones"];export{a as AllTones,e as Default,z as __namedExportsOrder,_ as default};
