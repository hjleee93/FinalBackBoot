(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-718c4774"],{"02b0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("div",{staticClass:"submenuimage "},[e("p",{staticClass:"subtitle"},[t._v("Q & A")])])]),e("div",{staticClass:"container"},[e("v-tabs",{attrs:{centered:"",color:"grey darken-3"}},[e("v-tab",{attrs:{to:"/qnaBoard"}},[e("b",[t._v("ALL")])]),e("v-tab",{attrs:{to:"/qnaBoardfront"}},[e("b",[t._v("FrontEnd")])]),e("v-tab",{attrs:{to:"/qnaBoardback"}},[e("b",[t._v("BackEnd")])]),e("v-tabs-slider",{attrs:{color:"deep-purple lighten-5"}})],1),e("h4",{staticClass:"sub-header"},[t._v("질문/답변 게시판")]),e("div",{staticClass:"overflow"},[e("v-card",[e("v-card-title",{staticClass:"search-bar"},[e("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),e("v-data-table",{staticClass:"qnahover",attrs:{headers:t.headers,items:t.qnaboard1,search:t.search,"item-key":"qboardNo","single-line":"","hide-details":""},scopedSlots:t._u([{key:"item",fn:function(a){return[e("tr",{on:{click:function(e){return t.handleClick(a.item.qboardNo)}}},[e("td",{staticClass:"text-xs-right"},[t._v(t._s(a.item.qboardNo))]),e("td",{staticClass:"text-xs-right"},[t._v(t._s(a.item.qnaWriter))]),e("td",{staticClass:"text-xs-right"},[t._v(t._s(a.item.qnaTitle)+" "),a.item.commentCount>0?e("v-icon",[t._v("mdi-message-text")]):t._e()],1),"N"===a.item.qnaAnswerYn?e("td",{staticClass:"text-xs-right"},[e("v-btn",{staticClass:"mx-2 answerbtn1",attrs:{dark:"",small:""}},[t._v("답변대기")])],1):e("td",{staticClass:"text-xs-right"},[e("v-btn",{staticClass:"mx-2 answerbtn2",attrs:{dark:"",small:""}},[t._v("답변 ["+t._s(a.item.commentCount)+"]")])],1),e("td",{staticClass:"text-xs-right"},[t._v(t._s(t.formatDate(a.item.qnaDate)))]),e("td",{staticClass:"text-xs-right"},[t._v(t._s(a.item.boardCount))])])]}}])})],1),e("b-row",{attrs:{"align-h":"end",id:"stwriterow"}},[null!=t.userData.memberSq?e("b-button",{attrs:{to:"/qnaWrite",id:"stwrite"}},[t._v("글쓰기")]):t._e()],1)],1)],1)],1)},r=[],n=e("5530"),i=e("2f62"),d=e("2b0e"),l=e("2ead"),o=e.n(l);d["default"].use(o.a);var c=Object(i["a"])("memberStore"),b=c.mapState,u={created:function(){this.$store.dispatch("FETCH_QNABOARD")},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])({qnaboard1:function(t){return t.qnaboard1}})),b(["userData"])),methods:{handleClick:function(t){this.$router.push({name:"qnaView",params:{id:t}})},formatDate:function(t){return this.$moment(t).format("YYYY-MM-DD")}},data:function(){return{search:"",headers:[{text:"NO",align:"start",filterable:!1,value:"qboardNo"},{text:"작성자",value:"qnaWriter"},{text:"제목",value:"qnaTitle"},{text:"진행상태",value:"qnaAnswerYn"},{text:"작성일",value:"qnaDate"},{text:"조회수",value:"boardCount"}]}}},m=u,v=(e("fe3d"),e("2877")),h=e("6544"),f=e.n(h),x=e("8336"),_=e("b0af"),C=e("99d9"),q=e("8fea"),p=e("132d"),w=e("71a3"),g=e("fe57"),k=e("9a96"),D=e("8654"),V=Object(v["a"])(m,s,r,!1,null,"786f36b6",null);a["default"]=V.exports;f()(V,{VBtn:x["a"],VCard:_["a"],VCardTitle:C["d"],VDataTable:q["a"],VIcon:p["a"],VTab:w["a"],VTabs:g["a"],VTabsSlider:k["a"],VTextField:D["a"]})},ddfd:function(t,a,e){},fe3d:function(t,a,e){"use strict";var s=e("ddfd"),r=e.n(s);r.a}}]);
//# sourceMappingURL=chunk-718c4774.ec79b7c9.js.map