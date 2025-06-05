import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{n as f}from"./emotion-styled.browser.esm-CAKTqAiw.js";import{s as y}from"./spacing-CXxPM5Gd.js";import{B as a}from"./Box-B7KEHrde.js";import{c as s}from"./colors-1P3P2RfF.js";import"./iframe-CaYYB5Wd.js";import"./radii-D7JxPC8t.js";const B=f("div")`
  display: flex;
  justify-content: ${({justify:r})=>r??"flex-start"};
  align-items: ${({align:r})=>r??"stretch"};
  flex-direction: ${({direction:r})=>r??"row"};
  gap: ${({gap:r})=>y[r??0]};
`,d=({justify:r="flex-start",align:i="stretch",direction:c="row",gap:p=4,children:x,role:m,"aria-label":u,"aria-describedby":g,...b})=>o.jsx(B,{justify:r,align:i,direction:c,gap:p,role:m,"aria-label":u,"aria-describedby":g,...b,children:x}),S={title:"Layout/Flex",component:d,tags:["autodocs"],args:{justify:"flex-start",align:"stretch",direction:"row",gap:4},parameters:{docs:{description:{component:"The `Flex` component arranges elements using CSS Flexbox. Use it for layout primitives with full control of direction, alignment, spacing, and flow. ✨"}}}},e={args:{},render:r=>o.jsxs(d,{...r,role:"group","aria-label":"Example flex group",children:[o.jsx(a,{backgroundColor:"color-primary-crimson-red",padding:4,borderRadius:"md",children:o.jsx("span",{style:{color:s.primaryText},children:"Box 1"})}),o.jsx(a,{backgroundColor:"black",padding:4,borderRadius:"md",children:o.jsx("span",{style:{color:s.secondaryText},children:"Box 2"})}),o.jsx(a,{backgroundColor:"color-neutral-1",padding:4,borderRadius:"md",children:o.jsx("span",{style:{color:s.text},children:"Box 3"})})]})};var n,l,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => <Flex {...args} role="group" aria-label="Example flex group">
      <Box backgroundColor="color-primary-crimson-red" padding={4} borderRadius="md">
        <span style={{
        color: colors.primaryText
      }}>Box 1</span>
      </Box>
      <Box backgroundColor="black" padding={4} borderRadius="md">
        <span style={{
        color: colors.secondaryText
      }}>Box 2</span>
      </Box>
      <Box backgroundColor="color-neutral-1" padding={4} borderRadius="md">
        <span style={{
        color: colors.text
      }}>Box 3</span>
      </Box>
    </Flex>
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,S as default};
