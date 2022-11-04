(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[30],{1147:function(e,n,a){"use strict";a.r(n),a.d(n,"mapStateToProps",(function(){return H})),a.d(n,"mapDispatchToProps",(function(){return K}));var t=a(17),i=a(29),o=a(12),s=a(0),l=a.n(s),r=a(979),c=a.n(r),u=a(978),d=a.n(u),m=a(414),p=a.n(m),b=a(160),f=a.n(b),g=a(459),w=a.n(g),v=a(331),h=a(341),x=a(1170),y=a(401),E=a(452),S=a(425),O=a(512),k=a(90),C=a(326),j=a(440),I=a(132),_=a(134),R=a(1143),T=a(135),N=a(355),F=a(352),V=a(379),P=[{encodings:[{labels:["unicode-1-1-utf-8","unicode11utf8","unicode20utf8","utf-8","utf8","x-unicode20utf8"],name:"UTF-8"}],heading:"The Encoding"},{encodings:[{labels:["866","cp866","csibm866","ibm866"],name:"IBM866"},{labels:["csisolatin2","iso-8859-2","iso-ir-101","iso8859-2","iso88592","iso_8859-2","iso_8859-2:1987","l2","latin2"],name:"ISO-8859-2"},{labels:["csisolatin3","iso-8859-3","iso-ir-109","iso8859-3","iso88593","iso_8859-3","iso_8859-3:1988","l3","latin3"],name:"ISO-8859-3"},{labels:["csisolatin4","iso-8859-4","iso-ir-110","iso8859-4","iso88594","iso_8859-4","iso_8859-4:1988","l4","latin4"],name:"ISO-8859-4"},{labels:["csisolatincyrillic","cyrillic","iso-8859-5","iso-ir-144","iso8859-5","iso88595","iso_8859-5","iso_8859-5:1988"],name:"ISO-8859-5"},{labels:["arabic","asmo-708","csiso88596e","csiso88596i","csisolatinarabic","ecma-114","iso-8859-6","iso-8859-6-e","iso-8859-6-i","iso-ir-127","iso8859-6","iso88596","iso_8859-6","iso_8859-6:1987"],name:"ISO-8859-6"},{labels:["csisolatingreek","ecma-118","elot_928","greek","greek8","iso-8859-7","iso-ir-126","iso8859-7","iso88597","iso_8859-7","iso_8859-7:1987","sun_eu_greek"],name:"ISO-8859-7"},{labels:["csiso88598e","csisolatinhebrew","hebrew","iso-8859-8","iso-8859-8-e","iso-ir-138","iso8859-8","iso88598","iso_8859-8","iso_8859-8:1988","visual"],name:"ISO-8859-8"},{labels:["csiso88598i","iso-8859-8-i","logical"],name:"ISO-8859-8-I"},{labels:["csisolatin6","iso-8859-10","iso-ir-157","iso8859-10","iso885910","l6","latin6"],name:"ISO-8859-10"},{labels:["iso-8859-13","iso8859-13","iso885913"],name:"ISO-8859-13"},{labels:["iso-8859-14","iso8859-14","iso885914"],name:"ISO-8859-14"},{labels:["csisolatin9","iso-8859-15","iso8859-15","iso885915","iso_8859-15","l9"],name:"ISO-8859-15"},{labels:["iso-8859-16"],name:"ISO-8859-16"},{labels:["cskoi8r","koi","koi8","koi8-r","koi8_r"],name:"KOI8-R"},{labels:["koi8-ru","koi8-u"],name:"KOI8-U"},{labels:["csmacintosh","mac","macintosh","x-mac-roman"],name:"macintosh"},{labels:["dos-874","iso-8859-11","iso8859-11","iso885911","tis-620","windows-874"],name:"windows-874"},{labels:["cp1250","windows-1250","x-cp1250"],name:"windows-1250"},{labels:["cp1251","windows-1251","x-cp1251"],name:"windows-1251"},{labels:["ansi_x3.4-1968","ascii","cp1252","cp819","csisolatin1","ibm819","iso-8859-1","iso-ir-100","iso8859-1","iso88591","iso_8859-1","iso_8859-1:1987","l1","latin1","us-ascii","windows-1252","x-cp1252"],name:"windows-1252"},{labels:["cp1253","windows-1253","x-cp1253"],name:"windows-1253"},{labels:["cp1254","csisolatin5","iso-8859-9","iso-ir-148","iso8859-9","iso88599","iso_8859-9","iso_8859-9:1989","l5","latin5","windows-1254","x-cp1254"],name:"windows-1254"},{labels:["cp1255","windows-1255","x-cp1255"],name:"windows-1255"},{labels:["cp1256","windows-1256","x-cp1256"],name:"windows-1256"},{labels:["cp1257","windows-1257","x-cp1257"],name:"windows-1257"},{labels:["cp1258","windows-1258","x-cp1258"],name:"windows-1258"},{labels:["x-mac-cyrillic","x-mac-ukrainian"],name:"x-mac-cyrillic"}],heading:"Legacy single-byte encodings"},{encodings:[{labels:["chinese","csgb2312","csiso58gb231280","gb2312","gb_2312","gb_2312-80","gbk","iso-ir-58","x-gbk"],name:"GBK"},{labels:["gb18030"],name:"gb18030"}],heading:"Legacy multi-byte Chinese (simplified) encodings"},{encodings:[{labels:["big5","big5-hkscs","cn-big5","csbig5","x-x-big5"],name:"Big5"}],heading:"Legacy multi-byte Chinese (traditional) encodings"},{encodings:[{labels:["cseucpkdfmtjapanese","euc-jp","x-euc-jp"],name:"EUC-JP"},{labels:["csiso2022jp","iso-2022-jp"],name:"ISO-2022-JP"},{labels:["csshiftjis","ms932","ms_kanji","shift-jis","shift_jis","sjis","windows-31j","x-sjis"],name:"Shift_JIS"}],heading:"Legacy multi-byte Japanese encodings"},{encodings:[{labels:["cseuckr","csksc56011987","euc-kr","iso-ir-149","korean","ks_c_5601-1987","ks_c_5601-1989","ksc5601","ksc_5601","windows-949"],name:"EUC-KR"}],heading:"Legacy multi-byte Korean encodings"},{encodings:[{labels:["csiso2022kr","hz-gb-2312","iso-2022-cn","iso-2022-cn-ext","iso-2022-kr","replacement"],name:"replacement"},{labels:["unicodefffe","utf-16be"],name:"UTF-16BE"},{labels:["csunicode","iso-10646-ucs-2","ucs-2","unicode","unicodefeff","utf-16","utf-16le"],name:"UTF-16LE"},{labels:["x-user-defined"],name:"x-user-defined"}],heading:"Legacy miscellaneous encodings"}].flatMap((function(e){return e.encodings.flatMap((function(e){return e.labels.map((function(n){return{label:n,name:e.name}}))}))})).sort((function(e,n){return e.label<n.label?-1:1})),J=a(456),L=a(51),B=a(26),D=a(977),M=a.n(D),z={delimiter:"",newline:void 0,quoteChar:'"',escapeChar:'"',header:!0,transformHeader:function(e,n){return null===e||void 0===e?void 0:e.trim()},dynamicTyping:!0,preview:0,encoding:void 0,worker:!1,comments:!1,step:void 0,complete:void 0,error:void 0,download:!1,downloadRequestHeaders:void 0,downloadRequestBody:void 0,skipEmptyLines:!0,chunk:void 0,chunkSize:void 0,fastMode:void 0,beforeFirstChunk:void 0,withCredentials:void 0,transform:void 0,delimitersToGuess:[",","\t","|",";",M.a.RECORD_SEP,M.a.UNIT_SEP]};function U(e){return W.apply(this,arguments)}function W(){return W=Object(i.a)(Object(t.a)().mark((function e(n){var a,i,o=arguments;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:z,i=Object(B.a)(Object(B.a)({},a),{},{transformHeader:function(e,n){return null===e||void 0===e?void 0:e.trim()}}),e.abrupt("return",M.a.parse(n,i));case 3:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}var q=a(319),A=Object(q.a)((function(e){return{root:{margin:e.spacing(1)},fileSelector:{margin:e.spacing(2),textAlign:"center"},formControl:{marginLeft:e.spacing(1),marginRight:e.spacing(1),minWidth:120},inputField:{fontFamily:"monospace",fontSize:"0.8em",whiteSpace:"nowrap",overflowY:"scroll"},toolbar:{marginHorizontal:0,marginTop:e.spacing(2),padding:0},encodedResult:{padding:e.spacing(1),borderColor:e.palette.text.disabled,borderStyle:"solid",borderWidth:1,borderRadius:e.shape.borderRadius,whiteSpace:"normal",wordBreak:"break-word"}}}));function H(e){return{inputText:e.textInputs.lastCSVInputContent,inputEncoding:e.textInputs.lastCSVInputContentEncoding,inputOptions:e.textInputs.lastCSVInputOptions}}function K(e){return{storeInputText:function(n,a){return e(Object(T.b)(n,a))}}}n.default=Object(_.b)(H,K)((function(e){var n="CSV parser",a=A(),s=Object(V.a)(),r=e.inputText,u=e.inputEncoding,m=e.inputOptions,b=e.storeInputText,g=l.a.useState(""),_=Object(o.a)(g,2),T=_[0],B=_[1],D=l.a.useState(""),M=Object(o.a)(D,2),W=M[0],q=M[1],H=l.a.useState(""),K=Object(o.a)(H,2),G=K[0],Y=K[1],Q=l.a.useState(!1),X=Object(o.a)(Q,2),Z=X[0],$=X[1],ee=Object(L.e)("md"),ne=ee?10:4;return l.a.useEffect((function(){function e(){return(e=Object(i.a)(Object(t.a)().mark((function e(){var n,a;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n=m?JSON.parse(m):z,e.next=6,U(r,n);case 6:a=e.sent,B(JSON.stringify(a.data,null,2)),q(JSON.stringify(a,null,2)),b("lastCSVInputOptions",JSON.stringify(n,null,2)),$(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),$(!1);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}Z&&r&&function(){e.apply(this,arguments)}()}),[Z,r]),l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,{title:n}),l.a.createElement("div",{className:a.root},l.a.createElement(F.a,{iconType:f.a,title:n}),l.a.createElement(v.a,{className:a.toolbar},l.a.createElement(h.a,{display:"flex",flexGrow:1}),l.a.createElement(x.a,{className:a.formControl,sx:{mr:1}},l.a.createElement("input",{type:"file",color:"primary",accept:"text/csv",onChange:function(e){return function(e){var n,a;if(null!==e&&void 0!==e&&null!==(n=e.target)&&void 0!==n&&n.files&&0!==e.target.files.length){var t=e.target.files[0],i=new FileReader;i.onload=function(n){n.target&&(b("lastCSVInputContent",n.target.result),Y("".concat(t.name," (").concat(Object(j.a)(t.size),")")),e.target.value="")};var o=P.find((function(e){return e.label===u}));i.readAsText(t,null!==(a=null===o||void 0===o?void 0:o.name)&&void 0!==a?a:"utf-8")}}(e)},id:"icon-button-file",style:{display:"none"}}),l.a.createElement("label",{htmlFor:"icon-button-file"},l.a.createElement(C.a,{variant:"contained",component:"span",color:"primary",title:"Select the CSV file from your device"},l.a.createElement(d.a,null)))),l.a.createElement(x.a,{className:a.formControl},l.a.createElement(y.a,{select:!0,label:"File encoding",style:ee?{width:320}:void 0,id:"encoding",value:u,autoFocus:ee,onChange:function(e){return b("lastCSVInputContentEncoding",e.target.value)}},P.map((function(e,n){return l.a.createElement(E.a,{key:"".concat(n,"-").concat(e.label),value:e.label},e.label," (",e.name,")")}))))),l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(S.a,{container:!0,spacing:1},l.a.createElement(S.a,{item:!0,md:8,sm:12,xs:12},l.a.createElement(y.a,{name:"inputText",label:"CSV Source data",helperText:G,multiline:!0,minRows:ne,maxRows:ne,variant:"outlined",margin:"normal",inputProps:{style:{fontFamily:"monospace",fontSize:"0.8em",whiteSpace:"nowrap",overflowY:"scroll"}},fullWidth:!0,value:r,onChange:function(e){return b("lastCSVInputContent",e.target.value)}})),l.a.createElement(S.a,{item:!0,md:4,sm:12,xs:12},l.a.createElement(y.a,{name:"inputOptions",label:"Parser options",helperText:l.a.createElement(O.a,{target:"_blank",rel:"noreferrer",href:"https://www.papaparse.com/docs#config"},"Options documentation available here!"),multiline:!0,minRows:ne,maxRows:ne,variant:"outlined",margin:"normal",inputProps:{style:{fontFamily:"monospace",fontSize:"0.8em",whiteSpace:"nowrap",overflowY:"scroll"}},fullWidth:!0,value:m,onChange:function(e){return b("lastCSVInputOptions",e.target.value)}})))),l.a.createElement(v.a,{className:a.toolbar},l.a.createElement(h.a,{display:"flex",flexGrow:1}),l.a.createElement(C.a,{sx:{mr:1},variant:"contained",title:"Parse the CVS file content",color:"primary",endIcon:l.a.createElement(c.a,null,"Run"),disabled:!r||Z,onClick:function(){return $(!0)}},Z?"Wait\u2026":"Run"),l.a.createElement(C.a,{sx:{mr:1},variant:"contained",title:"Clear the content",color:"primary",disabled:!r,onClick:function(e){e.preventDefault(),B(""),q(""),Y(""),b("lastCSVInputContent","")}},l.a.createElement(p.a,null)),l.a.createElement(N.a,{data:T,sx:{mr:1}}),l.a.createElement(C.a,{endIcon:l.a.createElement(w.a,null,"Save As..."),disabled:!T,variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),J.a(T)}},"Save\u2026")),T&&l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,null,"Parsed rows:"),l.a.createElement(R.a,{style:s,language:"json",className:a.encodedResult},T),l.a.createElement(k.a,null,"Parsed result with metadata:"),l.a.createElement(R.a,{style:s,language:"json",className:a.encodedResult},W))))}))},352:function(e,n,a){"use strict";var t=a(0),i=a.n(t),o=a(90),s=a(319),l=Object(s.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));n.a=function(e){var n=e.title,a=e.iconType,t=l();return i.a.createElement("div",{className:t.titleContainer},i.a.createElement("div",{className:t.titleWithIcon},i.a.createElement(a,{className:t.icon}),i.a.createElement(o.a,{variant:"h5",className:t.title},n)))}},355:function(e,n,a){"use strict";var t=a(363),i=a(0),o=a.n(i),s=a(368),l=a.n(s),r=a(326),c=a(361),u=a.n(c),d=a(133),m=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];n.a=function(e){var n=e.data,a=e.isDisabled,i=e.hoverMessage,s=e.feedbackMessage,c=e.Icon,p=void 0===c?l.a:c,b=Object(t.a)(e,m),f=Object(d.c)().setToasterState;return o.a.createElement(r.a,Object.assign({},b,{onClick:function(){if(n){var e=null!==s&&void 0!==s?s:"Content copied into clipboard: ".concat(n.substring(0,25)," \u2026");u.a(n,{format:"text/plain"}),f({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!n||a,title:null!==i&&void 0!==i?i:"Copy to clipboard",variant:"contained",color:"primary"}),o.a.createElement(p,null))}},379:function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));var t=a(1131),i=a(1132),o=a(118),s=function(){return Object(o.c)().isDark?t.a:i.a}},456:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var t=a(457);function i(e){if(window.require){window.require("electron").ipcRenderer.send("saveJsonAs",e)}else{var n=new Blob([e],{type:"application/json"});Object(t.saveAs)(n,"data.json")}}}}]);
//# sourceMappingURL=30.604ce30a.chunk.js.map