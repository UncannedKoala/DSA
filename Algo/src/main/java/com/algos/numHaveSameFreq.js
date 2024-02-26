function sameFrequency(numA, numB) {
    const num1 = numA + "";
    const num2 = numB + "";
    return util(num1).toString() == util(num2).toString();
}

const util = (str) => {
    let arr = Array(10);
    arr.fill(0, 0, 14);
    for (let index = 0; index < str.length; index++) {
        arr[str.charAt(index)] = arr[str.charAt(index)] + 1;
    } return arr;
}

sameFrequency(182, 281) // true