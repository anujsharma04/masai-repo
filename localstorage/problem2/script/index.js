
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    event.preventDefault();
    var input = document.getElementById("input").value;
    if (input === "") {

        alert("Todo cannot be Empty")


    }
    else {
        var Priroty = document.getElementById("select").value;

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.textContent = input
        var td2 = document.createElement("td");
        td2.textContent = Priroty
        var td3 = document.createElement("td");
        td3.textContent = "complete"
        var td4 = document.createElement("td");
        var archive_btn = document.createElement("button");
        archive_btn.id = "archive_btn"
        archive_btn.textContent = "Archive"

        
        archive_btn.addEventListener("click", function () {
            
        })

      



        td4.append(archive_btn);
        tr.append(td1, td2, td3, td4);
        document.getElementById("tbody").append(tr);
    }



})
