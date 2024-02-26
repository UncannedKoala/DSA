function zeroSum(arr) {
  let start = 0, end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] == 0) {
      console.log(arr[start] + " " + arr[end]);
      return;
    }
    else if (arr[start] + arr[end] > 0)
      end--;
    else
      start++;
  }
}

zeroSum([-16, -13, -8, -3, -1, 0, 1, 5, 12, 14, 15]);
