function outer(){
  var Massage = "I Am Outer"

  function inner(){
    console.log(Massage) // Expected : I Am Outer
  }

  inner()


}

outer()  