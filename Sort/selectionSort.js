function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i <= n - 1; i++) {
    let min = i;
    for (let j = i + 1; j <= n - 1; j++) {
      if (arr[j] < arr[min]) {
        [arr[j], arr[min]] = [arr[min], arr[j]];
      }
    }
    if (arr[min] != arr[i]) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
}

const lis = [5, 7, 4, 8, 1, 9, 2, 7, 34, 76, 2];

selectionSort(lis);

console.log(lis);
