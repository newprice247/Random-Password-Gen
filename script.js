function generatePassword() {

// These are the characters that can be used for the password:
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let chars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// This will contain all the characters the user chooses:
let chosenParams = [];

// Here is the questionare to build the password for the user:

// This will set the user's password length to a number of their choice, or return an error alert for them to try again.
let passwordLength = prompt("How long would you like your password to be?" , "Please enter a number between 8 and 128");
if (passwordLength <= 7 || passwordLength >= 129) {
  alert("Please enter a number between 8 and 128")
} else if (isNaN(passwordLength)) {
  alert("Please enter a valid number using numbers, just numbers. No letters, special characters, spaces, none of that. Numbers only. You can use 12, or even 55. You can choose something crazy like 104. Or something super cliche like 69. But it has to be a number. Between 8 and 128, I should have said that, it has to be between 8 and 128. You can do this, please try again.")
} else {
  alert("On to the next questions.")
};

// This will let the user decide if they want to use numbers in their password.
let numChoice = confirm("Do you want your password to contain numbers?")
if (numChoice) {
  chosenParams = chosenParams.concat(numbers);
  console.log(chosenParams)
  alert(`Your password will contain numbers.`)
} else {
  alert(`Your password will not contain numbers.`)
  console.log(chosenParams)
};

// This will let the user decide if they want to use lowercase letters in their password.
let lowerChoice = confirm("Do you want your password to contain lowercase letters?")
if (numChoice && lowerChoice) {
  chosenParams = chosenParams.concat(lowerAlphabet);
  console.log(chosenParams)
  alert(`Your password will now contain both numbers and lowercase letters.`)
} else if (lowerChoice) {
  chosenParams = chosenParams.concat(lowerAlphabet);
  console.log(chosenParams)
  alert(`Your password will contain lowercase letters.`)
} else {
  alert(`Your password will not contain lowercase letters.`)
  console.log(chosenParams)
};
// This will let the user decide if they want to use uppercase letters in their password.
// let upperChoice =

// This will let the user decide if they want to use special characters in their password.
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
generateBtn.addEventListener("click", writePassword)
