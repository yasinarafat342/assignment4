## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
# answer:
JavaScript has several methods for selecting elements from the DOM, including getElementById(), getElementsByClassName(), querySelector(), and querySelectorAll(). Using its unique id, getElementById() chooses a single element and returns either null if the element cannot be found or just one element. It targets a particular element quickly and effectively. getElementsByClassName() can return more than one element and chooses elements based on the class name. When the DOM changes, it automatically updates the HTMLCollection, which is a live collection.
querySelector() is more flexible because it only returns the first matching element and makes use of CSS selectors. Although it returns all matching elements as a static NodeList, querySelectorAll() also makes use of CSS selectors. Because querySelector() and querySelectorAll() support a robust and adaptable CSS selector syntax, they are frequently chosen in contemporary development.
### 2.How do you create and insert a new element into the DOM?
# answer
In JavaScript, you use the document to create and insert a new element into the DOM.The element is created using the createElement() method. You can modify the element after it has been created by adding classes, attributes, or content. Lastly, you use methods like appendChild() or append() to insert it into the DOM.
For instance, you can write a document to create a new paragraph element.createElement("p"). After that, you can use innerText or textContent to add text. The new element is then attached using appendChild() after a parent element has been chosen using getElementById() or querySelector().
Developers can dynamically add new content to a webpage without having to reload it thanks to this process. An essential component of dynamic DOM manipulation in contemporary web development is the creation and insertion of elements.
### 3. What is Event Bubbling? And how does it work?
# answer:
An event that starts at the target element and progresses upward to its parent elements is referred to as "event bubbling" in the DOM.
When an event (like a click) occurs on the child element, the event handler is first run on it. The same event then "bubbles up" to its parent, grandparent, and ultimately the document level if it is not stopped.
For example, if you click a button inside a div, the click event will be triggered on the button first, then the div, and then higher parent elements.
### 4. What is Event Delegation in JavaScript? Why is it useful?
# answer
Attaching a single event listener to a parent element in JavaScript instead of assigning an event listener to each child element is known as event delegation. The process by which an event on a child element bubbles up to its parent so that the listener can recognize and control it is known as event bubbling.
In event delegation, event is usually used.target to ascertain which aspect of the child was responsible for the incident. This allows the parent element to control all of the events of its current and even future child elements.
Because it reduces memory usage, improves performance (fewer event listeners are needed), and streamlines and cleans up code, event delegation is advantageous. When working with dynamically added elements, it is especially helpful.
### 5. What is the difference between preventDefault() and stopPropagation() methods?
# answer
Two distinct methods for handling events in JavaScript are preventDefault() and stopPropagation().
preventDefault() prevents an element's default action from occurring. For instance, utilizing event, clicking a link typically takes you to a different page.That navigation is stopped by preventDefault(). The event continues to bubble despite it.
StopPropagation() prevents the event from capturing down to child elements or bubbling up to parent elements. For instance, a calling event is triggered when a button inside a div is clicked.StopPropagation() stops event handlers on the div from being triggered by the click.

