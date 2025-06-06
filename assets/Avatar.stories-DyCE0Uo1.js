import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as d,n as j}from"./colors-D41WOKj-.js";import{B as w}from"./Box-BKInMkhg.js";import"./iframe-H_yBgsLy.js";import"./spacing-CXxPM5Gd.js";import"./radii-D7JxPC8t.js";import"./borders-DKG7WGak.js";const n={sm:"32px",md:"40px",lg:"64px",xl:"96px"},L=j(w)`
  background-color: ${d["color-neutral-1"]}; // fallback background
  border-radius: 50%;
  width: ${({size:a})=>n[a]};
  height: ${({size:a})=>n[a]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({size:a})=>`calc(${n[a]} / 2)`};
  color: ${d["color-neutral-4"]};
`,P=j("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,s=({size:a="md",src:l,alt:c,initials:S,role:$,"aria-label":I,"aria-describedby":M})=>t.jsx(L,{as:"div",size:a,role:$??"img","aria-label":I??(c||"Avatar"),"aria-describedby":M,children:l?t.jsx(P,{src:l,alt:c||"Avatar"}):S}),J={title:"Display/Avatar",component:s,tags:["autodocs"],args:{size:"md",src:void 0,alt:"Fender Player",initials:"FP"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl"]},src:{control:"text"},alt:{control:"text"},initials:{control:"text"}},parameters:{docs:{description:{component:"The `Avatar` component displays a user’s photo or initials. Use it in profiles, comments, and identity elements throughout your app. 🎸✨"}}}},r={args:{}},e={args:{src:"https://i.pravatar.cc/150?img=32",alt:"Guitarist Avatar",initials:void 0}},i={args:{src:void 0,initials:"MJ"}},o={render:()=>t.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[t.jsx(s,{size:"sm",initials:"S"}),t.jsx(s,{size:"md",initials:"M"}),t.jsx(s,{size:"lg",initials:"L"}),t.jsx(s,{size:"xl",initials:"XL"})]})};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,x,v;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=32',
    // demo avatar photo
    alt: 'Guitarist Avatar',
    initials: undefined
  }
}`,...(v=(x=e.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,y,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: undefined,
    initials: 'MJ'
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,A,b;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar size="sm" initials="S" />
      <Avatar size="md" initials="M" />
      <Avatar size="lg" initials="L" />
      <Avatar size="xl" initials="XL" />
    </div>
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const T=["Default","WithPhoto","WithInitials","Sizes"];export{r as Default,o as Sizes,i as WithInitials,e as WithPhoto,T as __namedExportsOrder,J as default};
