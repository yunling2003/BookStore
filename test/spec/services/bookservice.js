'use strict';

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

	var mockBackend, loader;

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

describe('BookLoader', function(){
	beforeEach(function(){
		module('teamBlogApp.services');
		module('ngResource');
		module('ngRoute');
	});

	var mockBackend, loader, route;

	beforeEach(inject(function(_$httpBackend_, _$route_, BookLoader) {		
		mockBackend = _$httpBackend_;						
		loader = BookLoader;		
		route = _$route_;
		route.current = {params: {bookId: 1}};		
	}));	

	it('should load a book', function(){
		mockBackend.expectGET('http://localhost:9002/books/1').respond({Id: 1, Name:'test'});
		var book, promise;
		promise = loader();
		promise.then(function(returnedBook){			
			book = returnedBook;
		});

		expect(book).toBeUndefined();
		mockBackend.flush();		
		expect(book.Id).toBe(1);
	});
});