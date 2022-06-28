

// Add event listener to generate button


function Generate() {
 
  var length = prompt("How many Characters? Please enter a number between 8 and 128 ")
  alert("Your password will be " + length +" characters");
  if (length < 8 && is > 128) alert("password must have between 8 and 128 character")
  else 
  CntGenerate()
}
 function CntGenerate() {
  var UpperCase = confirm("Would you like to include Uppercase letters?")
  if (confirm == true) {
    alert("Password will include Uppercase");
    sessionStorage.setItem(Password1,UpperCase);
  }
  else 
    alert("Password will not include Uppercase")
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

var i = Number

for (let i =8; i < 128; i++) {
  console.log(i);
}

for ( let i = 0; i < 26; i ++) {
var Letter = (i + 0).toString(26);
console.log(Letter)
}
for ( let i =0; i < 26; i++) {
  var UpLetter = (i+0).toString(26).toUpperCase();
  
  console.log(UpLetter)
}
var special = [/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/]
console.log(special)[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]

