package com.example.join.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MemberDto {
	private Integer id;
	private String name;
	private Integer team_id;
	private String team_name;
}
