let gridItems = document.getElementsByClassName("square");
let currentTurn = "x";
let gameIsFinished = false

let boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

for (const item of gridItems) {
  item.addEventListener("click", function () {

    if (gameIsFinished)
    {
      return
    }

    let value = item.getAttribute("value");

    //filling the value visually

    let squareContent = document.querySelector(`.square[value="${value}"]`);
    squareContent.innerHTML = currentTurn;

    

    //filling the value logically
    let index = value - 1;
    boardArray[index] = currentTurn
    
    console.log(boardArray)


    evaluateBoard()
    if (currentTurn == "x") {
      currentTurn = "o";
    } else {
      currentTurn = "x";
    }

    function evaluateBoard()
    {
      if( 
        // rows
        (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2]) || 
        (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) ||
        (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) ||

        // cols
        (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) || 
        (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) ||
        (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) ||

        // Diagonal
        (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6]) || 
        (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8])
        ){
          var winner = currentTurn == "o" ? "0" : "x"
          alert(`${winner} Won` )
          gameIsFinished =true
          return
        }

        var isDraw = true
        for(squre of boardArray)
        {
          if (squre != "x" && squre != "o")
          {
            isDraw = false
          }
        }
        if(isDraw)
        {
          gameIsFinished = true
          alert("draw")
        }
    }
  });
}
