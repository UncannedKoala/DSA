const numberOfUniqueValues = (arr) => {
  if (arr.length == 0)
    return 0;
  let one, two, counter;
  one = two = 0;
  counter = 1;
  while (two < arr.length) {
    // console.log(arr[one] + " " + arr[two]);
    if (arr[one] != arr[two]) {
      counter++;
      one = two;
    }
    two++;
  }
  return counter;
}

console.log(numberOfUniqueValues([1, 2, 4, 6, 7, 7, 5, 3, 3, 45, 0]));
console.log(numberOfUniqueValues([0]));


// OPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZED
// OPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZEDOPTIMIZED

const numberOfUniqueValuesV2 = (arr) => {
  if (arr.length == 0)
    return 0;
  let one, two;
  one = two = 0;
  while (two < arr.length) {
    // console.log(arr[one] + " " + arr[two]);
    if (arr[one] !== arr[two]) {
      one++;
      arr[one] = arr[two];
    }
    two++;
  }
  return one + 1;
}

//optimized -> does not need a counter variable to track the unique values, instead we store the unique values At the start of the array and use them(last saved value) to compare
console.log(numberOfUniqueValuesV2([1, 2, 4, 6, 7, 7, 5, 3, 3, 45, 0]));
console.log(numberOfUniqueValuesV2([0]));
