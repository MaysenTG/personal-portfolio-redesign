
export default function clearForm() {
  var username = document.getElementById("name");
  var useremail = document.getElementById("email");
  var message = document.getElementById("message");
  
  username.value = "";
  useremail.value = "";
  message.value = "";
}