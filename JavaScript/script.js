
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


function Prompt() {
  var max = 128;
  var min= 8;

  var length = prompt("How many Characters? Please enter a number between 8 and 128 ")
  alert("Your password will be " + length +" characters");Promt2()
}

function Promt2() {

  var UpperCase = confirm("Would you like to include Uppercase letters?")
  if (confirm == true) {
    alert("Password will include Uppercase");
    sessionStorage.setItem(Password1,UpperCase);
  }
  else 
    alert("Password will not include Uppercase");
  }

  var LowerCase = confirm("Would you like to include Lowercase Letters?");
  if (confirm == true) {
    alert("Password will include LowerCase");
    sessionStorage.setItem(Password2,LowerCase);
  }
  else {
    alert("Password will not include LowerCase");
  }
  var Numbers = confirm("Would you like to include Numbers?");

  if (confirm == true) { 
    alert("Password will include Numbers");
    sessionStorage.setItem(Password3,Numbers);
  }
  else {
    alert("Password will not include Numbers");
  }
var special = confirm("would you like to have Special Characters?");
if (confirm == true) {
  alert("Password will include special Characters");
}
else {
  alert("Password will not include special Characters");
}
