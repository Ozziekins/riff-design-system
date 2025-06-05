import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{n as x}from"./emotion-styled.browser.esm-C2e_5qSG.js";import{s as b}from"./spacing-CXxPM5Gd.js";import{B as e}from"./Box-PeCN_qz-.js";import{c as n}from"./colors-1P3P2RfF.js";import"./iframe-CQ6FI9Rb.js";import"./radii-D7JxPC8t.js";const y=x("div")`
  display: flex;
  flex-direction: ${({direction:o})=>o==="vertical"?"column":"row"};
  gap: ${({gap:o})=>b[o??0]};
`,l=({direction:o="vertical",gap:d=4,children:i,role:p,"aria-label":m,"aria-describedby":u,...g})=>r.jsx(y,{direction:o,gap:d,role:p,"aria-label":m,"aria-describedby":u,...g,children:i}),R={title:"Layout/Stack",component:l,tags:["autodocs"],args:{direction:"vertical",gap:4},parameters:{docs:{description:{component:"The `Stack` component arranges items in a vertical or horizontal stack with consistent spacing. It’s ideal for flowing content layouts and spacing blocks naturally. ✨"}}}},a={args:{},render:o=>r.jsxs(l,{...o,role:"group","aria-label":"Example stack group",children:[r.jsx(e,{backgroundColor:"color-primary-crimson-red",padding:4,borderRadius:"md",children:r.jsx("span",{style:{color:n.primaryText},children:"Item 1"})}),r.jsx(e,{backgroundColor:"black",padding:4,borderRadius:"md",children:r.jsx("span",{style:{color:n.secondaryText},children:"Item 2"})}),r.jsx(e,{backgroundColor:"color-neutral-1",padding:4,borderRadius:"md",children:r.jsx("span",{style:{color:n.text},children:"Item 3"})})]})};var s,t,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack {...args} role="group" aria-label="Example stack group">
      <Box backgroundColor="color-primary-crimson-red" padding={4} borderRadius="md">
        <span style={{
        color: colors.primaryText
      }}>Item 1</span>
      </Box>
      <Box backgroundColor="black" padding={4} borderRadius="md">
        <span style={{
        color: colors.secondaryText
      }}>Item 2</span>
      </Box>
      <Box backgroundColor="color-neutral-1" padding={4} borderRadius="md">
        <span style={{
        color: colors.text
      }}>Item 3</span>
      </Box>
    </Stack>
}`,...(c=(t=a.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const C=["Default"];export{a as Default,C as __namedExportsOrder,R as default};
