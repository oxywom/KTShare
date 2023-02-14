package com.example.join.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.join.dto.TeamDto;
import com.example.join.entity.Team;
import com.example.join.repository.TeamRepository;

@Service
public class TeamService {
	@Autowired
	private TeamRepository teamRepository;
	
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
}
