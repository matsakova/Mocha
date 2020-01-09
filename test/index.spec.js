const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, isAdult, isPalindrome, noSpace, maxValue, monkeyCount, divide, outed, addingProperty} = require ('../index.js');

describe('function sum',() => {
    it('should function sum equal 6', () => {
        assert.equal(sum(2, 4),6);
        expect(sum(2,4)).eq(6);
    });

    it('should function sum not equal 0', () => {
        assert.notEqual(sum(2, 4),0);
    });
});

it('should function mult equal 8', () => {
    assert.equal(mult(2, 4),8);
});

describe('function isAdult', () => {
    it('should function isAdult work correctly', () => {
        assert.equal(isAdult(16), false);
    });

    it ('should function isAdult work correctly', () => {
        assert.equal(isAdult(33), true);
    });

    it ('should function isAdult work correctly', () => {
        assert.notEqual(isAdult(-5), true);
    });

    it('should function isAdult work correctly', () => {
        assert.equal(isAdult(-88), undefined);
    });
});

describe('function isPalindrome', () => {
    it('should function isPalindrome return true', () => {
        assert.equal(isPalindrome('ogo'), true);
    });

    it('should function isPalindrome return false', () => {
        assert.equal(isPalindrome('abc'), false);
    });

    it('should function isPalindrome return true', () => {
        assert.equal(isPalindrome('AbBa'), true);
    });
});

describe ('function noSpace', () => {
    it ('should function noSpace return string without spaces', () => {
        assert.equal(noSpace('hello world how are you'), 'helloworldhowareyou');
    });

    it('should function noSpace return string without spaces', () => {
        assert.equal(noSpace('abcdefg'), 'abcdefg');
    });
});

describe ('function maxValue', () => {
    it ('should function maxValue return max', () => {
        assert.equal(maxValue([73,2,50,4,99,0]),99);
    });

    it ('should function maxValue not to return other than max value', () => {
        assert.notEqual(maxValue([9,7,16,88,-6,3]), 7);
    });
});


describe ('function monkeyCount', () => {
    it ('should function monkeyCount work correctly', () => {
        assert.deepEqual(monkeyCount(3), [1, 2, 3]);
    });

    it ('should function monkeyCount work correctly', () => {
        assert.notEqual(monkeyCount(0), []);
    });

    it ('should function monkeyCount work correctly', () => {
        assert.equal(monkeyCount(-7), undefined);
    });
});


describe ('function divide', () => {
    it ('should function divide equal null', () => {
        assert.equal(divide(2, 0), null);
    });

    it ('should function divide equal 3', () => {
        assert.equal(divide(15, 5), 3);
    });

    it ('should function divide equals 0', () => {
        assert.equal(divide(0, -7), 0);
    });
});

describe ('function outed', () => {
    it ('should function outed equal \'Get Out Now!\'', () => {
       assert.equal(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
    });

    it ('should function outed equal \'Nice Work Champ!\'', () => {
        assert.equal(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!');
    });
});


describe ('function addingProperty', () => {
    it ('should function addingProperty add a new property', () => {
        assert.deepEqual(addingProperty({'age': 21, 'occupancy': 'actor'}), {'age': 21, 'occupancy': 'actor', 'name': 'Sara'});
    });

    it ('should function addingProperty add a new property', () => {
        assert.deepEqual(addingProperty({'name': 'Michelle', 'age': 35}), {'name': 'Sara', 'age': 35});
    });
});




