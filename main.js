/* eslint-disable class-methods-use-this */
function capitalize(string) {
    const char = string.charAt(0).toUpperCase();
    const returnString = char + string.substring(1);
    return returnString;
}

function reverseString(string) {
    let returnString = "";
    for (let i = string.length - 1; i >= 0; i-=1) {
        returnString += string.charAt(i);
    }
    return returnString;
}

class Calculator {
    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        return x / y;
    }
}

function caesarHelper(index, factor) {
    if (index + factor > 25) {
        return index + factor - 26;
    }
    return index + factor;
}

function caesarCipher(string, factor) {
    const array = "abcdefghijklmnopqrstuvwxyz".split('');
    const array2 = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');

    let returnString = "";

    for (let i = 0; i < string.length; i += 1) {
        let char = string.at(i);
        if (array.includes(char)) {
            const index = array.indexOf(char);
            char = array[caesarHelper(index, factor)]
        } else if (array2.includes(char)) {
            const index = array2.indexOf(char);
            char = array2[caesarHelper(index, factor)]
        }
        returnString += char;
    }

    return returnString;
}

function analyzeArray(array) {
    const arr = new Object();
    arr.length = array.length;

    let tempMin = array[0];
    let tempMax = array[0];
    let sum = 0;

    for (let i = 0; i < array.length; i+=1) {
        if (array[i] < tempMin) {
            tempMin = array[i];
        }
        if (array[i] > tempMax) {
            tempMax = array[i];
        }
        sum += array[i];
    }
    
    arr.min = tempMin;
    arr.max = tempMax;
    arr.average = Math.round(sum / array.length);

    return arr;
}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };