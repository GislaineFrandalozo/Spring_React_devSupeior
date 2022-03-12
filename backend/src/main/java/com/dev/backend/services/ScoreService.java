package com.dev.backend.services;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dev.backend.dto.MovieDTO;
import com.dev.backend.dto.ScoreDTO;
import com.dev.backend.entities.Movie;
import com.dev.backend.entities.Score;
import com.dev.backend.entities.User;
import com.dev.backend.repositories.MovieRepository;
import com.dev.backend.repositories.ScoreRepository;
import com.dev.backend.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired 
	private MovieRepository movieRepository;
	
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired 
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO movieScore) {
		User user = userRepository.findByEmail(movieScore.getEmail());
		
		if (user == null) {
			user = new User();
			user.setEmail(movieScore.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		Movie movie = movieRepository.findById(movieScore.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(movieScore.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for(Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / movie.getScores().size();
	
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie);
		
		return new MovieDTO(movie);
	}
}