package com.spring.itjobgo.meeting.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.spring.itjobgo.meeting.model.vo.Approve;
import com.spring.itjobgo.meeting.model.vo.Mattachment;
import com.spring.itjobgo.meeting.model.vo.Mboard;
import com.spring.itjobgo.meeting.model.vo.Mcount;
import com.spring.itjobgo.meeting.model.vo.Tmpapply;
import com.spring.itjobgo.member.model.vo.Member;


@Repository
public class MeetingDaoImpl implements MeetingDao {

	@Override
	public int insertMboard(SqlSessionTemplate session, Map param) {
		// TODO Auto-generated method stub
		return session.insert("meeting.insertmboard",param);
	}

	@Override
	public Integer selectapplycheck(SqlSessionTemplate session, Tmpapply tmp) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selectapplycount",tmp);
	}

	@Override
	public List enterList(SqlSessionTemplate session, int no) {
		// TODO Auto-generated method stub
		return session.selectList("meeting.enterList",no);
	}

	@Override
	public Mcount joincount(SqlSessionTemplate session, int no) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selectjoincount",no);
	}

	@Override
	public List<Tmpapply> selectapply(SqlSessionTemplate session, int no) {
		// TODO Auto-generated method stub
		return session.selectList("meeting.selectapply",no);
	}

	@Override
	public int insertAttachment(SqlSessionTemplate session, Mattachment file) {
		// TODO Auto-generated method stub
		return session.insert("meeting.insertmattach",file);
	}

	@Override
	public List<Mboard> selectendList(SqlSessionTemplate session) {
		// TODO Auto-generated method stub
		return session.selectList("meeting.selectendList");
	}

	@Override
	public int updatestatus(SqlSessionTemplate session, Tmpapply tmp) {
		// TODO Auto-generated method stub
		return session.update("meeting.updatestatus",tmp);
	}

	@Override
	public String selectMboardname(SqlSessionTemplate session, int collabSq) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selectMboardname",collabSq);
	}

	@Override
	public Tmpapply selectOneapply(SqlSessionTemplate session, int no) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selectOneTmp",no);
	}

	@Override
	public String selectMembername(SqlSessionTemplate session, int memberSq) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selectMembername",memberSq);
	}

	@Override
	public int insertApprove(SqlSessionTemplate session, Approve ap) {
		// TODO Auto-generated method stub
		return session.insert("meeting.insertApprove",ap);
	}

	@Override
	public List<Approve> selectApprove(SqlSessionTemplate session, int no) {
		// TODO Auto-generated method stub
		return session.selectList("meeting.selectapprovelist",no);
	}

	@Override
	public int deleteapply(SqlSessionTemplate session, int no) {
		// TODO Auto-generated method stub
		return session.delete("meeting.deleteapply",no);
	}

	@Override
	public Member selectMemberOne(SqlSessionTemplate session, String email) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selectmember",email);
	}

	@Override
	public List<Mboard> selectMklist(SqlSessionTemplate session, int memberSq) {
		// TODO Auto-generated method stub
		System.out.println(memberSq);
		return session.selectList("meeting.selectListmember",memberSq);
		
	}

	
	@Override
	public Mattachment selectMattach(SqlSessionTemplate session, int no) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selectmattach",no);
	}

	@Override
	public int deletemeeting(SqlSessionTemplate session, int no) {
		// TODO Auto-generated method stub
		return session.delete("meeting.deletemeeting",no);
	}

	@Override
	public int updatemeeting(SqlSessionTemplate session, Map param) {
		// TODO Auto-generated method stub
		return session.update("meeting.updatemeeting",param);
	}

	@Override
	public Mboard selectMinfo(SqlSessionTemplate session, int no) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selectminfo",no);
	}

	@Override
	public Mcount selectcount(SqlSessionTemplate session, Tmpapply tmp) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selectcount",tmp);
	}

	@Override
	public int updatecount(SqlSessionTemplate session, Map param) {
		// TODO Auto-generated method stub
		return session.update("meeting.updatecounttable",param);
	}

	@Override
	public int updatedcount(SqlSessionTemplate session, Map param) {
		// TODO Auto-generated method stub
		return session.update("meeting.upcount",param);
	}

	@Override
	public int insertapply(SqlSessionTemplate session, Tmpapply tmp) {
		// TODO Auto-generated method stub
		return session.insert("meeting.inserttapply",tmp);
	}

	@Override
	public int selectapply(SqlSessionTemplate session, Tmpapply tmp) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selectappcount",tmp);
	}

	@Override
	public int deleteapply(SqlSessionTemplate session, Tmpapply tmp) {
		// TODO Auto-generated method stub
		return session.delete("meeting.deletemapply",tmp);
	}

	@Override
	public int insertcount(SqlSessionTemplate session, Map param) {
		// TODO Auto-generated method stub
		return session.insert("meeting.insertcount",param);
	}

	@Override
	public int selecttno(SqlSessionTemplate session, Tmpapply tmp) {
		// TODO Auto-generated method stub
		return session.selectOne("meeting.selecttno",tmp);
	}

	@Override
	public int updateattachment(SqlSessionTemplate session, Mattachment file) {
		// TODO Auto-generated method stub
		return session.update("meeting.updateattachment",file);
	}

	@Override
	public List<Mboard> selectMlist(SqlSessionTemplate session) {
		// TODO Auto-generated method stub
		return session.selectList("meeting.selectmList");
	}

	@Override
	public List selectWaitList(SqlSessionTemplate session, int no) {		
		return session.selectList("meeting.selectWaitList");
	}
	
	

}
