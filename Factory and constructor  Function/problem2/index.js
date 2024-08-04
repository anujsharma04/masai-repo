

// create function name iphone2

function iphone2(ASIN, Color,Display,Camera,Bluetooth){
    // create inside obj 

    let obj = {}
    // obj inside create key and append value

    obj.ASIN = ASIN,
    obj.Color = Color,
    obj.Display = Display,
    obj.Camera = Camera,
    obj.Bluetooth = Bluetooth,
    // and creat function inside object
    obj.dial = function(){
        console.log("Tring........,Tring.......")
    },
    obj.Sendmassage = function(){
        console.log("Sending Massage......")
    },
    obj.cameraclick = function(){
        console.log("Camera Clicked")
    },
    obj.Bluetooth = function(){
        console.log("Bluetooth connected successfully...")
    }

    // return this obj
    return obj;

} 
// function store in variable
let iphone = iphone2(14,"blue","HDR","12MP",true)
// console variable and call object inside function
console.log(iphone)
iphone.dial()
iphone.Sendmassage()
iphone.cameraclick()
iphone.Bluetooth()