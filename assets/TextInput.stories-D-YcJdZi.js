import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{n as b,c as e}from"./colors-Dyo771J8.js";import{t as s}from"./typography-CGyrGtcf.js";import{s as m}from"./spacing-CXxPM5Gd.js";import{H as L}from"./HelpText-MBtkUzuT.js";import{r as A}from"./iframe-DkNAWIFG.js";import"./Text-qTaitRnx.js";const P=b("div")`
  display: flex;
  flex-direction: column;
  gap: ${m[1]};
`,R=b("label")`
  font-family: ${s.fonts.base};
  font-size: ${s.sizes.small};
  color: ${e["color-neutral-4"]};
`,_=b("input")`
  width: 100%;
  font-family: ${s.fonts.base};
  font-size: ${s.sizes.body};
  padding: ${m[2]} 0 ${m[2]} 0;
  border: none;
  border-bottom: 2px solid
    ${({tone:r})=>r==="error"?e.error:r==="success"?e.success:e.black};
  background-color: transparent;
  color: ${e.text};
  line-height: ${s.lineHeights.normal};
  outline: none;

  &:disabled {
    color: ${e["color-neutral-2"]};
    border-bottom: 2px solid ${e["color-neutral-2"]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${e["color-neutral-3"]};
  }
    &:disabled::placeholder {
  color: ${e["color-neutral-1"]};
}
`,E=({label:r,helperText:o,tone:t="default",id:p,role:k,"aria-label":w,"aria-describedby":z,"aria-hidden":F,...H})=>{const u=p??`textinput-${Math.random().toString(36).substr(2,9)}`,h=o?`${u}-helper`:void 0;return a.jsxs(P,{children:[r&&a.jsx(R,{htmlFor:u,children:r}),a.jsx(_,{id:u,tone:t,role:k,"aria-label":w,"aria-describedby":h??z,"aria-hidden":F,"aria-invalid":t==="error",...H}),o&&a.jsx(L,{id:h,tone:t,children:o})]})},G={title:"Form/TextInput",component:E,tags:["autodocs"],args:{label:"First Name",placeholder:"Enter your first name",helperText:"",tone:"default",disabled:!1},argTypes:{tone:{control:{type:"select"},options:["default","error","success"]},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:"The `TextInput` component displays a single-line text field with an optional label and helper text. It supports tone (`default`, `error`, `success`), disabled state, full ARIA accessibility — perfect for modern forms! 🎸✨"}}}},i=r=>{const[o,t]=A.useState("");return a.jsx(E,{...r,value:o,onChange:p=>t(p.target.value)})},n={render:i},l={args:{tone:"error",helperText:"Please enter a valid name."},render:i},c={args:{tone:"success",helperText:"Looks good! 🎸"},render:i},d={args:{disabled:!0,placeholder:"Disabled input"},render:i};var f,x,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var $,y,T;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    tone: 'error',
    helperText: 'Please enter a valid name.'
  },
  render: Template
}`,...(T=(y=l.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,I,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    helperText: 'Looks good! 🎸'
  },
  render: Template
}`,...(j=(I=c.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var v,W,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input'
  },
  render: Template
}`,...(D=(W=d.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const J=["Default","WithError","WithSuccess","WithDisabled"];export{n as Default,d as WithDisabled,l as WithError,c as WithSuccess,J as __namedExportsOrder,G as default};
