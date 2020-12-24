package com.spring.itjobgo.info.model.service;

import java.util.List;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.itjobgo.ItNews.model.vo.ItnewsAttachment;
import com.spring.itjobgo.info.model.dao.InfoDao;
import com.spring.itjobgo.info.model.vo.INFO_ATTACHMENT;
import com.spring.itjobgo.info.model.vo.Info;

@Service
public class InfoServiceImpl implements InfoService {

@Autowired
private InfoDao dao;

@Autowired
private SqlSessionTemplate session;

@Override
public List<Info> selectInfoList() {
	return dao.selectInfoList(session);
	
}

	//취업정보 글쓰기
	@Override
	public int insertInfo(Info ifo, List<INFO_ATTACHMENT> files) {
		
		int result=dao.insertInfo(session,ifo);
		
		if(result==0) throw new RuntimeException("입력오류");
		if(result>0) {
			if(!files.isEmpty()) {	
				//파일에 데이터가 있으면 
				for(INFO_ATTACHMENT file:files) {
					result=dao.insertAttachment(session,file);
					
					if(result==0)throw new RuntimeException("입력오류");
				}
			}	
		}		
		return result;	
	}

	//이미지 불러오기
	@Override
	public INFO_ATTACHMENT selectImage(int sq) {
		// TODO Auto-generated method stub
		return dao.selectImage(session,sq);
	}
	
	//취업정보 상세 글
	@Override
	public Info selectInfoOne(int infoSq,boolean hasRead) {
	
		Info ifo =dao.selectInfoOne(session, infoSq);
		//hasRead가 false이면
		if(ifo!=null && !hasRead) {
			int result =dao.updateReadCount(session,infoSq);
			System.out.println("조회수 증가 성공");
		}	
				
		return ifo;
	}

	//삭제하기
	@Override
	public int deleteInfo(int infoSq) {
		return dao.deleteInfo(session, infoSq);
	}

	//첨부파일 조회
	@Override
	public INFO_ATTACHMENT selectAttach(int infoSq) {
		return dao.selectAttach(session, infoSq);
	}

	//첨부파일이 있을때 update
	@Override
	public int updateInfo(Info ifo, List<INFO_ATTACHMENT> files) {
		//첨부파일이 있으면 첨부파일 등록 dao도 같이 실행해줘야 한다
		int result = dao.updateInfo(session,ifo);
		//등록이 안되면
		if(result==0) throw new RuntimeException("게시글 등록 오류");
		//등록 성공하고 첨부파일이 있다면 첨부파일 등록
			if(result>0) {
				if(!files.isEmpty()) {
					for(INFO_ATTACHMENT file : files) {
						result=dao.updateAttachment(session, file);
						
						//첨부파일이없는 게시글일 경우 시퀀스때문에 수정이 안된다
						//그럴경우 시퀀스가 없는 insertAttachment2매퍼로 이동하도록 유도한다.
						if(result==0) 
							dao.insertAttachment2(session, file);
							System.out.println("==첨부파일 없는 글 첨부파일 등록==");
					}//for문
				}//세번째 if문
			}//두번째 if문
			
			return result;
		}

	//첨부파일이 없을때 게시판 내용만 update
	@Override
	public int updateInfo(Info ifo) {
		// TODO Auto-generated method stub
		return dao.updateInfo(session,ifo);
		}


	}
