'use strict';

/**
 * @ngdoc service
 * @name gitProjectApp.getListIssues
 * @description
 * # getListIssues
 * Factory in the gitProjectApp.
 */
angular.module('gitProjectApp')
  .factory('getListIssues',function($http, $q) {
      return {
        issues: [],
        query: function(org, repo) {
          return this.queryPage(org, repo, 1);
        },
        queryPage: function(org, repo, page) {
          var self = this;
          // cache
          if (this.issues[page]) {
            return $q(function(resolve) {
              resolve(self.issues[page]);
            });
          }
          var url = 'https://api.github.com/repos/' + org + '/' + repo + '/issues\?page\=' + page;
          return $http.get(url).then(function(res) {
            var list = angular.copy(res.data);
            return self.issues[page] = list;
          });
        }
      };
  });
