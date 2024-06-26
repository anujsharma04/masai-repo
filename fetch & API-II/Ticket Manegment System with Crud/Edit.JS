let url = "http://localhost:3000/tickets"
document.getElementById("btn1").addEventListener("click", function () {
    editdata1()
})
document.getElementById("btn2").addEventListener("click", function () {
    editdata2()
})
document.getElementById("btn3").addEventListener("click", function () {
    editdata1();
    editdata2();
})

let id = localStorage.getItem("EditID")

async function editdata1() {

    let titl = document.getElementById("title").value

    let obj = {
        title: titl
    }

    let response = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    window.location.href = "Ticket.HTML"
}



async function editdata2() {

    let desc = document.getElementById("desc").value

    let obj = {
        description: desc
    }

    let response = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    window.location.href = "Ticket.HTML"
}


async function editdata3() {

    let titl = document.getElementById("title").value

    let desc = document.getElementById("desc").value

    let obj = {
        title: titl,
        description: desc

    }

    let response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    window.location.href = "Ticket.HTML"
}