(this.webpackJsonpopendiner=this.webpackJsonpopendiner||[]).push([[0],{165:function(e,t,n){},166:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),i=(n(165),n(166),n(17)),s=n(24),l=n(313),j=n(22),d=n(321),u=n(322),b=n(319),h=n(42),p=n(340),O=n(320),x=n(318),m=n(146),f=n(142),g=n.n(f),v=n(97),L=n.n(v),y=n(141),C=n.n(y),w=n(79),k=n.n(w),S=n(81),N=n.n(S),E=n(23),D=function(){return function(e){navigator.geolocation.getCurrentPosition((function(t){e((n=t.coords.latitude,t.coords.longitude,{type:"GETLOC",value:n}));var n}))}},I=n(33),T=n(2),A=Object(l.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(s.a)({display:"none",fontFamily:["'Coustard', serif"].join(",")},e.breakpoints.up("sm"),{display:"block"}),search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(j.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(s.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(s.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),M=Object(E.b)((function(e){return{currentLocation:e.currentLocation}}),(function(e){return{onGetLocation:function(){return e(D())}}}))((function(e){var t=A(),n=c.a.useState(null),a=Object(i.a)(n,2),r=a[0],o=a[1],s=c.a.useState(null),l=Object(i.a)(s,2),j=l[0],f=l[1],v=Boolean(r),y=Boolean(j),w=function(e){o(e.currentTarget)},S=function(){f(null)},E=function(){o(null),S()},D="primary-search-account-menu",M=Object(T.jsxs)(m.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:D,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:v,onClose:E,children:[Object(T.jsx)(x.a,{children:Object(T.jsx)(b.a,{"aria-label":"location-searching",children:Object(T.jsx)(N.a,{})})}),Object(T.jsx)(x.a,{onClick:E,children:"Profile"}),Object(T.jsx)(x.a,{onClick:E,children:"My account"})]}),F="primary-search-account-menu-mobile",P=Object(T.jsxs)(m.a,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},id:F,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:y,onClose:S,children:[Object(T.jsxs)(x.a,{children:[Object(T.jsx)(b.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(T.jsx)(O.a,{badgeContent:11,color:"secondary",children:Object(T.jsx)(C.a,{})})}),Object(T.jsx)("p",{children:"Notifications"})]}),Object(T.jsxs)(x.a,{onClick:w,children:[Object(T.jsx)(b.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(T.jsx)(L.a,{})}),Object(T.jsx)("p",{children:"Profile"})]}),Object(T.jsx)(x.a,{children:Object(T.jsx)(b.a,{"aria-label":"location-searching",children:Object(T.jsx)(N.a,{})})})]});return Object(T.jsxs)("div",{className:t.grow,children:[Object(T.jsx)(d.a,{position:"static",children:Object(T.jsxs)(u.a,{children:[Object(T.jsx)(I.b,{to:"/home",children:Object(T.jsx)(h.a,{className:t.title,variant:"h6",noWrap:!0,children:"OpenDiner"})}),Object(T.jsxs)("div",{className:t.search,children:[Object(T.jsx)("div",{className:t.searchIcon,children:Object(T.jsx)(g.a,{})}),Object(T.jsx)(p.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]}),Object(T.jsx)(x.a,{children:Object(T.jsx)(b.a,{"aria-label":"location-searching",children:Object(T.jsx)(N.a,{})})}),Object(T.jsx)("div",{className:t.grow}),Object(T.jsx)("div",{className:t.sectionDesktop,children:Object(T.jsx)(b.a,{edge:"end","aria-label":"account of current user","aria-controls":D,"aria-haspopup":"true",onClick:w,color:"inherit",children:Object(T.jsx)(L.a,{})})}),Object(T.jsx)("div",{className:t.sectionMobile,children:Object(T.jsx)(b.a,{"aria-label":"show more","aria-controls":F,"aria-haspopup":"true",onClick:function(e){f(e.currentTarget)},color:"inherit",children:Object(T.jsx)(k.a,{})})})]})}),P,M]})})),F=n(334),P=n(335),R=n(323),z=n(339),W=n(324),_=n(325),B=n(100),G=n.n(B),U=Object(E.b)((function(e){return{currentLocation:e.currentLocation,selectedLocation:e.selectedLocation}}),(function(e){return{onGetLocation:function(){return e(D())}}}))((function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),l=s[0],j=s[1];return G.a.setApiKey("AIzaSyAxA1ecp0z2T9OVhmLP0e6GQZl24k3YLcc"),G.a.fromAddress(e.selectedLocation.address).then((function(e){var t=e.results[0].geometry.location,n=t.lat,a=t.lng;console.log(n,a),r(n),j(a)}),(function(e){console.error(e)})),Object(T.jsxs)(R.a,{center:[39.0997265,-94.5785667],zoom:4,scrollWheelZoom:!1,children:[Object(T.jsx)(z.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(T.jsx)(W.a,{position:[c,l],children:Object(T.jsxs)(_.a,{children:["A pretty CSS3 popup. ",Object(T.jsx)("br",{})," Easily customizable."]})})]})})),H=n(15),J=n(317),V=n(272),Z=n(326),K=n(327),Q=n(338),Y=n(80),q=n.n(Y),X=n(53),$=n.n(X),ee=function(){return $.a.get("http://localhost:3005/restaurant")},te=function(e){return $.a.post("http://localhost:3005/newuser",e)},ne=function(e){return $.a.post("http://localhost:3005/login",e)},ae=function(e){return $.a.post("http://localhost:3005/newreservation",e)},ce=function(){return $.a.get("http://localhost:3005/user_data")},re=function(){return function(e){ee().then((function(t){console.log(t.data),e(function(e){return{type:"UPDATE",value:e}}(t.data))}))}},oe=Object(l.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function ie(e){return Object(T.jsx)(V.a,Object(H.a)({button:!0,component:"a"},e))}var se=Object(E.b)((function(e){return{restaurants:e.restaurants}}),(function(e){return{onDataChange:function(){return e(re())},setLocation:function(t){return e((n=t,console.log("restaurant",n),{type:"SETLOCATION",value:n}));var n},hasLoaded:function(){return e({type:"HASLOADED",value:!0})}}}))((function(e){var t=oe();return Object(a.useEffect)((function(){return e.onDataChange()}),[]),Object(T.jsx)("div",{className:t.root,children:Object(T.jsx)(J.a,{children:e.restaurants.map((function(t,n){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(ie,{onClick:function(n){e.setLocation(t),e.hasLoaded()},children:[Object(T.jsx)(Z.a,{children:Object(T.jsx)(Q.a,{children:Object(T.jsx)(q.a,{})})}),Object(T.jsx)(K.a,{primary:t.name,secondary:t.address})]},t._id)})}))})})})),le=n(5),je=n(328),de=n(329),ue=n(330),be=n(331),he=n(332),pe=n(333),Oe=n(143),xe=n.n(Oe),me=Object(l.a)((function(e){return{root:{maxWidth:750},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),fe=Object(E.b)((function(e){return{restaurant:e.restaurant,selectedLocation:e.selectedLocation,hasLoaded:e.hasLoaded}}),(function(e){return{onDataChange:function(){return e(re())}}}))((function(e){var t=me(),n=c.a.useState(!1),a=Object(i.a)(n,2),r=a[0],o=a[1],l=c.a.useState(null),j=Object(i.a)(l,2),d=j[0],u=j[1],p=function(){u(null)},O="https://".concat(e.selectedLocation.webpage);return Object(T.jsxs)(je.a,{className:t.root,children:[Object(T.jsx)(de.a,{avatar:Object(T.jsx)(q.a,{"aria-label":"restaurant",className:t.avatar}),action:Object(T.jsx)(b.a,{"aria-label":"settings","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},children:Object(T.jsx)(k.a,{})}),title:e.selectedLocation.name,subheader:e.selectedLocation.address}),Object(T.jsxs)(m.a,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:p,children:[Object(T.jsx)(I.b,{to:"/reservation",children:Object(T.jsx)(x.a,{onClick:p,children:"Make a reservation"})}),Object(T.jsx)(I.b,{to:"/order",children:Object(T.jsx)(x.a,{onClick:p,children:"Place an online order"})})]}),Object(T.jsx)(ue.a,{className:t.media,image:e.selectedLocation.image,title:"Food from restaurant"}),Object(T.jsxs)(be.a,{children:[Object(T.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:e.selectedLocation.phone_number}),Object(T.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:Object(T.jsx)("a",{href:O,children:e.selectedLocation.webpage})}),Object(T.jsx)(h.a,{children:!0===e.hasLoaded?Object(T.jsx)("p",{children:e.selectedLocation.hours.map((function(e){return Object(T.jsx)(h.a,{component:"p",children:e})}))}):Object(T.jsx)("p",{children:"No hours to display"})})]}),Object(T.jsx)(he.a,{disableSpacing:!0,children:Object(T.jsx)(b.a,{className:Object(le.a)(t.expand,Object(s.a)({},t.expandOpen,r)),onClick:function(){o(!r)},"aria-expanded":r,"aria-label":"show menu",children:Object(T.jsx)(xe.a,{})})}),Object(T.jsx)(pe.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(T.jsx)("div",{className:"menu",children:Object(T.jsx)(be.a,{children:!0===e.hasLoaded?e.selectedLocation.menu?Object(T.jsx)("p",{children:e.selectedLocation.menu.item.map((function(e){return Object(T.jsxs)(h.a,{children:[Object(T.jsx)("p",{children:e.name}),Object(T.jsx)("p",{children:e.description}),Object(T.jsx)("p",{children:e.price})]})}))}):Object(T.jsx)("p",{children:" No menu items to display"}):Object(T.jsx)("p",{children:"No menu items to display"})})})})]})})),ge=function(e){return Object(T.jsx)("div",{className:"restaurants",children:Object(T.jsxs)(F.a,{children:[Object(T.jsx)(P.a,{xs:"4",children:Object(T.jsx)(se,{})}),Object(T.jsx)(P.a,{xs:"4",children:Object(T.jsx)(fe,{})}),Object(T.jsx)(P.a,{xs:"4",children:Object(T.jsx)(U,{})})]})})},ve=n(148),Le=Object(l.a)((function(e){return{root:{paddingTop:50,backgroundColor:e.palette.background.paper,display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(50),height:e.spacing(50)}}}}));function ye(e){return Object(T.jsx)(V.a,Object(H.a)({button:!0,component:"a"},e))}var Ce=Object(E.b)((function(e){return{restaurant:e.restaurant,selectedLocation:e.selectedLocation,hasLoaded:e.hasLoaded,selectedItems:e.selectedItems}}),(function(e){return{onDataChange:function(){return e(re())},setItems:function(t){return e((n=t,console.log(n),{type:"SELECTEDITEMS",value:n}));var n}}}))((function(e){var t=Le();return console.log(e.selectedLocation),console.log(e.hasLoaded),Object(T.jsxs)("div",{className:t.root,children:[Object(T.jsxs)(ve.a,{elevation:3,children:[Object(T.jsxs)(h.a,{component:"h1",children:["Order from ",e.selectedLocation.name]}),!0===e.hasLoaded?e.selectedLocation.menu?Object(T.jsx)(J.a,{children:e.selectedLocation.menu.item.map((function(t){return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(ye,{onClick:function(n){return e.setItems(t)},children:Object(T.jsx)(K.a,{primary:t.name,secondary:t.price})},t._id)})}))}):Object(T.jsx)("p",{children:"No items to display"}):Object(T.jsx)("p",{children:"no items to display"})]}),Object(T.jsxs)(ve.a,{children:[Object(T.jsx)(h.a,{children:"Cart"}),!0===e.hasLoaded?e.selectedItems?Object(T.jsx)("p",{children:Object(T.jsxs)(h.a,{children:[Object(T.jsx)("p",{children:e.selectedItems.name}),Object(T.jsx)("p",{children:e.selectedItems.price})]})}):Object(T.jsx)("p",{children:" No menu items to display"}):Object(T.jsx)("p",{children:"No menu items to display"})]})]})})),we=n(337),ke=n(336),Se=n(144),Ne=n.n(Se),Ee=Object(E.b)((function(e){return{restaurant:e.restaurant,selectedLocation:e.selectedLocation}}),(function(e){return{onDataChange:function(){return e(re())}}}))((function(e){var t=Object(l.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:250},header:{marginRight:"20px"}}}))(),n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),j=Object(i.a)(s,2),d=j[0],u=j[1],b=Object(a.useState)(""),p=Object(i.a)(b,2),O=p[0],x=p[1],m=Object(a.useState)(""),f=Object(i.a)(m,2),g=f[0],v=f[1];return Object(a.useEffect)((function(){ce().then((function(e){console.log(e.data),o(e.data.reservations),v(e.data._id)})).catch((function(e){return console.log(e)}))}),[]),console.log(g,r),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(ve.a,{elevation:3,children:[Object(T.jsxs)(h.a,{component:"h1",className:t.header,children:["Reservation for ",e.selectedLocation.name]}),Object(T.jsxs)("form",{className:t.container,noValidate:!0,children:[Object(T.jsx)(Ne.a,{dateFormat:"yyyy/MM/dd",selected:d,onChange:function(e){return u(e)}}),Object(T.jsx)(we.a,{id:"outlined-basic",label:"Time",onChange:function(e){var t=e.target.value;x(t)}}),Object(T.jsxs)(ke.a,{type:"submit",color:"primary",variant:"contained",size:"small",onClick:function(t){t.preventDefault(),ae({date:d,time:O,user:g,restaurant:e.selectedLocation._id}).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)}))},children:["Schedule"," "]})]})]}),Object(T.jsx)(h.a,{component:"h1",children:"Reservation History"}),r?Object(T.jsx)(J.a,{children:r.map((function(e){return Object(T.jsxs)(V.a,{children:[Object(T.jsx)("h3",{children:e.date}),Object(T.jsx)("p",{children:"@"}),Object(T.jsx)("h3",{children:e.time})]},e._id)}))}):Object(T.jsx)("h3",{children:"No Results to Display"})]})})),De=n(19),Ie=function(){var e=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(300),height:e.spacing(16)}}}}))(),t=Object(a.useState)({}),n=Object(i.a)(t,2),c=n[0],r=n[1],o=Object(De.f)();function j(e){var t=e.target,n=t.name,a=t.value;r(Object(H.a)(Object(H.a)({},c),{},Object(s.a)({},n,a)))}return Object(T.jsxs)("div",{className:e.root,children:[Object(T.jsxs)(ve.a,{elevation:3,children:[Object(T.jsx)("div",{children:Object(T.jsx)(we.a,{id:"standard-basic",onChange:j,name:"email",label:"Email"})}),Object(T.jsx)("div",{children:Object(T.jsx)(we.a,{id:"standard-basic",onChange:j,name:"password",type:"password",label:"Password"})})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)(ke.a,{variant:"contained",onClick:function(e){e.preventDefault(),ne({email:c.email,password:c.password}).then((function(e){console.log(e.data),o.push("/home")})).catch((function(e){return console.log(e)}))},color:"primary",children:"Login"}),Object(T.jsx)(I.b,{to:"/signup",children:Object(T.jsx)(ke.a,{variant:"contained",color:"primary",children:"Sign Up"})})]})]})},Te=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(300),height:e.spacing(50)}}}})),Ae=function(){var e=Te(),t=Object(a.useState)({}),n=Object(i.a)(t,2),c=n[0],r=n[1];function o(e){var t=e.target,n=t.name,a=t.value;r(Object(H.a)(Object(H.a)({},c),{},Object(s.a)({},n,a)))}var l=Object(De.f)();return console.log(c),Object(T.jsxs)("div",{className:e.root,children:[Object(T.jsxs)(ve.a,{elevation:3,children:[Object(T.jsx)("div",{children:Object(T.jsx)(we.a,{id:"standard-basic",onChange:o,name:"firstname",label:"First Name"})}),Object(T.jsx)("div",{children:Object(T.jsx)(we.a,{id:"standard-basic",onChange:o,name:"lastname",label:"Last Name"})}),Object(T.jsx)("div",{children:Object(T.jsx)(we.a,{id:"standard-basic",onChange:o,name:"email",label:"Email"})}),Object(T.jsx)("div",{children:Object(T.jsx)(we.a,{id:"standard-basic",onChange:o,name:"password",type:"password",label:"Password"})})]}),Object(T.jsx)("div",{children:Object(T.jsx)(ke.a,{variant:"contained",onClick:function(e){e.preventDefault(),te({firstname:c.firstname,lastname:c.lastname,email:c.email,password:c.password}).then((function(e){console.log(e.data),l.push("/login")})).catch((function(e){return console.log(e)}))},color:"primary",children:"Sign Up"})})]})};var Me=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)(I.a,{children:[Object(T.jsx)(M,{}),Object(T.jsxs)(De.c,{children:[Object(T.jsx)(De.a,{exact:!0,path:"/",component:Ie}),Object(T.jsx)(De.a,{path:"/login",component:Ie}),Object(T.jsx)(De.a,{path:"/signup",component:Ae}),Object(T.jsx)(De.a,{path:"/home",component:ge}),Object(T.jsx)(De.a,{path:"/signup",component:Ae}),Object(T.jsx)(De.a,{path:"/order",component:Ce}),Object(T.jsx)(De.a,{path:"/reservation",component:Ee})]})]})})},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,341)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},Pe=n(66),Re=n(145),ze={restaurants:[],currentLocation:[51.5,55],selectedLocation:{},hasLoaded:!1,selectedItems:{}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE":return Object(H.a)(Object(H.a)({},e),{},{restaurants:t.value});case"GETLOC":return Object(H.a)(Object(H.a)({},e),{},{currentLocation:t.value});case"SETLOCATION":return console.log("hit set"),Object(H.a)(Object(H.a)({},e),{},{selectedLocation:t.value});case"HASLOADED":return Object(H.a)(Object(H.a)({},e),{},{hasLoaded:t.value});case"SELECTEDITEMS":return Object(H.a)(Object(H.a)({},e),{},{selectedItems:t.value})}return e},_e=Object(Pe.c)(We,Object(Pe.a)(Re.a));n(268),n(269);o.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(E.a,{store:_e,children:Object(T.jsx)(Me,{})})}),document.getElementById("root")),Fe()}},[[270,1,2]]]);
//# sourceMappingURL=main.33733ad9.chunk.js.map