// Bubble Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
// time => O(n^2) => nested loop
// space => O(1) => const not linked to input increase or decrease

// bubbleSort(numbers);
// console.log(numbers);

// Selection Sort

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[i]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// time => O(n^2) => nested loop
// space => O(1) => const not linked to input increase or decrease

// console.log(selectionSort(numbers));

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[j] < array[i] && array[j + 1] > array[i]) {
          array.splice(j + 1, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
}

console.log(insertionSort(numbers));
