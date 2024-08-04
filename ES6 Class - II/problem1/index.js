

//crate a class and inside create a constructor function with Properties 

class Iphone14{
    constructor(ASIN,Color,Display,Camera,Bluetooth){
        this.ASIN = ASIN;
        this.Color = Color;
        this.Display = Display;
        this.Camera = Camera;
        this.Bluetooth = Bluetooth
    }

    // create method and console it

    dial(){
        console.log("Tring........ tring.......")
    }
    sendmassage(){
        console.log("Massage sending.....")
    }
    cameraclick(){
        console.log("camera clicked")
    }
    ConnectBluetooth(){
        console.log("Bluetooth connected successfully...")
    }
}

// create a variable and store new object iphone14 

let i4 = new Iphone14(1,"B09X67JBQV",7.8,"IOS","128mb")
console.log(i4)



  //---- properties
  console.log(i4.ASIN); // 1
  console.log(i4.Color); // B09X67JBQV
  console.log(i4.Display); // 7.8
  console.log(i4.Camera); // IOS
  console.log(i4.Bluetooth); // 128mb
  
  //---- methods
  console.log(i4.dial()); // "tring.. tring..."
  console.log(i4.sendmassage()); // "Sending message..."
  console.log(i4.cameraclick()); // "Camera clicked"
  console.log(i4.ConnectBluetooth()); // "Bluetooth connected successfully..."
  