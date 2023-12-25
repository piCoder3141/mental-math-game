const opFuncMap = new Map()

function add(num1, num2){
    return num1 + num2
}

function multiply(num1, num2){
    return num1 * num2
}

function subtract(num1, num2){
    return num1 - num2
}

opFuncMap.set("+", add)
opFuncMap.set("x", multiply)
opFuncMap.set("-", subtract)

function getCorrectAnswer(){
    let num1 = Number(document.getElementById("operand1").value)
    let num2 = Number(document.getElementById("operand2").value)
    let op = document.getElementById("operator").value
    return opFuncMap.get(op)(num1, num2)
}

function checkAnswer(ele){
    let ans = getCorrectAnswer()
    if (event.key === "Enter" && isTimerOn){
        if(Number(ele.value) === Number(ans)){
            incrementScore()
            updateQuestion()
        }
    }
}

