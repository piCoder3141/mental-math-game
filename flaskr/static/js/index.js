let timer = 60
let isTimerOn = false

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
    if (event.key === "Enter" && isTimerOn){
        if(Number(ele.value) === Number(ans)){
            incrementScore()
            updateQuestion()
        }
    }
}

function incrementScore(){
    let score = document.getElementById("score")
    score.innerHTML = Number(score.innerHTML) + 1
}

function updateQuestion(){
    let num1 = document.getElementById("operand1")
    let num2 = document.getElementById("operand2")
    num1.value = getRandomNumber()
    num2.value = getRandomNumber()
    let userInput = document.getElementById("userInput")
    userInput.value = ""
}

function resetGame(){
    updateQuestion()
    let score = document.getElementById("score")
    score.innerHTML = Number(0)
    let timerElement = document.getElementById("timer")
    timerElement.innerHTML = Number(timer)
}

function startTimer(){
    isTimerOn = true
}

function resetTimer(){
    timer = 60
    isTimerOn = false
    resetGame()
}

function main(){
    let num1 = document.getElementById("operand1")
    let num2 = document.getElementById("operand2")
    let op = document.getElementById("operator")
    let score = document.getElementById("score")
    let timerElement = document.getElementById("timer")
    num1.value = Math.floor(Math.random() * 21);
    num2.value = Math.floor(Math.random() * 21);
    var x = setInterval(function(){
        if (isTimerOn){
            timerElement.innerHTML = timer
            timer = timer-1
            if (timer < 0){
                timer = 0
                isTimerOn = false
            }
        }
    }, 1000)
}

main();


