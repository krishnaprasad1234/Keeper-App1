package com.krishna.keeperapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.krishna.keeperapp.entity.keeper_app_entity;
import com.krishna.keeperapp.repository.keeperapp_repository;

@CrossOrigin(origins = {"http://localhost:3000"})

@RestController
public class keeper_app_controller {
    
    @Autowired
    keeperapp_repository k1;

    @PostMapping("/keeper-app")
    public keeper_app_entity post_content(@RequestBody keeper_app_entity c1){
        return k1.save(c1);
    }

    @GetMapping("/keeper-app")
    public List<keeper_app_entity> get_content(){
        return k1.findAll();
    }

    @DeleteMapping("/keeper-app/{title}")
    public ResponseEntity<Void> delete_content(@PathVariable String title){
        k1.deleteByTitle(title);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/keeper-app/{title}")
    public ResponseEntity<Void> update_desc(@PathVariable String title,@RequestBody keeper_app_entity e1){
        keeper_app_entity existing_data=k1.findByTitle(title);
        existing_data.setTitle(e1.getTitle());
        existing_data.setDescription((e1.getDescription()));
        k1.save(existing_data);
        return ResponseEntity.noContent().build();
    }
}
