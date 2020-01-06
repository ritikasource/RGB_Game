
var color=[

"rgb(255, 0, 0)",
"rgb(0, 255, 255)",
"rgb(255, 0, 255)",
"rgb(255, 255, 0)",
"rgb(0, 0, 255)",
"rgb(0, 255, 0)"

]

var square=document.querySelectorAll(".square");
var pickcolor=color[2];
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickcolor;

for(var i=0; i<square.length; i++)
{
	//color set intially
	square[i].style.backgroundColor=color[i];
	//event listener being added
	square[i].addEventListener("click",function(){
    //grab the clicked color
    var clickedColor=this.style.backgroundColor;
    //compare it with the picked color
    if(clickedColor === pickcolor)
    	{
    		alert("correct!!");
    	}
    else
    {

    alert("wrong!!");
    }
	});
}