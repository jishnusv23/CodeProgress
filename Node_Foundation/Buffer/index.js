// const buffer = new Buffer.alloc(3);
// buffer.write("jishnu");
// console.log("🚀 ~ file: index.js:2 ~ buffer:", buffer);
// console.log("🚀 ~ file: index.js:2 ~ buffer:", Buffer.from('jishnu'));

const buffer = new Buffer.alloc(10);

buffer.write("myname");

console.log(buffer);

console.log(Buffer.from("this is buffer.from"));