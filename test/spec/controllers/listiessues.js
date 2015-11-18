'use strict';

describe('Controller: ListiessuesctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('gitProjectApp'));

  var ListiessuesctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListiessuesctrlCtrl = $controller('ListiessuesctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListiessuesctrlCtrl.awesomeThings.length).toBe(3);
  });
});
