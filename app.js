let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-bn");
let newgame=document.querySelector("#new-game");
let msgcont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");

let turn0=true;
const resetgame=()=>{
     turn0=true;
     enablebtn();
     msgcont.classList.add("hide");
}
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    
      if(turn0){
          box.innerText="O";
          turn0=false;
      }
      else{
        box.innerText="x";
          turn0=true;
      }
      box.disabled=true; 
      checkwinner();
    })
})
const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`congratulation, winner is ${winner}`;
    msgcont.classList.remove("hide");
}
const checkwinner=()=>{
    for(pattern of winpattern){
         let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
            
            showwinner(pos1);
            disablebtn();
            }
        }
    }
};
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);