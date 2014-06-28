'use strict';

/**
 * @ngdoc function
 * @name yeomanProjApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the yeomanProjApp
 */
angular.module('yeomanProjApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
