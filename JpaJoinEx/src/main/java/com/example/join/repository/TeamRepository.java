package com.example.join.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.join.entity.Team;

public interface TeamRepository extends JpaRepository<Team, Integer> {
	public Team findByName(String name);
}
