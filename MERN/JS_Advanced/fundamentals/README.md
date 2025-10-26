## JS is a programing language that allow web pages to be interactive and dynamic

- Dynamic Typing:

  - js is dynamically typed because we don't have to specify the datatype explicitly
  - variables can store any types of data

- Interpeted language:

  - They are executed line by line at run time ,without need for seperate compalistion step

- Keywords:

  - are reserved words in javascript that have a special meaning can't be used as variable or function name .if,for,var,while

- Identifiers:
  - are names you give to variables ,function , classs or other elements
- Variables
  - are container or storage locations in programing that hold
- Primitive Data Types:
  - They are immutable wich means their values connot be changed once created, ex:string,number,boolean,bigInt
- Non-Primitive Data Types:
  - They are mutable which means theire values can change after creation,ex:Object,Array,Function
- undefined: means a variable has been declared but has not yet been assigned a value.
- null: is an assignment value that represents a deliberate non-value or absence of any object value.

## Hoisting

- is JavaScript's behavior of moving declarations to the top of their scope before the code runs. It's like JavaScript picks up your variable and function declarations and moves them to the top before running anything
- let and const are hoisted but not initialized (can't use them before declaration)

## Declaration vs Initialization in JavaScript

- Declaration is the process of introducing a new identifier (like a variable, function, or class) to the program. It tells the JavaScript engine that this identifier exists, but doesn't necessarily assign it a value.
- var x;
- Initialization is the process of assigning an initial value to a declared variable. It gives the variable its first value.
- var x = 5

## Concurrency

- Councurrrency is the ability to manage multiple task or operations in overlapping time periods
- in javascript this achived through asynchrous programming using callbacks,promise,async/await and events
-

## Parallelism

- Parallelism is the ability to perform multiple task or operation simultaneously
- This usally required multiple threads or processors
- While javascript itself is single-threaded ,paralisum can be achived in certain situation using web wokers

JavaScript Code Execution Phases

## Memory Creation Phase (Creation Phase)

- Creates MemorySpaces of varibale annd functions
- All Varibales are Initialised with undefined
- functions are stored completely
- all called hoisting phases
- // name = undefined
- // age = undefined
- // sayHi = entire function stored

## Execution Phase (Code Phase)

- Runs code line by line
- Assigns actual values to varibles 
- let name = "John";     // now name = "John"
- let age = 25;          // now age = 25
- sayHi();    
