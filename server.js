!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=5)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(0),i=(n=u)&&n.__esModule?n:{default:n};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){return i.default.createElement("div",null,"Hello World",this.props.data)}}]),t}();t.default=l},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";var n=a(r(4)),o=a(r(3)),u=r(2),i=a(r(1)),l=a(r(0)),c=a(r(6));function a(e){return e&&e.__esModule?e:{default:e}}var f=(0,n.default)();f.use((0,o.default)()),f.use(n.default.static("public")),f.get("*",function(e,t,r){var n=(0,u.renderToString)(l.default.createElement(i.default,{data:"Tyler"}));t.send('\n  <!DOCTYPE html>\n    <html>\n      <head>\n        <title>SSR with RR</title>\n        <script src="/bundle.js" defer><\/script>\n        <script>window.__INITIAL_DATA__ = '+(0,c.default)("Tyler")+'<\/script>\n      </head>\n\n      <body>\n        <div id="app">'+n+"</div>\n      </body>\n    </html>\n  ")}),f.listen(3e3,function(){console.log("Server is listening on port: 3000")})},function(e,t){e.exports=require("serialize-javascript")}]);