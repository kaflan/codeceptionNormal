'use strict';

/**
 * @ngdoc service
 * @name gitProjectApp.writeComment
 * @description
 * # writeComment
 * Service in the gitProjectApp.
 */
angular.module('gitProjectApp')
  .service('writeComment', function($cookies, $http) {
    return {
      query: function(token, comment) {
        var urlick = 'https://api.github.com/repos/:owner/:repo/issues/:number/comments?access_token=' + token;
        return $http({
            method: 'GET',
            url: urlick,
            // headers: {
            //   'Content-Type': undefined
            // },
            data: {  "body": comment }
          });
      }
    };
  });
// https://api.github.com/repos/:owner/:repo/issues/:number/comments?access_token=...
/*
var req = {
method: 'POST',
url: 'http://example.com',
headers: {
  'Content-Type': undefined
},
data: { test: 'test' }

*/
