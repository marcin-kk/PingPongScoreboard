const scoreSpan1 = document.querySelector(".score1")
const scoreSpan2 = document.querySelector(".score2")
const playerBtn1 = document.querySelector(".player1-btn")
const playerBtn2 = document.querySelector(".player2-btn")
const resetBtn = document.querySelector(".reset-btn")
const select = document.querySelector("#score-select")

let score1 = 0
let score2 = 0
let playingToValue = select.value

select.addEventListener("change", () => {
	playingToValue = select.value
	console.log(playingToValue)
})

playerBtn1.addEventListener("click", () => {
	if (score1 < playingToValue) {
		score1++
		scoreSpan1.textContent = score1
	}
})

playerBtn2.addEventListener("click", () => {
	if (score2 < playingToValue) {
		score2++
		scoreSpan2.textContent = score2
	}
})

const resetScores = () => {
	score1 = 0
	score2 = 0
	scoreSpan1.textContent = score1
	scoreSpan2.textContent = score2
}

resetBtn.addEventListener("click", resetScores)

console.dir(select)
