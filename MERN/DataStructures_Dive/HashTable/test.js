class Hastable {
  constructor(size) {
    this.table = new Array(size);
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
    const backet = this.table[index];
    if (!backet) {
      this.table[index] = [[key, value]];
    } else {
      const sameItem = backet.find((item) => item[0] == key);
      if (sameItem) {
        sameItem[1]=value
      } else {
        backet.push([key,value])
      }
    }
  }
  remove(key){
    const index=this.hash(key)
    const backet=this.table[index]
    if(backet){
      const sameItem=backet.find((item)=>item[0]==key)
      if(sameItem){
        backet.splice(backet.indexOf(sameItem),1)
      }
    }
  }
  get(key){
    const index=this.hash(key)
    const backet=this.table[index]
    if(backet){
      const sameItem=backet.find((item)=>item[0]==key)
      if(sameItem){
        return sameItem[1]
      }
    }
    return false
  }
  display(){
    for(let i=0;i<this.table.length;i++){
      if(this.table[i]){
        console.log(i,this.table[i])
      }
    }
  }
}
const table=new Hastable(50)
table.set('name','jishnu')
table.set('age',30)
table.set('mane','jishnusv')
table.remove('name')
table.display()
// console.log(table.get('manes'))