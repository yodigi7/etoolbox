(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[24],{1042:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return k})),n.d(t,"mapDispatchToProps",(function(){return N}));var a=n(49),r=n(2),i=n(0),c=n.n(i),s=n(93),o=n(250),l=n(317),u=n(261),b=n(242),p=n(110),j=n.n(p),d=n(1018),x=n(733),f=n.n(x),g=n(1023),h=n(94),m=n(96),O=n(772),v=n.n(O);function y(e,t){return"<span>".concat(e,"</span>")}var w=n(274),C=n(278),S=n(91),T=Object(b.a)((function(e){return{root:{margin:e.spacing(1)},matches:{padding:e.spacing(1),border:"1px solid grey","& span":{backgroundColor:"yellow",fontWeight:"bold"}},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}}}}));function k(e){return{regularExpression:e.textInputs.lastRegEx,inputText:e.textInputs.lastRegExTextSample}}function N(e){return{storeInputText:function(t,n){return e(Object(h.b)(t,n))}}}t.default=Object(s.b)(k,N)(Object(u.a)()((function(e){var t="Regular expressions tester",n=T(),i=e.regularExpression,s=e.inputText,b=e.storeInputText,p=c.a.useState(""),x=Object(a.a)(p,2),h=x[0],O=x[1],k=c.a.useState(""),N=Object(a.a)(k,2),E=N[0],I=N[1],R=Object(g.a)((function(e,t){O(function(e,t){if(!e||!t)return"";var n=t.replaceAll("\n","<br />");try{var a=v()(e);return a.global?n.replaceAll(a,y):n.replace(a,y)}catch(r){return r.toString()}}(e,t)),I(function(e,t){var n=[];if(!e||!t)return"";try{var a,r=v()(e);if(!r.global)return"";for(;null!==(a=r.exec(t));)n.push(a[0]);var i=new Set(n);return console.log("Sorted set of unique ".concat(i.size," entries:"),Object(m.a)(i).sort().join(", ")),n.join(", ")}catch(c){return c.toString()}}(e,t))}),300);return c.a.useEffect((function(){return R.callback(i,s)}),[i,s,R]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{title:t}),Object(r.jsxs)("div",{className:n.root,children:[Object(r.jsx)(w.a,{iconType:j.a,title:t}),Object(r.jsx)(d.a,{autoFocus:Object(u.b)("md",e.width),id:"regex",label:"Regular expression",placeholder:"Type the regular expression. Example: /example/g",variant:"outlined",margin:"normal",fullWidth:!0,value:i,onChange:function(e){return b("lastRegEx",e.target.value)}}),Object(r.jsxs)(o.a,{className:n.toolbar,children:[Object(r.jsx)(l.a,{display:"flex",flexGrow:1}),Object(r.jsx)(C.a,{data:i})]}),Object(r.jsx)(d.a,{id:"content",label:"Content to test the regular expression against",placeholder:"Paste or type the content here",multiline:!0,rows:6,variant:"outlined",margin:"normal",fullWidth:!0,value:s,onChange:function(e){return b("lastRegExTextSample",e.target.value)}}),Object(r.jsx)("div",{className:n.matches,children:f()(h)}),Object(r.jsxs)("p",{children:["Collection of values. Could be usefull for Jira tickets numbers with expressions like:",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"issueKey in (FS-3456, WS-3213, FS-9988)"})]}),Object(r.jsx)("div",{className:n.matches,children:E}),Object(r.jsxs)(o.a,{className:n.toolbar,children:[Object(r.jsx)(l.a,{display:"flex",flexGrow:1}),Object(r.jsx)(C.a,{data:E})]})]})]})})))},274:function(e,t,n){"use strict";var a=n(2),r=n(62),i=n(242),c=(n(0),Object(i.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}})));t.a=function(e){var t=c(),n=e.iconType;return Object(a.jsx)("div",{className:t.titleContainer,children:Object(a.jsxs)("div",{className:t.titleWithIcon,children:[Object(a.jsx)(n,{className:t.icon}),Object(a.jsx)(r.a,{variant:"h5",className:t.title,children:e.title})]})})}},278:function(e,t,n){"use strict";var a=n(2),r=(n(0),n(288)),i=n.n(r),c=n(521),s=n(287),o=n.n(s),l=n(92);t.a=function(e){var t=e.data,n=Object(l.c)().setToasterState;return Object(a.jsx)(c.a,{endIcon:Object(a.jsx)(i.a,{children:"Copy"}),onClick:function(){if(t){var e=t.substr(0,20),a="Content copied into clipboard: ".concat(e," \u2026");o.a(t,{format:"text/plain"}),n({open:!0,message:a,type:"success",autoHideDuration:2e3})}},disabled:!t,variant:"contained",color:"primary",children:"Copy"})}},757:function(e,t){}}]);
//# sourceMappingURL=24.b93b3040.chunk.js.map