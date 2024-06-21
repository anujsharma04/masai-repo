var api = fetch("https://reqres.in/api/users?page=2")

api.then((req) => req.json())
    .then((gdata) => {
        console.log(gdata.data)
        getdata(gdata.data)

    })
    .catch((err) => console.log(err))


// function getdata(arr){
//     var x = arr.data[0]
//     var y = x.email
//     console.log(y)
// }

function getdata(arr) {
    var conteiner = document.getElementById("cont");

    arr.forEach(element => {
        var div = document.createElement("div")
        div.id = "childdiv"

        var awatar = document.createElement("img")
        awatar.id = "image"
        awatar.src = element.avatar

        var Id = document.createElement("h2")
        Id.textContent = element.id

        var fristname = document.createElement("h3")
        fristname.textContent = element.first_name

        // var fristname = document.createElement("h3")
        // fristname.textContent = element.frist_name

        var lastname = document.createElement("h3")
        lastname.textContent = element.last_name
        
        var Email = document.createElement("p")
        Email.textContent = element.email

        div.append(awatar, Id, fristname, lastname, Email);
        conteiner.append(div);
    });
}