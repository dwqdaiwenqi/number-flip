!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.NumberFlip=e():t.NumberFlip=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=1)}([function(t,e,r){window,t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.g=void 0;var i=function(t){return null!==t&&"object"===n(t)};e.g=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"div";return function(){var r=document.createElement(e),n=i(t)?t:{class:t};Object.keys(n).forEach(function(t){var e=n[t];void 0!==e&&(/^\$/.test(t)?r.setAttribute("data-"+t.slice(1),e):"style"===t&&i(e)?r.setAttribute("style",Object.keys(e).map(function(t){return"".concat(t,":").concat(e[t])}).join(";")):r.setAttribute(t,e))});for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return s.forEach(function(t){var n,i;(i=t)instanceof HTMLElement&&1===i.nodeType?r.appendChild(t):"img"===e.toLowerCase()&&("string"==typeof(n=t)||n instanceof String)?r.setAttribute("src",t):r.innerHTML+=t}),r}}}])},function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";r.r(e),r.d(e,"Flip",function(){return u});var n=r(0);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(t,e){return(t>e?t:e).toString().length},a=function(t,e){return function(t){return t.split("").map(Number)}(function t(e,r){return e.length<r?t("0"+e,r):e}(t.toString(),e)).reverse()},u=function(){function t(e){var r=this,n=e.node,i=e.from,o=void 0===i?0:i,a=e.to,u=e.duration,c=void 0===u?.5:u,l=e.delay,f=e.easeFn,h=void 0===f?function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}:f,p=e.systemArr,d=void 0===p?[0,1,2,3,4,5,6,7,8,9]:p,y=e.direct,v=void 0===y||y,b=e.separator,g=e.seperateOnly,m=void 0===g?0:g,A=e.separateEvery,j=void 0===A?3:A;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.beforeArr=[],this.afterArr=[],this.ctnrArr=[],this.duration=1e3*c,this.systemArr=d,this.easeFn=h,this.from=o,this.to=a||0,this.node=n,this.direct=v,this.separator=b,this.seperateOnly=m,this.separateEvery=m?0:j,this._initHTML(s(this.from,this.to)),void 0!==a&&(l?setTimeout(function(){return r.flipTo({to:r.to,direct:v})},1e3*l):this.flipTo({to:this.to,direct:v}))}var e,r,u;return e=t,(r=[{key:"_initHTML",value:function(t){this.node.classList.add("number-flip"),this.node.style.position="relative",this.node.style.overflow="hidden";for(var e=0;e<t;e+=1){console.log(t,e);var r=Object(n.g)("ctnr ctnr".concat(e)).apply(void 0,i(this.systemArr.map(function(t){return Object(n.g)("digit")(t)})).concat([Object(n.g)("digit")(this.systemArr[0])]));if(r.style.position="relative",r.style.display="inline-block",r.style.verticalAlign="top",this.ctnrArr.unshift(r),this.node.appendChild(r),this.beforeArr.push(0),this.separator&&(this.separateEvery||this.seperateOnly)&&e!==t-1&&((t-e)%this.separateEvery==1||t-e-this.seperateOnly==1)){var o=(a=this.separator,"[object String]"===Object.prototype.toString.call(a)?this.separator:this.separator.shift()),s=Object(n.g)("sprtr")(o);s.style.display="inline-block",this.node.appendChild(s)}}var a;this.height=this.ctnrArr[0].clientHeight/(this.systemArr.length+1),this.node.style.height=this.height+"px";for(var u=0,c=this.ctnrArr.length;u<c;u+=1)this._draw({digit:u,per:1,alter:~~(this.from/Math.pow(10,u))})}},{key:"_draw",value:function(t){var e=t.per,r=t.alter,n=t.digit;this.height!==this.ctnrArr[0].clientHeight/(this.systemArr.length+1)&&(this.height=this.ctnrArr[0].clientHeight/(this.systemArr.length+1));var i=this.beforeArr[n],o="translateY(".concat(-(((e*r+i)%10+10)%10)*this.height,"px)");this.ctnrArr[n].style.webkitTransform=o,this.ctnrArr[n].style.transform=o}},{key:"flipTo",value:function(t){var e=this,r=t.to,n=t.duration,i=t.easeFn,o=t.direct,s=void 0===o||o,u=this.ctnrArr.length;this.beforeArr=a(this.from,u),this.afterArr=a(r,u);var c=function(t){for(var r=0,n=e.ctnrArr.length-1;n>=0;n-=1){var o=e.afterArr[n]-e.beforeArr[n];r+=o;var a=i||e.easeFn;e._draw({digit:n,per:a(t),alter:s?o:r}),r*=10}},l=performance.now(),f=1e3*n||this.duration;window.addEventListener("resize",function(){e.height=e.ctnrArr[0].clientHeight/(e.systemArr.length+1),e.node.style.height=e.height+"px",c(1)}),requestAnimationFrame(function t(n){var i=n-l;c(i/f),i<f?requestAnimationFrame(t):(e.from=r,c(1))})}}])&&o(e.prototype,r),u&&o(e,u),t}()}])});