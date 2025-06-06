import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{c as e,n as c}from"./colors-BeVJvpkt.js";import{s as i}from"./spacing-CXxPM5Gd.js";import{r as d}from"./radii-D7JxPC8t.js";import{b as $}from"./borders-DKG7WGak.js";const l={none:"none",sm:"0 1px 2px rgba(0,0,0,0.05)",md:"0 2px 4px rgba(0,0,0,0.08)",lg:"0 4px 8px rgba(0,0,0,0.12)"},p={size0:"0px",size1:"4px",size2:"8px",size3:"12px",size4:"16px",size5:"20px",size6:"24px",size7:"32px",size8:"40px",size9:"48px",size10:"64px",size11:"80px",size12:"96px",size13:"128px",size14:"160px",size15:"192px",size16:"256px",size17:"300px",size18:"320px",size19:"384px",size20:"448px",size21:"512px",size22:"1024px",size23:"2048",size24:"3072px",sizeFull:"100%",sizeAuto:"auto",sizeMin:"min-content",sizeMax:"max-content"},u=c("div")`
  background-color: ${({backgroundColor:s="transparent"})=>e[s]??s};

  border-radius: ${({borderRadius:s="none"})=>d[s]??s};

  border-width: ${({borderWidth:s="0"})=>$[s]??s};
  border-style: solid;
  border-color: ${({borderColor:s="transparent"})=>e[s]??s};

  padding: ${({padding:s="0"})=>i[s]??s};

  margin: ${({margin:s="0"})=>i[s]??s};

  box-shadow: ${({boxShadow:s})=>s?l[s]??s:"none"};

  width: ${({width:s})=>s?p[s]:"auto"};
  height: ${({height:s})=>s?p[s]:"auto"};
`,B=({as:s="div",backgroundColor:x="transparent",borderRadius:o="none",padding:n=0,margin:r=0,boxShadow:t,children:z,...a})=>m.jsx(u,{as:s,backgroundColor:x,borderRadius:o,padding:n,margin:r,boxShadow:t,...a,children:z});export{B,p as a,l as s};
