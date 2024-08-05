// create Factory function name createanimal and return obj  

function createAnimal(Name,sound){
    let obj = {};
    obj.Name = Name;
    obj.sound = sound;

    // add method


    obj.makesound = function(){
        console.log(obj.sound)
    }

    return obj;
}

// inherit createanimal function in createdog function 


function createdog(Name,sound,breed){
    let obj1 = createAnimal(Name,sound)
    obj1.breed = breed;


    // add method 


    obj1.fetch = function(){
        console.log(`${obj1.Name}fetches the ball`)
    }
    return obj1;
}

// create a vriable and name a1 ant store function call obj

let a1 = createdog("Dog","Woof","Labrador")
 console.log(a1);

// call method 

a1.makesound();
a1.fetch();