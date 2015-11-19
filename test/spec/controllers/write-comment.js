'use strict';

describe('Controller: WriteCommentCtrl', function () {

  // load the controller's module
  beforeEach(module('gitProjectApp'));

  var WriteCommentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WriteCommentCtrl = $controller('WriteCommentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WriteCommentCtrl.awesomeThings.length).toBe(3);
  });
});
