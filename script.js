function generatePassword() {

  // These are the characters that can be used for the password:
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let chars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

  // This will contain all the characters the user chooses:
  let chosenParams = [];

  // Here is the questionare to build the password for the user:

  // This will set the user's password length to a number of their choice, or return an error alert for them to try again.
  var passwordLength  //Declared in global scope
  function lengthConfirm() {
    passwordLength = prompt("How long would you like your password to be?", "Please enter a number between 8 and 128");
    if (passwordLength <= 7 || passwordLength >= 129) {
      alert("Please enter a number between 8 and 128")
      lengthConfirm(); //Will loop until user satisfies the necessary conditions.
    } else if (isNaN(passwordLength)) {
      alert("Please enter a valid number using numbers, just numbers. No letters, special characters, spaces, none of that. Numbers only. You can use 12, or even 55. You can choose something crazy like 104. Or something super cliche like 69. But it has to be a number. Between 8 and 128, I should have said that, it has to be a number between 8 and 128. You can do this, please try again. ;)")
      lengthConfirm(); //Will loop until user satisfies the necessary conditions.
    } else {
      alert("Thank you, on to the next questions.")
      return passwordLength;
    }
  };
  lengthConfirm();
  console.log(`the password length is ${passwordLength}`)


  // This will let the user decide if they want to use numbers in their password.
  let numChoice = confirm("Do you want your password to contain numbers?")
  if (numChoice) {
    chosenParams = [...chosenParams,...numbers] //Adds the items from the numbers array to the chosenParams' empty array, for use in building the final product.
    alert(`Your password will contain numbers.`)
  } else {
    alert(`Your password will not contain numbers.`)
  };

  // This will let the user decide if they want to use lowercase letters in their password.
  let lowerChoice = confirm("Do you want your password to contain lowercase letters?")
  if (numChoice && lowerChoice) {
    chosenParams = [...chosenParams,...lowerAlphabet]  //Adds the items from the lowerAlphabet array to the chosenParams array
    alert(`Your password will now contain both numbers and lowercase letters.`)
  } else if (lowerChoice) {
    chosenParams = [...chosenParams,...lowerAlphabet]
    alert(`Your password will contain lowercase letters.`)
  } else {
    alert(`Your password will not contain lowercase letters.`)
  };

  // This will let the user decide if they want to use uppercase letters in their password.
  let upperChoice = confirm("Do you want your password to contain uppercase letters?")
  if (upperChoice && numChoice && lowerChoice) {
    chosenParams = [...chosenParams,...upperAlphabet] //Adds the items from the upperAlphabet array to the chosenParams array
    alert(`Your password will now contain numbers, lowercase letters, and uppercase letters.`)
  } else if (upperChoice && numChoice) {
    chosenParams = [...chosenParams,...upperAlphabet]
    alert(`Your password will now contain both numbers and uppercase letters.`)
  } else if (upperChoice && lowerChoice) {
    chosenParams = [...chosenParams,...upperAlphabet]
    alert(`Your password will now contain both lowercase letters and uppercase letters.`)
  } else if (upperChoice) {
    chosenParams = [...chosenParams,...upperAlphabet]
    alert(`Your password will contain uppercase letters.`)
  } else {
    alert(`Your password will not contain uppercase letters.`)
  };

  // This will let the user decide if they want to use special characters in their password.
  let charChoice = confirm("Do you want your password to contain special characters?")
  if (charChoice && upperChoice && numChoice && lowerChoice) {
    chosenParams = [...chosenParams,...chars]  //Adds the items from the chars array to the chosenParams array
    alert(`Your password will now contain numbers, lowercase letters, uppercase letters, and special characters.`)
  } else if (charChoice && upperChoice && numChoice) {
    chosenParams = [...chosenParams,...chars]
    alert(`Your password will now contain numbers, uppercase letters, and special characters.`)
  } else if (charChoice && upperChoice && lowerChoice) {
    chosenParams = [...chosenParams,...chars]
    alert(`Your password will now contain lowercase letters, uppercase letters, and special characters.`)
  } else if (charChoice && numChoice && lowerChoice) {
    chosenParams = [...chosenParams,...chars]
    alert(`Your password will now contain numbers, lowercase letters, and special characters.`)
  } else if (charChoice && upperChoice) {
    chosenParams = [...chosenParams,...chars]
    alert(`Your password will contain uppercase letters and special characters.`)
  } else if (charChoice && lowerChoice) {
    chosenParams = [...chosenParams,...chars]
    alert(`Your password will contain lowercase letters and special characters.`)
  } else if (charChoice && numChoice) {
    chosenParams = [...chosenParams,...chars]
    alert(`Your password will contain numbers and special characters.`)
  } else if (charChoice) {
    chosenParams = [...chosenParams,...chars]
    alert(`Your password will contain special characters.`)
  } else {
    alert(`Your password will not contain uppercase letters.`)
  };

  // This will throw an alert message if the user doesn't choose any characters for their password, then calls the generatePassword() function which will restart the questionare from the beginning.
  if (!numChoice && !lowerChoice && !upperChoice && !charChoice) {
    alert(`Please choose at least one type of character.`)
    generatePassword();
  } else { //Just adding a little bit of fun to the process :)
    alert(`Your password is generating now...`)
    alert(`Generating....`)
    alert(`Generating.......`)
  };

  // This will loop through all of the user's chosen parameters that have been saved in the empty chosenParams array, then pull random characters from it and add them to the empty string declared as userPassword, the final product.
  let userPassword = ``
  for (i = 0; i < passwordLength; i++) {  //Uses the number stored in the passwordLength variable, as chosen by the user, to loop through the chosenParams array.
    let random = Math.floor(Math.random() * chosenParams.length) //For every loop another random number will be generated based on the number of items held in the chosenParams array.
    userPassword += chosenParams[random]; //For every loop, another random character from the chosenParams array will be added to the userPassword String.
  }
  return userPassword;
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
