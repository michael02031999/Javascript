let array = [];
let string = "";
do {
    string = prompt("What would you like to do?");
    if (string === "new") {
        let toDo = prompt("Add your toDo");
        array.push(toDo);
        console.log(`${toDo} added to the list`);
        
    }
    if (string === "list") {
        console.log("********");  
        for (let i = 0; i < array.length; i++) {
            console.log(i + ": " + array[i]);
        }
        console.log("********");    
    }

    if (string === "delete"){
        index = Number(prompt("Enter index of todo to delete"))
        array.splice(index, 1);
        console.log("ToDo Removed");
    }

    if (string === "quit") {
        console.log("OK, YOU QUIT THE APP");
    }
} while ((string !== "quit"));

function range(a,b, step) {
    if (step === undefined) {
        step=1;
    }
    let array=[];
    if(a<b) {
        for (let i = a; i <= b; i=i+step) {
            array.push(i);
        }
    }
    if (a > b) {
        for (let i = a; i>=b; i=i+step) {
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}





