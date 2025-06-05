import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{n as $}from"./emotion-styled.browser.esm-CAKTqAiw.js";import{c as o}from"./colors-1P3P2RfF.js";import{t as a}from"./typography-DRdEHkvb.js";import{s as t}from"./spacing-CXxPM5Gd.js";import{r as g}from"./radii-D7JxPC8t.js";const n={small:{padding:`${t[3]} ${t[3]}`,fontSize:a.sizes.caption},large:{padding:`${t[3]} ${t[4]}`,fontSize:a.sizes.body}},k=$("button")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${a.fonts.base};
  font-weight: ${a.weights.medium};
  line-height: 1;
  text-align: center;
  cursor: pointer;
  border-radius: ${g.md};
  transition: all 0.2s ease;
  padding: ${({size:r="small"})=>n[r].padding};
  font-size: ${({size:r="small"})=>n[r].fontSize};

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
`,f=({variant:r="primary",size:d="small",role:c,"aria-label":l,"aria-describedby":i,"aria-hidden":b,disabled:e,children:s,...u})=>y.jsx(k,{variant:r,size:d,role:c,"aria-label":l,"aria-describedby":i,"aria-hidden":b,"aria-disabled":e,disabled:e,...u,children:s});export{f as B};
