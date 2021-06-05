function countBs(string) {
    let count=0;
    for (let i = 0; i < string.length; i++) {
        if (string[i]==='B') {
            count=count+1;
        }
    }
    return count;
}

console.log(countBs('BasBak'));

function countChar(string, index, ) {
    let countTwo=0
    for (let i = 0; i < string.length; i++) {
        if (string[i]===index) {
            countTwo+=1;
        }
    }
    return countTwo;
}


console.log(countChar("kakkerlak", "k"));
