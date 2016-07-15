'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamBlogApp
 */
angular.module('teamBlogApp')
  .controller('MainCtrl', function ($scope, $http, $sce, 'Paginator') {
  	var fetchFunction = function(offset, limit, callback){
  		$http.get('books.json').success(function(data){
  			$scope.books = data.slice(offset, limit);      	
	    	callback($scope.books);    	
	    });
  	};    

    $scope.highlight = function(text, search){
    	if(!search){    		
    		return $sce.trustAsHtml(text);
    	}
    	return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlighted">$&</span>'))
    };

    $scope.query = '';
    $scope.orderProp = 'Name';
    $scope.searchPaginator = Paginator(fetchFunction, 5);
  });
