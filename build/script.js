var modal = document.getElementById("modal");

// When the user clicks on <span> (x), close the popup

document.getElementsByClassName("close").onclick(function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on the button, open the popup
document.getElementsByTagName("form").submit(function() {
  modal.style.display = "block";
});


/* Helper functions */
function clearForm() {
  var username = document.getElementById("name");
  var useremail = document.getElementById("email");
  var message = document.getElementById("message");
  
  username.value = "";
  useremail.value = "";
  message.value = "";
}