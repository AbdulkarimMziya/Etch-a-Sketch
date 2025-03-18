const container = document.querySelector(".container");

function createGridItem() {
    const div = document.createElement("div");
    div.classList.add("item");
    return div;
}


function createGrid(gridSize = 16) {

    const container = document.querySelector(".container");
    let size = Math.pow(gridSize, 2);
    
    for(let i = 1; i <= size; i++){
      const item = createGridItem(); // Create a new <div> element
      addHoverEffect(item);
      container.appendChild(item); // Append the <div> to the container
    }
}
  
createGrid();