var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add two positive numbers', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can subtract two positive numbers', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can multiply two positive numbers', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('can divide two positive numbers', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 7);
  })

  it( 'concatenate multiple number button clicks', function(){
    calculator.numberClick(3);
    calculator.numberClick(3);
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 333);
  })

  it('chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 80);
  })

  it('clear the running total without affecting the calculation', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
    
  })

});
