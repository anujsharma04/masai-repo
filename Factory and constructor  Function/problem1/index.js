// create function name iphone2

function ihpone1(ASIN, Color, Display, Camera) {
    // create inside obj 

    let obj = {}


    // obj inside create key and append value


    obj.ASIN = ASIN,
        obj.Color = Color,
        obj.Display = Display,
        obj.Camera = Camera,
        // and creat function inside object
        obj.dial = function () {
            console.log("Tring........,Tring.......")
        },
        obj.Sendmassage = function () {
            console.log("Sending Massage......")
        },
        obj.cameraclick = function () {
            console.log("Camera Clicked")
        }
    // return this obj
    return obj;
}

// iphone function store in variable
var x = ihpone1(12, "RED", "Retina", "12MP")

// console variable and call object inside function
console.log(x)
x.dial()
x.Sendmassage()
x.cameraclick()