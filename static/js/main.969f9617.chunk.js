(this["webpackJsonpreact-material-ui-carousel-demo"]=this["webpackJsonpreact-material-ui-carousel-demo"]||[]).push([[0],{147:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},182:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(35),i=a.n(c),s=a(9),r=a(31),o=a(3),l=a(269),j=a(271),b=a(270),m=a(265),u=a(262),h=a(261),d=(a(147),a(2)),O={autoPlay:!0,animation:"fade",indicators:!0,duration:500,navButtonsAlwaysVisible:!1,navButtonsAlwaysInvisible:!1,cycleNavigation:!0,fullHeightHover:!0,swipe:!0},x=function(e){var t=e.settings,a=e.setSettings,n=function(e){a(Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},e.target.value,!t[e.target.value])))},c=function(e){var a=e.name;return Object(d.jsx)(l.a,{control:Object(d.jsx)(j.a,{onChange:n,checked:t[a],value:a,color:"primary"}),label:a,labelPlacement:"end"})};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"Options",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(b.a,{children:"General Options"}),Object(d.jsx)(c,{name:"autoPlay"}),Object(d.jsx)(c,{name:"indicators"}),Object(d.jsx)(c,{name:"swipe"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(b.a,{children:"Navigation (Buttons) Options"}),Object(d.jsx)(c,{name:"cycleNavigation"}),Object(d.jsx)(c,{name:"navButtonsAlwaysVisible"}),Object(d.jsx)(c,{name:"navButtonsAlwaysInvisible"}),Object(d.jsx)(c,{name:"fullHeightHover"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(b.a,{children:"Animation Options"}),Object(d.jsx)(l.a,{control:Object(d.jsx)("div",{children:Object(d.jsxs)(m.a,{name:"animation",value:t.animation,onChange:function(e){a(Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},e.target.name,e.target.value)))},row:!0,style:{marginLeft:"10px"},children:[Object(d.jsx)(l.a,{value:"fade",control:Object(d.jsx)(u.a,{color:"primary"}),label:"Fade"}),Object(d.jsx)(l.a,{value:"slide",control:Object(d.jsx)(u.a,{color:"primary"}),label:"Slide"})]})}),label:""}),Object(d.jsx)(l.a,{control:Object(d.jsx)("div",{style:{width:"100%"},children:Object(d.jsx)(h.a,{defaultValue:500,getAriaValueText:function(){return"".concat(t.duration,"ms")},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:100,marks:!0,min:100,max:3e3,onChangeCommitted:function(e,n){var c,i;e.target.name="duration",c=e,i=n,console.log(c),console.log(i),a(Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},c.target.name,i)))}})}),label:"Animation Duration in ms",labelPlacement:"bottom"})]})]})})},p=a(49),g=a.n(p),v=(a(161),a(266)),f=a(272),y=a(267),N=a(273),C=a(274),w=function(e){for(var t=e.contentPosition?e.contentPosition:"left",a=(e.length?e.length:3)-1,n=[],c=Object(d.jsx)(v.a,{item:!0,xs:4,children:Object(d.jsxs)(f.a,{className:"Content",children:[Object(d.jsx)(b.a,{className:"Title",children:e.item.Name}),Object(d.jsx)(b.a,{className:"Caption",children:e.item.Caption}),Object(d.jsx)(y.a,{variant:"outlined",className:"ViewButton",children:"View Now"})]})},"content"),i=0;i<a;i++){var s=e.item.Items[i],r=Object(d.jsx)(v.a,{item:!0,xs:4,children:Object(d.jsx)(N.a,{className:"Media",image:s.Image,title:s.Name,children:Object(d.jsx)(b.a,{className:"MediaCaption",children:s.Name})})},s.Name);n.push(r)}return"left"===t?n.unshift(c):"right"===t?n.push(c):"middle"===t&&n.splice(n.length/2,0,c),Object(d.jsx)(C.a,{raised:!0,className:"Banner",children:Object(d.jsx)(v.a,{container:!0,spacing:0,className:"BannerGrid",children:n})})},I=[{Name:"Electronics",Caption:"Electrify your friends!",contentPosition:"left",Items:[{Name:"Macbook Pro",Image:"https://source.unsplash.com/featured/?macbook"},{Name:"iPhone",Image:"https://source.unsplash.com/featured/?iphone"}]},{Name:"Home Appliances",Caption:"Say no to manual home labour!",contentPosition:"middle",Items:[{Name:"Washing Machine WX9102",Image:"https://source.unsplash.com/featured/?washingmachine"},{Name:"Learus Vacuum Cleaner",Image:"https://source.unsplash.com/featured/?vacuum,cleaner"}]},{Name:"Decoratives",Caption:"Give style and color to your living room!",contentPosition:"right",Items:[{Name:"Living Room Lamp",Image:"https://source.unsplash.com/featured/?lamp"},{Name:"Floral Vase",Image:"https://source.unsplash.com/featured/?vase"}]}],k=function(){var e=Object(n.useState)(O),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{style:{marginTop:"50px",color:"#494949"},children:[Object(d.jsx)(b.a,{variant:"h4",children:"Example: eBay\u2122 style"}),Object(d.jsx)("br",{}),Object(d.jsx)(g.a,Object(r.a)(Object(r.a)({className:"Example"},a),{},{children:I.map((function(e,t){return Object(d.jsx)(w,{item:e,contentPosition:e.contentPosition},t)}))})),Object(d.jsx)("br",{}),Object(d.jsx)(x,{settings:a,setSettings:c})]})},A=a(275);a(162);function L(e){var t=e.item;return Object(d.jsxs)(A.a,{className:"Project",style:{backgroundColor:t.color},elevation:10,children:[Object(d.jsx)(b.a,{variant:"h5",children:t.name}),Object(d.jsx)("br",{}),Object(d.jsx)(b.a,{children:t.description}),Object(d.jsx)(y.a,{className:"CheckButton",component:"a",href:t.href,target:"_blank",rel:"noreferrer",children:"Check it out!"})]})}var P=[{name:"Lear Music Reader",description:"A PDF Reader specially designed for musicians.",color:"#64ACC8",href:"https://github.com/Learus/Lear-Music-Reader"},{name:"Hash Code 2019",description:"My Solution on the 2019 Hash Code by Google Slideshow problem.",color:"#7D85B1",href:"https://github.com/Learus/HashCode2019"},{name:"Terrio",description:"A exciting mobile game game made in the Unity Engine.",color:"#CE7E78",href:"https://play.google.com/store/apps/details?id=com.Brewery.Terrio"},{name:"React Carousel",description:"A Generic carousel UI component for React using material ui.",color:"#C9A27E",href:"https://github.com/Learus/react-material-ui-carousel"}],E=function(){var e=Object(n.useState)(O),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{style:{marginTop:"50px",color:"#494949"},children:[Object(d.jsx)(b.a,{variant:"h4",children:"Example: Learus Projects (random)"}),Object(d.jsx)("br",{}),Object(d.jsx)(g.a,Object(r.a)(Object(r.a)({className:"SecondExample"},a),{},{children:P.map((function(e,t){return Object(d.jsx)(L,{item:e},t)}))})),Object(d.jsx)("br",{}),Object(d.jsx)(x,{settings:a,setSettings:c})]})},B=(a(163),a(256)),M=a(45),S=a(130),H="lightgrey",F=Object(S.a)({palette:{mode:"dark",background:{default:"rgb(73, 73, 73)"},primary:{main:M.a[900]}},typography:{fontFamily:["montserrat","tahoma","sans-serif"].join(","),h1:{color:H},h2:{color:H},h3:{color:H},h4:{color:H},h5:{color:H},body1:{color:H},subtitle1:{color:H}},spacing:32}),V=a(257),R=a(258),T=a(259),U=a(184),G=a(129),D=a.n(G),_=a(260);a(182);function W(){var e=Object(n.useState)(300),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(200),r=Object(s.a)(i,2),o=r[0],l=r[1],j=Object(n.useState)(400),m=Object(s.a)(j,2),u=m[0],h=m[1],O=[a,o,u];return Object(d.jsxs)("div",{className:"Example3",style:{marginTop:"50px",color:"#494949"},children:[Object(d.jsx)(b.a,{variant:"h4",children:"Example: Dynamic height"}),Object(d.jsx)("br",{}),Object(d.jsx)(g.a,{animation:"fade",navButtonsAlwaysVisible:!0,autoPlay:!1,children:O.map((function(e,t){return Object(d.jsx)(A.a,{elevation:10,style:{height:e},className:"HeightItem",children:Object(d.jsxs)("h1",{children:[t+1,". This item is ",Object(d.jsxs)("span",{style:{color:"cyan"},children:[e,"px"]})," high!"]})})}))}),Object(d.jsx)("br",{}),Object(d.jsx)(_.a,{variant:"outlined",value:a,label:"Height 1",onChange:function(e){return c(+e.target.value)}}),Object(d.jsx)(_.a,{variant:"outlined",value:o,label:"Height 2",onChange:function(e){return l(+e.target.value)}}),Object(d.jsx)(_.a,{variant:"outlined",value:u,label:"Height 3",onChange:function(e){return h(+e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)(b.a,{style:{marginTop:20},children:"Note: The carousel doesn't change height as the input values change, but only when the active child changes."})]})}var J=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){D.a.get("https://api.github.com/repos/learus/react-material-ui-carousel").then((function(e){return e.data})).then((function(e){c(e.stargazers_count)}))})),Object(d.jsx)(U.a,{injectFirst:!0,children:Object(d.jsx)(B.a,{theme:F,children:Object(d.jsxs)("div",{className:"root",children:[Object(d.jsxs)(b.a,{variant:"h2",children:[Object(d.jsx)(b.a,{component:"span",variant:"h2",color:"primary",children:"React "}),"Material UI Carousel"]}),Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(d.jsx)(V.a,{style:{fill:"orange"}}),Object(d.jsxs)(b.a,{variant:"subtitle1",children:["\xa0",a]})]}),Object(d.jsxs)(b.a,{variant:"subtitle1",align:"left",children:["Made by \xa0",Object(d.jsx)("a",{href:"https://github.com/learus",target:"_blank",rel:"noreferrer",children:"Learus"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"buttonContainer",children:[Object(d.jsx)(y.a,{startIcon:Object(d.jsx)(R.a,{}),variant:"contained",className:"github",component:"a",href:"https://github.com/Learus/react-material-ui-carousel.git",target:"_blank",rel:"noreferrer",children:"Github"}),"\xa0",Object(d.jsx)(y.a,{startIcon:Object(d.jsx)(T.a,{}),variant:"contained",className:"npm",component:"a",href:"https://www.npmjs.com/package/react-material-ui-carousel",target:"_blank",rel:"noreferrer",children:"npm"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"description",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(b.a,{variant:"h4",children:"<Carousel/>"}),Object(d.jsxs)(b.a,{children:["A Generic, extendible Carousel UI component for React using Material UI.",Object(d.jsx)("br",{}),"It switches between given children using a smooth animation.",Object(d.jsx)("br",{}),"Provides next and previous buttons. Also provides interactible bullet indicators."]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(b.a,{variant:"h4",children:"Links"}),Object(d.jsx)(b.a,{children:Object(d.jsx)("a",{href:"https://github.com/Learus/react-material-ui-carousel/blob/master/README.md",target:"_blank",rel:"noreferrer",children:"Documentation"})}),Object(d.jsx)(b.a,{children:Object(d.jsx)("a",{href:"https://github.com/Learus/react-material-ui-carousel/blob/master/CHANGELOG.md",target:"_blank",rel:"noreferrer",children:"Changelog"})})]})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"installation",children:[Object(d.jsx)(b.a,{style:{fontFamily:"monospace",color:F.palette.primary.main},children:"# Latest Release (Version 3 using MUI 5 and framer-motion)"}),Object(d.jsx)(b.a,{style:{fontFamily:"monospace"},children:"npm install react-material-ui-carousel"}),Object(d.jsx)("br",{}),Object(d.jsx)(b.a,{style:{fontFamily:"monospace",color:F.palette.primary.main},children:"# Version 2 (Using explicitly MUI 4)"}),Object(d.jsx)(b.a,{style:{fontFamily:"monospace"},children:"npm install react-material-ui-carousel@v2"}),Object(d.jsx)("br",{}),Object(d.jsx)(b.a,{style:{fontFamily:"monospace",color:F.palette.primary.main},children:"# Version 2 (Using explicitly MUI 5)"}),Object(d.jsx)(b.a,{style:{fontFamily:"monospace"},children:"npm install react-material-ui-carousel@v2mui5"})]}),Object(d.jsx)(k,{}),Object(d.jsx)(E,{}),Object(d.jsx)(W,{})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(d.jsx)(J,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[187,1,2]]]);
//# sourceMappingURL=main.969f9617.chunk.js.map