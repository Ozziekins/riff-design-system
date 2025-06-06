import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{n,c as r}from"./colors-D41WOKj-.js";import{t as l}from"./typography-CGyrGtcf.js";import{s as o}from"./spacing-CXxPM5Gd.js";import{H as F}from"./HelpText-B1i2JR9p.js";import{r as G}from"./iframe-H_yBgsLy.js";import"./Text-BoxIP3Ba.js";const P=n("div")`
  display: flex;
  flex-direction: column;
  gap: ${o[1]};
`,_=n("label")`
  font-family: ${l.fonts.base};
  font-size: ${l.sizes.small};
  color: ${r["color-neutral-4"]};
`,B=n("div")`
  position: relative;
  width: 100%;
`,M=n("select")`
  width: 100%;
  font-family: ${l.fonts.base};
  font-size: ${l.sizes.body};
  padding: ${o[2]} ${o[5]} ${o[2]} ${o[2]};
  border: none;
  border-bottom: 1px solid
    ${({tone:t})=>t==="error"?r.error:t==="success"?r.success:r.border};
  background-color: transparent;
  color: ${r.text};
  line-height: ${l.lineHeights.normal};
  appearance: none;
  cursor: pointer;

  &:disabled {
    color: ${r["color-neutral-3"]};
    border-bottom: 1px solid ${r["color-neutral-2"]};
    cursor: not-allowed;
  }
`,O=n("div")`
  position: absolute;
  right: ${o[2]};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-left: 2px solid ${r.text};
    border-bottom: 2px solid ${r.text};
    transform: rotate(-45deg);
  }
`,z=({label:t,helperText:s,options:u,tone:a="default",placeholder:x,id:A,role:H,"aria-label":L,"aria-describedby":R,"aria-hidden":k,...C})=>{const h=A??`select-${Math.random().toString(36).substr(2,9)}`,f=s?`${h}-helper`:void 0;return e.jsxs(P,{children:[t&&e.jsx(_,{htmlFor:h,children:t}),e.jsxs(B,{children:[e.jsxs(M,{id:h,tone:a,role:H,"aria-label":L,"aria-describedby":f??R,"aria-hidden":k,"aria-invalid":a==="error",...C,children:[x&&e.jsx("option",{value:"",children:x}),u.map(b=>e.jsx("option",{value:b.value,children:b.label},b.value))]}),e.jsx(O,{})]}),s&&e.jsx(F,{id:f,tone:a,children:s})]})},U={title:"Form/Select",component:z,tags:["autodocs"],args:{label:"Lesson Level",placeholder:"Select level",helperText:"",tone:"default",disabled:!1,options:[{value:"beginner",label:"Beginner"},{value:"intermediate",label:"Intermediate"},{value:"advanced",label:"Advanced"}]},argTypes:{tone:{control:{type:"select"},options:["default","error","success"]},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:"The `Select` component displays a dropdown with an optional label and helper text. It supports tone (`default`, `error`, `success`), disabled state, full ARIA accessibility — perfectly consistent with the Riff DS `TextInput`! 🎸✨"}}}},m=t=>{const[s,u]=G.useState("");return e.jsx(z,{...t,value:s,onChange:a=>u(a.target.value)})},c={render:m},i={args:{tone:"error",helperText:"Please select a level."},render:m},d={args:{tone:"success",helperText:"Great choice! 🎸"},render:m},p={args:{disabled:!0,placeholder:"Disabled select"},render:m};var g,v,$;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template
}`,...($=(v=c.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var S,y,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tone: 'error',
    helperText: 'Please select a level.'
  },
  render: Template
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var j,w,W;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    helperText: 'Great choice! 🎸'
  },
  render: Template
}`,...(W=(w=d.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var D,I,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled select'
  },
  render: Template
}`,...(E=(I=p.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const X=["Default","WithError","WithSuccess","WithDisabled"];export{c as Default,p as WithDisabled,i as WithError,d as WithSuccess,X as __namedExportsOrder,U as default};
