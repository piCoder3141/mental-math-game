var timer = 60
var isTimerOn = false

function incrementScore(){
    let score = document.getElementById("score")
    score.innerHTML = Number(score.innerHTML) + 1
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
    resetGame()
    let timerElement = document.getElementById("timer")
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


