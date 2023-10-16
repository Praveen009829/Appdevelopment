package com.example.sample.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.example.sample.model.Users;
import com.example.sample.repo.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl {

	@Autowired
    private  UserRepository usersRepository;

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }	
    public Users getUserById(int id) {
        Optional<Users> userOptional = usersRepository.findById(id);
        return userOptional.orElse(null);
    }

    public Users createUser(Users user) {
        return usersRepository.save(user);
    }

    public Users updateUser(int id, Users updatedUser) {
        Optional<Users> existingUserOptional = usersRepository.findById(id);

        if (existingUserOptional.isPresent()) {
            Users existingUser = existingUserOptional.get();
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setRole(updatedUser.getRole());

            return usersRepository.save(existingUser);
        } else {
            return null; 
        }
    }

    public Optional<Users> findByUsername(String email) {
        return usersRepository.findByEmail(email);
    }
    public void deleteUser(int id) {
        usersRepository.deleteById(id);
    }
	public UserDetails loadUserByUsername(String email) {
		// TODO Auto-generated method stub
		return null;
	}
}