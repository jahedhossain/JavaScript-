var All_li = document.querySelectorAll("li");


for(var i = 0; i < All_li.length; i++){

All_li[i].addEventListener('mouseover', function(){
	this.style.color = "red";
});

All_li[i].addEventListener('mouseout', function(){
	this.style.color = "black";
});

All_li[i].addEventListener('click', function(){
	this.classList.toggle("bg");
});


}


