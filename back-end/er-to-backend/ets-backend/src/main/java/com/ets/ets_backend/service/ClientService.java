package com.ets.ets_backend.service;

import com.ets.ets_backend.model.Client;
import com.ets.ets_backend.repository.UserRepository;
import com.ets.ets_backend.security.HashUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ClientService {

    @Autowired
    private UserRepository repository;

//    @Transactional(readOnly = true)
//    public User getUser(String username){
//        return repository.findByUserName(username).orElse(null);
//    }


    @Transactional
    public void createUser(Client user){
        if(repository.findByUsername(user.getUsername()).orElse(null) != null){
            return;
        }
        Client u = new Client();
        u.setSalt(HashUtil.generateSalt(32));
        u.setPassword(HashUtil.hashPassword(user.getPassword(), u.getSalt()));
        // u.setId(user.getId());
        u.setUsername(user.getUsername());
        u.setEmail(user.getEmail());
        repository.save(u);
    }

    @Transactional
    public boolean updateUser(Client user){
        Client existing = repository.findByUsername(user.getUsername()).orElse(null);
        if(existing != null){
            // Update fields of existing with user's fields
            existing.setUsername(user.getUsername());
            existing.setEmail(user.getEmail());
            existing.setPassword(user.getPassword());

            repository.save(existing); // This saves the updated existing entity
            return true;
        }
        return false;
    }

    @Transactional
    public void deleteUser(Client user){
        repository.findByUsername(user.getUsername()).ifPresent(toDelete -> repository.deleteById(toDelete.getId()));
    }

//    @Transactional(readOnly = true)
//    public boolean isVerified(User user){
//        User toCheck = repository.findByUsername(user.getUsername()).orElse(null);
//        return toCheck != null && toCheck.isVerified();
//    }

}
