package com.dev.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dev.backend.dto.MovieDTO;
import com.dev.backend.entities.Movie;
import com.dev.backend.repositories.MovieRepository;

@Service
public class MovieService {
	
	// Instancia o objeto a baixo (ao invés de usar "new MovieRepository();")
	@Autowired 
	private MovieRepository repository;
	
	//Anotação para que o método receba configurações de transação e readOnly por que será somente leitura e assim melhora a performance.
	@Transactional(readOnly = true) 
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable); 
		return result.map(movie -> new MovieDTO(movie));
	}
	
	@Transactional(readOnly = true) 
	public MovieDTO findById(Long id) {
		Movie result = repository.findById(id).get(); 
		return new MovieDTO(result);
	}
}
