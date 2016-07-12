'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamBlogApp
 */
angular.module('teamBlogApp')
  .controller('MainCtrl', function ($scope, $http, $sce) {
    $http.get('books.json').success(function(data){      	
    	$scope.books = data;    	
    });

    $scope.highlight = function(text, search){
    	if(!search){
    		console.log(search);
    		return $sce.trustAsHtml(text);
    	}
    	return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlighted">$&</span>'))
    };

    $scope.orderProp = 'Name';
  });
