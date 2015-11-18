'use strict';

/**
 * @ngdoc function
 * @name gitProjectApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the gitProjectApp
 */
angular.module('gitProjectApp')
  .controller('SearchCtrl', function ($scope, $location, getListIssues) {
    $scope.searchRepo = function() {
    getListIssues.query($scope.org, $scope.repo).then(function(data) {
      $scope.issues = angular.copy(data);
    });
    $location.path('/' + $scope.org + '/' + $scope.repo + '/issues');
  };
  });
