package com.item.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.item.model.Item;
import com.item.service.ItemServiceInt;


@RestController
@RequestMapping("/item")
public class ItemServiceController {
	
	@Autowired
	ItemServiceInt itemService;
	
	
	@PostMapping("/add")
	public ResponseEntity<Item> addItem(@RequestBody Item item){
		Item newItem = itemService.addItem(item);
		return new ResponseEntity<Item>(newItem, HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Item> updateItem(@RequestBody Item item){
		Item updatedItem = itemService.updateItem(item);
		return new ResponseEntity<Item>(updatedItem, HttpStatus.OK);
	}
	
	@GetMapping("/view/{itemId}")
	public ResponseEntity<Item> getItem(@PathVariable("itemId") Integer itemId){
		Item item = itemService.viewItem(itemId);
		return new ResponseEntity<Item>(item, HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/remove/{itemId}")
	public ResponseEntity<Item> removeItem(@PathVariable("itemId") Integer itemId) {
		Item removedItem = itemService.removeItem(itemId);
		return new ResponseEntity<Item>(removedItem, HttpStatus.ACCEPTED);
	}

	
	@GetMapping("/viewall")
	public ResponseEntity<List<Item>> getAllItems(){
		List<Item> items = itemService.viewAllItems();
		return new ResponseEntity<List<Item>>(items, HttpStatus.OK);
		
	}
}
