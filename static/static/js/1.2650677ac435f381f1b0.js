webpackJsonp([1,5,16],{AkUR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("RvH3"),a=n("NxI4"),l={name:"Layout",components:{CHeader:i.default,CAside:a.default}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",{staticStyle:{height:"100%"}},[t("el-header",{staticStyle:{padding:"0px",height:"63px"}},[t("c-header")],1),this._v(" "),t("el-main",{staticStyle:{padding:"10px"}},[t("router-view")],1)],1)},staticRenderFns:[]},s=n("VU/8")(l,o,!1,null,null,null);t.default=s.exports},FC9P:function(e,t){},NxI4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("gyMJ"),a={name:"Aside",components:{TableList:n("H8ly").default},data:function(){return{tables:[],selected:[]}},mounted:function(){var e=this;i.a.get("mgmt/table").then(function(t){e.tables=t.data,console.log(t)})},methods:{add_data:function(e){console.log("table:",e)}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{border:"2px solid #ebeef5",height:"100%"}},[n("el-card",[n("h1",{staticStyle:{"text-align":"center","font-size":"24px",margin:"0px 0px"}},[e._v("CMDB")])]),e._v(" "),n("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"",placeholder:"请选择"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.tables,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[n("el-button",{staticStyle:{padding:"2px",margin:"2px"},attrs:{size:"mini"}},[e._v("添加")]),e._v(" "),n("el-button",{staticStyle:{padding:"2px",margin:"2px"},attrs:{size:"mini"}},[e._v("详情")]),e._v(" "),n("span",[e._v(e._s(t.name))])],1)})),e._v(" "),n("table-list",{attrs:{tables:e.tables}})],1)},staticRenderFns:[]};var o=n("VU/8")(a,l,!1,function(e){n("ZIWf")},"data-v-066ae831",null);t.default=o.exports},RvH3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={name:"Header",data:function(){return{username:this.$store.state.username,api_url:window.location.protocol+"//"+window.location.host+"/api/v1/docs"}},computed:{},methods:{logout:function(){console.log("logout"),this.$store.commit("logout"),this.$router.push({name:"login"})},on_click_menu:function(e,t){0!=e.indexOf("http")?0!=e.indexOf("/")?this.$router.push({name:e}):this.$router.push(e):window.open(e)},on_change_pw:function(){var e=new(i.default.component("ChangePassword"));e.$mount(),this.$el.appendChild(e.$el)}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-demo",staticStyle:{padding:"0px"},attrs:{mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.on_click_menu}},[n("div",{staticStyle:{float:"left","border-right":"1px solid #FFF",width:"200px",height:"60px","line-height":"60px",color:"#FFF","text-align":"center","font-size":"30px"}},[e._v("CMDB")]),e._v(" "),n("el-menu-item",{attrs:{index:"main"}},[e._v("主页")]),e._v(" "),n("el-menu-item",{attrs:{index:"deleted"}},[e._v("已删除")]),e._v(" "),n("el-menu-item",{attrs:{index:"table"}},[e._v("表管理")]),e._v(" "),n("el-menu-item",{attrs:{index:"user"}},[e._v("用户管理")]),e._v(" "),n("el-menu-item",{attrs:{index:e.api_url}},[e._v("API接口")]),e._v(" "),n("el-menu-item",{attrs:{index:"https://zhuanlan.zhihu.com/p/34191320"}},[e._v("帮助")]),e._v(" "),n("el-menu-item",{attrs:{index:"https://github.com/open-cmdb/cmdb"}},[e._v("源代码")]),e._v(" "),n("el-menu-item",{attrs:{index:"https://github.com/open-cmdb/cmdb/issues"}},[e._v("我要吐槽")]),e._v(" "),n("el-dropdown",{staticStyle:{float:"right",margin:"18px"}},[n("span",{staticClass:"el-dropdown-link",staticStyle:{"font-size":"22px",color:"#FFF"}},[e._v(e._s(e.username)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("span",{staticStyle:{width:"100%"},on:{click:e.on_change_pw}},[e._v("修改密码")])]),e._v(" "),n("el-dropdown-item",[n("span",{staticStyle:{width:"100%"},on:{click:e.logout}},[e._v("退出")])])],1)],1)],1)},staticRenderFns:[]};var o=n("VU/8")(a,l,!1,function(e){n("FC9P")},"data-v-9320f80e",null);t.default=o.exports},ZIWf:function(e,t){}});
//# sourceMappingURL=1.2650677ac435f381f1b0.js.map