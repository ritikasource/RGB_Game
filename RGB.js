
var color=[
"rgb=(255, 0, 0)",
"rgb=(0, 255, 255)",
"rgb=(255, 0, 255)",
"rgb=(255, 255, 0)",
"rgb=(0, 0, 255)",
"rgb=(0, 255, 255)"

]

var square=document.querySelectorAll(".square");
var pickcolor=color[2];
var colorDisplay=document.getElementById("colorchng");

for(var i=0; i<square.length; i++)
{
	square[i].style.backgroundColor=color[i];
}