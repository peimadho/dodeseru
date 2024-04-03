// Retrieve the element
const element = document.getElementById('my-element');

// Function to remove multiple classes efficiently
const removeClasses = (el, ...classes) => {
  el.classList.remove(...classes);
};

// Remove the specified classes
removeClasses(element, 'class-1', 'class-2');
