!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3)},function(e,t,n){},function(e,t){function n(e,t,n,r,o,c,i){try{var a=e[c](i),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(o,c){var i=e.apply(t,r);function a(e){n(i,o,c,a,u,"next",e)}function u(e){n(i,o,c,a,u,"throw",e)}a(void 0)}))}}var o,c,i,a=document.querySelector(".search__input"),u=document.querySelector(".search__find-list"),s=document.querySelector(".repositories__list"),l=(o=function(){return f.apply(this,arguments)},c=300,function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];clearTimeout(i),i=setTimeout((function(){o.apply(e,n)}),c)});function f(){return(f=r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a.value){e.next=12;break}return d(),e.next=5,fetch("https://api.github.com/search/repositories?q=".concat(a.value,"&per_page=5"));case 5:return t=e.sent,e.next=8,t.json();case 8:e.sent.items.forEach((function(e){p(e)})),e.next=13;break;case 12:d();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function p(e){var t,n,r,o=document.createElement("li");o.addEventListener("click",(t=e.name,n=e.owner.login,r=e.stargazers_count,function(){a.value="",d();var e=document.createElement("span");e.classList.add("repositories__text"),e.innerHTML="Name: ".concat(t,"<br>Owner: ").concat(n,"<br>Stars: ").concat(r);var o=document.createElement("button");o.classList.add("repositories__btn-close");var c=document.createElement("li");c.classList.add("repositories__find-elem"),c.append(e),c.append(o),s.append(c)})),o.classList.add("search__find-elem"),o.textContent=e.name,u.append(o)}function d(){u.innerHTML=""}a.addEventListener("keyup",l),s.addEventListener("click",(function(e){"repositories__btn-close"===e.target.className&&e.target.closest(".repositories__find-elem").remove()}))}]);
//# sourceMappingURL=bundle.js.map