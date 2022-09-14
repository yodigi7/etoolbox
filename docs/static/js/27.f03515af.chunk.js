(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[27],{1062:function(e,t,a){"use strict";a.r(t),a.d(t,"mapStateToProps",(function(){return F})),a.d(t,"mapDispatchToProps",(function(){return C}));var r=a(32),n=a(15),o=a(0),i=a.n(o),c=a(92),l=a(273),s=a(258),d=a(259),u=a(257),p=a(406),b=a(255),m=a(338),h=a(214),j=a(100),f=a.n(j),O=a(93);var v=a(286),x=a(8),g=a(254),w=a(247),y=Object(x.a)((function(e){return{body:{fontSize:e.spacing(1.75),whiteSpace:"normal",wordBreak:"break-word"}}}))(g.a),P=Object(x.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(b.a),R=Object(w.a)((function(e){return{root:{margin:e.spacing(1)},panel:{marginBottom:e.spacing(3)},tableHeader:{backgroundColor:e.palette.primary.main}}})),N=a(90),T=a(2);function F(e){return{inputText:e.textInputs.lastUrlParserValue}}function C(e){return{storeInputText:function(t,a){return e(Object(O.b)(t,a))}}}t.default=Object(c.b)(F,C)(Object(l.a)()((function(e){var t="URL Parser",a=R(),o=e.inputText,c=e.storeInputText,j=i.a.useState(new Map),O=Object(n.a)(j,2),x=O[0],g=O[1],w=i.a.useState(new Map),F=Object(n.a)(w,2),C=F[0],k=F[1];return i.a.useEffect((function(){g(function(e){var t=new Map;if(!e)return t;try{var a=new URL(e);t.set("host",a.host),t.set("protocol",a.protocol),t.set("hash",a.hash),t.set("origin",a.origin),t.set("pathname",a.pathname),t.set("port",a.port?a.port:"<default>"),t.set("search",a.search)}catch(r){}return t}(o)),k(function(e){var t=new Map;if(!e)return t;try{new URL(e).searchParams.forEach((function(e,a){return t.set(a,e)}))}catch(a){}return t}(o))}),[o]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(N.a,{title:t}),Object(T.jsxs)("div",{className:a.root,children:[Object(T.jsx)(v.a,{iconType:f.a,title:t}),Object(T.jsx)(m.a,{autoFocus:Object(l.c)("md",e.width),label:"URL",placeholder:"Paste or type the url here",multiline:!0,minRows:4,maxRows:Object(l.c)("md",e.width)?20:4,variant:"outlined",margin:"normal",fullWidth:!0,value:o,className:a.panel,onChange:function(e){return c("lastUrlParserValue",e.target.value)}}),Object(T.jsx)(u.a,{component:h.a,className:a.panel,children:Object(T.jsxs)(s.a,{size:Object(l.c)("md",e.width)?"medium":"small",children:[Object(T.jsx)(p.a,{className:a.tableHeader,children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(y,{children:"Fragment"}),Object(T.jsx)(y,{children:"Value"})]})}),Object(T.jsx)(d.a,{children:Object(r.a)(x.keys()).sort().map((function(e){return Object(T.jsxs)(P,{children:[Object(T.jsx)(y,{component:"th",scope:"row",children:e}),Object(T.jsx)(y,{children:x.get(e)})]},e)}))})]})}),Object(T.jsx)(u.a,{component:h.a,children:Object(T.jsxs)(s.a,{size:Object(l.c)("md",e.width)?"medium":"small",children:[Object(T.jsx)(p.a,{className:a.tableHeader,children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(y,{children:"Parameter"}),Object(T.jsx)(y,{children:"Value"})]})}),Object(T.jsx)(d.a,{children:Object(r.a)(C.keys()).sort().map((function(e){return Object(T.jsxs)(P,{children:[Object(T.jsx)(y,{component:"th",scope:"row",children:e}),Object(T.jsx)(y,{children:C.get(e)})]},e)}))})]})})]})]})})))},286:function(e,t,a){"use strict";var r=a(60),n=a(247),o=(a(0),a(2)),i=Object(n.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=i(),a=e.iconType;return Object(o.jsx)("div",{className:t.titleContainer,children:Object(o.jsxs)("div",{className:t.titleWithIcon,children:[Object(o.jsx)(a,{className:t.icon}),Object(o.jsx)(r.a,{variant:"h5",className:t.title,children:e.title})]})})}},338:function(e,t,a){"use strict";var r=a(1),n=a(4),o=a(0),i=a(6),c=a(1040),l=a(1041),s=a(1074),d=a(1075),u=a(1042),p=a(339),b=a(1052),m=a(8),h={standard:c.a,filled:l.a,outlined:s.a},j=o.forwardRef((function(e,t){var a=e.autoComplete,c=e.autoFocus,l=void 0!==c&&c,s=e.children,m=e.classes,j=e.className,f=e.color,O=void 0===f?"primary":f,v=e.defaultValue,x=e.disabled,g=void 0!==x&&x,w=e.error,y=void 0!==w&&w,P=e.FormHelperTextProps,R=e.fullWidth,N=void 0!==R&&R,T=e.helperText,F=e.hiddenLabel,C=e.id,k=e.InputLabelProps,E=e.inputProps,I=e.InputProps,L=e.inputRef,M=e.label,q=e.multiline,H=void 0!==q&&q,S=e.name,V=e.onBlur,W=e.onChange,B=e.onFocus,U=e.placeholder,z=e.required,D=void 0!==z&&z,J=e.rows,$=e.rowsMax,_=e.maxRows,A=e.minRows,G=e.select,K=void 0!==G&&G,Q=e.SelectProps,X=e.type,Y=e.value,Z=e.variant,ee=void 0===Z?"standard":Z,te=Object(n.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]);var ae={};if("outlined"===ee&&(k&&"undefined"!==typeof k.shrink&&(ae.notched=k.shrink),M)){var re,ne=null!==(re=null===k||void 0===k?void 0:k.required)&&void 0!==re?re:D;ae.label=o.createElement(o.Fragment,null,M,ne&&"\xa0*")}K&&(Q&&Q.native||(ae.id=void 0),ae["aria-describedby"]=void 0);var oe=T&&C?"".concat(C,"-helper-text"):void 0,ie=M&&C?"".concat(C,"-label"):void 0,ce=h[ee],le=o.createElement(ce,Object(r.a)({"aria-describedby":oe,autoComplete:a,autoFocus:l,defaultValue:v,fullWidth:N,multiline:H,name:S,rows:J,rowsMax:$,maxRows:_,minRows:A,type:X,value:Y,id:C,inputRef:L,onBlur:V,onChange:W,onFocus:B,placeholder:U,inputProps:E},ae,I));return o.createElement(u.a,Object(r.a)({className:Object(i.a)(m.root,j),disabled:g,error:y,fullWidth:N,hiddenLabel:F,ref:t,required:D,color:O,variant:ee},te),M&&o.createElement(d.a,Object(r.a)({htmlFor:C,id:ie},k),M),K?o.createElement(b.a,Object(r.a)({"aria-describedby":oe,id:C,labelId:ie,value:Y,input:le},Q),s):le,T&&o.createElement(p.a,Object(r.a)({id:oe},P),T))}));t.a=Object(m.a)({root:{}},{name:"MuiTextField"})(j)},339:function(e,t,a){"use strict";var r=a(4),n=a(1),o=a(0),i=a(6),c=a(307),l=a(305),s=a(8),d=o.forwardRef((function(e,t){var a=e.children,s=e.classes,d=e.className,u=e.component,p=void 0===u?"p":u,b=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(r.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),m=Object(l.a)(),h=Object(c.a)({props:e,muiFormControl:m,states:["variant","margin","disabled","error","filled","focused","required"]});return o.createElement(p,Object(n.a)({className:Object(i.a)(s.root,("filled"===h.variant||"outlined"===h.variant)&&s.contained,d,h.disabled&&s.disabled,h.error&&s.error,h.filled&&s.filled,h.focused&&s.focused,h.required&&s.required,"dense"===h.margin&&s.marginDense),ref:t},b)," "===a?o.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):a)}));t.a=Object(s.a)((function(e){return{root:Object(n.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(d)},406:function(e,t,a){"use strict";var r=a(1),n=a(4),o=a(0),i=a(6),c=a(8),l=a(51),s={variant:"head"},d="thead",u=o.forwardRef((function(e,t){var a=e.classes,c=e.className,u=e.component,p=void 0===u?d:u,b=Object(n.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(p,Object(r.a)({className:Object(i.a)(a.root,c),ref:t,role:p===d?null:"rowgroup"},b)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)}}]);
//# sourceMappingURL=27.f03515af.chunk.js.map