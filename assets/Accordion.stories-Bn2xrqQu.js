import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as I,e as T}from"./iframe-BrP2Cd0t.js";import{c as t,n as d}from"./colors-Cf755qi4.js";import{B as j}from"./Box-CAefuGTT.js";import{T as _}from"./Text-B-YjTJ7F.js";import{s as l}from"./spacing-CXxPM5Gd.js";import{t as a}from"./typography-CGyrGtcf.js";import{c as w}from"./createLucideIcon-DxZg4fAk.js";import"./radii-D7JxPC8t.js";/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],S=w("chevron-down",F);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],N=w("chevron-up",B),P=d(j)`
  display: flex;
  flex-direction: column;
  gap: ${({gap:c})=>l[c]};
`,E=d("button")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-family: ${a.fonts.base};
  font-size: ${a.sizes.body};
  font-weight: ${a.weights.medium};
  color: ${t.text};
  background-color: transparent;
  border: none;
  padding: ${l[3]} 0;
  cursor: pointer;
  border-bottom: 1px solid ${t.border};
  transition: color 0.2s ease;

  &:hover {
    color: ${t["color-primary-crimson-red"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,H=d(j)`
  padding: ${l[3]} 0;
  color: ${t.text};
  font-size: ${a.sizes.body};
  line-height: ${a.lineHeights.normal};
  /* Optional: add subtle animation */
  transition: all 0.2s ease-in-out;
`,L=({items:c,defaultOpenId:O,gap:A=3,ariaLabel:C,ariaDescribedBy:k})=>{const[v,z]=I.useState(O??""),D=e=>{z(r=>r===e?"":e)};return o.jsx(P,{gap:A,role:"region","aria-label":C,"aria-describedby":k,children:c.map(e=>{const r=v===e.id;return o.jsxs(T.Fragment,{children:[o.jsxs(E,{type:"button",expanded:r,onClick:()=>D(e.id),"aria-expanded":r,"aria-controls":`accordion-panel-${e.id}`,id:`accordion-header-${e.id}`,"aria-label":`Toggle ${e.title}`,children:[o.jsx(_,{as:"span",children:e.title}),r?o.jsx(N,{size:20,color:t["color-primary-crimson-red"]}):o.jsx(S,{size:20,color:t["color-primary-crimson-red"]})]}),r&&o.jsx(H,{role:"region",id:`accordion-panel-${e.id}`,"aria-labelledby":`accordion-header-${e.id}`,children:e.content})]},e.id)})})},p={title:"Components/Accordion",component:L,tags:["autodocs"],args:{items:[{id:"one",title:"What is Fender Play?",content:"Fender Play is an online platform to learn guitar, bass, and ukulele."},{id:"two",title:"How to start?",content:"Choose your instrument and follow the lessons step by step."},{id:"three",title:"Membership?",content:"Membership gives you access to all lessons and practice tools."}],defaultOpenId:"one",gap:3,ariaLabel:"Frequently Asked Questions",ariaDescribedBy:void 0},argTypes:{items:{control:"object"},gap:{control:{type:"select"},options:[0,1,2,3,4,5,6]},defaultOpenId:{control:"text"},ariaLabel:{control:"text"},ariaDescribedBy:{control:"text"}},parameters:{docs:{description:{component:"The `Accordion` component displays collapsible content sections. Only one section is open at a time. Accessible and keyboard-friendly — ready for Fender Play! 🎸"}}}},n={args:{...p.args}},s={args:{...p.args,defaultOpenId:""}},i={args:{...p.args,gap:4}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...meta.args
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    defaultOpenId: ''
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,x,$;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    gap: 4
  }
}`,...($=(x=i.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const V=["Default","NoDefaultOpen","CustomGap"];export{i as CustomGap,n as Default,s as NoDefaultOpen,V as __namedExportsOrder,p as default};
