(this["webpackJsonpreact-material-ui-carousel-demo"]=this["webpackJsonpreact-material-ui-carousel-demo"]||[]).push([[0],{212:function(e,t,a){e.exports=a(236)},217:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(12),l=a.n(o),s=(a(217),a(79)),r=a(80),c=a(50),m=a(92),u=a(91),h=a(81),y=a.n(h),v=a(68),d=a.n(v),g=(a(234),a(258)),p=a(254),b=a(242),E=a(252),f=a(255),w=a(253),A=a(257),B=a(256),N=a(260),k=a(201),I=a(261),C=a(262);function P(e){e.newProp&&console.log(e.newProp);for(var t=e.contentPosition?e.contentPosition:"left",a=e.length?e.length:3,n=a-1,o=[],l=i.a.createElement(g.a,{item:!0,xs:12/a,key:"content"},i.a.createElement(p.a,{className:"Content"},i.a.createElement(b.a,{className:"Title"},e.item.Name),i.a.createElement(b.a,{className:"Caption"},e.item.Caption),i.a.createElement(E.a,{variant:"outlined",className:"ViewButton"},"View Now"))),s=0;s<n;s++){var r=e.item.Items[s],c=i.a.createElement(g.a,{item:!0,xs:12/a,key:r.Name},i.a.createElement(f.a,{className:"Media",image:r.Image,title:r.Name},i.a.createElement(b.a,{className:"MediaCaption"},r.Name)));o.push(c)}return"left"===t?o.unshift(l):"right"===t?o.push(l):"middle"===t&&o.splice(o.length/2,0,l),i.a.createElement(w.a,{raised:!0,className:"Banner"},i.a.createElement(g.a,{container:!0,spacing:0,className:"BannerGrid"},o))}var V=[{Name:"Electronics",Caption:"Electrify your friends!",contentPosition:"left",Items:[{Name:"Macbook Pro",Image:"https://source.unsplash.com/featured/?macbook"},{Name:"iPhone",Image:"https://source.unsplash.com/featured/?iphone"}]},{Name:"Home Appliances",Caption:"Say no to manual home labour!",contentPosition:"middle",Items:[{Name:"Washing Machine WX9102",Image:"https://source.unsplash.com/featured/?washingmachine"},{Name:"Learus Vacuum Cleaner",Image:"https://source.unsplash.com/featured/?vacuum,cleaner"}]},{Name:"Decoratives",Caption:"Give style and color to your living room!",contentPosition:"right",Items:[{Name:"Living Room Lamp",Image:"https://source.unsplash.com/featured/?lamp"},{Name:"Floral Vase",Image:"https://source.unsplash.com/featured/?vase"}]}],x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={autoPlay:!0,timer:500,animation:"fade",indicators:!0,timeout:500,navButtonsAlwaysVisible:!1,navButtonsAlwaysInvisible:!1},d()(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"toggleAutoPlay",value:function(){this.setState({autoPlay:!this.state.autoPlay})}},{key:"toggleIndicators",value:function(){this.setState({indicators:!this.state.indicators})}},{key:"toggleNavButtonsAlwaysVisible",value:function(){this.setState({navButtonsAlwaysVisible:!this.state.navButtonsAlwaysVisible})}},{key:"toggleNavButtonsAlwaysInvisible",value:function(){this.setState({navButtonsAlwaysInvisible:!this.state.navButtonsAlwaysInvisible})}},{key:"changeAnimation",value:function(e){this.setState({animation:e.target.value})}},{key:"changeTimeout",value:function(e,t){this.setState({timeout:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{marginTop:"50px",color:"#494949"}},i.a.createElement("h2",null,"Example: eBay\u2122 style"),i.a.createElement(y.a,{className:"Example",autoPlay:this.state.autoPlay,timer:this.state.timer,animation:this.state.animation,indicators:this.state.indicators,timeout:this.state.timeout,navButtonsAlwaysVisible:this.state.navButtonsAlwaysVisible,navButtonsAlwaysInvisible:this.state.navButtonsAlwaysInvisible},V.map((function(e,t){return i.a.createElement(P,{item:e,key:t,contentPosition:e.contentPosition})}))),i.a.createElement(A.a,{component:"legend"},"Options"),i.a.createElement(B.a,{control:i.a.createElement(N.a,{onChange:this.toggleAutoPlay,checked:this.state.autoPlay,value:"autoplay",color:"primary"}),label:"Auto-play"}),i.a.createElement(B.a,{control:i.a.createElement(N.a,{onChange:this.toggleIndicators,checked:this.state.indicators,value:"indicators",color:"primary"}),label:"Indicators"}),i.a.createElement(B.a,{control:i.a.createElement(N.a,{onChange:this.toggleNavButtonsAlwaysVisible,checked:this.state.navButtonsAlwaysVisible,value:"indicators",color:"primary"}),label:"NavButtonsAlwaysVisible"}),i.a.createElement(B.a,{control:i.a.createElement(N.a,{onChange:this.toggleNavButtonsAlwaysInvisible,checked:this.state.toggleNavButtonsAlwaysInvisible,value:"indicators",color:"primary"}),label:"NavButtonsAlwaysInvisible"}),i.a.createElement(B.a,{control:i.a.createElement(k.a,{name:"animation",value:this.state.animation,onChange:this.changeAnimation,row:!0,style:{marginLeft:"10px"}},i.a.createElement(B.a,{value:"fade",control:i.a.createElement(I.a,{color:"primary"}),label:"Fade"}),i.a.createElement(B.a,{value:"slide",control:i.a.createElement(I.a,{color:"primary"}),label:"Slide"}))}),i.a.createElement(B.a,{control:i.a.createElement("div",{style:{width:300}},i.a.createElement(b.a,{id:"discrete-slider",gutterBottom:!0},"Animation Duration (Timeout) in ms"),i.a.createElement(C.a,{defaultValue:500,getAriaValueText:function(){return"".concat(e.state.timeout,"ms")},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:100,marks:!0,min:100,max:2e3,onChange:this.changeTimeout}))}))}}]),a}(i.a.Component),S=a(240);a(235);function j(e){return i.a.createElement(S.a,{className:"Project",style:{backgroundColor:e.item.color},elevation:10},i.a.createElement("h2",null,e.item.name),i.a.createElement("p",null,e.item.description),i.a.createElement(E.a,{className:"CheckButton"},"Check it out!"))}var O=[{name:"Lear Music Reader",description:"A PDF Reader specially designed for musicians.",color:"#64ACC8"},{name:"Hash Code 2019",description:"My Solution on the 2019 Hash Code by Google Slideshow problem.",color:"#7D85B1"},{name:"Terrio",description:"A exciting mobile game game made in the Unity Engine.",color:"#CE7E78"},{name:"React Carousel",description:"A Generic carousel UI component for React using material ui.",color:"#C9A27E"}],T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={autoPlay:!0,timer:500,animation:"fade",indicators:!0,timeout:500,navButtonsAlwaysVisible:!1,navButtonsAlwaysInvisible:!1},d()(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"toggleAutoPlay",value:function(){this.setState({autoPlay:!this.state.autoPlay})}},{key:"toggleIndicators",value:function(){this.setState({indicators:!this.state.indicators})}},{key:"toggleNavButtonsAlwaysVisible",value:function(){this.setState({navButtonsAlwaysVisible:!this.state.navButtonsAlwaysVisible})}},{key:"toggleNavButtonsAlwaysInvisible",value:function(){this.setState({navButtonsAlwaysInvisible:!this.state.navButtonsAlwaysInvisible})}},{key:"changeAnimation",value:function(e){this.setState({animation:e.target.value})}},{key:"changeTimeout",value:function(e,t){this.setState({timeout:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{marginTop:"50px",color:"#494949"}},i.a.createElement("h2",null,"Example: Learus Projects (random)"),i.a.createElement(y.a,{className:"SecondExample",autoPlay:this.state.autoPlay,timer:this.state.timer,animation:this.state.animation,indicators:this.state.indicators,timeout:this.state.timeout,navButtonsAlwaysVisible:this.state.navButtonsAlwaysVisible,navButtonsAlwaysInvisible:this.state.navButtonsAlwaysInvisible},O.map((function(e,t){return i.a.createElement(j,{item:e,key:t})}))),i.a.createElement(A.a,{component:"legend"},"Options"),i.a.createElement(B.a,{control:i.a.createElement(N.a,{onChange:this.toggleAutoPlay,checked:this.state.autoPlay,value:"autoplay",color:"primary"}),label:"Auto-play"}),i.a.createElement(B.a,{control:i.a.createElement(N.a,{onChange:this.toggleIndicators,checked:this.state.indicators,value:"indicators",color:"primary"}),label:"Indicators"}),i.a.createElement(B.a,{control:i.a.createElement(N.a,{onChange:this.toggleNavButtonsAlwaysVisible,checked:this.state.navButtonsAlwaysVisible,value:"indicators",color:"primary"}),label:"NavButtonsAlwaysVisible"}),i.a.createElement(B.a,{control:i.a.createElement(N.a,{onChange:this.toggleNavButtonsAlwaysInvisible,checked:this.state.navButtonsAlwaysInvisible,value:"indicators",color:"primary"}),label:"NavButtonsAlwaysInvisible"}),i.a.createElement(B.a,{control:i.a.createElement(k.a,{name:"animation",value:this.state.animation,onChange:this.changeAnimation,row:!0,style:{marginLeft:"10px"}},i.a.createElement(B.a,{value:"fade",control:i.a.createElement(I.a,{color:"primary"}),label:"Fade"}),i.a.createElement(B.a,{value:"slide",control:i.a.createElement(I.a,{color:"primary"}),label:"Slide"}))}),i.a.createElement(B.a,{control:i.a.createElement("div",{style:{width:300}},i.a.createElement(b.a,{id:"discrete-slider",gutterBottom:!0},"Animation Duration (Timeout) in ms"),i.a.createElement(C.a,{defaultValue:500,getAriaValueText:function(){return"".concat(e.state.timeout,"ms")},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:100,marks:!0,min:100,max:2e3,onChange:this.changeTimeout}))}))}}]),a}(i.a.Component),L=function(){return i.a.createElement("div",{style:{padding:"40px 100px",backgroundColor:"#ebebeb"}},i.a.createElement("h1",{style:{color:"#494949"}},"React Material UI Carousel Demo"),i.a.createElement("p",{style:{marginBottom:"30px"}},"by ",i.a.createElement("a",{href:"http://learus.github.io",style:{textDecoration:"none",color:"cornflowerblue"}},"Learus"),i.a.createElement("br",null),i.a.createElement("a",{href:"https://github.com/Learus/react-material-ui-carousel.git",style:{textDecoration:"none",color:"cornflowerblue"}},"GitHub Repo")),i.a.createElement(x,null),i.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[212,1,2]]]);
//# sourceMappingURL=main.5f3d721a.chunk.js.map