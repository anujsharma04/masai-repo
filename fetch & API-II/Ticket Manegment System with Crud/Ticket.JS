
let url = "http://localhost:3000/tickets";
let tbody = document.querySelector("tbody")
let editdiv = document.getElementById("edit")

document.querySelector("form").addEventListener("submit", async function () {
    event.preventDefault()

    let title = document.getElementById("title").value

    let description = document.getElementById("head").value

    let status = document.getElementById("status").value



    let dueDate = new Date();
    // console.log(dueDate)
    let obj = {
        title,
        description,
        status,
        dueDate
    };

    let res = await fetch(`${url}`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    getdata();
})

getdata()
async function getdata() {

    try {
        let x = await fetch(url)
        let y = await x.json()

        // console.log(y)
        displaydata(y);

    } catch (error) {
        console.log(error)
    }
}



function displaydata(data) {
    tbody.innerHTML = "";
    data.forEach(ele => {
        let tr = document.createElement("tr")

        let title = document.createElement("td")
        title.textContent = ele.title

        let description = document.createElement("td")
        description.textContent = ele.description

        let status = document.createElement("td")
        status.textContent = ele.status

        let dueDate = document.createElement("td")
        dueDate.textContent = ele.dueDate

        let del = document.createElement("button")
        del.textContent = "Delete"
        del.id = "del"


        del.addEventListener("click", async function () {
            let res = await fetch(`${url}/${ele.id}`, {
                method: "DELETE"
            })
            getdata();
        })

        var edit = document.createElement("button")
        edit.textContent = "Edit"
        edit.id = "edit"

        edit.addEventListener("click", function () {
            localStorage.setItem("EditID", ele.id)
            window.location.href = "Edit.HTML"

        })

        tr.append(title, description, status, dueDate, edit, del)
        tbody.append(tr)

    });
}



