var casual = document.getElementById("casual");

document.getElementById("gif").style.visibility = "hidden";

casual.onclick = function () {

document.getElementById("gif").style.visibility= "visible";
    
}

document.getElementById("subTitle").addEventListener("click", h2Change);

function h2Change() {
    document.getElementById("subTitle").innerHTML = "YOU CLICKED ME!";
    document.getElementById("subTitle").style.fontSize = "420px";
}

document.getElementById("song").addEventListener("click", enableLoop);

function enableLoop() { 
  alert("You won't stop this.");
    song.loop = true;
  song.load();

}

document.getElementById("theTitle").addEventListener("mouseover", fontChange);

function fontChange() { 
document.getElementById("theTitle").style.font = "italic bold 420px arial,serif";
}

document.getElementById("theVid").addEventListener("click", popUp);

function popUp() {
    alert("Did you say Pop up?");
    vid.pause();
}





//Not sure what went wrong in the code below 

document.getElementById("furniture").addEventListener("click", resizeImage);

function resizeImage() {
    document.getElementById("furniture") = Math.random();
}

