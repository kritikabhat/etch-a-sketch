const container = document.querySelector('#container')
const colorInput = document.querySelector('#colorInput')
const erasorBtn = document.querySelector('#erasorBtn')
const clearBtn = document.querySelector('#clearBtn')
const gridSizeInput = document.querySelector('#gridSize')

let gridSize = 10
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

gridSizeInput.addEventListener('click', (e) => {
    gridSize = e.target.value
    console.log("gridSize: " + gridSize)
    container.innerHTML = ''
    createGrid()
})

colorInput.addEventListener('input', (e) => {
    selectedColor = e.target.value
})

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        row = document.createElement('div')
        row.className = `gridRow`
        for (let j = 0; j < gridSize; j++) {
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