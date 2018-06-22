var todos = ["Win Lottery"];

var input = prompt("What would you like to do?");
while(input !=="quit"){
    if(input === "new"){
        var newInput = prompt("Enter a new task todo");
        todos.push(newInput);
        console.log(todos);
    }
    else if(input === "view"){
        //alert(todos);
        console.log("*****");
        todos.forEach(function(todo, index){
            console.log(index+": "+todo);
        });
        console.log("*****");
    }
    else if(input ==="delete"){
        var index = prompt("Enter index of todo to delete");
        //Delete that todo via splice()
        todos.splice(index,1);
        console.log("Deleted Todo");
    }
    else{
        alert("Please enter use one of the commands\nnew, view, quit");
        console.log("Please enter use one of the commands\nnew, view, delete, quit");
    }
    input = prompt("What would you like to do?");
}
alert("Application Closed");
console.log("Application Closed");

