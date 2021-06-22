// INITIALIZATION //


const DEFAULT_GRID_SIZE = 16;


const etchASketch = document.getElementById('etch-a-sketch');

const etchASketchTiles = document.getElementsByClassName("tile");

const resetButton = document.getElementById('reset');


createGrid(DEFAULT_GRID_SIZE);


resetButton.addEventListener('click', reset);





// FUNCTIONS //


function createGrid(size) {
    etchASketch.style.gridTemplateColumns = `repeat(${size}, auto)`;

    for(let i = 0; i < size*size; i++) {
        const etchASketchTile = document.createElement('div');
        etchASketchTile.classList.add("tile");
        etchASketchTile.id = "tile-" + i;
        etchASketch.appendChild(etchASketchTile);

        initializeTiles();
    }
}


function initializeTiles() {
    Array.from(etchASketchTiles).forEach(tile => {
        tile.addEventListener('mouseenter', changeColor);
    });
}


function changeColor(e) {
    this.style.backgroundColor = "black";
}


function promptNumber(text, min, max) {
    let value = prompt(text + `\n(Please enter a number between ${min}-${max})`);
    while(isNaN(value) || value < min || value > max) {
        value = prompt(text + `\n(Please enter a number between ${min}-${max})\nInvalid number!`);
    }
    return value;
}


function reset(e) {
    Array.from(etchASketchTiles).forEach(tile => {
        tile.remove();
    });
    createGrid(promptNumber("What size grid would you like?", 1, 100));
}