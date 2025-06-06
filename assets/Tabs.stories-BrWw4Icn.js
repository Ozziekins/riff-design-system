import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-KcTZKRwJ.js";import{n as g,c as s}from"./colors-BFpO0IJp.js";import{B as c}from"./Box-BShQxfjz.js";import{s as l}from"./spacing-CXxPM5Gd.js";import{t as i}from"./typography-CGyrGtcf.js";import"./radii-D7JxPC8t.js";import"./borders-DKG7WGak.js";const v=g(c)`
  display: flex;
  gap: ${({gap:o})=>l[o]};
  margin-bottom: ${({marginBottom:o})=>l[o]};
`,x=g("button")`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: ${i.fonts.base};
  font-size: ${i.sizes.body};
  font-weight: ${i.weights.medium};
  color: ${({selected:o})=>o?s["color-primary-crimson-red"]:s["color-neutral-4"]};
  border-bottom: ${({selected:o})=>o?`4px solid ${s["color-primary-crimson-red"]}`:"4px solid transparent"};
  transition: color 0.2s ease, border-bottom 0.2s ease;

  &:hover:not(:disabled) {
    color: ${s["color-primary-crimson-red"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,$=({tabs:o,defaultActiveId:b,gap:u=2,marginBottom:f=4})=>{const[r,y]=h.useState(b??o[0].id),n=o.find(e=>e.id===r);return t.jsxs(c,{as:"section",role:"region","aria-label":"Tabs",children:[t.jsx(v,{role:"tablist",gap:u,marginBottom:f,children:o.map(e=>t.jsx(x,{type:"button",onClick:()=>y(e.id),selected:e.id===r,role:"tab","aria-selected":e.id===r,"aria-controls":`tabpanel-${e.id}`,id:`tab-${e.id}`,children:e.label},e.id))}),t.jsx(c,{role:"tabpanel",id:`tabpanel-${r}`,"aria-labelledby":`tab-${r}`,children:n==null?void 0:n.content})]})},k={title:"Navigation/Tabs",component:$,tags:["autodocs"],args:{tabs:[{id:"overview",label:"Overview",content:"Start your practice session and review the basics. 🎸"},{id:"songs",label:"Songs",content:"Browse your favorite songs and learn new riffs! 🎵"},{id:"techniques",label:"Techniques",content:"Improve your playing with targeted exercises. ✨"}],defaultActiveId:"overview",gap:2,marginBottom:4},argTypes:{gap:{control:{type:"select"},options:[1,2,3,4,5,6]},marginBottom:{control:{type:"select"},options:[1,2,3,4,5,6]}},parameters:{docs:{description:{component:"The `Tabs` component organizes content into tabbed sections — perfect for navigating through lessons, song lists, or practice modes in your app. 🎵✨"}}}},a={args:{}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const q=["Default"];export{a as Default,q as __namedExportsOrder,k as default};
