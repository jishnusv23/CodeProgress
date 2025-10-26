class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    const backet = this.table[index];
    if (!backet) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = backet.find((item) => item[0] == key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        backet.push([key, value]);
      }
    }
  }
  
  get(key) {
    const index = this.hash(key);
    const backet = this.table[index];
    if (backet) {
      const sameKeItem = backet.find((item) => item[0] === key);
      if (sameKeItem) {
        return sameKeItem[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    const backet = this.table[index];
    if (backet) {
      const sameItem = backet.find((item) => item[0] === key);
      if (sameItem) {
        backet.splice(backet.indexOf(sameItem,1))
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "jishnu");
table.set("mane", "ajith");
table.set("age", 19);
table.display();
