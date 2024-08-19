let num1 = "";
let num2 = "";
let op = "";
let temp;
let maxInt = 99999999;
let maxFloatDigits = 8;

const numButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const text = document.querySelector("#text");
const negativeButton = document.querySelector("#negative")
const percentButton = document.querySelector("#percent");

numButtons.forEach(numButton => {
    numButton.addEventListener("click", function() {
        addVariables(numButton.id)}
    );
});
opButtons.forEach(opButton => {
    opButton.addEventListener("click", function(e) {
        addOperator(e);}
    );
});
equalsButton.addEventListener("click", function() {
    calculate(parseFloat(num1), parseFloat(num2), op);
});
clearButton.addEventListener("click", function() {
    clear();
});
negativeButton.addEventListener("click", function() {
    handleNegative();
});
percentButton.addEventListener("click", function() {
    percent();
});

function calculate(x, y, z) {
    let result = 0;
    if (num2 === "") {
        y = parseFloat(temp);
        num2 = temp;
    }
    if (z === "+") 
        result = x + y
    else if (z === "-")
        result = x - y;
    else if (z === "*")
        result = x * y;
    else if (z === "/") {
        if (num2 === "0") {
            handleError();
            return;
        }
        result = x / y;
    }
    else if (op === "" && num === "")
        result = num1;
    else
        handleError();
    if (result.toString().length >= maxFloatDigits)
        text.textContent = result.toString().substring(0, maxFloatDigits);
    else
        text.textContent = result;
    num1 = result;
    temp = num2;
    num2 = "";
    if (parseFloat(result) > maxInt)
        handleError(true);
}

function addVariables(str) {
    if (str === "zero")
        str = "0";
    if (text.textContent === "0" && str === "0")
        return;
    if (op === "") {
        num1 += str;
        text.textContent = num1;
    }
    else {
        num2 += str;
        text.textContent = num2;
    }
    if (text.textContent.length >= 8)
        handleError(true);
}

function addOperator(e) {
    if (num1 === "")
        handleError();
    else {
        clearOpButtonStyle();
        e.target.classList.add("clicked");
        if (num1 !== "" && num2 !== "" && op !== "")
            calculate(parseFloat(num1), parseFloat(num2), op);
        op = e.target.id;
    }
}

function clear() {
    num1 = "";
    num2 = "";
    op = "";
    text.textContent = "0";
    clearOpButtonStyle();
}

function handleError(x) {
    clear();
    text.textContent = "Error";
    if (x)
        text.textContent = "Overflow";
}

function clearOpButtonStyle() {
    opButtons.forEach(opButton => {
        if (opButton.classList.contains("clicked"))
            opButton.classList.remove("clicked");
    })
}

function handleNegative() {
    if (op === "") {
        if (num1 === "") {
            num1 += "-";
            text.textContent = "-"
        }
        else if (num1 === "-") {
            num1 = "";
            text.textContent = ""
        }
        else
            handleError();
    }
    else {
        if (num2 === "") {
            num2 += "-";
            text.textContent = "-"
        }
        else if (num2 === "-") {
            num2 = "";
            text.textContent = ""
        }
        else
            handleError();
    }
}

function percent() {
    if (num2 !== "") {
        num2 = "" + (parseFloat(num2) * 0.01);
        text.textContent = num2;
    }
    else if (num1 !== "") {
        num1 = "" + (parseFloat(num1) * 0.01);
        text.textContent = num1;
    }
}

//Colors bc GF wanted them
const body = document.querySelector("body");
const calculator = document.querySelector("#calculator");
const backgroundColor = document.querySelector("#backgroundColor");
const numColor = document.querySelector("#numColor");
const opColor = document.querySelector("#opColor");
const altColor = document.querySelector("#altColor");
const textColor = document.querySelector("#textColor");
const labels = document.querySelectorAll("labels");

backgroundColor.addEventListener("input", function(e) {
    body.style.background = e.target.value;
});
numColor.addEventListener("input", function(e) {
    numButtons.forEach(button => {
        button.style.background = e.target.value;
    })
});
opColor.addEventListener("input", function(e) {
    opButtons.forEach(button => {
        button.style.background = e.target.value;
    })
    equalsButton.style.background = e.target.value;
});
altColor.addEventListener("input", function(e) {
    clearButton.style.background = e.target.value;
    negativeButton.style.background = e.target.value;
    percentButton.style.background = e.target.value;
});
textColor.addEventListener("input", function(e) {
    calculator.style.border = "solid 5px " + e.target.value;
    text.style.color = e.target.value;
    clearButton.style.color = e.target.value;
    negativeButton.style.color = e.target.value;
    percentButton.style.color = e.target.value;
    numButtons.forEach(button => {
        button.style.color = e.target.value;
    })
    opButtons.forEach(button => {
        button.style.color = e.target.value;
    })
    equalsButton.style.color = e.target.value;
    labels.forEach(label => {
        label.style.color = e.target.value;
    })
});