(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=(r("Uph4"),a.a.createContext([{},function(){}])),i=function(e){var t=Object(n.useState)(null),r={selected:t[0],setSelected:t[1]};return a.a.createElement(o.Provider,{value:r},e.children)};r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("ioFf"),r("rGqo"),r("dRSK"),r("VRzm"),r("Btvt");function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=[],u=[1,2,3,4,5,6],s=function(e){var t=[];l=[].concat(u);for(var r=0;r<4;r++)e?t.push({i:r,color_i:m(1,6)}):t.push({i:r,color_i:f(l)});return t},f=function(e){var t=m(0,e.length);return e.splice(t,1)[0]},m=function(e,t){return Math.floor(Math.random()*t+e)},p=function(e,t){return new Promise((function(r){var n=c(e.answer),a=c(e.attempts),o=a[t].guessPegs,i="";if(h(o))return null;var l=d(o,n),u=l[0],s=l[1];a[t].result={isProcessed:!0,correctColor_CorrectPlacement:u,correctColor_WrongPlacement:s},4===u?(i="win",a=y(c(a),t)):t+1>=a.length?(i="lose",a=y(c(a),t)):(i="play",a=v(c(a),t)),r([a,i])}))},h=function(e){return e.find((function(e){return 0===e.color_i}))},d=function(e,t){var r=t.map((function(e){return e.color_i}));return[e.reduce((function(e,t,n){return t.color_i===r[n]&&(e+=1,r.splice(n,1,null)),e}),0),e.reduce((function(e,t){var n=r.indexOf(t.color_i);return n>=0&&(e+=1,r.splice(n,1,null)),e}),0)]},v=function(e,t){return e[t].enabled=!1,e[t+1].enabled=!0,e},y=function(e,t){return e[t].enabled=!1,e},g=a.a.createContext([{},function(){}]),E=2,w=4,b=function(e){var t=function(e){for(var t=[],r=0;r<w;r++)t.push({i:r,attempt_i:e,color_i:0});return t},r=function(){for(var e=[],r=0;r<E;r++)e.push({i:r,enabled:!1,guessPegs:t(r),result:{isProcessed:!1,correctColor_CorrectPlacement:0,correctColor_WrongPlacement:0}});return e[0].enabled=!0,e},o=Object(n.useState)(r()),i=o[0],c=o[1],l=Object(n.useState)(s()),u=l[0],f=l[1],m=Object(n.useState)("intro"),p=m[0],h=m[1],d={attempts:i,setAttempts:c,answer:u,setAnswer:f,view:p,setView:h,reset:function(){f(s()),h("play"),c(r())}};return a.a.createElement(g.Provider,{value:d},e.children)},_=(r("OG14"),r("7okh")),N=r.n(_),x=r("ea3a"),O=r.n(x),C=function(e){var t="\n    "+O.a.peg+"\n    "+O.a["peg_"+e.color_i]+"\n    "+(e.selected&&O.a.selected)+"\n    "+(e.enabled&&O.a.enabled)+"\n  ";return a.a.createElement("div",{className:t,"data-attempt_i":e.attempt_i,"data-i":e.i,"data-color_i":e.color_i,onClick:e.onClick,onKeyUp:function(e){return console.log("Peg Key Up")},role:"button",tabIndex:e.i},e.children)},P=function(){var e=Object(n.useContext)(g);return a.a.createElement("div",{className:N.a.answer},e.answer.map((function(e){return a.a.createElement(C,{key:e.i,i:e.i,color_i:e.color_i,attempt:null,selected:!1,enabled:!1,onClick:null})})))},j=r("W2oN"),k=r.n(j),L=r("Vwxg"),I=r.n(L),A=(r("91GP"),r("xfY5"),r("o0o1")),S=r.n(A),T=(r("ls82"),r("88Bp")),G=r.n(T);function V(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,a)}var K=function(e){var t=Object(n.useContext)(o),r=Object(n.useContext)(g),i=function(){var e,t=(e=S.a.mark((function e(t,r){var n,a,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,r);case 2:if(n=e.sent,a=n[0],o=n[1],a){e.next=7;break}return e.abrupt("return");case 7:t.setAttempts(a),t.setView(o);case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){F(o,n,a,i,c,"next",e)}function c(e){F(o,n,a,i,c,"throw",e)}i(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),c=function(n){if("number"==typeof t.selected&&e.enabled){var a=Number(n.target.dataset.color_i),o=Number(n.target.dataset.attempt_i),c=Number(n.target.dataset.i);a>0&&a===t.selected?function(e,t){var n=V(r.attempts);n[e].guessPegs[t].color_i=0,r.setAttempts(n)}(o,c):(!function(e,n){var a=V(r.attempts);a[e].guessPegs[n].color_i=t.selected,r.setAttempts(a)}(o,c),i(Object.assign({},r),o))}};return a.a.createElement("div",{className:G.a.guess+" "+(e.enabled&&G.a.enabled)},e.guessPegs.map((function(t){return a.a.createElement(C,{key:t.i,i:t.i,color_i:t.color_i,attempt_i:t.attempt_i,selected:!1,enabled:e.enabled,onClick:c})})))},M=r("BETq"),U=r.n(M),B=r("K5S9"),R=r.n(B),Y=function(e){return a.a.createElement("div",{"data-i":e.i,className:R.a.pin+" "+R.a[e.color]})},q=function(e){var t=Object(n.useContext)(g),r=Object(n.useState)(["hole","hole","hole","hole"]),o=r[0],i=r[1];return Object(n.useEffect)((function(){var r=t.attempts[e.attempt_i].result;if(r.isProcessed){for(var n=[],a=[],o=0;o<r.correctColor_CorrectPlacement;o++)n.push("black");for(var c=0;c<r.correctColor_WrongPlacement;c++)a.push("white");var l=[].concat(n,a,["hole","hole","hole","hole"]).slice(0,4);i(l)}}),[t.attempts,e.attempt_i]),a.a.createElement("div",{className:U.a.result},a.a.createElement("div",{className:U.a.result_row_wrap},a.a.createElement("div",{className:U.a.result_row},a.a.createElement(Y,{i:"0",color:o[0]}),a.a.createElement(Y,{i:"1",color:o[1]})),a.a.createElement("div",{className:U.a.result_row},a.a.createElement(Y,{i:"2",color:o[2]}),a.a.createElement(Y,{i:"3",color:o[3]}))))},X=function(e){return a.a.createElement("div",{className:I.a.attempt},a.a.createElement(K,{enabled:e.attempt.enabled,guessPegs:e.attempt.guessPegs}),a.a.createElement(q,{attempt_i:e.attempt.i}))},D=function(e){var t=Object(n.useContext)(g);return a.a.createElement("div",{className:k.a.board},t.attempts.map((function(e){return a.a.createElement(X,{key:e.i,attempt:e})})))},W=r("CBit"),H=r.n(W),J=function(e){var t=Object(n.useContext)(g),r=Object(n.useContext)(o),i=function(e){r.setSelected(Number(e.target.dataset.color_i))},c=function(e){t.setView("info")};return a.a.createElement("div",{className:H.a.available_pegs_wrap},a.a.createElement("div",{className:H.a.available_pegs},function(){for(var e=[],t=1;t<7;t++)e.push(a.a.createElement(C,{key:t,i:t,color_i:t,attempt:"",selected:r.selected===t,enabled:"",onClick:i}));return e}(),a.a.createElement("div",{className:H.a.info},a.a.createElement(C,{i:null,color_i:0,attempt:null,selected:"",enabled:"",onClick:c,className:H.a.info},"i"))))},z=r("93iG"),Z=r.n(z),Q=function(e){var t=e.children;return a.a.createElement("div",{className:Z.a.modal},a.a.createElement("div",{className:Z.a.content},t))},$=function(e){var t=Object(n.useContext)(g),r=function(e){t.setView("info")},o=function(e){t.setView("play")};return a.a.createElement(Q,null,a.a.createElement("div",{className:"content"},a.a.createElement("h1",null,"Big Mastermind"),a.a.createElement("p",null,"A web app adaptation of the classic Mastermind board game."),a.a.createElement("div",{onClick:r,onKeyUp:r,role:"button",tabIndex:"0"},a.a.createElement("p",{className:"internallink"},"How to Play")),a.a.createElement("div",{className:"btn",onClick:o,onKeyUp:o,role:"button",tabIndex:"0"},"Play")))},ee=function(e){var t=Object(n.useContext)(g),r=function(e){t.setView("play")};return a.a.createElement(Q,null,a.a.createElement("div",{className:"content"},a.a.createElement("h1",null,"Info"),a.a.createElement("p",null,a.a.createElement("em",null,"TODO: add game play instructions")),a.a.createElement("p",null,a.a.createElement("em",null,"TODO: add link to official rules")),a.a.createElement("p",null,a.a.createElement("em",null,"TODO: add link to open source code")),a.a.createElement("p",null,a.a.createElement("em",null,"TODO: this view deserves a better layout, maybe its own page route")),a.a.createElement("div",{className:"btn",onClick:r,onKeyUp:r,role:"button",tabIndex:"0"},"Play")))},te=function(e){var t=Object(n.useContext)(g),r="win"===e.win_lose?"You won !!1!":"You lose :(",o=function(e){e.preventDefault(),t.reset()};return a.a.createElement(Q,null,a.a.createElement("h1",null,r),a.a.createElement("div",{className:"btn",onClick:o,onKeyUp:o,role:"button",tabIndex:"0"},"Play Again"))},re=function(){var e=Object(n.useContext)(g);return a.a.createElement("div",{id:"app"},"undefined"==typeof window?null:"?cheat"===window.location.search?a.a.createElement(P,null):null,"play"===e.view&&a.a.createElement("div",{id:"meat"},a.a.createElement(J,null),a.a.createElement(D,null)),"intro"===e.view&&a.a.createElement($,null),"info"===e.view&&a.a.createElement(ee,null),"win"===e.view&&a.a.createElement(te,{win_lose:"win"}),"lose"===e.view&&a.a.createElement(te,{win_lose:"lose"}))};t.default=function(){return a.a.createElement(i,null,a.a.createElement(b,null,a.a.createElement(re,null)))}},ls82:function(e,t,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var a=t&&t.prototype instanceof s?t:s,o=Object.create(a.prototype),i=new _(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return x()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var u={};function s(){}function f(){}function m(){}var p={};p[a]=function(){return this};var h=Object.getPrototypeOf,d=h&&h(h(N([])));d&&d!==t&&r.call(d,a)&&(p=d);var v=m.prototype=s.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e){var t;this._invoke=function(n,a){function o(){return new Promise((function(t,o){!function t(n,a,o,i){var c=l(e[n],e,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(s).then((function(e){u.value=e,o(u)}),(function(e){return t("throw",e,o,i)}))}i(c.arg)}(n,a,t,o)}))}return t=t?t.then(o,o):o()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=v.constructor=m,m.constructor=f,m[i]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(g.prototype),g.prototype[o]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,a){var o=new g(c(t,r,n,a));return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(v),v[i]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),b(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;b(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},xfY5:function(e,t,r){"use strict";var n=r("dyZX"),a=r("aagx"),o=r("LZWt"),i=r("Xbzi"),c=r("apmT"),l=r("eeVq"),u=r("kJMx").f,s=r("EemH").f,f=r("hswa").f,m=r("qncB").trim,p=n.Number,h=p,d=p.prototype,v="Number"==o(r("Kuth")(d)),y="trim"in String.prototype,g=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,o=(t=y?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var i,l=t.slice(2),u=0,s=l.length;u<s;u++)if((i=l.charCodeAt(u))<48||i>a)return NaN;return parseInt(l,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(v?l((function(){d.valueOf.call(r)})):"Number"!=o(r))?i(new h(g(t)),r,p):g(t)};for(var E,w=r("nh4g")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)a(h,E=w[b])&&!a(p,E)&&f(p,E,s(h,E));p.prototype=d,d.constructor=p,r("KroJ")(n,"Number",p)}}}]);
//# sourceMappingURL=component---src-pages-index-js-0d32c275eddbba54b7ee.js.map