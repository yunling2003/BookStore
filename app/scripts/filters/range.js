'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp
 * @description
 * # Range
 * Range filter of the teamBlogApp
 */
 angular.module('teamBlogApp.filters', [])
 	.filter('range', function() {
	  return function(input, total) {
	    total = parseInt(total);

	    for (var i = 1; i <= total; i++) {
	      input.push(i);
	    }

	    return input;
	  };
});
