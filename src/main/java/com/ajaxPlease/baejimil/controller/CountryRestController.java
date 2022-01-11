package com.ajaxPlease.baejimil.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ajaxPlease.baejimil.model.Country;
import com.ajaxPlease.baejimil.repository.CountryRepository;

import java.util.List;


@RestController
public class CountryRestController {
	
    @Autowired
    private CountryRepository repo;
    
    
    @GetMapping("/countries/list")
    public List<Country> listAll() {
        System.out.println("listAll REST API is invoked...");
        return repo.findAllByOrderByNameAsc();
    }
    
    @PostMapping("/countries/save")
    public String save(@RequestBody Country country) {
    	System.out.println("ID: " + country.getId() + ", Name: " + country.getName());
    	Country savedCountry = repo.save(country);
    	
    	return String.valueOf(savedCountry.getId());
    }
    
    @GetMapping("/countries/delete/{id}")
    public void delete(@PathVariable("id") Integer id) {
    	repo.deleteById(id);
    	
    }
}
