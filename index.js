function sum (a,b){
    return a + b;
}
function mult(a, b){
    return a * b;
}

function isAdult(number){
    if (number < 21 && number >= 0) return false;
    else if (number >= 21) return true;
}

function isPalindrome(str){
    let s = '';
    if (typeof(str) === 'string') {
        for (let i = str.length - 1; i >= 0; i--) {
            s += str[i];
        }
        return s.toLowerCase() === str.toLowerCase();
    } else return 'this is not a string!';
}

function noSpace(x){
    return x.split(' ').join('');
}

function maxValue(arr) {
    if (Array.isArray(arr)) return Math.max(...arr);
    else return undefined;
}

function monkeyCount(n){
    const array = [];
    if (n < 0) return undefined;
    else {
        for (let i = 1; i <= n; i++) {
            array.push(i);
        }
    }
    return array;
}

function divide(num1, num2){
    if (num2 === 0) return null;
    else return num1 / num2;
}

function outed(meet, boss){
    let sum = 0;
    let count = 0;
    for(let key in meet) {
        if (key === boss) sum = sum + meet[key] + meet[boss];
        else sum = sum + meet[key];
        count += 1;
    }
    return (sum / count <= 5) ? 'Get Out Now!' : 'Nice Work Champ!';
}


function addingProperty(obj){
    obj.name = 'Sara';
    return obj;
}

module.exports = {sum, mult, isAdult, isPalindrome, noSpace, maxValue, monkeyCount, divide, outed, addingProperty};