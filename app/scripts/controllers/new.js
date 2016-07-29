'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the teamBlogApp
 */
 angular.module('teamBlogApp')
   .controller('NewCtrl', function($scope, $location, Bookservice){
   		$scope.book = new Bookservice({});

   		$scope.save = function(){
   			$scope.book.$save(function(book){
   				$location.path('/');
   			});
   		};
   		
         $scope.backToList = function(){
            $location.path('/');
         };

   		$scope.imagepath = /\w+\/\w+\.jpg/;
   });