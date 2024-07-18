import nav from "./conpo/navbar.js";

let x = document.getElementById("navbar")

x.innerHTML = nav();

document.getElementById("div").addEventListener("click", function(){
    window.location.href = "search.html"
})

var url = `https://www.themealdb.com/api/json/v1/1/random.php`
let container = document.getElementById("main")

getdata(url)

async function getdata(url) {
    try {

        let response = await fetch(url);
        let result = await response.json();
        let rendom = result.meals;
        console.log(rendom)
        displaydata(rendom)


    } catch (error) {
        console.log(error)
    }
}

function displaydata(display) {


    display.forEach(ele => {

        let div = document.createElement("div");
        

        let image1 = document.createElement("img")
        image1.src = ele.strMealThumb


        let head = document.createElement("h2")
        head.textContent = ele.strMeal

        let strArea = document.createElement("h3")
        strArea.textContent = `StrArea - ${ele.strArea}`


        let strCategory = document.createElement("h3")
        strCategory.textContent = `strCategory - ${ele.strCategory}`


        
        let strIngredient1 = document.createElement("p")
        strIngredient1.textContent = `${ele.strIngredient1}  : ${ele.strMeasure1}`

        let strIngredient2 = document.createElement("p")
        strIngredient2.textContent = `${ele.strIngredient2} : ${ele.strMeasure2}`

        let strIngredient3 = document.createElement("p")
        strIngredient3.textContent = `${ele.strIngredient3} : ${ele.strMeasure3}`

        let strIngredient4 = document.createElement("p")
        strIngredient4.textContent = `${ele.strIngredient4} : ${ele.strMeasure4}`

        let strIngredient5 = document.createElement("p")
        strIngredient5.textContent = `${ele.strIngredient5} : ${ele.strMeasure5}`

        let strIngredient6 = document.createElement("p")
        strIngredient6.textContent = `${ele.strIngredient6} : ${ele.strMeasure6}`

        let strIngredient7 = document.createElement("p")
        strIngredient7.textContent = `${ele.strIngredient7} : ${ele.strMeasure7}`

        let strIngredient8 = document.createElement("p")
        strIngredient8.textContent = `${ele.strIngredient8} : ${ele.strMeasure8}`

        let strIngredient9 = document.createElement("p")
        strIngredient9.textContent = `${ele.strIngredient9} : ${ele.strMeasure9}`

        let strIngredient10 = document.createElement("p")
        strIngredient10.textContent = `${ele.strIngredient10} : ${ele.strMeasure10}`

        div.append(image1, head, strArea, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10)

        container.append(div)

    });

}







