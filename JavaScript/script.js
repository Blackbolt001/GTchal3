

// Add event listener to generate button

var button = document.getElementById('gen')
button.addEventListener('click',Generate)

function Generate() {
 
  var length = prompt("How many Characters? Please enter a number between 8 and 128 ")
  console.log(length);
    if (length < 8 || length > 128){ alert("password must have between 8 and 128 character")
 return
}
else if (length > 8 || length <128) {
  alert("Your password will be " + length +" characters")
  CtnGenerate()
}


  function CtnGenerate() {
  
  var UpperCase = confirm("Would you like to include Uppercase letters?")
  if (confirm == true) 
  {
   alert("Password will include Uppercase")
  }
  else (confirm == false)
  {
    alert("Password will not include Uppercase")
}
  var LowerCase = confirm("Would you like to include Lowercase Letters?")
  if (confirm == true) 
 alert("Password will include LowerCase")
  
  else 
  
   alert("Password will not include LowerCase")
  


  var Numbers = confirm("Would you like to include Numbers?")

  if (confirm == true) 
  { 
    alert("Password will include Numbers")
  }
  else 
  {
    alert("Password will not include Numbers")
  }

var special = confirm("would you like to have Special Characters?")
if (confirm == true) 
{
  alert("Password will include special Characters")
}
else 
{
  alert("Password will not include special Characters")

}

var i = Number

for (let i =8; i < 128; i++){
  console.log(i);
}
for ( let i = 0; i < 26; i ++) {
var Letter = (i + 10).toString(36)
console.log(Letter)
}
for ( let i =0; i < 26; i++) {
  var UpLetter = (i+10).toString(36).toUpperCase()
  console.log(UpLetter)}}}

