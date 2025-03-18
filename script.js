const container = document.querySelector(".container");

const changeGridBtn = document.querySelector("#changeSizeBtn");
changeGridBtn.addEventListener("click", changeGridSize);


function getUserGridSize() {
    const userInput = prompt("Enter Grid size: ");
    const gridSize = parseInt(userInput);

    if(isNaN(gridSize) || gridSize <= 0 || gridSize > 100){
        alert("Please enter a valid positive number.");
        return null;
    }

    return gridSize;
}

function changeGridSize() {
    const gridSize = getUserGridSize();

    if(gridSize !== null){
        createGrid(gridSize);
    }
}


function createGridItem(gridSize) {
    const div = document.createElement("div");
    div.classList.add("item");

    const itemSize = `calc(600px / ${gridSize})`;
    div.style.width = itemSize;
    div.style.height = itemSize;

    return div;
}

function addHoverEffect(item) {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = "yellow";
    });
}

function clearGrid() {
    const container = document.querySelector(".container");
  
    // Loop through all child elements and remove them
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
}

function createGrid(gridSize = 16) {
    clearGrid() // Clears any existing grid

    const container = document.querySelector(".container");
    let size = Math.pow(gridSize, 2);
    
    for(let i = 1; i <= size; i++){
      const item = createGridItem(gridSize); // Create a new <div> element
      addHoverEffect(item);
      container.appendChild(item); // Append the <div> to the container
    }
}

window.addEventListener("load", () => {
    createGrid();
});
