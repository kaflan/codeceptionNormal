'use strict';

describe('Filter: gitApiFilter', function () {

  // load the filter's module
  beforeEach(module('gitProjectApp'));

  // initialize a new instance of the filter before each test
  var gitApiFilter;
  beforeEach(inject(function ($filter) {
    gitApiFilter = $filter('gitApiFilter');
  }));

  it('should return the input prefixed with "gitApiFilter filter:"', function () {
    var text = 'angularjs';
    expect(gitApiFilter(text)).toBe('gitApiFilter filter: ' + text);
  });

});
