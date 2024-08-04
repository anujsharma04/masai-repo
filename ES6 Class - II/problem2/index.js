// 

// factory function ----------------------------------

function animal(NumOfLeg, Vegitrion) {
    let obj = {};
    obj.NumOfLeg = NumOfLeg;
    obj.Vegitrion = Vegitrion
    obj.eat = function () {
        console.log("Eating.........")
    }
    obj.great = function () {
        console.log(`Hi, I have ${NumOfLeg} legs.`)
    }
    return obj;
}

let a1 = animal(4, false)
console.log(a1.NumOfLeg);
console.log(a1.Vegitrion);

// method 
a1.eat();  //"Eating........."
a1.great();  // `Hi, I have 4 legs.`


// constractor function --------------------------------------------


function animal1(NumOfLeg, Vegitrion) {
    this.NumOfLeg = NumOfLeg;
    this.Vegitrion = Vegitrion;
    this.eat = function () {
        console.log("Eating.........")
    }
    this.great = function () {
        console.log(`Hi, I have ${NumOfLeg} legs.`)
    }
}

let a2 = new animal1(4, true)

// properties

console.log(a2.NumOfLeg);
console.log(a2.Vegitrion);

// method 
a2.eat();  //"Eating........."
a2.great();  // `Hi, I have 4 legs.`


// ES6 class -------------------------------------------


class animal2 {
    constructor(NumOfLeg, Vegitrion) {
        this.NumOfLeg = NumOfLeg;
        this.Vegitrion = Vegitrion;
    }
    eat() {
        console.log("Eating.........")
    }
    great() {
        console.log(`Hi, I have ${this.NumOfLeg} legs.`)
    }

}

let a3 = new animal2(4,false)

// properties

console.log(a3.NumOfLeg);
console.log(a3.Vegitrion);

// method 
a3.eat();  //"Eating........."
a3.great();  // `Hi, I have 4 legs.`