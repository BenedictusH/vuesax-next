(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{332:function(n,t,e){var i=e(1),o=e(4),a=e(89),s=[].slice,c=function(n){return function(t,e){var i=arguments.length>2,o=i?s.call(arguments,2):void 0;return n(i?function(){("function"==typeof t?t:Function(t)).apply(this,o)}:t,e)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(a)},{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},455:function(n,t,e){},667:function(n,t,e){"use strict";var i=e(455);e.n(i).a},836:function(n,t,e){"use strict";e.r(t);e(90),e(91),e(332);var i={data:function(){return{hasOpenLoading:!1,types:["default","waves","corners","border","points","square","gradient","rectangle","circles","square-rotate","scale"]}},methods:{handleClickLoading:function(n){var t=this,e=this.$vs.loading({type:n});this.hasOpenLoading=!0,setTimeout((function(){e.close(),t.hasOpenLoading=!1}),3e3)},openLoading:function(n,t){this.$vs.loading({target:this.$refs[t][0],text:n,type:n})}},mounted:function(){var n=this;this.types.forEach((function(t,e){n.openLoading(t,"box".concat(e))}))}},o=(e(667),e(41)),a=Object(o.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"center",class:{hasOpenLoading:n.hasOpenLoading}},n._l(n.types,(function(t,i){return e("div",{ref:"box"+i,refInFor:!0,staticClass:"box-loading",on:{click:function(e){return n.handleClickLoading(t)}}})})),0)}),[],!1,null,"5d39de14",null);t.default=a.exports}}]);