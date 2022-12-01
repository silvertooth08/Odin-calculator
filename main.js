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

// FIX decimal not showing immediately on screen
function decimal () {
   let checkDecimal = Array.from(displayValue)

   console.log(typeof displayValue)
   console.log(typeof checkDecimal)
   console.log(checkDecimal)
    if (!checkDecimal.includes(".")){
        checkDecimal.push('.');
        displayValue = checkDecimal.join("")
        return displayValue
    }
    if (checkDecimal.includes(".")) {
        return console.log( displayValue.toString())
    }
}

//decimal();

const negativeButton = document.querySelector('.negative');
negativeButton.addEventListener('click',negative);

function negative() {
 let negativeOf = parseInt(displayValue)
 return displayValue = (negativeOf*-1).toString;
}


const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click',backspace);

function backspace () {
 return displayValue.pop()
}
//backspace()

const clearAllButton  = document.querySelector('.clear');
clearAllButton.addEventListener('click',clearAll)


function clearAll(){
    
}

operate();

let displayValue = [];
// defining operation functions
function operate (a,b){
    firstParam = parseInt(a);
    secondParam = parseInt(b);
    switch (true) {
        case '+':
        sum();
        break;
        case '-':
        subtract();
        break;
        case 'x':
        multiply()
        break;
        case '/':
        divide();
        break;
    }

}



function sum(a,b) {
 a = parseInt(calculatorDisplay.innerText);
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
     return  displayValue
   };
   if (displayValue.length != [...calculatorDisplay.innerText].length){
    return updateDisplay()
   }
}
updateDisplay();
