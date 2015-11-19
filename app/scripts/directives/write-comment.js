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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the writeComment directive');
      }
    };
  });
