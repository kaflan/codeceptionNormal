'use strict';

/**
 * @ngdoc function
 * @name gitProjectApp.controller:WriteCommentCtrl
 * @description
 * # WriteCommentCtrl
 * Controller of the gitProjectApp
 */
angular.module('gitProjectApp')
  .controller('WriteCommentCtrl', function ($scope, writeComment) {
    $scope.comment;
    $scope.commentPush = function(){
      
    };
    $scope.admin = true;
    writeComment;
  });
