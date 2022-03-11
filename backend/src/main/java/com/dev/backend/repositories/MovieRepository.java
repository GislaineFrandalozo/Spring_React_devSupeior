package com.dev.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.backend.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
