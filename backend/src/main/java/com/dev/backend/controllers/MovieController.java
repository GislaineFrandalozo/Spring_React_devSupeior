package com.dev.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.backend.dto.MovieDTO;
import com.dev.backend.services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {
	
	@Autowired
	private MovieService service;
	
	@GetMapping
	public Page<MovieDTO> findAll(Pageable pageable) {
		return service.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public MovieDTO findById(@PathVariable Long id) {
		return service.findById(id);
	}
	// @PathVariable indica que o id será uma variavel da query
	
}
