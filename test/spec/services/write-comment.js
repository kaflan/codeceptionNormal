'use strict';

describe('Service: writeComment', function () {

  // load the service's module
  beforeEach(module('gitProjectApp'));

  // instantiate service
  var writeComment;
  beforeEach(inject(function (_writeComment_) {
    writeComment = _writeComment_;
  }));

  it('should do something', function () {
    expect(!!writeComment).toBe(true);
  });

});
