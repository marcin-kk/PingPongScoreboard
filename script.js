const scoreSpan1 = document.querySelector(".score1")
const scoreSpan2 = document.querySelector(".score2")
const playerBtn1 = document.querySelector(".player1-btn")
const playerBtn2 = document.querySelector(".player2-btn")
const resetBtn = document.querySelector(".reset-btn")
const select = document.querySelector("#score-select")

let score1 = 0
let score2 = 0
let isGameOver = false
let playingToValue = parseInt(select.value)

const resetScores = () => {
	score1 = 0
	score2 = 0
	scoreSpan1.textContent = score1
	scoreSpan2.textContent = score2
	scoreSpan1.classList.remove("winner", "loser")
	scoreSpan2.classList.remove("winner", "loser")
	playingToValue = parseInt(select.value)
    isGameOver = false
}

select.addEventListener("change", () => {
	resetScores()
})

playerBtn1.addEventListener("click", () => {
	if (!isGameOver) {
		score1++
		if (score1 === playingToValue) {
			isGameOver = true
			scoreSpan1.classList.add("winner")
			scoreSpan2.classList.add("loser")
		}
	}
	scoreSpan1.textContent = score1
})

playerBtn2.addEventListener("click", () => {
	if (!isGameOver) {
		score2++
		if (score2 === playingToValue) {
			isGameOver = true
			scoreSpan2.classList.add("winner")
			scoreSpan1.classList.add("loser")
		}
	}
	scoreSpan2.textContent = score2
})


resetBtn.addEventListener("click", resetScores)
