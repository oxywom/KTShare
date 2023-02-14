package com.example.join.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.join.dto.MemberDto;
import com.example.join.dto.TeamDto;
import com.example.join.entity.Team;
import com.example.join.service.MainService;

@RestController
public class MainController {
	
	@Autowired
	private MainService mainService;
	
	@PostMapping("/regteam")
	public ResponseEntity<List<TeamDto>> regTeam(@ModelAttribute Team team) {
		ResponseEntity<List<TeamDto>> res=null;
		try {
			mainService.regTeam(team);
			res=new ResponseEntity<List<TeamDto>>(
					mainService.teamList(), HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			res=new ResponseEntity<List<TeamDto>>(HttpStatus.BAD_REQUEST);
		}
		return res;
	}
	@GetMapping("/members/{teamName}")
	public ResponseEntity<List<MemberDto>> 
		memberList(@PathVariable String teamName) {
		ResponseEntity<List<MemberDto>> res = null;
		try {
			List<MemberDto> list = mainService.memberList(teamName);
			res=new ResponseEntity<List<MemberDto>>(list,HttpStatus.OK);					
		} catch(Exception e) {
			e.printStackTrace();
			res=new ResponseEntity<List<MemberDto>>(HttpStatus.BAD_REQUEST);					
		}
		return res;
	}	
}
