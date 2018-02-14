var todos = ["Bay new todus"];
//aks input
var input = prompt("what whold you like to do");


while(input !== "quit"){

	if(input === "list"){
		//all todu list
		console.log(todus);

	}else if (input === "new"){

		//new todo create name 
		var newtodo = prompt("Enter new Todo")

		//old todu add new todu add
		todos.push(newtodo);

		//show todu
		console.log(todos);
	}
//aks input
var input = prompt("what whold you like to do");
}
console.log("ok You Quit the app");