package com.example.demo.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entity.UserEntity;
import com.example.demo.Service.UserService;
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService UserService;
	
	@PostMapping("/signup")
	 public String singUp(@RequestBody UserEntity user)
	  {
		   return UserService.saveSignUp(user);
		  
	  }
	@GetMapping("/getuser/{emailid}")
	public Optional<UserEntity> getuserIn(@PathVariable String emailid)
	{
		return UserService.getuser(emailid);
	}
	@GetMapping("/getAlluser")
	public Iterable<UserEntity> getuser()
	{
		return UserService.getuser();
	}
	@PutMapping("/updateuser")
	public void changePassword(@RequestBody  UserEntity user)
	{
		UserService.change(user);
	}
	@GetMapping("/secured")
	public String welcomeuser()
	{
		return "Hello user";
	}
	@GetMapping("/public")
	public String welcomestud()
	{
		return "Hello";
	}
	
	public void delete()
	{
		UserService.delete();
	}

}