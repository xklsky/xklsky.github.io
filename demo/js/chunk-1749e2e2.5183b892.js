(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1749e2e2"],{"048a":function(t,n,e){},a463:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"slide-container"},[e("router-link",{attrs:{to:"/slide2",tag:"button"}},[t._v("下一页")]),e("p",[t._v("slide1")]),e("button",{on:{click:function(n){t.show=!t.show}}},[t._v("show/hide text")]),e("transition",{attrs:{name:"fade"}},[t.show?e("p",[t._v("Hello World!")]):t._e()]),e("button",{attrs:{"data-index":"11"},on:{click:function(n){return t.handleClick(n)}}},[t._v("点击事件")]),e("input",{staticClass:"bugText",attrs:{type:"text"},on:{blur:t.bugText}}),e("input",{attrs:{type:"text"}}),e("ul",t._l(t.arr,(function(n,o){return e("li",{directives:[{name:"myclick",rawName:"v-myclick",value:n,expression:"item"}],key:o},[t._v(t._s(n))])})),0)],1)},i=[],c=function(){var t=window.navigator.userAgent.toLocaleLowerCase(),n=/iphone|ipad|ipod/.test(t),e=/android/.test(t);return{isIOS:n,isAndroid:e}}();function l(t){if(c.isIOS&&(t.addEventListener("focus",(function(){console.log("IOS 键盘弹起啦！")}),!1),t.addEventListener("blur",(function(){console.log("IOS 键盘收起啦！")}))),c.isAndroid){var n=document.documentElement.clientHeight||document.body.clientHeight;console.log("安卓，原始高度",n),window.addEventListener("resize",(function(){var t=document.documentElement.clientHeight||document.body.clientHeight;console.log("浏览器改变后的尺寸",t),n<t?console.log("Android 键盘收起啦！"):console.log("Android 键盘弹起啦！"),n=t}),!1)}}function r(){for(var t=document.querySelectorAll(".input"),n=0;n<t.length;n++)l(t[n])}var s={name:"slide1",data:function(){return{show:!0,domHeight:document.documentElement.clientHeight,arr:[1,2,3,4,5,6]}},methods:{handleClick:function(t){console.log(t.target.dataset.index)},bugText:function(){}},mounted:function(){r()},directives:{myclick:{bind:function(t,n,e,o){t.addEventListener("click",(function(){console.log(t,n.value,e,o)}))}}}},d=s,u=(e("df35"),e("2877")),a=Object(u["a"])(d,o,i,!1,null,"89b56180",null);n["default"]=a.exports},df35:function(t,n,e){"use strict";var o=e("048a"),i=e.n(o);i.a}}]);
//# sourceMappingURL=chunk-1749e2e2.5183b892.js.map