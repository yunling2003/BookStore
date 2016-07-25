'use strict'

describe('BooksLoader', function(){

    beforeEach(function(){
		jasmine.addMatchers({
			toEqualData: function(util, customEqualityTesters){
				return {
					compare: function(actual, expected){
						return angular.equals(actual, expected);		
					}
				}; 
			}
		});
	});

	beforeEach(function(){
		module('teamBlogApp.services');
		module('ngResource');
	});

	var mockBackend, bookService, loader;

	beforeEach(inject(function(_$httpBackend_, BooksLoader) {		
		mockBackend = _$httpBackend_;						
		loader = BooksLoader;
	}));	

	it('should load list of books', function(){
		mockBackend.expectGET('http://localhost:9002/books').respond([{id: 1}, {id: 2}]);
		var books, promise;		
		promise = loader();
		promise.then(function(returnedBooks){
		 	books = returnedBooks;
		});

		expect(books).toBeUndefined();
		mockBackend.flush();
		expect(books.length).toBe(2);
		//expect(books).toEqualData([{id: 1}, {id: 2}]);
	});
});