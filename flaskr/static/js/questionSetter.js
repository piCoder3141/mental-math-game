const opLimitMap = new Map()

opLimitMap.set("+", 100)
opLimitMap.set("x", 20)
opLimitMap.set("-", 100)

function updateQuestion(){
    let num1 = document.getElementById("operand1")
    let num2 = document.getElementById("operand2")
    let op = document.getElementById("operator")
    op.value = getRandomOperator()
    num1.value = getRandomNumber(opLimitMap.get(op.value))
    num2.value = getRandomNumber(opLimitMap.get(op.value))
    let userInput = document.getElementById("userInput")
    userInput.value = ""
}

