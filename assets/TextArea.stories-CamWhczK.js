import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{c as e,n as j}from"./colors-CVEax6ej.js";import{t as i}from"./typography-CGyrGtcf.js";import{s as p}from"./spacing-CXxPM5Gd.js";import{r as z}from"./iframe-BZ8tIeOt.js";const k=j("textarea")`
  width: 100%;
  min-height: 120px; /* make taller by default */
  font-family: ${i.fonts.base};
  font-size: ${i.sizes.body};
  padding: ${p[2]} 0 ${p[2]} 0;
  border: none;
  border-bottom: 2px solid
    ${({tone:r})=>r==="error"?e.error:r==="success"?e.success:e.black};
  background-color: transparent;
  color: ${e.text};
  line-height: ${i.lineHeights.normal};
  outline: none;
  resize: vertical; /* allow user to resize vertically */

  &:disabled {
    color: ${e["color-neutral-2"]};
    border-bottom: 2px solid ${e["color-neutral-2"]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${e["color-neutral-3"]};
  }

  &:disabled::placeholder {
    color: ${e["color-neutral-2"]};
  }
`,A=({tone:r="default",disabled:n=!1,role:c,"aria-label":d,"aria-describedby":E,"aria-hidden":W,...v})=>w.jsx(k,{tone:r,disabled:n,role:c,"aria-label":d,"aria-describedby":E,"aria-hidden":W,"aria-invalid":r==="error",...v}),C={title:"Form/TextArea",component:A,tags:["autodocs"],args:{placeholder:"Enter your message...",tone:"default",disabled:!1},argTypes:{tone:{control:{type:"select"},options:["default","error","success"]},placeholder:{control:"text"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:"The `TextArea` component displays a multi-line text field with a single bottom border line. It supports tone (`default`, `error`, `success`), disabled state, full ARIA accessibility — consistent with the Riff DS `TextInput` and `Select`. 🎸✨"}}}},l=r=>{const[n,c]=z.useState("");return w.jsx(A,{...r,value:n,onChange:d=>c(d.target.value)})},a={render:l},s={args:{tone:"error",placeholder:"Please enter your message."},render:l},o={args:{tone:"success",placeholder:"Great message! 🎸"},render:l},t={args:{disabled:!0,placeholder:"Disabled textarea"},render:l};var u,m,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var h,g,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tone: 'error',
    placeholder: 'Please enter your message.'
  },
  render: Template
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,y,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    placeholder: 'Great message! 🎸'
  },
  render: Template
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,$,D;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled textarea'
  },
  render: Template
}`,...(D=($=t.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const F=["Default","WithError","WithSuccess","WithDisabled"];export{a as Default,t as WithDisabled,s as WithError,o as WithSuccess,F as __namedExportsOrder,C as default};
