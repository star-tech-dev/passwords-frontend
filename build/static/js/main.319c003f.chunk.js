(this["webpackJsonppasswords-frontend"]=this["webpackJsonppasswords-frontend"]||[]).push([[0],{55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(25),s=n.n(a),u=n(6),i=n(14),o=n(28),l=n(29),j=[{name:"home",path:"/"},{name:"auth",path:"/auth",forGuests:!0},{name:"item",path:"/item/:id",private:!0},{name:"profile",path:"/profile",private:!0},{name:"add",path:"/add",private:!0},{name:"404",path:"/404"}],d=n(4),f=n.n(d),b=n(3),O=n(7),h=n(11),v=n(5),x=Object(v.c)(),p=Object(v.c)(),m=n(26),g=n.n(m),w=Object(v.c)(),y=w.createEvent("open modal"),C=w.createEvent("close modal"),k=w.createEvent("close last modal"),N=w.createEvent("close all modals"),S=function(e){var t=Object(b.a)({method:"get",withCredentials:!0},e);return t.url="".concat("https://passwords-api.star-tech.dev").concat(e.url),"get"===t.method&&Object.prototype.hasOwnProperty.call(t,"data")&&(t.params=e.data,delete t.data),g()(t).then((function(e){return e.data})).catch((function(e){throw 423===e.response.status&&y("locker"),e}))},E=p.createEffect().use((function(){return S({method:"post",url:"/lock"})})),I=p.createEffect().use((function(e){return S({method:"post",url:"/unlock",data:{securityCode:e}})})),P=p.createEvent(),R=p.createEvent(),L=x.effect().use((function(e){return S({method:"post",data:{username:e.username,password:e.password},url:"/register"})})),D=x.effect().use((function(e){return S({method:"post",data:{username:e.username,password:e.password},url:"/login"})})),_=x.effect().use((function(){return S({url:"/logout"}).catch((function(){return null}))})),B=x.effect().use((function(){return S({url:"/auth"}).catch((function(){return{user:null}}))})),A=x.event(),M=x.effect().use((function(e){return S({method:"post",url:"/security-code",data:{securityCode:e}})})),W=x.store({user:null}).on(L.done,(function(e,t){var n=t.result;return e=Object(b.a)(Object(b.a)({},e),{},{user:n})})).on(D.done,(function(e,t){var n=t.result;return e=Object(b.a)(Object(b.a)({},e),{},{user:n.user}),P(),e})).on(_.done,(function(e){return e=Object(b.a)(Object(b.a)({},e),{},{user:null})})).on(B.done,(function(e,t){var n=t.result;return e=Object(b.a)(Object(b.a)({},e),{},{user:n.user}),R(n.isAppLocked),e})).on(A,(function(e){return e.user?(e.user.hasSecurityCode||y("set_security_code"),e):e})).on(M,(function(e){return C("set_security_code"),e}));function F(){return(F=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W.getState().user){e.next=4;break}return e.next=4,B();case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e){return function(t){return function(t,n){var c=Object(h.a)(t,n).toActivate.map((function(t){return e.find((function(e){return e.name===t})).onActivate})).filter(Boolean);return Promise.all(c.map((function(e){return e()}))).then((function(e){return function(e){return F.apply(this,arguments)}(e)})).then((function(e){var n=e.reduce((function(e,t){return Object.assign(e,t)}),{});return Object(b.a)(Object(b.a)({},t),{},{data:n})}))}}};var H=function(e){var t=j.find((function(t){return t.name===e})),n=!!t&&!!t.forGuests,c=!!t&&!!t.private;return n?!W.getState().user:!c||!!W.getState().user},Z=function(e){return function(t,n,c){if(!H(t.name))return e.cancel();c()}};function U(){var e=Object(i.b)(j,{defaultRoute:"home"});return e.usePlugin(o.a),e.usePlugin(Object(l.a)()),e.useMiddleware(T(j),Z),e}var z=Object(v.c)().event(),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},J=n(10),q=Object(v.e)({isLocked:!1}).on(E.done,(function(e){return e=Object(b.a)(Object(b.a)({},e),{},{isLocked:!0})})).on(I.done,(function(e){return e=Object(b.a)(Object(b.a)({},e),{},{isLocked:!1})})).on(P,(function(e){return e.isLocked?y("locker"):C("locker"),e})).on(R,(function(e,t){return e.isLocked=t,P(),e})),K=(n(55),n(0));var Q=function(){var e=Object(J.a)(W).user;return Object(K.jsxs)("header",{className:"Header Component flex a-center j-between",children:[Object(K.jsxs)("nav",{children:[Object(K.jsx)(u.a,{routeName:"home",children:"Home"}),Object(K.jsx)(u.a,{routeName:"auth",children:"Auth"}),Object(K.jsx)(u.a,{routeName:"profile",children:"Profile"})]}),Object(K.jsxs)("div",{className:"flex a-center",children:[Object(K.jsx)("div",{children:Object(K.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),E()},children:"lock"})}),Object(K.jsxs)("div",{children:["user: ",e?e.username:"null"]})]})]})},V=function(e){var t=e.children;return Object(K.jsx)("div",{className:"layout -default",children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)(Q,{}),Object(K.jsx)("main",{children:t})]})})},X=(n(57),function(e){var t=e.children;return Object(K.jsx)("div",{className:"layout -simple",children:Object(K.jsx)("main",{children:Object(K.jsx)("div",{className:"container",children:t})})})}),Y=Object(v.c)(),$=Y.createEffect().use((function(){return S({url:"/items"}).catch((function(){return[]}))})),ee=Y.createEffect().use((function(e){return S({data:{id:e},url:"/item"})})),te=Y.createEffect().use((function(e){return S({method:"post",data:e,url:"/items"})})),ne=Object(v.e)([]).on($.done,(function(e,t){return t.result})).on(te.done,(function(e,t){var n=t.result;return n&&e.push(n),e}));var ce=function(e){var t=e.data,n="".concat(t.name," (").concat(t._id,")")||!1,c=Object(u.d)();return Object(K.jsx)("div",{className:"Item Component",onClick:function(){c.navigate("item",{id:t._id})},children:Object(K.jsx)("div",{children:n})})};var re=function(){var e=Object(J.a)(ne),t=Object(u.c)().router,n=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n()}),[]),Object(K.jsxs)("div",{className:"Items Component",children:[Object(K.jsx)("div",{children:e.map((function(e){return Object(K.jsx)(ce,{data:e},e._id)}))}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{onClick:function(){t.navigate("add")},children:"add"})})]})};var ae=function(){var e=Object(J.a)(W).user,t=Object(u.d)();return Object(c.useEffect)((function(){e||t.navigate("auth")}),[e]),Object(K.jsx)("div",{className:"page -home",children:Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"Items"}),Object(K.jsx)("div",{children:Object(K.jsx)(re,{})})]})})};var se=function(){var e=Object(u.d)(),t=Object(J.a)(W).user,n=function(){e.navigate("home")},r=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t||n()}),[t]),t?Object(K.jsxs)("div",{className:"page -profile",children:[Object(K.jsx)("div",{children:"ProfilePage"}),Object(K.jsxs)("div",{className:"flex a-center",children:[Object(K.jsx)("div",{children:"name"}),Object(K.jsx)("input",{type:"text",value:t.username,readOnly:!0})]}),Object(K.jsxs)("div",{className:"flex a-center",children:[Object(K.jsx)("div",{children:"hasSecurityCode"}),Object(K.jsx)("input",{type:"checkbox",checked:t.hasSecurityCode,readOnly:!0})]}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{onClick:r,children:"logout"})})]}):null},ue=n(2),ie=function(e){setTimeout(e,0)};var oe=function(e){return Object(K.jsx)("div",Object(b.a)(Object(b.a)({},e),{},{className:"icon -cross",children:Object(K.jsx)("svg",{width:"18px",height:"18px",viewBox:"0 0 18 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(K.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(K.jsx)("g",{transform:"translate(-410.000000, -395.000000)",fill:"currentColor",fillRule:"nonzero",children:Object(K.jsx)("g",{transform:"translate(121.000000, 380.000000)",children:Object(K.jsx)("g",{id:"information",transform:"translate(289.000000, 15.000000)",children:Object(K.jsx)("path",{d:"M9,0 C13.9626,0 18,4.03745455 18,9.00005455 C18,13.9626545 13.9626,18 9,18 C4.0374,18 0,13.9626545 0,9.00005455 C0,4.03745455 4.0374,0 9,0 Z M9,7.63636364 C8.54814545,7.63636364 8.18181818,8.00269091 8.18181818,8.45454545 L8.18181818,13.3636364 C8.18181818,13.8154909 8.54814545,14.1818182 9,14.1818182 C9.45185455,14.1818182 9.81818182,13.8154909 9.81818182,13.3636364 L9.81818182,8.45454545 C9.81818182,8.00269091 9.45185455,7.63636364 9,7.63636364 Z M8.99989091,3.81818182 C8.39847273,3.81818182 7.9092,4.30778182 7.9092,4.90958182 C7.9092,5.51083636 8.39847273,6 8.99989091,6 C9.60130909,6 10.0905818,5.51083636 10.0905818,4.90958182 C10.0905818,4.30778182 9.60130909,3.81818182 8.99989091,3.81818182 Z"})})})})})})}))},le=(n(58),Object(c.forwardRef)((function(e,t){t||(t=Object(c.useRef)());var n=Object(c.useState)(e.error),r=Object(ue.a)(n,2),a=r[0],s=r[1],u=Object(c.useRef)(null),i="input -component ".concat(e.error?"-error":""),o=function(){ie((function(){var e;u.current&&(null===(e=u.current)||void 0===e||e.focus())}))},l=function(){ie((function(){var e;u.current&&(null===(e=u.current)||void 0===e||e.select())}))};return Object(c.useEffect)((function(){t.current={focus:o,select:l},console.log("setting by props",e.error),s(e.error)}),[e]),Object(K.jsxs)("div",{className:i,children:[Object(K.jsx)("div",{className:"buttons",children:a?Object(K.jsx)("div",{className:"icon-error",children:Object(K.jsx)(oe,{title:a})}):null}),Object(K.jsx)("input",Object(b.a)(Object(b.a)({},e),{},{ref:u,type:e.type||"text"}))]})})));le.displayName="Input";var je=le;n(59);var de=function(){return Object(K.jsx)("div",{className:"component -loader-round",children:Object(K.jsx)("svg",{className:"svg",width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(K.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(K.jsx)("g",{transform:"translate(-629.000000, -385.000000)",fill:"currentColor",fillRule:"nonzero",children:Object(K.jsx)("path",{d:"M631.20799,398.4917 C631.37363,398.8603 631.2091,399.2933 630.8405,399.459 C630.4719,399.6246 630.03881,399.4601 629.873162,399.0915 C629.300253,397.8166 629,396.4285 629,395 C629,389.47726 633.47726,385 639,385 C644.5227,385 649,389.47726 649,395 C649,400.5227 644.5227,405 639,405 C636.65339,405 634.42972,404.1881 632.65267,402.7281 C632.34042,402.4715 632.29526,402.0105 632.55179,401.6982 C632.80833,401.386 633.26941,401.3408 633.58166,401.5973 C635.09934,402.8442 636.9955,403.5366 639,403.5366 C643.7145,403.5366 647.5366,399.7145 647.5366,395 C647.5366,390.28549 643.7145,386.46341 639,386.46341 C634.28549,386.46341 630.46341,390.28549 630.46341,395 C630.46341,396.2208 630.71947,397.4046 631.20799,398.4917 Z",id:"Path"})})})})})},fe=(n(60),Object(c.forwardRef)((function(e,t){t||(t=Object(c.useRef)());var n="button -component ".concat(e.fullWidth?"-full-width":""," ").concat(e.loading?"-loading":""),r=Object(c.useRef)(null),a={};return Object(c.useEffect)((function(){t.current={},delete(a=Object(b.a)({},e)).fullWidth,delete a.loading}),[e]),Object(K.jsx)("div",{className:n,children:Object(K.jsx)("button",Object(b.a)(Object(b.a)({},a),{},{ref:r,children:e.loading?Object(K.jsx)("div",{className:"loader",children:Object(K.jsx)(de,{})}):e.children}))})})));fe.displayName="Button";var be=fe;n(61);var Oe=function(e){var t=e.onRegisterShow,n=Object(c.useState)(""),a=Object(ue.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)(""),l=Object(ue.a)(o,2),j=l[0],d=l[1],b=Object(c.useState)(""),h=Object(ue.a)(b,2),v=h[0],x=h[1],p=Object(c.useState)(""),m=Object(ue.a)(p,2),g=m[0],w=m[1],y=Object(u.d)(),C=r.a.createRef(),k=r.a.createRef(),N=Object(c.useState)(!1),S=Object(ue.a)(N,2),E=S[0],I=S[1],P=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,D({username:s,password:j}).then((function(){return!0})).catch((function(){return k.current.focus(),k.current.select(),w("Failed to sign in"),!1}));case 3:if(t=e.sent,I(!1),!t){e.next=9;break}return e.next=8,y.navigate("home");case 8:A();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){ie((function(){C.current.focus()}))}),[]),Object(K.jsx)("div",{className:"component -login-form",children:Object(K.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=function(){var e=[];return s.length?(j.length||(e.push({field:"password",message:"The field cannot be empty"}),s.length&&k.current.focus()),e):(e.push({field:"username",message:"The field cannot be empty"}),C.current.focus(),e)}();if(t.length)return t.forEach((function(e){switch(e.field){case"username":x(e.message);break;case"password":w(e.message)}})),void console.log({username:s,password:j});P()},children:[Object(K.jsx)("div",{children:Object(K.jsx)(je,{ref:C,placeholder:"Username",error:v,onInput:function(){return x("")},onChange:function(e){return i(e.target.value)},onBlur:function(e){return e.target.value.length?null:x("")}})}),Object(K.jsx)("div",{children:Object(K.jsx)(je,{ref:k,type:"password",placeholder:"Password",error:g,onInput:function(){return w("")},onChange:function(e){return d(e.target.value)},onBlur:function(e){return e.target.value.length?null:w("")}})}),Object(K.jsx)("div",{className:"button-block",children:Object(K.jsx)(be,{type:"submit",loading:E,fullWidth:!0,children:"Sign in"})}),Object(K.jsxs)("div",{children:[Object(K.jsx)("span",{children:"or "}),Object(K.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),t&&t()},children:"create new account"})]})]})})};var he=function(e){var t=e.onLoginShow,n=Object(c.useState)(""),a=Object(ue.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)(""),l=Object(ue.a)(o,2),j=l[0],d=l[1],b=Object(c.useState)(""),h=Object(ue.a)(b,2),v=h[0],x=h[1],p=Object(u.d)(),m=r.a.createRef(),g=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,L({username:s,email:v,password:j}).then(Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.navigate("home");case 2:A();case 3:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){ie((function(){m.current.focus()}))}),[]),Object(K.jsx)("div",{className:"component -register-form",children:Object(K.jsxs)("form",{onSubmit:g,children:[Object(K.jsx)("div",{children:Object(K.jsx)(je,{ref:m,placeholder:"Username",onChange:function(e){return i(e.target.value)}})}),Object(K.jsx)("div",{children:Object(K.jsx)(je,{type:"email",placeholder:"Email",onChange:function(e){return x(e.target.value)}})}),Object(K.jsx)("div",{children:Object(K.jsx)(je,{placeholder:"Password",onChange:function(e){return d(e.target.value)}})}),Object(K.jsx)("div",{className:"button-block",children:Object(K.jsx)(be,{type:"submit",fullWidth:!0,children:"Sign up"})}),Object(K.jsxs)("div",{children:[Object(K.jsx)("span",{children:"or "}),Object(K.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),t&&t()},children:"return to login"})]})]})})};n(62);var ve=function(){var e=Object(c.useState)("login"),t=Object(ue.a)(e,2),n=t[0],r=t[1];return Object(K.jsxs)("div",{className:"page -auth",children:[Object(K.jsx)("h1",{children:"register"===n?Object(K.jsx)("span",{children:"Let's create a new account:"}):Object(K.jsx)("span",{children:"Hi, I'm your password manager."})}),Object(K.jsx)("div",{className:"container -narrow",children:"register"===n?Object(K.jsx)(he,{onLoginShow:function(){return r("login")}}):Object(K.jsx)(Oe,{onRegisterShow:function(){return r("register")}})})]})},xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=!1;return Object.entries(e).every((function(e){return!!t.includes(e[0])||(!e[1]||(n=!0,!1))})),!n};var pe=function(){var e=Object(u.c)().router,t=Object(c.useState)(""),n=Object(ue.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(ue.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(""),d=Object(ue.a)(j,2),b=d[0],h=d[1],v=Object(c.useState)(""),x=Object(ue.a)(v,2),p=x[0],m=x[1],g=Object(c.useState)(""),w=Object(ue.a)(g,2),y=w[0],C=w[1],k=function(){var t=Object(O.a)(f.a.mark((function t(n){var c,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!xe(c={group:null,name:r,url:o,username:b,password:p,note:y},["group"])){t.next=6;break}alert("Cannot save empty item."),t.next=10;break;case 6:return t.next=8,te(c);case 8:a=t.sent,e.navigate("item",{id:a._id});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(K.jsxs)("div",{className:"Page Home",children:[Object(K.jsx)("div",{children:"Add newItem:"}),Object(K.jsxs)("form",{onSubmit:k,children:[Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"name"}),Object(K.jsx)("input",{type:"text",name:"name",value:r,onInput:function(e){return a(e.target.value)}})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"url"}),Object(K.jsx)("input",{type:"text",name:"url",value:o,onInput:function(e){return l(e.target.value)}})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"username"}),Object(K.jsx)("input",{type:"text",name:"username",value:b,onInput:function(e){return h(e.target.value)}})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"password"}),Object(K.jsx)("input",{type:"text",name:"password",value:p,onInput:function(e){return m(e.target.value)}})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"note"}),Object(K.jsx)("textarea",{name:"note",value:y,onInput:function(e){return C(e.target.value)}})]}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{type:"submit",children:"create"})})]})]})};var me=function(){var e=Object(c.useState)(null),t=Object(ue.a)(e,2),n=t[0],r=t[1],a=Object(u.c)(),s=a.route,i=a.router;return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee(s.params.id).then((function(e){r(e)})).catch((function(){return i.navigate("home")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[s.params.id]),Object(K.jsxs)("div",{className:"Page Profile",children:[Object(K.jsx)("div",{children:"ItemPage"}),n?Object(K.jsxs)("div",{children:[Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"name"}),Object(K.jsx)("input",{type:"text",value:n.name,readOnly:!0})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"url"}),Object(K.jsx)("input",{type:"text",value:n.url,readOnly:!0})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"username"}),Object(K.jsx)("input",{type:"text",value:n.username,readOnly:!0})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"password"}),Object(K.jsx)("input",{type:"text",value:n.password,readOnly:!0})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{children:"note"}),Object(K.jsx)("textarea",{value:n.note,readOnly:!0})]})]}):null]})};var ge=function(){return Object(K.jsx)("div",{className:"page -not-found",children:Object(K.jsx)("div",{children:"404"})})};n(63);var we=function(){return Object(K.jsx)("div",{className:"component -page-loader flex center",children:Object(K.jsx)(de,{})})},ye=n(8),Ce=Object(v.e)([]).on(y,(function(e,t){var n=new Set([].concat(Object(ye.a)(e),[t]));return e=Array.from(n)})).on(C,(function(e,t){return e=e.filter((function(e){return e!==t}))})).on(k,(function(e){return e=e.slice(0,1)})).on(N,(function(){return[]}));var ke=function(){return Object(K.jsx)("div",{className:"icon -cross",children:Object(K.jsx)("div",{children:"x"})})};n(64);var Ne=function(e){var t=e.id,n=e.children,r=e.closable,a=void 0===r||r,s=e.heading,u=Object(J.a)(Ce),i=Object(c.useState)(!1),o=Object(ue.a)(i,2),l=o[0],j=o[1];Object(c.useEffect)((function(){var e=Ce.watch((function(e){j(e.includes(t))}));return function(){e()}}),[u]);var d=function(){a&&C(t)};return l?Object(K.jsx)("div",{className:"modal component",onClick:function(e){var t=e.target;t.classList.contains("Modal")&&t.classList.contains("Component")&&d()},children:Object(K.jsxs)("dialog",{open:!0,className:"dialog",children:[a&&Object(K.jsx)("div",{className:"close",onClick:d,children:Object(K.jsx)(ke,{})}),Object(K.jsx)("div",{className:"head",children:s}),Object(K.jsx)("div",{className:"body",children:n})]})}):null};var Se=function(){var e="set_security_code",t=Object(c.useState)(""),n=Object(ue.a)(t,2),r=n[0],a=n[1],s=null,u=function(){var t=Object(O.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,_();case 3:C(e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,M(r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){ie((function(){var e;null===(e=s)||void 0===e||e.focus()}))}),[s]),Object(K.jsxs)(Ne,{id:e,closable:!1,children:[Object(K.jsxs)("form",{onSubmit:i,children:[Object(K.jsx)("div",{children:"Set your security code:"}),Object(K.jsx)("div",{children:Object(K.jsx)("input",{type:"text",ref:function(e){s=e},value:r,onInput:function(e){return a(e.target.value)}})}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{type:"submit",children:"Set"})}),Object(K.jsx)("div",{children:"Do not forget your secret code!"})]}),Object(K.jsx)("div",{children:Object(K.jsx)("a",{href:"#",onClick:u,children:"logout"})})]})};var Ee=function(){var e="locker",t=Object(c.useState)(""),n=Object(ue.a)(t,2),r=n[0],a=n[1],s=null,u=function(){var t=Object(O.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,_();case 3:C(e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,I(r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){ie((function(){var e;null===(e=s)||void 0===e||e.focus()}))}),[s]),Object(K.jsxs)(Ne,{id:e,closable:!1,children:[Object(K.jsxs)("form",{onSubmit:i,children:[Object(K.jsx)("div",{children:"App was locked."}),Object(K.jsx)("div",{children:"Enter your security code to unlock:"}),Object(K.jsx)("div",{children:Object(K.jsx)("input",{type:"text",ref:function(e){s=e},value:r,onInput:function(e){return a(e.target.value)}})}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{type:"submit",children:"Unlock"})})]}),Object(K.jsx)("div",{children:Object(K.jsx)("a",{href:"#",onClick:u,children:"logout"})})]})};n(65);var Ie=function(){var e=Object(c.useState)(!1),t=Object(ue.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=Ce.watch((function(e){r(!!e.length)}));return function(){e()}})),Object(K.jsxs)("div",{className:"Modal Controller ".concat(n?"-active":""),children:[Object(K.jsx)(Se,{}),Object(K.jsx)(Ee,{})]})};var Pe=function(){var e=Object(u.c)().route,t=Object(J.a)(q);function n(){switch(e.name){case"home":return Object(K.jsx)(V,{children:Object(K.jsx)(ae,{})});case"auth":return Object(K.jsx)(X,{children:Object(K.jsx)(ve,{})});case"profile":return Object(K.jsx)(V,{children:Object(K.jsx)(se,{})});case"add":return Object(K.jsx)(V,{children:Object(K.jsx)(pe,{})});case"item":return Object(K.jsx)(V,{children:Object(K.jsx)(me,{})});default:return Object(K.jsx)(X,{children:Object(K.jsx)(ge,{})})}}return Object(c.useEffect)((function(){console.log("[app] mounted");var e=z.watch((function(e){e&&A()}));return function(){e()}}),[]),Object(c.useEffect)((function(){P()}),[t]),e?Object(K.jsxs)("div",{className:"app",children:[Object(K.jsx)(n,{}),Object(K.jsx)(Ie,{})]}):Object(K.jsx)(we,{})},Re=(n(66),U());s.a.render(Object(K.jsx)(u.b,{router:Re,children:Object(K.jsx)(Pe,{})}),document.getElementById("root")),Re.start((function(){z(!0)})),G(console.log)}},[[67,1,2]]]);
//# sourceMappingURL=main.319c003f.chunk.js.map