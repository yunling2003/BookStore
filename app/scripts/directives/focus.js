'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp
 * @description
 * # Focus
 * Focus directive of the teamBlogApp
 */
 angular.module('teamBlogApp.directives', [])
 	.directive('focus', function(){
 		return {
 			link: function(scope, element, attrs){
 				element[0].focus();
 			}
 		};
 	});