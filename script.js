const gridContainer = document.querySelector(".grid-container");

function createGrid() {
  for(let i = 0; i < 256; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);  
  }
}

createGrid();

const divs = document.querySelectorAll(".grid-item");

Array.from(divs).forEach(div => {
  div.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "black";
  });
});