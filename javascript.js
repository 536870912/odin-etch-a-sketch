const drawingArea = document.querySelector("#drawing-area");
const resizeBtn = document.querySelector("#resize-button");
const clearBtn = document.querySelector("#clear-button");
const drawingAreaWidth = 960;

generateGrid(16);
drawingArea.addEventListener("mouseover",colorPixel);
resizeBtn.addEventListener("click",resize);
clearBtn.addEventListener("click",clear);


function generateGrid(sideLength){
    drawingArea.textContent = "";
    for (let i=0;i<sideLength;++i){
        const row = document.createElement("div");
        const pixelSize = drawingAreaWidth / sideLength;
        row.setAttribute("class","row");
        for (let j=0;j<sideLength;++j){
            const pixel = document.createElement("div");
            pixel.setAttribute("class","pixel");
            pixel.style.width = pixelSize + "px";
            pixel.style.height = pixelSize + "px";
            row.appendChild(pixel);
        }
        drawingArea.appendChild(row);
    }
}

function getSideLength(){
    return drawingArea.childElementCount;
}

function colorPixel(event){
    if (event.target.classList.contains("pixel")){
        event.target.style.backgroundColor = "blue";
    }
}

function resize(){
    let sideLength = parseInt(prompt("Enter the width of the canvas."), 10);
    if (typeof(sideLength) === "number" && Number.isInteger(sideLength)){
        if (sideLength <= 0 || sideLength > 100){
            alert("Please enter a positive integer between 0 and 100");
        }
        else generateGrid(sideLength);
    }
    else {
        alert("Invalid input. Please try again.")
    }
}

function clear(){
    generateGrid(getSideLength());
}