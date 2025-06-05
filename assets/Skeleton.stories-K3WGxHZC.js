import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{n as v}from"./emotion-styled.browser.esm-C2e_5qSG.js";import{B}from"./Box-PeCN_qz-.js";import{c as i}from"./colors-1P3P2RfF.js";import"./iframe-CQ6FI9Rb.js";import"./spacing-CXxPM5Gd.js";import"./radii-D7JxPC8t.js";const C=v(B)`
  animation: skeleton-loading 1.2s infinite ease-in-out;

  @keyframes skeleton-loading {
    0% {
      background-color: ${i.skeletonBase};
    }
    50% {
      background-color: ${i.skeletonHighlight};
    }
    100% {
      background-color: ${i.skeletonBase};
    }
  }
`,T=({width:o="100%",height:f="16px",variant:c="rect",role:b,"aria-label":y,"aria-describedby":S})=>{let a=o,s=f,n="sm";return c==="circle"?(a=o==="100%"?"40px":o,s=a,n="full"):c==="text"&&(s="1em",n="sm"),w.jsx(C,{backgroundColor:"skeletonBase",borderRadius:n,style:{width:a,height:s},role:b??"presentation","aria-hidden":"true","aria-label":y,"aria-describedby":S})},K={title:"Components/Skeleton",component:T,tags:["autodocs"],args:{width:"100%",height:"16px",variant:"rect"},argTypes:{variant:{control:{type:"select"},options:["rect","circle","text"]},width:{control:"text"},height:{control:"text"}},parameters:{docs:{description:{component:"The `Skeleton` component provides a lightweight loading placeholder while content is being fetched. Use it to create smoother transitions in your app — keep players engaged while the next riff loads! 🎵✨"}}}},e={args:{}},t={args:{variant:"circle",width:"48px"}},r={args:{variant:"text",width:"80%"}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '48px'
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,x,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '80%'
  }
}`,...(k=(x=r.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const O=["Default","Circle","TextSkeleton"];export{t as Circle,e as Default,r as TextSkeleton,O as __namedExportsOrder,K as default};
