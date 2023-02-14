package com.example.join.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.join.dto.TeamDto;
import com.example.join.entity.Team;
import com.example.join.service.TeamService;

@RestController
public class TeamController {
	
	@Autowired
	private TeamService teamService;
	
	@PostMapping("/regteam")
	public ResponseEntity<List<TeamDto>> regTeam(@ModelAttribute Team team) {
		ResponseEntity<List<TeamDto>> res=null;
		try {
			teamService.regTeam(team);
			res=new ResponseEntity<List<TeamDto>>(
					teamService.teamList(), HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			res=new ResponseEntity<List<TeamDto>>(HttpStatus.BAD_REQUEST);
		}
		return res;
	}
	
}
