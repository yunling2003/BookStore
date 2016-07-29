'use strict';



describe('range', function(){

	var range;

	beforeEach(module('teamBlogApp.filters'));

	beforeEach(inject(function($filter){
		range = $filter('range');
	}));

	it('should convert int to array', function(){
		expect(range).not.toEqual(null);
		expect(range([6], 3)).toEqual([6,1,2,3]);
	});
});