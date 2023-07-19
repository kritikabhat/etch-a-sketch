const container = document.getElementById('container')
const gridDiv = document.getElementById('gridDiv')
const slider = document.getElementById('slider')

const erasorButton = document.getElementById('erasorButton')
const clearButton = document.getElementById('clearButton')
const changeColorButton = document.getElementById('changeColor')
let squareDiv
let gridSize = 16
let blockColor = "black"

const setUp = () => {
    slider.value = "50"
    slider.addEventListener('change', () => {
        gridSize = slider.value
        gridDiv.innerHTML = ''
        loadDivGrid()
    })

    clearButton.addEventListener('click', () => {
        gridDiv.innerHTML = ''
        loadDivGrid()
    })

    erasorButton.addEventListener('click', () => {
        blockColor = "white"
    })

    changeColorButton.addEventListener('click', () => {
        blockColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    })
}
const loadDivGrid = () => {
    for (let i = 1; i <= (gridSize * gridSize); i++) {
        squareDiv = document.createElement('div')
        gridDiv.appendChild(squareDiv)
        gridDiv.style.gridTemplateColumns = "repeat" + `(${gridSize}, 1fr)`;
        gridDiv.style.gridTemplateRows = "repeat" + `(${gridSize}, 1fr)`;
        changeBlockColor(squareDiv)
        
    }
}

const changeBlockColor = (squareDiv) => {
    squareDiv.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = blockColor
    })
}

loadDivGrid()
setUp()
