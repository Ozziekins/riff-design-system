import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{c as o,n as $}from"./colors-Dyo771J8.js";import{t as d}from"./typography-CGyrGtcf.js";import{s as l}from"./spacing-CXxPM5Gd.js";import{r as y}from"./radii-D7JxPC8t.js";const i={small:{padding:`${l[3]} ${l[3]}`,fontSize:d.sizes.caption},large:{padding:`${l[3]} ${l[4]}`,fontSize:d.sizes.body}},g=$("button")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${d.fonts.base};
  font-weight: ${d.weights.medium};
  line-height: 1;
  text-align: center;
  cursor: pointer;
  border-radius: ${y.md};
  transition: all 0.2s ease;
  padding: ${({size:r="small"})=>i[r].padding};
  font-size: ${({size:r="small"})=>i[r].fontSize};

  ${({variant:r})=>r==="primary"&&`
    background-color: ${o.button.primary.background};
    color: ${o.button.primary.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${o.button.primary.hover};
    }

    &:active:not(:disabled) {
      background-color: ${o.button.primary.active};
    }

    &:disabled {
      background-color: ${o.button.primary.disabledBg};
      color: ${o.button.primary.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({variant:r})=>r==="primaryBlack"&&`
    background-color: ${o.button.primaryBlack.background};
    color: ${o.button.primaryBlack.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${o.button.primaryBlack.hover};
    }

    &:active:not(:disabled) {
      background-color: ${o.button.primaryBlack.active};
    }

    &:disabled {
      background-color: ${o.button.primaryBlack.disabledBg};
      color: ${o.button.primaryBlack.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({variant:r})=>r==="secondary"&&`
    background-color: transparent;
    color: ${o.button.secondary.text};
    border: 2px solid ${o.button.secondary.border};

    &:hover:not(:disabled) {
      border-color: ${o.button.secondary.hoverBorder};
      background-color: ${o.button.secondary.hoverBg};
    }

    &:active:not(:disabled) {
      border-color: ${o.button.secondary.activeBorder};
    }

    &:disabled {
      border-color: ${o.button.secondary.disabledBorder};
      color: ${o.button.secondary.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({variant:r})=>r==="secondaryBlack"&&`
    background-color: transparent;
    color: ${o.button.secondaryBlack.text};
    border: 2px solid ${o.button.secondaryBlack.border};

    &:hover:not(:disabled) {
      border-color: ${o.button.secondaryBlack.hoverBorder};
      background-color: ${o.button.secondaryBlack.hoverBg};
    }

    &:active:not(:disabled) {
      border-color: ${o.button.secondaryBlack.activeBorder};
    }

    &:disabled {
      border-color: ${o.button.secondaryBlack.disabledBorder};
      color: ${o.button.secondaryBlack.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({variant:r})=>r==="tertiary"&&`
    background-color: transparent;
    color: ${o.button.tertiary.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${o.button.tertiary.hoverBg};
    }

    &:active:not(:disabled) {
      background-color: ${o.button.tertiary.activeBg};
    }

    &:disabled {
      color: ${o.button.tertiary.disabledText};
      background-color: transparent;
      cursor: not-allowed;
    }
  `}

  ${({variant:r})=>r==="tertiaryBlack"&&`
    background-color: transparent;
    color: ${o.button.tertiaryBlack.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${o.button.tertiaryBlack.hoverBg};
    }

    &:active:not(:disabled) {
      background-color: ${o.button.tertiaryBlack.activeBg};
    }

    &:disabled {
      color: ${o.button.tertiaryBlack.disabledText};
      background-color: transparent;
      cursor: not-allowed;
    }
  `}

    ${({variant:r})=>{var t,e,a,n;return r==="link"&&`
    background-color: transparent;
    color: ${((t=o.button.link)==null?void 0:t.text)??o["color-primary-crimson-red"]};
    border: none;
    padding: 0;
    text-decoration: underline;
    font-weight: ${d.weights.medium};
    cursor: pointer;

    &:hover:not(:disabled) {
      color: ${((e=o.button.link)==null?void 0:e.hover)??o["color-primary-crimson-red"]};
      text-decoration: underline;
    }

    &:active:not(:disabled) {
      color: ${((a=o.button.link)==null?void 0:a.active)??o["color-primary-crimson-red"]};
    }

    &:disabled {
      color: ${((n=o.button.link)==null?void 0:n.disabled)??o["color-neutral-3"]};
      text-decoration: none;
      cursor: not-allowed;
    }
  `}}

    ${({variant:r})=>{var t,e,a,n;return r==="linkBlack"&&`
    background-color: transparent;
    color: ${((t=o.button.linkBlack)==null?void 0:t.text)??o["color-neutral-black"]};
    border: none;
    padding: 0;
    text-decoration: underline;
    font-weight: ${d.weights.medium};
    cursor: pointer;

    &:hover:not(:disabled) {
      color: ${((e=o.button.linkBlack)==null?void 0:e.hover)??o["color-neutral-black"]};
      text-decoration: underline;
    }

    &:active:not(:disabled) {
      color: ${((a=o.button.linkBlack)==null?void 0:a.active)??o["color-neutral-black"]};
    }

    &:disabled {
      color: ${((n=o.button.linkBlack)==null?void 0:n.disabled)??o["color-neutral-3"]};
      text-decoration: none;
      cursor: not-allowed;
    }
  `}}

`,x=({variant:r="primary",size:t="small",role:e,"aria-label":a,"aria-describedby":n,"aria-hidden":b,disabled:c,children:s,...u})=>k.jsx(g,{variant:r,size:t,role:e,"aria-label":a,"aria-describedby":n,"aria-hidden":b,"aria-disabled":c,disabled:c,...u,children:s});export{x as B};
