(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32c2fd4f"],{"197b":function(t,e,n){},"26d0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("div",{staticClass:"submenuimage "},[n("p",{staticClass:"subtitle"},[t._v("Q & A")])])]),n("div",{staticClass:"container"},[n("div",[n("h2",{staticClass:"st_title"},[t._v("QnA 게시글 수정")])]),n("hr"),n("br"),n("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateqna(e)}}},[n("b-input-group",{staticClass:"mb-2",attrs:{prepend:"제목"}},[n("b-form-input",{attrs:{id:"input-1",name:"qnaTitle",type:"text",required:"",placeholder:"제목을 입력해주세요"},model:{value:t.qnaboard2.qnaTitle,callback:function(e){t.$set(t.qnaboard2,"qnaTitle",e)},expression:"qnaboard2.qnaTitle"}})],1),n("b-input-group",{staticClass:"mb-2",attrs:{prepend:"카테고리"}},[n("b-form-select",{attrs:{id:"input-2",options:t.qnaCategory,required:""},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1),n("b-form-group",{attrs:{id:"input-group-3","label-for":"input-3"}},[n("b-form-textarea",{attrs:{id:"textarea-content",name:"qnaContent",required:"",placeholder:"내용을 입력해주세요",rows:"10"},model:{value:t.qnaboard2.qnaContent,callback:function(e){t.$set(t.qnaboard2,"qnaContent",e)},expression:"qnaboard2.qnaContent"}})],1),n("b-form-group",[n("b-form-file",{ref:"upfiles",attrs:{id:"files",placeholder:t.qbAttachment.originalfilename},on:{change:t.handleFile}})],1),n("div",{attrs:{id:"btn_bottom"}},[n("b-button",{staticClass:"btn-space",attrs:{type:"submit",id:"btn_write"}},[t._v("수정완료")]),n("b-button",{attrs:{type:"button",id:"btn_write",to:"/qnaBoard",exact:""}},[t._v("목록으로")])],1)],1)])],1)},r=[],o=(n("d3b7"),n("ac1f"),n("5319"),n("ddb0"),n("b85c")),i=n("5530"),s=n("2f62"),l=n("bc3a"),c=n.n(l),u={data:function(){return{qnaTitle:"",qnaWriter:"",qnaAnswerYn:"N",category:null,qnaCategory:[{value:null,text:"분류를 선택해주세요"},{value:"백엔드",text:"백엔드"},{value:"프론트엔드",text:"프론트엔드"}],qnaContent:"",files:""}},created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_QNABOARD_UPDATE",t),console.log("지금하고있는 로그 "+t)},computed:Object(i["a"])({},Object(s["c"])({qnaboard2:function(t){return t.qnaboard2},qbAttachment:function(t){return t.qbAttachment}})),methods:{updateqna:function(){var t=this;setTimeout((function(){t.qnaTitle||(t.qnaTitle=t.qnaboard2.qnaTitle),t.qnaContent||(t.qnaContent=t.qnaboard2.qnaContent),t.qnaCategory||(t.qnaCategory=t.qnaboard2.qnaCategory),t.files||(t.files=t.qbAttachment.renamedfilename);var e=new FormData;e.append("qnaTitle",t.qnaTitle),e.append("qnaCategory",t.category),e.append("qnaWriter",t.qnaWriter),e.append("qnaAnswerYn",t.qnaAnswerYn),e.append("qnaContent",t.qnaContent.replace(/(<([^>]+)>)/gi,"")),e.append("file",t.files),e.append("qboardNo",t.$route.params.id);var n,a=Object(o["a"])(e.entries());try{for(a.s();!(n=a.n()).done;){var r=n.value;console.log("".concat(r))}}catch(i){a.e(i)}finally{a.f()}c.a.post("http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/qna/qnaBoardUpdateEnd",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)})),console.log(e),t.$router.replace({name:"qnaBoard"})}),1e3)},handleFile:function(){console.log(this.$refs.upfiles.$refs.input.files[0]),this.files=this.$refs.upfiles.$refs.input.files[0],console.log(this.files)}}},d=u,p=(n("9e53"),n("2877")),b=Object(p["a"])(d,a,r,!1,null,null,null);e["default"]=b.exports},"9e53":function(t,e,n){"use strict";var a=n("197b"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-32c2fd4f.3aad9b7d.js.map