const expect = require('chai').expect;

const adder = require('../adder');

describe('adder module', () => {
  describe('edge cases', () => {
    it('should return 0 when passed an empty array', () => {
      expect(adder([])).to.equal(0);
    });
  });
  describe('normal cases', () => {
    it('should return 5 when passed [2, 3]', () => {
      expect(adder([2,3])).to.equal(5);
    });
    it('should return -5 when passed [-2, -3]', () => {
      expect(adder([-2, -3])).to.equal(-5);
    });
  });
  it('should return 2.3 when passed an empty array', () => {
    expect(adder([0.1,2.2])).to.equal(2.3);
  });
});