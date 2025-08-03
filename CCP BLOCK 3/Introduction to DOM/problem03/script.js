var container = document.getElementById("container");

var paragraph = document.createElement("p");
paragraph.textContent = "You can update text";

var pinput = document.createElement("input");
pinput.type = "text";
pinput.placeholder = "type text you want to write";

var pbtn = document.createElement("button");
pbtn.textContent = "Change Text";

pbtn.addEventListener("click", function () {
  paragraph.textContent = pinput.value;
  pinput.value = "";
});

var colorinput = document.createElement("input");
colorinput.type = "text";
colorinput.placeholder = "Enter Color Name";

var colorbtn = document.createElement("button");
colorbtn.textContent = "Change Color";
colorbtn.addEventListener("click", function () {
  if (colorinput.value === "") {
    alert("Invalid color name!");
  } else {
    container.style.backgroundColor = colorinput.value;
  }
});

container.append(colorinput, colorbtn, pinput, pbtn, paragraph);
