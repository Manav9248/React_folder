let string = "";
let inputTag = document.querySelector("#inputTag");
let clearTag = document.querySelector("#clearTag");

let one = document.querySelector("#one");
one.value =1;

let two = document.querySelector("#two");
two.value = 2;

let three = document.querySelector("#three");
three.value = 3;

let four = document.querySelector("#four");
four.value = 4;

let five = document.querySelector("#five")
five.value = 5;

let six = document.querySelector("#six");
six.value = 6;

let seven = document.querySelector("#seven");
seven.value = 7;

let eight = document.querySelector("#eight");
eight.value = 8;

let nine = document.querySelector("#nine");
nine.value = 9;

let zero = document.querySelector("#zero");
zero.value = 0;


// Tracks if the last character is an operator
let isLastCharOperator = false;

// Function to update the display
function updateDisplay() {
    inputTag.value = string;
}

// Clear button
clearTag.addEventListener("click", () => {
    string = "";
    isLastCharOperator = false; // Reset the operator flag
    updateDisplay();
});



// Number buttons
[one, two, three, four, five, six, seven, eight, nine, zero].forEach(button => {
    button.addEventListener("click", () => {
        string += button.value;
        isLastCharOperator = false; // Reset the operator flag
        updateDisplay();
    });
});

// Decimal point
point.addEventListener("click", () => {
    if (!isLastCharOperator) { // Allow only if the last character wasn't an operator
        string += '.';
        isLastCharOperator = false; // Decimal isn't an operator
        updateDisplay();
    }
});

// Operator buttons
[divide, multiply, subtract, add].forEach(operator => {
    operator.addEventListener("click", () => {
        if (!isLastCharOperator) { // Only add if the last character wasn't an operator
            string += operator.textContent.trim(); // Use the operator's symbol
            isLastCharOperator = true; // Set the operator flag
            updateDisplay();
        }
    });
});

// Equal button
equal.addEventListener("click", () => {
    try {
        // Evaluate only if string is valid and doesn't end with an operator
        if (!isLastCharOperator) {
            let result = eval(string);
            inputTag.value = result;
            string = result.toString(); // Reset string with the result
            isLastCharOperator = false; // Reset operator flag after calculation
        }
    } catch (error) {
        inputTag.value = "Error";
        string = ""; // Clear the string
        isLastCharOperator = false; // Reset operator flag on error
    }
});
