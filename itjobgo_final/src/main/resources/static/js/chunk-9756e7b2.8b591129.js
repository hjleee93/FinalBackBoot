(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9756e7b2"],{"65b5":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("div",{staticClass:"submenuimage2 "},[n("p",{attrs:{id:"subtitle4"}},[t._v("IT소식")])]),n("div",{staticClass:"container"})]),n("b-row",[n("b-col",[n("b-card",{staticClass:"text-center",attrs:{id:"text-card"}},[n("b-container",[n("b-form",[n("b-row",[n("b-col",{attrs:{id:"title"}},[t._v(" 제목: "+t._s(t.itNewsView.newsTitle))])],1),n("b-row",[n("b-col",{attrs:{id:"boardDate"}},[t._v(" 작성일 : "+t._s(t.formatDate(t.itNewsView.newsDate)))]),n("br"),n("div",{staticClass:"container"},[n("v-img",{staticClass:"white--text align-end",attrs:{id:"images",src:"http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/itnews/imagesrequest"+t.itNewsView.newsSq}})],1)],1),n("b-row",[n("b-col",[n("pre",{attrs:{id:"content"}},[t._v(t._s(t.itNewsView.newsContent))])])],1)],1)],1),n("b-row",[n("b-col",[t.userData.memberSq===t.itNewsView.memberNum?n("b-button",{attrs:{id:"update-btn2"},on:{click:t.update}},[t._v("수정")]):t._e(),t.userData.memberSq===t.itNewsView.memberNum||"admin@kh.com"===t.userData.memberEmail?n("b-button",{attrs:{id:"delete-btn2"},on:{click:t.pdelete}},[t._v("삭제")]):t._e()],1)],1),n("b-row",{attrs:{id:" writecontain","align-h":"end"}},[n("b-col",[n("b-button",{attrs:{id:"link_a"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.openWindow(t.itNewsView.newsRefSite)}}},[t._v("기사 원문")]),n("b-button",{attrs:{to:"/itNewsList",id:"list"}},[t._v("목록 ")])],1)],1)],1)],1)],1),n("b-container",[t._l(t.commentlist,(function(e){return n("b-row",{key:e.id},[n("b-col",[n("b-card",{staticClass:"text-center"},[n("b-row",[n("b-col",{attrs:{cols:"2",id:"nameAndDate2"}},[t._v(t._s(e.memberName)+" "),n("br"),t._v(t._s(t._f("moment")(e.itCommentDate,"YYYY.MM.DD HH:mm:ss"))+" ")]),e.memberSq!=t.userData.memberSq?n("b-col",[t._v(t._s(e.itCommentContent))]):t._e(),null!=t.userData.memberSq?n("b-form",[n("b-col",[n("b-row",[n("b-col",[t.userData.memberSq===e.memberSq||"admin@kh.com"===t.userData.memberEmail?n("b-form-textarea",{attrs:{disabled:t.commentcheck,value:e.itCommentContent,id:"commentUptxt"},on:{input:t.updateInput}}):t._e()],1),[n("b-col",[t.userData.memberSq===e.memberSq?n("b-button",{attrs:{id:"update-btn"},on:{click:function(e){return t.upclick(e)}}},[t._v("수정")]):t._e(),t.userData.memberSq===e.memberSq||"admin@kh.com"===t.userData.memberEmail?n("b-button",{attrs:{id:"deltet-btn"},on:{click:function(n){return t.declick(e.itCommentNo)}}},[t._v("삭제")]):t._e(),t.userData.memberSq===e.memberSq||"admin@kh.com"===t.userData.memberEmail?n("b-button",{attrs:{id:"updateEnd-btn"},on:{click:function(n){return t.upendclick(e.itCommentNo,n)}}},[t._v("확인")]):t._e()],1)]],2)],1)],1):t._e()],1)],1)],1)],1)})),null!=t.userData.memberSq?n("b-form",[n("b-row",[n("b-col",[n("b-card",{staticClass:"text-center"},[n("b-row",[n("b-col",[n("b-form-textarea",{ref:"comment",attrs:{rows:"8",placeholder:"댓글을 남겨보세요"},model:{value:t.ITcomment,callback:function(e){t.ITcomment=e},expression:"ITcomment"}})],1),n("b-col",{attrs:{cols:"1"}},[n("b-button",{attrs:{id:"comment_insert_btn"},on:{click:t.comment}},[t._v("등록")])],1)],1)],1)],1)],1)],1):t._e()],2),t.showModal?n("ModalView",{on:{close:function(e){t.showModal=!1}}},[[n("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 정말 게시판 글을 삭제하시겠습니까? ")]),n("div",{staticClass:"modalf",attrs:{slot:"body"},slot:"body"},[n("b-button",{attrs:{id:"modal-yes"},on:{click:t.ydele}},[t._v("네")]),n("b-button",{attrs:{id:"modal-no"},on:{click:t.ndele}},[t._v("아니오")])],1),n("div",{attrs:{slot:"footer"},slot:"footer"})]],2):t._e()],1)},o=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("5530")),r=n("0d6e"),s=n("2f62"),m=n("bc3a"),c=n.n(m),d=n("2b0e"),l=n("2ead"),u=n.n(l),b=Object(s["a"])("memberStore"),p=b.mapState;d["default"].use(u.a);var h=n("c1df");n("7f45"),h.tz.setDefault("Asia/Seoul");var w={data:function(){return{showModal:!1,pboardno:0,ITcomment:"",commentModal:!1,commentcheck:!0,changeval:"",boolcheck:!1,updatetext:""}},components:{ModalView:r["a"]},methods:{formatDate:function(t){return this.$moment(t).format("YYYY년 MM월 DD일")},openWindow:function(t){window.open(t)},update:function(){var t=this.$route.params.id;this.$router.push({name:"ItNewsUpdate",params:{id:t}})},updateInput:function(t){this.updatetext=t},pdelete:function(){this.showModal=!this.showModal},ydele:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_ITNEWS_DELETE",t),this.$router.push({name:"ItNewsList"})},comment:function(){var t=this,e=new FormData;e.append("itnewsNo",this.itNewsView.newsSq),e.append("itCommentContent",this.ITcomment),e.append("memberSq",this.userData.memberSq),e.append("memberName",this.userData.memberName),c.a.post("http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/itnews/insertComment",e).then((function(e){console.log(e),t.ITcomment="",t.$store.dispatch("FETCH_ITNEWS_COMMENT_LIST",t.$route.params.id)})).catch((function(t){return console.log(t)}))},ndele:function(){this.showModal=!this.showModal},cancleModal:function(){this.commentModal=!this.commentModal},declick:function(t){var e=this,n=confirm("댓글을 삭제 하시겠습니까?");if(n){var a=t;this.$store.dispatch("FETCH_ITNEWS_COMMENT_DELETE",a).then((function(){e.$store.dispatch("FETCH_ITNEWS_COMMENT_LIST",e.$route.params.id)}))}},handleInput:function(t){this.comment.ntCommentContent=t.target.value,this.updateComment=this.comment.ntCommentContent},upclick:function(t){console.log(t),1==t.target.parentElement.parentElement.children[0].children[0].disabled?t.target.parentElement.parentElement.children[0].children[0].disabled=!1:t.target.parentElement.parentElement.children[0].children[0].disabled=!0,console.log(),this.commentcheck=!1},upendclick:function(t,e){var n=this,a=t;e.target.parentElement.parentElement.children[0].children[0].disabled=!0,""==this.updatetext&&(this.updatetext=e.target.parentElement.parentElement.children[0].children[0].value),c.a.post("http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/itnews/updateComment",{itCommentContent:this.updatetext,itCommentNo:a}).then((function(t){console.log(t),n.$store.dispatch("FETCH_ITNEWS_COMMENT_LIST",n.$route.params.id),n.updatetext=""}))}},created:function(){var t=this;void 0!=this.userData.memberSq&&c.a.get("http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/member/loadPhoto?memberSq="+this.userData.memberSq,{responseType:"arraybuffer"}).then((function(e){var n=window.URL.createObjectURL(new Blob([e.data]));t.previewImage=n}));var e=this.$route.params.id;this.$store.dispatch("FETCH_ITNEWS_VIEW",e),this.$store.dispatch("FETCH_ITNEWS_COMMENT_LIST",this.$route.params.id)},computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])({itNewsView:function(t){return t.itNewsView},commentlist:function(t){return t.ITcomment}})),p(["userData"]))},_=w,f=(n("667f"),n("2877")),v=n("6544"),T=n.n(v),E=n("adda"),C=Object(f["a"])(_,a,o,!1,null,"2263db92",null);e["default"]=C.exports;T()(C,{VImg:E["a"]})},"667f":function(t,e,n){"use strict";var a=n("d76b"),o=n.n(a);o.a},d76b:function(t,e,n){}}]);
//# sourceMappingURL=chunk-9756e7b2.8b591129.js.map