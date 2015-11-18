'use strict';

/**
 * @ngdoc function
 * @name gitProjectApp.controller:PagesCtrl
 * @description
 * # PagesCtrl
 * Controller of the gitProjectApp
 */
angular.module('gitProjectApp')
  .controller('PagesCtrl',  function(getListIssues, $scope, $routeParams) {
    $scope.issuesList = {};
    $scope.page = 1;
    $scope.previosPage = function() {
      if ($scope.page === 1) {
        return;
      }
      $scope.page--;
      // $scope.issuesList[$scope.page] = $scope.issues;
      $scope.issues = $scope.issuesList[$scope.page];
    };
    $scope.nextPage = function() {
      $scope.page++;
      getListIssues.queryPage($routeParams.org, $routeParams.repo, $scope.page).then(function(data) {
        $scope.issuesList[$scope.page] = angular.copy(data);
        $scope.issues = $scope.issuesList[$scope.page];
      });

    };
  });
