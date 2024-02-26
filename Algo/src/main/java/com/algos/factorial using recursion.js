/*
    Write a function factorial which accepts a number and returns the factorial of that number.
    A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, 
    because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
*/

// USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION 
// USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION 
// USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION USING HELPER FUNCTION 
function factorial(limit) {
    let result = 1;
    function helper(current) {
        if (current <= 1) return 1;
        result *= current;
        return helper(current - 1);
    }
    helper(limit);
    return result;
}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040



// WITHOUT USING HELPER PATTERN WITHOUT USING HELPER PATTERN WITHOUT USING HELPER PATTERN WITHOUT USING HELPER PATTERN
// WITHOUT USING HELPER PATTERN WITHOUT USING HELPER PATTERN WITHOUT USING HELPER PATTERN WITHOUT USING HELPER PATTERN

function factorialWithoutHelper(current) {
    if (current == 1) return 1;
    if (current == 0) return 0;
    return current * factorialWithoutHelper(current-1);
}    

console.log(factorialWithoutHelper(1)) // 1
console.log(factorialWithoutHelper(2)) // 2
console.log(factorialWithoutHelper(4)) // 24
console.log(factorialWithoutHelper(7)) // 5040