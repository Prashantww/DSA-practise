function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j <= n - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }

  return arr;
}

const lis = [5, 7, 4, 8, 1, 9, 2, 7, 34, 76, 2];

console.log(bubbleSort(lis));
