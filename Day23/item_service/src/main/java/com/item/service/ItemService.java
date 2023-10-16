
package com.item.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.item.model.Item;
import com.item.repo.Itemrepo;



@Service
public class ItemService implements ItemServiceInt{
	
	@Autowired
	Itemrepo itemDAO;
	@Override
	public Item addItem(Item item){
			return itemDAO.save(item);
	}
	@Override
	public Item updateItem(Item item){
			return itemDAO.save(item);
	}

	@Override
	public Item viewItem(Integer itemId){
		Optional<Item> opt = itemDAO.findById(itemId);
			return opt.get();
	}
	@Override
	public Item removeItem(Integer itemId)  {
		Optional<Item> opt = itemDAO.findById(itemId);
	
			Item item = opt.get();
			itemDAO.delete(item);
			return item;
	}
	@Override
	public List<Item> viewAllItems(){
		List<Item> items = itemDAO.findAll();
		return items;
	}
	
	

}
