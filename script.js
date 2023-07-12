function generatePassword() {

// These are the characters that can be used for the password:
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let chars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// This will contain all the characters the user chooses:
let chosenParams = [];

// Here is the questionare to build the password for the user:
let passwordLength = prompt("How long would you like your password to be?" , "Please enter a number between 8 and 128");
if (passwordLength <= 7 || passwordLength >= 129) {
  alert("Please enter a number between 8 and 128")
} else if (isNaN(passwordLength)) {
  alert("Please enter a valid number using numbers, just numbers. No letters, special characters, spaces, none of that. Numbers only. You can use 12, or even 55. You can choose something crazy like 104. Or something super cliche like 69. But it has to be a number. Between 8 and 128, I should have said that, it has to be between 8 and 128. You can do this, please try again.")
} else {
  console.log(passwordLength);
}
// let numChoice =
// let lowerChoice =
// let upperChoice =
// let charChoice =
}






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
