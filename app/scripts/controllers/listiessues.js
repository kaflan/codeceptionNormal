'use strict';

/**
 * @ngdoc function
 * @name gitProjectApp.controller:ListiessuesctrlCtrl
 * @description
 * # ListiessuesctrlCtrl
 * Controller of the gitProjectApp
 */
angular.module('gitProjectApp')
  .controller('ListiessuesctrlCtrl', function($scope, getListIssues, $routeParams) {
      $scope.org = $routeParams.org;
      $scope.repo = $routeParams.repo;
      getListIssues.query($routeParams.org, $routeParams.repo)
        .then(function(data) {
          $scope.issues = angular.copy(data);
          if ($routeParams.number) {
            $scope.number = $routeParams.number;
            var issue = $scope.issues.filter(function(item) {
              return item.number == $scope.number;
            });
            if (!issue.length) return;
            $scope.issue = issue[0];
          }
        });
  });
