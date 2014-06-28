'use strict';

/**
 * @ngdoc function
 * @name yeomanProjApp.controller:HobbiesCtrl
 * @description
 * # HobbiesCtrl
 * Controller of the yeomanProjApp
 */
angular.module('yeomanProjApp')
  .controller('HobbiesCtrl', function ($scope, $http) {
  	$http.get('JSON/hobbies.json').success(function(data) {
    	$scope.hobbs = data.splice();
  	});
  });
