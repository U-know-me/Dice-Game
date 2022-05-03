if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}
function rollDice(){

var randomNumber1=Math.floor(Math.random()*6) + 1;

var randomImage1="dice" + randomNumber1 + ".png";

var randomImageNumber1="images/" + randomImage1; 

document.querySelectorAll("img")[0].setAttribute("src",randomImageNumber1);

var randomNumber2=Math.floor(Math.random()*6) + 1;

var randomImage2="dice" + randomNumber2 + ".png";

var randomImageNumber2="images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImageNumber2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins."
} 
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins."
}
else{
    document.querySelector("h1").innerHTML="Nobody wins."
}

}

// if (performance.getEntriesByType("navigation")[0].type === "reload") {
//     rollDice();
// }