'use strict';

/**
 * @ngdoc function
 * @name yeomanProjApp.controller:ArcadeCtrl
 * @description
 * # ArcadeCtrl
 * Controller of the yeomanProjApp
 */
angular.module('yeomanProjApp')
  .controller('ArcadeCtrl', function ($scope, $http) {
    $http.get('JSON/arcade.json').success(function(data) {
    	$scope.games = data;
  });
