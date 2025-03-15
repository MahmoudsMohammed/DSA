class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  deleteItem(index) {
    this.swapItems(index);
    console.log('Data after Swapping ===>', this.data);
    delete this.data[this.length - 1];
    this.length--;
  }

  swapItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  insertItem(item, index) {
    const newData = { ...this.data };
    newData[index] = item;
    console.log('New Data ===> ', newData);
    for (let i = index; i < this.length; i++) {
      newData[i + 1] = this.data[i];
    }
    this.data = newData;
  }
}

// const myArr = new MyArray();
// myArr.push('a');
// myArr.push('b');
// myArr.push('c');
// myArr.push('d');
// myArr.push('e');
// myArr.insertItem('Mahmoud', 2);

// Interview Questions
// Q1 : Write a function which reverse an string
// Note => interact with string problems as array problems

function reverseStr(str) {
  // Solution One
  return str.split('').reverse().join('');
}

function reverseStrTwo(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// console.log(reverseStrTwo('Hi My Name Is Mahmoud'));

// Q2 : Merge 2 Sorted Array in One Array Sorted

// Using JS Built in Methods
function getSortedArray(arrOne, arrTwo) {
  // first step which is input validation
  if (Array.isArray(arrOne) && Array.isArray(arrTwo)) {
    if (arrOne.length > 0 && arrTwo.length > 0) {
      const mergedArr = [...arrOne, ...arrTwo];
      return mergedArr.sort((a, b) => a - b);
    } else {
      return arrOne.length > 0 ? arrOne : arrTwo;
    }
  } else {
    return 'Please Check Your Input :)';
  }
}

// Manual Sort -> O(n*2)
function getSortedArrayTwo(arrOne, arrTwo) {
  // first step which is input validation
  if (Array.isArray(arrOne) && Array.isArray(arrTwo)) {
    if (arrOne.length > 0 && arrTwo.length > 0) {
      const mergedArr = arrOne.concat(arrTwo);
      for (let i = 0; i < mergedArr.length - 1; i++) {
        for (let j = i + 1; j < mergedArr.length; j++) {
          if (mergedArr[i] > mergedArr[j]) {
            const smallValue = mergedArr[j];
            mergedArr[j] = mergedArr[i];
            mergedArr[i] = smallValue;
          }
        }
      }
      return mergedArr;
    } else {
      return arrOne.length > 0 ? arrOne : arrTwo;
    }
  } else {
    return 'Please Check Your Input :)';
  }
}

console.log(getSortedArrayTwo([], [4, 6, 1]));
