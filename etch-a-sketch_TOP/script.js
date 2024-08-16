// Query Selectors
const easel = document.querySelector("#easel")
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const hoverButton = document.querySelector("#hover");
const dragButton = document.querySelector("#drag");
const clear = document.querySelector("#clear");
const slider = document.querySelector("#slider");
const modeButton = document.querySelector("#mode");

//Setting initial easel dimensions
let w = 16;
let h = 16;

//Initial input type
let hover = true;
let drag = false;

//Easel startup
createEasel();
hoverButton.style = "background-color: gray"
let mouseDown = false;
mode = 0;
rgb = ["9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"]

//Input type buttons
hoverButton.addEventListener("mousedown", function() {
    hover = true;
    drag = false;
    hoverButton.style = "background-color: gray";
    dragButton.style = "background-color:";
})
dragButton.addEventListener("mousedown", function() {
    drag = true;
    hover = false;
    dragButton.style = "background-color: gray";
    hoverButton.style = "background-color:";
})

//Drag input code
document.addEventListener("mousedown", function() {
    mouseDown = true;
})
document.addEventListener("mouseup", function() {
    mouseDown = false;
})

//Clear button
clear.addEventListener("mousedown", function() {
    eraseEasel();
})

//Grid Selection declaration
width.addEventListener("input", function() {
    w = width.value;
    eraseEasel();
})
height.addEventListener("input", function() {
    h = height.value;
    eraseEasel();
})
slider.addEventListener("input", function() {
    h = slider.value;
    w = slider.value;
    width.value = slider.value;
    height.value = slider.value;
    eraseEasel();
})

//Mode selection button
modeButton.addEventListener("mousedown", function() {
    mode++;
    if (mode === 0) {
        modeButton.style = "background:"
        modeButton.textContent = "Normal Mode"
    }
    if (mode === 1) {
        modeButton.style = "background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        modeButton.textContent = "Raindbow Mode";
    }
    if (mode === 2) {
        modeButton.style = "background-color: gray";
        modeButton.textContent = "Shade Mode"
        mode = -1;
    }
})

//Creates new easel of width w and height h
function createEasel() {
    easel.innerHTML = '';
    for (i = 0; i < w; i++) {
        for (j = 0; j < h; j++) {
            const box = document.createElement("div");
            box.classList.add("box")
            easel.appendChild(box);
        }
    }
    //Sizes boxes appropriately
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(e => {
        e.style.width = `calc(100% / ${w})`;
        e.style.height = `calc(100vw / ${w} / 3)`;
    });

     // Event listeners for drawing
     easel.addEventListener("mousedown", function(e) {
        e.preventDefault(); 
        if (e.target.classList.contains("box")) {
            mouseDown = true;
            if (drag) {
                e.target.classList.add("clicked");
            }
        }
    });

    easel.addEventListener("mouseover", function(e) {
        if (e.target.classList.contains("box")) {
            if (mouseDown && drag || hover) {
                e.target.classList.add("clicked");
            }
        }
    });

    document.addEventListener("mouseup", function() {
        mouseDown = false;
    });
}

//Clears and creates new easel
function eraseEasel() {
    easel.innerHTML = '';
    createEasel();
}