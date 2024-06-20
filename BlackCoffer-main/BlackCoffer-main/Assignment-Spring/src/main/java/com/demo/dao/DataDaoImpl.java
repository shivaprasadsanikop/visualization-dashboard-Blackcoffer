package com.demo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.demo.entity.data;

@Repository
public class DataDaoImpl implements DataDao{
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<data> findAll() {
		List<data> lst=jdbcTemplate.query("select distinct * from data",(rs,num)->{
			data p=new data();
			p.setEnd_year(rs.getInt(1));
			p.setCitylng(rs.getString(2));
			p.setCitylat(rs.getString(3));
			p.setIntensity(rs.getInt(4));
			p.setSector(rs.getString(5));
			p.setTopic(rs.getString(6));
			p.setInsight(rs.getString(7));
			p.setSwot(rs.getString(8));
			p.setUrl(rs.getString(9));
			p.setRegion(rs.getString(10));
			p.setStart_year(rs.getString(11));
			p.setImpact(rs.getString(12));
			p.setAdded(rs.getString(13));
			p.setPublished(rs.getString(14));
			p.setCity(rs.getString(15));
			p.setCountry(rs.getString(16));
			p.setRelevance(rs.getInt(17));
			p.setPestle(rs.getString(18));
			p.setSource(rs.getString(19));
			p.setTitle(rs.getString(20));
			p.setLikelihood(rs.getInt(21));
			return p;
		});
		return lst;
	}
}
