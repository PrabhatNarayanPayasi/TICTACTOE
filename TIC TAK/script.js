

let boxes = document.querySelectorAll(".box")
let turn = "X";
let isGameOver = false;
boxes.forEach(e =>{
    e.innerHTML = " ";
    e.addEventListener("click" , ()=>{
        if(!isGameOver && e.innerHTML === " "){
            e.innerText = turn;
            checkWin();
            checkDraw();
            changeTurn();
           
           
           

        }
    })
})
function checkWin(){
let winCond = [[0,1,2],  [  3, 4, 5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
for(let i=0; i<winCond.length; i++){
    let w0 = boxes[winCond[i][0]].innerHTML;
    let w1 = boxes[winCond[i][1]].innerHTML;
    let w2 = boxes[winCond[i][2]].innerHTML;
    if(w0 != " " && w0 === w1 && w0 === w2){
      
       isGameOver= true;
       document.querySelector("#result").innerHTML = turn + "  WIN";
document.querySelector("#play-again").style.display = "inline";

for(let j=0; j<3; j++){
    boxes[winCond[i][j]].style.backgroundColor="blue";
}
    }
}
}
function checkDraw(){
if(!isGameOver){
    let isDraw = true;
    boxes.forEach(e =>{
        if(e.innerHTML ==="")
            isDraw = false;
        
    })
    if(!isDraw){
        isGameOver= true;
        document.querySelector("#result").innerHTML = "Draw";
 document.querySelector("#play-again").style.display = "inline";
 
    }
}
}
function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left="85px";
    }
    else{
        turn="X";
        document.querySelector(".bg").style.left="0";
    }
}
document.querySelector("#play-again").addEventListener("click" , ()=>{


isGameOver = false;
turn = " X ";

document.querySelector(".bg").style.left = "0";
document.querySelector("#result").innerHTML = "";
document.querySelector("#play-again").style.display= "none";
boxes.forEach(e =>{
    e.innerHTML = " ";
    e.style.removeProperty("background-color");
    e.style.color = "#fff";
})
})