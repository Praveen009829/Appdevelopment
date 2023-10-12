package com.example.sample.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.sample.model.Users;
import com.example.sample.service.UserServiceImpl;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/auth/users")
public class UsersController {
    @Autowired
    private UserServiceImpl usersService;
    @GetMapping
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }
    @GetMapping("/{id}")
    public Users getUserById(@PathVariable int id) {
        return usersService.getUserById(id);
    }
    @GetMapping("/{email}")
    public Optional<Users> findByUsername(@PathVariable String email) {
    	return usersService.findByUsername(email);
    }
    @PostMapping
    public Users createUser(@RequestBody Users user) {
        return usersService.createUser(user);
    }
    @PutMapping("/{id}")
    public Users updateUser(@PathVariable int id, @RequestBody Users updatedUser) {
        return usersService.updateUser(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        usersService.deleteUser(id);
    }
}