(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d4773ae"],{"24a6":function(t,a,e){"use strict";var s=e("41e3"),r=e.n(s);r.a},"41e3":function(t,a,e){},"4d2a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"mb-5 my-page"},[e("div",{staticClass:"header-body text-center mb-7 my-4"},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{staticClass:"px-5",attrs:{xl:"5",lg:"6",md:"8"}},[e("h1",{staticClass:"text-black"},[t._v("MY PAGE")])])],1)],1),e("div",{attrs:{id:"PersonHead"}},[e("div",{staticClass:"photoArea"},[e("b-form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.uploadPhoto(a)}}},[null==t.userData.memberPic?e("div",[e("div",{staticClass:"imagePreviewWrapper",style:{"background-image":"url("+t.previewImage+")"}}),e("div",{staticClass:"filebox text-center"},[e("p",[e("b-btn",{staticClass:"upload-photo"},[e("label",{attrs:{for:"uploadPhoto"}},[t._v("사진선택")]),e("b-form-file",{ref:"fileInput",staticStyle:{display:"none"},attrs:{id:"uploadPhoto"},on:{input:t.pickFile},model:{value:t.resumePhoto,callback:function(a){t.resumePhoto=a},expression:"resumePhoto"}})],1)],1),e("b-button",{staticClass:"submit-photo",attrs:{id:"submitPhoto"},on:{click:t.uploadPhoto}},[t._v("사진업로드")])],1)]):t._e()]),e("p",{staticClass:"name font-weight-bold"},[t._v(t._s(t.userData.memberName)+"님")])],1),e("ul",{staticClass:"infoList"},[e("li",{staticClass:"topList first"},[e("p",{staticClass:"title"},[t._v("이력서 등록수")]),e("p",{staticClass:"count"},[e("a",{staticClass:"scroll",attrs:{href:"#resumeDive"}},[t._v(t._s(this.$store.state.resumeList.length))]),t._v("개 ")])]),e("li",{staticClass:"topList openState"},[e("p",{staticClass:"title"},[t._v("프로젝트 정보")]),e("p",{staticClass:"count"},[e("router-link",{attrs:{to:"/meetingapply"}},[t._v("바로가기")])],1)]),e("li",{staticClass:"topList last onlineCount"},[e("p",{staticClass:"title"},[t._v("내가 한 질문")]),e("p",{staticClass:"count"},[e("a",{staticClass:"scroll",attrs:{href:"#qnaDiv"}},[t._v(" "+t._s(t.qnaCount)+" ")]),t._v("건 ")])]),e("li",{staticClass:"first resumeCompany"},[e("p",{staticClass:"title"},[t._v("등록된 포트폴리오")]),e("p",{staticClass:"count"},[e("a",{staticClass:"scroll",attrs:{href:"#portfDiv"}},[t._v(t._s(t.portfCount))]),t._v("건 ")])]),e("li",{staticClass:"apply"},[e("p",{staticClass:"title"},[t._v("스크랩한 구인광고")]),void 0!=this.$store.scrap?e("p",{staticClass:"count"},[e("a",{staticClass:"scroll",attrs:{href:"#scrapDiv"}},[t._v(t._s(this.$store.scrap.length))]),t._v("건 ")]):t._e()]),e("li",{staticClass:"commu"},[e("p",{staticClass:"title"},[t._v("내가 쓴 글")]),e("p",{staticClass:"count"},[e("a",{staticClass:"scroll",attrs:{href:"#communityDiv"}},[t._v(t._s(t.commuCount))]),t._v("건 ")])]),e("li",{staticClass:"first bottomList userInfomation"},[e("div",{staticClass:"tel"},[e("span",{staticClass:"item"},[e("span",{staticClass:"bullet"}),t._v("연락처")]),e("span",{staticClass:"mobile"},[t._v(t._s(t.userData.memberPhone))]),e("span",{staticClass:"tel",staticStyle:{display:"none"}},[t._v("-")]),e("div",{staticClass:"mobileCert"})]),e("div",{staticClass:"mail"},[e("span",{staticClass:"item"},[e("span",{staticClass:"bullet"}),t._v("이메일")]),e("b",[t._v(t._s(t.userData.memberEmail))])]),e("div",{staticClass:"address"},[e("span",{staticClass:"item"},[e("span",{staticClass:"bullet"}),t._v("주소")]),e("b",[t._v(t._s(t.userData.memberAddr)+" "+t._s(t.userData.memberAddrDtl))])]),null!=t.userData.memberAddr?[e("b-btn",{staticClass:"chg-info",attrs:{to:"/chgMemberInfo"}},[t._v("개인정보수정")])]:[e("b-btn",{staticClass:"chg-info",attrs:{id:"profile",to:"/chgMemberInfo"}},[t._v("프로필 작성")])]],2)]),e("div")]),e("div",{attrs:{id:"resumeDive"}}),e("div",[e("p",{staticClass:"h3 mt-5 font-weight-bold text-center"},[t._v(" 이력서 ")]),e("p",{staticClass:"mb-2",attrs:{id:"resumeAll"}},[e("b-btn",{attrs:{to:"/resume/resumeList"}},[t._v("전체보기")])],1),e("v-simple-table",{staticClass:"resume"},[e("thead",{staticClass:"resume-table"},[e("tr",[e("th",{staticClass:"text-left"},[t._v(" 제목 ")]),e("th",{staticClass:"text-left"},[t._v(" 컨설팅신청여부 ")]),e("th",{staticClass:"text-left"},[t._v(" 작성일 ")])])]),void 0!=t.resumeList[0]?[e("tbody",t._l(t.resumeList,(function(a,s){return e("tr",{key:s,staticClass:"resume-table",attrs:{id:"resumeBody"},on:{click:function(a){return t.moveResume(t.resumeList[s].resumeNo)}}},[void 0!=t.resumeList[s]?[e("td",[t._v(t._s(t.resumeList[s].resumelistTitle))]),e("td",[t._v("등록된 답변이 없습니다.")]),e("td",[t._v(t._s(t.formatDate(t.resumeList[s].resumelistDate)))])]:t._e()],2)})),0)]:[e("tbody",[e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v(" 등록된 포트폴리오가 없습니다. ")])])])]],2)],1),e("div",{attrs:{id:"scrapDiv"}}),e("div",[e("p",{staticClass:"h3 my-5 font-weight-bold text-center"},[t._v(" 스크랩한 구인정보 ")]),e("v-simple-table",{staticClass:"scrap"},[e("thead",{staticClass:"scrap-table"},[e("tr",[e("th",{staticClass:"text-left"},[t._v(" 기업명 ")]),e("th",{staticClass:"text-left"},[t._v(" 제목 ")]),e("th",{staticClass:"text-left"},[t._v(" 지원방법 ")]),e("th",{staticClass:"text-left"},[t._v(" 마감일 ")])])]),void 0!=t.scrap[0]?[e("tbody",t._l(t.scrap,(function(a,s){return e("tr",{key:s,staticClass:"scrap-table",attrs:{id:"scrapBody"},on:{click:function(a){return t.moveJobDtl(t.scrap[s].jobNo)}}},[e("td",[t._v(" "+t._s(t.scrap[s].company)+" ")]),e("td",[t._v(t._s(t.scrap[s].jobTitle))]),e("td",[t._v(t._s(t.scrap[s].applyMethod))]),t.scrap[s].deadline.includes("채용시까지")?[e("td",[t._v("채용시까지")])]:[e("td",[t.$moment(t.formatDate(t.scrap[s].deadline)).diff(t.$moment(new Date),"days")+1<=7?e("b-btn",{staticClass:"d-day-btn argent-btn mr-2"},[t._v("D- "+t._s(t.$moment(t.formatDate(t.scrap[s].deadline)).diff(t.$moment(new Date),"days")+1)+" ")]):t.$moment(t.formatDate(t.scrap[s].deadline)).diff(t.$moment(new Date),"days")+1>7&&t.$moment(t.formatDate(t.scrap[s].deadline)).diff(t.$moment(new Date),"days")+1<=20?e("b-btn",{staticClass:"d-day-btn warn-btn mr-2"},[t._v("D- "+t._s(t.$moment(t.formatDate(t.scrap[s].deadline)).diff(t.$moment(new Date),"days")+1)+" ")]):e("b-btn",{staticClass:"d-day-btn ok-btn mr-2"},[t._v("D- "+t._s(t.$moment(t.formatDate(t.scrap[s].deadline)).diff(t.$moment(new Date),"days")+1)+" ")])],1)]],2)})),0)]:[e("tbody",[e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v(" 스크랩한 구직 정보가 없습니다. ")])])])]],2)],1),e("div",{attrs:{id:"qnaDiv"}}),e("div",[e("p",{staticClass:"h3 my-5 font-weight-bold text-center"},[t._v(" 등록한 질문 ")]),e("v-simple-table",{staticClass:"qna"},[e("thead",{staticClass:"qna-table"},[e("tr",[e("th",{staticClass:"text-left"},[t._v(" 분류 ")]),e("th",{staticClass:"text-left"},[t._v(" 제목 ")]),e("th",{staticClass:"text-left"},[t._v(" 답변여부 ")]),e("th",{staticClass:"text-left"},[t._v(" 작성일 ")])])]),void 0!=t.qnaboard1[0]?[e("tbody",t._l(t.qnaboard1,(function(a,s){return e("tr",{key:s,staticClass:"qna-table",attrs:{id:"qnaBody"},on:{click:function(a){return t.moveQna(t.qnaboard1[s].qboardNo)}}},[void 0!=t.qnaboard1[s]?[e("td",[t._v(" "+t._s(t.qnaboard1[s].qnaCategory)+" ")]),e("td",[t._v(" "+t._s(t.qnaboard1[s].qnaTitle)+" ")]),"N"==t.qnaboard1[s].qnaAnswerYn?[e("td",[t._v("등록된 답변이 없습니다.")])]:[e("td",[t._v("답변 완료")])],e("td",[t._v(t._s(t.formatDate(t.qnaboard1[s].qnaDate)))])]:t._e()],2)})),0)]:[e("tbody",[e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v(" 등록된 질문이 없습니다. ")])])])]],2)],1),e("div",{attrs:{id:"portfDiv"}}),e("div",[e("p",{staticClass:"h3 my-5 font-weight-bold text-center"},[t._v(" 포트폴리오 ")]),e("v-simple-table",{staticClass:"pf"},[e("thead",{staticClass:"pf-table"},[e("tr",[e("th",{staticClass:"text-left"},[t._v(" 분류 ")]),e("th",{staticClass:"text-left"},[t._v(" 제목 ")]),e("th",{staticClass:"text-left"},[t._v(" 답변여부 ")]),e("th",{staticClass:"text-left"},[t._v(" 작성일 ")])])]),void 0!=t.pboard[0]?[e("tbody",t._l(t.pboard,(function(a,s){return e("tr",{key:s,staticClass:"pf-table",attrs:{id:"pfBody"},on:{click:function(a){return t.movePortf(t.pboard[s].pboardNo)}}},[void 0!=t.pboard[s]?[e("td",[t._v(t._s(t.pboard[s].pboardDivision))]),e("td",[t._v(t._s(t.pboard[s].pboardTitle))]),"N"==t.pboard[s].pboardStatus?[e("td",[t._v("등록된 답변이 없습니다.")])]:[e("td",[t._v("답변 완료")])],e("td",[t._v(t._s(t.formatDate(t.pboard[s].pboardDate)))])]:t._e()],2)})),0)]:[e("tbody",[e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v(" 등록된 포트폴리오가 없습니다. ")])])])]],2)],1),e("div",{attrs:{id:"communityDiv"}}),e("div",[e("p",{staticClass:"h3 my-5 font-weight-bold text-center"},[t._v(" 내가 작성한 글 ")]),e("v-simple-table",{staticClass:"community"},[e("thead",{staticClass:"community-table"},[e("tr",[e("th",{staticClass:"text-left"},[t._v(" 분류 ")]),e("th",{staticClass:"text-left"},[t._v(" 제목 ")]),e("th",{staticClass:"text-left"},[t._v(" 작성일 ")])])]),void 0!=t.communityboard[0]?[e("tbody",t._l(t.communityboard,(function(a,s){return e("tr",{key:s,staticClass:"qna-table",attrs:{id:"communityBody"},on:{click:function(a){return t.moveCommu(t.communityboard[s].boardSq)}}},[void 0!=t.communityboard[s]?[e("td",[t._v(" "+t._s(t.communityboard[s].boardDivision)+" ")]),e("td",[t._v(" "+t._s(t.communityboard[s].boardTitle)+" ")]),e("td",[t._v(t._s(t.formatDate(t.communityboard[s].boardDate)))])]:t._e()],2)})),0)]:[e("tbody",[e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v(" 작성한 글이 없습니다. ")])])])]],2)],1)])},r=[],i=(e("b0c0"),e("d3b7"),e("07ac"),e("ac1f"),e("3ca3"),e("5319"),e("ddb0"),e("2b3d"),e("5530")),o=(e("96cf"),e("1da1")),n=e("bc3a"),l=e.n(n),c=e("2f62"),m=e("1157"),d=e.n(m),u=Object(c["a"])("memberStore"),b=u.mapState,p=Object(c["a"])("jobStore"),v=p.mapState;d()(document).ready((function(t){t(".scroll").click((function(a){a.preventDefault(),t("html,body").animate({scrollTop:t(this.hash).offset().top-200},600)}))}));var f={data:function(){return{previewImage:null,resumePhoto:null,files:"",scrapcount:"",scrapArr:[]}},created:function(){var t=this;void 0!=this.userData.memberSq&&l.a.get("http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/member/loadPhoto?memberSq="+this.userData.memberSq,{responseType:"arraybuffer"}).then((function(a){var e=window.URL.createObjectURL(new Blob([a.data]));t.previewImage=e}))},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("memberStore/getMemberInfo");case 2:return a.next=4,t.$store.dispatch("jobStore/loadScrap",{memberSq:t.userData.memberSq});case 4:t.$store.dispatch("FETCH_RESUMELIST",t.userData.memberSq),t.$store.dispatch("FETCH_PBOARD"),t.$store.dispatch("FETCH_QNABOARD"),t.$store.dispatch("FETCH_COMMUNITYBOARD"),t.$store.dispatch("jobStore/loadJobTable");case 9:case"end":return a.stop()}}),a)})))()},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},b(["loginStatus","userData"])),v(["tableList","jobInfo","scrap"])),{},{resumeList:function(){for(var t=new Object,a=0;a<this.$store.state.resumeList.length;a++)this.$store.state.resumeList[a].memberNo==this.userData.memberSq&&(t[a]=this.$store.state.resumeList[a]);for(var e=[],s=0;s<3;s++)e[s]=Object.values(t)[s];return e},communityboard:function(){for(var t=new Object,a=0;a<this.$store.state.communityboard.length;a++)this.$store.state.communityboard[a].memberNum==this.userData.memberSq&&(t[a]=this.$store.state.communityboard[a]);for(var e=[],s=0;s<3;s++)e[s]=Object.values(t)[s];return e},pboard:function(){for(var t=new Object,a=0;a<this.$store.state.pboard.length;a++)this.$store.state.pboard[a].pboardId==this.userData.memberSq&&(t[a]=this.$store.state.pboard[a]);for(var e=[],s=0;s<3;s++)e[s]=Object.values(t)[s];return e},qnaboard1:function(){var t=new Object;if(void 0!=this.$store.state.qnaboard1)for(var a=0;a<this.$store.state.qnaboard1.length;a++)this.$store.state.qnaboard1[a].memberNum==this.userData.memberSq&&(t[a]=this.$store.state.qnaboard1[a]);for(var e=[],s=0;s<3;s++)e[s]=Object.values(t)[s];return e},commuCount:function(){var t=0;if(void 0!=this.$store.state.communityboard)for(var a=0;a<this.$store.state.communityboard.length;a++)this.$store.state.communityboard[a].memberNum==this.userData.memberSq&&t++;return t},qnaCount:function(){var t=0;if(void 0!=this.$store.state.qnaboard1)for(var a=0;a<this.$store.state.qnaboard1.length;a++)this.$store.state.qnaboard1[a].memberNum==this.userData.memberSq&&t++;return t},portfCount:function(){for(var t=0,a=0;a<this.$store.state.pboard.length;a++)this.$store.state.pboard[a].pboardId==this.userData.memberSq&&t++;return t}}),methods:{moveResume:function(t){this.$router.replace({name:"resume",params:{id:t}})},moveCommu:function(t){this.$router.replace({name:"CommunityBoardView",params:{id:t}})},moveJobDtl:function(t){this.$router.replace({name:"jobInfoDtl",params:{wantedNo:t}})},moveQna:function(t){this.$router.replace({name:"qnaView",params:{id:t}})},movePortf:function(t){this.$router.replace({name:"Portinfo",params:{id:t}})},formatDate:function(t){return this.$moment(t).format("YYYY-MM-DD")},uploadPhoto:function(){var t=new FormData;t.append("memberSq",this.userData.memberSq),t.append("memberEmail",this.userData.memberEmail),t.append("upFile",this.files[0]),void 0!=this.files[0]?l.a.post("http://rclass.iptime.org:9999/20AM_ITJOBGO_BOOT_FINAL/member/updatePhoto",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){t.data>0?(alert("사진이 등록되었습니다."),d()(".submit-photo").hide()):alert("사진 등록에 실패했습니다. 다시 시도해주세요.")})):alert("사진을 넣어주세요")},selectImage:function(){this.$refs.fileInput.click()},pickFile:function(){var t=this,a=this.$refs.fileInput,e=a.files;if(this.files=a.files,null!=e[0].name&&d()(".submit-photo").show(),e&&e[0]){var s=new FileReader;s.onload=function(a){t.previewImage=a.target.result},s.readAsDataURL(e[0]),this.$emit("input",e[0])}}}},h=f,_=(e("24a6"),e("2877")),C=e("6544"),y=e.n(C),D=e("1f4f"),$=Object(_["a"])(h,s,r,!1,null,"61b9d734",null);a["default"]=$.exports;y()($,{VSimpleTable:D["a"]})}}]);
//# sourceMappingURL=chunk-8d4773ae.47312058.js.map