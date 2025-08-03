var ul = document.querySelector("ul");


let count = 0;
var btn = document.createElement("button");
btn.textContent = "Add Item";
btn.addEventListener("click", function () {
    var li = document.createElement("li");
    li.textContent = `task${count}`;

     if(count % 2 === 1){
         
      li.style.fontStyle = "italic";
        li.style.color = "red"
        ul.append(li);
        
    }
    else{
         li.style.fontStyle = "bold";
        li.style.color = "blue"
        ul.append(li);
    }
    
    count++;
    
    
});



document.body.appendChild(btn);
