'use strict';

/**
 * @ngdoc overview
 * @name yeomanProjApp
 * @description
 * # yeomanProjApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanProjApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/ShoeCollection', {
        templateUrl: 'views/shoeCollection.html',
        controller: 'ShoeCollectionCtrl'
      })
      .when('/ShoeCollection/:shoeName', {
        templateUrl: 'views/shoe-detail-template.html',
        controller: 'ShoeDetailCtrl'
      })
      .when('/Hobbies', {
        templateUrl: 'views/hobbies.html',
        controller: 'HobbiesCtrl'
      })
      .when('/Arcade', {
        templateUrl: 'views/arcade.html',
        controller: 'ArcadeCtrl' 
      })
      .when('/Resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl'
      })
      .when('/Basketball', {
        templateUrl: 'views/basketball.html',
        controller: 'HobbiesCtrl'
      })
      .when('/Smash', {
        templateUrl: 'views/smash.html',
        controller: 'HobbiesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
