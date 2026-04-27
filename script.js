/**
 * Refactor code to be better- actually change everything
 * When you change size of brush (even with erasor) it erases the entire board. Which makes it useless. Fix this
 * 
 * if possible, need to set a width of gridArea based on screen size in CSS. 
 * Because otherwise flex makes it idiotically rectangular 
 * 
 * For the grid: use flex wrap and a simple loop gridsize * gridsize?
 * instead of On2. When you set a width for the grid, this works as well
 * 
 * Give erasor its own slider so you can change erasor size
 * 
 * 
*/

const container = document.querySelector('#container')
const brushSizeInput = document.querySelector('#brushSizeInput')
const colorInput = document.querySelector('#colorInput')
const erasorBtn = document.querySelector('#erasorBtn')
const clearBtn = document.querySelector('#clearBtn')

let gridsize = 100
let row
let column
let draw = false
let selectedColor = '#000000'

erasorBtn.addEventListener('click', (e) => {
    selectedColor = '#FFFFFF'
})

clearBtn.addEventListener('click', (e) => {
    container.innerHTML = ''
    createGrid()
})

brushSizeInput.addEventListener('click', (e) => {

})

colorInput.addEventListener('input', (e) => {
    selectedColor = e.target.value
})

function createGrid() {
    for (let i = 0; i < gridsize; i++) {
        row = document.createElement('div')
        row.className = `gridRow`
        for (let j = 0; j < gridsize; j++) {
            column = document.createElement('span')
            column.className = `gridColumn`
            row.appendChild(column)
        }
        container.appendChild(row)
    }
}

function print() {
    container.addEventListener('mousedown', (e) => {
        draw = true
        e.target.style.backgroundColor = selectedColor
    })

    container.addEventListener('mousemove', (e) => {
        if (draw)
            e.target.style.backgroundColor = selectedColor
    })

    container.addEventListener('mouseup', (e) => {
        e.target.style.backgroundColor = selectedColor
        draw = false
    })
}

createGrid()
print()