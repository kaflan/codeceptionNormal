'use strict';

describe('Directive: issues', function () {

  // load the directive's module
  beforeEach(module('gitProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<issues></issues>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the issues directive');
  }));
});
