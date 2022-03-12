package com.dev.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.backend.entities.Score;
import com.dev.backend.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
}
