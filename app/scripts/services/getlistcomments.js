'use strict';

/**
 * @ngdoc service
 * @name gitProjectApp.getListComments
 * @description
 * # getListComments
 * Factory in the gitProjectApp.
 */
angular.module('gitProjectApp')
  .factory('getListComments', function($http) {
      return {
        query: function(org, repo, number) {
          var url = 'https://api.github.com/repos/' + org + '/' + repo + '/issues' + '/' + number + '/' + 'comments';
          return $http.get(url).then(function(res) {
            var list = angular.copy(res.data);
            return list;
          });
        }
      };
  });
