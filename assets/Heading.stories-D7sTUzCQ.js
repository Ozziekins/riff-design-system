import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{n as u}from"./colors-HpnkfyAE.js";import{T as H}from"./Text-OXutqPmC.js";import"./iframe-DMWMegoo.js";import"./typography-CGyrGtcf.js";import"./spacing-CXxPM5Gd.js";const o={1:{fontSize:"display",fontWeight:"bold",lineHeight:"tight",fontFamily:"base",color:"color-primary-crimson-red",marginBottom:5},2:{fontSize:"heading",fontWeight:"bold",lineHeight:"normal",fontFamily:"base",color:"color-primary-crimson-red",marginBottom:4},3:{fontSize:"subheading",fontWeight:"bold",lineHeight:"normal",fontFamily:"base",color:"color-primary-crimson-red",marginBottom:4},4:{fontSize:"body",fontWeight:"bold",lineHeight:"normal",fontFamily:"base",color:"text",marginBottom:3},5:{fontSize:"small",fontWeight:"bold",lineHeight:"relaxed",fontFamily:"base",color:"text",marginBottom:2},6:{fontSize:"caption",fontWeight:"bold",lineHeight:"relaxed",fontFamily:"base",color:"text",marginBottom:1}},x=u(H)`
  font-size: ${({level:e})=>o[e].fontSize};
  font-weight: ${({level:e})=>o[e].fontWeight};
  line-height: ${({level:e})=>o[e].lineHeight};
  // font-family: ${({level:e})=>o[e].fontFamily};
  color: ${({level:e})=>o[e].color};
  margin-bottom: ${({level:e})=>o[e].marginBottom};
`,g=({as:e,level:t=1,children:h,role:f,"aria-label":p,"aria-describedby":y})=>{const b=e??`h${t}`;return a.jsx(x,{as:b,level:t,fontWeight:o[t].fontWeight,lineHeight:o[t].lineHeight,fontSize:o[t].fontSize,color:o[t].color,marginBottom:o[t].marginBottom,role:f??"heading","aria-label":p,"aria-describedby":y,children:h})},W={title:"Typography/Heading",component:g,tags:["autodocs"],args:{level:1,children:"Try the next riff"},argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6]},children:{control:"text"}},parameters:{docs:{description:{component:"The `Heading` component provides semantic, accessible headings for your UI. Levels map to HTML tags `h1`–`h6` and apply consistent typography tokens from the Riff design system. Perfect for giving your pages a musical flow. 🎸✨"}}}},r={args:{}},n={render:()=>a.jsx("div",{children:[1,2,3,4,5,6].map(e=>a.jsx(g,{level:e,"aria-label":`Heading level ${e}`,children:S(e)},e))})},S=e=>{switch(e){case 1:return"Learn a new chord";case 2:return"Learn a new chord";case 3:return"Learn a new chord";case 4:return"Learn a new chord";case 5:return"Learn a new chord";case 6:return"Learn a new chord";default:return"Learn a new chord"}};var i,s,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div>
      {[1, 2, 3, 4, 5, 6].map(level => <Heading key={level} level={level as any} aria-label={\`Heading level \${level}\`}>
          {getFenderCopy(level)}
        </Heading>)}
    </div>
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const $=["Default","AllLevels"];export{n as AllLevels,r as Default,$ as __namedExportsOrder,W as default};
