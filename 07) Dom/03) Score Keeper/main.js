
// Document Selector variable
var playing_one = document.querySelector(".bt_1");
var playing_two = document.querySelector(".bt_2");
var reset_game = document.querySelector(".reset");
var input_count = document.querySelector("#input_count");

// Document Content Show variable
var scroe_one = document.querySelector(".scroe_one");
var scroe_two = document.querySelector(".scroe_two");
var input_show = document.querySelector(".input_show");

//scroe_start Value
var scroe_start_one = 0;
var scroe_start_two = 0;


//Scroe Condition
var game_over_bt_one = false;
var game_over_bt_two = false;
var game_win = 5; 

//Document playing_one Button Function
	playing_one.addEventListener('click',function(){

		if(!game_over_bt_one){
			scroe_start_one ++;

			if(scroe_start_one === game_win){
				scroe_one.classList.add("win");
				game_over_bt_one = true;
				
			}
		}

		scroe_one.textContent = scroe_start_one;
	});


//Document playing_Two Button Function
	playing_two.addEventListener('click',function(){

		if(!game_over_bt_two){
			scroe_start_two ++;

			if(scroe_start_two === game_win){
				scroe_two.classList.add("win");
				game_over_bt_two = true;
			}
		}
		
		scroe_two.textContent = scroe_start_two;
	});

//Document Reset Button Function
	reset_game.addEventListener('click', function(){
		scroe_start_one= 0;
		scroe_start_two = 0

		scroe_one.textContent = 0;
		scroe_two.textContent = 0;

		scroe_one.classList.remove("win");
		scroe_two.classList.remove("win");

		game_over_bt_one = false;
		game_over_bt_two =false;
	});

//Document Reset Button Function
	input_count.addEventListener('change',function(){
		
		input_show.textContent = this.value;
		
		game_win = Number(this.value);

	});  