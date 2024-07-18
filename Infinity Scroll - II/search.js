import nav from "./conpo/navbar.js";

let y = document.getElementById("navbar")

y.innerHTML = nav();

document.getElementById("our_meal").addEventListener("click", function(){
    window.location.href = "home.html"
})

let url = `www.themealdb.com/api/json/v1/1/search.php?s=chicken`

getdata()

async function getdata() {
    try {
        let response= await fetch(url)
        let data = await response.json();
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}
