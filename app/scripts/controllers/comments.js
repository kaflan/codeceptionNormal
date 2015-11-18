'use strict';

/**
 * @ngdoc function
 * @name gitProjectApp.controller:CommentsCtrl
 * @description
 * # CommentsCtrl
 * Controller of the gitProjectApp
 */
angular.module('gitProjectApp')
  .controller('CommentsCtrl', function(getListComments, $scope, $routeParams) {
    if ($routeParams.number !== undefined) {
      getListComments.query($routeParams.org, $routeParams.repo, $routeParams.number).then(function(data) {
        $scope.comments = angular.copy(data);
      });
    }
  })
