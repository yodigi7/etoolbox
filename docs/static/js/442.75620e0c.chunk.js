(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[442],{65590:function(o,r,t){"use strict";t.d(r,{Z:function(){return z}});var a=t(4942),n=t(63366),e=t(87462),i=t(47313),l=t(83061),c=function(o){var r=i.useRef({});return i.useEffect((function(){r.current=o})),r.current},s=t(21921);var d=t(77430),g=t(32298);function u(o){return(0,g.Z)("MuiBadge",o)}(0,d.Z)("MuiBadge",["root","badge","invisible"]);var v=t(36493),p=t(46417),f=["badgeContent","component","children","invisible","max","slotProps","slots","showZero"],m=i.forwardRef((function(o,r){var t=o.component,a=o.children,i=o.max,l=void 0===i?99:i,d=o.slotProps,g=void 0===d?{}:d,m=o.slots,h=void 0===m?{}:m,b=o.showZero,Z=void 0!==b&&b,O=(0,n.Z)(o,f),y=function(o){var r=o.badgeContent,t=o.invisible,a=void 0!==t&&t,n=o.max,e=void 0===n?99:n,i=o.showZero,l=void 0!==i&&i,s=c({badgeContent:r,max:e}),d=a;!1!==a||0!==r||l||(d=!0);var g=d?s:o,u=g.badgeContent,v=g.max,p=void 0===v?e:v;return{badgeContent:u,invisible:d,max:p,displayValue:u&&Number(u)>p?"".concat(p,"+"):u}}((0,e.Z)({},o,{max:l})),x=y.badgeContent,w=y.max,C=y.displayValue,R=y.invisible,S=(0,e.Z)({},o,{badgeContent:x,invisible:R,max:w,showZero:Z}),D=function(o){var r={root:["root"],badge:["badge",o.invisible&&"invisible"]};return(0,s.Z)(r,u,void 0)}(S),z=t||h.root||"span",P=(0,v.Z)({elementType:z,externalSlotProps:g.root,externalForwardedProps:O,additionalProps:{ref:r},ownerState:S,className:D.root}),B=h.badge||"span",T=(0,v.Z)({elementType:B,externalSlotProps:g.badge,ownerState:S,className:D.badge});return(0,p.jsxs)(z,(0,e.Z)({},P,{children:[a,(0,p.jsx)(B,(0,e.Z)({},T,{children:C}))]}))})),h=m,b=t(42379),Z=t(53010),O=t(43066),y=function(o){return!o||!(0,O.Z)(o)},x=t(28170);function w(o){return(0,g.Z)("MuiBadge",o)}var C=(0,d.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),R=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],S=(0,b.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(o,r){return r.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),D=(0,b.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(o,r){var t=o.ownerState;return[r.badge,r[t.variant],r["anchorOrigin".concat((0,x.Z)(t.anchorOrigin.vertical)).concat((0,x.Z)(t.anchorOrigin.horizontal)).concat((0,x.Z)(t.overlap))],"default"!==t.color&&r["color".concat((0,x.Z)(t.color))],t.invisible&&r.invisible]}})((function(o){var r=o.theme,t=o.ownerState;return(0,e.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},"default"!==t.color&&{backgroundColor:(r.vars||r).palette[t.color].main,color:(r.vars||r).palette[t.color].contrastText},"dot"===t.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,a.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(C.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,a.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(C.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,a.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(C.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,a.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(C.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,a.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(C.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,a.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(C.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,a.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(C.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,a.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(C.invisible),{transform:"scale(0) translate(-50%, 50%)"}),t.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})})),z=i.forwardRef((function(o,r){var t,a,i,d,g,u,v=(0,Z.Z)({props:o,name:"MuiBadge"}),f=v.anchorOrigin,m=void 0===f?{vertical:"top",horizontal:"right"}:f,b=v.className,O=v.component,C=void 0===O?"span":O,z=v.components,P=void 0===z?{}:z,B=v.componentsProps,T=void 0===B?{}:B,N=v.overlap,E=void 0===N?"rectangular":N,k=v.color,M=void 0===k?"default":k,A=v.invisible,I=void 0!==A&&A,L=v.max,U=v.badgeContent,W=v.slots,j=v.slotProps,F=v.showZero,H=void 0!==F&&F,V=v.variant,_=void 0===V?"standard":V,X=(0,n.Z)(v,R),q=c({anchorOrigin:m,color:M,overlap:E,variant:_}),G=I;!1===I&&(0===U&&!H||null==U&&"dot"!==_)&&(G=!0);var J,K=G?q:v,Q=K.color,Y=void 0===Q?M:Q,$=K.overlap,oo=void 0===$?E:$,ro=K.anchorOrigin,to=void 0===ro?m:ro,ao=K.variant,no=void 0===ao?_:ao,eo=function(o){var r=o.color,t=o.anchorOrigin,a=o.invisible,n=o.overlap,e=o.variant,i=o.classes,l=void 0===i?{}:i,c={root:["root"],badge:["badge",e,a&&"invisible","anchorOrigin".concat((0,x.Z)(t.vertical)).concat((0,x.Z)(t.horizontal)),"anchorOrigin".concat((0,x.Z)(t.vertical)).concat((0,x.Z)(t.horizontal)).concat((0,x.Z)(n)),"overlap".concat((0,x.Z)(n)),"default"!==r&&"color".concat((0,x.Z)(r))]};return(0,s.Z)(c,w,l)}((0,e.Z)({},v,{anchorOrigin:to,invisible:G,color:Y,overlap:oo,variant:no}));"dot"!==no&&(J=U&&Number(U)>L?"".concat(L,"+"):U);var io=null!=(t=null!=(a=null==W?void 0:W.root)?a:P.Root)?t:S,lo=null!=(i=null!=(d=null==W?void 0:W.badge)?d:P.Badge)?i:D,co=null!=(g=null==j?void 0:j.root)?g:T.root,so=null!=(u=null==j?void 0:j.badge)?u:T.badge;return(0,p.jsx)(h,(0,e.Z)({invisible:I,badgeContent:J,showZero:H,max:L},X,{slots:{root:io,badge:lo},className:(0,l.Z)(null==co?void 0:co.className,eo.root,b),slotProps:{root:(0,e.Z)({},co,y(io)&&{as:C,ownerState:(0,e.Z)({},null==co?void 0:co.ownerState,{anchorOrigin:to,color:Y,overlap:oo,variant:no})}),badge:(0,e.Z)({},so,{className:(0,l.Z)(eo.badge,null==so?void 0:so.className)},y(lo)&&{ownerState:(0,e.Z)({},null==so?void 0:so.ownerState,{anchorOrigin:to,color:Y,overlap:oo,variant:no})})},ref:r}))}))},92229:function(o,r,t){"use strict";var a=t(43071),n={"text/plain":"Text","text/html":"Url",default:"Text"};o.exports=function(o,r){var t,e,i,l,c,s,d=!1;r||(r={}),t=r.debug||!1;try{if(i=a(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=o,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(a){if(a.stopPropagation(),r.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var e=n[r.format]||n.default;window.clipboardData.setData(e,o)}else a.clipboardData.clearData(),a.clipboardData.setData(r.format,o);r.onCopy&&(a.preventDefault(),r.onCopy(a.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(g){t&&console.error("unable to copy using execCommand: ",g),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(r.format||"text",o),r.onCopy&&r.onCopy(window.clipboardData),d=!0}catch(g){t&&console.error("unable to copy using clipboardData: ",g),t&&console.error("falling back to prompt"),e=function(o){var r=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return o.replace(/#{\s*key\s*}/g,r)}("message"in r?r.message:"Copy to clipboard: #{key}, Enter"),window.prompt(e,o)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),i()}return d}},43071:function(o){o.exports=function(){var o=document.getSelection();if(!o.rangeCount)return function(){};for(var r=document.activeElement,t=[],a=0;a<o.rangeCount;a++)t.push(o.getRangeAt(a));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null}return o.removeAllRanges(),function(){"Caret"===o.type&&o.removeAllRanges(),o.rangeCount||t.forEach((function(r){o.addRange(r)})),r&&r.focus()}}}}]);