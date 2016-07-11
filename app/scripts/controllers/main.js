'use strict';

/**
 * @ngdoc function
 * @name teamBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamBlogApp
 */
angular.module('teamBlogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.books = [
      {'Name':'Silicon Valley', 'Description':'讲诉一个钢铁侠的故事', 'Price':'20$', 'src':'images/1.jpg'},
      {'Name':'Super IP', 'Description':'超级IP', 'Price':'35$', 'src':'images/2.jpg'},
      {'Name':'One Square Physical Exam', 'Description':'只需一平方米就可以健身', 'Price':'18$', 'src':'images/3.jpg'},
      {'Name':'Creative', 'Description':'开动脑筋创新', 'Price':'9$', 'src':'images/4.jpg'},
      {'Name':'Moon Over River', 'Description':'月光下过河', 'Price':'26$', 'src':'images/5.jpg'},
      {'Name':'Exposure', 'Description':'社会学知识', 'Price':'14$', 'src':'images/6.jpg'},
      {'Name':'Essence of Business', 'Description':'怎么样赚钱花', 'Price':'51$', 'src':'images/7.jpg'},
      {'Name':'Best Team', 'Description':'什么是最好的创业团队', 'Price':'47$', 'src':'images/8.jpg'},
      {'Name':'How do management', 'Description':'计划非常重要', 'Price':'88$', 'src':'images/9.jpg'},
      {'Name':'Internet Ecology', 'Description':'复杂的互联网生态', 'Price':'13$', 'src':'images/10.jpg'},
    ];
    $scope.orderProp = "Name";
  });
