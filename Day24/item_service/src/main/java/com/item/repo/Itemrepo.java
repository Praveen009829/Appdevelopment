package com.item.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.item.model.Item;



public interface Itemrepo extends JpaRepository<Item, Integer>{

}
