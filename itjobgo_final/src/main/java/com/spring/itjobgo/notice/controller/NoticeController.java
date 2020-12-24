package com.spring.itjobgo.notice.controller;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.spring.itjobgo.community.model.vo.CB_COMMENT;
import com.spring.itjobgo.notice.model.service.NoticeService;
import com.spring.itjobgo.notice.model.vo.Notice;
import com.spring.itjobgo.notice.model.vo.NoticeAttachment;
import com.spring.itjobgo.notice.model.vo.NoticeComment;
@CrossOrigin(origins = "http://rclass.iptime.org:9999") 
@RestController
public class NoticeController {

	@Autowired
	private Logger logger;
	
	@Autowired
	private NoticeService service;
	
	//공지사항 리스트 조회
	@ResponseBody
	@RequestMapping(value="/notice/noticeList", method=RequestMethod.GET)
	public List<Notice> noticeList(){
		
		List<Notice>list = service.selectNoticeList();
		
		for(Notice i : list){
		    System.out.println(i);
		}
		
		return list;
		
	}
	
	//공지사항 글쓰기
	@RequestMapping(value="/notice/insertNotice",
			method = RequestMethod.POST, consumes = { "multipart/form-data" })
	public String notie(Notice notice,@RequestParam(value="memberNum") int memberno,
						@RequestBody MultipartFile[] file, HttpServletRequest request) 
					{
	
	System.out.println("멤버번호  : "+memberno);																							
	notice.setMemberNum(memberno);
	
	logger.debug("매핑확인");
	logger.debug("======vue에서 전송한  파일========");
	//파일이 있다면
	if(file.length>0) {
	logger.debug("파일명"+file[0].getOriginalFilename());
	logger.debug("파일크기 : "+file[0].getSize());	
	}
	logger.debug(notice.toString());
	
	//업로드 경로 설정
			//파일 리네임 처리후 파일 저장하기
			String saveDir=request.getServletContext().getRealPath("/resources/upload/notice");
			
			File dir=new File(saveDir);
			
			if(!dir.exists()) {
				//지정된경로의 폴더가 없으면
				dir.mkdirs(); //mk > make directory
			}
			
			List<NoticeAttachment> files=new ArrayList<NoticeAttachment>();
			
			for(MultipartFile f:file) {
				
				if(!f.isEmpty()) {
					
				String originalFileName=f.getOriginalFilename();
				String ext=originalFileName.substring(originalFileName.lastIndexOf(".")+1);
				SimpleDateFormat sdf=new SimpleDateFormat("yyyy_MM_dd_HHmmssSSS");
				
				int rndNum=(int)(Math.random()*1000);
				
				String renameFileName=sdf.format(new Date(System.currentTimeMillis()))+"_"+rndNum+"."+ext;
				

				try {
					//파일저장하기
					//스프링이 제공하는 멀티파트가 메소드를 제공한다 tansferTo(파일)라는 메소드를 제공한다
					f.transferTo(new File(saveDir+"/"+renameFileName));
				}catch(IOException e) {
					e.printStackTrace();
				}
				NoticeAttachment file2=new NoticeAttachment(0,0,originalFileName,renameFileName,null,null);
				files.add(file2);
				}
			}
			int result=0;

			
			try {
				//게시판 글 작성
			 result=service.insertNotice(notice, files);
				
			}catch(RuntimeException e) {
				e.printStackTrace();
			}
			
			String msg="";
			if(result>0) msg="등록성공";
			
			else msg="등록실패";
			
			return msg;
			
		}
	
	//공지사항 상세페이지 전환 
	@RequestMapping(value="/notice/noticeView{noticeSq}",
			method=RequestMethod.GET)
	public Notice selectNoticeOne(@PathVariable int noticeSq, 
																	HttpServletRequest request,
																	HttpServletResponse response)
	throws JsonMappingException,JsonGenerationException,IOException{
	
	logger.debug("noticeSq"+Integer.toString(noticeSq));
	
	//조회수 증가로직 쿠키이용
	Cookie[] cookies =request.getCookies();
	String boardHistory="";
	boolean hasRead=false; 
	
	if(cookies!=null) {
	for(Cookie c : cookies) {
	
	
	String name = c.getName();
	String value = c.getValue();
	
	if("boardHistory".equals(name)) {
	boardHistory=value; //현재 저장된 값대입 덮어쓰기하면서 누적
	
	if(value.contains("|"+noticeSq+"|")) {
	hasRead=true;
	break;
	}
	}
	}//for
	}//if
	
	if(!hasRead) {
	Cookie c = new Cookie("boardHistory",boardHistory+"|"+noticeSq+"|");
	c.setMaxAge(-1);
	response.addCookie(c);
	
	}	
	
	Notice notice = service.selectNoticeOne(noticeSq,hasRead);
	
	return notice;
	
	}
	
	//공지사항 삭제하기
	@RequestMapping(value="/notice/noticeDelete{noticeSq}",
			method=RequestMethod.POST)
	public String deleteBoard(@PathVariable int noticeSq , HttpServletRequest request) 
	throws JsonMappingException,JsonGenerationException,IOException
	{
	
	//먼저 첨부파일이 삭제가 되면 그 그결과값이 result>0이면 게시글 삭제로 이어지도록
	String msg = "";
	logger.debug("첨부파일 삭제 후 게시글 삭제 로직 수행 logger");
	
	//먼저 게시글 번호를 가지고 해당 첨부파일을 가져오는 메서드
	NoticeAttachment nattach = service.selectAttach(noticeSq);
	System.out.println(nattach);
	//첨부파일이 있을경우
	if(nattach!=null) {	
	//첨부파일을 가져온 후 첨부파일을 서버에서(/resources/upload/communityBoard)삭제
	String ReNameFile =nattach.getRenamedfilename();
	String saveDir = request.getServletContext().getRealPath("/resources/upload/notice");
	
	//먼저 게시글 삭제 후 첨부파일 삭제
	int result = service.deleteBoard(noticeSq);
	
	if(result>0) {
	msg="공지사항 글삭제 성공";
	//게시글 삭제를 성공했을때 첨부파일이 있다면 첨부파일도 삭제
	File file = new File(saveDir+"/"+ReNameFile);
	if(file.exists()) {
	if(file.delete()) logger.debug("첨부파일 삭제 성공");
	else logger.debug("첨부파일 삭제 실패");
		}
	}
	else {
	msg="자유게시판 글삭제 실패";
	}
	//첨부파일이 없는 게시글 삭제
	}else {
	int result = service.deleteBoard(noticeSq);
	msg =(result>0) ?"공지사항 글 삭제 성공" : " 공지사항 글 삭제 실패";
	}
	logger.debug(msg);
	return msg;
	}
	
	//첨부파일 먼저 불러오기 (update form 으로)
	@RequestMapping(value="/notice/noticeUpdate{noticeSq}",
										method=RequestMethod.GET)
	public NoticeAttachment selectAttach(@PathVariable int noticeSq) {
		
		System.out.println("==첨부파일 불러오기 맵핑 시작==");
		
		NoticeAttachment noticeAttach = service.selectAttach(noticeSq);
		
		System.out.println(noticeAttach);
		
		return noticeAttach;
	}
	
	//공지사항 수정(update)
	@RequestMapping(value="/notice/noticeUpdateEnd" , 
									method = RequestMethod.POST, 
									consumes = { "multipart/form-data" })
	public String noticeUpdate(Notice notice, 
																	@RequestBody(required = false) 
																		MultipartFile[]  file,
																		HttpServletRequest request) {
		
		System.out.println("==업데이트 메서드 실행==");
		
		if(file.length>0) {
			//파일이 존재한다면 게시판 번호를 변수에 넣어둔다.
			int noticeSq = notice.getNoticeSq();
			
			String saveDir=request.getServletContext().getRealPath("/resources/upload/notice");
			
			File dir = new File(saveDir);
			if(!dir.exists()) {
				//지정된 경로가 없으면 폴더를 생성해주는 메서드 mkdirs()
				dir.mkdirs();
			}
			
			List<NoticeAttachment> files = new ArrayList();
			
			//원래 파일이 존재한다면! get해서 가져와서 변수에 저장해두기
			for(MultipartFile f:file) {
				if(!f.isEmpty()) {
				String originalFileName=f.getOriginalFilename();
				String ext=originalFileName.substring(originalFileName.lastIndexOf(".")+1);
				SimpleDateFormat sdf=new SimpleDateFormat("yyyy_MM_dd_HHmmssSSS");
				int rndNum=(int)(Math.random()*1000);
				String renameFileName=sdf.format(new Date(System.currentTimeMillis()))+"_"+rndNum+"."+ext;
				
					
					try {
						//파일저장하기
						//스프링이 제공하는 멀티파트가 메소드를 제공한다
						//transfer to(파일) 메소드를 이용한다.
						f.transferTo(new File(saveDir+"/"+renameFileName));
					}catch(IOException e) {
						e.printStackTrace();
					}
					
					NoticeAttachment file2 =new NoticeAttachment(0,noticeSq,originalFileName,renameFileName,null,null);
					files.add(file2);
					
				}
			}
			int result=0;
			try {
				//게시판 글 업데이트
				result =service.updateBoard(notice,files);
			}catch(RuntimeException e) {
				e.printStackTrace();
			}
			String msg="";
			if(result>0) msg="게시글 수정 성공";
			else msg="게시글 수정 실패";
			
			}//193번째줄 if > 파일이 있다면 / 게시판 정보만 업데이트
			else {
				int result = service.updateBoard(notice);
			}
			return "업데이트 테스트";
		
		}
	
		//첨부파일 표시
		@RequestMapping(value="notice/noticeAttachment{noticeSq}",
										method=RequestMethod.GET)
		public NoticeAttachment downLoad(@PathVariable int noticeSq) {
			
			System.out.println("==첨부파일 다운로드 매핑 시작==");
			logger.debug(Integer.toString(noticeSq));
			NoticeAttachment noticeAttach = service.selectAttach(noticeSq);
			if(noticeAttach==null) return null;
			else return noticeAttach;
		}
		
		//첨부파일 다운로드(이름 보내기)
		@RequestMapping(value="notice/filedownload",method=RequestMethod.GET)
		public void filedownload(HttpServletRequest request,HttpServletResponse response,
													@RequestHeader(name="user-agent")String header,
													@RequestParam(value="oriName") String oriName,
													@RequestParam(value="reName")  String reName) 
													{
			
			logger.debug(oriName);
			logger.debug(reName);
			String path=request.getServletContext().getRealPath("/resources/upload/notice");
			File saveFile=new File(path+"/"+reName);
			BufferedInputStream bis=null;
			ServletOutputStream sos=null;
			
			try {
				bis=new BufferedInputStream(new FileInputStream(saveFile));
				sos=response.getOutputStream();
				boolean isMSIE=header.indexOf("Trident")!=-1||header.indexOf("MSIE")!=-1;
				String encodeRename="";
				if(isMSIE) {
					encodeRename=URLEncoder.encode(oriName,"UTF-8").replaceAll("\\+","%20");
					
				}else {
					encodeRename=new String(oriName.getBytes("UTF-8"),"ISO-8859-1");
				}
				response.setContentType("application/octet-stream;charset=utf-8");
				response.setHeader("Content-Disposition", "attachment;filename=\""+encodeRename+"\"");
				response.setHeader("Content-Transfer-Encoding", "binary;");
				response.setContentLength((int)saveFile.length());
				int read=-1;
				while((read=bis.read())!=-1) {
					sos.write(read);
					}
				}catch(IOException e) {
					e.printStackTrace();
				}finally {
					try {
						sos.close();
						bis.close();
					}catch(IOException e) {
						e.printStackTrace();
					}
				}
			}
		
		
		//댓글작성
		@RequestMapping(value="notice/comment", method=RequestMethod.POST)
		public String insertComment(NoticeComment nbc) {
			String msg="댓글insert";
			int result = service.insertComment(nbc);
			
			logger.debug(nbc.toString());
			logger.debug("댓글달기 매핑테스트");
			return msg;
		}
		
		
		//댓글조회
		@RequestMapping(value="notice/commentSelectOne{ntBoardNo}", method=RequestMethod.GET)
		public  List<NoticeComment> commentList(@PathVariable int ntBoardNo){
			
			logger.debug(ntBoardNo + ": 의 댓글조회 맵핑 시작");
			List<NoticeComment>list = service.selectComment(ntBoardNo);
			
			for(NoticeComment nbc : list) {
				logger.debug(nbc.toString());
			}
			
			return list;
		}
		
		//댓글삭제
		@RequestMapping(value="notice/commentDelete{ntCommentNo}",method=RequestMethod.POST)
		public void commentDelete(@PathVariable int ntCommentNo) {
			
			int result=service.deleteComment(ntCommentNo);
			
			if(result>0) {
				System.out.println("게시판 댓글 삭제성공");		
			}else {
				System.out.println("게시판 댓글 삭제 실패");
			}
		}
		
		//댓글수정
		@RequestMapping(value="notice/updateComment", method=RequestMethod.POST)
		public void updateComment(@RequestBody Map param) {
			System.out.println("==댓글수정 맵핑테스트==");
			System.out.println("댓글수정(넘어온 param 확인)" + param );
			int result = service.updateComment(param);
			
			logger.debug("댓글 param"+param);
			if(result>0) {
				System.out.println("==댓글 수정 성공==");
			}
		
		}
		
}//클래스
