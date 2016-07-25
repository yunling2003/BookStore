'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamBlogApp
 */
angular.module('teamBlogApp')
  .controller('MainCtrl', function ($scope, $sce, Paginator, books) {     
  	var fetchFunction = function(offset, limit, callback){           
      $scope.pageCount = parseInt(books.length / 5) + (books.length % 5 > 0 ? 1 : 0);
      var count = offset + limit > books.length ? books.length : offset + limit;  			    
	    callback(books.slice(offset, count));    	
  	};    

    $scope.highlight = function(text, search){
    	if(!search){    		
    		return $sce.trustAsHtml(text);
    	}
    	return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlighted">$&</span>'))
    };

    $scope.pageCount = 0;
    $scope.query = '';
    $scope.orderProp = 'Id';
    $scope.searchPaginator = Paginator(fetchFunction, 5);
  });
