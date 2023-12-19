function getRandomNumber(){
    return Math.floor(Math.random() * 20) + 1
}

function getCorrectAnswer(){
    let num1 = Number(document.getElementById("operand1").value)
    let num2 = Number(document.getElementById("operand2").value)
    return num1 + num2
}

function checkAnswer(ele){
    let ans = getCorrectAnswer()
    if (event.key === "Enter"){
        if(Number(ele.value) === Number(ans)){
            update_score()
            update_question()
        }
    }
}

function update_score(){
    let score = document.getElementById("score")
    score.innerHTML = Number(score.innerHTML) + 1
}

function update_question(){
    let num1 = document.getElementById("operand1")
    let num2 = document.getElementById("operand2")
    num1.value = getRandomNumber()
    num2.value = getRandomNumber()
    let userInput = document.getElementById("userInput")
    userInput.value = ""
}

function main(){
    let num1 = document.getElementById("operand1")
    let num2 = document.getElementById("operand2")
    let op = document.getElementById("operator")
    let score = document.getElementById("score")
    num1.value = Math.floor(Math.random() * 21);
    num2.value = Math.floor(Math.random() * 21);
}

main();


