package com.example.join.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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
public class Team {
	@Id
	private Integer id;
	@Column
	private String name;
	
	@OneToMany(mappedBy="team", 
			targetEntity = Member.class, 
			fetch = FetchType.EAGER, cascade=CascadeType.PERSIST)
	private List<Member> members=new ArrayList<>();
	
	@Builder
	public Team(Integer id, String name) {
		this.id=id;
		this.name=name;
	}
	
	@Override
	public String toString() {
		return "team["+id+":"+name+"]";
	}
}
