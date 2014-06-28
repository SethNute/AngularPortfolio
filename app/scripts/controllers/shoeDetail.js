'use strict';

/**
 * @ngdoc function
 * @name yeomanProjApp.controller:ShoeDetailCtrl
 * @description
 * # ShoeDetailCtrl
 * Controller of the yeomanProjApp
 */
angular.module('yeomanProjApp')
  .controller('ShoeDetailCtrl', function ($scope, $routeParams, $http) {
    $http.get('JSON/' + $routeParams.shoeName + '.json').success(function(data) {
    	$scope.shoes = data;
    });
  });
