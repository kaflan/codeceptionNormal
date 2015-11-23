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
    $scope.comment;
    $scope.commentPush = function(){
    };
    $scope.admin = true;
    writeComment;
    close;
    $scope.closeRepo = function(){

    };
  });
