## Functions

## 1. Regular Functions

- Are the most basic and common type of function in JavaScript
- Defined using the `function` keyword
- Have their own `this` binding
- Can be used as constructors

## 2. Arrow Functions

- Shorter syntax for writing functions
- Single line = automatic return
- They inherit `this` from parent scope
- Best for callbacks and simple operations

## 3. IIFEs (Immediately Invoked Function Expression)

- Used when you need private variables/functions
- Helps avoid naming conflicts
- Perfect for initialization code that runs only once
- Creates a new scope to protect variables

## 4.Callback Function

- They are used to heavily async programs
- Help in handling events and user actions
- Common array method (map,filter ,reduce)

## 5.Recursive Fucntion

- Always have based condition (stop condition)
- Each recursive call should move towards the base case
- Be careful with stack overflow
- Tree travesal,Complex data structure operation

## Generator Functions

- is a special type of function that can be paused and resumed
- Uses yield to push execution
- Use-Cases:Creating unique ID,Handling Large Dataset,Memory effcient data processing

## Higher Order Funtion

- HOC is function that either
- Takes one or more functions as parameter (arguments)
- Return a function as its result or does both

## Pure Function

- Give the same Input,it always return the same output
- It has no side effects( dosen't modify external state)

## Named Function

- Named Functions are funtion that have and identifier (name)
- They can be referenced before they're defined (Hoisting)
- Better for redability and sefl-documentation
- Using for Recursion and stack traces in debugging

## Factory Functions

- Factory functions are function that create and object
- They're an alternative to constructors and class
- They Use Closer to Create private data

## Constructor Function

- Constructor function create object usign "new " keyword
- 'this' keyword refers to the new object benig created
- Can add methods and properties to object
-

## Prototype Function

- Prototype are the Mechanisum for the Object Inheritance
- Every object haas a prototype (expect null)
- Inheritance implementaion

## Closure Function

- A Closure if Function that has access to variables in its outerscope
- It "remebers" these varibale even after the outer function finished
- Provide Data Privacy throungh encapsulation
- Help in creating Private varible and methods
-



