(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6253b458"],{"0006":function(t,e,r){},"306e":function(t,e,r){"use strict";var a=r("0006"),o=r.n(a);o.a},"3f1b":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("div",{staticClass:"container",attrs:{id:"header-container"}},[r("h4",{attrs:{id:"h4-title"}},[t._v("자유게시판 작성")]),r("b-button",{attrs:{type:"button",id:"list-btn2",to:"/communityBoardList",exact:""}},[t._v("목록")])],1),r("b-form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.enrollBoard(e)},reset:t.onReset}},[r("b-input-group",{staticClass:"mb-2",attrs:{prepend:"제목"}},[r("b-form-input",{attrs:{required:"",id:"input-1",type:"text",placeholder:"제목을 입력해주세요"},model:{value:t.boardTitle,callback:function(e){t.boardTitle=e},expression:"boardTitle"}})],1),r("b-input-group",{staticClass:"mb-2",attrs:{prepend:"작성자",hidden:""}},[r("b-form-input",{attrs:{id:"input-2",name:"boardWriter",required:"",placeholder:"작성자",readonly:""},model:{value:t.userData.memberName,callback:function(e){t.$set(t.userData,"memberName",e)},expression:"userData.memberName"}})],1),r("b-input-group",{staticClass:"mb-2",attrs:{prepend:"분류"}},[r("b-form-select",{attrs:{id:"input-3",options:t.boardDivision,required:""},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1),r("b-form-group",{attrs:{id:"input-group-3","label-for":"input-3"}},[r("b-form-textarea",{attrs:{id:"textarea-content",required:"",placeholder:"내용을 입력해주세요",rows:"10"},model:{value:t.boardContent,callback:function(e){t.boardContent=e},expression:"boardContent"}})],1),r("b-form-group",[r("b-form-file",{ref:"upfiles",attrs:{id:"files",placeholder:"첨부파일을 선택해주세요"},on:{change:t.handleFile}})],1),r("b-button",{attrs:{type:"submit",id:"submit-btn2"}},[t._v("확인")]),r("b-button",{attrs:{type:"reset",id:"reset-btn2"}},[t._v("취소")])],1)],1)},o=[],n=(r("b0c0"),r("d3b7"),r("ac1f"),r("5319"),r("ddb0"),r("b85c")),i=r("5530"),s=r("bc3a"),l=r.n(s),u=r("2f62"),c=Object(u["a"])("memberStore"),d=c.mapState,b={data:function(){return{boardTitle:"",category:null,boardDivision:[{value:null,text:"분류를 선택해주세요"},{value:"일반",text:"일반"},{value:"질문",text:"질문"},{value:"홍보",text:"홍보"}],boardContent:"",files:"",tt:!0}},components:{},computed:Object(i["a"])({},d(["userData"])),methods:{enrollBoard:function(){var t=this;setTimeout((function(){var e=new FormData;e.append("boardWriter",t.userData.memberName),e.append("memberSq",t.userData.memberSq),e.append("boardTitle",t.boardTitle),e.append("boardDivision",t.category),e.append("boardContent",t.boardContent.replace(/(<([^>]+)>)/gi,"")),e.append("file",t.files);var r,a=Object(n["a"])(e.entries());try{for(a.s();!(r=a.n()).done;){var o=r.value;console.log("".concat(o))}}catch(i){a.e(i)}finally{a.f()}console.log(t.category),l.a.post("http://localhost:8082/community/communityBoardForm",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)})),console.log(e),t.$router.push({name:"CommunityBoardList"})}),1e3)},handleFile:function(){console.log(this.$refs.upfiles.$refs.input.files[0]),this.files=this.$refs.upfiles.$refs.input.files[0],console.log(this.files)},onReset:function(t){t.preventDefault(),this.boardTitle="",this.category=null,this.boardContent="",this.files.name=""}}},p=b,m=(r("306e"),r("2877")),f=Object(m["a"])(p,a,o,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-6253b458.6f4cd6a3.js.map