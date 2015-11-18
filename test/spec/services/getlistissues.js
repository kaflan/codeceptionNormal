'use strict';

describe('Service: getListIssues', function () {

  // load the service's module
  beforeEach(module('gitProjectApp'));

  // instantiate service
  var getListIssues;
  beforeEach(inject(function (_getListIssues_) {
    getListIssues = _getListIssues_;
  }));

  it('should do something', function () {
    expect(!!getListIssues).toBe(true);
  });

});
