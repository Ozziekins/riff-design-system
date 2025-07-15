import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{B as v}from"./Box-D8uG3F3c.js";import{T as i}from"./Text-KDzUUvnT.js";import"./colors-D6VTWwUG.js";import"./iframe-DCXZWqrD.js";import"./spacing-CXxPM5Gd.js";import"./radii-D7JxPC8t.js";import"./borders-DKG7WGak.js";import"./typography-CGyrGtcf.js";const B={info:{background:"infoBackground",border:"infoBorder",text:"infoText"},success:{background:"successBackground",border:"successBorder",text:"successText"},warning:{background:"warningBackground",border:"warningBorder",text:"warningText"},error:{background:"errorBackground",border:"errorBorder",text:"errorText"}},S=({variant:a="info",title:y,children:w})=>{const r=B[a];return s.jsxs(v,{as:"section",role:"region","aria-label":`${a} callout`,backgroundColor:r.background,borderWidth:"thin",borderColor:r.border,borderRadius:"md",padding:5,margin:5,children:[s.jsx(i,{as:"h3",fontSize:"heading",fontWeight:"bold",color:r.text,marginBottom:3,children:y}),s.jsx(i,{as:"p",fontSize:"body",color:r.text,children:w})]})},q={title:"Components/Callout",component:S,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]},title:{control:"text"},children:{control:"text"}}},e={args:{variant:"info",title:"Need a hand?",children:"Here’s a quick tip to help you get the most out of Riff. You’re doing great!"}},o={args:{variant:"success",title:"Well done!",children:"You’ve completed this step. Keep going — your flow is looking sharp."}},t={args:{variant:"warning",title:"Heads up!",children:"This setting could impact your user experience. Review it carefully."}},n={args:{variant:"error",title:"Something went wrong.",children:"Please check your inputs and try again. If the issue persists, contact support."}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Need a hand?',
    children: 'Here’s a quick tip to help you get the most out of Riff. You’re doing great!'
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,p,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Well done!',
    children: 'You’ve completed this step. Keep going — your flow is looking sharp.'
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,h,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Heads up!',
    children: 'This setting could impact your user experience. Review it carefully.'
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,b,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Something went wrong.',
    children: 'Please check your inputs and try again. If the issue persists, contact support.'
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const z=["Info","Success","Warning","Error"];export{n as Error,e as Info,o as Success,t as Warning,z as __namedExportsOrder,q as default};
