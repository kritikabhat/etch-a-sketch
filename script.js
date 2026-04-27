/**
 * Add a color wheel to allow to change color
 * Refactor code to be better- actually change everything
 * it should only start coloring whne you click. Just mouseover should not trigger color
 * size slider is opposite (large to small). fix it
 * When you change size of brush (even with erasor) it erases the entire board. Which makes it useless. Fix this
 * 
 * Instead of using %, use flex-grow, flex-shrink and flex-basis to set toolbar
 * 
 * if possible, need to set a width of gridArea based on screen size in CSS. Because otherwise flex makes it idiotically rectangular 
*/


const container = document.querySelector('#container')
let gridsize = 100
let row
let column

function createGrid() {
    for (let i = 0; i < gridsize; i++) {
        row = document.createElement('div')
        row.className = 'gridRow'
        console.log(row)
        for (let j = 0; j < gridsize; j++) {
            column = document.createElement('span')
            column.className = 'gridColumn'
            row.appendChild(column)
        }
        container.appendChild(row)
    }
}

createGrid()