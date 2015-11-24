'use strict';

/**
 * @ngdoc function
 * @name gitProjectApp.controller:WriteCommentCtrl
 * @description
 * # WriteCommentCtrl
 * Controller of the gitProjectApp
 */
angular.module('gitProjectApp')
  .controller('WriteCommentCtrl', function ($scope, writeComment, $cookies, close) {
    var exemple = $cookies.getAll();

    $scope.comment;
    $scope.commentPush = function(){
      console.log(exemple);
    };
    $scope.admin = true;
    writeComment;
    close;
    $scope.closeRepo = function(){
    };
  });
