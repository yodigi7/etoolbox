(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[33],{1154:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(12),i=a(0),c=a.n(i),l=a(986),o=a.n(l),s=a(450),u=a(90),d=a(341),m=a(451),f=a(401),p=a(331),b=a(440),g=a(514),v=a(1101),E=a(132),h=a(355),y=a(352),j=a(467),x=a(26),O=25e4;var w=a(319),z={marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px blue"},k=Object(w.a)((function(e){return{root:{margin:e.spacing(1),flexGrow:1},header:{padding:"20px 0"},dropzone:{flex:"1",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},image:{width:"100%"},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}}}}));t.default=function(){var e="Base64 file encoder",t=k(),a=Object(i.useState)([]),l=Object(r.a)(a,2),w=l[0],C=l[1],N=Object(i.useState)([]),I=Object(r.a)(N,2),D=I[0],F=I[1],W=Object(i.useCallback)((function(e,t){F(t.map((function(e){return{name:e.file.name,size:e.file.size,error:"Exceeds size limit: ".concat(Object(b.a)(O))}}))),C([]),e.forEach((function(e){return function(e){return new Promise((function(t,a){var n=new FileReader,r={name:e.name,size:e.size};n.addEventListener("abort",(function(e){return a("File upload aborted: ".concat(e))})),n.addEventListener("error",(function(e){return a("File upload error: ".concat(e))})),n.addEventListener("load",(function(){return t(Object(x.a)(Object(x.a)({},r),{},{encoded:n.result}))}),!1),n.readAsDataURL(e)}))}(e).then((function(e){return C((function(t){return[].concat(Object(n.a)(t),[e])}))})).catch((function(t){return F((function(a){return[].concat(Object(n.a)(a),[{name:e.name,size:e.size,error:t}])}))}))}))}),[]),L=Object(v.a)({maxSize:O,multiple:!0,onDrop:W}),P=L.acceptedFiles,R=L.getRootProps,S=L.getInputProps,B=P.length!==w.length;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{title:e}),c.a.createElement("div",{className:t.root},c.a.createElement(y.a,{iconType:o.a,title:e}),c.a.createElement(j.a,{active:B},c.a.createElement(s.a,R({className:t.dropzone}),c.a.createElement("input",S()),c.a.createElement(u.a,{variant:"body1"},"Drag 'n' drop some files here"),c.a.createElement(u.a,{variant:"body1"},"or just click to select files"))),c.a.createElement("div",null,D&&D.map((function(e,t){var a=Object(b.a)(e.size);return c.a.createElement("div",{key:t},c.a.createElement(u.a,{variant:"body1"},c.a.createElement("strong",null,e.name)," (",a," bytes): ",e.error))}))),c.a.createElement("div",null,B&&c.a.createElement(u.a,{color:"secondary",variant:"h5"},"Processing ",P.length-w.length," file(s)")),w.map((function(e,a){return c.a.createElement("div",{key:a},c.a.createElement(s.a,null,e.encoded.startsWith("data:image/")&&c.a.createElement(d.a,{display:"flex",alignItems:"center",justifyContent:"center"},c.a.createElement(g.a,{style:z,defaultSize:{width:300,height:"100%"}},c.a.createElement("img",{src:e.encoded,alt:e.name,className:t.image}))),c.a.createElement(m.a,null,c.a.createElement(u.a,{gutterBottom:!0,align:"center",variant:"h5",component:"h2"},c.a.createElement("b",null,e.name)," (",Object(b.a)(e.size),")"),e.encoded.startsWith("data:image/")&&c.a.createElement(f.a,{label:"Full img tag",fullWidth:!0,value:'<img alt="'.concat(e.name,'" src="').concat(e.encoded,'"/>'),margin:"normal",variant:"outlined"}),c.a.createElement(f.a,{label:"Base64 encoded. Copy-paste into 'src' attribute",fullWidth:!0,value:e.encoded,margin:"normal",variant:"outlined",multiline:!0,minRows:"8"}),c.a.createElement(p.a,{className:t.toolbar},c.a.createElement(d.a,{display:"flex",flexGrow:1}),c.a.createElement(h.a,{data:e.encoded})))))}))))}},352:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(90),c=a(319),l=Object(c.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.title,a=e.iconType,n=l();return r.a.createElement("div",{className:n.titleContainer},r.a.createElement("div",{className:n.titleWithIcon},r.a.createElement(a,{className:n.icon}),r.a.createElement(i.a,{variant:"h5",className:n.title},t)))}},355:function(e,t,a){"use strict";var n=a(363),r=a(0),i=a.n(r),c=a(368),l=a.n(c),o=a(326),s=a(361),u=a.n(s),d=a(133),m=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.a=function(e){var t=e.data,a=e.isDisabled,r=e.hoverMessage,c=e.feedbackMessage,s=e.Icon,f=void 0===s?l.a:s,p=Object(n.a)(e,m),b=Object(d.c)().setToasterState;return i.a.createElement(o.a,Object.assign({},p,{onClick:function(){if(t){var e=null!==c&&void 0!==c?c:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");u.a(t,{format:"text/plain"}),b({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!t||a,title:null!==r&&void 0!==r?r:"Copy to clipboard",variant:"contained",color:"primary"}),i.a.createElement(f,null))}},467:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),i=a(319),c=a(148),l=a.n(c),o=a(149),s=a.n(o),u=Object(i.a)((function(){return{root:{"& .spinner_overlay":{background:"rgba(0, 0, 0, 0.3)"}}}})),d=function(e){var t=u();return r.a.createElement(l.a,{classNamePrefix:"spinner_",className:t.root,active:e.active,spinner:r.a.createElement(s.a,{color:"#bf3a2b"})},e.children)}}}]);
//# sourceMappingURL=33.485b8fb9.chunk.js.map