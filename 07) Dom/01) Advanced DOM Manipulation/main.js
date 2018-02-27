var button = document.querySelector("button");
//var pragraph = document.querySelector("p");

var change = false;

button.addEventListener("click",function(){
	if(change){
		document.body.style.background = "purple";
		change = false;
	}else{
		document.body.style.background = "red";
		change = true;
	}
	
}); 



/* button.addEventListener("click",function(){
	if(change){
		pragraph.style.background = "purple";
	}else{
		pragraph.style.background = "red";
	}
	change = !change
	
});
 
*/

/*
	button.addEventListener("click", function(){
	document.body.classList.toggle("change")
	
}) 

*/