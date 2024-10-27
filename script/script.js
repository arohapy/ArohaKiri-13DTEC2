//MODULENAME: menu.html
//WRITTEN BY AROHA KIRI 2024

const MODULENAME = 'script.js';
console.log('%c' + MODULENAME + " VERSION: 1.1", 'color: blue');


// Called on Menu page
function displayContent(elementId) {
    console.log('%cfunction: displayContent(' + elementId + ')', 'color: orange');
    
    var element = document.getElementById(elementId);  // Get the element by its ID

    if (element) {  // Ensure the element exists before trying to access it
        if (element.style.display === "grid") {
            element.style.display = "none";
        } else {
            element.style.display = "grid";
        }
    } else {
        console.error('Element with ID ' + elementId + ' not found');
    }
}

var modal = document.getElementById("form-modal");

var btn = document.getElementById("form-btn");

var span = document.getElementsByClassName("close")[0];

function btn_function() {
  modal.style.display = "block";
  console.log('button clicked')
}

function span_function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}