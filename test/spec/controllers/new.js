'use strict';

describe('Controller: NewCtrl', function(){

	beforeEach(module('teamBlogApp'));

	var mockBackend, location, scope, newCtrl;

	beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $location){
		mockBackend = _$httpBackend_;
		location = $location;
		scope = $rootScope.$new();

		newCtrl = $controller('NewCtrl', {
			$scope: scope,
			$location: location
		});		
	}));

	it('should save the book', function(){
		mockBackend.expectPOST('http://localhost:9002/books').respond({Id: 1, Name:'test'});
		location.path('test');

		scope.save();
		expect(location.path()).toEqual('/test');

		mockBackend.flush();
		expect(location.path()).toEqual('/');
	});

	it('should redirect to list', function(){
		location.path('test');

		scope.backToList();
		expect(location.path()).toEqual('/');
	})
});