(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(60),c=t(7),s=t(17),o=t(63),m=t(64),i=t(18),u=JSON.parse(localStorage.getItem("user")),d=u?{isLoggedIn:!0,user:u}:{isLoggedIn:!1,user:null},E={},f=Object(s.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"REGISTER_SUCCESS":case"REGISTER_FAIL":return Object(i.a)({},e,{isLoggedIn:!1});case"LOGIN_SUCCESS":return Object(i.a)({},e,{isLoggedIn:!0,user:n.user});case"LOGIN_FAIL":case"LOGOUT":return Object(i.a)({},e,{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SET_MESSAGE":return{message:n};case"CLEAR_MESSAGE":return{message:""};default:return e}}}),p=[m.a],v=Object(s.createStore)(f,Object(o.composeWithDevTools)(s.applyMiddleware.apply(void 0,p))),g=(t(78),t(4)),h=t(2),b=t(9),N=(t(80),t(82),t(26)),O=t.n(N),S=t(13),j=t.n(S),y=t(27),w=t.n(y),q=t(11),k=t.n(q),T="http://localhost:8080/",I=function(e,a,t){return k.a.post(T+"signup",{username:e,email:a,password:t})},M=function(e,a){return k.a.post(T+"signin",{username:e,password:a}).then(function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data})},L=function(){localStorage.removeItem("user")},A=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},R=function(e){var a=Object(h.m)(),t=Object(n.useRef)(),l=Object(n.useRef)(),s=Object(n.useState)(""),o=Object(g.a)(s,2),m=o[0],i=o[1],u=Object(n.useState)(""),d=Object(g.a)(u,2),E=d[0],f=d[1],p=Object(n.useState)(!1),v=Object(g.a)(p,2),b=v[0],N=v[1],S=Object(c.c)(function(e){return e.auth}).isLoggedIn,y=Object(c.c)(function(e){return e.message}).message,q=Object(c.b)();return S?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(O.a,{onSubmit:function(e){e.preventDefault(),N(!0),t.current.validateAll(),0===l.current.context._errors.length?q(function(e,a){return function(t){return M(e,a).then(function(e){return t({type:"LOGIN_SUCCESS",payload:{user:e}}),Promise.resolve()},function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return t({type:"LOGIN_FAIL"}),t({type:"SET_MESSAGE",payload:a}),Promise.reject()})}}(m,E)).then(function(){a("/profile"),window.location.reload()}).catch(function(){N(!1)}):N(!1)},ref:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(j.a,{type:"text",className:"form-control",name:"username",value:m,onChange:function(e){var a=e.target.value;i(a)},validations:[A]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(j.a,{type:"password",className:"form-control",name:"password",value:E,onChange:function(e){var a=e.target.value;f(a)},validations:[A]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block",disabled:b},b&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"}),r.a.createElement("span",null,"Login"))),y&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},y)),r.a.createElement(w.a,{style:{display:"none"},ref:l}))))},_=t(65),C=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},z=function(e){if(!Object(_.isEmail)(e))return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},x=function(e){if(e.length<3||e.length>20)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},G=function(e){if(e.length<6||e.length>40)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},F=function(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=Object(n.useState)(""),l=Object(g.a)(t,2),s=l[0],o=l[1],m=Object(n.useState)(""),i=Object(g.a)(m,2),u=i[0],d=i[1],E=Object(n.useState)(""),f=Object(g.a)(E,2),p=f[0],v=f[1],h=Object(n.useState)(!1),b=Object(g.a)(h,2),N=b[0],S=b[1],y=Object(c.c)(function(e){return e.message}).message,q=Object(c.b)();return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(O.a,{onSubmit:function(t){t.preventDefault(),S(!1),e.current.validateAll(),0===a.current.context._errors.length&&q(function(e,a,t){return function(n){return I(e,a,t).then(function(e){return n({type:"REGISTER_SUCCESS"}),n({type:"SET_MESSAGE",payload:e.data.message}),Promise.resolve()},function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return n({type:"REGISTER_FAIL"}),n({type:"SET_MESSAGE",payload:a}),Promise.reject()})}}(s,u,p)).then(function(){S(!0)}).catch(function(){S(!1)})},ref:e},!N&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(j.a,{type:"text",className:"form-control",name:"username",value:s,onChange:function(e){var a=e.target.value;o(a)},validations:[C,x]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(j.a,{type:"text",className:"form-control",name:"email",value:u,onChange:function(e){var a=e.target.value;d(a)},validations:[C,z]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(j.a,{type:"password",className:"form-control",name:"password",value:p,onChange:function(e){var a=e.target.value;v(a)},validations:[C,G]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up"))),y&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:N?"alert alert-success":"alert alert-danger",role:"alert"},y)),r.a.createElement(w.a,{style:{display:"none"},ref:a}))))};function V(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var B=function(){return k.a.get("http://localhost:8080/api/test/all")},U=function(){return k.a.get("http://localhost:8080/api/test/user",{headers:V()})},P=function(){return k.a.get("http://localhost:8080/api/test/mod",{headers:V()})},D=function(){return k.a.get("http://localhost:8080/api/test/admin",{headers:V()})},J=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)(function(){B().then(function(e){l(e.data)},function(e){var a=e.response&&e.response.data||e.message||e.toString();l(a)})},[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},W=function(){var e=Object(c.c)(function(e){return e.auth}).user;return e?r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,e.username)," Profile")),r.a.createElement("p",null,r.a.createElement("strong",null,"Token:")," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)),r.a.createElement("p",null,r.a.createElement("strong",null,"Id:")," ",e.id),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," ",e.email),r.a.createElement("strong",null,"Authorities:"),r.a.createElement("ul",null,e.roles&&e.roles.map(function(e,a){return r.a.createElement("li",{key:a},e)}))):r.a.createElement(h.a,{to:"/login"})},H={on:function(e,a){document.addEventListener(e,function(e){return a(e.detail)})},dispatch:function(e,a){document.dispatchEvent(new CustomEvent(e,{detail:a}))},remove:function(e,a){document.removeEventListener(e,a)}},$=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)(function(){U().then(function(e){l(e.data)},function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();l(a),e.response&&401===e.response.status&&H.dispatch("logout")})},[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},K=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)(function(){P().then(function(e){l(e.data)},function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();l(a),e.response&&401===e.response.status&&H.dispatch("logout")})},[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},Q=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)(function(){D().then(function(e){l(e.data)},function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();l(a),e.response&&401===e.response.status&&H.dispatch("logout")})},[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},X=function(e){return n.createElement("svg",Object.assign({width:3500,height:520,viewBox:"0 0 926.042 137.583",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M603.819 471.36c-16.973.003-33.467-.017-49.961.016-8.155.017-10.495 2.318-10.51 10.336-.033 16.994.002 33.988-.024 50.982-.01 6.832-1.777 8.633-8.512 8.637-23.492.017-46.984.005-70.475-.012-7.37-.006-9.25-2.375-9.19-9.65.147-17.649.03-35.303-.161-52.953-.058-5.302-2.663-7.279-9.14-7.32-13.328-.086-26.657-.034-39.985-.039-3.666 0-7.33.004-10.996-.009-8.049-.028-9.74-1.672-9.75-9.571-.016-13.496-.004-26.99-.006-40.486-.002-9.663-.073-19.327.012-28.99.059-6.727 2.003-8.59 8.697-8.601 16.827-.028 33.654-.003 50.481-.03 9.027-.014 11.035-2.401 10.917-11.272-.225-16.991-.188-33.987-.104-50.98.028-5.575 2.41-7.705 8.11-7.713 23.991-.034 47.983-.039 71.974.002 6.058.01 8.113 2.079 8.128 8.113.042 17.16-.01 34.321.02 51.482.014 8.085 2.296 10.351 10.417 10.366 16.994.032 33.988-.004 50.982.027 6.884.013 8.575 1.695 8.582 8.556.024 23.325.018 46.65.004 69.975-.004 7.52-1.488 8.991-9.51 9.134z",style:{fill:"#0071bd",fillOpacity:1},transform:"matrix(.312 0 0 .312 -67.963 -64.56)"}),n.createElement("path",{d:"M536.367 636.53c-66.752 10.05-126.069-5.428-177.059-49.556-33.056-28.608-54.5-64.71-65.682-106.89-1.345-5.073-3.39-10.22-2.502-15.643 1.47-8.978 8.488-15.292 16.988-15.596 8.65-.31 16.117 5.677 18.1 14.877 4.175 19.378 11.214 37.619 21.553 54.526 23.081 37.75 55.757 63.415 97.683 77.49 22.797 7.654 46.266 9.786 69.976 7.766 28.313-2.413 54.532-11.73 78.581-26.982 1.865-1.183 2.715-2.304 2.081-4.853-7.613-30.632 11.77-59.319 45.073-61.731 3.105-.225 6.403.068 9.389.91 3.662 1.034 5.07-.666 6.501-3.477 7.144-14.035 12.304-28.759 15.533-44.155 1.176-5.608 4.16-9.764 9.24-12.314 6.777-3.402 13.35-2.702 19.201 1.977 6.237 4.99 7.722 11.699 6.013 19.331-4.392 19.607-11.043 38.386-20.719 56.017-1.705 3.107-1.789 5.522-.18 8.746 9.363 18.775 6.087 40.453-8.122 55.607-13.26 14.142-34.934 18.691-53.876 11.03-2.88-1.165-4.801-.86-7.276.788-24.44 16.271-51.196 26.827-80.496 32.132z",style:{fill:"#01a89e",fillOpacity:1},transform:"matrix(.312 0 0 .312 -67.963 -64.56)"}),n.createElement("path",{d:"M603.501 284.5c-26.28-18.968-55.342-30.025-87.13-32.916-33.313-3.029-65.371 2.54-95.573 17.459-3.194 1.577-4.452 3.36-3.848 7.398 3.928 26.236-11.922 49.32-37.823 55.131-7.33 1.645-14.962 1.617-22.244-.51-4.065-1.188-5.941.105-7.989 3.438-9.94 16.178-16.94 33.533-21.562 51.901-2.662 10.581-11.22 16.322-21.117 14.216-10.169-2.164-15.82-10.978-13.401-21.988 5.088-23.158 14.314-44.679 27.137-64.582 3.326-5.163 4.633-9.474 2.669-15.926-8.652-28.412 8.88-56.85 37.897-62.085 10.189-1.838 20.337-.589 29.63 4.314 3.582 1.89 6.332 1.427 9.687-.374 19.208-10.31 39.585-17.568 61.053-21.182 53.618-9.026 104.26-.527 150.531 28.506 48.905 30.685 80.404 74.446 94.356 130.615 2.634 10.607-2.59 20.1-12.101 22.417-10.732 2.614-19.33-2.777-22.233-13.71-1.536-5.783-3.253-11.533-5.209-17.187-12.007-34.715-32.887-62.923-62.73-84.935z",style:{fill:"#65ce3e",fillOpacity:1},transform:"matrix(.312 0 0 .312 -67.963 -64.56)"}),n.createElement("g",{"aria-label":"Health",style:{fontSize:"135.919px",lineHeight:1.25,fontFamily:"'Arial Rounded MT Bold'",InkscapeFontSpecification:"'Arial Rounded MT Bold, Normal'",fill:"#0071bd",strokeWidth:3.398}},n.createElement("path",{d:"M193.219 30.432v27.874h42.54V30.432q0-5.973 2.655-8.96 2.721-2.986 7.102-2.986 4.446 0 7.167 2.986 2.788 2.92 2.788 8.96v76.653q0 6.04-2.788 9.026-2.787 2.987-7.167 2.987-4.447 0-7.102-2.987-2.654-3.053-2.654-9.026V74.366h-42.541v32.72q0 6.039-2.788 9.025-2.787 2.987-7.167 2.987-4.447 0-7.102-2.987-2.654-3.053-2.654-9.026V30.432q0-5.973 2.588-8.96 2.655-2.986 7.168-2.986 4.446 0 7.167 2.986 2.788 2.92 2.788 8.96zM325.952 86.71h-35.44q.067 6.173 2.456 10.885 2.455 4.712 6.437 7.101 4.049 2.39 8.894 2.39 3.251 0 5.906-.73 2.721-.797 5.243-2.39 2.522-1.66 4.646-3.517 2.124-1.859 5.508-5.044 1.394-1.195 3.982-1.195 2.788 0 4.513 1.527 1.726 1.526 1.726 4.313 0 2.456-1.925 5.774-1.925 3.252-5.84 6.305-3.85 2.987-9.756 4.978-5.84 1.99-13.473 1.99-17.454 0-27.144-9.954-9.69-9.955-9.69-27.012 0-8.03 2.39-14.866 2.39-6.902 6.969-11.813 4.579-4.911 11.282-7.5 6.703-2.654 14.866-2.654 10.619 0 18.185 4.513 7.632 4.446 11.415 11.548 3.783 7.1 3.783 14.468 0 6.835-3.916 8.893-3.916 1.99-11.017 1.99zm-35.44-10.286h32.852q-.664-9.291-5.044-13.87-4.314-4.646-11.415-4.646-6.77 0-11.15 4.712-4.314 4.645-5.243 13.804zM401.942 108.877q-6.57 5.11-12.742 7.699-6.106 2.522-13.738 2.522-6.969 0-12.278-2.721-5.243-2.788-8.097-7.5-2.854-4.712-2.854-10.22 0-7.433 4.712-12.676t12.942-7.035q1.725-.398 8.561-1.792 6.836-1.394 11.68-2.522 4.912-1.195 10.62-2.854-.333-7.167-2.92-10.486-2.523-3.384-10.553-3.384-6.902 0-10.42 1.924-3.45 1.925-5.973 5.774-2.455 3.85-3.517 5.11-.996 1.195-4.38 1.195-3.053 0-5.31-1.925-2.19-1.99-2.19-5.044 0-4.778 3.385-9.29 3.385-4.514 10.552-7.434 7.168-2.92 17.853-2.92 11.946 0 18.782 2.854 6.835 2.787 9.623 8.893 2.854 6.105 2.854 16.193 0 6.371-.067 10.818 0 4.447-.066 9.889 0 5.11 1.659 10.685 1.726 5.508 1.726 7.1 0 2.788-2.655 5.111-2.588 2.257-5.907 2.257-2.787 0-5.508-2.589-2.721-2.654-5.774-7.632zm-1.195-26.215q-3.982 1.46-11.614 3.12-7.566 1.592-10.486 2.389-2.92.73-5.575 2.986-2.654 2.19-2.654 6.172 0 4.115 3.119 7.035 3.12 2.854 8.163 2.854 5.376 0 9.889-2.323 4.579-2.389 6.703-6.106 2.455-4.114 2.455-13.538zM436.917 108.08V29.504q0-5.442 2.39-8.23 2.455-2.787 6.57-2.787 4.114 0 6.636 2.787 2.522 2.721 2.522 8.23v78.578q0 5.508-2.588 8.296-2.522 2.72-6.57 2.72-3.982 0-6.504-2.853-2.456-2.854-2.456-8.163zM474.746 47.023h1.991V36.14q0-4.38.2-6.836.265-2.521 1.327-4.313 1.061-1.859 3.052-2.987 1.991-1.194 4.447-1.194 3.451 0 6.239 2.588 1.858 1.725 2.322 4.247.531 2.456.531 7.035v12.344h6.637q3.85 0 5.84 1.859 2.058 1.792 2.058 4.645 0 3.65-2.92 5.11-2.854 1.46-8.23 1.46h-3.385v33.317q0 4.247.266 6.57.332 2.256 1.593 3.717 1.327 1.393 4.247 1.393 1.593 0 4.314-.53 2.72-.598 4.247-.598 2.19 0 3.916 1.792 1.792 1.725 1.792 4.314 0 4.38-4.779 6.703-4.778 2.323-13.737 2.323-8.495 0-12.876-2.854-4.38-2.854-5.773-7.898-1.328-5.044-1.328-13.472V60.098h-2.389q-3.916 0-5.973-1.859-2.057-1.858-2.057-4.712 0-2.853 2.123-4.645 2.19-1.859 6.305-1.859zM539.586 29.503V56.38q3.452-3.982 6.704-6.305 3.318-2.323 7.3-3.45 3.982-1.195 8.561-1.195 6.902 0 12.212 2.92 5.375 2.92 8.428 8.495 1.925 3.252 2.589 7.3.663 3.982.663 9.225v34.71q0 5.442-2.522 8.23-2.455 2.787-6.57 2.787-8.96 0-8.96-11.017V77.486q0-8.694-2.588-13.34-2.588-4.712-9.822-4.712-4.845 0-8.76 2.787-3.85 2.721-5.774 7.5-1.46 4.048-1.46 14.401v23.959q0 5.375-2.456 8.23-2.39 2.787-6.703 2.787-8.96 0-8.96-11.017V29.503q0-5.509 2.323-8.23 2.39-2.787 6.637-2.787 4.314 0 6.703 2.787 2.455 2.788 2.455 8.23z"})),n.createElement("g",{"aria-label":"Sure",style:{fontSize:"135.919px",lineHeight:1.25,fontFamily:"'Arial Rounded MT Bold'",InkscapeFontSpecification:"'Arial Rounded MT Bold, Normal'",fill:"#65ce3e",strokeWidth:3.39799}},n.createElement("path",{d:"M684.033 88.237q0 8.827-4.579 15.862-4.513 7.035-13.273 11.017-8.76 3.982-20.773 3.982-14.402 0-23.76-5.442-6.636-3.916-10.817-10.42-4.115-6.57-4.115-12.742 0-3.584 2.456-6.106 2.522-2.588 6.371-2.588 3.12 0 5.243 1.99 2.19 1.992 3.716 5.907 1.859 4.646 3.982 7.765 2.19 3.12 6.106 5.177 3.916 1.99 10.287 1.99 8.76 0 14.203-4.048 5.508-4.114 5.508-10.22 0-4.845-2.987-7.831-2.92-3.053-7.632-4.646-4.645-1.593-12.477-3.385-10.486-2.455-17.587-5.707-7.035-3.319-11.216-8.96-4.115-5.707-4.115-14.136 0-8.03 4.38-14.269 4.38-6.238 12.677-9.557 8.296-3.384 19.512-3.384 8.959 0 15.463 2.256 6.57 2.19 10.884 5.907 4.314 3.65 6.305 7.698 1.99 4.049 1.99 7.898 0 3.517-2.521 6.371-2.456 2.788-6.172 2.788-3.385 0-5.177-1.66-1.725-1.725-3.783-5.574-2.654-5.509-6.37-8.562-3.717-3.119-11.947-3.119-7.632 0-12.344 3.385-4.646 3.318-4.646 8.03 0 2.92 1.593 5.044 1.593 2.124 4.38 3.65 2.788 1.527 5.641 2.39 2.854.862 9.425 2.521 8.229 1.925 14.866 4.248 6.703 2.323 11.348 5.641 4.712 3.318 7.3 8.429 2.655 5.043 2.655 12.41zM746.55 108.877v-2.323q-3.251 4.115-6.835 6.902-3.584 2.788-7.831 4.115-4.248 1.394-9.69 1.394-6.57 0-11.813-2.721-5.177-2.721-8.03-7.5-3.385-5.773-3.385-16.591V56.248q0-5.442 2.455-8.096 2.456-2.721 6.504-2.721 4.115 0 6.637 2.72 2.522 2.722 2.522 8.097v29.003q0 6.304 1.062 10.618 1.062 4.248 3.783 6.703 2.787 2.39 7.5 2.39 4.579 0 8.627-2.722 4.048-2.72 5.907-7.1 1.526-3.85 1.526-16.858V56.248q0-5.375 2.522-8.096t6.57-2.721q4.049 0 6.504 2.72 2.456 2.655 2.456 8.097v52.496q0 5.177-2.39 7.765-2.322 2.589-6.039 2.589-3.716 0-6.172-2.655-2.39-2.721-2.39-7.566zM799.578 92.95v15.13q0 5.51-2.588 8.297-2.589 2.72-6.57 2.72-3.916 0-6.438-2.787t-2.522-8.23V57.643q0-12.211 8.827-12.211 4.512 0 6.503 2.853 1.991 2.854 2.19 8.429 3.253-5.575 6.637-8.429 3.451-2.853 9.159-2.853 5.707 0 11.083 2.853 5.376 2.854 5.376 7.566 0 3.318-2.323 5.509-2.257 2.123-4.911 2.123-.996 0-4.845-1.194-3.783-1.261-6.703-1.261-3.982 0-6.504 2.123-2.522 2.058-3.916 6.173-1.393 4.114-1.924 9.822-.531 5.641-.531 13.804zM888.31 86.71h-35.44q.067 6.173 2.456 10.885 2.455 4.712 6.437 7.101 4.049 2.39 8.894 2.39 3.252 0 5.906-.73 2.721-.797 5.243-2.39 2.522-1.66 4.646-3.517 2.124-1.859 5.508-5.044 1.394-1.195 3.982-1.195 2.788 0 4.513 1.527 1.726 1.526 1.726 4.313 0 2.456-1.925 5.774-1.925 3.252-5.84 6.305-3.85 2.987-9.756 4.978-5.84 1.99-13.472 1.99-17.455 0-27.144-9.954-9.69-9.955-9.69-27.012 0-8.03 2.39-14.866 2.388-6.902 6.968-11.813 4.579-4.911 11.282-7.5 6.703-2.654 14.866-2.654 10.619 0 18.185 4.513 7.632 4.446 11.415 11.548 3.783 7.1 3.783 14.468 0 6.835-3.916 8.893-3.916 1.99-11.017 1.99zm-35.44-10.286h32.852q-.664-9.291-5.044-13.87-4.314-4.646-11.415-4.646-6.77 0-11.15 4.712-4.314 4.645-5.243 13.804z"})))},Y=function(){var e=Object(n.useState)(!1),a=Object(g.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)(!1),o=Object(g.a)(s,2),m=o[0],i=o[1],u=Object(c.c)(function(e){return e.auth}).user,d=Object(c.b)(),E=Object(h.j)();Object(n.useEffect)(function(){["/login","/register"].includes(E.pathname)&&d({type:"CLEAR_MESSAGE"})},[d,E]);var f=Object(n.useCallback)(function(){d(function(e){L(),e({type:"LOGOUT"})})},[d]);return Object(n.useEffect)(function(){return u?(l(u.roles.includes("ROLE_MODERATOR")),i(u.roles.includes("ROLE_ADMIN"))):(l(!1),i(!1)),H.on("logout",function(){f()}),function(){H.remove("logout")}},[u,f]),r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement(b.b,{to:"/",className:"navbar-brand"},r.a.createElement(X,{height:50,width:250})),r.a.createElement("div",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/home",className:"nav-link"},"Home")),t&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/mod",className:"nav-link"},"Moderator Board")),m&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/admin",className:"nav-link"},"Admin Board")),u&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/user",className:"nav-link"},"User"))),u?r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/profile",className:"nav-link"},u.username)),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/login",className:"nav-link",onClick:f},"LogOut"))):r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{to:"/register",className:"nav-link"},"Sign Up")))),r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,"ABC"))),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,"BoardAdmin"))),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/home",element:r.a.createElement(J,null)}),r.a.createElement(h.b,{path:"/login",element:r.a.createElement(R,null)}),r.a.createElement(h.b,{path:"/register",element:r.a.createElement(F,null)}),r.a.createElement(h.b,{path:"/profile",element:r.a.createElement(W,null)}),r.a.createElement(h.b,{path:"/user",element:r.a.createElement($,null)}),r.a.createElement(h.b,{path:"/mod",element:r.a.createElement(K,null)}),r.a.createElement(h.b,{path:"/admin",element:r.a.createElement(Q,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=document.getElementById("root");Object(l.createRoot)(Z).render(r.a.createElement(c.a,{store:v},r.a.createElement(b.a,null,r.a.createElement(Y,null)))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},66:function(e,a,t){e.exports=t(194)},78:function(e,a,t){},82:function(e,a,t){}},[[66,2,1]]]);
//# sourceMappingURL=main.c026e64e.chunk.js.map