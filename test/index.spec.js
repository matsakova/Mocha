const {expect} = require('chai');

const {sum, mult, isAdult, isPalindrome, noSpace, maxValue, monkeyCount, divide, outed, addingProperty} = require ('../index.js');

describe('function sum',() => {
  it('should function sum equal 6', () => {
    expect(sum(2,4)).eq(6);
  });

  it('should function sum not equal 0', () => {
    expect(sum(2, 4)).to.not.equal(0);
  });
});

it('should function mult equal 8', () => {
  expect(mult(2,4)).eq(8);
});

describe('function isAdult', () => {
  it('should function isAdult(16) return false', () => {
    expect(isAdult(16)).false;
  });

  it('should function isAdult(33) return true', () => {
    expect(isAdult(33)).true;
  });

  it('should function isAdult(-5) not to return true', () => {
    expect(isAdult(-5)).not.true;
  });

  it('should function isAdult(-88) return undefined', () => {
    expect(isAdult(-88)).undefined;
  });

  it('should function isAdult("abcdef") return undefined', () => {
    expect(isAdult('abcdef')).undefined;
  });

  it('should function isAdult() return undefined', () => {
    expect(isAdult()).undefined;
  });
});

describe('function isPalindrome', () => {
  it('should function isPalindrome("ogo") return true', () => {
    expect(isPalindrome('ogo')).true;
  });

  it('should function isPalindrome("abc") return false', () => {
    expect(isPalindrome('abc')).false;
  });

  it('should function isPalindrome("AbBa") return true', () => {
    expect(isPalindrome('AbBa')).true;
  });

  it('should function isPalindrome(ogo AbBa") return false', () => {
    expect(isPalindrome('ogo AbBa')).false;
  });

  it('should function isPalindrome("") return true', () => {
    expect(isPalindrome('')).true;
  });

  it('should function isPalindrome(111) return "this is not a string!" ', () => {
    expect(isPalindrome(111)).eq('this is not a string!');
  });

  it('should function isPalindrome([5,6,7]) return "this is not a string!" ', () => {
    expect(isPalindrome([5,6,7])).eq('this is not a string!');
  });
});

describe ('function noSpace', () => {
  it ('should function noSpace("hello world how are you") return "helloworldhowareyou" ', () => {
    expect(noSpace('hello world how are you')).eq('helloworldhowareyou');
  });

  it('should function noSpace("abcdefg") return "abcdefg" ', () => {
    expect(noSpace('abcdefg')).eq('abcdefg');
  });

  it('should function noSpace("   abc def  ") return "abcdef" ', () => {
    expect(noSpace('   abc def  ')).eq('abcdef');
  });

  it('should function noSpace("  3 qwerty\n\rabcd " ") return "3qwerty\n\rabcd" ', () => {
    expect(noSpace('  3 qwerty\n\rabcd ')).eq('3qwerty\n\rabcd');
  });
});

describe ('function maxValue', () => {
  it ('should function maxValue([73,2,50,4,99,0]) return 99', () => {
    expect(maxValue([73,2,50,4,99,0])).eq(99);
  });

  it ('should function maxValue([9,7,16,88,-6,3]) not to return 7', () => {
    expect(maxValue([9,7,16,88,-6,3])).not.eq(7);
  });

  it('should function maxValue("123456") return undefined', () => {
    expect(maxValue('123456')).undefined;
  });
});


describe ('function monkeyCount', () => {
  it ('should function monkeyCount(3) return [1,2,3]', () => {
    expect(monkeyCount(3)).deep.eq([1,2,3]);
  });

  it ('should function monkeyCount(0) return []', () => {
    expect(monkeyCount(0)).deep.eq([]);
  });

  it ('should function monkeyCount(-7) return undefined', () => {
    expect(monkeyCount(-7)).undefined;
  });
});


describe ('function divide', () => {
  it ('should function divide(2,0) return null', () => {
    expect(divide(2,0)).null;
  });

  it ('should function divide(15,5) return 3', () => {
    expect(divide(15,5)).eq(3);
  });

  it ('should function divide(0,-7) return 0', () => {
    expect(divide(0,-7)).eq(0);
  });

  it('should function divide("a",2) return NaN', () => {
    expect(divide('a', 2)).NaN;
  });
});

describe ('function outed', () => {
  it ('should function outed return "Get Out Now!" ', () => {
    expect(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')).eq('Get Out Now!');
  });

  it ('should function outed return "Nice Work Champ!" ', () => {
    expect(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie')).eq('Nice Work Champ!');
  });
});


describe ('function addingProperty', () => {
  it ('should function addingProperty return {"age": 21, "occupancy": "actor", "name": "Sara"}', () => {
    expect(addingProperty({'age': 21, 'occupancy': 'actor'})).deep.eq({'age': 21, 'occupancy': 'actor', 'name': 'Sara'});
  });

  it ('should function addingProperty return {"name": "Sara", "age": 35}', () => {
    expect(addingProperty({'name': 'Michelle', 'age': 35})).deep.eq({'name': 'Sara', 'age': 35});
  });

  it('should function addingproperty([1,2,3]) return [1,2,3]', () => {
    expect(addingProperty([1,2,3])).deep.eq([1,2,3]);
  });

  it('should function addingProperty("abcdef") return "abcdef" ', () => {
    expect(addingProperty('abcdef')).eq('abcdef');
  });
});




