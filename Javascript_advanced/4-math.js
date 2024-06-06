// Function divideBy: creates a closure to divide a number by the firstNumber
function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
}

// Function addBy: creates a closure to add a number to the firstNumber
function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// Creating closures
var addBy100 = addBy(100);
var addBy1000 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);