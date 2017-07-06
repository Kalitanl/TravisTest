const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app.js');


describe('App', function(){
  //it function actually tests a function
  it('app should return hello',function(){
    //app() is a function the second parameter is what we should get back
    let result = app.sayHello();
    assert.equal(result, 'hello');
  });
  it('sayHello should return type string',function(){
    let result = app.sayHello();
    assert.typeOf(result, 'string');
  });
  it('addNumbers should be above five',function(){
    let result = app.addNumbers(5,5);
    assert.isAbove(result, 20);
  });
});
