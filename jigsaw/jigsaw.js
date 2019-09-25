var DIM;
var LENGTH = 60;
var board;
var unoccupiedI, unoccupiedJ;
var won;

var body;

window.onload = function() {
    body = document.getElementsByTagName("body")[0];
    won = false;

    promptForDim();
    initializeBoard();
    initializeHTML();
}

function promptForDim() {
    alert("Welcome to the jigsaw game!");
    while(true) {
        DIM = prompt("Please input a (integer) number in the range [3, 8] as the dimension of the board.");
        if(DIM == null) {
            alert("You should input a dimension number!");
            continue;
        }
        DIM = Math.floor(Number(DIM));
        if(isNaN(DIM)) {
            alert("Your input isn't a valid number!");
            continue;
        }
        else if(DIM < 3 || DIM > 8) {
            alert("You should provide a integer in the range [3, 8]!");
            continue;
        }
        else
            break;
    }
}
function initializeBoard() {
    board = new Array();
    for(var i = 0; i < DIM; i++) {
        board[i] = new Array();
        for(var j = 0; j < DIM; j++)
            board[i][j] = DIM * DIM - 1 - (i * DIM + j);
    }
    if(DIM % 2 == 0) {
        board[DIM - 1][DIM - 3] = 1;
        board[DIM - 1][DIM - 2] = 2;
    }
    unoccupiedI = DIM - 1;
    unoccupiedJ = DIM - 1;
}

var blocks;
function initializeHTML() {
    var para = document.createElement("p");
    para.innerHTML = 'Press "h"(Left), "j"(Down), "k"(Up), "l"(Right) keys to move the blocks in the board.';
    para.setAttribute("id", "instruction");
    body.appendChild(para);

    var container = document.createElement("div");
    container.setAttribute("id", "board");
    container.style.height = DIM * LENGTH + "px";
    container.style.width = DIM * LENGTH + "px";
    for(var i = 0; i < DIM * DIM; i++)
        container.appendChild(document.createElement("div"));
    body.appendChild(container);

    blocks = container.getElementsByTagName("div");
    showConfiguration();
}
function showConfiguration() {
    for(var i = 0; i < DIM; i++)
        for(var j = 0; j < DIM; j++) {
            var block = blocks[i * DIM + j];
            block.dataset.i = i;
            block.dataset.j = j;
            block.innerHTML = board[i][j];
            if(block.innerHTML == 0)
                block.setAttribute("class", "unoccupied");
            else
                block.setAttribute("class", "");
        }
}


document.onkeypress = function(event) {
    // The player has won, and then start a new game(with the same dimension as before) by pressing any key.
    if(won) {
        body.innerHTML = "";
        initializeBoard();
        initializeHTML();
        won = false;
        return;
    }
    var move;
    switch(event.keyCode) {
        // The "h" key.
        case 104:
            move = moveLeft();
            break;
        // The "j" key.
        case 106:
            move = moveDown();
            break;
        // The "k" key.
        case 107:
            move = moveUp();
            break;
        // The "l" key.
        case 108:
            move = moveRight();
            break;
    }
    if(move)
        showConfiguration();
    won = hasWon();
    if(won) {
        var para = document.createElement("p");
        para.innerHTML = "Congratulations, you win!" + "<br>" +
                         "Press any key to replay this game, or refresh the page to select another dimension.";
        para.setAttribute("id", "won");
        body.appendChild(para);
    }

    // Change configuration of the board by move in all four directions. 
    function moveLeft() {
        if(unoccupiedJ == DIM - 1)
            return false;
        var tmp = board[unoccupiedI][unoccupiedJ];
        board[unoccupiedI][unoccupiedJ] = board[unoccupiedI][unoccupiedJ + 1];
        board[unoccupiedI][unoccupiedJ + 1] = tmp;
        unoccupiedJ++;
        return true;
    }
    function moveRight() {
        if(unoccupiedJ == 0)
            return false;
        var tmp = board[unoccupiedI][unoccupiedJ];
        board[unoccupiedI][unoccupiedJ] = board[unoccupiedI][unoccupiedJ - 1];
        board[unoccupiedI][unoccupiedJ - 1] = tmp;
        unoccupiedJ--;
        return true;
    }
    function moveUp() {
        if(unoccupiedI == DIM - 1)
            return false;
        var tmp = board[unoccupiedI][unoccupiedJ];
        board[unoccupiedI][unoccupiedJ] = board[unoccupiedI + 1][unoccupiedJ];
        board[unoccupiedI + 1][unoccupiedJ] = tmp;
        unoccupiedI++;
        return true;
    }
    function moveDown() {
        if(unoccupiedI == 0)
            return false;
        var tmp = board[unoccupiedI][unoccupiedJ];
        board[unoccupiedI][unoccupiedJ] = board[unoccupiedI - 1][unoccupiedJ];
        board[unoccupiedI - 1][unoccupiedJ] = tmp;
        unoccupiedI--;
        return true;
    }
}

function hasWon() {
    for(var i = 0; i < DIM; i++)
        for(var j = 0; j < DIM; j++) {
            var index = i * DIM + j;
            var num = (index + 1) % (DIM * DIM);
            if(num != board[i][j])
                return false;
        }
    return true;
}
