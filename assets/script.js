// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z"]
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"]
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const symbols = ["!","@","#","$","%","^","&","*","?"]
// Write password to the #password input
function writePassword() {
var password = writePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

var UpperCase = confirm("use uppercase letters")
var LowerCase = confirm("Use lowercase letters")
var Symbols = confirm("use a symbol")
var Numbers = confirm("use a number")
let password = "";
console.log(charecter)

if (UpperCase === true){charecter=charecter.concat(Upercase)};
if (LowerCase === true){charecter=charecter.concat(Lowercase)};
if (Symbols === true){charecter=charecter.concat(Symbols)};
if (Numbers === true){charecter=charecter.concat(Numbers)};
for (var i = 0; 1 < passlength; i++){
    var randomindex = math.floor(math.random() * charecter.length);
    console.log(randomindex)
    password = password + charecter [randomindex];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  function writepassword() {
    console.log ("button clicked")
    var passlength = prompt ("How long is the password?");
    if (passlength < 8 || passlength > 18)

    alert("must be between 8 to 18 charecters")
}
<input type="button" id="generate" value="Generate Password" onclick="Your Secure Password()"></input>