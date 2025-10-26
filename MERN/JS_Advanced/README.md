<h1>JavaScript Core Functionality and Execution Model </h1>

- *Javascript* is High-level dynamic programing language that is widely used for web developement to create intractive and dynamic user interface
- Initialy designed for web browesers
- is single-threded,non-blocking,asynchornouse,event-driven,Interpreted or JIT compailed programing language
- dynamic typing ,prototype-based ,object oritentation ,first-class functions

## Single-Threaded Language

- javascript fundementally a single-thread language ,Which means that can execute only one task at a time
- The single thread is often reffred of as the "main thred" or "event loop"
-

## Event Loop

- The Event Loop is heart of the javascript concurrentlys model.it allow javascript to permoform non-blocking operation despite being a single -threed
- Execute synchoronous code in the call stack
- Check if the call stack is empty
- if empty,check the stack queue for pending task

## call stack

- The call stack is data structure that track the execution of function in javacript .
- Where a function is invoked it is puhsed on to the call stack
- When the function complete the execution it is a popped of the stack
-

## Heap

- The Headp is unstructured regoin memory where object are allocated
-

## Task Queue(Callback Queue)

- When the asynchrous opertaion complete, their callbacks are placed in the task queue.
- The event loop checks this queue and pushes tasks to the call stack when it's empty
