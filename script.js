const resetBtn = document.querySelector(".reset-btn")
const select = document.querySelector("#score-select")
let isGameOver = false
let playingToValue = parseInt(select.value)
const player1 = {
	score: 0,
	button: document.querySelector(".player1-btn"),
	span: document.querySelector(".score1"),
}
const player2 = {
	score: 0,
	button: document.querySelector(".player2-btn"),
	span: document.querySelector(".score2"),
}

const resetScores = () => {
	for (let p of [player1, player2]) {
		p.score = 0
		p.span.textContent = 0
		p.span.classList.remove("winner", "loser")
	}

	playingToValue = parseInt(select.value)
	isGameOver = false
}

const updateScores = (player, opponent) => {
	if (!isGameOver) {
		player.score++
		if (player.score === playingToValue) {
			isGameOver = true
			player.span.classList.add("winner")
			opponent.span.classList.add("loser")
		}
	}
	player.span.textContent = player.score
}

player1.button.addEventListener("click", () => {
	updateScores(player1, player2)
})

player2.button.addEventListener("click", () => {
	updateScores(player2, player1)
})

select.addEventListener("change", () => {
	resetScores()
})

resetBtn.addEventListener("click", resetScores)
