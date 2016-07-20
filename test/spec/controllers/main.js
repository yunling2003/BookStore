'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('teamBlogApp'));

  var MainCtrl,
    scope,
    $httpBackend,
    sce;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $sce) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    sce = $sce;
    $httpBackend.expectGET('books.json')
                .respond([{'Name':'Silicon Valley', 'Description':'讲诉一个钢铁侠的故事', 'Price':'20$', 'src':'images/1.jpg'},
      {'Name':'Super IP', 'Description':'超级IP', 'Price':'35$', 'src':'images/2.jpg'}]);
    
    MainCtrl = $controller('MainCtrl', {
      $scope: scope    
      //$sce: sce
      // place here mocked dependencies
    });
  }));

  it('should attach a list of books to the scope', function () {
    expect(scope.pageCount).toBe(0);
    $httpBackend.flush();
    expect(scope.pageCount).toBe(1);
    expect(scope.orderProp).toBe('Name');
  });

  it('should highlight search text', function(){    
    expect(escape(scope.highlight('abcde', 'cd'))).toContain('highlighted');
  });
});
