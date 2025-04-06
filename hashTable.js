class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const location = this._hash(key);
    if (!this.data[location]) {
      this.data[location] = [];
    }
    this.data[location].push({ key, value });
    console.log(this.data);
  }

  get(key) {
    const location = this._hash(key);
    if (this.data[location]) {
      return this.data[location].find((item) => item.key === key).value;
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      // check for bucket is Array and Include items or Not
      if (Array.isArray(this.data[i]) && this.data[i].length > 0) {
        const bucketKeys = this.data[i].map((item) => item.key);
        keys.push(...bucketKeys);
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
