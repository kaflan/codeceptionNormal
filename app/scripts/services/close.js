'use strict';

/**
 * @ngdoc service
 * @name gitProjectApp.close
 * @description
 * # close
 * Service in the gitProjectApp.
 */
angular.module('gitProjectApp')
  .service('close', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return{
      query: function(token) {
        var urlick = 'https://api.github.com/repos/:owner/:repo/comments/:id?access_token=' + token;
        return $http({
          method: 'PATCH',
          url: urlick,
          data:{state: 'close'}
        });
    }
    };
  });
/*
PATCH /repos/:owner/:repo/comments/:id


*/
