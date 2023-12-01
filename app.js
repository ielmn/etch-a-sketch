const sketchPad = document.querySelector('.sketch-container');

function addBoxes(){
    
    box.textContent = 'box';
    grid.classList.add('grid');
   


    grid.appendChild(box);
    sketchPad.appendChild(grid);
}

function addGrid(num){
    for (let row = 0; row < num; row++){
        const grid = document.createElement('div');
        sketchPad.appendChild(grid);
        grid.classList.add('grid');
        for (let col = 0; col < num; col++){
            const box = document.createElement('div');
            box.classList.add('box');
            grid.appendChild(box);
        }
        
    }
    
}

addGrid(4);