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
    var profile = $cookies.get('profile');
    var token = $cookies.get('token');
    // JSON.parse(profile)
    $scope.comment;
    $scope.commentPush = function(){
      console.log(token, JSON.parse(profile));
    };
    $scope.admin = true;
    writeComment;
    close;
    $scope.closeRepo = function(){
    };
  });
