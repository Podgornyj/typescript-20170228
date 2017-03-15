//Task 1
function isInArray(entryArr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var entry = rest_1[_a];
        if (entryArr.indexOf(entry) == -1)
            return false;
    }
    return true;
}
function checkIfString(a) {
    return typeof a === 'string';
}
function NumberIsNaN(value) {
    return typeof value === 'number' && isNaN(value);
}
function summator() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, rest_2 = rest; _a < rest_2.length; _a++) {
        var i = rest_2[_a];
        result += checkIfString(i) ? (NumberIsNaN(parseInt(i, 10)) ? 0 : parseInt(i, 10)) : i;
    }
    return result;
}
console.log(summator(1, 2, 3, 4, '5'));
console.log(summator('1', 2, 3, 4, '5'));
//Task 3
function getUnique() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var uniqueArr = [];
    for (var _a = 0, rest_3 = rest; _a < rest_3.length; _a++) {
        var el = rest_3[_a];
        if (uniqueArr.indexOf(el) == -1)
            uniqueArr.push(el);
    }
    return uniqueArr;
}
//Task 4
function smartReverse(str) {
    var strParts = str.split(' ');
    var regex = /[а-яА-ЯёЁa-zA-Z]/;
    var result = [];
    for (var _i = 0, strParts_1 = strParts; _i < strParts_1.length; _i++) {
        var part = strParts_1[_i];
        var letters = part.split('');
        var lettersIndexes = [];
        for (var i = 0; i < letters.length; i++) {
            if (regex.test(letters[i])) {
                lettersIndexes.push(i);
            }
        }
        for (var j = 0; j < lettersIndexes.length / 2; j++) {
            var tmp = letters[lettersIndexes[j]];
            letters[lettersIndexes[j]] = letters[lettersIndexes[lettersIndexes.length - 1 - j]];
            letters[lettersIndexes[lettersIndexes.length - 1 - j]] = tmp;
        }
        result.push(letters.join(''));
    }
    return result.join(' ');
}
console.log(smartReverse('  s1tar3t 2   hellow ')); //  t1rat3s 2   wolleh
console.log(smartReverse('s1ta$%r3t 2 hel^low')); //t1ra$%t3s 2 wol^leh
console.log(smartReverse(' s1tar3t 2   low5  ')); // t1rat3s 2   wol5
