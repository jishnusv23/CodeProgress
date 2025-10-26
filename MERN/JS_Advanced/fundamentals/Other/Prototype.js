function Person(name){
    this.name=name
}

Person.prototype.SayHello=function(){
    console.log(`this is the Name ${this.name}`)
}

const jishnu=new Person('jishnu')
jishnu.SayHello()