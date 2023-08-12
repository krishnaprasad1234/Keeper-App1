package com.krishna.keeperapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krishna.keeperapp.entity.keeper_app_entity;

import jakarta.transaction.Transactional;

@Transactional
public interface keeperapp_repository extends JpaRepository<keeper_app_entity,Long>{
    keeper_app_entity findByTitle(String title);
    void deleteByTitle(String title);
}
