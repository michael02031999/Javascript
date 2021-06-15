function arrayToList(array) {
    let list = null; 
    for (let i = array.length; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list; 
}

function listToArray (list) {
    let array = [];
    for (let node = list; node; node=node.rest){
        if (node.value !== undefined) {   
            array.push(node.value);
        } 
    }
    return array;
}

function prepend(element, list) {
    let newList={};
    newList.value=element;
    newList.rest=list;
    return newList;
}

function nth (list, number) {
    let array =[];
    for (let node = list; node; node = node.rest) {
        if(node.value!==undefined) {
            array.push(node.value);
        }  
    }
    return array[number];
}


console.log(nth(arrayToList([10,20,30]), 0))

//console.log(prepend(10, prepend(20, null)));

//console.log(arrayToList([10,20,30]));
//console.log(listToArray(arrayToList([10,20,30])));