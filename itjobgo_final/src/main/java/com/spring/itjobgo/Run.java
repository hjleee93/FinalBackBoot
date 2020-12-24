package com.spring.itjobgo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

//부트 실행용 클래스 설정하기
//부트 실행용 클래스에는 @SpringBootApplication 어노테이션을 선언함

@SpringBootApplication
//@Configuration어노테이션 포함 -> bean 설정한 클래스에 작성, @Bean으로 등록
//@EnableAutoConfiguration 어노테이션 포함 -> 자동설정 기능, classPath에 있는 모든 클래스를 빈으로 자동등록 해줌
//@ComponentScan어노테이션 포함 -> 어노테이션처리된 bean을 가져오는 범위설정
//@ComponentScan(basePackages={root패키지})
public class Run {
	
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(Run.class, args);
		String[] beans = context.getBeanDefinitionNames();
		
	}

}
