'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamBlogApp
 */
angular.module('teamBlogApp')
  .controller('MainCtrl', function ($scope, $http, $sce, Paginator) {
  	var fetchFunction = function(offset, limit, callback){
  		$http.get('books.json').success(function(data){        
        $scope.pageCount = data.length / 5 + (data.length % 5 > 0 ? 1 : 0);
        var count = offset + limit > data.length ? data.length : offset + limit;  			    
	    	callback(data.slice(offset, count));    	
	    });
  	};    

    $scope.highlight = function(text, search){
    	if(!search){    		
    		return $sce.trustAsHtml(text);
    	}
    	return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlighted">$&</span>'))
    };

    $scope.pageCount = 0;
    $scope.query = '';
    $scope.orderProp = 'Name';
    $scope.searchPaginator = Paginator(fetchFunction, 5);
  });
