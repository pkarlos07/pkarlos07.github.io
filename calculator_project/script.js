let num1 = "";
let num2 = "";
let op = "";
let temp;
let oldOp;

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
        addOperator(opButton.id, e);}
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
    else if (z === "/")
        result = x / y;
    else if (op === "" && num === "")
        result = num1;
    else
        handleError();
    if (result.toString().length >= 8)
        text.textContent = result.toString().substring(0, 8);
    else
        text.textContent = result;
    num1 = result;
    temp = num2;
    num2 = "";
    if (parseFloat(result) > 999999999999)
        handleError(true);
}

function addVariables(str) {
    if (str === "zero")
        str = "0";
    if (str === "." && text.textContent.includes(".")) {
        handleError();
        return;
    }
    if (op === "" || oldOp === op) {
        num1 += str;
        text.textContent = num1;
    }
    else {
        num2 += str;
        text.textContent = num2;
    }
    if (text.textContent.length >= 8)
        handleError(true);
    let oldOp = op;
}

function addOperator(str, e) {
    if (num1 === "")
        handleError()
    else {
        clearOpButtonStyle();
        e.target.classList.add("clicked");
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
        text.textContent = "Overflow"
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