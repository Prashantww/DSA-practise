function binarySearch(arr, target) {
  let [low, high] = [0, arr.length - 1];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

const lis = [1, 2, 2, 4, 5, 7, 7, 8, 9, 34, 76];

console.log(binarySearch(lis, 5));
