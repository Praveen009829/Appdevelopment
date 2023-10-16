package com.item.service;

import java.util.List;

import com.item.model.Item;



public interface ItemServiceInt {
	
	public Item addItem(Item item);
	
	public Item updateItem(Item item);
	
	public Item viewItem(Integer itemId);
	
	public Item removeItem(Integer itemId);
	
	public List<Item> viewAllItems();

}
