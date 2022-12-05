// buttons
const buttons = document.querySelectorAll('.digit')
buttons.forEach((button)=> button.addEventListener('click',getButtonValue));
function getButtonValue(e) {
    if([...displayValue][0] == 0 && ![...displayValue].includes('.')){
        displayValue = displayValue.substring(1,15);
    }
    displayValue += (e.target.value)
    calculatorDisplay.innerText = displayValue;
};


//decimal 

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click',decimal);

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

//backspace

const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click',backspace);


function backspace () {
    let backspacedDisplay = [...displayValue]
    backspacedDisplay.pop()
    console.log(backspacedDisplay)
    if(backspacedDisplay.length === 0){
        return displayValue === '0'
    }
   displayValue = backspacedDisplay.join("")
updateDisplay()
}

// clear all

const clearAllButton  = document.querySelector('.clearAll');
clearAllButton.addEventListener('click',clearAll)

function clearAll(){
    cachedValue = null;
    cachedDisplay.innerText = cachedValue
    displayValue= '0';
    calculatorDisplay.innerText = displayValue  
}

//clear only current display screen

const clearCurrentButton = document.querySelector('.clearCurrent');
clearCurrentButton.addEventListener('click',clearCurrent);

function clearCurrent() {
    displayValue = '0'
    return calculatorDisplay.innerText = displayValue;
};

let cachedValue = parseFloat(0)
let displayValue = [];

// operations
let operators = document.querySelectorAll('.operator')
operators.forEach((operator) => operator.addEventListener('click',function (e){
    operation(e.target.textContent)
}))

function handleOperator(op) {
    operator = op;
    displayValue = Number(displayValue)
    cachedValue = Number(cachedValue)
    if(operator === '+'){
     cachedValue += displayValue;
    }
    if(operator === '-'){
     cachedValue -= displayValue;
    }
    if(operator === 'x'){
     cachedValue *= displayValue;
    }
    if(operator === '/'){
        if ((displayValue) === 0 ) {
        playSound();
        return calculatorDisplay.innerText ='EXTERMINATE!!'
        }
     cachedValue /= displayValue;
    }
    if (operator === null){
     cachedValue = displayValue;
    }
 updateDisplay()
}


// // summation

// const sumButton = document.querySelector('.sum');
// sumButton.addEventListener('click',sum);

// function sum() {
//     if(displayValue && !cachedDisplay){
//     cachedValue = parseFloat(displayValue);
//     displayValue = '0'
//     }
//     if(displayValue && cachedDisplay){
//         cachedValue += parseFloat(displayValue);
//         displayValue = '0'
//     }
//     updateDisplay();
// }

// // subtraction

// const subtractButton = document.querySelector('.subtract');
// subtractButton.addEventListener('click',subtract);

// function subtract () {
//     if(displayValue && cachedValue != null) {
//         cachedValue -= parseFloat(displayValue);
//         displayValue =''
//     }
//     if (cachedValue == null){
//         cachedValue = parseFloat(displayValue);
//         displayValue=''
//     }
//     updateDisplay();
// }

// //multiplication

// const multiplyButton = document.querySelector('.multiply');
// multiplyButton.addEventListener('click',multiply);

// function multiply () {
//     if (cachedValue) {
//         cachedValue = cachedValue*parseFloat(displayValue)
//         displayValue = ''
//         console.log(cachedValue)
//     }
//     if (displayValue && !cachedValue){
//         cachedValue = parseFloat(displayValue);
//         console.log(cachedValue)
//         displayValue= ''
//     }
//     updateDisplay();
//    return calculatorDisplay.innerText = displayValue
// }

// // division

// const divideButton = document.querySelector('.divide');
// divideButton.addEventListener('click',divide);

// function divide (){
//     if (cachedValue){
//         if ( parseFloat(displayValue) === 0 ) {
//             playSound();
//             return calculatorDisplay.innerText ='EXTERMINATE!!'
//         }else{
//             cachedValue = cachedValue / parseFloat(displayValue);
//             displayValue = '';    
//         }
//     } 
//         if (displayValue) {
//         cachedValue = parseFloat(displayValue);
//         displayValue = '';
//     } 
//     updateDisplay();
//     return calculatorDisplay.innerText = displayValue
// } 

//equals 
    
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click',equals)

function equals(){
if(cachedValue == null){
    updateDisplay()
}
  updateDisplay()
}




 // calculator display
 // FIX : calculator display shall not show more than 15 digits!
 const calculatorDisplay = document.querySelector('.calculator-display');
 const cachedDisplay = document.querySelector('.cached-display')
 function updateDisplay () {
    if(!displayValue === null) {
    calculatorDisplay.innerText = displayValue.substring(0,14);
    }
    if(cachedValue !== null){
        cachedDisplay.innerText = cachedValue;
        displayValue = '0';
    }
    calculatorDisplay.innerText = displayValue
    cachedDisplay.innerText= cachedValue
}



function playSound () {
  const audio = document.getElementById('dividebyzeroSound')
  audio.play();
}