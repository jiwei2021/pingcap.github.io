!function(t){var a={};function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)r.d(t,a,function(e){return n[e]}.bind(null,a));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/js/",r(r.s=29)}({29:function(e,n){var t,a,r=$("#ranking-switch .first"),s=$("#ranking-switch .second"),i=$("#ranking-switch .slider");function c(e){e.sort(function(e,n){return e.vote>n.vote}).forEach(function(e,n){return $('<div class="column has-text-left is-4'+((n+1)%2==0?" is-offset-2":"")+'"><div class="task"><div class="meta"><div class="user">'+(e["doing-users"]?e["doing-users"].reduce(function(e,n){return e+'\n                  <a target="_blank" href="'.concat(n.github,'">\n                    <img class="avatar" src="').concat(n.avatar,'" />\n                  </a>')},""):'<img class="avatar" src="https://download.pingcap.com/images/tidb-performance-challenge/github-purple.png" />')+"</div>"+(0<e.bonus?'<div class="bonus">'.concat(e.bonus,"</div>"):"")+'</div><h3 class="text"><a target="_blank" href="'+e.issue+'">'+"".concat(n+1,". ")+e.title+(100===e.progress?'<span class="finish"></span>':"")+'</a></h3><progress class="progress" value="'+e.progress+'" max="100" /></div></div>').appendTo(".tuc-demands .columns")}),e.length%2==1&&$('<div class="column is-4 is-offset-2"></div>').appendTo(".tuc-demands .columns")}function o(e){var n;e?(n="https://internal.pingcap.net/pcp/api/rank",i.text(t),window.matchMedia("(max-width: 768px)").matches?i.css("left","1rem"):i.css("left","calc(30% + 1rem)")):(n="https://internal.pingcap.net/pcp/api/rank/all",i.text(a),i.css("left","calc(50% - 1rem)")),$.getJSON(n,function(e){$("#ranking-list").empty(),e.sort(function(e,n){return n.score-e.score}).forEach(function(e,n){return $("<div>"+(n<3?'<div class="medal medal'+(n+1)+'"></div>':'<div class="index">'+(n+1)+"</div>")+'<div class="github"></div>          <div class="main">            <div class="info">              <div class="name">'+e.name+(e.community?"":' <span class="ti"></span>')+("team"===e.type?' <span class="team">Team</span>':"")+'</div>              <div class="score">'+e.score+'</div>            </div>            <div class="progress-wrapper">              <progress class="progress" value="'+e.score+'" max="10000" />            </div>          </div>        </div>').appendTo("#ranking-list")})})}a="cn"===i.data("lang")?(t="赛季积分","历史积分"):(t="Current","Accumulative"),r.on("click",function(){return o(!0)}),s.on("click",function(){return o()}),$(document).ready(function(){$.getJSON("https://internal.pingcap.net/pcp/api/taskgroup",c),o(!0);var e=window.matchMedia("(max-width: 768px)").matches?1:3;new Swiper(".swiper-container",{autoplay:{delay:6e3},loop:!0,slidesPerView:e,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})})}});