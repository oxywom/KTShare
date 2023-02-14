package com.example.join;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.example.join.entity.Member;
import com.example.join.entity.Team;
import com.example.join.repository.MemberRepository;
import com.example.join.repository.TeamRepository;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class JpaJoinExApplicationTests {

	@Autowired
	private MemberRepository memberRepository;
	
	@Autowired
	private TeamRepository teamRepository;
	@Test
	void insertTeam() {
		Team team = Team.builder().id(3).name("SK").build();
		teamRepository.save(team);
	}
	
	@Test
	void selectMember() {
		Member member = memberRepository.findById(10).get();
		System.out.println(member);
	}
	
	@Test
	void insertMember() {
		Team team = teamRepository.findByName("KTDS");
		Member member = new Member(13,"차길동",team);
		memberRepository.save(member);
	}
	
	@Test
	void selectTeam() {
		Team team=teamRepository.findByName("KTDS");
		List<Member> list = team.getMembers();
		for(Member m: list) {
			System.out.println(m);
		}
		
	}
}





