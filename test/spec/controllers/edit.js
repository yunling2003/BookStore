'use strict';

describe('Controller: EditCtrl', function(){

	beforeEach(module('teamBlogApp'));

	var mockBackend, location, scope, editCtrl;

	beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $location, Bookservice){
		mockBackend = _$httpBackend_;
		location = $location;
		scope = $rootScope.$new();

		editCtrl = $controller('EditCtrl', {
			$scope: scope,
			$location: location,
			book: new Bookservice({Id: 1, Name: 'test'})
		});
	}));

	it('should save the book', function(){
		mockBackend.expectPOST('http://localhost:9002/books').respond({Id:1, Name: 'test'});
		location.path('test');

		scope.save();
		expect(location.path()).toEqual('/test');

		mockBackend.flush();
		expect(location.path()).toEqual('/');
	});
});