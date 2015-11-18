'use strict';

/**
 * @ngdoc function
 * @name gitProjectApp.controller:GithubCtrl
 * @description
 * # GithubCtrl
 * Controller of the gitProjectApp
 */
angular.module('gitProjectApp')
  .controller('GithubCtrl', function($scope, $location, GitHubAccess, $cookies){
    var user = $cookies.getAll();
        console.log(user);
    $scope.authentication = function(){
        console.log(GitHubAccess.query());
    };
  });
