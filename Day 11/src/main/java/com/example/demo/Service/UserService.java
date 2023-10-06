package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.UserRepository;
@Service
public class UserService {
	
	@Autowired
	UserRepository userRepo;
	
	 public String saveSignUp(UserEntity user)
	  {
		  userRepo.save(user);
		  return "Thanks for signUp";
	  }
	 
	 public Optional<UserEntity> getuser(String emailid)
		{
			return userRepo.findById(emailid);
		}
	 public Iterable<UserEntity> getuser()
		{
			return userRepo.findAll();
		}
	 public void change(UserEntity user)
		{
			userRepo.save(user);
			System.out.println("Password Changed Successfully");
		}
	 public void delete()
		{
			userRepo.deleteAll();
		}

}