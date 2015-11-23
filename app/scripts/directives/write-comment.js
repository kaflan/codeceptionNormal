'use strict';

/**
 * @ngdoc directive
 * @name gitProjectApp.directive:writeComment
 * @description
 * # writeComment
 */
angular.module('gitProjectApp')
  .directive('writeComment', function () {
    return {
      templateUrl: 'views/write-comment.html',
      restrict: 'E',
      controller: 'WriteCommentCtrl',
      controllerAs: 'write'
    };
  });
