const scoreSpan1 = document.querySelector(".score1")
const scoreSpan2 = document.querySelector(".score2")
const playerBtn1 = document.querySelector(".player1-btn")
const playerBtn2 = document.querySelector(".player2-btn")
const resetBtn = document.querySelector(".reset-btn")
const select = document.querySelector("#score-select")

let score1 = 0
let score2 = 0
let playingToValue = select.value

const resetScores = () => {
	score1 = 0
	score2 = 0
	scoreSpan1.textContent = score1
	scoreSpan2.textContent = score2
	scoreSpan1.style.color = "black"
	scoreSpan2.style.color = "black"
	playingToValue = select.value
	playerBtn1.disabled = false
	playerBtn2.disabled = false
}

select.addEventListener("change", () => {
	resetScores()
	playingToValue = select.value
})

playerBtn1.addEventListener("click", () => {
	score1++
	if (score1 < playingToValue) {
		scoreSpan1.textContent = score1
	} else if (score1 == playingToValue) {
		scoreSpan1.textContent = score1
		scoreSpan1.style.color = "green"
		scoreSpan2.style.color = "red"
		playerBtn2.disabled = true
	}
})

playerBtn2.addEventListener("click", () => {
	score2++
	if (score2 < playingToValue) {
		scoreSpan2.textContent = score2
	} else if (score2 == playingToValue) {
		scoreSpan2.textContent = score2
		scoreSpan2.style.color = "green"
		scoreSpan1.style.color = "red"
		playerBtn1.disabled = true
	}
})

resetBtn.addEventListener("click", resetScores)
