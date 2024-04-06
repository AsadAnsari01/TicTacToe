let boxes = document.querySelectorAll(".button");
let resetBtn = document.querySelector("#reset");
let msgTurn = document.querySelector("#id11");
let msgWinner = document.querySelector("#id10");
let gameArea = document.querySelector("#game");



let turnX = true;
msgTurn.innerText = "Player X's Turn "


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


function checkWinner() {
    for (let i of winPatterns) {
        // console.log(i);
        // console.log(i[0], i[1], i[2]);
        // console.log(boxes[i[0]], boxes[i[1]], boxes[i[2]]);
        // console.log(boxes[i[0]].innerText, boxes[i[1]].innerText, boxes[i[2]].innerText);
        let pos0val = boxes[i[0]].innerText;
        let pos1val = boxes[i[1]].innerText;
        let pos2val = boxes[i[2]].innerText;

        if (pos0val != "" && pos1val != "" && pos2val != "") {

            if (turnX === true) {
                if (pos0val === pos1val && pos1val === pos2val) {
                    msgWinner.innerText = "Player Y is the winner";
                    msgWinner.classList.remove("hidden");
                    msgTurn.classList.add("hidden");
                    boxes.forEach(i => {
                        i.disabled = true;
                    });
                    resetBtn.innerText = "New Game";
                    // gameArea.classList.add("hidden");


                }

            }
            else {
                if (pos0val === pos1val && pos1val === pos2val) {
                    msgWinner.innerText = "Player X is the winner";
                    msgWinner.classList.remove("hidden");
                    msgTurn.classList.add("hidden");
                    boxes.forEach(i => {
                        i.disabled = true;
                    });
                    resetBtn.innerText = "New Game";
                    // gameArea.classList.add("hidden");

                }
            }

        };
    };
};

boxes.forEach((i) => {
    i.addEventListener("click", () => {
        // console.log("The box was clicked");
        if (turnX === true) {
            i.innerText = "X";
            turnX = false;
            msgTurn.innerText = "Player Y's Turn ";


        }
        else {
            i.innerText = "Y";
            turnX = true;
            msgTurn.innerText = "Player X's Turn "
        };
        i.disabled = true;
        checkWinner();
        boxes.forEach(i => {
            if (i.innerText === "Y") {
                i.classList.add("color");
            }
        });


        let isEmpty = false;
        boxes.forEach(i => {
            if (i.innerText === "") {
                isEmpty = true;
            }
        });
        if (isEmpty === false) {
            msgTurn.innerText = "Game is a Draw!\n Press reset game to start a new game!"
        }




    });
});


resetBtn.addEventListener("click", () => {
    boxes.forEach(i => {
        i.disabled = false;
        i.innerText = "";
        i.classList.remove("color");
    });
    turnX = true;
    msgTurn.innerText = "Player X's Turn "
    msgTurn.classList.remove("hidden");
    msgWinner.classList.add("hidden");
    resetBtn.innerText = "Reset Game";

});