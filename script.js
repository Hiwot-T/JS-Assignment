// Number 1

function reverse(number) {
    number += "";
    return number.split("").reverse().join("");
}
console.log(reverse(456978));

//Number 2
function palindrome(str) {
    let init = Math.floor(str.length / 2);
    for (let i = 0; i < init; i++)
        if (str[i] === str[str.length - i - 1]) {
            return "It is a palindrome!"
        } else {
            return "Not a palindrome!";
        }

}
console.log(palindrome('rotator'));

//Number 3

function myFunc(str) {
    eachList = new Array();
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            eachList.push(str.slice(i, j));
        }
    }
    return eachList;
}

console.log(myFunc("Hello"));

//Number 4

function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log(alphabeticalOrder("swimming"));

//Number 5

function upperCase(str) {
    let eachWord = str.toLowerCase().split(' ');
    for (let i = 0; i < eachWord.length; i++) {
        eachWord[i] = eachWord[i].charAt(0).toUpperCase() +
            eachWord[i].substring(1);
    }
    return eachWord.join(' ');
}
console.log(upperCase("coding is fun"));

//Number 6

const longestWord = (str) => {
    let newStr = str.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < newStr.length; i++) {
        if (longest < newStr[i].length) {
            longest = newStr[i].length;
            word = newStr[i];
        }
    }
    return word;
}
console.log(longestWord("It is raining"));

//Number 7

const vowelsCount = (str) => {
    let vowel = str.match(/[aeiou]/gi);
    return vowel === null ? "None" : vowel.length;
}
console.log(vowelsCount("stretching"));

//Number 8 

const isPrime = num => {
    if (num === 1) {
        return "Neither"
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return "Not a prime";
            }
            return 'Prime';
        }
    }
}
console.log(isPrime(1));

//Number 9

function dataType(input) {
    if (typeof input === "object") {
        return 'Object';
    } else if (typeof input === "number") {
        return "Number"
    }
    else if (typeof input === "boolean") {
        return "Boolean"
    }
    else if (typeof input === "function") {
        return "Function"
    }
    else if (typeof input === "string") {
        return "String"
    }
    else (typeof input === "undefined")
    return "Object"
}
console.log(dataType(function name(params) {

}));

//Number 10 

function rowsColumns(num) {

    for (let i = 0; i < num; i++) {

        for (let j = 0; j < num; j++) {
            if (i === j) {

                return ' 1 ';
            }

            else {
                return ' 0 ';
            }
        }

    }
}
console.log(rowsColumns(10));

//Number 11


const second = (num) => {
    num.sort(function (a, b) {
        return a - b;
    });

    let first = [num[0]];
    let result = [];

    for (let j = 1; j < num.length; j++) {
        if (num[j - 1] !== num[j]) {
            first.push(num[j]);
        }
    }

    result.push(first[1], first[first.length - 2]);
    return result.join(',');

}

console.log(second([7, 8, 9, 10, 11, 12]));

//Number 12

const isPerfect = (number) => {
    let num1 = 0;
    for (let i = 0; i < number; i++) {
        if (number % i == 0) {
            num1 += i;
        }
    }

    if (num1 == number) {
        return `${number} is a perfect number!`;
    }

    else {
        return `${number} is not a perfect number!`;
    }
}
console.log(isPerfect(8128));

//Number 13

const factors = (num) => [...Array(num + 1).keys()].filter(i => num % i === 0);
console.log(factors(24));

//Number 14


const billToCoins = (bill, coins) => {

    if (bill === 0) {
        return [];
    }
    else {
        if (bill >= coins[0]) {
            left = (bill - coins[0]);
            return [coins[0]].concat(billToCoins(left, coins));
        }
        else {
            coins.shift();
            return billToCoins(bill, coins);
        }
    }
}
console.log(billToCoins(46, [25, 10, 5, 2, 1]));

//Number 15

const baseExpo = (base, expo) => {
    let result = 1;
    for (i = 0; i < expo; i++) {
        result *= base;
    }
    return result;
}
console.log(baseExpo(2, 4));

//Number 16

const uniqueCharacters = str => {

    let unique = "";

    for (let i = 0; i < str.length; i++) {

        if (unique.includes(str[i]) === false) {

            unique += str[i]
        }
    }
    return unique;
}
console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

//Number 17

const occurence = str => {
    let string = str.split("").sort().join("");
    let howMany = 1;
    for (let i = 0; i < str.length; i++) {
        if (string[i] == string[i + 1]) {
            howMany++;
        } else {
            console.log(string[i] + " " + howMany);
            howMany = 1;
        }
    }
}
console.log(occurence('how are you?'));

//Number 18

const binarySearch = (array, ele) => {
    let mid = Math.floor(array.length / 2);

    if (array[mid] === ele) {
        return mid;
    }
    else if (array.length === 1) {
        return null;
    }
    else if (array[mid] < ele) {
        let arr = array.slice(mid + 1);
        let con = binarySearch(arr, ele);
        if (con === null) {
            return null;
        }
        else {
            return mid + 1 + con;
        }
    }
    else {
        let arr1 = array.slice(0, mid);
        return binarySearch(arr1, ele);
    }
}

console.log(binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6));

//Number 19

const returnLarger = (arr, num) => arr.filter(greaterNumber => greaterNumber > num);

console.log(returnLarger([1, 2, 3, 4, 5, 6], 3));

//Number 20

const stringId = length => {
    let final = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        final += characters.charAt(Math.floor(Math.random() *
            characters.length));
    }
    return final;
}

console.log(stringId(8));

// Number 21


const subset = (input, num) => {
    let final = [], result, j, total = Math.pow(2, input.length);
    for (let i = num; i < total; i++) {
        result = [];
        j = input.length - 1;

        do {
            if ((i & (1 << j)) !== 0) {
                result.push(input[j]);
            }
        } while (j--);

        if (result.length >= num) {
            final.push(result);
        }
    }

    return final;
};
console.log(subset([1, 2, 3], 2));

//Number 22

const letterCount = (str, letter) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return `${letter} occured ${count} times`;
}

console.log(letterCount('Hello world!', 'l'));

//Number 23

const firstNonRepeatedCharacter = str => {
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        if (str.indexOf(letter) == i && str.indexOf(letter, i + 1) == -1) {
            return letter;
        }
    }
    return null;
}
console.log(firstNonRepeatedCharacter('abacddbec'));

//Number 24

const bubbleSort = arr => {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//Number 25

const longestCountryName = name => {
    let initialValue = "";

    return name.reduce(function (previousValue, currentValue) {
        return previousValue.length > currentValue.length ? previousValue : currentValue;
    }, initialValue);
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

//Number 26


const longestSubstring = s => {
    let longest = 0;
    let start = 0;
    let input = {};

    [...s].forEach((char, i) => {
        if (char in input && start <= input[char]) {
            longest = Math.max(i - start, longest);
            start = input[char] + 1;
        }

        input[char] = i;
    });

    return Math.max(s.length - start, longest);
};
console.log(longestSubstring('How are you doing?'))

// Number 27

const longestPalindrome = string => {

    var len = string.length;
    let output = "";

    const centeredPalindrome = (left, right) => {
        while (left >= 0 && right < len && string[left] === string[right]) {

            left--;
            right++;
        }

        return string.slice(left + 1, right);
    };

    for (let i = 0; i < len - 1; i++) {
        let oddPal = centeredPalindrome(i - 1, i + 1);
        let evenPal = centeredPalindrome(i, i + 1);

        if (oddPal.length > output.length)
            output = oddPal;
        if (evenPal.length > output.length)
            output = evenPal;
    }

    return output;
};

console.log(longestPalindrome('noon'));

//Number 28


const farewell = () => {
    return 'Goodbye,';
}

const names = (func, user) => {

    const message = func();

    console.log(`${message} ${user}`);
}

names(farewell, 'Fre');

//Number 29

function nameOfThisFunction() {
    let thisFunc = arguments.callee.toString();
    thisFunc = thisFunc.substring('function '.length);
    thisFunc = thisFunc.substring(0, thisFunc.indexOf('('));
    return thisFunc;
}
console.log(nameOfThisFunction);