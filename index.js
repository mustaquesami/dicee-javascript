// player 1 function start
function player1(){
    let player1Rand = Math.random()*6;
    let player1 = Math.floor(player1Rand)+1;
    let player1Div= document.querySelector(".img1");
    let sourceURL1 = `images/dice${player1}.png`;
    player1Div = player1Div.setAttribute("src",sourceURL1);
    return player1;
}
// player 1 function end

// player 1 function start
function player2(){
    let player2Rand = Math.random()*6;
    let player2 = Math.floor(player2Rand)+1;
    let player2Div= document.querySelector(".img2");
    let sourceURL2 = `images/dice${player2}.png`;
    player2Div = player2Div.setAttribute("src",sourceURL2);
    return player2;
}
// player 1 function end

// compare player result start
let player1Result = player1();
let player2Result = player2();
function comparePlayer(player1,player2){
    if(player1 > player2){
        let compareID = document.querySelector("h1");
        compareID.innerHTML="Player 1 Wins!";
    }
    else if(player2 > player1){
        let compareID = document.querySelector("h1");
        compareID.innerHTML="Player 2 Wins!";
    }
    else{
        let compareID = document.querySelector("h1");
        compareID.innerHTML="Draw!";
    }
}
comparePlayer(player1Result,player2Result);
// compare player result end