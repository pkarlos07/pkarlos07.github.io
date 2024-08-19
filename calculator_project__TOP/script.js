let num1 = "";
let num2 = "";
let op = "";
let temp;

const numButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const text = document.querySelector("#text");
const negativeButton = document.querySelector("#negative")

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
    else
        handleError();
    if (text.textContent === "Error")
        text.textContent = "";
    else {
        if (result.toString().length >= 7)
            text.textContent = result.toString().substring(0, 8);
        else
            text.textContent = result;
        num1 = result;
        temp = num2;
        num2 = "";
    }
}

function addVariables(str) {
    if (op === "") {
        num1 += str;
        text.textContent = num1;
    }
    else {
        num2 += str;
        text.textContent = num2;
    }
}

function addOperator(str, e) {
    if (num1 === "")
        handleError()
    else {
        op = str;
        clearOpButtonStyle();
        e.target.classList.add("clicked");
    }
}

function clear() {
    num1 = "";
    num2 = "";
    op = "";
    text.textContent = "";
    clearOpButtonStyle();
}

function handleError() {
    clear();
    text.textContent = "Error";
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