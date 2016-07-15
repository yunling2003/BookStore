'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp.services
 * @description
 * # Paginator
 * Services of the teamBlogApp
 */
angular.module('teamBlogApp.services')
  .factory('Paginator', function(){
  	return function (fetchFunction, pageSize){
  	   var paginator = {
  	   	  hasNextVar: false,
  	   	  next: function() {
  	   	  	if(this.hasNextVar){
  	   	  		this.currentOffset += pageSize;
  	   	  		this._load();
  	   	  	}
  	   	  },
  	   	  _load: function() {
  	   	  	 var self = this;
  	   	  	 fetchFunction(this.currentOffset, pageSize + 1, function(items){
  	   	  	 	self.currentPageItems = items.slice(0, pageSize);
  	   	  	 	self.hasNextVar = items.length === pageSize + 1;
  	   	  	 });
  	   	  },
  	   	  hasNext: function(){
  	   	  	 return this.hasNextVar;
  	   	  },
  	   	  previous: function(){
  	   	  	 if(this.hasPrevious()){
  	   	  	 	this.currentOffset -= pageSize;
  	   	  	 	this._load();
  	   	  	 }
  	   	  },
  	   	  hasPrevious: function(){
  	   	  	return this.currentOffset !== 0;
  	   	  },
  	   	  currentPageItems: [],
  	   	  currentOffset: 0
  	   };

  	   paginator._load();
  	   return paginator;
  	};
  });