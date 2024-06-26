
var container = document.getElementById("container")

let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"




var btn = document.getElementById("btn")
btn.addEventListener("click", async function () {
    let short = "?sort=population&order=desc"
    let shorturl = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries${short}`
    getdata(shorturl);
    
   
})

 getdata(url);

async function getdata(url) {

    try {
        let x = await fetch(url)
        let y = await x.json()
        // console.log(y)
        displaydata(y.data)

    } catch (error) {
        console.log(error)
    }
}



function displaydata(arr) {
    container.innerHTML = "";

    arr.forEach(element => {

        var card = document.createElement("div")
        card.id = "card"

        var country = document.createElement("h2")
        country.textContent = `Country : ${element.country}`


        var Rank = document.createElement("h3")
        Rank.textContent = `Rank : ${element.Rank}`


        var population = document.createElement("h3")
        population.textContent = `Population : ${element.population}`


        card.append(country, Rank, population)
        container.append(card);
    });
    // container.append(btn)
}