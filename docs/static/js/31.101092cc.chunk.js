(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[31],{1067:function(e,t,r){"use strict";r.r(t),r.d(t,"mapStateToProps",(function(){return _})),r.d(t,"mapDispatchToProps",(function(){return B}));var n=r(23),o=r(12),a=r(217),i=r(1062),c=r(1051),s=r(254),p=r(340),l=r(1029),u=r(260),b=r(261),j=r(276),h=r(410),m=r(258),d=r(262),f=r(0),g=r.n(f),O=r(477),x=r.n(O),y=r(95),v=r(61),P=r(62),T=r(362),w=r(11),E=r(257),S=r(250),C=Object(w.a)((function(){return{body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}}}))(E.a),M=Object(w.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(m.a),N=Object(S.a)((function(e){return{root:{margin:e.spacing(1)},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},tabsPanel:{flexGrow:1,width:"100%",marginTop:e.spacing(3),backgroundColor:e.palette.background.paper},tabsBar:{marginBottom:e.spacing(2)},tableHeader:{backgroundColor:e.palette.primary.main}}})),H=r(24),F=r(5),I=r(2),K=["children","value","index"];function k(e){var t=e.children,r=e.value,n=e.index,o=Object(F.a)(e,K),a=r===n;return Object(I.jsx)("div",Object(H.a)(Object(H.a)({role:"tabpanel",hidden:!a,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},o),{},{children:a&&Object(I.jsx)(I.Fragment,{children:t})}))}var W,R=r(93),z=r(445),A=r(352);!function(e){e[e.MIME_TYPES=0]="MIME_TYPES",e[e.HTML_ENTITIES=1]="HTML_ENTITIES"}(W||(W={}));function _(e){return{mimeTypes:e.mimeTypes.elements,filteringMimeTypes:e.mimeTypes.filtering,htmlEntities:e.htmlEntities.elements,filteringHtmlEntities:e.htmlEntities.filtering}}function B(e){return{applyMimeTypesFilter:function(t){return e(Object(P.b)(t))},applyHtmlEntitiesFilter:function(t){return e(Object(v.b)(t))}}}t.default=Object(y.b)(_,B)(Object(j.a)()((function(e){var t=N(),r=g.a.useState(W.MIME_TYPES),f=Object(o.a)(r,2),O=f[0],y=f[1],v=g.a.useState(""),P=Object(o.a)(v,2),w=P[0],E=P[1],S=e.filteringMimeTypes,H=e.mimeTypes,F=e.filteringHtmlEntities,K=e.htmlEntities,_=e.applyMimeTypesFilter,B=e.applyHtmlEntitiesFilter,L=S||F,G=Object(A.a)(),Y=G.page,D=G.setPage,J=G.rowsPerPage,q=G.handleChangeRowsPerPage;function Q(e){E(e),D(0),O===W.MIME_TYPES?_(e):B(e)}return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(R.a,{title:"Mime-types, HTML Entities\u2026"}),Object(I.jsx)(a.a,{square:!0,children:Object(I.jsxs)(i.a,{value:O,onChange:function(e,t){y(t),Q(""),D(0)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"on","aria-label":"Common web lists",children:[Object(I.jsx)(c.a,{label:"Mime-types",id:"mime-types","aria-controls":"tab-mime-types"}),Object(I.jsx)(c.a,{label:"HTML Entities",id:"html-entities","aria-controls":"tab-html-entities"})]})}),Object(I.jsxs)("div",{className:t.root,children:[Object(I.jsxs)(s.a,{className:t.toolbar,children:[Object(I.jsx)(T.a,{initialFilter:w,onFilterChange:Q}),Object(I.jsx)(p.a,{display:"flex",flexGrow:1}),Object(I.jsx)(z.a,{count:O===W.MIME_TYPES?H.size:K.length,searching:L})]}),Object(I.jsxs)(k,{value:O,index:W.MIME_TYPES,children:[Object(I.jsx)(l.a,{rowsPerPageOptions:[5,10,25,50,100],component:"div",count:Object(n.a)(H.keys()).length,rowsPerPage:J,page:Y,onPageChange:function(e,t){return D(t)},onRowsPerPageChange:q}),Object(I.jsx)(u.a,{component:a.a,children:Object(I.jsxs)(b.a,{size:Object(j.c)("md",e.width)?"medium":"small",children:[Object(I.jsx)(h.a,{className:t.tableHeader,children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(C,{component:"th",scope:"row",children:"Mime Type"}),Object(I.jsx)(C,{component:"th",scope:"row",children:"File extension"})]})}),Object(I.jsx)(d.a,{children:Object(n.a)(H.keys()).slice(Y*J,Y*J+J).map((function(e){var t,r=(null!==(t=H.get(e))&&void 0!==t?t:[]).join(", ");return Object(I.jsxs)(M,{children:[Object(I.jsx)(C,{children:Object(I.jsx)(x.a,{searchWords:[w],textToHighlight:e})}),Object(I.jsx)(C,{children:Object(I.jsx)(x.a,{searchWords:[w],textToHighlight:r})})]},e)}))})]})})]}),Object(I.jsxs)(k,{value:O,index:W.HTML_ENTITIES,children:[Object(I.jsx)(l.a,{rowsPerPageOptions:[5,10,25,50,100],component:"div",count:K.length,rowsPerPage:J,page:Y,onPageChange:function(e,t){return D(t)},onRowsPerPageChange:q}),Object(I.jsx)(u.a,{component:a.a,children:Object(I.jsxs)(b.a,{size:Object(j.c)("md",e.width)?"medium":"small",children:[Object(I.jsx)(h.a,{className:t.tableHeader,children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(C,{component:"th",scope:"row",children:"Entity"}),Object(I.jsx)(C,{component:"th",scope:"row",children:"Name"}),Object(I.jsx)(C,{component:"th",scope:"row",children:"Number"}),Object(I.jsx)(C,{component:"th",scope:"row",children:"Description"})]})}),Object(I.jsx)(d.a,{children:K.slice(Y*J,Y*J+J).map((function(e){return Object(I.jsxs)(M,{children:[Object(I.jsx)(C,{children:Object(I.jsx)(x.a,{searchWords:[w],textToHighlight:e.character})}),Object(I.jsx)(C,{children:Object(I.jsx)(x.a,{searchWords:[w],textToHighlight:e.entityName})}),Object(I.jsx)(C,{children:Object(I.jsx)(x.a,{searchWords:[w],textToHighlight:e.entityNumber})}),Object(I.jsx)(C,{children:Object(I.jsx)(x.a,{searchWords:[w],textToHighlight:e.description})})]},e.entityNumber)}))})]})})]})]})]})})))},340:function(e,t,r){"use strict";var n=r(23),o=r(1),a=r(68);function i(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}function c(e){var t=function(t){var r=e(t);return t.css?Object(o.a)({},Object(a.a)(r,e(Object(o.a)({theme:t.theme},t.css))),i(t.css,[e.filterProps])):t.sx?Object(o.a)({},Object(a.a)(r,e(Object(o.a)({theme:t.theme},t.sx))),i(t.sx,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css","sx"].concat(Object(n.a)(e.filterProps)),t}var s=c;var p=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?Object(a.a)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},l=r(13),u=r(98);function b(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var j=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,o=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=b(e.theme,o)||{};return Object(u.a)(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=b(i,e)||e,a&&(t=a(t))),!1===n?t:Object(l.a)({},n,t)}))};return i.propTypes={},i.filterProps=[t],i};function h(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var m=p(j({prop:"border",themeKey:"borders",transform:h}),j({prop:"borderTop",themeKey:"borders",transform:h}),j({prop:"borderRight",themeKey:"borders",transform:h}),j({prop:"borderBottom",themeKey:"borders",transform:h}),j({prop:"borderLeft",themeKey:"borders",transform:h}),j({prop:"borderColor",themeKey:"palette"}),j({prop:"borderRadius",themeKey:"shape"})),d=p(j({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),j({prop:"display"}),j({prop:"overflow"}),j({prop:"textOverflow"}),j({prop:"visibility"}),j({prop:"whiteSpace"})),f=p(j({prop:"flexBasis"}),j({prop:"flexDirection"}),j({prop:"flexWrap"}),j({prop:"justifyContent"}),j({prop:"alignItems"}),j({prop:"alignContent"}),j({prop:"order"}),j({prop:"flex"}),j({prop:"flexGrow"}),j({prop:"flexShrink"}),j({prop:"alignSelf"}),j({prop:"justifyItems"}),j({prop:"justifySelf"})),g=p(j({prop:"gridGap"}),j({prop:"gridColumnGap"}),j({prop:"gridRowGap"}),j({prop:"gridColumn"}),j({prop:"gridRow"}),j({prop:"gridAutoFlow"}),j({prop:"gridAutoColumns"}),j({prop:"gridAutoRows"}),j({prop:"gridTemplateColumns"}),j({prop:"gridTemplateRows"}),j({prop:"gridTemplateAreas"}),j({prop:"gridArea"})),O=p(j({prop:"position"}),j({prop:"zIndex",themeKey:"zIndex"}),j({prop:"top"}),j({prop:"right"}),j({prop:"bottom"}),j({prop:"left"})),x=p(j({prop:"color",themeKey:"palette"}),j({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=j({prop:"boxShadow",themeKey:"shadows"});function v(e){return e<=1?"".concat(100*e,"%"):e}var P=j({prop:"width",transform:v}),T=j({prop:"maxWidth",transform:v}),w=j({prop:"minWidth",transform:v}),E=j({prop:"height",transform:v}),S=j({prop:"maxHeight",transform:v}),C=j({prop:"minHeight",transform:v}),M=(j({prop:"size",cssProperty:"width",transform:v}),j({prop:"size",cssProperty:"height",transform:v}),p(P,T,w,E,S,C,j({prop:"boxSizing"}))),N=r(278),H=p(j({prop:"fontFamily",themeKey:"typography"}),j({prop:"fontSize",themeKey:"typography"}),j({prop:"fontStyle",themeKey:"typography"}),j({prop:"fontWeight",themeKey:"typography"}),j({prop:"letterSpacing"}),j({prop:"lineHeight"}),j({prop:"textAlign"})),F=r(5),I=r(0),K=r.n(I),k=r(7),W=r(36),R=r.n(W),z=r(219);function A(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var _=r(56),B=function(e){var t=function(e){return function(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.name,i=Object(F.a)(n,["name"]),c=a,s="function"===typeof t?function(e){return{root:function(r){return t(Object(o.a)({theme:e},r))}}}:{root:t},p=Object(z.a)(s,Object(o.a)({Component:e,name:a||e.displayName,classNamePrefix:c},i));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var l=K.a.forwardRef((function(t,n){var a=t.children,i=t.className,c=t.clone,s=t.component,l=Object(F.a)(t,["children","className","clone","component"]),u=p(t),b=Object(k.a)(u.root,i),j=l;if(r&&(j=A(j,r)),c)return K.a.cloneElement(a,Object(o.a)({className:Object(k.a)(a.props.className,b)},j));if("function"===typeof a)return a(Object(o.a)({className:b},j));var h=s||e;return K.a.createElement(h,Object(o.a)({ref:n,className:b},j),a)}));return R()(l,e),l}}(e);return function(e,r){return t(e,Object(o.a)({defaultTheme:_.a},r))}},L=s(p(m,d,f,g,O,x,y,M,N.b,H)),G=B("div")(L,{name:"MuiBox"});t.a=G},352:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(12),o=r(0),a=function(){var e=Object(o.useState)(0),t=Object(n.a)(e,2),r=t[0],a=t[1],i=Object(o.useState)(10),c=Object(n.a)(i,2),s=c[0],p=c[1];return{page:r,setPage:a,rowsPerPage:s,handleChangeRowsPerPage:function(e){p(+e.target.value),a(0)}}}},362:function(e,t,r){"use strict";var n=r(12),o=r(0),a=r.n(o),i=r(1047),c=r(1081),s=r(1045),p=r(478),l=r(255),u=r(373),b=r.n(u),j=r(250),h=Object(j.a)((function(e){return{root:{margin:e.spacing(1)}}})),m=r(335),d=r(2);t.a=function(e){var t=e.autofocus,r=e.initialFilter,o=e.label,u=e.onFilterChange,j=e.fullWidth,f=a.a.useState(""),g=Object(n.a)(f,2),O=g[0],x=g[1],y=h(),v=o||"Search",P=Object(m.a)((function(e){return u(e)}),300);return a.a.useEffect((function(){x(r)}),[r]),a.a.useEffect((function(){return P(O)}),[O,P]),Object(d.jsxs)(i.a,{fullWidth:j,className:y.root,children:[Object(d.jsx)(c.a,{htmlFor:"searchField",children:v}),Object(d.jsx)(s.a,{id:"searchField",autoFocus:t,type:"text",value:O,onChange:function(e){return x(e.target.value)},endAdornment:Object(d.jsx)(p.a,{position:"end",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(b.a,{})})})})]})}},445:function(e,t,r){"use strict";var n=r(12),o=r(0),a=r.n(o),i=r(67),c=r(250),s=Object(c.a)((function(e){return{root:{margin:e.spacing(1)}}})),p=r(59),l=r(2);t.a=function(e){var t=s(),r=a.a.useState(p.b),o=Object(n.a)(r,2),c=o[0],u=o[1],b=e.count,j=e.searching;return a.a.useEffect((function(){j?u("filtering\u2026"):setTimeout((function(){return u(p.b)}),800)}),[j]),Object(l.jsxs)("div",{className:t.root,children:[Object(l.jsx)(i.a,{align:"right",children:c}),Object(l.jsx)(i.a,{align:"right",children:b})]})}}}]);
//# sourceMappingURL=31.101092cc.chunk.js.map