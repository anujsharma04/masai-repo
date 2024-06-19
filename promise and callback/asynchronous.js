//1. creat a funtion with name get user
//2. create a veriable and store a displayuser function and inside consoling
//3. inside getuser function asynchronous api
//4. inside api object whith name user
//when we are cal getuderdata and pass id and a call back function as a aurgments then 
//receve getuserdata funcatin as a parameter than excute settime out 2 sec and inside set time out frist create object 
//or call the callback function 
function getuserdata(id,call){
    setTimeout(function (){
        let user = {
            id:id,
            Name:"Anuj",
            Email:"anuj@gmail.com"
        }
        call(user);
    },2000)
}

var displayUser =  function (user){
    console.log("Id-" + user.id )
    console.log("Name-" + user.Name )
    console.log("Email-" + user.Email )
}

getuserdata(22,displayUser);