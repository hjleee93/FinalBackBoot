package com.spring.itjobgo.community.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;

import com.spring.itjobgo.community.model.vo.CB_ATTACHMENT;
import com.spring.itjobgo.community.model.vo.CB_COMMENT;
import com.spring.itjobgo.community.model.vo.CommunityBoard;

public interface CommunityBoardDao {
	
	List<CommunityBoard> selectBoardList(SqlSessionTemplate session);
	
	//글작성
	int insertCommunityBoard(SqlSessionTemplate session, CommunityBoard CB);
	
	//첨부파일 insert
	int insertAttachment(SqlSessionTemplate session, CB_ATTACHMENT cb_attach);
	
	//글 상세보기
	CommunityBoard selectCommunityBoardOne(SqlSessionTemplate session, int boardSq);

	//글 삭제하기
	int deleteBoard(SqlSessionTemplate session, int boardSq);
	
	//첨부파일 조회
	CB_ATTACHMENT selectAttach(SqlSessionTemplate session, int boardSq);

	//첨부파일 update
	int updateAttachment(SqlSessionTemplate session,CB_ATTACHMENT cb_attach);
	
	//게시글(객체) update
	int updateBoard(SqlSessionTemplate session, CommunityBoard cb);
	
	//첨부파일 insert
	int insertAttachment2(SqlSessionTemplate session, CB_ATTACHMENT cb_attach);

	//조회수증가
	int updateReadCount(SqlSessionTemplate session, int boardSq);
	
	//댓글 insert
	int insertComment(SqlSessionTemplate session, CB_COMMENT cbc);
	
	//댓글 select
	List<CB_COMMENT>selectComment(SqlSessionTemplate session, int cboardNo);
	
	//댓글 delete
	int deleteComment(SqlSessionTemplate session, int cbCommentNo);
	
	//댓글 update
	int updateComment(SqlSessionTemplate session, Map param);
	
	//댓글 카운트
	int updateCommentCount(SqlSessionTemplate session, CB_COMMENT cbc);
	
	//댓글 정보가져오기
	CB_COMMENT selectOneComment(SqlSessionTemplate session, int cbCommentNo);
	
	//댓글 카운트 -1
	int deleteCount(SqlSessionTemplate session, int cboardNo);
}
