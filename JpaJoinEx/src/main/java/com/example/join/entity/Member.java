package com.example.join.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Member {
	@Id
	private Integer id;
	@Column
	private String name;
	
	@ManyToOne
	@JoinColumn(name="team_id")
	private Team team;
	
	@Builder
	public Member(Integer id, String name) {
		this.id=id;
		this.name=name;
	}
	@Override
	public String toString() {
		return "Member["+id+":"+name+":"+team.getName()+"]";
	}
}
