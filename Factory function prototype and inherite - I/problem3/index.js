
//create object name protoobj with some mathod


let protoobj = {
    getPrice: function () {
        return this.price;
    },
    increasePrice: function (amount) {
        let iprice = this.price + amount
        return iprice;
    },
    decreasePrice: function (amount) {
        let dprice = this.price - amount
        return dprice;
    },
    isExpensive: function () {
        return this.price >= 100;
    }

}

// create factory function name createproduct with some properties

function createproduct(product_name, brand, price, rating) {
    let obj = {};
    obj.product_name = product_name;
    obj.brand = brand;
    obj.price = price;
    obj.rating = rating;

// protoobj set prototype object in obj 

    Object.setPrototypeOf(obj, protoobj)

    return obj;
}


let product1 = createproduct("M14", "samsung", 12999, 4)


console.log(product1);

// and show the product detail and mehtod


console.log(product1.getPrice());
console.log(product1.increasePrice(301));
console.log(product1.isExpensive());
console.log(product1.decreasePrice(1200));
console.log(product1.isExpensive());


// create factory function name electronic with some properties

function electronic(product_name, brand, price, rating, waranty) {

// inherit createproduct function in electronic factory function 

    let obj2 = createproduct(product_name, brand, price, rating)
    obj2.waranty = waranty

//create object name protoobj with some mathod 

    let protoobj1 = {

        bill: function () {
            let fn1 = price * 10 / 100;
            return fn2 = price - fn1;
        },
        detail: function () {
            let fn3 = `${product_name} of brand ${brand} with warranty of ${waranty} years at a price ${obj2.bill()} having a discount of 10%`
            return fn3;
        }
    }

    // protoobj set prototype object in protoobj1 

    Object.setPrototypeOf(protoobj, protoobj1)

    return obj2;
}



let electronics1 = electronic("Laptop", "samsung", 60999, 5, 3)
console.log(electronics1);

// and show the electronics product detail and mehtod
console.log(electronics1.getPrice());
console.log(electronics1.increasePrice(400));
console.log(electronics1.isExpensive());
console.log(electronics1.decreasePrice(500));
console.log(electronics1.isExpensive());
console.log(electronics1.bill());
console.log(electronics1.detail());


// create factory function name crockery with some properties

function Crockery(product_name, brand, price, rating, material) {

    // inherit createproduct function in crokery factory function 

    let obj3 = createproduct(product_name, brand, price, rating)
    obj3.material = material;


    //create object name protoobj2 with some mathod 

    let protoobj2 = {
        bill: function () {
            let fn1 = price * 15 / 100;
            return fn2 = price - fn1;
        },
        detail: function () {
            let fn3 = `${product_name} of brand ${brand} of material ${material} at a price ${obj3.bill()} having a discount of 10%`
            return fn3;
        }
    }

     // protoobj set prototype object in protoobj2 

    Object.setPrototypeOf(protoobj, protoobj2)


    return obj3;
}


let crockery1 = Crockery( "21 Piece Dinnerware","Diva",104,16000,4.5,"ceramic");

console.log(crockery1);

// and show the crokery product detail and mehtod
console.log(crockery1.getPrice());
console.log(crockery1.increasePrice(700));
console.log(crockery1.isExpensive());
console.log(crockery1.decreasePrice(200));
console.log(crockery1.isExpensive());
console.log(crockery1.bill());
console.log(crockery1.detail());





