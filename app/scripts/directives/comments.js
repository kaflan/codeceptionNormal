'use strict';

/**
 * @ngdoc directive
 * @name gitProjectApp.directive:comments
 * @description
 * # comments
 */
angular.module('gitProjectApp')
  .directive('comments', function () {
    return {
      template: 'views/comments.html',
      restrict: 'E',
      controller: 'CommentsCtrl'
    };
  });
