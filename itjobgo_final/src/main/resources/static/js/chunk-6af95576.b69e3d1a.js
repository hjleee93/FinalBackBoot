(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6af95576"],{1094:function(t,a,e){"use strict";var s=e("b4cd"),n=e.n(s);n.a},"194b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("div",{staticClass:"submenuimage "},[e("p",{staticClass:"subtitle"},[t._v("Q & A")])])]),e("div",{staticClass:"container"},[e("v-tabs",{attrs:{centered:"",color:"grey darken-3"}},[e("v-tab",{attrs:{to:"/qnaBoard"}},[e("b",[t._v("ALL")])]),e("v-tab",{attrs:{to:"/qnaBoardfront"}},[e("b",[t._v("FrontEnd")])]),e("v-tab",{attrs:{to:"/qnaBoardback"}},[e("b",[t._v("BackEnd")])]),e("v-tabs-slider",{attrs:{color:"deep-purple lighten-5"}})],1),e("h4",{staticClass:"sub-header"},[t._v("질문/답변 게시판")]),e("div",{staticClass:"overflow"},[e("v-card",[e("v-card-title",{staticClass:"search-bar"},[e("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),e("v-data-table",{staticClass:"qnahover",attrs:{headers:t.headers,items:t.qnaboard1,search:t.search,"item-key":"qboardNo","single-line":"","hide-details":""},scopedSlots:t._u([{key:"item",fn:function(a){return[e("tr",{on:{click:function(e){return t.handleClick(a.item.qboardNo)}}},[a.item.qnaCategory.includes("프론트엔드")?e("td",{staticClass:"text-xs-right"},[t._v(t._s(a.item.qboardNo))]):t._e(),a.item.qnaCategory.includes("프론트엔드")?e("td",{staticClass:"text-xs-right"},[t._v(t._s(a.item.qnaWriter))]):t._e(),a.item.qnaCategory.includes("프론트엔드")?e("td",{staticClass:"text-xs-right"},[t._v(t._s(a.item.qnaTitle)+" "),a.item.commentCount>0?e("v-icon",[t._v("mdi-message-text")]):t._e()],1):t._e(),"N"===a.item.qnaAnswerYn&&a.item.qnaCategory.includes("프론트엔드")?e("td",{staticClass:"text-xs-right"},[e("v-btn",{staticClass:"mx-2 answerbtn1",attrs:{dark:"",small:""}},[t._v("답변대기")])],1):"Y"===a.item.qnaAnswerYn&&a.item.qnaCategory.includes("프론트엔드")?e("td",{staticClass:"text-xs-right"},[e("v-btn",{staticClass:"mx-2 answerbtn2",attrs:{dark:"",small:""}},[t._v("답변 ["+t._s(a.item.commentCount)+"]")])],1):t._e(),a.item.qnaCategory.includes("프론트엔드")?e("td",{staticClass:"text-xs-right"},[t._v(t._s(t.formatDate(a.item.qnaDate)))]):t._e(),a.item.qnaCategory.includes("프론트엔드")?e("td",{staticClass:"text-xs-right"},[t._v(t._s(a.item.boardCount))]):t._e()])]}}])})],1),e("b-row",{attrs:{"align-h":"end",id:"stwriterow"}},[null!=t.userData.memberSq?e("b-button",{attrs:{to:"/qnaWrite",id:"stwrite"}},[t._v("글쓰기")]):t._e()],1)],1)],1)],1)},n=[],r=e("5530"),i=e("2f62"),c=e("2b0e"),l=e("2ead"),o=e.n(l);c["default"].use(o.a);var d=Object(i["a"])("memberStore"),u=d.mapState,b={created:function(){this.$store.dispatch("FETCH_QNABOARD")},computed:Object(r["a"])(Object(r["a"])({},Object(i["c"])({qnaboard1:function(t){return t.qnaboard1}})),u(["userData"])),methods:{handleClick:function(t){this.$router.push({name:"qnaView",params:{id:t}})},formatDate:function(t){return this.$moment(t).format("YYYY-MM-DD")}},data:function(){return{search:"",headers:[{text:"NO",align:"start",filterable:!1,value:"qboardNo"},{text:"작성자",value:"qnaWriter"},{text:"제목",value:"qnaTitle"},{text:"진행상태",value:"qnaAnswerYn"},{text:"작성일",value:"qnaDate"},{text:"조회수",value:"boardCount"}]}}},m=b,v=(e("1094"),e("2877")),h=e("6544"),C=e.n(h),_=e("8336"),f=e("b0af"),q=e("99d9"),x=e("8fea"),g=e("132d"),p=e("71a3"),w=e("fe57"),k=e("9a96"),y=e("8654"),D=Object(v["a"])(m,s,n,!1,null,"3912c6ec",null);a["default"]=D.exports;C()(D,{VBtn:_["a"],VCard:f["a"],VCardTitle:q["d"],VDataTable:x["a"],VIcon:g["a"],VTab:p["a"],VTabs:w["a"],VTabsSlider:k["a"],VTextField:y["a"]})},b4cd:function(t,a,e){}}]);
//# sourceMappingURL=chunk-6af95576.b69e3d1a.js.map