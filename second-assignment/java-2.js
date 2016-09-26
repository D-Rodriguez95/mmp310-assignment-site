var submit = document.getElementById("submit");

document.getElementById("gif").style.visibility = "hidden";

submit.onclick = function() {
var genre = document.getElementById("genre").value;
var type = document.getElementById("type").value;
var Game = document.getElementById("Game").value;
console.log(genre, type, Game);
var message = document.getElementById("message");
message.innerHTML = "So you like " + genre + " games hmm? And your favorite game is "
+ Game + "?";

document.getElementById("gif").style.visibility= "visible";
    
}

