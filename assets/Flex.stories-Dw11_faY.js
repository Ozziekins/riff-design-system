import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{n as y,c as s}from"./colors-D6VTWwUG.js";import{s as r}from"./spacing-CXxPM5Gd.js";import{a as $,B as n}from"./Box-D8uG3F3c.js";import"./iframe-DCXZWqrD.js";import"./radii-D7JxPC8t.js";import"./borders-DKG7WGak.js";const v=y("div")`
  display: flex;
  justify-content: ${({justify:o})=>o??"flex-start"};
  align-items: ${({align:o})=>o??"stretch"};
  flex-direction: ${({direction:o})=>o??"row"};
  gap: ${({gap:o=0})=>r[o]};
  flex-grow: ${({grow:o=0})=>o};
  flex-shrink: ${({shrink:o=1})=>o};
  flex-basis: ${({basis:o})=>o?$[o]:"auto"};
  margin: ${({margin:o})=>o!==void 0?r[o]:"0"};
  margin-top: ${({marginTop:o})=>o!==void 0?r[o]:void 0};
  margin-bottom: ${({marginBottom:o})=>o!==void 0?r[o]:void 0};
  margin-left: ${({marginLeft:o})=>o!==void 0?r[o]:void 0};
  margin-right: ${({marginRight:o})=>o!==void 0?r[o]:void 0};
  padding: ${({padding:o})=>o?r[o]:void 0};
  padding-top: ${({paddingTop:o})=>o?r[o]:void 0};
  padding-bottom: ${({paddingBottom:o})=>o?r[o]:void 0};
  padding-left: ${({paddingLeft:o})=>o?r[o]:void 0};
  padding-right: ${({paddingRight:o})=>o?r[o]:void 0};
`,t=({justify:o="flex-start",align:c="stretch",direction:x="row",gap:p=4,children:m,role:u,"aria-label":g,"aria-describedby":b,...f})=>e.jsx(v,{justify:o,align:c,direction:x,gap:p,role:u,"aria-label":g,"aria-describedby":b,...f,children:m}),R={title:"Layout/Flex",component:t,tags:["autodocs"],args:{justify:"flex-start",align:"stretch",direction:"row",gap:4},parameters:{docs:{description:{component:"The `Flex` component arranges elements using CSS Flexbox. Use it for layout primitives with full control of direction, alignment, spacing, and flow. ✨"}}}},a={args:{},render:o=>e.jsxs(t,{...o,role:"group","aria-label":"Example flex group",children:[e.jsx(n,{backgroundColor:"color-primary-crimson-red",padding:4,borderRadius:"md",children:e.jsx("span",{style:{color:s.primaryText},children:"Box 1"})}),e.jsx(n,{backgroundColor:"black",padding:4,borderRadius:"md",children:e.jsx("span",{style:{color:s.secondaryText},children:"Box 2"})}),e.jsx(n,{backgroundColor:"color-neutral-1",padding:4,borderRadius:"md",children:e.jsx("span",{style:{color:s.text},children:"Box 3"})})]})};var l,d,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const S=["Default"];export{a as Default,S as __namedExportsOrder,R as default};
