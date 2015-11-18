'use strict';

/**
 * @ngdoc directive
 * @name gitProjectApp.directive:pages
 * @description
 * # pages
 */
angular.module('gitProjectApp')
  .directive('pages', function () {
    return {
      templateUrl: 'views/pages.html',
      restrict: 'E',
      controller: 'PagesCtrl'
    };
  });
