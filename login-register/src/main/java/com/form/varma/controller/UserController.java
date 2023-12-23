package com.form.varma.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.form.varma.model.UserDetails;
import com.form.varma.service.UserService;
@CrossOrigin(origins = "*" , allowedHeaders ="*")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	@GetMapping("/get")
	public List<UserDetails> getUser(){
		return userService.getUser();
	}
	@PostMapping("/add")
	public UserDetails addUser(@RequestBody UserDetails userDetails) {
		return userService.addUser(userDetails);
	} 
	@GetMapping("/get/{userName}")
	public UserDetails getUserByName(@PathVariable String userName) {
		return userService.getUserByName(userName);
	}
	@DeleteMapping("/del/{userId}")
	public String deleteUser(@PathVariable int userId) {
		return userService.deleteUser(userId);
	}
	
}
