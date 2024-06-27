let url = "https://jsonplaceholder.typicode.com/todos"
let container = document.getElementById("container")

// getdata()
var count = 1;
getdata(`${url}?_page=1&_limit=12`)

document.getElementById("previous").addEventListener("click", function(){
    count--;
    let next = `${url}?_page=${count}&_limit=12`
    getdata(next)
})


document.getElementById("next").addEventListener("click", function(){
    count++;
    let next = `${url}?_page=${count}&_limit=12`
    getdata(next)
    
})

async function getdata(rec){
    try {
        let res = await fetch(rec)
        let result = await res.json()
        console.log(result)
        displaydata(result)
        
    } catch (error) {
        console.log(error)
    }
}

function displaydata(arr){
    container.innerHTML = "";
    arr.forEach(element => {
        let card = document.createElement("div")
        card.id = "card"
    
        let title = document.createElement("h2")
        title.textContent = element.title
    
        let userId = document.createElement("h3")
        userId.textContent = `UserId : ${element.userId}`
    
        let completed = document.createElement("h3")
        completed.textContent = `Complete : ${element.completed}`

        card.append(title,userId,completed)
        container.append(card)

        
    });
}

