'use strict'

describe('Paginator', function(){

	beforeEach(module('teamBlogApp.services'));

	var fetchFunc, data, paginator;

	beforeEach(inject(function (Paginator) {		
		data = [{"Name":"Silicon Valley", "Description":"A story about an iron man", "Price":"20$", "src":"images/1.jpg"},
      			{"Name":"Super IP", "Description":"Super IP", "Price":"35$", "src":"images/2.jpg"},
      			{"Name":"One Square Physical Exam", "Description":"A square meter can do physical exam", "Price":"18$", "src":"images/3.jpg"},
			    {"Name":"Creative", "Description":"Use your head to creative", "Price":"9$", "src":"images/4.jpg"},
			    {"Name":"Moon Over River", "Description":"Cross the river in the moon light", "Price":"26$", "src":"images/5.jpg"},
			    {"Name":"Exposure", "Description":"Social knowledge", "Price":"14$", "src":"images/6.jpg"},
			    {"Name":"Essence of Business", "Description":"How to make money", "Price":"51$", "src":"images/7.jpg"},
			    {"Name":"Best Team", "Description":"What is a best creative team", "Price":"47$", "src":"images/8.jpg"},
			    {"Name":"How do management", "Description":"Plan is very important", "Price":"88$", "src":"images/9.jpg"},
			    {"Name":"Internet Ecology", "Description":"Complicated internet ecology", "Price":"13$", "src":"images/10.jpg"},
			    {"Name":"EQ decides life", "Description":"You should have a high EQ", "Price":"67$", "src":"images/11.jpg"},
			    {"Name":"Common sense", "Description":"Must know common sense", "Price":"11$", "src":"images/12.jpg"},
			    {"Name":"Think wide", "Description":"Don't angry about tiny thing", "Price":"40$", "src":"images/13.jpg"}];
		
		fetchFunc = function(offset, limit, callback){
	        var count = offset + limit > data.length ? data.length : offset + limit;  			    
		    callback(data.slice(offset, count));    	
	  	};
	  	paginator = Paginator(fetchFunc, 5);
	}));

	it('should load page correctly', function(){		
		paginator.next();
		expect(paginator.currentPageItems.length).toBe(5);
		expect(paginator.currentOffset).toBe(5);
		expect(paginator.hasNext()).toBe(true);

		paginator.next();
		expect(paginator.currentPageItems.length).toBe(3);
		expect(paginator.currentOffset).toBe(10);
		expect(paginator.hasNext()).toBe(false);

		paginator.previous();
		expect(paginator.currentPageItems.length).toBe(5);
		expect(paginator.currentOffset).toBe(5);
		expect(paginator.hasNext()).toBe(true);
		expect(paginator.hasPrevious()).toBe(true);

		paginator.previous();
		expect(paginator.currentPageItems.length).toBe(5);
		expect(paginator.currentOffset).toBe(0);
		expect(paginator.hasNext()).toBe(true);
		expect(paginator.hasPrevious()).toBe(false);
	});
});