(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c037528"],{"2d2e":function(t,e,n){},"37d2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("div",{staticClass:"submenuimage1 "},[n("p",{staticClass:"subtitle",attrs:{id:"subtitle2"}},[t._v("공지사항")])]),n("div",{staticClass:"container"})]),n("b-row",[n("b-col",[n("b-card",{staticClass:"text-center",attrs:{id:"text-card"}},[n("b-container",[n("b-form",[n("b-row",[n("b-col",{attrs:{id:"title"}},[t._v(" "+t._s(t.noticeView.noticeTitle))])],1),n("b-row",[n("b-col",{attrs:{id:"date"}},[t._v(" "+t._s(t.formatDate(t.noticeView.noticeDate)))])],1),n("b-row"),n("b-row",[n("b-col",[n("pre",{attrs:{id:"content"}},[t._v(t._s(t.noticeView.noticeContent))])])],1),t.attachment?n("b-row",[n("b-col",{attrs:{cols:"2",id:"attachment-title"}},[n("b-form-group",{attrs:{label:"첨부된 파일",readonly:""}})],1),n("b-col",{attrs:{cols:"2",id:"attachment"}},[n("b-button",{attrs:{id:"attachment-btn"},on:{click:function(e){return t.attachmentdown(t.attachment)}}},[t._v(t._s(t.attachment.originalfilename))])],1)],1):t._e()],1)],1),n("b-row",[n("b-col",[t.userData.memberSq===t.noticeView.memberNum?n("b-button",{attrs:{id:"update-btn2"},on:{click:t.update}},[t._v("수정")]):t._e(),t.userData.memberSq===t.noticeView.memberNum||"admin@kh.com"===t.userData.memberEmail?n("b-button",{attrs:{id:"delete-btn2"},on:{click:t.pdelete}},[t._v("삭제")]):t._e()],1)],1),n("b-row",{attrs:{id:" writecontain","align-h":"end"}},[n("b-col",[n("b-button",{attrs:{to:"/noticeList",id:"list"}},[t._v("목록 ")])],1)],1)],1)],1)],1),t.showModal?n("ModalView",{on:{close:function(e){t.showModal=!1}}},[[n("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 정말 게시판 글을 삭제하시겠습니까? ")]),n("div",{staticClass:"modalf",attrs:{slot:"body"},slot:"body"},[n("b-button",{attrs:{id:"modal-yes"},on:{click:t.ydele}},[t._v("네")]),n("b-button",{attrs:{id:"modal-no"},on:{click:t.ndele}},[t._v("아니오")])],1),n("div",{attrs:{slot:"footer"},slot:"footer"})]],2):t._e()],1)},o=[],i=n("5530"),c=n("0d6e"),r=n("2f62"),s=n("bc3a"),l=n.n(s),d=n("2b0e"),m=n("2ead"),u=n.n(m),h=Object(r["a"])("memberStore"),b=h.mapState;d["default"].use(u.a);var p=n("c1df");n("7f45"),p.tz.setDefault("Asia/Seoul");var f={data:function(){return{showModal:!1,pboardno:0,ntcomment:"",commentModal:!1,commentcheck:!0,boolcheck:!1,changeval:"",updatetext:""}},components:{ModalView:c["a"]},methods:{formatDate:function(t){return this.$moment(t).format("YYYY년 MM월 DD일")},update:function(){var t=this.$route.params.id;this.$router.push({name:"NoticeUpdate",params:{id:t}})},pdelete:function(){this.showModal=!this.showModal},ydele:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_NOTICE_DELETE",t),this.$router.push({name:"NoticeList"})},ndele:function(){this.showModal=!this.showModal},cancleModal:function(){this.commentModal=!this.commentModal},attachmentdown:function(t){location.href="http://localhost:8082/notice/filedownload?oriName="+t.originalfilename+"&reName="+t.renamedfilename},declick:function(t){var e=confirm("댓글을 삭제 하시겠습니까?");if(e){var n=t;return this.$store.dispatch("FETCH_NT_COMMENT_DELETE",n),this.$store.dispatch("FETCH_NT_COMMENT_LIST",this.$route.params.id)}},handleInput:function(t){this.comment.ntCommentContent=t.target.value,this.updateComment=this.comment.ntCommentContent},updateInput:function(t){this.updatetext=t},upclick:function(t){console.log(t),1==t.target.parentElement.parentElement.children[0].children[0].disabled?t.target.parentElement.parentElement.children[0].children[0].disabled=!1:t.target.parentElement.parentElement.children[0].children[0].disabled=!0},upendclick:function(t,e){var n=this,a=t;e.target.parentElement.parentElement.children[0].children[0].disabled=!0,""==this.updatetext&&(this.updatetext=e.target.parentElement.parentElement.children[0].children[0].value),l.a.post("http://localhost:8082/notice/updateComment",{ntCommentContent:this.updatetext,ntCommentNo:a}).then((function(t){console.log(t),n.$store.dispatch("FETCH_NT_COMMENT_LIST",n.$route.params.id),n.updatetext=""}))}},created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_NOTICE_VIEW",t),this.$store.dispatch("FETCH_NOTICE_ATTACHMENT",t),this.$store.dispatch("FETCH_NT_COMMENT_LIST",this.$route.params.id)},computed:Object(i["a"])(Object(i["a"])({},Object(r["c"])({noticeView:function(t){return t.noticeView},attachment:function(t){return t.noticeAttach},commentlist:function(t){return t.ntcomment}})),b(["userData"]))},_=f,w=(n("61f0"),n("2877")),E=Object(w["a"])(_,a,o,!1,null,"7529e854",null);e["default"]=E.exports},"61f0":function(t,e,n){"use strict";var a=n("2d2e"),o=n.n(a);o.a}}]);
//# sourceMappingURL=chunk-5c037528.85c985b3.js.map