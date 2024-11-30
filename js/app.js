//Variables
let board
let turn
let winner
let tie
let index = 0

//Reference Elements
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector('#reset')

resetBtnEl.addEventListener('click', (event)=>{
   init()
   clearBoard()
   messageEl.textContent = ""
})

function clearBoard(){
    squareEls.forEach((eachSequareClear,index)=>{
        eachSequareClear.textContent = ""
    })
}


console.log(squareEls)
console.log(messageEl)

// Functions
const render = () => {
    //updateBoard()
    //updateMessage()

}

function init(){
board = ['','','',
         '','','',
         '','','']

turn = "X"
winner = false
tie = false
index= 0
render()
}

function updateMessage(){
    if (winner === false && tie === false){
        messageEl.textContent = `it is ${turn}'s turn`
    }
    else if(winner === false && tie === true){
        messageEl.textContent = "You Tied!"
    }
    else{
        messageEl.textContent = `Congrats! ${turn} has Won`
    }
}
//App
init()

const winningCombos = [
    ['0','1','2'],
    ['3', '4', '5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['2','4','6'],
    ['0','4','8']

]

function checkForWinner(){
    //First Combo
    if(board[0] !=='' && board[0] === board [1] && board[0] === board[2])
    {
        winner = true
        updateMessage()
            
    }else if(board[3] !=='' && board[3] === board[4] && board[3] === board[5] ){
        winner = true
        updateMessage()
    }
    //Third Combo
    else if(board[6] !== '' && board[6] === board[7] && board[6] === board[8]){
        winner = true
        updateMessage()
    }
    //Fourth Combo
    else if(board[0] !== '' && board[0] === board[3] && board[0] === board[6]){
        winner = true
        updateMessage()
    }
    //Fifth Combo
    else if(board[1] !== '' && board[1] === board[4] && board[1] === board[7] ){
        winner = true
        updateMessage()
    }
    //Sixth Combo
    else if(board[2] !== '' && board[2] === board[5] && board[2] === board[8] ){
        winner = true
        updateMessage()
    }
    //Seventh Combo
    else if(board[2] !== '' && board[2] === board[4] && board[2] === board[6]){
        winner = true
        updateMessage()
    }
    //Eightth Combo
    else if(board[0] !== '' && board[0] === board[4] && board[0] === board[8]){
        winner = true
        updateMessage()
    }
}

function checkForTie(){
    if(winner === true){
        return
    }
  else if(board[0] !=='' && board[1] !=='' && board[2] !==''
    && board[3] !=='' && board[4] !=='' && board[5] !==''
    && board[6] !=='' && board[7] !=='' && board[8] !==''
   ){
    tie = true
    updateMessage()
   }

}

function switchPlayerTurn(){
    if(winner === true){
        return
    }
    if(turn == 'X'){
        turn='O'
        if(winner ===false && tie === false){
        messageEl.textContent = `it's ${turn} trun`}
    }else{
        turn='X'
        if(winner ===false && tie === false){
        messageEl.textContent = `it's ${turn} trun`}
    }
}


const updateBoard = squareEls.forEach(function (eachSequare,index){
   
  eachSequare.addEventListener('click',(event) =>{
        index=event.target.id
        console.log(index)
   

     if(eachSequare.index == "" || turn == "X"){
        
        if(board[index] === ''){
        eachSequare.style.color = "green"
        eachSequare.textContent= turn
        board[index] = turn
        console.log(board)
        //turn="O"
        checkForWinner()
        checkForTie()
        switchPlayerTurn()
        
        }else{
            messageEl.textContent = "That sequare is already Taken!"
        }
     }
     else{
        if(board[index] === ''){
        eachSequare.style.color = "yellow"
        eachSequare.textContent= turn
        board[index] = turn
        console.log(board)
        //turn="X"
        checkForWinner()
        checkForTie()
        switchPlayerTurn()
    }else{
    messageEl.textContent = "That sequare is already Taken!"
    }
 }


    
    
 } )}
);



