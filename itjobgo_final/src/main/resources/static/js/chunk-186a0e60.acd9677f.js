(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-186a0e60"],{"4ef9":function(e,t,i){},"652d":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-container",[i("div",{staticClass:"container",attrs:{id:"header-container"}},[i("h4",{attrs:{id:"h4-title"}},[e._v("IT소식 수정")])]),i("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.updateForm(t)}}},[i("b-input-group",{staticClass:"mb-2",attrs:{prepend:"제목"}},[i("b-form-input",{attrs:{id:"input-1",name:"newsTitle",type:"text",required:"",placeholder:"제목"},model:{value:e.itNewsView.newsTitle,callback:function(t){e.$set(e.itNewsView,"newsTitle",t)},expression:"itNewsView.newsTitle"}})],1),i("b-input-group",{staticClass:"mb-2",attrs:{prepend:"분류"}},[i("b-form-select",{attrs:{id:"input-2",options:e.newsDivision,required:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}})],1),i("b-form-group",{attrs:{id:"input-group-3","label-for":"input-3"}},[i("b-form-textarea",{attrs:{id:"textarea-content",required:"",rows:"10"},model:{value:e.itNewsView.newsContent,callback:function(t){e.$set(e.itNewsView,"newsContent",t)},expression:"itNewsView.newsContent"}})],1),i("b-input-group",{staticClass:"mb-2",attrs:{prepend:"연결 사이트"}},[i("b-form-input",{attrs:{required:"",id:"input-1",type:"text",placeholder:"연결하실 사이트를 입력해주세요"},model:{value:e.itNewsView.newsRefSite,callback:function(t){e.$set(e.itNewsView,"newsRefSite",t)},expression:"itNewsView.newsRefSite"}})],1),i("b-form-group",[i("b-form-file",{ref:"upfiles",attrs:{id:"files",placeholder:e.ITAttachment.originalfilename},on:{change:e.handleFile}})],1),i("b-button",{attrs:{id:"submit-btn2",type:"submit"}},[e._v("완료")]),i("b-button",{attrs:{type:"button",id:"list-btn2",to:"/itNewsList",exact:""}},[e._v("목록")])],1)])},s=[],a=(i("d3b7"),i("ac1f"),i("5319"),i("ddb0"),i("b85c")),o=i("5530"),r=i("2f62"),l=i("bc3a"),c=i.n(l),u={data:function(){return{newsTitle:"",category:null,newsRefSite:"",newsDivision:[{value:null,text:"분류를 선택해주세요"},{value:"일반",text:"일반"},{value:"홍보",text:"홍보"}],newsContent:"",files:""}},created:function(){var e=this.$route.params.id;this.$store.dispatch("FETCH_ITNEWS_UPDATE",e)},computed:Object(o["a"])({},Object(r["c"])({itNewsView:function(e){return e.itNewsView},ITAttachment:function(e){return e.ITAttachment}})),components:{},methods:{updateForm:function(){this.newsTitle||(this.newsTitle=this.itNewsView.newsTitle),this.newsContent||(this.newsContent=this.itNewsView.newsContent),this.newsDivision||(this.newsDivision=this.itNewsView.newsDivision),this.newsRefSite||(this.newsRefSite=this.itNewsView.newsRefSite),this.files||(this.files=this.ITAttachment.renamedfilename);var e=new FormData;e.append("newsTitle",this.newsTitle),e.append("newsRefSite",this.newsRefSite),e.append("newsDivision",this.category),e.append("newsSq",this.$route.params.id),e.append("newsContent",this.newsContent.replace(/(<([^>]+)>)/gi,"")),e.append("file",this.files);var t,i=Object(a["a"])(e.entries());try{for(i.s();!(t=i.n()).done;){var n=t.value;console.log("".concat(n))}}catch(s){i.e(s)}finally{i.f()}c.a.post("http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/notice/updateEnd",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),console.log(e),this.$router.replace({name:"ItNewsList"})},handleFile:function(){console.log(this.$refs.upfiles.$refs.input.files[0]),this.files=this.$refs.upfiles.$refs.input.files[0],console.log(this.files)}}},p=u,w=(i("e27e"),i("2877")),f=Object(w["a"])(p,n,s,!1,null,null,null);t["default"]=f.exports},e27e:function(e,t,i){"use strict";var n=i("4ef9"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-186a0e60.acd9677f.js.map