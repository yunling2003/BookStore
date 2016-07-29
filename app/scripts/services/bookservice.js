'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp.services
 * @description
 * # Bookservice
 * Services of the teamBlogApp
 */
 angular.module('teamBlogApp.services')
 	.factory('Bookservice', ['$resource', function($resource){
 	return $resource('http://localhost:9002/books/:bookId',
 		{bookId: '@id'}, 
 		{'query': {headers : {'Cache-Control': 'no-cache' }, isArray:true}}
	);
 }]);

 angular.module('teamBlogApp.services')
 	.factory('BooksLoader', ['Bookservice', '$q', function(Bookservice, $q){
 		return function(){
 			var delay = $q.defer();
 			Bookservice.query(function(books){
 				delay.resolve(books);
 			}, function(){
 				delay.reject('Unable to fetch books');
 			});
 			return delay.promise;
 		};
 	}]);

 angular.module('teamBlogApp.services')
 	.factory('BookLoader', ['Bookservice', '$route', '$q', function(Bookservice, $route, $q){
 		return function(){
 			var delay = $q.defer();
 			Bookservice.get({bookId: $route.current.params.bookId}, function(book){
 				delay.resolve(book);
 			}, function(){
 				delay.reject('Unable to fetch book ' + $route.current.params.bookId);
 			});
 			return delay.promise;
 		};
 	}])