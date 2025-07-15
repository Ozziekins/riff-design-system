import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{c as i,n as S}from"./colors-D6VTWwUG.js";import{c as k}from"./createLucideIcon-DG_TmyEs.js";import"./iframe-DCXZWqrD.js";/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],A=k("arrow-right",j);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],q=k("external-link",I),M=S("a")`
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;

  color: ${({variant:e})=>e==="internalRed"||e==="externalRed"?i["color-primary-crimson-red"]:i.black};

  &:hover,
  &:focus {
    color: ${i.black};
  }

  svg {
    width: 1em;
    height: 1em;
  }
`,$=({href:e,variant:o="internal",children:v,role:b,"aria-label":E,"aria-describedby":L,..._})=>{const s=o==="external"||o==="externalRed";return c.jsxs(M,{href:e,target:s?"_blank":void 0,rel:s?"noopener noreferrer":void 0,role:b??"anchor","aria-label":E,"aria-describedby":L,variant:o,..._,children:[v,s?c.jsx(q,{}):c.jsx(A,{})]})},P={title:"Navigation/Anchor",component:$,tags:["autodocs"],args:{href:"#",variant:"internal",children:"Learn your next riff"},argTypes:{href:{control:"text"},children:{control:"text"},variant:{control:{type:"select"},options:["internal","internalRed","external","externalRed"]}},parameters:{docs:{description:{component:"The `Anchor` component provides a styled, accessible link for navigation. Use `external`/`externalRed` to open in a new tab with an external link icon."}}}},r={args:{}},n={args:{href:"https://www.fender.com/play",variant:"external",children:"Visit Fender Play"}},a={args:{href:"#",variant:"internalRed",children:"Internal Red Link"}},t={args:{href:"https://www.fender.com/play",variant:"externalRed",children:"External Red Link"}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,m,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    href: 'https://www.fender.com/play',
    variant: 'external',
    children: 'Visit Fender Play'
  }
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var f,g,u;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    href: '#',
    variant: 'internalRed',
    children: 'Internal Red Link'
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,R,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    href: 'https://www.fender.com/play',
    variant: 'externalRed',
    children: 'External Red Link'
  }
}`,...(w=(R=t.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const T=["Default","ExternalLink","InternalRed","ExternalRed"];export{r as Default,n as ExternalLink,t as ExternalRed,a as InternalRed,T as __namedExportsOrder,P as default};
