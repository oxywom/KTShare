package com.example.join.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.join.dto.MemberDto;
import com.example.join.dto.TeamDto;
import com.example.join.entity.Member;
import com.example.join.entity.Team;
import com.example.join.repository.MemberRepository;
import com.example.join.repository.TeamRepository;

@Service
public class MainService {
	@Autowired
	private TeamRepository teamRepository;
	@Autowired
	private MemberRepository memberRepository;	

	public void regTeam(Team team) throws Exception {
		teamRepository.save(team);
	}
	
	public List<TeamDto> teamList() throws Exception {
		List<Team> list= teamRepository.findAll();
		List<TeamDto> teamList = new ArrayList<>();
		for(Team t :list) {
			teamList.add(new TeamDto(t.getId(),t.getName()));
		}
		return teamList;
	}
	
	public List<MemberDto> 
		memberList(String teamName) throws Exception {
		Optional<Team> oteam = 
				teamRepository.findByName(teamName);
		if(oteam.isEmpty()) throw new Exception("팀명 오류");
		Team team = oteam.get();
		List<Member> list= team.getMembers();
		List<MemberDto> members = new ArrayList<>();
		for(Member m: list) {
			members.add(new MemberDto(m.getId(),m.getName(),
					team.getId(), team.getName()));
		}
		return members;
	}
}




