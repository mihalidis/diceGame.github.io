
function RollDice(){
  function randomDiceNumber(min,max){
      return Math.random()*(max-min+1) + min;
  }
  var player1 = Math.floor(randomDiceNumber(1,6));
  var player2 = Math.floor(randomDiceNumber(1,6));

  var player1Src = "images/dice"+player1+".png";
  var player2Src = "images/dice"+player2+".png";

  document.querySelector(".img1").setAttribute("src",player1Src);
  document.querySelector(".img2").setAttribute("src",player2Src);

  if(player1>player2){
    document.querySelector(".refreshMe").innerHTML = "🚩 Player 1 Wins";
  }
  else if(player1<player2){
    document.querySelector(".refreshMe").innerHTML = "Player 2 Wins 🚩";
  }
  else{
    document.querySelector(".refreshMe").innerHTML = "Draw!";
  }
}
