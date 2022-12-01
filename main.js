// buttons
const buttons = document.querySelectorAll('.digit')
buttons.forEach((button)=> button.addEventListener('click',getButtonValue));
function getButtonValue(e) {
    displayValue += (e.target.value)
    calculatorDisplay.innerText = displayValue;
};
const sumButton = document.querySelector('.sum');
sumButton.addEventListener('click',sum);

const subtractButton = document.querySelector('.subtract');
subtractButton.addEventListener('click',subtract);

const multiplyButton = document.querySelector('.multiply');
multiplyButton.addEventListener('click',multiply);

const divideButton = document.querySelector('.divide');
divideButton.addEventListener('click',divide);

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click',decimal);

//decimal();

function decimal () {
   let checkDecimal = Array.from(displayValue)
    if (!checkDecimal.includes(".")){
        checkDecimal.push('.');
        displayValue = checkDecimal.join("")
        return  calculatorDisplay.innerText = displayValue;
    }
    if (checkDecimal.includes(".")) {
        return  calculatorDisplay.innerText = displayValue;
    }
}

// negative

const negativeButton = document.querySelector('.negative');
negativeButton.addEventListener('click',negative);

function negative() {
 let negativeOf = parseFloat(displayValue)
  negativeOf = (negativeOf*-1).toString()
  displayValue = negativeOf;
  return calculatorDisplay.innerText = displayValue;
}


const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click',backspace);


function backspace () {
   let backspacedDisplay = [...displayValue]
   backspacedDisplay.pop()
   displayValue = backspacedDisplay.join("")
 return calculatorDisplay.innerText = displayValue;
}
//backspace()

const clearAllButton  = document.querySelector('.clearAll');
clearAllButton.addEventListener('click',clearAll)

// clear all

function clearAll(){
    displayValue = ''
    return calculatorDisplay.innerText = displayValue;
}

// operate();

let displayValue = [];
// defining operation functions
// function operate (a,b){
//     firstParam = parseInt(a);
//     secondParam = parseInt(b);
//     switch (true) {
//         case '+':
//         sum();
//         break;
//         case '-':
//         subtract();
//         break;
//         case 'x':
//         multiply()
//         break;
//         case '/':
//         divide();
//         break;
//     }

// }



function sum(a,b) {
 a = parseFloat(displayValue.join(""));
    return calculatorDisplay.innerText = a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b){
    if ( b === 0 ) {
        return 'lol'
    }else return a/b;
}
// divide by zero protection 

 //if ()

 // calculator display

 const calculatorDisplay = document.querySelector('.calculator-display');
 function updateDisplay () {
    if(!displayValue === '') {
     return calculatorDisplay.innerText = displayValue
   }
// FIX: try to implement display starting with 0 and 0 becoming uneffective in first digits unless decimal
//    if (displayValue === 0 || displayValue === '0'){
//     let handleZero = [... displayValue]
//     displayValue = handleZero.shift().join("")
//     console.log(handleZero)
//     return calculatorDisplay.innerText = displayValue;
//    }
}
updateDisplay();
