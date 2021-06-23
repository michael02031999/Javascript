let arrays = [[1,2,3], [4,5], [6]];

let newArray = arrays.reduce(function (array1, array2) {
    return array1.concat(array2);
})

//console.log(newArray);

function loop (value, testFunc, updateFunc, bodyFunc) {
    do {
        bodyFunc(value);
        value = updateFunc(value);
    } while (testFunc(value));
}

//loop(5, n => n > 0, n => n - 1, console.log);

function every(array, test) {
    let newArr=[];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i]) == false) {
            return false;
        } 
    }
    return true;
}

//console.log(every([1,3,5], n => n <3));

function every2(array, test) {
    return !array.some(element => 
        console.log(!test(element)));
}

console.log(every2([1, 3, 5], n => n < 10));