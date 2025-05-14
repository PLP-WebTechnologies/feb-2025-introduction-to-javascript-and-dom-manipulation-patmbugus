// When the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  
    // Get the button that changes text and style
    var changeBtn = document.getElementById('change-btn');
  
    // When the change button is clicked
    changeBtn.addEventListener('click', function () {
      // Get the paragraph to change
      var introText = document.getElementById('intro-text');
  
      // Change the text
      introText.textContent = 'This text has changed!';
  
      // Change the style
      introText.style.color = 'blue';
      introText.style.fontWeight = 'bold';
      introText.style.fontSize = '18px';
    });
  
    // Get the button that adds/removes an element
    var toggleBtn = document.getElementById('toggle-element-btn');
  
    // When the toggle button is clicked
    toggleBtn.addEventListener('click', function () {
      var container = document.getElementById('dynamic-container');
      var existingElement = document.getElementById('dynamic-element');
  
      // If the element exists, remove it
      if (existingElement) {
        container.removeChild(existingElement);
      } else {
        // Otherwise, create a new element
        var newElement = document.createElement('p');
        newElement.id = 'dynamic-element';
        newElement.textContent = 'This element was added!';
        newElement.style.color = 'green';
  
        // Add the new element to the page
        container.appendChild(newElement);
      }
    });
  
  });
  