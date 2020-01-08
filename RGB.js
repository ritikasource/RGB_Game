var numSquares=6;
var color = generateRandomColor(numSquares);
var square=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var pickcolor=selectedColor();
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var easybtn= document.querySelector("#easybtn");
var hardbtn= document.querySelector("#hardbtn");



easybtn.addEventListener("click",function(){

easybtn.classList.add("selects");
hardbtn.classList.remove("selects");

numSquares=3;
color=generateRandomColor(numSquares);
pickcolor=selectedColor();
colorDisplay.textContent=pickcolor;
for(var i=0; i<square.length;i++)
{
	if(color[i])

	{
		//square[i].style.display="block";
		square[i].style.backgroundColor=color[i];
	}
	else
		{
			square[i].style.display="none";
		}
}
});

hardbtn.addEventListener("click",function(){

hardbtn.classList.add("selects");
easybtn.classList.remove("selects");

numSquares=6;
color=generateRandomColor(numSquares);
pickcolor=selectedColor();
colorDisplay.textContent=pickcolor;
for(var i=0; i<square.length;i++)
{
	
		square[i].style.backgroundColor=color[i];
		square[i].style.display="block";



}
});




resetButton.addEventListener("click",function()
{
   //generate random colors
     color = generateRandomColor(numSquares);

   //pick color
   pickcolor= selectedColor();


   //change the color
   colorDisplay.textContent=pickcolor;

for(var i=0; i<square.length; i++)
{
	//color set intially
	square[i].style.backgroundColor=color[i];
}
h1.style.backgroundColor="#232323";
});


for(var i=0; i<square.length; i++)
{
	//color set intially
	square[i].style.backgroundColor=color[i];
	//event listener being added
	square[i].addEventListener("click",function(){
    //grab the clicked color
    var clickedColor = this.style.backgroundColor;
    //compare it with the picked color
    if(clickedColor === pickcolor)
    	{
    		messageDisplay.textContent="Correct";
    		resetButton.textContent="Play again?"

            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;


    	}
    else
    {

    this.style.backgroundColor = "#232323";
    messageDisplay.textContent="Try Again";



    }
	});
}

function changeColor(color)
{
	for(var i=0; i<square.length; i++)
{
	//color set intially
	square[i].style.backgroundColor=color;
}
}

function selectedColor()
{
	var selected=Math.floor(Math.random()*color.length);
	return color[selected];
}

function generateRandomColor(num)
{
	//make an array
	var arr=[];
	//loop through num times
	for(var i=0;i<num;i++)
	{
      arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor()
{
   //random selction for red from 0 to 256
   	var r= Math.floor(Math.random()*256);

   //random selction for green  from 0 to 256
    var g= Math.floor(Math.random()*256);

   //random selction for blue from 0 to 256
    var b= Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";


}
