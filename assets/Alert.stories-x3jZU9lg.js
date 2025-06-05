import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{n as T}from"./emotion-styled.browser.esm-CAKTqAiw.js";import{B as D}from"./Box-B7KEHrde.js";import{T as j}from"./Text-Chyu72Aq.js";import{c as i}from"./colors-1P3P2RfF.js";import{s as n}from"./spacing-CXxPM5Gd.js";import{r as k}from"./radii-D7JxPC8t.js";import{b as A}from"./borders-DKG7WGak.js";import"./iframe-CaYYB5Wd.js";import"./typography-DRdEHkvb.js";const E=T(D)`
  background-color: ${({variant:r})=>i.alert[r].background};
  border: ${A.thin} solid ${({variant:r})=>i.alert[r].border};
  border-radius: ${k.md};
  padding: ${n[4]} ${n[5]};
  margin: ${n[4]} 0;
`,Y=({children:r,variant:t="info",role:w,"aria-label":S,"aria-describedby":$})=>c.jsx(E,{variant:t,role:w??(t==="error"?"alert":"status"),"aria-label":S,"aria-describedby":$,children:c.jsx(j,{as:"div",fontSize:"body",style:{color:i.alert[t].text},children:r})}),C={title:"Display/Alert",component:Y,tags:["autodocs"],args:{variant:"info",children:"New riffs have been added to your practice playlist! 🎸"},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"]},children:{control:"text"}},parameters:{docs:{description:{component:"The `Alert` component displays important messages and feedback to users. Use different variants (`info`, `success`, `warning`, `error`) to communicate clearly — and keep your players grooving! 🎵✨"}}}},e={args:{}},s={args:{variant:"success",children:"You completed today’s practice session! ✨"}},o={args:{variant:"warning",children:"Your subscription is about to expire. Don’t miss out on new riffs!"}},a={args:{variant:"error",children:"There was an error loading your lessons. Please try again."}};var d,l,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'You completed today’s practice session! ✨'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Your subscription is about to expire. Don’t miss out on new riffs!'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,x,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'There was an error loading your lessons. Please try again.'
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const F=["Default","Success","Warning","Error"];export{e as Default,a as Error,s as Success,o as Warning,F as __namedExportsOrder,C as default};
