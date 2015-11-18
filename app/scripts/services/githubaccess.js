'use strict';

/**
 * @ngdoc service
 * @name gitProjectApp.GitHubAccess
 * @description
 * # GitHubAccess
 * Service in the gitProjectApp.
 */
angular.module('gitProjectApp')
  .service('GitHubAccess', function($http) {
      return {
        query: function() {
          return $http.get('/auth/github').success(function(res) {
            var list = angular.copy(res);
            return list;
          });
        }
      };
  });
