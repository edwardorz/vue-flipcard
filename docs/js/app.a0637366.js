(function(t){function e(e){for(var o,a,l=e[0],s=e[1],c=e[2],f=0,p=[];f<l.length;f++)a=l[f],i[a]&&p.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-flipcard/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;r.push(["a1ec","chunk-vendors"]),n()})({3771:function(t,e,n){"use strict";var o=n("e6b4"),i=n.n(o);i.a},"9f29":function(t,e,n){"use strict";var o=n("aeb7"),i=n.n(o);i.a},a1ec:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",attrs:{id:"app"}},[n("div",{staticClass:"title"},[t._v("vue-flipcard")]),n("div",{staticClass:"desc"},[t._v("Vue flip card component")]),n("div",{staticClass:"card-container"},[n("vue-flipcard",{attrs:{height:240},on:{flip:t.onFlip}},[n("div",{staticClass:"content front",attrs:{slot:"front"},slot:"front"},[n("h1",[t._v("正面 | Front")]),n("p",[t._v("这是一个水平的翻转卡片，鼠标进入时翻转")]),n("p",[t._v("I'm a horizontal filpcard, put your mouse over me to flip")])]),n("div",{staticClass:"content back",attrs:{slot:"back"},slot:"back"},[n("h1",[t._v("背面 | Back")]),n("p",[t._v("将鼠标移出恢复正面")]),n("p",[t._v("Move your mouse out of me to flip")])])]),n("vue-flipcard",{attrs:{height:240,direction:"vertical"}},[n("div",{staticClass:"content front",attrs:{slot:"front"},slot:"front"},[n("h1",[t._v("正面 | Front")]),n("p",[t._v("这是一个垂直的翻转卡片，鼠标进入时翻转")]),n("p",[t._v("I'm a horizontal filpcard, put your mouse over me to flip")])]),n("div",{staticClass:"content back",attrs:{slot:"back"},slot:"back"},[n("h1",[t._v("背面 | Back")]),n("p",[t._v("将鼠标移出恢复正面")]),n("p",[t._v("Move your mouse out of me to flip")])])]),n("vue-flipcard",{ref:"flipcard",attrs:{height:240,disable:""}},[n("div",{staticClass:"content front",attrs:{slot:"front"},slot:"front"},[n("h1",[t._v("正面 | Front")]),n("p",[t._v("这是一个自定义的翻转卡片，点击按钮以翻转")]),n("p",[t._v("Click the button to flip manually!")]),n("div",{staticClass:"btn",on:{click:t.onManualFlip}},[t._v("Click Me")])]),n("div",{staticClass:"content back",attrs:{slot:"back"},slot:"back"},[n("h1",[t._v("背面 | Back")]),n("p",[t._v("这是一个自定义的翻转卡片，点击按钮以翻转")]),n("p",[t._v("Click the button to flip manually!")]),n("div",{staticClass:"btn",on:{click:t.onManualFlip}},[t._v("Click Me")])])])],1)])},r=[],a={name:"App",methods:{onFlip:function(){console.log("flipped!")},onManualFlip:function(){this.$refs.flipcard.flip()}}},l=a,s=(n("9f29"),n("2877")),c=Object(s["a"])(l,i,r,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-flipcard",class:[t.direction,{back:t.back}],style:{width:t.width+"px",height:t.height+"px"},on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave}},[n("div",{staticClass:"vue-flipcard__front",style:{"transform-origin":"center center "+t.zoffset+"px"}},[t._t("front")],2),n("div",{staticClass:"vue-flipcard__back",style:{"transform-origin":"center center "+t.zoffset+"px"}},[t._t("back")],2)])},p=[],v={name:"VueFlipcard",data:function(){return{back:!1}},props:{width:{type:Number,default:300},height:{type:Number,default:300},direction:{type:String,default:"horizontal"},zoffset:{type:Number,default:20},disable:{type:Boolean,default:!1}},methods:{flip:function(){this.back=!this.back,this.$emit("flip")},onMouseEnter:function(){!this.disable&&this.flip()},onMouseLeave:function(){!this.disable&&this.flip()}}},d=v,h=(n("3771"),Object(s["a"])(d,f,p,!1,null,"4b0ff1de",null));h.options.__file="Plugin.vue";var b=h.exports,_=b;o["a"].component("vue-flipcard",_),o["a"].config.productionTip=!1,new o["a"]({el:"#app",render:function(t){return t(u)}})},aeb7:function(t,e,n){},e6b4:function(t,e,n){}});