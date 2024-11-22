# DOM Concepts

## 1. Event Delegation
**Definition**:  
Event delegation is a technique in which a single event listener is added to a parent element to handle events for its child elements. Instead of attaching separate event listeners to each child element, the event listener on the parent detects events from its children by leveraging event bubbling.

### **Key Points**
- Reduces the number of event listeners in your code.
- Useful for handling events on dynamically added elements.

---

## 2. Event Propagation
**Definition**:  
Event propagation describes how an event travels through the DOM hierarchy when it occurs. It happens in two phases:

1. **Capturing phase**: The event travels from the root element (`document`) down to the target element.  
2. **Bubbling phase**: After reaching the target element, the event travels back up to the root element.

### **Key Points**
- Helps manage how and where events are handled in the DOM.
- You can listen for events during either the capturing or bubbling phase.

---

## 3. Event Bubbling
**Definition**:  
Event bubbling is a part of event propagation where the event starts from the target element (the one that triggered the event) and propagates upwards to its ancestor elements.

### **Key Points**
- Default behavior in most browsers.
- Enables ancestor elements to handle events triggered by their descendants.
- Can be stopped using `event.stopPropagation()`.

---

## **Difference Summary**
| **Concept**            | **Definition**                                                                                         | **Use Case**                                                                                  |
|------------------------|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| **Event Delegation**   | A technique where a parent element handles events for its child elements using a single event listener.| Handling events for dynamic or large numbers of child elements efficiently.                   |
| **Event Propagation**  | The process of an event traveling through the DOM in capturing and bubbling phases.                    | Deciding when and where to handle an event in the DOM.                                       |
| **Event Bubbling**     | A phase of propagation where events move upward from the target element to ancestor elements.          | Allows parent elements to listen for events triggered by their child elements.              |

---


