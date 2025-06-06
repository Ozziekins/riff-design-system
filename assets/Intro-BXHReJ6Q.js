import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-D8lGFgmm.js";import{M as l}from"./index-BMnUWWSf.js";import"./iframe-BrP2Cd0t.js";import"./index-DRq_hFgR.js";import"./index-CPWb0kaA.js";function i(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Docs/Introduction"}),`
`,n.jsx(e.h1,{id:"-fender-play-design-system",children:"🎸 Fender Play Design System"}),`
`,n.jsxs(e.p,{children:["Welcome to the official design system powering ",n.jsx(e.strong,{children:"Fender Play"}),"."]}),`
`,n.jsx(e.h2,{id:"-purpose",children:"💡 Purpose"}),`
`,n.jsx(e.p,{children:"To provide a consistent, accessible, and expressive UI for learners and music lovers."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"1-introducing-your-design-system-with-a-resonating-brand-name",children:"1. Introducing Your Design System with a Resonating Brand Name"}),`
`,n.jsxs(e.h3,{id:"brand-name-riff",children:["Brand Name: ",n.jsx(e.strong,{children:"Riff"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Justification:"}),`
"Riff" is a short, punchy, and memorable name that draws directly from the language of music—particularly guitar playing. A riff is a repeated chord progression or refrain in music that forms the backbone of a song. Similarly, this design system forms the consistent, reusable foundation upon which Fender Play interfaces are built. The name evokes creativity, rhythm, and continuity—key traits in both music education and great UI design. Riff captures the essence of Fender’s brand while being approachable and developer-friendly.`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"2-design-system-audience",children:"2. Design System Audience"}),`
`,n.jsx(e.h3,{id:"primary-audiences",children:"Primary Audiences"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Designers"}),": Reusable, branded, accessible UI components for consistency and visual fidelity."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Frontend Developers"}),": Type-safe, customizable components with baked-in accessibility and documentation."]}),`
`]}),`
`,n.jsx(e.h3,{id:"secondary-audiences",children:"Secondary Audiences"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content Creators"}),": Clear content containers and flexible layouts."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Product Managers"}),": System-level consistency and scalability."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Marketing Teams"}),": Themeable, brand-aligned UI components."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"3-riff-design-principles",children:"3. Riff Design Principles"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Expressive"})," – Bold, warm, musical tone in visuals and interactions."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Authentic"})," – Rooted in Fender’s brand legacy; handcrafted feel."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Inclusive"})," – Accessible to all, diverse representation."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Clarity"})," – Prioritizes navigation and content readability."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Empowering"})," – Supports confident learning and user control."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"4-design-system-foundations",children:"4. Design System Foundations"}),`
`,n.jsx(e.h3,{id:"-design-tokens",children:"🎨 Design Tokens"}),`
`,n.jsx(e.h4,{id:"colors",children:"Colors"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`export const colors = {
  primary: '#FF6200',
  primaryText: '#FFFFFF',

  secondary: '#0061FF',
  secondaryText: '#FFFFFF',
  
  accent: '#00D1B2',

  success: '#2ECC71',
  successBackground: '#EAF7F0',
  successBorder: '#2ECC71',
  successText: '#1B4332',

  error: '#E74C3C',
  errorBackground: '#FDEDEC',
  errorBorder: '#E74C3C',
  errorText: '#641E16',

  warning: '#F39C12',
  warningBackground: '#FFF4E5',
  warningBorder: '#F39C12',
  warningText: '#7D5102',

  info: '#3498DB',
  infoBackground: '#E8F4FD',
  infoBorder: '#3498DB',
  infoText: '#1D3557',

  // From Figma
  // Primary
  'color-primary-crimson-red': '#D7263D',
  'color-primary-deep-charcoal': '#212529',
  'color-primary-grass': '#84C3A8',
  'color-primary-sky': '#232DCE',
  'color-primary-grove': '#C82B9F',

  'color-primary-soft-grass': '#DEF6EC',
  'color-primary-soft-sky': '#F0F4FC',
  'color-primary-soft-grove': '#FEF3F9',
  'color-primary-white': '#FFFFFF',

  // Extended
  'color-extended-crimson-red-2': '#E96278',
  'color-extended-crimson-red-3': '#F191A1',
  'color-extended-crimson-red-4': '#F6BBC5',
  'color-extended-crimson-red-5': '#FCE3E8',

  'color-extended-deeper-grass': '#A9D4C1',
  'color-extended-deep-grass': '#B2D6C7',

  'color-extended-deeper-sky': '#97AAD8',
  'color-extended-deep-sky': '#ACBCE2',

  // Neutral
  'color-neutral-black': '#000000',
  'color-neutral-5': '#333333',
  'color-neutral-4': '#545454',
  'color-neutral-3': '#8A8A8A',
  'color-neutral-2': '#B0B0B0',
  'color-neutral-1': '#E6E6E6',
};

`})}),`
`,n.jsx(e.h4,{id:"typography",children:"Typography"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Font Family"}),": Fira sans"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Sizes"})," (mapped to tokens):"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"display"}),": 40px"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"heading"}),": 32px"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"subheading"}),": 24px"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"body"}),": 16px"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"small"}),": 14px"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"caption"}),": 12px"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Font Weights"}),": Regular (400), Medium (500), Bold (700)"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Line Heights"}),": Tight (1.2), Normal (1.5), Relaxed (1.75)"]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"spacing--layout",children:"Spacing & Layout"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Base unit"}),": 4px"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Scale"}),": ",n.jsx(e.code,{children:"0"}),", ",n.jsx(e.code,{children:"1"})," (4px), ",n.jsx(e.code,{children:"2"})," (8px), ",n.jsx(e.code,{children:"3"})," (12px), ",n.jsx(e.code,{children:"4"})," (16px), ",n.jsx(e.code,{children:"5"})," (24px), ",n.jsx(e.code,{children:"6"})," (32px), ",n.jsx(e.code,{children:"7"})," (40px), ",n.jsx(e.code,{children:"8"})," (48px), ",n.jsx(e.code,{children:"9"})," (64px), ",n.jsx(e.code,{children:"10"})," (80px)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Grid"}),": 12-column, responsive, 8px gutters, mobile-first"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layout principles"}),": Flexible, rhythmical spacing, content-first"]}),`
`]}),`
`,n.jsx(e.h4,{id:"radii",children:"Radii"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"None: 0"}),`
`,n.jsx(e.li,{children:"Sm: 4px"}),`
`,n.jsx(e.li,{children:"Md: 8px"}),`
`,n.jsx(e.li,{children:"Lg: 16px"}),`
`,n.jsx(e.li,{children:"Full: 9999px (pills, avatars)"}),`
`]}),`
`,n.jsx(e.h4,{id:"borders",children:"Borders"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Standard: 1px solid #E0E0E0"}),`
`,n.jsx(e.li,{children:"Active: 2px solid #FF6200"}),`
`]}),`
`,n.jsx(e.h4,{id:"shadows",children:"Shadows"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Shadow 1: 0 1px 2px rgba(0,0,0,0.05)"}),`
`,n.jsx(e.li,{children:"Shadow 2: 0 2px 4px rgba(0,0,0,0.08)"}),`
`,n.jsx(e.li,{children:"Shadow 3: 0 4px 8px rgba(0,0,0,0.12)"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"️-content-guidelines",children:"✍️ Content Guidelines"}),`
`,n.jsx(e.h4,{id:"voice-and-tone",children:"Voice and Tone"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Voice"}),": Friendly, supportive, motivational."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tone"}),": Clear, confident, warm."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"It is:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Encouraging: "You’re doing great!"'}),`
`,n.jsx(e.li,{children:'Clear: "Next, try this chord."'}),`
`,n.jsx(e.li,{children:'Positive: "You’ve unlocked your next lesson."'}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"It is not:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Sarcastic: "Really? That’s the best you can do?"'}),`
`,n.jsx(e.li,{children:'Overly casual: "Yo, let’s shred some chords, dude."'}),`
`]}),`
`,n.jsx(e.h4,{id:"copywriting-guidelines",children:"Copywriting Guidelines"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep copy concise, actionable."}),`
`,n.jsx(e.li,{children:"Use active voice."}),`
`,n.jsx(e.li,{children:"Avoid jargon."}),`
`,n.jsx(e.li,{children:'Highlight benefits (CTAs like "Start Practicing").'}),`
`,n.jsx(e.li,{children:"Sentence case except for proper nouns."}),`
`]}),`
`,n.jsx(e.h4,{id:"imagery--illustrations",children:"Imagery & Illustrations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Style"}),": Clean, modern, Fender-aligned."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Usage"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reinforce learning moments."}),`
`,n.jsx(e.li,{children:"Enhance onboarding."}),`
`,n.jsx(e.li,{children:"Support empty states."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Principles"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"No clutter."}),`
`,n.jsx(e.li,{children:"Represent diverse learners."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"elevation--hierarchy",children:"Elevation & Hierarchy"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use shadow, size, spacing for hierarchy."}),`
`,n.jsx(e.li,{children:"Elevate interactive elements."}),`
`,n.jsx(e.li,{children:"Use type scale and color contrast for readability."}),`
`,n.jsx(e.li,{children:"Group content with cards and containers."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-related-documentation",children:"📄 Related Documentation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://sulfuric-brochure-f82.notion.site/Riff-Design-System-1ffa2e13c8058068b74ece79f158b377",rel:"nofollow",children:n.jsx(e.strong,{children:"Foundations & Principles"})})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<iframe
  src="https://sulfuric-brochure-f82.notion.site/Riff-Design-System-1ffa2e13c8058068b74ece79f158b377"
  width="100%"
  height="1000px"
  style="border: none;"
></iframe>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:["If you want, I can also generate full ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Docs/Colors.mdx"})}),", ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Docs/Typography.mdx"})}),", ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Docs/Spacing.mdx"})})," etc — just say: ",n.jsx(e.strong,{children:'"yes generate token docs"'}),"."]})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
