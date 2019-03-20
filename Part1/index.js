let board = []


function play(val) {
    let playGame = document.getElementById('player');
    let element = document.getElementById(val);
    if (playGame.innerText === 'X') {
        playGame.innerText = 'O';
        element.innerText = 'X';
        board[val] = 'X';
    }
    else { 
        playGame.innerText = 'X';
        element.innerText = 'O';
        board[val] = 'O';
    }
    console.log(board);

    if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]){
        window.alert(board[0] + ' is the winner!');
        return
    }
    else if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]){
        window.alert(board[0] + ' is the winner!');
        return
    }
    else if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]){
        window.alert(board[0] + ' is the winner!');
        return
    }
    else if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]){
        window.alert(board[1] + ' is the winner!');
        return
    }
    else if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]){
        window.alert(board[2] + ' is the winner!');
        return
    }
    else if (board[2] !== undefined && board[2] === board[4] && board[2] === board[6]){
        window.alert(board[2] + ' is the winner!');
        return
    }
    else if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]){
        window.alert(board[3] + ' is the winner!');
        return
    }
    else if (board[6] !== undefined && board[6] === board[7] && board[6] === board[8]){
        window.alert(board[6] + ' is the winner!');
        return
    }
};

let boardFull = true
  for(let i = 0; i <= 8; i++){
    if(board[i] === undefined){
        boardFull = false
    }
  }
  if(boardFull === true){
    window.alert("Cat's game, there is no winner")
  };


  
function reset() {
    arr = [];
    for (let i = 0; i <= 8; i++) {
        document.getElementById(i).innerText = '';
    }
}

//add a button to html that calls this function when clicked

