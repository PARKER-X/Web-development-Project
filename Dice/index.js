// Dark Mode
function myFunction(){
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = 'black';
    x.style.color = 'aqua';
    document.getElementById("button").innerHTML='Light Mode';
}

// Random Number
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
// console.log(randomNumber1);
// console.log(randomNumber2);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImagesource1 = "img/" + randomDiceImage1;
var randomImagesource2 = "img/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource1)

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource2);

// Conditions
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " Player 1 Wins! ";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML=" Player 2 Wins! ";
}
else {
    document.querySelector("h1").innerHTML = " Draw! ";
}

