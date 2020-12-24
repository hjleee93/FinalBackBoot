package com.spring.itjobgo.resume.model.service;

import java.util.List;
import java.util.Map;

import com.spring.itjobgo.resume.model.vo.Consult;
import com.spring.itjobgo.resume.model.vo.ConsultAttachment;
import com.spring.itjobgo.resume.model.vo.ConsultAttachmentAll;
import com.spring.itjobgo.resume.model.vo.Rboard;
import com.spring.itjobgo.resume.model.vo.RboardAttachment;
import com.spring.itjobgo.resume.model.vo.RboardComment;
import com.spring.itjobgo.resume.model.vo.Resume;
import com.spring.itjobgo.resume.model.vo.ResumeAbroad;
import com.spring.itjobgo.resume.model.vo.ResumeActivity;
import com.spring.itjobgo.resume.model.vo.ResumeAll;
import com.spring.itjobgo.resume.model.vo.ResumeAttachment;
import com.spring.itjobgo.resume.model.vo.ResumeLanguage;
import com.spring.itjobgo.resume.model.vo.ResumeLicense;
import com.spring.itjobgo.resume.model.vo.ResumeList;
import com.spring.itjobgo.resume.model.vo.ResumeProject;
import com.spring.itjobgo.resume.model.vo.ResumeSchool;
import com.spring.itjobgo.resume.model.vo.ResumeWork;

public interface ResumeService {
	//이력서 컨설팅 게시판 보기
	List<Rboard> selectListRboard();
	
	//이력서 컨설팅 상세화면 보기
	Rboard selectRboard(int rboardNo,boolean hasRead);
	
	//이력서 컨설팅 상세화면 (첨부파일) 가져오기
	RboardAttachment selectRboardAttachment(int rboardNo);
	
	//이력서 리스트 보기
	List<ResumeList> selectResumeList(int memberSq);
	
	//이력서 게시판 등록하기
	int insertRboard(Rboard rboard, List<RboardAttachment> files);
	
	//이력서 게시판 수정하기(파일포함)
	int updateRboard(Rboard rboard, List<RboardAttachment> files);
	
	//이력서 게시판 수정하기(파일미포함)
	int updateRboard(Rboard rboard);
	
	//이력서 게시판 삭제하기
	int deleteRboard(int rboardNo);
	
	//이력서(개인정보+첨부파일) 등록
	int insertResume(Resume resume, ResumeSchool school, ResumeWork work, ResumeLicense license, 
			ResumeLanguage language, ResumeActivity activity, ResumeProject project, 
			ResumeAbroad abroad, List<ResumeAttachment> files, ResumeList resumelist);
	
	//이력서 불러오기
	ResumeAll selectResume(int resumeNo);
	
	//증명사진 불러오기
	String selectAttachment(String resumeNo);
	
	//이력서 업데이트
	int updateResume(Resume resume, ResumeSchool school, ResumeWork work, ResumeLicense license, 
			ResumeLanguage language, ResumeActivity activity, ResumeProject project, 
			ResumeAbroad abroad, List<ResumeAttachment> files, ResumeList resumelist);
	
	//이력서 삭제하기 (파일포함)
	int deleteResume(int resumeNo);
	
	//이력서 삭제하기 (파일제외)
	int deleteResume1(int resumeNo);
	
	//전문가 등록하기
	int insertConsult(Consult consult, List<ConsultAttachment> files);
	
	//이력서 전문가 신청 리스트 불러오기
	List<ConsultAttachmentAll> selectConsultant();
	
	//나의 이력서 전문가 신청 리스트 불러오기
	List<ConsultAttachmentAll> selectConsultantOne(int memberSq);
	
	//이력서 전문가 신청 첨부파일 불러오기
	ConsultAttachmentAll selectConsultAttachment(int consultNo);
	
	//이력서 전문가 신청 승인여부 수정하기
	int updateConsultApproval(Consult consult);
	
	//이력서 게시판 댓글 조회
	List<RboardComment> selectRboardComment(int rboardNo);
	
	//댓글 입력
	int insertRboardComment(RboardComment rboardComment);

	//댓글 삭제
	int deleteRboardComment(int rboardCommentNo);
	
	//댓글 수정
	int updateRboardComment(Map param);
	
}
