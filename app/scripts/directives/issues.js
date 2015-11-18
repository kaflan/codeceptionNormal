'use strict';

/**
 * @ngdoc directive
 * @name gitProjectApp.directive:issues
 * @description
 * # issues
 */
angular.module('gitProjectApp')
  .directive('issues', function () {
    return {
      templateUrl: 'views/issues.html',
      restrict: 'E',
      controller: 'ListiessuesctrlCtrl'
    };
  });
