'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamBlogApp
 */
angular.module('teamBlogApp')
  .controller('MainCtrl', function ($scope, $sce, $location, Paginator, books) {     
  	var fetchFunction = function(offset, limit, callback){           
      $scope.pageCount = parseInt(books.length / 5) + (books.length % 5 > 0 ? 1 : 0);
      var count = offset + limit > books.length ? books.length : offset + limit;  			    
	    callback(books.slice(offset, count));    	
  	};    

    $scope.highlight = function(text, search){
    	if(!search){    		
    		return $sce.trustAsHtml(text.toString());
    	}
    	return $sce.trustAsHtml(text.toString().replace(new RegExp(search, 'gi'), '<span class="highlighted">$&</span>'))
    };

    $scope.setSortOrder = function(sortOrder){
      $scope.orderProp = sortOrder;
    };

    $scope.edit = function(id){
      $location.path('/edit/' + id);
    };

    $scope.pageCount = 0;
    $scope.query = '';
    $scope.orderProp = 'Id';
    $scope.searchPaginator = Paginator(fetchFunction, 5);
  });
