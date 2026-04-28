## Etch-A-Sketch 2.0

Welcome to Etch-A-Sketch 2.0.
<ul>
    <li>Painting now only starts on mouse press, so you have more control over the drawing</li>
    <li>The site now works only for desktop/large screen users, mobile users are shown a message to view this on desktop.</li>
    <li>Otherwise, the layout remains the same.</li>
    <li>Changing the brush size still clears the board because it is a rudimentary sketch pad to revise code</li>
</ul>

Please see the current game layout below:
<img src="images/newGameDesign.png">

We can change our brush by changing the grid size, as shown:
<img src="images/changeBrushSize.gif">

We can use multiple colors, as follows:
<img src="images/differentColors.gif">

# Etch-A-Sketch 1.0 Below
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

This project creates a basic sketchboard that can be used in the browser. The goal of the project was to review some of my skills through practice.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## Overview:

<ul>
    <li>Draw on the sketchboard by hovering with a mouse, no need to click</li>
    <li>Change the size of the paint brush through a slider</li>
    <li>Change the brush color</li>
    <li>Clear the board to start fresh</li>
    <li>Use an erasor to clear only some part of the sketch</li>
</ul>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## Project Files:
<ul>
    <li><b>index.html</b>: contains the html tags, DOM setup and related meta information</li>
    <li><b>script.jss</b>: contains the JavaScript code for EventListeners, creation of the sketchboard</li>
    <li><b>style.css</b>: contains the CSS that sets FlexBox, Grid layout, button, slider desing</li>
    <li><b>ReadMe</b>: this document</li>
    <li><b>.gitignore</b> file setup to ignore Mac system files on local machine</li>
    <li>Images used in the project</li>
</ul>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)


<img src="images/oldGameDesign.png">

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<img src="images/oldSizeChange.png">

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## Revised through this project:
<ul>
    <li>HTML, CSS (UI tricks, common properties, tags)</li>
    <li>JavaScript (DOM manipulation, FlexBox, Grid, Node.JS)</li>
    <li>Git (terminal commands, markup for ReadMe, setup/deployment, Conventional Commits)</li>
    <li>Font Awesome, BootStrap (ended up not utilizing)</li>
</ul>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

```css
.div {
    display: flex;
    flex: 1 1 5%;
    flex-direction: column;
    flex-wrap: wrap;
}

input[type='range'] {
    -webkit-appearance: none;
    appearance: none;

    &::-webkit-slider-runnable-track {
        cursor: pointer;
        background-color: transparent;
    }

    &::-webkit-slider-thumb {
        height: 2em;
        background-color: rgba(65,65,65);
        border-radius: 1em;
    }
}     
```

```javascript
gridDiv.style.gridTemplateColumns = repeat(gridSize, 1fr);
gridDiv.style.gridTemplateRows = repeat(gridSize, 1fr);
