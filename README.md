## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
# answer:
JavaScript has several methods for selecting elements from the DOM, including getElementById(), getElementsByClassName(), querySelector(), and querySelectorAll(). Using its unique id, getElementById() chooses a single element and returns either null if the element cannot be found or just one element. It targets a particular element quickly and effectively. getElementsByClassName() can return more than one element and chooses elements based on the class name. When the DOM changes, it automatically updates the HTMLCollection, which is a live collection.

querySelector() is more flexible because it only returns the first matching element and makes use of CSS selectors. Although it returns all matching elements as a static NodeList, querySelectorAll() also makes use of CSS selectors. Because querySelector() and querySelectorAll() support a robust and adaptable CSS selector syntax, they are frequently chosen in contemporary development.

### 2.
In JavaScript, you use the document to create and insert a new element into the DOM.The element is created using the createElement() method. You can modify the element after it has been created by adding classes, attributes, or content. Lastly, you use methods like appendChild() or append() to insert it into the DOM.

For instance, you can write a document to create a new paragraph element.createElement("p"). After that, you can use innerText or textContent to add text. The new element is then attached using appendChild() after a parent element has been chosen using getElementById() or querySelector().

Developers can dynamically add new content to a webpage without having to reload it thanks to this process. An essential component of dynamic DOM manipulation in contemporary web development is the creation and insertion of elements.


### 3. What is Event Bubbling? And how does it work?
# answer:
An event that starts at the target element and progresses upward to its parent elements is referred to as "event bubbling" in the DOM.

When an event (like a click) occurs on the child element, the event handler is first run on it. The same event then "bubbles up" to its parent, grandparent, and ultimately the document level if it is not stopped.


For example, if you click a button inside a div, the click event will be triggered on the button first, then the div, and then higher parent elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?

