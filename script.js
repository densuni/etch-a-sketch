const gridContainer = document.querySelector(".grid-container");
let slider = document.getElementById("myRange");
let output = document.getElementById("range-value");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
}

slider.addEventListener("mouseup", changeGridSize);

createGrid(16);

function changeGridSize() {
  let currentSize = slider.value;
  createGrid(currentSize);
  resetGrid();
}

function resetGrid() {
  let divs = document.querySelectorAll(".grid-item");
  divs.forEach((div) => div.style.backgroundColor = "white");
}

function createGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let divNum = size * size;

  for(let i = 0; i < divNum; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);  
  }

  const divs = document.querySelectorAll(".grid-item");

  Array.from(divs).forEach(div => {
    div.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
    });
  });
}