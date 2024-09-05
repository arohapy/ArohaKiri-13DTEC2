const MODULENAME = 'script.js';
console.log('%c' + MODULENAME + " VERSION: 1.1", 'color: blue');

function displayContent(elementId) {
    console.log('%cfunction: displayContent(' + elementId + ')', 'color: orange');
    
    var element = document.getElementById(elementId);  // Get the element by its ID

    if (element) {  // Ensure the element exists before trying to access it
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    } else {
        console.error('Element with ID ' + elementId + ' not found');
    }
}
