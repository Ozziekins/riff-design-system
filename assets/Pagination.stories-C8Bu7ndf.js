import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{n as u}from"./colors-BjsORBRh.js";import{B as f}from"./Box-D2mh7RcR.js";import{B as i}from"./Button-JBu97JJG.js";import{s as x}from"./spacing-CXxPM5Gd.js";import{r as P}from"./iframe-jDtwaOzH.js";import"./radii-D7JxPC8t.js";import"./borders-DKG7WGak.js";import"./typography-CGyrGtcf.js";const h=u(f)`
  display: flex;
  align-items: center;
  gap: ${({gap:r})=>x[r]};
`,g=({currentPage:r,totalPages:e,onPageChange:a,gap:s=2})=>{const l=Array.from({length:e},(t,d)=>d+1);return o.jsxs(h,{as:"nav",role:"navigation","aria-label":"Pagination",gap:s,children:[o.jsx(i,{onClick:()=>a(Math.max(1,r-1)),disabled:r===1,children:"Previous"}),l.map(t=>o.jsx(i,{onClick:()=>a(t),variant:t===r?"primary":"secondary","aria-current":t===r?"page":void 0,children:t},t)),o.jsx(i,{onClick:()=>a(Math.min(e,r+1)),disabled:r===e,children:"Next"})]})},E={title:"Navigation/Pagination",component:g,tags:["autodocs"],args:{currentPage:1,totalPages:5,gap:2,onPageChange:void 0},argTypes:{currentPage:{control:"number"},totalPages:{control:"number"},gap:{control:{type:"select"},options:[1,2,3,4,5,6]}},parameters:{docs:{description:{component:"The `Pagination` component provides navigation between pages of content. Perfect for browsing through song lists, practice sets, or your favorite riffs! 🎵✨"}}}},n={render:r=>{const[e,a]=P.useState(1);return o.jsx(g,{...r,currentPage:e,onPageChange:s=>a(s)})}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination {...args} currentPage={currentPage} onPageChange={page => setCurrentPage(page)} />;
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,E as default};
