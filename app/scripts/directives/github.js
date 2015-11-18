'use strict';

/**
 * @ngdoc directive
 * @name gitProjectApp.directive:github
 * @description
 * # github
 */
angular.module('gitProjectApp')
  .directive('github', function () {
    return {
      templateUrl: 'views/github.html',
      restrict: 'E',
      controller: 'GithubCtrl'
    };
  });
