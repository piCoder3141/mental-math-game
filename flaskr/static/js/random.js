function getRandomNumber(){
    return Math.floor(Math.random() * 50) + 1
}

function getRandomOperator(){
    const operators = ["+", "x", "-"]
    let randomIndex = Math.floor(Math.random() * operators.length)
    return operators[randomIndex]
}

