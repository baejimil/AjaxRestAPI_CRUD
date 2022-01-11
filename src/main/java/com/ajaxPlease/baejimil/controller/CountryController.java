package com.ajaxPlease.baejimil.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CountryController {
	
	@GetMapping("/")
	public String Home() {
		System.out.println("----------------------------");
		return "country";
	}

}
