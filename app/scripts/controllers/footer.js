'use strict';

/**
 * @ngdoc function
 * @name yeomanProjApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the yeomanProjApp
 */
angular.module('yeomanProjApp')
  .controller('FooterCtrl', function ($scope, $http) {
    $http.get('JSON/charmbar.json').success(function(data) {
    	$scope.charms = data;
  	});
  });