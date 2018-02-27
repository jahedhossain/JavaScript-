//colors number
var numSquares = 6;
var colors = generateRandomColors(numSquares);
//document all square select
var squares = document.querySelectorAll(".square");
// document colors code display
var colorDisplay = document.getElementById("colorDisplay");
//document game select message
var messageDisplay = document.querySelector("#message");
//document h1 tag
var h1 = document.querySelector("h1");
//document reset button select
var resetButton = document.querySelector("#reset");
//document easyBtn button select
var easyBtn = document.querySelector("#easyBtn");
//document hardBtn button select
var hardBtn = document.querySelector("#hardBtn");

// game single color store
var pickedColor = pickColor();


// Easy Button click function
easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	console.log(colors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

// Hard Button click function
hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

// Reset Button click function
resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#3b444c";
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	// click squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		
		//compare color to pickedColor
		console.log(clickedColor,pickedColor);
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
colorDisplay.textContent = pickedColor;

//game win squares all colors
function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

// game single color continues change
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// game all colors generator store
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

// game single color generator
function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
