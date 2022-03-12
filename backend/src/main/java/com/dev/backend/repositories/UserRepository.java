package com.dev.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.backend.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
