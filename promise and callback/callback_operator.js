function calculate(num1,num2){
    function add(a,b){
        return a+b;
    }
    function multiply(a,b){
        return a*b;
    }
    function opretion(num1,num1,calback){
       return calback(num1,num2);
    }
    const addresult = opretion(num1,num2,add);
    const multiplyresult = opretion(num1,num2,multiply);
    console.log("add "+addresult);
    console.log("multiply "+multiplyresult);
    
}
calculate(5,3);
calculate(13,7);
calculate(56,99);