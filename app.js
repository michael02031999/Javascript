class Vec {

    constructor(x,y) {
        this.x = x;
        this.y = y;    
    }

    plus(object) {
        return (new Vec(this.x + object.x, this.y + object.y));
    }

    minus(object) {
        return (new Vec(this.x - object.x,this.y - object.y));
    }

    get length() {
        console.log(Math.sqrt(this.x*this.x + this.y*this.y));
    }
    
}

console.log(new Vec(1, 2));


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
new Vec(3, 4).length;