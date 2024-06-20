package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.service.DataService;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class DataController {
	
	@Autowired
	private DataService service;
	
	@GetMapping("data")
	public ResponseEntity<?> getdata(){
		return ResponseEntity.ok(service.getAll());
	}
	
}
