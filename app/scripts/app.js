'use strict';

/**
 * @ngdoc overview
 * @name teamBlogApp
 * @description
 * # teamBlogApp
 *
 * Main module of the application.
 */
angular
  .module('teamBlogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'teamBlogApp.services',
    'teamBlogApp.filters',
    'teamBlogApp.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          books: function(BooksLoader){
            return BooksLoader();
          }
        }
      })
      .when('/new', {
        templateUrl: 'views/bookform.html',
        controller: 'NewCtrl',
        controllerAs: 'new'
      })
      .when('/edit/:bookId', {
        templateUrl: 'views/bookform.html',
        controller: 'EditCtrl',
        controllerAs: 'edit',
        resolve: {
          book: function(BookLoader){
            return BookLoader();
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('teamBlogApp.services', []);
angular.module('teamBlogApp.filters', []);
angular.module('teamBlogApp.directives', []);