'use strict';

describe('Controller: CloseCtrl', function () {

  // load the controller's module
  beforeEach(module('gitProjectApp'));

  var CloseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CloseCtrl = $controller('CloseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CloseCtrl.awesomeThings.length).toBe(3);
  });
});
