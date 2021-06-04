(this["webpackJsonppasswords-frontend"]=this["webpackJsonppasswords-frontend"]||[]).push([[0],{58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(25),s=n.n(a),i=n(6),u=n(14),o=n(28),l=n(29),j=[{name:"home",path:"/"},{name:"auth",path:"/auth",forGuests:!0},{name:"item",path:"/item/:id",private:!0},{name:"profile",path:"/profile",private:!0},{name:"add",path:"/add",private:!0},{name:"404",path:"/404"}],d=n(4),f=n.n(d),b=n(3),O=n(7),h=n(11),v=n(5),p=Object(v.c)(),x=Object(v.c)(),m=n(26),g=n.n(m),w=Object(v.c)(),C=w.createEvent("open modal"),y=w.createEvent("close modal"),k=w.createEvent("close last modal"),N=w.createEvent("close all modals"),S=function(e){var t=Object(b.a)({method:"get",withCredentials:!0},e);return t.url="".concat("https://passwords-api.star-tech.dev").concat(e.url),"get"===t.method&&Object.prototype.hasOwnProperty.call(t,"data")&&(t.params=e.data,delete t.data),g()(t).then((function(e){return e.data})).catch((function(e){throw 423===e.response.status&&C("locker"),e}))},E=x.createEffect().use((function(){return S({method:"post",url:"/lock"})})),I=x.createEffect().use((function(e){return S({method:"post",url:"/unlock",data:{securityCode:e}})})),L=x.createEvent(),R=x.createEvent(),_=p.effect().use((function(e){return S({method:"post",data:{username:e.username,password:e.password},url:"/register"})})),D=p.effect().use((function(e){return S({method:"post",data:{username:e.username,password:e.password},url:"/login"})})),M=p.effect().use((function(){return S({url:"/logout"}).catch((function(){return null}))})),P=p.effect().use((function(){return S({url:"/auth"}).catch((function(){return{user:null}}))})),z=p.event(),A=p.effect().use((function(e){return S({method:"post",url:"/security-code",data:{securityCode:e}})})),B=p.store({user:null}).on(_.done,(function(e,t){var n=t.result;return e=Object(b.a)(Object(b.a)({},e),{},{user:n})})).on(D.done,(function(e,t){var n=t.result;return e=Object(b.a)(Object(b.a)({},e),{},{user:n.user}),L(),e})).on(M.done,(function(e){return e=Object(b.a)(Object(b.a)({},e),{},{user:null})})).on(P.done,(function(e,t){var n=t.result;return e=Object(b.a)(Object(b.a)({},e),{},{user:n.user}),R(n.isAppLocked),e})).on(z,(function(e){return e.user?(e.user.hasSecurityCode||C("set_security_code"),e):e})).on(A,(function(e){return y("set_security_code"),e}));function W(){return(W=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B.getState().user){e.next=4;break}return e.next=4,P();case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(e){return function(t){return function(t,n){var c=Object(h.a)(t,n).toActivate.map((function(t){return e.find((function(e){return e.name===t})).onActivate})).filter(Boolean);return Promise.all(c.map((function(e){return e()}))).then((function(e){return function(e){return W.apply(this,arguments)}(e)})).then((function(e){var n=e.reduce((function(e,t){return Object.assign(e,t)}),{});return Object(b.a)(Object(b.a)({},t),{},{data:n})}))}}};var T=function(e){var t=j.find((function(t){return t.name===e})),n=!!t&&!!t.forGuests,c=!!t&&!!t.private;return n?!B.getState().user:!c||!!B.getState().user},q=function(e){return function(t,n,c){if(!T(t.name))return e.cancel();c()}};function G(){var e=Object(u.b)(j,{defaultRoute:"home"});return e.usePlugin(o.a),e.usePlugin(Object(l.a)()),e.useMiddleware(Z(j),q),e}var H=Object(v.c)().event(),U=n(10),F=Object(v.e)({isLocked:!1}).on(E.done,(function(e){return e=Object(b.a)(Object(b.a)({},e),{},{isLocked:!0})})).on(I.done,(function(e){return e=Object(b.a)(Object(b.a)({},e),{},{isLocked:!1})})).on(L,(function(e){return e.isLocked?C("locker"):y("locker"),e})).on(R,(function(e,t){return e.isLocked=t,L(),e})),J=n(2),X=(n(58),n(0));var Y=function(){return Object(X.jsx)("div",{className:"component -loader-round",children:Object(X.jsx)("svg",{className:"svg",width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(X.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(X.jsx)("g",{transform:"translate(-629.000000, -385.000000)",fill:"currentColor",fillRule:"nonzero",children:Object(X.jsx)("path",{d:"M631.20799,398.4917 C631.37363,398.8603 631.2091,399.2933 630.8405,399.459 C630.4719,399.6246 630.03881,399.4601 629.873162,399.0915 C629.300253,397.8166 629,396.4285 629,395 C629,389.47726 633.47726,385 639,385 C644.5227,385 649,389.47726 649,395 C649,400.5227 644.5227,405 639,405 C636.65339,405 634.42972,404.1881 632.65267,402.7281 C632.34042,402.4715 632.29526,402.0105 632.55179,401.6982 C632.80833,401.386 633.26941,401.3408 633.58166,401.5973 C635.09934,402.8442 636.9955,403.5366 639,403.5366 C643.7145,403.5366 647.5366,399.7145 647.5366,395 C647.5366,390.28549 643.7145,386.46341 639,386.46341 C634.28549,386.46341 630.46341,390.28549 630.46341,395 C630.46341,396.2208 630.71947,397.4046 631.20799,398.4917 Z",id:"Path"})})})})})},K=(n(60),Object(c.forwardRef)((function(e,t){t||(t=Object(c.useRef)());var n=Object(c.useState)({}),r=Object(J.a)(n,2),a=r[0],s=r[1],i="button -component -theme-".concat(e.theme||"default"," -size-").concat(e.size||"default"," ").concat(e.fullWidth?"-full-width":""," ").concat(e.loading?"-loading":""),u=Object(c.useRef)(null);return Object(c.useEffect)((function(){!function(){t.current={};var n=Object(b.a)({},e);delete n.fullWidth,delete n.loading,delete n.size,delete n.theme,s(n)}()}),[e]),Object(X.jsx)("div",{className:i,children:Object(X.jsx)("button",Object(b.a)(Object(b.a)({},a),{},{ref:u,children:e.loading?Object(X.jsx)("div",{className:"loader",children:Object(X.jsx)(Y,{})}):e.children}))})})));K.displayName="Button";var Q=K;n(61);var V=function(){return Object(X.jsx)("svg",{className:"icon -lock",width:"12px",height:"16px",viewBox:"0 0 12 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(X.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(X.jsx)("g",{transform:"translate(-858.000000, -67.000000)",fill:"currentColor",fillRule:"nonzero",children:Object(X.jsxs)("g",{transform:"translate(858.000000, 67.000000)",children:[Object(X.jsx)("path",{d:"M9.6969697,6.67253333 L9.6969697,4.12116364 C9.6969697,1.84877576 7.84819394,0 5.57575758,0 C3.30332121,0 1.45459394,1.84877576 1.45459394,4.12116364 L1.45459394,6.67243636 C0.551418182,7.66370909 0,8.9808 0,10.4242424 C0,13.4987152 2.50128485,16 5.57575758,16 C8.6502303,16 11.1515152,13.4987152 11.1515152,10.4242424 C11.1515152,8.9808 10.600097,7.66370909 9.6969697,6.67253333 Z M5.57575758,1.45454545 C7.04615758,1.45454545 8.24242424,2.65081212 8.24242424,4.12116364 L8.24242424,5.5286303 C7.44979394,5.09517576 6.54109091,4.84848485 5.57575758,4.84848485 C4.61047273,4.84848485 3.7017697,5.09517576 2.90913939,5.5286303 L2.90913939,4.12116364 C2.90913939,2.65081212 4.10535758,1.45454545 5.57575758,1.45454545 Z M5.57575758,14.5454545 C3.30332121,14.5454545 1.45454545,12.6966788 1.45454545,10.4242424 C1.45454545,8.15180606 3.30332121,6.3030303 5.57575758,6.3030303 C7.84819394,6.3030303 9.6969697,8.15180606 9.6969697,10.4242424 C9.6969697,12.6966788 7.84819394,14.5454545 5.57575758,14.5454545 Z",id:"XMLID_811_"}),Object(X.jsx)("path",{d:"M5.57575758,8.48484848 C4.90739394,8.48484848 4.36363636,9.02860606 4.36363636,9.6969697 C4.36363636,10.092703 4.55427879,10.4446545 4.84848485,10.6659879 L4.84848485,11.6363636 C4.84848485,12.0380121 5.17410909,12.3636364 5.57575758,12.3636364 C5.97740606,12.3636364 6.3030303,12.0380121 6.3030303,11.6363636 L6.3030303,10.6659879 C6.59723636,10.4446545 6.78787879,10.0926545 6.78787879,9.6969697 C6.78787879,9.02860606 6.24412121,8.48484848 5.57575758,8.48484848 Z",id:"XMLID_815_"})]})})})})};n(62);var $=function(){return Object(X.jsxs)("header",{className:"component -header flex a-center j-between",children:[Object(X.jsxs)("nav",{children:[Object(X.jsx)(i.a,{routeName:"home",children:"Home"}),Object(X.jsx)(i.a,{routeName:"profile",children:"Account"}),Object(X.jsx)("a",{href:"https://github.com/star-tech-dev/passwords-frontend",target:"_blank",rel:"noreferrer",children:"Github"})]}),Object(X.jsx)("div",{className:"right flex a-center",children:Object(X.jsxs)(Q,{size:"small",theme:"ghost",onClick:function(e){console.log("lockApp"),e.preventDefault(),E()},children:[Object(X.jsx)(V,{}),Object(X.jsx)("span",{children:"Lock app"})]})})]})},ee=function(e){var t=e.children;return Object(X.jsx)("div",{className:"layout -default",children:Object(X.jsxs)("div",{className:"container",children:[Object(X.jsx)($,{}),Object(X.jsx)("main",{children:t})]})})},te=(n(63),function(e){var t=e.children;return Object(X.jsx)("div",{className:"layout -simple",children:Object(X.jsx)("main",{children:Object(X.jsx)("div",{className:"container",children:t})})})}),ne=Object(v.c)(),ce=ne.createEffect().use((function(){return S({url:"/items"}).catch((function(){return[]}))})),re=ne.createEffect().use((function(e){return S({data:{id:e},url:"/item"})})),ae=ne.createEffect().use((function(e){return S({method:"post",data:e,url:"/items"})})),se=Object(v.e)([]).on(ce.done,(function(e,t){return t.result})).on(ae.done,(function(e,t){var n=t.result;return n&&e.push(n),e}));var ie=function(e){var t=e.data,n="".concat(t.name," (").concat(t._id,")")||!1,c=Object(i.d)();return Object(X.jsx)("div",{className:"Item Component",onClick:function(){c.navigate("item",{id:t._id})},children:Object(X.jsx)("div",{children:n})})};var ue=function(){var e=Object(U.a)(se),t=Object(i.c)().router,n=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n()}),[]),Object(X.jsxs)("div",{className:"Items Component",children:[Object(X.jsx)("div",{children:e.map((function(e){return Object(X.jsx)(ie,{data:e},e._id)}))}),Object(X.jsx)("div",{children:Object(X.jsx)("button",{onClick:function(){t.navigate("add")},children:"add"})})]})};var oe=function(){var e=Object(U.a)(B).user,t=Object(i.d)();return Object(c.useEffect)((function(){e||t.navigate("auth")}),[e]),Object(X.jsx)("div",{className:"page -home",children:Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"Items"}),Object(X.jsx)("div",{children:Object(X.jsx)(ue,{})})]})})};var le=function(){var e=Object(i.d)(),t=Object(U.a)(B).user,n=function(){e.navigate("home")},r=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:n();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t||n()}),[t]),t?Object(X.jsxs)("div",{className:"page -profile",children:[Object(X.jsx)("div",{children:"ProfilePage"}),Object(X.jsxs)("div",{className:"flex a-center",children:[Object(X.jsx)("div",{children:"name"}),Object(X.jsx)("input",{type:"text",value:t.username,readOnly:!0})]}),Object(X.jsxs)("div",{className:"flex a-center",children:[Object(X.jsx)("div",{children:"hasSecurityCode"}),Object(X.jsx)("input",{type:"checkbox",checked:t.hasSecurityCode,readOnly:!0})]}),Object(X.jsx)("div",{children:Object(X.jsx)("button",{onClick:r,children:"logout"})})]}):null},je=function(e){setTimeout(e,0)},de=n(30);var fe=function(e){return Object(X.jsx)("div",Object(b.a)(Object(b.a)({},e),{},{className:"icon -cross",children:Object(X.jsx)("svg",{width:"18px",height:"18px",viewBox:"0 0 18 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(X.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(X.jsx)("g",{transform:"translate(-410.000000, -395.000000)",fill:"currentColor",fillRule:"nonzero",children:Object(X.jsx)("g",{transform:"translate(121.000000, 380.000000)",children:Object(X.jsx)("g",{id:"information",transform:"translate(289.000000, 15.000000)",children:Object(X.jsx)("path",{d:"M9,0 C13.9626,0 18,4.03745455 18,9.00005455 C18,13.9626545 13.9626,18 9,18 C4.0374,18 0,13.9626545 0,9.00005455 C0,4.03745455 4.0374,0 9,0 Z M9,7.63636364 C8.54814545,7.63636364 8.18181818,8.00269091 8.18181818,8.45454545 L8.18181818,13.3636364 C8.18181818,13.8154909 8.54814545,14.1818182 9,14.1818182 C9.45185455,14.1818182 9.81818182,13.8154909 9.81818182,13.3636364 L9.81818182,8.45454545 C9.81818182,8.00269091 9.45185455,7.63636364 9,7.63636364 Z M8.99989091,3.81818182 C8.39847273,3.81818182 7.9092,4.30778182 7.9092,4.90958182 C7.9092,5.51083636 8.39847273,6 8.99989091,6 C9.60130909,6 10.0905818,5.51083636 10.0905818,4.90958182 C10.0905818,4.30778182 9.60130909,3.81818182 8.99989091,3.81818182 Z"})})})})})})}))},be=(n(64),Object(c.forwardRef)((function(e,t){t||(t=Object(c.useRef)());var n=Object(c.useState)(e.error),a=Object(J.a)(n,2),s=a[0],i=a[1],u=Object(c.useRef)(null),o=r.a.useRef(null),l="input -component ".concat(e.error?"-error":""),j=function(){je((function(){var e;u.current&&(null===(e=u.current)||void 0===e||e.focus())}))},d=function(){je((function(){var e;u.current&&(null===(e=u.current)||void 0===e||e.select())}))};return Object(c.useEffect)((function(){console.log("local error changed to",s),s&&o.current&&Object(de.a)(o.current,{placement:"top-end",content:s})}),[s]),Object(c.useEffect)((function(){t.current={focus:j,select:d},i(e.error)}),[]),Object(c.useEffect)((function(){console.log("< incoming props. error:",e.error)}),[e]),Object(c.useEffect)((function(){console.log("< incoming error:",e.error),i(e.error)}),[e.error]),Object(X.jsxs)("div",{className:l,children:[Object(X.jsx)("div",{className:"buttons",children:s?Object(X.jsx)("div",{ref:o,className:"icon-error",onClick:function(e){return function(e){e.preventDefault(),j()}(e)},children:Object(X.jsx)(fe,{})}):null}),Object(X.jsx)("input",Object(b.a)(Object(b.a)({},e),{},{ref:u,type:e.type||"text",onInput:function(t){return function(t){console.log("[ui input] onInput event"),e.onInput&&e.onInput(t),i("")}(t)}}))]})})));be.displayName="Input";var Oe=be;n(65);var he=function(e){var t=e.onRegisterShow,n=Object(c.useState)(""),a=Object(J.a)(n,2),s=a[0],u=a[1],o=Object(c.useState)(""),l=Object(J.a)(o,2),j=l[0],d=l[1],b=Object(c.useState)(""),h=Object(J.a)(b,2),v=h[0],p=h[1],x=Object(c.useState)(""),m=Object(J.a)(x,2),g=m[0],w=m[1],C=Object(i.d)(),y=r.a.createRef(),k=r.a.createRef(),N=Object(c.useState)(!1),S=Object(J.a)(N,2),E=S[0],I=S[1],L=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,D({username:s,password:j}).then((function(){return!0})).catch((function(){return k.current.focus(),k.current.select(),w("Failed to sign in"),!1}));case 3:if(t=e.sent,I(!1),!t){e.next=9;break}return e.next=8,C.navigate("home");case 8:z();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){je((function(){y.current.focus()}))}),[]),Object(X.jsx)("div",{className:"component -login-form",children:Object(X.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=function(){var e=[];return s.length?(j.length||(e.push({field:"password",message:"This field is required"}),s.length&&k.current.focus()),e):(e.push({field:"username",message:"This field is required"}),y.current.focus(),e)}();if(t.length)return t.forEach((function(e){switch(e.field){case"username":p(e.message);break;case"password":w(e.message)}})),void console.log({username:s,password:j});L()},children:[Object(X.jsx)("div",{children:Object(X.jsx)(Oe,{ref:y,placeholder:"Username",error:v,onInput:function(){return p("")},onChange:function(e){return u(e.target.value)},onBlur:function(e){return e.target.value.length?null:p("")}})}),Object(X.jsx)("div",{children:Object(X.jsx)(Oe,{ref:k,type:"password",placeholder:"Password",error:g,onInput:function(){return w("")},onChange:function(e){return d(e.target.value)},onBlur:function(e){return e.target.value.length?null:w("")}})}),Object(X.jsx)("div",{className:"button-block",children:Object(X.jsx)(Q,{type:"submit",loading:E,fullWidth:!0,children:"Sign in"})}),Object(X.jsxs)("div",{children:[Object(X.jsx)("span",{children:"or "}),Object(X.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),t&&t()},children:"create new account"})]})]})})};var ve=function(e){var t=e.onLoginShow,n=Object(c.useState)(""),a=Object(J.a)(n,2),s=a[0],u=a[1],o=Object(c.useState)(""),l=Object(J.a)(o,2),j=l[0],d=l[1],b=Object(c.useState)(""),h=Object(J.a)(b,2),v=h[0],p=h[1],x=Object(i.d)(),m=r.a.createRef(),g=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,_({username:s,email:v,password:j}).then(Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.navigate("home");case 2:z();case 3:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){je((function(){m.current.focus()}))}),[]),Object(X.jsx)("div",{className:"component -register-form",children:Object(X.jsxs)("form",{onSubmit:g,children:[Object(X.jsx)("div",{children:Object(X.jsx)(Oe,{ref:m,placeholder:"Username",onChange:function(e){return u(e.target.value)}})}),Object(X.jsx)("div",{children:Object(X.jsx)(Oe,{type:"email",placeholder:"Email",onChange:function(e){return p(e.target.value)}})}),Object(X.jsx)("div",{children:Object(X.jsx)(Oe,{placeholder:"Password",onChange:function(e){return d(e.target.value)}})}),Object(X.jsx)("div",{className:"button-block",children:Object(X.jsx)(Q,{type:"submit",fullWidth:!0,children:"Sign up"})}),Object(X.jsxs)("div",{children:[Object(X.jsx)("span",{children:"or "}),Object(X.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),t&&t()},children:"return to login"})]})]})})};n(66);var pe=function(){var e=Object(c.useState)("login"),t=Object(J.a)(e,2),n=t[0],r=t[1];return Object(X.jsxs)("div",{className:"page -auth",children:[Object(X.jsx)("h1",{children:"register"===n?Object(X.jsx)("span",{children:"Let's create a new account:"}):Object(X.jsx)("span",{children:"Hi, I'm your password manager."})}),Object(X.jsx)("div",{className:"container -narrow",children:"register"===n?Object(X.jsx)(ve,{onLoginShow:function(){return r("login")}}):Object(X.jsx)(he,{onRegisterShow:function(){return r("register")}})})]})},xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=!1;return Object.entries(e).every((function(e){return!!t.includes(e[0])||(!e[1]||(n=!0,!1))})),!n};var me=function(){var e=Object(i.c)().router,t=Object(c.useState)(""),n=Object(J.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),u=Object(J.a)(s,2),o=u[0],l=u[1],j=Object(c.useState)(""),d=Object(J.a)(j,2),b=d[0],h=d[1],v=Object(c.useState)(""),p=Object(J.a)(v,2),x=p[0],m=p[1],g=Object(c.useState)(""),w=Object(J.a)(g,2),C=w[0],y=w[1],k=function(){var t=Object(O.a)(f.a.mark((function t(n){var c,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!xe(c={group:null,name:r,url:o,username:b,password:x,note:C},["group"])){t.next=6;break}alert("Cannot save empty item."),t.next=10;break;case 6:return t.next=8,ae(c);case 8:a=t.sent,e.navigate("item",{id:a._id});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(X.jsxs)("div",{className:"Page Home",children:[Object(X.jsx)("div",{children:"Add newItem:"}),Object(X.jsxs)("form",{onSubmit:k,children:[Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"name"}),Object(X.jsx)("input",{type:"text",name:"name",value:r,onInput:function(e){return a(e.target.value)}})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"url"}),Object(X.jsx)("input",{type:"text",name:"url",value:o,onInput:function(e){return l(e.target.value)}})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"username"}),Object(X.jsx)("input",{type:"text",name:"username",value:b,onInput:function(e){return h(e.target.value)}})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"password"}),Object(X.jsx)("input",{type:"text",name:"password",value:x,onInput:function(e){return m(e.target.value)}})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"note"}),Object(X.jsx)("textarea",{name:"note",value:C,onInput:function(e){return y(e.target.value)}})]}),Object(X.jsx)("div",{children:Object(X.jsx)("button",{type:"submit",children:"create"})})]})]})};var ge=function(){var e=Object(c.useState)(null),t=Object(J.a)(e,2),n=t[0],r=t[1],a=Object(i.c)(),s=a.route,u=a.router;return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:re(s.params.id).then((function(e){r(e)})).catch((function(){return u.navigate("home")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[s.params.id]),Object(X.jsxs)("div",{className:"Page Profile",children:[Object(X.jsx)("div",{children:"ItemPage"}),n?Object(X.jsxs)("div",{children:[Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"name"}),Object(X.jsx)("input",{type:"text",value:n.name,readOnly:!0})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"url"}),Object(X.jsx)("input",{type:"text",value:n.url,readOnly:!0})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"username"}),Object(X.jsx)("input",{type:"text",value:n.username,readOnly:!0})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"password"}),Object(X.jsx)("input",{type:"text",value:n.password,readOnly:!0})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"note"}),Object(X.jsx)("textarea",{value:n.note,readOnly:!0})]})]}):null]})};var we=function(){return Object(X.jsx)("div",{className:"page -not-found",children:Object(X.jsx)("div",{children:"404"})})};n(67);var Ce=function(){return Object(X.jsx)("div",{className:"component -page-loader flex center",children:Object(X.jsx)(Y,{})})},ye=n(8),ke=Object(v.e)([]).on(C,(function(e,t){var n=new Set([].concat(Object(ye.a)(e),[t]));return e=Array.from(n)})).on(y,(function(e,t){return e=e.filter((function(e){return e!==t}))})).on(k,(function(e){return e=e.slice(0,1)})).on(N,(function(){return[]}));var Ne=function(){return Object(X.jsx)("div",{className:"icon -cross",children:Object(X.jsx)("div",{children:"x"})})};n(68);var Se=function(e){void 0===e.closable&&(e.closable=!0);var t=Object(c.useState)(!1),n=Object(J.a)(t,2),r=n[0],a=n[1],s=Object(U.a)(ke),i=Object(c.useState)(!1),u=Object(J.a)(i,2),o=u[0],l=u[1],j="component modal -".concat(e.id," -size-").concat(e.size||"default");Object(c.useEffect)((function(){a(!0)}),[]),Object(c.useEffect)((function(){var t=ke.watch((function(t){l(t.includes(e.id))}));return function(){t()}}),[s]),Object(c.useEffect)((function(){r&&(o&&e.onOpen&&e.onOpen(),!o&&e.onClose&&e.onClose())}),[o]);var d=function(){e.closable&&y(e.id)};return o?Object(X.jsx)("div",{className:j,onClick:function(e){var t=e.target;t.classList.contains("Modal")&&t.classList.contains("Component")&&d()},children:Object(X.jsxs)("dialog",{open:!0,className:"dialog",children:[e.closable&&Object(X.jsx)("div",{className:"close",onClick:d,children:Object(X.jsx)(Ne,{})}),Object(X.jsx)("div",{className:"head",children:Object(X.jsx)("div",{className:"h2 flex center",children:e.heading})}),Object(X.jsx)("div",{className:"body",children:e.children})]})}):null};var Ee=function(){var e="set_security_code",t=Object(c.useState)(""),n=Object(J.a)(t,2),r=n[0],a=n[1],s=null,i=function(){var t=Object(O.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,M();case 3:y(e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,A(r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){je((function(){var e;null===(e=s)||void 0===e||e.focus()}))}),[s]),Object(X.jsxs)(Se,{id:e,closable:!1,children:[Object(X.jsxs)("form",{onSubmit:u,children:[Object(X.jsx)("div",{children:"Set your security code:"}),Object(X.jsx)("div",{children:Object(X.jsx)("input",{type:"text",ref:function(e){s=e},value:r,onInput:function(e){return a(e.target.value)}})}),Object(X.jsx)("div",{children:Object(X.jsx)("button",{type:"submit",children:"Set"})}),Object(X.jsx)("div",{children:"Do not forget your secret code!"})]}),Object(X.jsx)("div",{children:Object(X.jsx)("a",{href:"#",onClick:i,children:"logout"})})]})};n(69);var Ie=function(){var e=Object(c.useState)(!1),t=Object(J.a)(e,2),n=t[0],a=t[1],s="locker",i=Object(U.a)(B).user,u=Object(c.useState)(""),o=Object(J.a)(u,2),l=o[0],j=o[1],d=Object(c.useState)(""),b=Object(J.a)(d,2),h=b[0],v=b[1],p=r.a.createRef(),x=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,M();case 3:y(s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("onsubmit"),l.length){e.next=6;break}return console.log("set error about length"),v("This field is required"),e.abrupt("return");case 6:return a(!0),e.next=9,I(l).catch((function(e){v(e.response.data.message)}));case 9:a(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log("codeFieldError changed to:",h)}),[h]),Object(X.jsx)(Se,{id:s,size:"auto",heading:"App is locked!",closable:!1,onOpen:function(){je((function(){var e;null===(e=p.current)||void 0===e||e.focus()}))},onClose:function(){j("")},children:Object(X.jsxs)("div",{className:"flex column center",children:[Object(X.jsx)("div",{children:"Enter your security code to unlock the app:"}),Object(X.jsxs)("form",{className:"flex column",onSubmit:function(e){return m(e)},children:[Object(X.jsx)("div",{children:Object(X.jsx)(Oe,{ref:p,type:"password",error:h,placeholder:"your_security_code",value:l,onInput:function(e){v(""),j(e.target.value)}})}),Object(X.jsx)("div",{children:Object(X.jsx)(Q,{type:"submit",loading:n,fullWidth:!0,children:"Unlock"})})]}),Object(X.jsxs)("div",{className:"bottom flex a-center",children:[Object(X.jsx)("div",{children:"You signed as\xa0"}),Object(X.jsx)("div",{className:"name",children:null===i||void 0===i?void 0:i.username}),Object(X.jsx)("div",{children:".\xa0"}),Object(X.jsx)("a",{href:"#",onClick:x,children:"logout"}),Object(X.jsx)("div",{children:"."})]})]})})};n(70);var Le=function(){var e=Object(c.useState)(!1),t=Object(J.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=ke.watch((function(e){r(!!e.length)}));return function(){e()}})),Object(X.jsxs)("div",{className:"Modal Controller ".concat(n?"-active":""),children:[Object(X.jsx)(Ee,{}),Object(X.jsx)(Ie,{})]})};var Re=function(){var e=Object(i.c)().route,t=Object(U.a)(F);function n(){switch(e.name){case"home":return Object(X.jsx)(ee,{children:Object(X.jsx)(oe,{})});case"auth":return Object(X.jsx)(te,{children:Object(X.jsx)(pe,{})});case"profile":return Object(X.jsx)(ee,{children:Object(X.jsx)(le,{})});case"add":return Object(X.jsx)(ee,{children:Object(X.jsx)(me,{})});case"item":return Object(X.jsx)(ee,{children:Object(X.jsx)(ge,{})});default:return Object(X.jsx)(te,{children:Object(X.jsx)(we,{})})}}return Object(c.useEffect)((function(){console.log("[app] mounted");var e=H.watch((function(e){e&&z()}));return function(){e()}}),[]),Object(c.useEffect)((function(){L()}),[t]),e?Object(X.jsxs)("div",{className:"app",children:[Object(X.jsx)(n,{}),Object(X.jsx)(Le,{})]}):Object(X.jsx)(Ce,{})},_e=(n(71),G());s.a.render(Object(X.jsx)(i.b,{router:_e,children:Object(X.jsx)(Re,{})}),document.getElementById("root")),_e.start((function(){H(!0)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.9b089a43.chunk.js.map