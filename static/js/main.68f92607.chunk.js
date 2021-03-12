(this["webpackJsonplogin-app"]=this["webpackJsonplogin-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a(61)},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),u=a(19),o=a(16),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:null,loaded:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return{user:t.payload,loaded:!0};default:return e}},l=Object(o.c)({user:i,todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var a=e.concat(t.payload);return a;case"REMOVE_TODO":return e.filter((function(e,a){return a!==t.payload}));case"SET_TODOS":return t.payload;default:return e}}}),p=(a(44),a(45),a(6)),m=a.n(p),f=a(11),d=a(12),h=(a(47),a(33)),E=(a(48),h.initializeApp({apiKey:"AIzaSyDkIyLvI4sNmZKm227djMHBMDqKVZ7RQuI",authDomain:"login-app-85261.firebaseapp.com",databaseURL:"https://login-app-85261.firebaseio.com",projectId:"login-app-85261",appId:"1:267875740811:web:1655fb669f08686b22788e"})),b=a(22),O=a.n(b),g=a(13),v=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),u=Object(d.a)(s,2),o=u[0],i=u[1],l=Object(g.f)(),p=function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.auth().setPersistence(O.a.auth.Auth.Persistence.LOCAL);case 2:return e.next=4,E.auth().createUserWithEmailAndPassword(a,o);case 4:l.push("/list");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main"},r.a.createElement("p",{className:"text"},"Welcome"),r.a.createElement("input",{placeholder:"Email",onChange:function(e){return c(e.target.value)},className:"input-form"}),r.a.createElement("input",{placeholder:"Password",type:"password",onChange:function(e){return i(e.target.value)},className:"input-form"}),r.a.createElement("button",{className:"button",onClick:p},"Sign Up"),r.a.createElement("p",{className:"login-text"},"Already with us?"),r.a.createElement("button",{className:"button",onClick:function(){l.push("/login")}},"Log in")))},N=(a(60),function(e){return{type:"SET_TODOS",payload:e}}),y=Object(u.b)((function(e){return{todos:e.todos,user:e.user}}))((function(e){var t=Object(g.f)(),a=Object(n.useState)(""),c=Object(d.a)(a,2),s=c[0],u=c[1],o=E.firestore(),i=function(){var t=Object(f.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user.user){t.next=6;break}return a=o.collection("userTodos").doc(e.user.user.uid),t.next=4,a.get();case 4:(n=t.sent).exists?e.dispatch(N(n.data().todos)):e.dispatch(N([]));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(Object(n.useEffect)((function(){i()}),[e.user]),!1===e.user.loaded)return null;if(!e.user.user)return t.push("/"),null;var l=function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.auth().signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"main-list"},r.a.createElement("div",{className:"profile-info"},r.a.createElement("p",{className:"text-profile"},"Logged in as ",E.auth().currentUser.email),r.a.createElement("p",{className:"text-profile"},e.state),r.a.createElement("button",{className:"button-profile",onClick:l},"Sign Out")),r.a.createElement("div",{className:"write-task"},r.a.createElement("input",{onChange:function(e){return t=e.target.value,void u(t);var t},className:"list-input",placeholder:"Write your task here",value:s}),r.a.createElement("button",{onClick:function(){return function(t){e.dispatch({type:"ADD_TODO",payload:t})}(s)},className:"create-button first"},"Create")),r.a.createElement("div",{className:"list"},r.a.createElement("p",{className:"main-word"},"Tasks:"),e.todos.map((function(t,a){return r.a.createElement("div",{key:a,className:"single-task"},r.a.createElement("p",{className:"task"},t),r.a.createElement("button",{onClick:function(){return function(t){e.dispatch(function(e){return{type:"REMOVE_TODO",payload:e}}(t))}(a)},className:"list-button"},"\u2713"))}))))})),j=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),u=Object(d.a)(s,2),o=u[0],i=u[1],l=Object(g.f)(),p=function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.auth().setPersistence(O.a.auth.Auth.Persistence.LOCAL);case 2:return e.next=4,E.auth().signInWithEmailAndPassword(a,o);case 4:l.push("/list");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main"},r.a.createElement("p",{className:"text"},"Welcome back"),r.a.createElement("input",{placeholder:"Email",onChange:function(e){return c(e.target.value)},className:"input-form"}),r.a.createElement("input",{placeholder:"Password",type:"password",onChange:function(e){return i(e.target.value)},className:"input-form"}),r.a.createElement("button",{className:"button",onClick:p},"Log in"),r.a.createElement("p",{className:"login-text"},"New user?"),r.a.createElement("button",{className:"button",onClick:function(){l.push("/")}},"Sign in")))},w=function(e){return{type:"SET_USER",payload:e}},k=Object(u.b)((function(e){return{user:e.user}}))((function(e){return Object(n.useEffect)((function(){return E.auth().onAuthStateChanged(function(){var t=Object(f.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.dispatch(w(E.auth().currentUser));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]),null}));var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/login-app/",component:v}),r.a.createElement(g.a,{path:"/login-app/list",component:y}),r.a.createElement(g.a,{path:"/login-app/login",component:j})),r.a.createElement(k,null))},x=a(17),D=E.firestore(),C=Object(o.d)(l,Object(o.a)((function(e){return function(t){return function(a){var n=t(a);return"ADD_TODO"!==a.type&&"REMOVE_TODO"!==a.type||(console.log(e.getState()),function(e,t){console.log(e.getState().user.user.uid),D.collection("userTodos").doc(e.getState().user.user.uid).set({todos:t})}(e,e.getState().todos)),n}}})),void 0);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:C},r.a.createElement(x.a,null,r.a.createElement(S,null)))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.68f92607.chunk.js.map