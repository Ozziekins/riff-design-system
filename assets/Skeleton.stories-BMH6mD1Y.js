import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{c as t,n as $}from"./colors-HpnkfyAE.js";import{B as v}from"./Box-CEmfvZ1f.js";import{r as B}from"./radii-D7JxPC8t.js";import"./iframe-DMWMegoo.js";import"./spacing-CXxPM5Gd.js";import"./borders-DKG7WGak.js";const C=$(v)`
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  border-radius: ${({$borderRadius:e})=>B[e]};
  background-color: ${t.skeletonBase};
  animation: skeleton-loading 1.2s infinite ease-in-out;

  @keyframes skeleton-loading {
    0% {
      background-color: ${t.skeletonBase};
    }
    50% {
      background-color: ${t.skeletonHighlight};
    }
    100% {
      background-color: ${t.skeletonBase};
    }
  }
`,T=({width:e="100%",height:f="16px",variant:c="rect",role:b,"aria-label":S,"aria-describedby":w})=>{let s=e,n=f,i="sm";return c==="circle"?(s=e==="100%"?"40px":e,n=s,i="full"):c==="text"&&(n="1em",i="sm"),y.jsx(C,{backgroundColor:"skeletonBase",$width:s,$height:n,$borderRadius:i,role:b??"presentation","aria-hidden":"true","aria-label":S,"aria-describedby":w})},O={title:"Components/Skeleton",component:T,tags:["autodocs"],args:{width:"100%",height:"16px",variant:"rect"},argTypes:{variant:{control:{type:"select"},options:["rect","circle","text"]},width:{control:"text"},height:{control:"text"}},parameters:{docs:{description:{component:"The `Skeleton` component provides a lightweight loading placeholder while content is being fetched. Use it to create smoother transitions in your app — keep players engaged while the next riff loads! 🎵✨"}}}},r={args:{}},o={args:{variant:"circle",width:"48px"}},a={args:{variant:"text",width:"80%"}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '48px'
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,k,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '80%'
  }
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const U=["Default","Circle","TextSkeleton"];export{o as Circle,r as Default,a as TextSkeleton,U as __namedExportsOrder,O as default};
