package com.ajaxPlease.baejimil.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ajaxPlease.baejimil.model.Country;

public interface CountryRepository extends CrudRepository<Country, Integer> {
	
	public List<Country> findAllByOrderByNameAsc();
}



