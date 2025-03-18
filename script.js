const container = document.querySelector(".container");

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

const changeGridBtn = document.querySelector("#changeSizeBtn");
changeGridBtn.addEventListener("click", changeGridSize);

function createGridItem() {
    const div = document.createElement("div");
    div.classList.add("item");
    return div;
}

function addHoverEffect(item) {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = "yellow";
    });
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