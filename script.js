const gritContainer = document.querySelector(".grit-container");

function createGrid() {
  for(let i = 0; i < 256; i++) {
    const gritItem = document.createElement("div");
    gritItem.classList.add("grit-item");
    gritContainer.appendChild(gritItem);  
  }
}

createGrid();
