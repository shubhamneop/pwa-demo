(this["webpackJsonpcra-pwa"]=this["webpackJsonpcra-pwa"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(5),c=n.n(i),a=(n(11),n(3)),s=(n.p,n(12),"#f7287b"),l="#c717fc",d="#F7DB4F",u="#E8175D",b="#99B898",j="#83AF9B",h=n(1),g={header:{width:"100%",height:90,paddingTop:36,backgroundColor:s,alignItems:"center",justifyContent:"center",textAlign:"center"},headerTitle:{color:"black"}};var O=function(e){var t=e.title;return Object(h.jsx)("div",{style:g.header,children:Object(h.jsxs)("h1",{style:g.headerTitle,children:[" ",t," "]})})},f=n(2),p={input:{height:30,borderBottomColor:"grey",borderBottomWidth:1,marginVertical:10}},x=function(e){return Object(h.jsx)("input",Object(f.a)(Object(f.a)({},e),{},{style:Object(f.a)(Object(f.a)({},p.input),e.style)}))},v={card:{shadowColor:"black",shadowOffset:{width:0,height:2},shadowRadius:6,shadowOpacity:.26,elevation:7,backgroundColor:"white",padding:20,borderRadius:10,boxShadow:"#c8c8e2 1px 2px 2px 3px"}},m=function(e){return Object(h.jsx)("div",{style:Object(f.a)(Object(f.a)({},v.card),e.style),children:e.children})},w={container:{borderWidth:2,borderColor:l,padding:10,borderRadius:10,marginVertical:10,alignItems:"center",justifyContent:"center"},number:{color:l,fontSize:22}},y=function(e){return Object(h.jsx)("div",{style:w.container,children:Object(h.jsx)("p",{style:w.number,children:e.children})})},C=n(4),k={screen:{flex:1,padding:10,alignItems:"center",textAlign:"center"},title:{fontSize:20,marginVertical:10},inputConatiner:{alignItems:"center"},buttonContainer:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-evenly",paddingHorizontal:15},buttondiv:{width:100},input:{textAlign:"center",marginBottom:"1em"},summaryContainer:{marginTop:20,alignItems:"center"},button:{backgroundColor:s,border:"none",color:"white",padding:"15px 32px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px"}},S=function(e){var t,n=Object(r.useState)(""),o=Object(a.a)(n,2),i=o[0],c=o[1],s=Object(r.useState)(!1),d=Object(a.a)(s,2),u=d[0],b=d[1],g=Object(r.useState)(),O=Object(a.a)(g,2),p=O[0],v=O[1];return u&&(t=Object(h.jsxs)(m,{style:k.summaryContainer,children:[Object(h.jsx)("h1",{children:"You seleted"}),Object(h.jsxs)(y,{children:[" ",p]}),Object(h.jsx)("button",{title:"START GAME",style:Object(f.a)(Object(f.a)({},k.button),{},{backgroundColor:j}),color:j,onClick:function(){return e.onStartGame(p)},children:"START GAME"})]})),Object(h.jsxs)("div",{style:k.screen,children:[Object(h.jsx)("h1",{style:k.title,children:"Start a New Game"}),Object(h.jsxs)(m,{style:k.inputConatiner,children:[Object(h.jsx)("p",{children:"Select a Number"}),Object(h.jsx)(x,{style:k.input,autoCapitalize:"none",maxLength:2,onChange:function(e){c(e.target.value.replace(/[^0-9]/g,""))},value:i}),Object(h.jsxs)("div",{style:k.buttonContainer,children:[Object(h.jsx)("div",{style:k.buttondiv,children:Object(h.jsx)("button",{title:"Reset",style:Object(f.a)(Object(f.a)({},k.button),{},{backgroundColor:l}),onClick:function(){c(""),b(!1)},children:"Reset"})}),Object(h.jsx)("div",{style:k.buttondiv,children:Object(h.jsx)("button",{onClick:function(){var e=parseInt(i);isNaN(e)||e<=0||e>99?C.b.error("Invalid number Number has to be number between 1 and 99.",{position:C.b.POSITION.TOP_RIGHT}):(b(!0),v(e),c(""))},style:k.button,children:"Confirm"})})]})]}),t]})},A=void 0,R=function e(t,n,r){t=Math.ceil(t),n=Math.floor(n);var o=Math.floor(Math.random()*(n-t))+t;return o===r?e(t,n,r):o},T={screen:{flex:1,padding:10,alignItems:"center",textAlign:"center"},buttonContainer:{flexDirection:"row",justifyContent:"space-evenly",marginTop:20,display:"flex"},button:{backgroundColor:u,border:"none",color:"white",padding:"15px 32px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px"}},N=function(e){var t=Object(r.useState)(R(1,100,e.userChoise)),n=Object(a.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(0),s=Object(a.a)(c,2),l=s[0],u=s[1],b=Object(r.useRef)(1),j=Object(r.useRef)(100),g=e.userChoise,O=e.onGameOver;Object(r.useEffect)((function(){o===g&&O(l)}),[o,g,O]);var p=function(t){if("lower"===t&&o<e.userChoise||"greater"===t&&o>e.userChoise)C.b.dark("Don't lie!, You konw that this is wrong...",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{"lower"==t?(j.current=o,R(1)):b.current=o;var n=R(b.current,j.current,o);i(n),u((function(e){return e+1}))}};return Object(h.jsxs)("div",{style:T.screen,children:[Object(h.jsx)("h2",{children:"Opponent's Guess"}),Object(h.jsx)(y,{children:o}),Object(h.jsxs)(m,{style:T.buttonContainer,children:[Object(h.jsx)("button",{title:"LOWER",style:Object(f.a)(Object(f.a)({},T.button),{},{backgroundColor:d}),onClick:p.bind(A,"lower"),children:"LOWER"}),Object(h.jsx)("button",{title:"GREATER",style:Object(f.a)({},T.button),onClick:p.bind(A,"greater"),children:"GREATER"})]})]})},G={screen:{flex:1,justifyContent:"center",alignItems:"center"},card:{padding:10,margin:20,justifyContent:"space-around",alignItems:"center",textAlign:"center"},button:{backgroundColor:b,border:"none",color:"white",padding:"15px 32px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px"}},I=function(e){return Object(h.jsx)(m,{style:G.card,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"The Game is Over!"}),Object(h.jsxs)("h3",{children:["Number of rounds: ",e.roundNum]}),Object(h.jsxs)("p",{children:["Number was : ",e.userNumber]}),Object(h.jsx)("button",{title:"New Game",style:G.button,onClick:e.onRestart,children:"New Game"})]})})};var E=function(){var e=Object(r.useState)(),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(0),c=Object(a.a)(i,2),s=c[0],l=c[1],d=Object(h.jsx)(S,{onStartGame:function(e){o(e),l(0)}});return n&&s<=0?d=Object(h.jsx)(N,{userChoise:n,onGameOver:function(e){l(e)}}):s>0&&(d=Object(h.jsx)(I,{roundNum:s,userNumber:n,onRestart:function(){l(0),o(null)}})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(C.a,{}),Object(h.jsxs)("div",{style:{flex:"1"},children:[Object(h.jsx)(O,{title:"Guess A Number"}),d]})]})},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),i(e),c(e)}))};n(14);c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pwa-demo","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}(),D()}},[[15,1,2]]]);
//# sourceMappingURL=main.e4c90d3b.chunk.js.map