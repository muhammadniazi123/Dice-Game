var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomdicenumber = "dice"+ randomNumber1+".png";
var randomimgsource = "images/"+ randomdicenumber;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgsource);


var randomnumber2= Math.floor(Math.random()*6)+1;
var randomdicenumber2="dice"+randomnumber2+".png";
var randomimgsource2= "images/"+randomdicenumber2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgsource2);

if(randomNumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩🚩🚩player1 wins";
}
else if(randomNumber1<randomnumber2){
    document.querySelector("h1").innerHTML="🚩🚩🚩player2 wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
};
