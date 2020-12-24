package com.spring.itjobgo.portfolio.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;

import com.spring.itjobgo.portfolio.model.vo.Attachment;
import com.spring.itjobgo.portfolio.model.vo.Comment;
import com.spring.itjobgo.portfolio.model.vo.Pboard;

public interface PortfolioDao {

	int insertPboard(SqlSessionTemplate session, Pboard pboard);

	int insertAttachment(SqlSessionTemplate session, Attachment file);

	List<Pboard> selectLitpboard(SqlSessionTemplate session);

	Pboard selectOnepboard(SqlSessionTemplate session, int pboardNo);

	int deletepboard(SqlSessionTemplate session, int no);

	Attachment selectOneAttach(SqlSessionTemplate session, int no);

	int updatedpboard(SqlSessionTemplate session, Pboard pboard);

	int updateattachment(SqlSessionTemplate session, Attachment file);

	int selectmemberno(SqlSessionTemplate session, String email);

	int insertComment(SqlSessionTemplate session, Comment cm);

	List<Comment> selectComment(SqlSessionTemplate session, int no);

	int deletecomment(SqlSessionTemplate session,int no);

	int updateReadCount(SqlSessionTemplate session, int pboardNo);

	int updatacommentText(SqlSessionTemplate session, int pboardNo);

	int updatecomment(SqlSessionTemplate session, Map param);

	int countcomment(SqlSessionTemplate session, int pboardNo);

	int updatacommentNtext(SqlSessionTemplate session, int pboardNo);

}
