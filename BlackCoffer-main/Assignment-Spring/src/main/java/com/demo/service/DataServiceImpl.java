package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.DataDao;
import com.demo.entity.data;

@Service
public class DataServiceImpl implements DataService {
	
	@Autowired
	private DataDao dao;
	
	@Override
	public List<data> getAll() {
		return dao.findAll();
	}

}
