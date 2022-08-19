let container = document.querySelector(".container");
var color = "red";
var borderColor = "red"
for (let i = 1; i <= 16; i++) {

  var divCol = document.createElement("div");
  divCol.classList.add("r");
  divCol.classList.add("r" + String(i));
  // divCol.textContent=("x"+String(i));
  container.appendChild(divCol);

  for (let o = 1; o < 17; o++) {
    var select = document.querySelector(`.r${i}`);

    var divCol = document.createElement("div");
    divCol.classList.add("box");
    var draw = true;
    //divCol.textContent=("h"+String(o));
    divCol.addEventListener("mousemove", function(e) {
      if (draw) {
        e.target.style.backgroundColor = color;
        e.target.style.borderColor = borderColor;
      }
    })

    select.appendChild(divCol);

  }

}
document.querySelector(".clear").addEventListener("click", function() {
  var selector = document.getElementsByClassName("box");
  for (var i = 0; i < selector.length; i++) {
    selector[i].style.backgroundColor = "blue";
    selector[i].style.borderColor = "black";

  }
})
selector = document.getElementsByTagName("*");
for (var i=0; i<selector.length;i++){
  if (! selector[i].classList.contains("color")){
selector[i].addEventListener("click", function() {
  draw = !draw;
  if (draw) {
    document.querySelector(".isDrawing").textContent = "Drawing: ON  click to toggle";
  } else {
    document.querySelector(".isDrawing").textContent = "Drawing: OFF   click to toggle"
  }
  document.querySelector(".currentColor").style.backgroundColor = color;
})}}

function colors() {
  for (var i = 0; i < document.querySelectorAll(".color").length; i++) {
    selector = document.querySelectorAll(".color")[i];
    selector.style.backgroundColor = document.querySelectorAll(".color")[i].id;
    selector.addEventListener("click", function(e) {
      color = e.target.style.backgroundColor;
      borderColor = color
    })
  }
}
document.querySelector(".eraser").addEventListener("click", function() {
  color = "blue";
  borderColor = "black";
})
document.querySelector("#customColorSubmit").addEventListener("click", function() {
  var customColor = document.querySelector("#customColor").value;
  customColor = customColor.replace(/\s/g, "")
  select = document.querySelector(".colors");
  var newColor = document.createElement("div");
  newColor.id = String(customColor);
  newColor.classList.add("color");
  select.appendChild(newColor);
  colors();
})
colors();
