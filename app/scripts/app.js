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
    'teamBlogApp.filters'    
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