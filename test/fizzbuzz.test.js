const expect = require('chai').expect;

const fizzBuzz = require('../fizzbuzz');

describe('fizzbuzz module', () => {
  describe('returns the number', () => {
    it('should return 8 when passed 8', () => {
      expect(fizzBuzz(8)).to.equal(8);
    });
    it('should return -8 when passed -8', () => {
      expect(fizzBuzz(-8)).to.equal(-8);
    });
  });
  describe('returns fizz', () => {
    it('should return Fizz when passed 3', () => {
      expect(fizzBuzz(3)).to.equal('Fizz');
    });
    it('should return Fizz when passed -3', () => {
      expect(fizzBuzz(-3)).to.equal('Fizz');
    });
    it('should return Fizz when passed 18', () => {
      expect(fizzBuzz(18)).to.equal('Fizz');
    });
  });
  describe('returns Buzz', () => {
    it('should return Buzz when passed 5', () => {
      expect(fizzBuzz(5)).to.equal('Buzz');
    });
    it('should return Fizz when passed -10', () => {
      expect(fizzBuzz(-10)).to.equal('Buzz');
    });
    it('should return Fizz when passed 25', () => {
      expect(fizzBuzz(25)).to.equal('Buzz');
    });
  });
  describe('returns fizzBuzz', () => {
    it('should return fizzBuzz when passed 15', () => {
      expect(fizzBuzz(15)).to.equal('fizzBuzz');
    });
    it('should return fizzBuzz when passed -15', () => {
      expect(fizzBuzz(-15)).to.equal('fizzBuzz');
    });
    it('should return fizzBuzz when passed 75', () => {
      expect(fizzBuzz(75)).to.equal('fizzBuzz');
    });
    it('should return fizzBuzz when passed 0', () => {
      expect(fizzBuzz(0)).to.equal('fizzBuzz');
    });
  });
});