let containerSize = 500;
let GridMultiplier = 16;

const container = document.querySelector("#container");

// Create title
const title = document.createElement("div");
title.textContent = "Etch-a-Sketch";
title.style.fontSize = "30px";
container.appendChild(title);

// Create button for number of squares
const resizeButton = document.createElement("button");
resizeButton.classList.add("btn");
resizeButton.addEventListener("click", () => {
    let resizeNum = prompt("Enter a number between 2 and 100");
    if (resizeNum == null || resizeNum === "") {
        return; // Exit if no input is provided
    }
    resizeNum = parseInt(resizeNum, 10); // Convert to integer
    if (resizeNum >= 2 && resizeNum <= 100) {
        GridMultiplier = resizeNum;
        createGrid();
        container.appendChild(resetButton);

    } else {
        alert("Please enter a number between 2 and 100.");
    }
});
resizeButton.textContent = "Resize grid";
resizeButton.style.fontSize = "25px";
resizeButton.style.padding = "5px";
resizeButton.style.textDecoration = "none";
container.appendChild(resizeButton);

// Create the grid container
const gridContainer = document.createElement('div');
gridContainer.classList.add("gameContainer");
gridContainer.style.width = containerSize + "px";
gridContainer.style.height = containerSize + "px";
gridContainer.style.display = "grid";

function createGrid() {
    // Clear existing grid items
    gridContainer.innerHTML = '';

    // Calculate box size
    const boxSize = containerSize / GridMultiplier;

    // Set grid template rows and columns based on GridMultiplier
    gridContainer.style.gridTemplateColumns = `repeat(${GridMultiplier}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${GridMultiplier}, 1fr)`;

    // Create grid items
    for (let i = 0; i < GridMultiplier * GridMultiplier; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = boxSize + "px";
        grid.style.height = boxSize + "px";
        
        // Add event listener for mouseover to change color
        grid.addEventListener('mouseover', () => {
            grid.classList.add('hovered');
        });
        
        gridContainer.appendChild(grid);
    }
    
    container.appendChild(gridContainer);
}

function reset(){
    createGrid();
    container.appendChild(resetButton);

}
// Initial grid creation
createGrid();

//create reset button 
const resetButton = document.createElement("button");
resetButton.classList.add("btn2");
resetButton.addEventListener("click", () => {
    reset();
});
resetButton.textContent = "Reset";
resetButton.style.fontSize = "25px";
resetButton.style.padding = "5px";
resetButton.style.textDecoration = "none";
container.appendChild(resetButton);


