var randomNumber1;
randomNumber1=Math.floor(6*Math.random()+1);
var randomimg1=document.querySelectorAll("img")[0];
var imgPath1="images/dice"+randomNumber1+".png";
randomimg1.setAttribute("src",imgPath1);

var randomNumber2;
randomNumber2=Math.floor(6*Math.random()+1);
var randomimg2=document.querySelectorAll("img")[1];
var imgPath2="images/dice"+randomNumber2+".png";
randomimg2.setAttribute("src",imgPath2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="player1 won the match🚩";
}
else if(randomNumber1<randomNumber2)
{
   document.querySelector("h1").innerHTML="player2 won the match🚩"
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}
