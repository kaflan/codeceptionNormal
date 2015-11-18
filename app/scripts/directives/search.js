'use strict';

/**
 * @ngdoc directive
 * @name gitProjectApp.directive:search
 * @description
 * # search
 */
angular.module('gitProjectApp')
  .directive('search', function () {
    return {
      templateUrl: 'views/search.html',
      restrict: 'E',
      controller: 'SearchCtrl'
    };
  });
