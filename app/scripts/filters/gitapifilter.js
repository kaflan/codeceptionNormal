'use strict';

/**
 * @ngdoc filter
 * @name gitProjectApp.filter:gitApiFilter
 * @function
 * @description
 * # gitApiFilter
 * Filter in the gitProjectApp.
 */
angular.module('gitProjectApp')
  .filter('htmlParser', function(marked, $sce) {
      return function(text) {
        if (typeof(text) == 'string') {
          var message = (marked(text));
          return $sce.trustAsHtml(message);
        }
        return text;
      };
  });
