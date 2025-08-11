import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as F,n as l}from"./colors-BjsORBRh.js";import{B as m,s as U}from"./Box-D2mh7RcR.js";import{T as r}from"./Text-BCPe3trr.js";import{s as c}from"./spacing-CXxPM5Gd.js";import{r as q}from"./radii-D7JxPC8t.js";import{B as d}from"./Button-JBu97JJG.js";import"./iframe-jDtwaOzH.js";import"./borders-DKG7WGak.js";import"./typography-CGyrGtcf.js";const D=l(m)`
  background-color: ${F.background};
  box-shadow: ${({elevation:t})=>U[t]};
  border-radius: ${({borderRadius:t})=>q[t]};
  padding: ${({padding:t})=>c[t]};
  display: flex;
  flex-direction: column;
  gap: ${c[3]}; 
`,E=l(r)`
  font-size: ${c[5]}; 
  font-weight: 700;
`,V=l(m)`
  display: flex;
  gap: ${c[2]};
`,_=({title:t,children:C,actions:p,elevation:W="md",padding:O=4,borderRadius:$="md",role:A,"aria-label":L,"aria-describedby":R,"aria-hidden":N})=>e.jsxs(D,{elevation:W,padding:O,borderRadius:$,role:A,"aria-label":L,"aria-describedby":R,"aria-hidden":N,children:[t&&e.jsx(E,{as:"h3",children:t}),e.jsx(m,{as:"div",children:C}),p&&e.jsx(V,{children:p})]}),Z={title:"Layout/Card",component:_,tags:["autodocs"],args:{elevation:"md",padding:4,borderRadius:"md",title:"Today’s Practice Plan 🎸",children:e.jsx(r,{children:"Start with your warm-up exercises, then move on to the new riffs in your playlist!"}),actions:e.jsx(d,{children:"Start Session"})},argTypes:{elevation:{control:{type:"select"},options:["none","sm","md","lg"]},padding:{control:{type:"select"},options:[0,1,2,3,4,5,6]},borderRadius:{control:{type:"select"},options:["none","sm","md","lg","full"]},title:{control:"text"},children:{control:"text"},actions:{control:!1}},parameters:{docs:{description:{component:"The `Card` component provides a flexible container with an optional title and actions. Use it to highlight key content — like practice plans, song recommendations, or lesson previews! 🎵✨"}}}},o={args:{}},s={args:{title:"Welcome Back, Player!",children:e.jsx(r,{children:"Ready to continue your guitar journey today? Pick a lesson and start jamming! 🎸"}),actions:void 0}},n={args:{title:void 0,children:e.jsx(r,{children:"New riffs have been added to your playlist — check them out now! 🎵"}),actions:e.jsx(d,{children:"View Playlist"})}},a={args:{title:void 0,children:e.jsx(r,{children:"🎸 Fender Play Tip: Consistency beats speed! Practice daily for 15-20 minutes."}),actions:void 0}},i={args:{title:"Upcoming Lessons",children:e.jsxs(r,{children:["• Barre Chords",e.jsx("br",{}),"• Lead Techniques",e.jsx("br",{}),"• Solo Practice"]}),actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"secondary",children:"Skip"}),e.jsx(d,{children:"Start Now"})]})}};var u,h,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Welcome Back, Player!',
    children: <Text>
        Ready to continue your guitar journey today? Pick a lesson and start jamming! 🎸
      </Text>,
    actions: undefined
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,b,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: undefined,
    children: <Text>
        New riffs have been added to your playlist — check them out now! 🎵
      </Text>,
    actions: <Button>View Playlist</Button>
  }
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var w,B,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: undefined,
    children: <Text>
        🎸 Fender Play Tip: Consistency beats speed! Practice daily for 15-20 minutes.
      </Text>,
    actions: undefined
  }
}`,...(S=(B=a.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var v,P,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Upcoming Lessons',
    children: <Text>
        • Barre Chords<br />
        • Lead Techniques<br />
        • Solo Practice
      </Text>,
    actions: <>
        <Button variant="secondary">Skip</Button>
        <Button>Start Now</Button>
      </>
  }
}`,...(k=(P=i.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const ee=["Default","WithTitleOnly","WithActionsOnly","BodyOnly","WithCustomActions"];export{a as BodyOnly,o as Default,n as WithActionsOnly,i as WithCustomActions,s as WithTitleOnly,ee as __namedExportsOrder,Z as default};
