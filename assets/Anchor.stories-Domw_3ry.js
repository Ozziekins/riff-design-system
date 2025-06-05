import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{n as v}from"./emotion-styled.browser.esm-CAKTqAiw.js";import{c as n}from"./colors-1P3P2RfF.js";import{c as p}from"./createLucideIcon-BVa-5Ebx.js";import"./iframe-CaYYB5Wd.js";/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],w=p("arrow-right",k);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],_=p("external-link",b),E=v("a")`
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  color: ${n.primary};
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${n.secondary};
  }

  svg {
    width: 1em;
    height: 1em;
  }
`,j=({href:h,variant:m="internal",children:x,role:f,"aria-label":y,"aria-describedby":g,...u})=>{const a=m==="external";return t.jsxs(E,{href:h,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0,role:f??"link","aria-label":y,"aria-describedby":g,...u,children:[x,a?t.jsx(_,{}):t.jsx(w,{})]})},$={title:"Navigation/Anchor",component:j,tags:["autodocs"],args:{href:"#",variant:"internal",children:"Learn your next riff"},argTypes:{href:{control:"text"},children:{control:"text"},variant:{control:{type:"select"},options:["internal","external"]}},parameters:{docs:{description:{component:'The `Anchor` component provides a styled, accessible link for navigation. Use `variant="external"` to open in a new tab with an external link icon — ideal for calls to action or external resources. 🎵✨'}}}},e={args:{}},r={args:{href:"https://www.fender.com/play",variant:"external",children:"Visit Fender Play"}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    href: 'https://www.fender.com/play',
    variant: 'external',
    children: 'Visit Fender Play'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const N=["Default","ExternalLink"];export{e as Default,r as ExternalLink,N as __namedExportsOrder,$ as default};
