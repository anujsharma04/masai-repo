var heading = document.getElementById("head")
heading.innerHTML = "Welcome to the DOM World!"

var paragraph = document.getElementsByTagName("p")
for(let i = 0; i < paragraph.length; i++){
    paragraph[i].style.color = "blue"
}


var container = document.querySelectorAll(".container")
container.forEach((ele)=> {ele.style.backgroundColor = "yellow"})