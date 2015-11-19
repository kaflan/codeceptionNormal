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
        templateUrl: 'views/showissues.html',
        controller: 'ListiessuesctrlCtrl',
        controllerAs: 'list'
      })
      .when('/write-comment', {
        templateUrl: 'views/write-comment.html',
        controller: 'WriteCommentCtrl',
        controllerAs: 'writeComment'
      })
      .otherwise({
        redirectTo: '/'
      });
        $locationProvider.html5Mode(true);
  })
  .config(['markedProvider', function(markedProvider) {
    markedProvider.setOptions({
      gfm: true
    });
  }]);
