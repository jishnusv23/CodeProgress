## Memoization

- is a performance optimization technique that speed up a program by caching the result of exprensive function calls and returning them when the same inputs are encountered again

## useCallback

- is used for memoizing functions ,especially when passing functions to child components
- it returns the memoized version of the callback function that only changes if one of the dependancies passed in the dependcies array has changed
- this optimaization is helpful in preventing uncessary re-creation of function during re-renders
- Drawbacks
  - Complex code:
  - Excessive memory usage: if you don't use the useCallback properly .it can lead excessive memory usage for instance 