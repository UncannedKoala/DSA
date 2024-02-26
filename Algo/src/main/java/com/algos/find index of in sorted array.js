let findIndexOf_inSortedArray = (array, target) => {
    let start = 0, end = array.length - 1, index = 0;
    while (start <= end) {
        index = Math.floor((start + end) / 2);
        // console.log("mid = " + index + ", start = " + start + ", end = " + end);
        if (array[index] == target) {
            return index;
        } else if (target < array[index]) {
            end = index - 1;
        } else {
            start = index + 1;
        }
        // console.log("mid = " + index + ", start = " + start + ", end = " + end);
    }
}

console.log(findIndexOf_inSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,], 1));
console.log(findIndexOf_inSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,], 4));
console.log(findIndexOf_inSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,], 8));
console.log(findIndexOf_inSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,], 12));
console.log(findIndexOf_inSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,], 14));


//TRIED USING RECURSION, BUT THE ARRAY WAS BEING MANIPULATED SO THE INDEXING WAS FUCKED
//TRIED USING RECURSION, BUT THE ARRAY WAS BEING MANIPULATED SO THE INDEXING WAS FUCKED
//TRIED USING RECURSION, BUT THE ARRAY WAS BEING MANIPULATED SO THE INDEXING WAS FUCKED

// findIndexOf_inSortedArray = (arr, target) => {
//     let index = Math.ceil(arr.length / 2);
//     // while (arr.length > 1) {
//     console.log(arr + " " + index)
//     if (arr[index] == target)
//         return index;
//     else {
//         if (target < arr[index])
//             return findIndexOf_inSortedArray(arr.splice(0, arr.length - index), target)
//         else if (target > arr[index])
//             return findIndexOf_inSortedArray(arr.splice(index+1, arr.length - index), target)
//     }
//     // }
// }