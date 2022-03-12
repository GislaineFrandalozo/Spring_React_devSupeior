package com.dev.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.backend.dto.MovieDTO;
import com.dev.backend.dto.ScoreDTO;
import com.dev.backend.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;

	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO movieScore) {
		return service.saveScore(movieScore);
	}
	
}
