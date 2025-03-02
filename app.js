let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newGameBtn=document.querySelector("#new-btn");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]; 

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===false){
            box.innerText="X";
            turnO=true;
        }
        else{
        box.innerText="O";
        turnO=false;
        }
        box.disabled=true;
        checkWinner();
        checkDraw();
     });
});

const resetGame=()=>{
enableBoxes();
turnO=true;
msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};




const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
        }
}
}
};

const checkDraw=()=>{
    let count=0;
    for(let box of boxes){
        if(box.innerText!==""){
            count++;
        }
    }
    if(count===9){
        msg.innerText="Match Drawn";
        msgContainer.classList.remove("hide");
    }
}

 newGameBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);