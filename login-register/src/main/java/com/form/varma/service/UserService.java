package com.form.varma.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.varma.model.UserDetails;
import com.form.varma.repo.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	public List<UserDetails> getUser(){
		return userRepository.findAll();
		}
	public UserDetails addUser(UserDetails userDetails) {
		return userRepository.save(userDetails);
	}
	public UserDetails getUserByName(String userName) {
		return userRepository.getByUserName(userName);
	}
	public String deleteUser(int userId) {
		userRepository.deleteById(userId);
		return "Record Deleted";
	}
}
