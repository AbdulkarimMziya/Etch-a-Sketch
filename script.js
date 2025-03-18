const container = document.querySelector(".container");

function createGrid(gridSize) {
  let array = [];
  
  let size = Math.pow(gridSize, 2);
  for(let i = 1; i <= size; i++){
    const div = document.createElement("div"); // Create a new <div> element
    div.classList.add("item"); // Add the class 'item' to the <div>
    container.appendChild(div); // Append the <div> to the container
  }
}

createGrid(16);