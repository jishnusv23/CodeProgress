## Debounce

- Debounce is the way of delaying of execution of the function unitil a certain amount of time has passed sinces the last time it was called
- This can be useful for scenarios where we want to avoid unnecessary or repeated function calls that might be expensive or time-consuming
- submitt button ,search button

## CALL APPLY BIND

---

## call

- Method allow you to call function specified this value and arguments provided individually
- The first argument to call sets the this value, and remaining arguments are passed to the function arguments
- immediately invokes the function

## apply

- apply method is smilar to call but it take the second arguments in array
- immediately invokes the function
-

## bind

- This Method return a new function with specified this value and any arguments that are passed to it
- The Method does not call the function immedeitely but instead of return a new function that can be called later

## Currying

- function programing technique that break down the function that takes multiple arguments of serirs of functions that each take single argument
- Code readability
- Avoiding passing the same variable in multiple time
- Creating reusable filtering function
-

## WeakMap

- indroduced in ES6
- it means for storing key-values pairs the key must be object and values can be arbitary
- it can be garbage collected
- Uses private Object Data,Resource management

## WeakSet

- Indroduced ES6
- Only Object as value
- UseCase Tracked object temporarily
-

## use map/set

- To know the size
- To itreate over the item
- To store Primitive values

## weakMap/weakSet

- Automaticaly clean up
- Memory efficient
- To work only with object 
