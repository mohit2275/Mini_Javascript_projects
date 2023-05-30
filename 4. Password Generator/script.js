let lowerSet = 'abcdefghijklmnopqrstuvwxyz';
let upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numberSet = '0123456789';
let symbolSet = '!@#$%^&*()_+=';

let passBox = document.getElementById('pass-box');
let totalChar = document.getElementById('total-char');
let upperInput = document.getElementById('upper-case');
let lowerInput = document.getElementById('lower-case');
let numberInput = document.getElementById('numbers');
let symbolInput = document.getElementById('symbols');


let getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

let generatePassword = (password = '') => {
    if (upperInput.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet);
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet);
    }

    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = password.substring(0, totalChar.value)
}


generatePassword()






let set = 'ABCDERFGHY'

console.log(set[0]);