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
    // check for Collision
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

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.set('apples', 9);
// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('apples'));
// console.log(myHashTable.keys());

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  // use hash table to avoid nested loop for search in the array
  const items = {};
  if (input.length === 0 || !Array.isArray(input)) {
    return undefined;
  } else {
    for (let i = 0; i < input.length; i++) {
      if (items[input[i]]) {
        return input[i];
      } else {
        items[input[i]] = 1;
      }
    }
  }
}
// time => O(n)
// space => O(n)
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
