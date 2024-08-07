
// Create a class named Person with a constructor that takes name and age as parameters.

class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    };

    // Add a static method called greet that returns a string

    static greet(){
        return "Hello There!";
    };

    // Add a method to the prototype called canSleep that will return 

    cansleep(){
        return `${this.name} Is Sleeping`
    };
};

// all the method and properties are console it of person class

let p1 = new person("Anuj",21);

console.log(p1);
console.log(person.greet());
console.log(p1.cansleep());



// Create a class named emplay with a constructor inherits from Person.

class employ extends person{
    // create a private properties #salary.
    #salary

    constructor(name,age,salary){
        super(name,age);
        this.#salary = salary;
    };

    // get private properties 

    get salary(){
        return this.#salary;
    }

    // set private properties

    set newsalary(val){
        if(val > 0){
            this.#salary = val
        }
        else{
            console.log("Salary must be a positive number.")
        }
    }


    // create a ptototype method and return

    working(){
        return `${this.name} Is Working`
    }

}



// all the method and properties are console it of person class

let E1 = new employ("Ramu",26,56000)
console.log(E1)
console.log(E1.salary)
E1.newsalary = 50000;
console.log(E1.salary)
console.log(E1.working())


// Create a class named Manager with a constructor inherits from Employe.

class Manager extends employ{

    constructor(name,age,salary,) {
        super(name,age,salary)
    }

    // create a static mathed 

    static getrole(){
        return "Manager";
    }

    // create a ptototype method and return

    managing(){
        return `${this.name} Is Managing`
    }
}

// some method and properties are console it of person class

let M1 = new Manager("Anuj",20,5000)
console.log(M1)
console.log(M1.managing())
console.log(Manager.greet())
console.log(Manager.getrole())



// Create a class named Executive with a constructor inherits from Manager.

class Executive extends Manager{

    // Create a private properties name #bonus.
    
    #bonus
    constructor(name,age,salary,bonus){
        super(name,age,salary)
        this.#bonus = bonus
    }

    // get private prooerties

    get bonus(){
        return this.#bonus;
    }

    // set private properties

    set newbonus(value){
        if(value > 0){
            this.#bonus = value;
        }
       
    }
}

// and all the properties and method are console it.

let EX1 = new Executive("Pavan",22,20000,2500)

console.log(EX1)
console.log(EX1.cansleep())
console.log(EX1.salary)
EX1.newsalary = 25000;
console.log(EX1.salary)
console.log(EX1.working())
console.log(Executive.greet())
console.log(Executive.getrole())
console.log(EX1.managing())
