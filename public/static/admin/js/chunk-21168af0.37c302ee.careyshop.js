(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21168af0"],{8697:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-main",{ref:"main",attrs:{loading:t.loading,"tree-data":t.tree},on:{refresh:t.handleRefresh}})],1)},a=[],r=(n("d3b7"),n("ca00")),d=n("c54e"),c={name:"goods-setting-category",components:{PageMain:function(){return n.e("chunk-59c1096a").then(n.bind(null,"6b59"))}},data:function(){return{tree:[],loading:!1}},mounted:function(){this.handleSubmit()},methods:{handleRefresh:function(){var t=this;this.$nextTick((function(){t.handleSubmit()}))},handleSubmit:function(){var t=this;this.loading=!0,Object(d["d"])(null).then((function(e){t.tree=r["a"].formatDataToTree(e.data,"goods_category_id"),t.$refs.main&&(t.$refs.main.filterText="",t.$refs.main.resetForm(),t.$refs.main.resetElements())})).finally((function(){t.loading=!1}))}}},i=c,u=n("2877"),s=Object(u["a"])(i,o,a,!1,null,null,null);e["default"]=s.exports},c54e:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"f",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return f})),n.d(e,"e",(function(){return g}));var o=n("5530"),a=n("bc07"),r="/v1/goods_category.html";function d(t){return Object(a["a"])({url:r,method:"post",data:Object(o["a"])({method:"add.goods.category.item"},t)})}function c(t){return Object(a["a"])({url:r,method:"post",data:Object(o["a"])({method:"set.goods.category.item"},t)})}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(a["a"])({url:r,method:"post",data:{method:"del.goods.category.list",goods_category_id:t,not_empty:e}})}function u(t){return Object(a["a"])({url:r,method:"post",data:{method:"get.goods.category.item",goods_category_id:t}})}function s(t){return Object(a["a"])({url:r,method:"post",data:Object(o["a"])({method:"get.goods.category.list"},t)})}function f(t,e){return Object(a["a"])({url:r,method:"post",data:{method:"set.goods.category.status",goods_category_id:t,status:e}})}function g(t){return Object(a["a"])({url:r,method:"post",data:{method:"set.goods.category.index",goods_category_id:t}})}}}]);