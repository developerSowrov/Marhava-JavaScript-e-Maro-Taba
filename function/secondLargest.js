function findSecondLargest(arr) {
  let max = arr[0];

  let secondMax = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

console.log(findSecondLargest([4, 2, 7, 1, 9]));
