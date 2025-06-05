import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./iframe-CaYYB5Wd.js";import{n as d}from"./emotion-styled.browser.esm-CAKTqAiw.js";import{B as l}from"./Box-B7KEHrde.js";import{T as I}from"./Text-Chyu72Aq.js";import{s as p}from"./spacing-CXxPM5Gd.js";import{c as t}from"./colors-1P3P2RfF.js";import{t as c}from"./typography-DRdEHkvb.js";import{c as w}from"./createLucideIcon-BVa-5Ebx.js";import"./radii-D7JxPC8t.js";/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],_=w("chevron-down",T);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],B=w("chevron-up",S),F=d(l)`
  display: flex;
  flex-direction: column;
  gap: ${({gap:i})=>p[i]};
`,N=d("button")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-family: ${c.fonts.base};
  font-size: ${c.sizes.body};
  font-weight: ${c.weights.medium};
  color: ${t.text};
  background-color: transparent;
  border: none;
  padding: ${p[3]} 0;
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
`,P=d(l)`
  padding: ${p[3]} 0;
  color: ${t.text};
  font-size: ${c.sizes.body};
`,E=({items:i,defaultOpenId:j,gap:O=3,ariaLabel:A,ariaDescribedBy:C})=>{const[k,v]=D.useState(j??""),z=e=>{v(r=>r===e?"":e)};return o.jsx(F,{gap:O,role:"region","aria-label":A,"aria-describedby":C,children:i.map(e=>{const r=k===e.id;return o.jsxs(l,{children:[o.jsxs(N,{type:"button",expanded:r,onClick:()=>z(e.id),"aria-expanded":r,"aria-controls":`accordion-panel-${e.id}`,id:`accordion-header-${e.id}`,"aria-label":`Toggle ${e.title}`,children:[o.jsx(I,{as:"span",children:e.title}),r?o.jsx(B,{size:20,color:t["color-primary-crimson-red"]}):o.jsx(_,{size:20,color:t["color-primary-crimson-red"]})]}),r&&o.jsx(P,{role:"region",id:`accordion-panel-${e.id}`,"aria-labelledby":`accordion-header-${e.id}`,children:e.content})]},e.id)})})},K={title:"Components/Accordion",component:E,tags:["autodocs"],args:{items:[{id:"one",title:"What is Fender Play?",content:"Fender Play is an online platform to learn guitar, bass, and ukulele."},{id:"two",title:"How to start?",content:"Choose your instrument and follow the lessons step by step."},{id:"three",title:"Membership?",content:"Membership gives you access to all lessons and practice tools."}],defaultOpenId:"one",gap:3,ariaLabel:"Frequently Asked Questions",ariaDescribedBy:void 0},argTypes:{gap:{control:{type:"select"},options:[0,1,2,3,4,5,6]},defaultOpenId:{control:"text"},ariaLabel:{control:"text"},ariaDescribedBy:{control:"text"}},parameters:{docs:{description:{component:"The `Accordion` component displays collapsible content sections. Only one section is open at a time. Accessible and keyboard-friendly — ready for Fender Play! 🎸"}}}},n={args:{}},a={args:{defaultOpenId:""}},s={args:{gap:4}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultOpenId: ''
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,x,$;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    gap: 4
  }
}`,...($=(x=s.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const V=["Default","NoDefaultOpen","CustomGap"];export{s as CustomGap,n as Default,a as NoDefaultOpen,V as __namedExportsOrder,K as default};
