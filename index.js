let screen = document.getElementById('display');
let screenValue = screen.textContent;
let initialValue =0;
let previousOperator = null;
let waitingForSecondValue = false;

function inputNumber(number) {
    if(waitingForSecondValue){
        waitingForSecondValue = false;
        screenValue = number;
    } else {
        screenValue = screenValue === '0' ? number : screenValue + number;
    }
    
    updapeScreenDisplay();
}

function updapeScreenDisplay(){
    screen.textContent = screenValue;
}

function inputDecimal(){
    if(!screenValue.includes('.')){
        screenValue = screenValue + '.';
    }
    updapeScreenDisplay();
}

function clearEntry(){
    screenValue = screenValue.slice(0, -1);
    if(screenValue.length === 0 ){
        screenValue = '0';
    }
    updapeScreenDisplay();
}

function clearAll(){
    screenValue = '0';
    updapeScreenDisplay();
}

function handleOperator(currentOperator){
    initialValue = calculate(initialValue, previousOperator, parseFloat(screenValue));
    screenValue = initialValue;
    previousOperator = currentOperator;
    waitingForSecondValue = true;
    updapeScreenDisplay();
}

function calculate(first, operator, second){
    if(operator==='+') return first + second; 
    if (operator === "-") return first - second;
    if (operator === "*") return first * second;
    if (operator === "/") return second === 0 ? 0 : first / second; 
        return second;
}

function squareRoot(){
    screenValue = Math.sqrt(screenValue);
}
