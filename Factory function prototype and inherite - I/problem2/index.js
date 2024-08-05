// create constructor function name createanimal and return obj  

function createAnimal(Name,sound){
    
    this.Name = Name;
    this.sound = sound;

    // add method


    this.makesound = function(){
        console.log(this.sound)
    }

    
}


// inherit createanimal function in createdog constructor function 


function createdog(Name,sound,breed){
       
    createAnimal.call(this,Name,sound)
     this.breed = breed;

    // add method 


    this.fetch = function(){
        console.log(`${this.Name}fetches the ball`)
    }

}

// create a vriable and name a1 ant store a constructor function call obj

let a1 =new createdog("Dog","Woof","Labrador")

// call method 

a1.makesound();
a1.fetch();