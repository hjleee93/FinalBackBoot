(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7cdc212"],{"49d7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"container"},[a("SearchBar"),a("div",{staticClass:"overflow"},[a("v-card",[a("v-data-table",{staticClass:"row-pointer mt-4",attrs:{headers:t.headers,items:t.tableList,search:t.search},scopedSlots:t._u([{key:"item",fn:function(e){return[void 0!=e?[a("tr",{staticClass:"job-info",on:{click:function(a){return t.moveDtlPage(e.item.jobNo)}}},[a("td",[t._v(t._s(e.item.company))]),a("td",[a("p",{attrs:{id:"job-title"}},[t._v(t._s(e.item.title))]),a("p",[a("table",[a("tr",[a("td",{staticClass:"title-dtl"},[a("span",[t._v(t._s(e.item.career))])]),a("td",{staticClass:"title-dtl"},[a("span",[t._v(t._s(e.item.holidayTpNm))])]),a("td",{staticClass:"title-dtl"},[a("span",[t._v(t._s(e.item.region))])])])])])]),a("td",[t._v(t._s(e.item.ability))]),a("td",[t._v(t._s(e.item.Condition))]),e.item.deadline.includes("채용시까지")?a("td",[t._v(" 채용시까지")]):a("td",[t.$moment(t.$moment(20+e.item.deadline).format("YYYY-MM-DD")).diff(t.$moment(new Date),"days")+1<=7?a("b-btn",{staticClass:"d-day-btn argent-btn mr-2"},[t._v("D- "+t._s(t.$moment(t.$moment(20+e.item.deadline).format("YYYY-MM-DD")).diff(t.$moment(new Date),"days")+1)+" ")]):t.$moment(t.$moment(20+e.item.deadline).format("YYYY-MM-DD")).diff(t.$moment(new Date),"days")+1>7&&t.$moment(t.$moment(20+e.item.deadline).format("YYYY-MM-DD")).diff(t.$moment(new Date),"days")+1<=20?a("b-btn",{staticClass:"d-day-btn warn-btn mr-2"},[t._v("D- "+t._s(t.$moment(t.$moment(20+e.item.deadline).format("YYYY-MM-DD")).diff(t.$moment(new Date),"days")+1)+" ")]):a("b-btn",{staticClass:"d-day-btn ok-btn mr-2"},[t._v("D- "+t._s(t.$moment(t.$moment(20+e.item.deadline).format("YYYY-MM-DD")).diff(t.$moment(new Date),"days")+1)+" ")]),t._v(" "+t._s(e.item.deadline)+" ")],1)])]:[a("tr",[a("td",[t._v("검색 결과가 존재하지 않습니다. ")])])]]}}])})],1)],1)],1)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"submenuimage "},[a("p",{staticClass:"subtitle"},[t._v("구인정보")])])}],s=(a("ac1f"),a("5319"),a("5530")),o=(a("96cf"),a("1da1")),r=a("14ac"),d=a("2f62"),m=Object(d["a"])("jobStore"),c=m.mapState,l={data:function(){return{search:"",headers:[{text:"기업명",value:"company"},{text:"제목",value:"title"},{text:"지원자격",value:"ability"},{text:"근무조건",value:"Condition"},{text:"마감일·등록일",value:"deadline"}]}},components:{SearchBar:r["a"]},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("jobStore/searchLoadTable",t.$route.query);case 2:case"end":return e.stop()}}),e)})))()},methods:{moveDtlPage:function(t){this.$router.replace({name:"jobInfoDtl",params:{wantedNo:t}})}},computed:Object(s["a"])({},c(["tableList","jobInfo"]))},u=l,f=(a("b32a"),a("2877")),b=a("6544"),v=a.n(b),_=a("b0af"),p=a("8fea"),D=Object(f["a"])(u,n,i,!1,null,"6ed755f2",null);e["default"]=D.exports;v()(D,{VCard:_["a"],VDataTable:p["a"]})},"85e75":function(t,e,a){},b32a:function(t,e,a){"use strict";var n=a("85e75"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-c7cdc212.9fbaaa8b.js.map