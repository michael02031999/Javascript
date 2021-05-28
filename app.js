alert("I am a big asshole");


let array = [];
let string = "";
do {
    string = prompt("What would you like to do?");
    if (string === "new") {
        let toDo = prompt("Add your toDo");
        array.push(toDo);
        console.log(array);
    }
} while ((string !== "quit"));