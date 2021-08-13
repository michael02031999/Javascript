//REVIEW 
//PROBLEM #1
function triangle() {
    for (let i = 1; i < 8; i++) {
        console.log('#'.repeat(i));
    }
}

//PROBLEM #2 
function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i %3 == 0 && i % 5 ==0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i)
        }
        
    }
}


//PROBLEM #3
function chessboard(bindingSize) {
    let char = '#';
    let space=' ';
    let board = "";
    for(let i = 0; i < bindingSize; i++) {
        for(let j = 0; j < bindingSize; j++) {
            if (j%2 == 0 && i%2==0 || j%2==1 && i%2==1) {   
                board += space;
            }
            else {
                board+= char;
            }
            
        }
        board += "\n";
    }
    console.log(board);
}

//PROBLEM #4
function min(x,y) {
    if (x < y) {
        return x;
    }
    else {
        return y;
    }
}

//PROBLEM #5
function isEven(num) {
    if (num== 0) {
        return true;
    }
    else if (num == 1 || num ==-1) {
        return false
    }
    else {
        return isEven(Math.abs(num-2));
    }
}

//PROBLEM #6

function countBs (string) {
    return countChar(string, "B");
}

function countChar(string, char) {
    let num= 0
    for (let i = 0; i < string.length; i++) {
        if(string[i]==char) {
            num++
        }
    }
    return num;
}

//PROBLEM #7

function range(start, end, step) {
    let array=[];
    if (start < end) {
        for (let i = start; i <= end; i++) {
            array.push(i);
        }
    }
    else if (start > end) {
        for (let i = start; i >= end; i+=step) {
            array.push(i);
        }
    }
    
    return array;
}

function sum(array) {
    let sum = 0;
    for (let k = 0; k < array.length; k++) {
        sum = sum + array[k];
        
    }
    return sum; 
}

//PROBLEM #8

function reverseArray(array) {
    let newArray=[]
    for (let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArray(array) {
    let newArray=[];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

//console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
    for(let i = 0; i < array.length/2; i++) {
        let temp = array[i];
        array[i]=array.length-i
        array[array.length-i-1]=temp ;
    }
    return array;
}

let arrayValue=[1,2,3,4,5,6,7];
//console.log(reverseArrayInPlace(arrayValue));

//PROBLEM #9

function arrayToList(array) {

    let object= null;
    
    for (let i = array.length-1; i >= 0; i--) {
        object={value: array[i], rest: object};
    }
    return object;
}

//arrayToList([10, 20,30]);

function listToArray(list) {
    let array=[];
    
    for (let x = list; x; x=x.rest) {
        
        array.push(x.value);
    }
    return array;
}

//console.log(listToArray(arrayToList([10, 20, 30])));

function prepend (element, list) {
    let obj = {};
    obj.value=element;
    obj.rest=list;
    return obj;
}


//let x = arrayToList([10,20,30]);


//console.log(prepend(10, prepend(20, null)));

function nth(list, num) {
    if (list.rest==null) {
        return undefined;
    } 
    if (num==0) {
        return list.value;
    }
    else if (num==1) {
        let x = list.rest;
        return x.value;
    }
    else {      
        return nth(list.rest, num-1)
    }   
}

//console.log(nth(x, 3));


//PROBLEM #10

function deepEqual(object1,object2) {

    if((typeof object1 == "object" && object1 !== null) && (typeof object2 == "object" && object2 !== null )) {
        let keys=Object.keys(object1);
        let keys2=Object.keys(object2);

        for (let i = 0; i < keys.length; i++) {
            if (keys[i] !== keys2[i]) {
                return false;
            }
        }
        
        if(keys.length == keys2.length) {
            for (let key of keys) {
                return deepEqual(object1[key], object2[key]);    
            }
        }
        else {
            return false; 
        }
    }
    else if(object1 == object2) {
        return true; 
    }
    else {
        return false;
    }
    
}

/*let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, {piss: 1, object: 2}));*/


//PROBLEM #11
function flatten (array) {
    return array.reduce((a,b) => a.concat(b));
}
let arrays = [[1, 2, 3], [4, 5], [6]];
//console.log(flatten(arrays));

//PROBLEM #12 

function loop (value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i);
    }
}
//console.log(loop(3, n => n > 0, n => n - 1, console.log));

//PROBLEM #13

function every(array, test) {
    return !array.some(element => !test(element));
}

//console.log(every([1, 3, 5], n => n < 10));
//console.log(every([2, 4, 16], n => n < 10));
//console.log(every([], n => n < 10));

//PROBLEM #14

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
  
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  
  function dominantDirection(text) {
    let newArr = Array.from(text);
    let completeArray = [];

    for(let i = 0; i < newArr.length; i++) {
      completeArray.push(characterScript(newArr[i].codePointAt(0)));
    }

    let workingArray=completeArray.filter(x => x !== null);
    let scriptType = countBy(workingArray, (x => x.direction));

    let store=[];
    for (let j = 0; j < scriptType.length; j++) {
      store.push(scriptType[j].count); 
    }

    let position = store.indexOf(Math.max(...store));
    
    return scriptType[position].name;
  }

//PROBLEM #15

class Vec {
    constructor (x,y) {
        this.x=x;
        this.y=y;
    }

    plus (vector) {
        this.x=this.x+vector.x;
        this.y=this.y+vector.y;
        return new Vec(this.x,this.y);
    }

    minus (vector) {
        this.x=this.x-vector.x;
        this.y=this.y-vector.y;
        return new Vec(this.x,this.y);
    }

    get length () {
        return Math.sqrt(this.x * this.x + this.y*this.y)
    }
}

/*console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);*/

//PROBLEM #16

class Group {
    constructor() {
        this.members=[];
    }
    add(value) {
      	if(this.members.includes(value)==false) {
        	this.members.push(value);
        }
    }
    has(value) {
        if (this.members.includes(value)==true) {
            return true;
        }
        else {
            return false;
        }
    }
    delete(value) {
        if(this.members.includes(value)==true) {
           let newArr=this.members.splice(this.members.indexOf(value), 1);
           return this.members;
        } 
    }
    static from(iterObject) {
      	let newGroup = new Group();
      	for (let arrayIndex of iterObject) {
          newGroup.add(arrayIndex);
        }
      	return newGroup;
    }

    [Symbol.iterator]() {
        
        return new GroupIterator(this);
      }
}


//PROBLEM #17

class GroupIterator {
  constructor (member) {
    this.x = 0;
    this.members=member;
  }
  
  next() {
    if (this.x == this.members['members'].length) {
      return {done: true};
    }

    
    let value = {value: this.members['members'][this.x], done: false};
    this.x++;
    return value;
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  //console.log(value);
}

//PROBLEM #18

//let map = {one: true, two: true, hasOwnProperty: true};
let map = {one: true, two: true, hasOwnProperty: true};
Object.prototype.hasOwnProperty = function(parameter) {
    let array = Object.keys(this)
    return array.includes(parameter); 
}

//console.log(Object.prototype.hasOwnProperty);
hasOwnProperty.call(map, "one");


//PROBLEM #19


const roads = [
    "Alice's House-Bob's House",   
    "Alice's House-Cabin",
    "Alice's House-Post Office",   
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House", 
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House", 
    "Grete's House-Farm",
    "Grete's House-Shop",          
    "Marketplace-Farm",
    "Marketplace-Post Office",     
    "Marketplace-Shop",
    "Marketplace-Town Hall",       
    "Shop-Town Hall"
  ];
  
  function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      
      if (graph[from] == null) {
        graph[from] = [to];
      } 
      else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
         addEdge(to, from);
    }
    return graph;
  }

  const roadGraph = buildGraph(roads);

   
  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  } 
  
  function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
  }


class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
  }

  

  const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];


function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];

    for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      for (let place of graph[at]) {
        if (place == to) return route.concat(place);
        if (!work.some(w => w.at == place)) {
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
   }

function runRobotCompetition(state, robot, memory) {
    for (let steps = 0; ; steps++) {
        if (state.parcels.length == 0) {
            return steps;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
  }  


  function compareRobots(robot1, memory1, robot2, memory2) {
      let sum = 0;
      let sum2 = 0;  
      for (let task = 0; task < 100; task++) {
        sum += runRobotCompetition(VillageState.random(), robot1, memory1);
        sum2 += runRobotCompetition(VillageState.random(), myRobotWinner, memory2);
      }
      console.log(`robot1 time: ${sum/100}`);
      console.log(`robot2 time: ${sum2/100}`);
  }

  

//PROBLEM #20


function runRobot(state, robot, memory) {
    
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory; 
    }
  }

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};


function hasPackage (place, parcels) {
    for (let i =.0; i < parcels.length; i++) {
      if (place == parcels[i].place) {
        return true;
      }
    }
    return false; 
  }
  
  function closestPackage (startingSpot, parcels) {
    let arrayOfRoutes=[];
    for (let i = 0; i < parcels.length; i++) {
      if (startingSpot !== parcels[i].place) {
        arrayOfRoutes.push(findRoute(roadGraph, startingSpot, parcels[i].place))
      }
    }
    if (arrayOfRoutes.length == 0) {
      return [];
    }
    else {
      route = arrayOfRoutes.reduce(function(a, b) {
          return a.length <= b.length ? a : b;
        });
    }
    return route; 
  }
  
  function closestAddress(place, parcels) {
    let arrayOfRoutes=[];
    let currentPackagesRoute=[];
    for (let i = 0; i < parcels.length; i++) {
      if (place !== parcels[i].address) {
          arrayOfRoutes.push(findRoute(roadGraph, place, parcels[i].address))
      } 
    }
    let newArrayOfRoutes = arrayOfRoutes.filter(x => x.length > 1);
    if (newArrayOfRoutes.length > 0){
      route = newArrayOfRoutes.reduce(function(a, b) {
          return a.length <= b.length ? a : b;
        });
    }
    else {
      route = arrayOfRoutes.reduce(function(a, b) {
          return a.length <= b.length ? a : b;
        });
    }
    return route;
  }
  
  function compareRoutes(closestPackage, closestAddress) {
    if (closestPackage.length == 0) {
      return closestAddress;
    }
    
    if (closestPackage.length <= closestAddress.length) {
      return closestPackage;
    }
    else {
      return closestAddress;
    }
  }
  
  function myRobotWinner ({place, parcels}, route) {
      if (route.length == 0) {
        if (hasPackage(place, parcels) == false) {
          route = closestPackage(place, parcels);
        }
        if (hasPackage(place, parcels) == true) {
          route = compareRoutes(closestPackage(place, parcels), closestAddress(place, parcels))
        }
      }
       return {direction: route[0], memory: route.slice(1)};
  }


/*let num = 0;
for (let i = 0; i < 100; i++) {
    num += runRobot(VillageState.random(), myRobotWinner, []);
}*/

//PROBLEM #21

class PGroup {
    
}



