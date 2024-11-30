//TOI hasTable testing

class hashTable {
  constructor(size) {
    this.items = [];
    this.size = size;
  }
  hash(key) {
    let totel = 0;
    for (let i = 0; i < key.length; i++) {
      totel += key.charCodeAt(i);
    }
    return totel % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.items[index];
    if (!bucket) {
      this.items[index] = [[key, value]];
    } else {
      const samekey = bucket.find((item) => item[0] == key);
      if (samekey) {
        samekey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  countDuplicates() {
    let duplicateCount = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i]) {
        for (let j = 0; j < this.items[i].length; j++) {
          if (this.items[i].length > 1) {
            // If more than one item exists in the same bucket, count as duplicate
            duplicateCount++;
          }
        }
      }
    }
    return duplicateCount;
  }

  get(key) {
    const index = this.hash(key);
    const backet = this.items[index];
    if (backet) {
      const sameKeItem = backet.find((item) => item[0] == key);
      if (sameKeItem) {
        return sameKeItem[1];
      }
    }
  }
  remove(key) {
    const index = this.hash(key);
    const backet = this.items[index];
    if (backet) {
      const sameItem = backet.find((item) => item[0] === key);
      if (sameItem) {
        backet.splice(backet.indexOf(sameItem), 1);
      }
    }
  }
  Display() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] && this.items[i].length > 0) {
        console.log(i, this.items[i]);
      }
    }
  }
}

const ht = new hashTable(23);

ht.set("name", "jishnu");
ht.set("mane", "ajith");
ht.set("age", 19);// Duplicate key
console.log(ht.get("ajmal"));
ht.Display();
console.log(ht.countDuplicates())
// ht.remove('ajmal')
// ht.Display();
