function outer(){
    var massage = "hello I am inside outer variable"
    return function inner(){
        console.log(massage)
    }
}

let call = outer()
call()  // expected logs hello  I am inside outer variable
