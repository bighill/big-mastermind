(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=(r("Uph4"),o.a.createContext([{},function(){}])),i=function(e){var t=Object(n.useState)(null),r={selected:t[0],setSelected:t[1]};return o.a.createElement(a.Provider,{value:r},e.children)};r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("ioFf"),r("rGqo"),r("dRSK"),r("VRzm"),r("Btvt");function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=[],u=[1,2,3,4,5,6],s=function(e){var t=[];l=[].concat(u);for(var r=0;r<4;r++)e?t.push({i:r,color_i:h(1,6)}):t.push({i:r,color_i:f(l)});return t},f=function(e){var t=h(0,e.length);return e.splice(t,1)[0]},h=function(e,t){return Math.floor(Math.random()*t+e)},m=function(e,t){return new Promise((function(r){var n=c(e.answer),o=c(e.attempts),a=o[t].guessPegs,i="";if(p(a))return null;var l=d(a,n),u=l[0],s=l[1];o[t].result={isProcessed:!0,correctColor_CorrectPlacement:u,correctColor_WrongPlacement:s},4===u?(i="win",o=g(c(o),t)):t+1>=o.length?(i="lose",o=g(c(o),t)):(i="",o=v(c(o),t)),r([o,i])}))},p=function(e){return e.find((function(e){return 0===e.color_i}))},d=function(e,t){var r=t.map((function(e){return e.color_i}));return[e.reduce((function(e,t,n){return t.color_i===r[n]&&(e+=1,r.splice(n,1,null)),e}),0),e.reduce((function(e,t){var n=r.indexOf(t.color_i);return n>=0&&(e+=1,r.splice(n,1,null)),e}),0)]},v=function(e,t){return e[t].enabled=!1,e[t+1].enabled=!0,e},g=function(e,t){return e[t].enabled=!1,e},y=o.a.createContext([{},function(){}]),b=12,w=4,E=function(e){var t=function(e){for(var t=[],r=0;r<w;r++)t.push({i:r,attempt_i:e,color_i:0});return t},r=function(){for(var e=[],r=0;r<b;r++)e.push({i:r,enabled:!1,guessPegs:t(r),result:{isProcessed:!1,correctColor_CorrectPlacement:0,correctColor_WrongPlacement:0}});return e[0].enabled=!0,e},a=Object(n.useState)(r()),i=a[0],c=a[1],l=Object(n.useState)(s()),u=l[0],f=l[1],h=Object(n.useState)(""),m=h[0],p=h[1],d={attempts:i,setAttempts:c,answer:u,setAnswer:f,gameOver:m,setGameOver:p,reset:function(){f(s()),p(""),c(r())}};return o.a.createElement(y.Provider,{value:d},e.children)},_=r("7okh"),N=r.n(_),x=r("ea3a"),O=r.n(x),P=function(e){var t="\n    "+O.a.peg+"\n    "+O.a["peg_"+e.color_i]+"\n    "+(e.selected&&O.a.selected)+"\n    "+(e.enabled&&O.a.enabled)+"\n  ";return o.a.createElement("div",{className:t,"data-attempt_i":e.attempt_i,"data-i":e.i,"data-color_i":e.color_i,onClick:e.onClick,onKeyUp:function(e){return console.log("Peg Key Up")},role:"button",tabIndex:e.i},e.children)},C=function(){var e=Object(n.useContext)(y);return o.a.createElement("div",{className:N.a.answer},e.answer.map((function(e){return o.a.createElement(P,{key:e.i,i:e.i,color_i:e.color_i,attempt:null,selected:!1,enabled:!1,onClick:null})})))},L=r("W2oN"),j=r.n(L),k=r("Vwxg"),A=r.n(k),S=(r("91GP"),r("xfY5"),r("o0o1")),I=r.n(S),T=(r("ls82"),r("88Bp")),G=r.n(T);function F(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function K(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,o)}var R=function(e){var t=Object(n.useContext)(a),r=Object(n.useContext)(y),i=function(){var e,t=(e=I.a.mark((function e(t,r){var n,o,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t,r);case 2:if(n=e.sent,o=n[0],a=n[1],o){e.next=7;break}return e.abrupt("return");case 7:t.setAttempts(o),t.setGameOver(a);case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){K(a,n,o,i,c,"next",e)}function c(e){K(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),c=function(n){if("number"==typeof t.selected&&e.enabled){var o=Number(n.target.dataset.color_i),a=Number(n.target.dataset.attempt_i),c=Number(n.target.dataset.i);o>0&&o===t.selected?function(e,t){var n=F(r.attempts);n[e].guessPegs[t].color_i=0,r.setAttempts(n)}(a,c):(!function(e,n){var o=F(r.attempts);o[e].guessPegs[n].color_i=t.selected,r.setAttempts(o)}(a,c),i(Object.assign({},r),a))}};return o.a.createElement("div",{className:G.a.guess+" "+(e.enabled&&G.a.enabled)},e.guessPegs.map((function(t){return o.a.createElement(P,{key:t.i,i:t.i,color_i:t.color_i,attempt_i:t.attempt_i,selected:!1,enabled:e.enabled,onClick:c})})))},V=r("BETq"),U=r.n(V),Y=r("K5S9"),B=r.n(Y),M=function(e){return o.a.createElement("div",{"data-i":e.i,className:B.a.pin+" "+B.a[e.color]})},X=function(e){var t=Object(n.useContext)(y),r=Object(n.useState)(["hole","hole","hole","hole"]),a=r[0],i=r[1];return Object(n.useEffect)((function(){var r=t.attempts[e.attempt_i].result;if(r.isProcessed){for(var n=[],o=[],a=0;a<r.correctColor_CorrectPlacement;a++)n.push("black");for(var c=0;c<r.correctColor_WrongPlacement;c++)o.push("white");var l=[].concat(n,o,["hole","hole","hole","hole"]).slice(0,4);i(l)}}),[t.attempts,e.attempt_i]),o.a.createElement("div",{className:U.a.result},o.a.createElement("div",{className:U.a.result_row_wrap},o.a.createElement("div",{className:U.a.result_row},o.a.createElement(M,{i:"0",color:a[0]}),o.a.createElement(M,{i:"1",color:a[1]})),o.a.createElement("div",{className:U.a.result_row},o.a.createElement(M,{i:"2",color:a[2]}),o.a.createElement(M,{i:"3",color:a[3]}))))},q=function(e){return o.a.createElement("div",{className:A.a.attempt},o.a.createElement(R,{enabled:e.attempt.enabled,guessPegs:e.attempt.guessPegs}),o.a.createElement(X,{attempt_i:e.attempt.i}))},W=function(e){var t=Object(n.useContext)(y);return o.a.createElement("div",{className:j.a.board},t.attempts.map((function(e){return o.a.createElement(q,{key:e.i,attempt:e})})))},J=r("CBit"),z=r.n(J),H=function(e){var t=Object(n.useContext)(a),r=function(e){t.setSelected(Number(e.target.dataset.color_i))},i=function(e){console.log("handleInfoClick")};return o.a.createElement("div",{className:z.a.available_pegs_wrap},o.a.createElement("div",{className:z.a.available_pegs},function(){for(var e=[],n=1;n<7;n++)e.push(o.a.createElement(P,{key:n,i:n,color_i:n,attempt:"",selected:t.selected===n,enabled:"",onClick:r}));return e}(),o.a.createElement("div",{className:z.a.info},o.a.createElement(P,{i:null,color_i:0,attempt:null,selected:"",enabled:"",onClick:i,className:z.a.info},"i"))))},Z=r("6u2O"),D=r.n(Z),Q=function(e){var t=Object(n.useContext)(y),r="win"===e.win_lose?"You won !!1!":"You lose :(",a=function(e){e.preventDefault(),t.reset()};return o.a.createElement("div",{className:D.a.game_over},o.a.createElement("div",{className:D.a.content},o.a.createElement("h1",null,r),o.a.createElement("h2",{className:D.a.btn,onClick:a,onKeyUp:a,role:"button",tabIndex:"0"},"Play Again")))},$=function(){var e=Object(n.useContext)(y);return o.a.createElement("div",{id:"app"},new URL(window.location.href).searchParams.get("cheat")&&o.a.createElement(C,null),""===e.gameOver&&o.a.createElement("div",{id:"meat"},o.a.createElement(H,null),o.a.createElement(W,null)),e.gameOver&&o.a.createElement(Q,{win_lose:e.gameOver}))};t.default=function(){return o.a.createElement(i,null,o.a.createElement(E,null,o.a.createElement($,null)))}},dRSK:function(e,t,r){"use strict";var n=r("XKFU"),o=r("CkkT")(5),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),n(n.P+n.F*a,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")("find")},ls82:function(e,t,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var o=t&&t.prototype instanceof s?t:s,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return x()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var u={};function s(){}function f(){}function h(){}var m={};m[o]=function(){return this};var p=Object.getPrototypeOf,d=p&&p(p(N([])));d&&d!==t&&r.call(d,o)&&(m=d);var v=h.prototype=s.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e){var t;this._invoke=function(n,o){function a(){return new Promise((function(t,a){!function t(n,o,a,i){var c=l(e[n],e,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return t("throw",e,a,i)}))}i(c.arg)}(n,o,t,a)}))}return t=t?t.then(a,a):a()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[a]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,o){var a=new y(c(t,r,n,o));return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},xfY5:function(e,t,r){"use strict";var n=r("dyZX"),o=r("aagx"),a=r("LZWt"),i=r("Xbzi"),c=r("apmT"),l=r("eeVq"),u=r("kJMx").f,s=r("EemH").f,f=r("hswa").f,h=r("qncB").trim,m=n.Number,p=m,d=m.prototype,v="Number"==a(r("Kuth")(d)),g="trim"in String.prototype,y=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,a=(t=g?t.trim():h(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var i,l=t.slice(2),u=0,s=l.length;u<s;u++)if((i=l.charCodeAt(u))<48||i>o)return NaN;return parseInt(l,n)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof m&&(v?l((function(){d.valueOf.call(r)})):"Number"!=a(r))?i(new p(y(t)),r,m):y(t)};for(var b,w=r("nh4g")?u(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)o(p,b=w[E])&&!o(m,b)&&f(m,b,s(p,b));m.prototype=d,d.constructor=m,r("KroJ")(n,"Number",m)}}}]);
//# sourceMappingURL=component---src-pages-index-js-c7a83fe3e81fe3c1b96c.js.map