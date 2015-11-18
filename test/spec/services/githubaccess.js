'use strict';

describe('Service: GitHubAccess', function () {

  // load the service's module
  beforeEach(module('gitProjectApp'));

  // instantiate service
  var GitHubAccess;
  beforeEach(inject(function (_GitHubAccess_) {
    GitHubAccess = _GitHubAccess_;
  }));

  it('should do something', function () {
    expect(!!GitHubAccess).toBe(true);
  });

});
