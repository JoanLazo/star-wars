(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},38:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(36),a(7)),i=a(6),s=a(12),m=a.n(s),u=a(27),d=a(10),p=(a(38),a(28)),v=a.n(p),f=function(e){var t=e.data,a=Object(n.useState)([]),c=Object(d.a)(a,2),o=c[0],i=c[1],s=t.filter(function(e){return-1!==e.name.toLowerCase().indexOf(o)});return r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return i(e.currentTarget.value)},className:"center justify-content-center input mt-5",type:"text",placeholder:"BUSCAR"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"my-5"},r.a.createElement("h2",{className:"color-white center"},"RESULTADOS")),r.a.createElement("div",{className:"row"},s.map(function(e){return r.a.createElement("div",{key:e.name,className:"col-4 cards my-2",style:{marginBottom:"2rem"}},r.a.createElement("div",{className:"recipes__box"},r.a.createElement("div",{className:""},r.a.createElement("h5",{className:"color-white hero-title my-2 text-center mt-4"},e.name),r.a.createElement("button",{className:"color-white btn-volver link text-center "},r.a.createElement(l.b,{className:"color-white btn-volver link text-center btn-detalle",to:"/descripci\xf3n"},"Ver detaller")))))}))))},h=function(e){var t=e.data;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},t.map(function(e){return r.a.createElement("div",{key:e.url,className:"col-md-4 color-white my-5"},r.a.createElement("h3",{className:"hero-title App-subtitle"},e.name),r.a.createElement("div",{className:"body-character"},r.a.createElement("p",{className:"text-character mt-2"},"Peso: ","",e.mass,"kg"),r.a.createElement("p",{className:"active-recipe__website"},"A\xf1o:",e.birth_year),r.a.createElement("p",{className:"active-recipe__website"},"G\xe9nero:",e.gender)))}),r.a.createElement("button",{className:"my-5 btn-volver link ml-5"},r.a.createElement(l.b,{className:"color-white btn-volver link",to:"/"},"Volver"))))},w=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){!function(){var e=Object(u.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()("https://swapi.co/api/people/");case 3:t=e.sent,console.log(t.data.results),c(t.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("div",{className:"App color-black justify-content-center"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title color-white center"},"STAR WARS"),r.a.createElement("h1",{className:"App-subtitle color-white center"},"PERSONAJES")),r.a.createElement(f,{data:a}),r.a.createElement(h,{data:a}))},E=function(){return r.a.createElement(l.a,{basename:"/star-wars"},r.a.createElement(i.a,{path:"/",component:w,exact:!0}))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/star-wars",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/star-wars","/service-worker.js");b?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(t,e)})}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.e87e61b8.chunk.js.map