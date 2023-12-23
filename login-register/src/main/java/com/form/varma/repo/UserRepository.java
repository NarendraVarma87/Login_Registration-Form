package com.form.varma.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.form.varma.model.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails,Integer>{

	UserDetails getByUserName(String userName);

}
