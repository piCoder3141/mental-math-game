function getRandomNumber(limit){
    return Math.floor(Math.random() * Number(limit)) + 1
}

function getRandomOperator(){
    const operators = ["+", "x", "-"]
    let randomIndex = Math.floor(Math.random() * operators.length)
    return operators[randomIndex]
}

