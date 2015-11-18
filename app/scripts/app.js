'use strict';

/**
 * @ngdoc overview
 * @name gitProjectApp
 * @description
 * # gitProjectApp
 *
 * Main module of the application.
 */
angular
  .module('gitProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hc.marked'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/:org/:repo/issues/', {
        templateUrl: 'views/showissues.html',
        controller: 'ListiessuesctrlCtrl',
        controllerAs: 'list'
      })
      .when('/:org/:repo/issues/:number', {
        templateUrl: 'views/comments.html',
        controller: 'CommentsCtrl',
        controllerAs: 'comments'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['markedProvider', function(markedProvider) {
    markedProvider.setOptions({
      gfm: true
    });
  }]);
