(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a49ab1c"],{2943:function(t,e,a){},"41b1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("b-row",[a("div",{staticClass:"submenuimage "},[a("p",{staticClass:"subtitle"},[t._v("Q & A")])])]),a("div",{staticClass:"container"},[a("b-col",[a("b-card",{staticClass:"viewcontainers"},[a("b-form",[a("b-row",[a("b-col",{staticClass:"qnawriter"},[t._v(t._s(t.qnaboard2.qnaWriter)),a("br"),a("p",{staticClass:"qnadate"},[t._v(t._s(t.formatDate(t.qnaboard2.qnaDate))+" 작성")]),a("p",{staticClass:"qnareadcount"},[t._v("조회수 ("+t._s(t.qnaboard2.boardCount)+")")]),a("hr")])],1),a("h6",{staticClass:"qnatitleno"},[t._v("NO. "+t._s(t.qnaboard2.qboardNo))]),a("b-row",[a("b-col",{staticClass:"qnatitle"},[a("br"),a("b",[t._v(t._s(t.qnaboard2.qnaTitle)+" ")]),t.qnaboard2.commentCount>0?a("v-icon",{staticClass:"icon"},[t._v("mdi-message-text")]):t._e(),t.qnaboard2.commentCount>0?a("small",[t._v(" ("+t._s(t.qnaboard2.commentCount)+")")]):t._e()],1)],1),a("hr"),a("v-img",{staticClass:"white--text align-end siteimg",attrs:{"max-height":"700px","max-width":"700px",src:"http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/qna/selectImg"+t.qnaboard2.qboardNo}},[a("v-card-title")],1),a("b-row",[a("b-col",{staticClass:"qnacontent"},[t._v(t._s(t.qnaboard2.qnaContent))])],1),a("br"),a("hr"),t.attachment?a("b-row",[a("b-col",{staticClass:"qnaphoto"},[t._v("첨부파일")]),a("b-col",[a("b-button",{staticClass:"qnaphotofile",on:{click:function(e){return t.qbattachmentdown(t.attachment)}}},[t._v(t._s(t.attachment.originalfilename))])],1)],1):t._e()],1)],1)],1),a("b-row",[a("b-col",{staticClass:"btndivv"},[a("b-button",{attrs:{to:"/qnaBoard"}},[t._v("목록으로 ")])],1)],1),a("b-row",{staticClass:"btndiv22"},[t.userData.memberSq===t.qnaboard2.memberNum||"admin@kh.com"===t.userData.memberEmail?a("b-button",{staticClass:"btn_center btn-danger",on:{click:t.deleteqna}},[t._v("삭제")]):t._e(),t.userData.memberSq===t.qnaboard2.memberNum?a("b-button",{staticClass:"btn_center",on:{click:t.updateqna}},[t._v("수정")]):t._e()],1)],1),a("b-container",[t._l(t.commentlist,(function(e){return a("b-row",{key:e.id},[a("b-col",[a("b-card",{staticClass:"textcenter"},[a("b-row",["관리자"===e.memberName?a("b-col",{staticClass:"memberNameAdmin",attrs:{cols:"2"}},[t._v(" "+t._s(e.memberName)+" "),a("br"),a("small",[t._v(t._s(t._f("moment")(e.qbcommentDate,"YYYY.MM.DD HH:mm:ss")))])]):a("b-col",{staticClass:"memberNa",attrs:{cols:"2"}},[t._v(t._s(e.memberName)+" "),a("br"),a("small",[t._v(t._s(t._f("moment")(e.qbcommentDate,"YYYY.MM.DD HH:mm:ss")))])]),a("b-row",[999===e.memberSq?a("b-col",{staticClass:"contentcmAdmin"},[t._v(" "+t._s(e.qbCommentContent)+" ")]):e.memberSq!=t.userData.memberSq?a("b-col",{staticClass:"contentccm"},[t._v(t._s(e.qbCommentContent))]):t._e()],1),null!=t.userData.memberSq&&e.memberSq==t.userData.memberSq?a("b-form",[a("b-col",[a("b-row",[a("b-col",[t.userData.memberSq===e.memberSq||"admin@kh.com"===t.userData.memberEmail?a("b-form-textarea",{attrs:{disabled:t.commentcheck,value:e.qbCommentContent,id:"commentUpt"},on:{input:t.updateInput}}):t._e()],1),e.memberSq==t.userData.memberSq?[a("b-col",{staticClass:"btndivcomment"},[t.userData.memberSq===e.memberSq?a("b-button",{attrs:{id:"updateb"},on:{click:function(e){return t.upclick(e)}}},[t._v("수정")]):t._e(),t.userData.memberSq===e.memberSq||"admin@kh.com"===t.userData.memberEmail?a("b-button",{attrs:{id:"deltetb"},on:{click:function(a){return t.declick(e.qboardCommentNo)}}},[t._v("삭제")]):t._e(),t.userData.memberSq===e.memberSq||"admin@kh.com"===t.userData.memberEmail?a("b-button",{attrs:{id:"updateEndb"},on:{click:function(a){return t.upendclick(e.qboardCommentNo,a)}}},[t._v("확인")]):t._e()],1)]:t._e()],2)],1)],1):t._e()],1)],1)],1)],1)})),null!=t.userData.memberSq?a("b-form",[a("b-row",[a("b-col",[a("b-card",{staticClass:"textcenter"},[a("b-row",[a("b-col",[a("b-form-textarea",{ref:"comment",attrs:{rows:"8",placeholder:"댓글을 남겨보세요"},model:{value:t.qbcomment,callback:function(e){t.qbcomment=e},expression:"qbcomment"}})],1),a("b-col",{attrs:{cols:"1"}},[a("b-button",{attrs:{id:"comment_insertbtn"},on:{click:t.comment}},[t._v("등록")])],1)],1)],1)],1)],1)],1):t._e()],2),t.showModal?a("ModalView",{on:{close:function(e){t.showModal=!1}}},[[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 정말 삭제하시겠습니까? ")]),a("div",{staticClass:"modalf",attrs:{slot:"body"},slot:"body"},[a("b-button",{on:{click:t.yesDeleteqna}},[t._v(" 삭제하기 ")]),a("b-button",{on:{click:t.noDeleteqna}},[t._v(" 취소하기 ")])],1),a("div",{attrs:{slot:"footer"},slot:"footer"})]],2):t._e()],1)},o=[],r=(a("ac1f"),a("5319"),a("5530")),m=a("0d6e"),s=a("2f62"),c=a("bc3a"),i=a.n(c),l=a("2b0e"),b=a("2ead"),d=a.n(b),u=Object(s["a"])("memberStore"),h=u.mapState;l["default"].use(d.a);var q=a("c1df");a("7f45"),q.tz.setDefault("Asia/Seoul");var _={data:function(){return{showModal:!1,qnaBoardNo:0,qbcomment:"",commentModal:!1,commentcheck:!0,changeval:"",boolcheck:!1,updatetext:""}},watch:{commentlist:{handler:function(t){this.changeval=t[0].qbCommentContent},deep:!0}},components:{ModalView:m["a"]},methods:{formatDate:function(t){return this.$moment(t).format("YYYY년 MM월 DD일")},updateqna:function(){var t=this.$route.params.id;console.log("수정버튼(params) :"+t),this.$router.replace({name:"qnaModify",params:{id:t}})},deleteqna:function(){this.showModal=!this.showModal},yesDeleteqna:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_QNABOARD_DELETE",t),this.$router.replace({name:"qnaBoard"})},noDeleteqna:function(){this.showModal=!this.showModal},comment:function(){var t=this;setTimeout((function(){var e=new FormData;e.append("qboardNo",t.qnaboard2.qboardNo),e.append("qbCommentContent",t.qbcomment),e.append("memberSq",t.userData.memberSq),e.append("memberName",t.userData.memberName),i.a.post("http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/qna/qnacomment",e).then((function(e){console.log(e),t.qbcomment="",t.$store.dispatch("FETCH_QNABOARD_COMMENT",t.$route.params.id)}),1e3)})).catch((function(t){return console.log(t)}))},cancleModal:function(){this.commentModal=!this.commentModal},qbattachmentdown:function(t){location.href="http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/qna/qnafiledownload?oriName="+t.originalfilename+"&reName="+t.renamedfilename},declick:function(t){var e=this;setTimeout((function(){var a=confirm("댓글을 삭제 하시겠습니까?");if(a){var n=t;e.$store.dispatch("FETCH_QNABOARD_COMMENTDEL",n).then((function(){return e.$store.dispatch("FETCH_QNABOARD_COMMENT",e.$route.params.id)}))}}),1e3)},handleInput:function(t){this.comment.ntCommentContent=t.target.value,this.updateComment=this.comment.ntCommentContent},updateInput:function(t){this.updatetext=t},upclick:function(t){console.log(t),1==t.target.parentElement.parentElement.children[0].children[0].disabled?t.target.parentElement.parentElement.children[0].children[0].disabled=!1:t.target.parentElement.parentElement.children[0].children[0].disabled=!0},upendclick:function(t,e){var a=this,n=t;e.target.parentElement.parentElement.children[0].children[0].disabled=!0,""==this.updatetext&&(this.updatetext=e.target.parentElement.parentElement.children[0].children[0].value),i.a.post("http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/qna/updateComment",{qbCommentContent:this.updatetext,qboardCommentNo:n}).then((function(t){console.log(t),a.$store.dispatch("FETCH_QNABOARD_COMMENT",a.$route.params.id),a.updatetext=""}))}},created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_QNABOARD_VIEW",t),this.$store.dispatch("FETCH_QNABOARD_ATTACHMENT",t),this.$store.dispatch("FETCH_QNABOARD_COMMENT",this.$route.params.id)},mounted:function(){},computed:Object(r["a"])(Object(r["a"])({},Object(s["c"])({qnaboard2:function(t){return t.qnaboard2},attachment:function(t){return t.qbAttachment2},commentlist:function(t){return t.qnacomment}})),h(["userData"]))},p=_,f=(a("57c7"),a("2877")),C=a("6544"),v=a.n(C),D=a("99d9"),w=a("132d"),N=a("adda"),E=Object(f["a"])(p,n,o,!1,null,null,null);e["default"]=E.exports;v()(E,{VCardTitle:D["d"],VIcon:w["a"],VImg:N["a"]})},"57c7":function(t,e,a){"use strict";var n=a("2943"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-9a49ab1c.e5fd968e.js.map