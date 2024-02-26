// MARKED@PRACTICE

/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/
function isSubsequence(str1, str2) {
    let str1Index = 0, str2Index = 0, counter = 0;
    while (str2Index < str2.length) {
        if (str1.charAt(str1Index) === str2.charAt(str2Index)) {
            counter++;
            str1Index++;
        }
        if (counter == str1.length)
            return true;
        str2Index++;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)