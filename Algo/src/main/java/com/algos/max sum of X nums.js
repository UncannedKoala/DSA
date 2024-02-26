const maxSumOfXNums = (arr, limit) => {
    let start = 0, end = 0;
    let sum = 0;
    for (let temp of arr) {
        if (end == limit)
            break;
        sum += arr[end++];
    }
    if (arr.length <= limit)
        return sum;
    let max = sum;
    // console.log(sum + " " + start + " " + end);

    while (end <= arr.length) {
        sum -= arr[start++]
            += arr[end++];
        if (max < sum) max = sum;
    }
    return max;
}

console.log(maxSumOfXNums([12, 3, 4, 51, 8], 4));
console.log(maxSumOfXNums([2, 3, 4, 5], 4));
console.log(maxSumOfXNums([1, 2, 3], 4));