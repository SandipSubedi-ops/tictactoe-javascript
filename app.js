document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const resetButton = document.getElementById("reset");
    const newButton = document.getElementById("new-btn");
    const messageContainer = document.querySelector(".msg-container");
    const message = document.querySelector(".msg");
    let currentPlayer = "X";
    let gameActive = true;
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const handleBoxClick = (event) => {
        const box = event.target;
        const boxIndex = Array.from(boxes).indexOf(box);

        if (box.textContent !== "" || !gameActive) {
            return;
        }

        box.textContent = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    };

    const checkResult = () => {
        let roundWon = false;
        for (let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i];
            if (
                boxes[a].textContent === "" ||
                boxes[b].textContent === "" ||
                boxes[c].textContent === ""
            ) {
                continue;
            }
            if (
                boxes[a].textContent === boxes[b].textContent &&
                boxes[b].textContent === boxes[c].textContent
            ) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            endGame(false);
            return;
        }

        const roundDraw = Array.from(boxes).every((box) => box.textContent !== "");
        if (roundDraw) {
            endGame(true);
            return;
        }
    };

    const endGame = (draw) => {
        gameActive = false;
        messageContainer.classList.remove("hide");
        if (draw) {
            message.textContent = "It's a draw!";
        } else {
            message.textContent = `Player ${currentPlayer} has won!`;
        }
    };

    const resetGame = () => {
        currentPlayer = "X";
        gameActive = true;
        boxes.forEach((box) => (box.textContent = ""));
        messageContainer.classList.add("hide");
    };

    boxes.forEach((box) => box.addEventListener("click", handleBoxClick));
    resetButton.addEventListener("click", resetGame);
    newButton.addEventListener("click", resetGame);
});
