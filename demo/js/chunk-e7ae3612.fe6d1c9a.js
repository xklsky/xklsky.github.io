(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7ae3612"],{"0ff6":function(t,e,n){"use strict";var o=n("2ca4"),i=n.n(o);i.a},"2ca4":function(t,e,n){},a463:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide-container"},[n("router-link",{attrs:{to:"/slide2",tag:"button"}},[t._v("下一页")]),n("p",[t._v("slide1")]),n("button",{on:{click:function(e){t.show=!t.show}}},[t._v("show/hide text")]),n("transition",{attrs:{name:"fade"}},[t.show?n("p",[t._v("Hello World!")]):t._e()]),n("button",{attrs:{"data-index":"11"},on:{click:function(e){return t.handleClick(e)}}},[t._v("点击事件")]),n("input",{staticClass:"bugText",attrs:{type:"text"},on:{blur:t.bugText}}),n("input",{attrs:{type:"text"}}),n("ul",t._l(t.arr,(function(e,o){return n("li",{directives:[{name:"myclick",rawName:"v-myclick",value:e,expression:"item"}],key:o},[t._v(t._s(e))])})),0)],1)},i=[],c=function(){var t=window.navigator.userAgent.toLocaleLowerCase(),e=/iphone|ipad|ipod/.test(t),n=/android/.test(t);return{isIOS:e,isAndroid:n}}();function l(t){if(c.isIOS&&(t.addEventListener("focus",(function(){console.log("IOS 键盘弹起啦！")}),!1),t.addEventListener("blur",(function(){console.log("IOS 键盘收起啦！")}))),c.isAndroid){var e=document.documentElement.clientHeight||document.body.clientHeight;window.addEventListener("resize",(function(){var t=document.documentElement.clientHeight||document.body.clientHeight;e<t?console.log("Android 键盘收起啦！"):console.log("Android 键盘弹起啦！"),e=t}),!1)}}function r(){console.log("consoleKeybord已加载");for(var t=document.querySelectorAll(".input"),e=0;e<t.length;e++)l(t[e])}var s={name:"slide1",data:function(){return{show:!0,domHeight:document.documentElement.clientHeight,arr:[1,2,3,4,5,6]}},methods:{handleClick:function(t){console.log(t.target.dataset.index)},bugText:function(){}},mounted:function(){r(),window.onresize=function(){console.log(document.documentElement.clientHeight)}},directives:{myclick:{bind:function(t,e,n,o){t.addEventListener("click",(function(){console.log(t,e.value,n,o)}))}}}},u=s,d=(n("0ff6"),n("2877")),a=Object(d["a"])(u,o,i,!1,null,"472f7a54",null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-e7ae3612.fe6d1c9a.js.map