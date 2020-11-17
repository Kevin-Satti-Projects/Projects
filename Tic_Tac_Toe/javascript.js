let startGame = function () {
    let opponent;
    function start (e) {
        if(e.x < window.innerWidth * 33 / 100){
            document.getElementById("opponentName").textContent = "Player 2";
            let opponentScore = document.createElement("div");
            opponentScore.id = "opponentScore";
            let oppScoreText = document.createTextNode("Score: 0");
            opponentScore.appendChild(oppScoreText);
            document.getElementById("opponentName").appendChild(opponentScore);
        }
        else if(e.x < window.innerWidth * 66 / 100){
            document.getElementById("opponentName").textContent = "RandomBot";
            let opponentScore = document.createElement("div");
            opponentScore.id = "opponentScore";
            let oppScoreText = document.createTextNode("Score: 0");
            opponentScore.appendChild(oppScoreText);
            document.getElementById("opponentName").appendChild(opponentScore);
        }
        else{
            document.getElementById("opponentName").textContent = "PerfectBot";
            let opponentScore = document.createElement("div");
            opponentScore.id = "opponentScore";
            let oppScoreText = document.createTextNode("Score: 0");
            opponentScore.appendChild(oppScoreText);
            document.getElementById("opponentName").appendChild(opponentScore);
        }
        document.getElementById("column1").style.display = "none";
        document.getElementById("column2").style.display = "none";
        document.getElementById("column3").style.display = "none";
        document.getElementById("background").style.zIndex = -2;
    }
    let col1 = document.getElementById("column1");
    let col2 = document.getElementById("column2");
    let col3 = document.getElementById("column3");
    col1.addEventListener("click", start);
    col2.addEventListener("click", start);
    col3.addEventListener("click", start);
};

let Player = (name, symbol) => {
    return {name, symbol}
}

let player1 = Player("Player 1", "X");
let player2 = Player("Player 2", "O");

let Gameboard = (function () {
    let board = Array(9).fill(0);
    let moves = [];
    let botMove;
    let player = player1;
    let playerScore = 0;
    let opponentScore = 0;
    let gameIsWon = false;
    let a = document.getElementById("0");
    let b = document.getElementById("1");
    let c = document.getElementById("2");
    let d = document.getElementById("3");
    let e = document.getElementById("4");
    let f = document.getElementById("5");
    let g = document.getElementById("6");
    let h = document.getElementById("7");
    let i = document.getElementById("8");
    for(let j = 0; j < board.length; j++){
        document.getElementById(j).addEventListener("click", function () {
            if(document.getElementById(j).textContent!= "X" && document.getElementById(j).textContent!= "O"){
                document.getElementById(j).textContent = player.symbol;
                board.splice(j, 1, document.getElementById(j).textContent);
                if(!(board.includes(0))){
                    gameIsWon = true;
                }
                if(a.textContent == "X" && b.textContent == "X" && c.textContent == "X" || 
                   a.textContent == "O" && b.textContent == "O" && c.textContent == "O" ){
                    if(player == player1){
                        playerScore += 1;
                        document.getElementById("playerScore").textContent = "Score: " + playerScore;
                    }
                    else{
                        opponentScore += 1;
                        document.getElementById("opponentScore").textContent = "Score: " + opponentScore;
                    }                                        
                    a.style.backgroundColor = "magenta";
                    b.style.backgroundColor = "magenta";
                    c.style.backgroundColor = "magenta";
                    d.style.opacity = 0.5;
                    e.style.opacity = 0.5;
                    f.style.opacity = 0.5;
                    g.style.opacity = 0.5;
                    h.style.opacity = 0.5;
                    i.style.opacity = 0.5;
                    gameIsWon = true;
                }
                if(d.textContent == "X" && e.textContent == "X" && f.textContent == "X" || 
                   d.textContent == "O" && e.textContent == "O" && f.textContent == "O" ){
                    if(player == player1){
                        playerScore += 1;
                        document.getElementById("playerScore").textContent = "Score: " + playerScore;
                    }
                    else{
                        opponentScore += 1;
                        document.getElementById("opponentScore").textContent = "Score: " + opponentScore;
                    }                                        
                    d.style.backgroundColor = "magenta";
                    e.style.backgroundColor = "magenta";
                    f.style.backgroundColor = "magenta";
                    a.style.opacity = 0.5;
                    b.style.opacity = 0.5;
                    c.style.opacity = 0.5;
                    g.style.opacity = 0.5;
                    h.style.opacity = 0.5;
                    i.style.opacity = 0.5;
                    gameIsWon = true;
                }
                if(g.textContent == "X" && h.textContent == "X" && i.textContent == "X" || 
                   g.textContent == "O" && h.textContent == "O" && i.textContent == "O" ){
                    if(player == player1){
                        playerScore += 1;
                        document.getElementById("playerScore").textContent = "Score: " + playerScore;
                    }
                    else{
                        opponentScore += 1;
                        document.getElementById("opponentScore").textContent = "Score: " + opponentScore;
                    }                                        
                    g.style.backgroundColor = "magenta";
                    h.style.backgroundColor = "magenta";
                    i.style.backgroundColor = "magenta";
                    d.style.opacity = 0.5;
                    e.style.opacity = 0.5;
                    f.style.opacity = 0.5;
                    a.style.opacity = 0.5;
                    b.style.opacity = 0.5;
                    c.style.opacity = 0.5;
                    gameIsWon = true;
                }
                if(a.textContent == "X" && d.textContent == "X" && g.textContent == "X" || 
                   a.textContent == "O" && d.textContent == "O" && g.textContent == "O" ){
                    if(player == player1){
                        playerScore += 1;
                        document.getElementById("playerScore").textContent = "Score: " + playerScore;
                    }
                    else{
                        opponentScore += 1;
                        document.getElementById("opponentScore").textContent = "Score: " + opponentScore;
                    }                                        
                    a.style.backgroundColor = "magenta";
                    d.style.backgroundColor = "magenta";
                    g.style.backgroundColor = "magenta";
                    b.style.opacity = 0.5;
                    e.style.opacity = 0.5;
                    f.style.opacity = 0.5;
                    c.style.opacity = 0.5;
                    h.style.opacity = 0.5;
                    i.style.opacity = 0.5;
                    gameIsWon = true;
                }
                if(b.textContent == "X" && e.textContent == "X" && h.textContent == "X" || 
                   b.textContent == "O" && e.textContent == "O" && h.textContent == "O" ){
                    if(player == player1){
                        playerScore += 1;
                        document.getElementById("playerScore").textContent = "Score: " + playerScore;
                    }
                    else{
                        opponentScore += 1;
                        document.getElementById("opponentScore").textContent = "Score: " + opponentScore;
                    }                                        
                    b.style.backgroundColor = "magenta";
                    e.style.backgroundColor = "magenta";
                    h.style.backgroundColor = "magenta";
                    d.style.opacity = 0.5;
                    a.style.opacity = 0.5;
                    f.style.opacity = 0.5;
                    g.style.opacity = 0.5;
                    c.style.opacity = 0.5;
                    i.style.opacity = 0.5;
                    gameIsWon = true;
                }
                if(c.textContent == "X" && f.textContent == "X" && i.textContent == "X" || 
                   c.textContent == "O" && f.textContent == "O" && i.textContent == "O" ){
                    if(player == player1){
                        playerScore += 1;
                        document.getElementById("playerScore").textContent = "Score: " + playerScore;
                    }
                    else{
                        opponentScore += 1;
                        document.getElementById("opponentScore").textContent = "Score: " + opponentScore;
                    }                                        
                    c.style.backgroundColor = "magenta";
                    f.style.backgroundColor = "magenta";
                    i.style.backgroundColor = "magenta";
                    d.style.opacity = 0.5;
                    e.style.opacity = 0.5;
                    a.style.opacity = 0.5;
                    g.style.opacity = 0.5;
                    h.style.opacity = 0.5;
                    b.style.opacity = 0.5;
                    gameIsWon = true;
                }
                if(a.textContent == "X" && e.textContent == "X" && i.textContent == "X" || 
                   a.textContent == "O" && e.textContent == "O" && i.textContent == "O" ){
                    if(player == player1){
                        playerScore += 1;
                        document.getElementById("playerScore").textContent = "Score: " + playerScore;
                    }
                    else{
                        opponentScore += 1;
                        document.getElementById("opponentScore").textContent = "Score: " + opponentScore;
                    }                                        
                    a.style.backgroundColor = "magenta";
                    e.style.backgroundColor = "magenta";
                    i.style.backgroundColor = "magenta";
                    d.style.opacity = 0.5;
                    b.style.opacity = 0.5;
                    f.style.opacity = 0.5;
                    g.style.opacity = 0.5;
                    h.style.opacity = 0.5;
                    c.style.opacity = 0.5;
                    gameIsWon = true;
                }
                if(c.textContent == "X" && e.textContent == "X" && g.textContent == "X" || 
                   c.textContent == "O" && e.textContent == "O" && g.textContent == "O" ){
                    if(player == player1){
                        playerScore += 1;
                        document.getElementById("playerScore").textContent = "Score: " + playerScore;
                    }
                    else{
                        opponentScore += 1;
                        document.getElementById("opponentScore").textContent = "Score: " + opponentScore;
                    }                                        
                    c.style.backgroundColor = "magenta";
                    e.style.backgroundColor = "magenta";
                    g.style.backgroundColor = "magenta";
                    d.style.opacity = 0.5;
                    a.style.opacity = 0.5;
                    f.style.opacity = 0.5;
                    b.style.opacity = 0.5;
                    h.style.opacity = 0.5;
                    i.style.opacity = 0.5;
                    gameIsWon = true;
                }            
                if(player == player1){
                    player = player2;
                    if(document.getElementById("opponentName").textContent.slice(0,9) == "RandomBot" && gameIsWon == false){
                        moves = [];
                        botMove = "";
                        for(let n = 0; n < board.length; n++){
                            if(board[n] == "0"){
                                moves.push(n);
                            }
                        }
                        botMove = moves[Math.floor(Math.random()*moves.length)];
                        document.getElementById(botMove).click();
                    }
                    if(document.getElementById("opponentName").textContent.slice(0,10) == "PerfectBot" && gameIsWon == false){
                        moves = [];
                        botMove = "";
                        if(board[4] == 0){
                            document.getElementById("4").click();
                        }
                        else if(board[0] == "O" && board[1] == "O" && board[2] == 0){
                            document.getElementById("2").click();
                        }
                        else if(board[0] == "O" && board[1] == 0 && board[2] == "O"){
                            document.getElementById("1").click();
                        }
                        else if(board[0] == 0 && board[1] == "O" && board[2] == "O"){
                            document.getElementById("0").click();
                        }                        
                        else if(board[3] == "O" && board[4] == "O" && board[5] == 0){
                            document.getElementById("5").click();
                        }
                        else if(board[3] == 0 && board[4] == "O" && board[5] == "O"){
                            document.getElementById("3").click();
                        }
                        else if(board[6] == "O" && board[7] == "O" && board[8] == 0){
                            document.getElementById("8").click();
                        }
                        else if(board[6] == "O" && board[7] == 0 && board[8] == "O"){
                            document.getElementById("7").click();
                        }
                        else if(board[6] == 0 && board[7] == "O" && board[8] == "O"){
                            document.getElementById("6").click();
                        }
                        else if(board[0] == "O" && board[3] == "O" && board[6] == 0){
                            document.getElementById("6").click();
                        }
                        else if(board[0] == "O" && board[3] == 0 && board[6] == "O"){
                            document.getElementById("3").click();
                        }
                        else if(board[0] == 0 && board[3] == "O" && board[6] == "O"){
                            document.getElementById("0").click();
                        }
                        else if(board[1] == "O" && board[4] == "O" && board[7] == 0){
                            document.getElementById("7").click();
                        }
                        else if(board[1] == 0 && board[4] == "O" && board[7] == "O"){
                            document.getElementById("1").click();
                        }
                        else if(board[2] == "O" && board[5] == "O" && board[8] == 0){
                            document.getElementById("8").click();
                        }
                        else if(board[2] == "O" && board[5] == 0 && board[8] == "O"){
                            document.getElementById("5").click();
                        }
                        else if(board[2] == 0 && board[5] == "O" && board[8] == "O"){
                            document.getElementById("2").click();
                        }
                        else if(board[0] == "O" && board[4] == "O" && board[8] == 0){
                            document.getElementById("8").click();
                        }
                        else if(board[0] == 0 && board[4] == "O" && board[8] == "O"){
                            document.getElementById("0").click();
                        }
                        else if(board[2] == "O" && board[4] == "O" && board[6] == 0){
                            document.getElementById("6").click();
                        }
                        else if(board[2] == 0 && board[4] == "O" && board[6] == "O"){
                            document.getElementById("2").click();
                        }
                        else if(board[0] == "X" && board[1] == "X" && board[2] == 0){
                            document.getElementById("2").click();
                        }
                        else if(board[0] == "X" && board[1] == 0 && board[2] == "X"){
                            document.getElementById("1").click();
                        }
                        else if(board[0] == 0 && board[1] == "X" && board[2] == "X"){
                            document.getElementById("0").click();
                        }                        
                        else if(board[3] == "X" && board[4] == "X" && board[5] == 0){
                            document.getElementById("5").click();
                        }
                        else if(board[3] == 0 && board[4] == "X" && board[5] == "X"){
                            document.getElementById("3").click();
                        }
                        else if(board[6] == "X" && board[7] == "X" && board[8] == 0){
                            document.getElementById("8").click();
                        }
                        else if(board[6] == "X" && board[7] == 0 && board[8] == "X"){
                            document.getElementById("7").click();
                        }
                        else if(board[6] == 0 && board[7] == "X" && board[8] == "X"){
                            document.getElementById("6").click();
                        }
                        else if(board[0] == "X" && board[3] == "X" && board[6] == 0){
                            document.getElementById("6").click();
                        }
                        else if(board[0] == "X" && board[3] == 0 && board[6] == "X"){
                            document.getElementById("3").click();
                        }
                        else if(board[0] == 0 && board[3] == "X" && board[6] == "X"){
                            document.getElementById("0").click();
                        }
                        else if(board[1] == "X" && board[4] == "X" && board[7] == 0){
                            document.getElementById("7").click();
                        }
                        else if(board[1] == 0 && board[4] == "X" && board[7] == "X"){
                            document.getElementById("1").click();
                        }
                        else if(board[2] == "X" && board[5] == "X" && board[8] == 0){
                            document.getElementById("8").click();
                        }
                        else if(board[2] == "X" && board[5] == 0 && board[8] == "X"){
                            document.getElementById("5").click();
                        }
                        else if(board[2] == 0 && board[5] == "X" && board[8] == "X"){
                            document.getElementById("2").click();
                        }
                        else if(board[0] == "X" && board[4] == "X" && board[8] == 0){
                            document.getElementById("8").click();
                        }
                        else if(board[0] == 0 && board[4] == "X" && board[8] == "X"){
                            document.getElementById("0").click();
                        }
                        else if(board[2] == "X" && board[4] == "X" && board[6] == 0){
                            document.getElementById("6").click();
                        }
                        else if(board[2] == 0 && board[4] == "X" && board[6] == "X"){
                            document.getElementById("0").click();
                        }
                        else if(board[0] == "X" && board[4] == "O" && board[8] == "X"){
                            if(board[1] == 0){
                                document.getElementById("1").click();
                            }
                            else if(board[3] == 0){
                                document.getElementById("3").click();
                            }
                            else if(board[5] == 0){
                                document.getElementById("5").click();
                            }
                            else if(board[7] == 0){
                                document.getElementById("7").click();
                            }
                            else if(board[2] == 0){
                                document.getElementById("2").click();
                            }
                            else if(board[6] == 0){
                                document.getElementById("6").click();
                            }
                        }
                        else if(board[2] == "X" && board[4] == "O" && board[6] == "X"){
                            if(board[1] == 0){
                                document.getElementById("1").click();
                            }
                            else if(board[3] == 0){
                                document.getElementById("3").click();
                            }
                            else if(board[5] == 0){
                                document.getElementById("5").click();
                            }
                            else if(board[7] == 0){
                                document.getElementById("7").click();
                            }
                            else if(board[0] == 0){
                                document.getElementById("0").click();
                            }
                            else if(board[8] == 0){
                                document.getElementById("8").click();
                            }
                        }
                        else if(board[0] == 0){
                            document.getElementById("0").click();
                        }
                        else if(board[2] == 0){
                            document.getElementById("2").click();
                        }
                        else if(board[6] == 0){
                            document.getElementById("6").click();
                        }
                        else if(board[8] == 0){
                            document.getElementById("8").click();
                        }
                        else if(board[1] == 0){
                            document.getElementById("1").click();
                        }
                        else if(board[3] == 0){
                            document.getElementById("3").click();
                        }
                        else if(board[5] == 0){
                            document.getElementById("5").click();
                        }
                        else if(board[7] == 0){
                            document.getElementById("7").click();
                        }
                    }
                }
                else{
                    player = player1;
                }
                if(gameIsWon == true){
                    board = Array(9).fill(0);
                    document.getElementById("cover").style.display = "block";
                    document.getElementById("playAgainButton").style.display = "block";
                    document.getElementById("newOpponentButton").style.display = "block";
                    document.getElementById("playAgainButton").addEventListener("click", function () {
                        document.getElementById("winMessage").textContent = "Wins!";
                        document.getElementById("playAgainButton").style.display = "none";
                        document.getElementById("newOpponentButton").style.display = "none";
                        document.getElementById("winner").style.display = "none";
                        document.getElementById("winMessage").style.display = "none";
                        document.getElementById("cover").style.display = "none";
                        for (let k = 0; k < board.length; k++){
                            document.getElementById(k).textContent = "\u00A0";
                        }
                        a.style.backgroundColor = "";
                        b.style.backgroundColor = "";
                        c.style.backgroundColor = "";
                        d.style.backgroundColor = "";
                        e.style.backgroundColor = "";
                        f.style.backgroundColor = "";
                        g.style.backgroundColor = "";
                        h.style.backgroundColor = "";
                        i.style.backgroundColor = "";
                        a.style.opacity = 1;
                        b.style.opacity = 1;
                        c.style.opacity = 1;
                        d.style.opacity = 1;
                        e.style.opacity = 1;
                        f.style.opacity = 1;
                        g.style.opacity = 1;
                        h.style.opacity = 1;
                        i.style.opacity = 1;
                        gameIsWon = false;
                        player = player1;
                    })
                    document.getElementById("newOpponentButton").addEventListener("click", function () {
                        document.getElementById("winMessage").textContent = "Wins!";
                        document.getElementById("playAgainButton").style.display = "none";
                        document.getElementById("newOpponentButton").style.display = "none";
                        document.getElementById("winner").style.display = "none";
                        document.getElementById("winMessage").style.display = "none";
                        document.getElementById("cover").style.display = "none";
                        for (let k = 0; k < board.length; k++){
                            document.getElementById(k).textContent = "\u00A0";
                        }
                        a.style.backgroundColor = "";
                        b.style.backgroundColor = "";
                        c.style.backgroundColor = "";
                        d.style.backgroundColor = "";
                        e.style.backgroundColor = "";
                        f.style.backgroundColor = "";
                        g.style.backgroundColor = "";
                        h.style.backgroundColor = "";
                        i.style.backgroundColor = "";
                        a.style.opacity = 1;
                        b.style.opacity = 1;
                        c.style.opacity = 1;
                        d.style.opacity = 1;
                        e.style.opacity = 1;
                        f.style.opacity = 1;
                        g.style.opacity = 1;
                        h.style.opacity = 1;
                        i.style.opacity = 1;
                        gameIsWon = false;
                        player = player1;
                        document.getElementById("playerScore").textContent = "Score: 0";
                        document.getElementById("opponentScore").textContent = "Score: 0";
                        document.getElementById("column1").style.display = "block";
                        document.getElementById("column2").style.display = "block";
                        document.getElementById("column3").style.display = "block";
                        document.getElementById("background").style.zIndex = 2;
                        playerScore = 0;
                        opponentScore = 0;
                        startGame();
                    })                  
                }
            }
            
        })
    }
})();

startGame();