'use strict';

/**
 * @ngdoc directive
 * @name gitProjectApp.directive:close
 * @description
 * # close
 */
angular.module('gitProjectApp')
  .directive('close', function () {
    return {
      template: '<input type="button"   value="Close issues" ng-click="closeRepo()">',
      restrict: 'E',
      controller: 'WriteCommentCtrl',
      controllerAs: 'write'
    };
  });
