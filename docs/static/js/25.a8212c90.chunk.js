(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[25],{1043:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(1),o=a(5),i=a(0),r=(a(4),a(6)),l=a(307),d=a(8),s=a(64),p=a(13),u=i.forwardRef((function(e,t){e.checked;var a=e.classes,n=e.className,d=e.control,u=e.disabled,b=(e.inputRef,e.label),h=e.labelPlacement,m=void 0===h?"end":h,g=(e.name,e.onChange,e.value,Object(o.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),f=Object(l.a)(),k=u;"undefined"===typeof k&&"undefined"!==typeof d.props.disabled&&(k=d.props.disabled),"undefined"===typeof k&&f&&(k=f.disabled);var y={disabled:k};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof d.props[t]&&"undefined"!==typeof e[t]&&(y[t]=e[t])})),i.createElement("label",Object(c.a)({className:Object(r.a)(a.root,n,"end"!==m&&a["labelPlacement".concat(Object(p.a)(m))],k&&a.disabled),ref:t},g),i.cloneElement(d,y),i.createElement(s.a,{component:"span",className:Object(r.a)(a.label,k&&a.disabled)},b))})),b=Object(d.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u),h=a(30),m=a(52),g=a(103),f=a(251),k=i.forwardRef((function(e,t){var a=e.autoFocus,n=e.checked,d=e.checkedIcon,s=e.classes,p=e.className,u=e.defaultChecked,b=e.disabled,h=e.icon,k=e.id,y=e.inputProps,j=e.inputRef,x=e.name,v=e.onBlur,O=e.onChange,w=e.onFocus,C=e.readOnly,$=e.required,N=e.tabIndex,I=e.type,B=e.value,R=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),E=Object(g.a)({controlled:n,default:Boolean(u),name:"SwitchBase",state:"checked"}),P=Object(m.a)(E,2),S=P[0],F=P[1],z=Object(l.a)(),D=b;z&&"undefined"===typeof D&&(D=z.disabled);var L="checkbox"===I||"radio"===I;return i.createElement(f.a,Object(c.a)({component:"span",className:Object(r.a)(s.root,p,S&&s.checked,D&&s.disabled),disabled:D,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),z&&z.onFocus&&z.onFocus(e)},onBlur:function(e){v&&v(e),z&&z.onBlur&&z.onBlur(e)},ref:t},R),i.createElement("input",Object(c.a)({autoFocus:a,checked:n,defaultChecked:u,className:s.input,disabled:D,id:L&&k,name:x,onChange:function(e){var t=e.target.checked;F(t),O&&O(e,t)},readOnly:C,ref:j,required:$,tabIndex:N,type:I,value:B},y)),S?d:h)})),y=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(k),j=i.forwardRef((function(e,t){var a=e.classes,n=e.className,l=e.color,d=void 0===l?"secondary":l,s=e.edge,u=void 0!==s&&s,b=e.size,h=void 0===b?"medium":b,m=Object(o.a)(e,["classes","className","color","edge","size"]),g=i.createElement("span",{className:a.thumb});return i.createElement("span",{className:Object(r.a)(a.root,n,{start:a.edgeStart,end:a.edgeEnd}[u],"small"===h&&a["size".concat(Object(p.a)(h))])},i.createElement(y,Object(c.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(r.a)(a.switchBase,a["color".concat(Object(p.a)(d))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},m)),i.createElement("span",{className:a.track}))})),x=Object(d.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(h.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(h.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(j),v=a(213),O=a(246),w=a(109),C=a.n(w),$=a(94),N=a(278),I=a(85),B=Object(O.a)((function(e){return{root:{margin:e.spacing(2),padding:e.spacing(2)},topDivider:{marginBottom:e.spacing(8)},switch:{display:"flex",flex:1,justifyContent:"center"}}}));t.default=function(){var e=B(),t=Object(I.c)(),a=t.isDark,c=t.toggleTheme,o="Application preferences";return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)($.a,{title:o}),Object(n.jsxs)(v.a,{className:e.root,children:[Object(n.jsx)(N.a,{iconType:C.a,title:o}),Object(n.jsx)("div",{className:e.topDivider}),Object(n.jsx)("div",{className:e.switch,children:Object(n.jsx)(b,{control:Object(n.jsx)(x,{checked:a,onChange:c}),label:"Activate the Dark theme mode",labelPlacement:"end"})})]})]})}},278:function(e,t,a){"use strict";var n=a(2),c=a(64),o=a(246),i=(a(0),Object(o.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}})));t.a=function(e){var t=i(),a=e.iconType;return Object(n.jsx)("div",{className:t.titleContainer,children:Object(n.jsxs)("div",{className:t.titleWithIcon,children:[Object(n.jsx)(a,{className:t.icon}),Object(n.jsx)(c.a,{variant:"h5",className:t.title,children:e.title})]})})}},307:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a(308);function o(){return n.useContext(c.a)}},308:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(0),c=n.createContext();function o(){return n.useContext(c)}t.a=c}}]);
//# sourceMappingURL=25.a8212c90.chunk.js.map