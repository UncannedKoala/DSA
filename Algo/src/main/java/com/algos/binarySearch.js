function binarySearch(arr, target){
    let start = 0, end = arr.length-1, test = 0;
    while(start <= end){
        test = Math.ceil((start + end)/ 2);
        // console.log(`start>${start} end>${end} test>${test}`)
        if(arr[test] === target){
            return test;
        }else if (arr[test] < target){
            start = test+1;
        }else{
            end = test-1;
        }
    }
    return -1;
}

console.log(`1@ ${binarySearch([1,3,4,6,8,14,25,36,45,66,78,79,89], 1)}`);      //0
console.log(`23@ ${binarySearch([1,3,4,6,8,14,25,36,45,66,78,79,89], 23)}`);    //-1
console.log(`25@ ${binarySearch([1,3,4,6,8,14,25,36,45,66,78,79,89], 25)}`);    //6
console.log(`66@ ${binarySearch([1,3,4,6,8,14,25,36,45,66,78,79,89], 66)}`);    //9
console.log(`89@ ${binarySearch([1,3,4,6,8,14,25,36,45,66,78,79,89], 89)}`);    //12


// [1,3,4,6,8,14,25,36,45,66,78,79,89]
//  0 1 2 3 4 5  6  7  8  9  10 11 12
