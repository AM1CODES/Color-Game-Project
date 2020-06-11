var numsquares = 6;
var colors = generaterandomcolors(numsquares);
var square  = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent = pickedcolor;
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybutton = document.getElementById("easybtn");
var hardbutton = document.getElementById("hardbtn");

easybutton.addEventListener("click" , function(){ //we use this method to switch to the easy button and we reduce  the number of squares to three
    hardbutton.classList.remove("selected");
    easybutton.classList.add("selected");
    numsquares = 3;
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i =0;i<square.length;i++)
    {
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
});
hardbutton.addEventListener("click" , function(){ //we use this method to switch to hard mode whiich has 6 squares
    hardbutton.classList.add("selected");
    easybutton.classList.remove("selected");
    numsquares = 6;
    colors = generaterandomcolors(numsquares);
    pickedcolor = colors[Math.floor(Math.random()*colors.length)];
    colordisplay.textContent = pickedcolor;
  for(var i=0; i<square.length; i++) 
  {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
  }
});
 
resetbutton.addEventListener("click",function(){ //this button helps us reset our colors to get a new set of colors
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    messagedisplay.textContent = "";
    this.textContent = "New Color";
    for(var i = 0;i<colors.length;i++)
{
    square[i].style.backgroundColor = colors[i];
}
    h1.style.backgroundColor = "steelblue"
});

for(var i = 0;i<colors.length;i++) //loop to check whether our picked color was correct or not.If its correct it displays correct or else the square disappears and it displays Try Again.
{
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click",function(){
        var clickedcolor = this.style.backgroundColor;
        if(clickedcolor === pickedcolor)
        {
            messagedisplay.textContent  = "Correct!"
            changecolor(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
            resetbutton.textContent = "Play Again?"
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messagedisplay.textContent  = "Try Again!"
        }
    });
}
function changecolor(color) //method to change color of the squares with the correct color that was chosen
{
    for(var i =0;i<square.length;i++)
    {
        square[i].style.backgroundColor = color;
    }
}
function pickcolor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generaterandomcolors(num) //method to generate an array of the random colors created
{
    var arr = [];
    for(var i =0;i<num;i++)
    {
        arr.push(randomcolor());
        
    }
    return arr;
}
function randomcolor() //method to create our random rgb colors
{
    var red = Math.floor(Math.random() * 256); //for red
    var green = Math.floor(Math.random() * 256); //for green
    var blue = Math.floor(Math.random() * 256); //for blue
    return "rgb(" + red + ", " + green + ", " + blue + ")";

}