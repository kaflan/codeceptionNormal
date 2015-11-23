'use strict';

describe('Service: close', function () {

  // load the service's module
  beforeEach(module('gitProjectApp'));

  // instantiate service
  var close;
  beforeEach(inject(function (_close_) {
    close = _close_;
  }));

  it('should do something', function () {
    expect(!!close).toBe(true);
  });

});
