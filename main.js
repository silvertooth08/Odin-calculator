// buttons
const buttons = document.querySelectorAll('.digit')
buttons.forEach((button)=> button.addEventListener('click',getButtonValue));
function getButtonValue(e) {
    if([...displayValue][0] == 0 && ![...displayValue].includes('.')){
        displayValue = displayValue.substring(1,15);
    }
    if(displayValue.length < 12){
        displayValue += (e.target.value)
        calculatorDisplay.innerText = displayValue;
    }
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
    if(displayValue !== ''){
        backspacedDisplay.pop()
    }
    displayValue = backspacedDisplay.join("")
    if(backspacedDisplay == 0){
        console.log('works')
        displayValue === '0'
       return calculatorDisplay.innerText = displayValue
    }
    calculatorDisplay.innerText = displayValue;
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

let cachedValue = ''
let displayValue = '';
let operator = '';

// operations
let operators = document.querySelectorAll('.operator')
operators.forEach((operator) => operator.addEventListener('click',function (e){
    handleOperator(e.target.textContent)
}))

function handleOperator(op) {
    operator = op;
    cachedValue = displayValue;
    cachedDisplay.innerText = cachedValue 
    displayValue ='';
    calculatorDisplay.innerText = displayValue
    //     displayValue = Number(displayValue)
    // cachedValue = Number(cachedValue)
    // if(operator === '+'){
    //  cachedValue += displayValue;
    //  displayValue = 0
    // }
    // if(operator === '-'){
    //     if (displayValue && cachedValue == null){ 
    //        cachedValue = displayValue;
    //        displayValue =''
    //     }
    //     if( displayValue && cachedValue !== null) {
    //     cachedValue -= displayValue;
    //      displayValue = 0
    //     }
    // }
    // if(operator === 'x'){
    //  cachedValue *= displayValue;
    //  displayValue = 0
    // }
    // if(operator === '/'){
    //     if ((displayValue) === 0 ) {
    //     playSound();
    //     return calculatorDisplay.innerText ='EXTERMINATE!!'
    //     }
    //  cachedValue /= displayValue;
    //  displayValue = 0
    // }    
    // if (operator === null){
    //  cachedValue = displayValue;
    // }
    // displayValue = displayValue.toString()
    // cachedValue = cachedValue.toString()
    // calculatorDisplay.innerText = displayValue;
    // cachedDisplay.innerText = cachedValue;
}



//equals 
    
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click',equals)

function equals(){
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
    displayValue = displayValue.toString()
    cachedValue = cachedValue.toString()
    calculatorDisplay.innerText = displayValue;
    cachedDisplay.innerText = cachedValue;
}
 // calculator display
 // FIX : calculator display shall not show more than 15 digits!
 const calculatorDisplay = document.querySelector('.calculator-display');
 const cachedDisplay = document.querySelector('.cached-display')
 function updateDisplay () {
    if(displayValue !== null) {
    calculatorDisplay.innerText = displayValue.substring(0,14);
    }
    if(!cachedValue === null){
        cachedDisplay.innerText = displayValue;
        displayValue = '';
    }
    if(cachedValue.length < 13 || cachedValue === null){
        calculatorDisplay.innerText = displayValue
        cachedDisplay.innerText= cachedValue
    }
    if(cachedValue.length > 13){
        cachedDisplay.innerText= Math.round(cachedValue*1000000000000/1000000000000)
       calculatorDisplay.innerText = displayValue
     }
    }




function playSound () {
  const audio = document.getElementById('dividebyzeroSound')
  audio.play();
}