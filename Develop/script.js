// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

}

function getUserOptions(){

  var userChoices = {};

    
    //Prompt for legnth
    var passwordLegnth = window.prompt("How many characters would you like your password to be? Choose between 8 and 128!");
    //validate leChth (later)
    //sign to UserOptions
    userChoices.passwordLegnth = passwordLegnth;


    //Prompt for upperCase
    var upperCase = confirm("Would you like uppercase characters?");
    //sign to upperCase
    userChoices.upperCase = upperCase;
    
    //Prompt for lowerCase
    var lowerCase = window.prompt("Would you like lowercase characters?");
    //sign to lowerCase
    userChoices.lowerCase = lowerCase;

    return UserOptions ()


    var alphaNumeric = window.prompt("Would you like numeric characters?");
    var specialCharacter = window.prompt("Would you like special characters?");

}


// Write password to the #password input
function writePassword() {
  
  //get user options
    var UserOptions = getUserOptions();
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



