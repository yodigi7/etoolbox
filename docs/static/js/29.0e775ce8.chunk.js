(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[29],{1158:function(e,t,a){"use strict";a.r(t),a.d(t,"mapStateToProps",(function(){return S})),a.d(t,"mapDispatchToProps",(function(){return C}));var n=a(12),r=a(0),l=a.n(r),o=a(156),i=a.n(o),s=a(331),c=a(341),u=a(401),d=a(319),p=a(132),m=a(840),f=a.n(m),b=a(134),g=a(135),x=a(355),v=a(352),h=a(404),E=a(51),y=a(21),w=a(877),j=a.n(w);function O(e,t){return console.debug("match: ".concat(e,", at position ").concat(t)),"<span>".concat(e,"</span>")}var R=Object(d.a)((function(e){return{root:{margin:e.spacing(1)},matches:{padding:e.spacing(1),borderColor:e.palette.text.disabled,borderStyle:"solid",borderWidth:1,borderRadius:e.shape.borderRadius,"& span":{backgroundColor:"yellow",fontWeight:"bold",color:"black"}},toolbar:{margin:0,padding:0}}}));function S(e){return{regularExpression:e.textInputs.lastRegEx,inputText:e.textInputs.lastRegExTextSample}}function C(e){return{storeInputText:function(t,a){return e(Object(g.b)(t,a))}}}t.default=Object(b.b)(S,C)((function(e){var t=e.regularExpression,a=e.inputText,o=e.storeInputText,d="Regular expressions tester",m=R(),b=Object(E.e)("md"),g=Object(r.useDeferredValue)(t),w=Object(r.useDeferredValue)(a),S=l.a.useState(""),C=Object(n.a)(S,2),T=C[0],k=C[1],I=l.a.useState(""),N=Object(n.a)(I,2),W=N[0],D=N[1];return l.a.useEffect((function(){k(function(e,t){if(!e||!t)return"";var a=t.replaceAll("\n","<br />");try{var n=j()(e);return n.global?a.replaceAll(n,O):a.replace(n,O)}catch(r){return JSON.stringify(r)}}(g,w)),D(function(e,t){var a=[];if(!e||!t)return"";try{var n,r=j()(e);if(!r.global)return"";for(;null!==(n=r.exec(t));)a.push(n[0]);var l=new Set(a);return console.log("Sorted set of unique ".concat(l.size," entries:"),Object(y.a)(l).sort().join(", ")),a.join(", ")}catch(o){return JSON.stringify(o)}}(g,w))}),[g,w]),l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:d}),l.a.createElement("div",{className:m.root},l.a.createElement(v.a,{iconType:i.a,title:d}),l.a.createElement(u.a,{autoFocus:b,id:"regex",label:"Regular expression",placeholder:"Type the regular expression. Example: /example/g",variant:"outlined",margin:"normal",fullWidth:!0,value:t,onChange:function(e){return o("lastRegEx",e.target.value)}}),l.a.createElement(s.a,{className:m.toolbar},l.a.createElement(c.a,{display:"flex",flexGrow:1}),l.a.createElement(x.a,{data:t})),l.a.createElement(u.a,{id:"content",label:"Content to test the regular expression against",placeholder:"Paste or type the content here",multiline:!0,minRows:6,maxRows:b?20:6,variant:"outlined",margin:"normal",fullWidth:!0,value:a,onChange:function(e){return o("lastRegExTextSample",e.target.value)}}),l.a.createElement("div",{className:m.matches},f()(T)),l.a.createElement("p",null,"Collection of values. Could be usefull for Jira tickets numbers with expressions like:",l.a.createElement("br",null),l.a.createElement("strong",null,"issueKey in (FS-3456, WS-3213, FS-9988)")),l.a.createElement(h.a,{result:W}),l.a.createElement(s.a,{className:m.toolbar},l.a.createElement(c.a,{display:"flex",flexGrow:1}),l.a.createElement(x.a,{data:W}))))}))},352:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(90),o=a(319),i=Object(o.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.title,a=e.iconType,n=i();return r.a.createElement("div",{className:n.titleContainer},r.a.createElement("div",{className:n.titleWithIcon},r.a.createElement(a,{className:n.icon}),r.a.createElement(l.a,{variant:"h5",className:n.title},t)))}},355:function(e,t,a){"use strict";var n=a(363),r=a(0),l=a.n(r),o=a(368),i=a.n(o),s=a(326),c=a(361),u=a.n(c),d=a(133),p=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.a=function(e){var t=e.data,a=e.isDisabled,r=e.hoverMessage,o=e.feedbackMessage,c=e.Icon,m=void 0===c?i.a:c,f=Object(n.a)(e,p),b=Object(d.c)().setToasterState;return l.a.createElement(s.a,Object.assign({},f,{onClick:function(){if(t){var e=null!==o&&void 0!==o?o:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");u.a(t,{format:"text/plain"}),b({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!t||a,title:null!==r&&void 0!==r?r:"Copy to clipboard",variant:"contained",color:"primary"}),l.a.createElement(m,null))}},404:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(401),o=a(319),i=Object(o.a)((function(){return{result:{fontFamily:"monospace",height:"auto"}}}));t.a=function(e){var t=e.label,a=e.result,n=e.rows,o=void 0===n?10:n,s=e.maxRows,c=void 0===s?15:s,u=i();return r.a.createElement(l.a,{multiline:!0,minRows:o,maxRows:c,label:t,variant:"outlined",margin:"normal",fullWidth:!0,value:a,InputProps:{classes:{input:u.result}}})}},864:function(e,t){}}]);
//# sourceMappingURL=29.0e775ce8.chunk.js.map