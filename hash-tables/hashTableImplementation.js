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
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const curr̥entBucket = this.data[address];
    // console.log(curr̥entBucket);
    if (curr̥entBucket) {
      for (let i = 0; i < curr̥entBucket.length; i++) {
        if (curr̥entBucket[i][0] === key) {
          return curr̥entBucket[i][1];
        }
      }
    } //O(n)
    return undefined;
  }
}

const myHashTable = new HashTable(50);
// console.log(myHashTable._hash("zakir"));
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 10);

myHashTable.get("grapes");

console.log(myHashTable.get("apples"));
