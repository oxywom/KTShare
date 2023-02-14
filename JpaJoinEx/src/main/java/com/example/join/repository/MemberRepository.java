package com.example.join.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.join.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Integer> {

}
