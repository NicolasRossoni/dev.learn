let result = document.querySelector('.result');
let operation = null;
let previous = null;
let ok = 0;

function adjustFontSize() {
    let length = (document.querySelector('.calculator').clientWidth / window.innerHeight ) * 100;
    let digitCount = result.innerText.length;

    if (digitCount >= 6) {
        result.style.fontSize = `${length/digitCount * 1.4}vh`;
    } else {
        result.style.fontSize = `12vh`;
    }
}

function lightUpNumber(className) {
    let button = document.querySelector(`.${className}`);

    document.querySelector(`.reset`).innerText = 'C';

    button.style.backgroundColor = 'lightgray';
    

    setTimeout(() => {
        button.style.backgroundColor = '#333333'
    }, 200);
    
    if (result.innerText == '0' || ok == 0) {
        result.innerText = button.innerText;
        ok = 1;
    } else {
        result.innerText += button.innerText;
    }

    adjustFontSize();
}

function lightUpSpecial(className) {
    let button = document.querySelector(`.${className}`);

    button.style.backgroundColor = 'lightgray';

    setTimeout(() => {
        button.style.backgroundColor = 'gray';
    }, 200);

    adjustFontSize();
}

function lightUpOperation(className) {
    document.querySelectorAll('.divide, .multiply, .subtract, .sum, .equals').forEach(element => {
        element.style.backgroundColor = 'orange';
        element.style.color = 'white';
    });

    let button = document.querySelector(`.${className}`);

    button.style.backgroundColor = 'white';
    button.style.color = 'orange';

    if (className == 'equals'){
        setTimeout(() => {
            button.style.backgroundColor = 'orange';
            button.style.color = 'white';
        }, 200);
    }

    adjustFontSize();
}

function divide() {
    equals();
    previous = parseFloat(document.querySelector('.result').innerText);
    operation = '/';
    ok = 0;
    lightUpOperation('divide');
}
function multiply() {
    equals();
    previous = parseFloat(document.querySelector('.result').innerText);
    operation = '*';
    ok = 0;
    lightUpOperation('multiply');
}
function subtract() {
    equals();
    previous = parseFloat(document.querySelector('.result').innerText);
    operation = '-';
    ok = 0;
    lightUpOperation('subtract');
}
function sum() {
    equals();
    previous = parseFloat(document.querySelector('.result').innerText);
    operation = '+';
    ok = 0;
    lightUpOperation('sum');
}
function equals() { 
    switch (operation) {
        case '/':
            result.innerText = previous / parseFloat(result.innerText);
            break;
        case '*':
            result.innerText = previous * parseFloat(result.innerText);
            break;
        case '-':
            result.innerText = previous - parseFloat(result.innerText);
            break;
        case '+':
            result.innerText = previous + parseFloat(result.innerText);
            break;
        default:
            break;
    }
    operation = null;
    previous = null;
    ok = 0;
}


function reset() { 
    result.innerText = '0';
    operation = null;
    previous = null;
    ok = 0;
    document.querySelectorAll('.divide, .multiply, .subtract, .sum, .equals').forEach(element => {
        element.style.backgroundColor = 'orange';
        element.style.color = 'white';
    });
    document.querySelector(`.reset`).innerText = 'AC';
    lightUpSpecial('reset');
    adjustFontSize();
}
function signal() {
    if (parseFloat(result.innerText)  > 0) {
        result.innerText = '-' + result.innerText;
    } else if (parseFloat(result.innerText) < 0) {
        result.innerText = result.innerText.slice(1);
    }

    lightUpSpecial('signal'); 
}
function percentage() { 
    result.innerText = parseFloat(result.innerText)/100;
    lightUpSpecial('percentage'); 
}

function num0() { lightUpNumber('num0'); }
function num1() { lightUpNumber('num1'); }
function num2() { lightUpNumber('num2'); }
function num3() { lightUpNumber('num3'); }
function num4() { lightUpNumber('num4'); }
function num5() { lightUpNumber('num5'); }
function num6() { lightUpNumber('num6'); }
function num7() { lightUpNumber('num7'); }
function num8() { lightUpNumber('num8'); }
function num9() { lightUpNumber('num9'); }
function comma() { lightUpNumber('comma'); }

