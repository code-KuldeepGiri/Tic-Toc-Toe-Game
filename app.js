let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true; //plearx plearo

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was click");
        if (turno) {
           //playero
           box.innerText = "O";
           turno = false;
        }else{
           //playerx
           box.innerText = "X";
           turno = true;
        }
        box.disabled = true;

        checkwinner();

    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true; 
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true; 
        box.innerText = "";
    }
};
       const showwinner = (winner) => {
        msg.innerText = `congratulation, winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
       };

        const checkwinner = () => {
            for(let pattern of winpatterns) {
                    let pos1Val = boxes[pattern[0]].innerText;
                    let pos2Val = boxes[pattern[1]].innerText;
                    let pos3Val = boxes[pattern[2]].innerText;
            
                    if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
                        if(pos1Val === pos2Val && pos2Val === pos3Val){
                           console.log("winner",pos1Val);
                           showwinner(pos1Val);
                        }
                    }
            }
        };

        newGameBtn.addEventListener("click",resetGame);
        resetbtn.addEventListener("click",resetGame);



