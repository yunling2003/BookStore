'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the teamBlogApp
 */
 angular.module('teamBlogApp')
 	.controller('EditCtrl', function($scope, $location, book){
 		$scope.book = book;

 		$scope.save = function(){
 			$scope.book.$save(function(book){
 				$location.path('/');
 			});
 		};

 		$scope.backToList = function(){
            $location.path('/');
         };
 	});