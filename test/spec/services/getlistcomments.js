'use strict';

describe('Service: getListComments', function () {

  // load the service's module
  beforeEach(module('gitProjectApp'));

  // instantiate service
  var getListComments;
  beforeEach(inject(function (_getListComments_) {
    getListComments = _getListComments_;
  }));

  it('should do something', function () {
    expect(!!getListComments).toBe(true);
  });

});
