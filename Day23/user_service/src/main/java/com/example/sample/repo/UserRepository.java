package com.example.sample.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sample.model.Users;


public interface UserRepository extends JpaRepository<Users, Integer> {
	Optional<Users> findByEmail(String email);
}