// Selecting popup box, popup overlay, and buttons
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

// Event listener for showing the popup
addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelpopup = document.getElementById("cancel-popup");

// Event listener for canceling the popup
cancelpopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select container and form inputs
var container = document.querySelector(".container");  // Fixed query for container class
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");  // Corrected typo
var bookdescriptioninput = document.getElementById("book-description-input");  // Corrected typo

// Event listener for adding a new book
addbook.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Create a new book container and add the book details
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">delete</button>`;
    
    // Append the new book to the container
    container.appendChild(div);
    
    // Clear the input fields after adding
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
    
    // Hide the popup after adding the book
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

});

function deletebook(event)
{
    event.target.parentElement.remove()
}


