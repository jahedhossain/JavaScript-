var h1 = document.querySelector("h1");// select

var isBlue = false;

setInterval(function(){
	if(isBlue){
		h1.style.background ="white";
		h1.style.textAlign = "left";
	} else{
		h1.style.background = "#ffc9d6";
		h1.style.textAlign = "center";
	}
	isBlue = !isBlue;
},1000)