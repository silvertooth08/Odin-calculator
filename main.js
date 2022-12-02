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
    cachedValue = '';
    displayValue = '';
    return calculatorDisplay.innerText = displayValue;
}
//clear only current display screen


const clearCurrentButton = document.querySelector('.clearCurrent');
clearCurrentButton.addEventListener('click',clearCurrent);

function clearCurrent() {
    displayValue = '';
    return calculatorDisplay.innerText = displayValue;
};
let cachedValue = parseFloat(0)
let displayValue = [];


function sum() {
    if(displayValue){
    cachedValue += parseFloat(displayValue);
   
    displayValue = ''
    }
    return calculatorDisplay.innerText = displayValue
}

function subtract () {
    if(displayValue) {
        cachedValue -= parseFloat(displayValue);
        displayValue =''
    }
    return calculatorDisplay.innerText = displayValue
}

function multiply () {
    if (cachedValue) {
        cachedValue = cachedValue*parseFloat(displayValue)
        displayValue = ''
        console.log(cachedValue)
    }
    if (displayValue && !cachedValue){
        cachedValue = parseFloat(displayValue);
        console.log(cachedValue)
        displayValue= ''
    }

   return calculatorDisplay.innerText = displayValue
}

function divide (){
    if (cachedValue){
        if ( parseFloat(displayValue) === 0 ) {
            playSound();
            return calculatorDisplay.innerText ='EXTERMINATE!!'
        }else{
            cachedValue = cachedValue / parseFloat(displayValue);
            displayValue = '';    
        }
    } 
        if (displayValue) {
        cachedValue = parseFloat(displayValue);
        displayValue = '';
    } 
    return calculatorDisplay.innerText = displayValue
    
    } 

 // calculator display
 // FIX : calculator display shall not show more than 15 digits!
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


function playSound () {
  const audio = document.getElementById('dividebyzeroSound')
  audio.play();
}