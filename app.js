const sketchPad = document.querySelector('.sketch-container');
const boxes = document.querySelectorAll('.grid');
const gridSquare = document.getElementsByClassName("box");

let changeGridColor = (e) => e.target.classList.add('toBlack');

function addGrid(num){
    for (let row = 0; row < num; row++){
        const grid = document.createElement('div');
        sketchPad.appendChild(grid);
        grid.classList.add('grid');
        for (let col = 0; col < num; col++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('mouseover', changeGridColor)
            grid.appendChild(box);
        }   
    }   
}

addGrid(64);