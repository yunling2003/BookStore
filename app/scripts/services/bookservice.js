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
 		{bookId: '@id'}, {'query': {headers : {'Cache-Control': 'no-cache' }, isArray:true}}
	);
 }]);