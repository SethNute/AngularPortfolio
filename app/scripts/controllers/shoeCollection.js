'use strict';

/**
 * @ngdoc function
 * @name yeomanProjApp.controller:ShoeCollectionCtrl
 * @description
 * # ShoeCollectionCtrl
 * Controller of the yeomanProjApp
 */
angular.module('yeomanProjApp')
  .controller('ShoeCollectionCtrl', function ($scope, $http) {
    $http.get('JSON/jordans.json').success(function(data) {
    	$scope.jordanfirsts = data.splice(0, 5);
    	$scope.jordanseconds = data.splice(0, 5);
    	$scope.jordanthirds = data.splice(0, 5);
  	});
  });
