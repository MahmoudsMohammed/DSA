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

const myArr = new MyArray();
myArr.push('a');
myArr.push('b');
myArr.push('c');
myArr.push('d');
myArr.push('e');
myArr.insertItem('Mahmoud', 2);
