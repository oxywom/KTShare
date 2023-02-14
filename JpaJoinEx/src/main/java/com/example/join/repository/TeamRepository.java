package com.example.join.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.join.entity.Team;

public interface TeamRepository extends JpaRepository<Team, Integer> {
	public Optional<Team> findByName(String name);
}
