// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Var to Upperase
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
var numbers = [0,1,2,3,4,5,6,7,8,9,];
var special = ["!", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Add password to the input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {

  //User Options
    var passwordLength = window.prompt("How many characters would you like your password to be? Choose between 8 and 128!");
    console.log("Password length " + passwordLength);

    if(!passwordLength) {
      alert("You Must Input a Value!");
    } 
    
    else if (passwordLength < 8 || passwordLength > 128) {
      passwordLegnth = prompt("You must choose between 8 and 128 characters");
      console.log("Password length " + passwordLength);
    } 
    
    else {
      confirmLower = confirm("Would you like lowercase characters?");
      console.log("Lower case " + confirmLower);
      confirmUpper = confirm("Would you like uppercase characters?");
      console.log("Upper case " + confirmUpper);
      confirmNumber = confirm("Would you like numbers?");
      console.log("Number " + confirmNumber);
      confirmSpecial = confirm("Would you like to use special characters?");
      console.log("Special Character " + confirmSpecial);
    };


    //if no answer
    if(!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
      userChoices = alert("You must choose a criteria for your password!");
    } 
    
    //if all options apply
    else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
      userChoices = lowerCase.concat(upperCase, numbers, special);
      console.log(userChoices);
    }

    //if 3 options apply
    else if (confirmLower && confirmUpper && confirmNumber) {
      userChoices = lowerCase.concat(upperCase, numbers);
      console.log(userChoices);
    }

    else if (confirmLower && confirmUpper && confirmSpecial) {
      userChoices = lowerCase.concat(upperCase, special);
      console.log(userChoices);
    }

    else if (confirmLower && confirmNumber && confirmSpecial){
      userChoices = lowerCase.concat(numbers, special);
      console.log(userChoices);
    }

    else if (confirmUpper && confirmNumber && confirmSpecial) {
      userChoices = upperCase.concat(numbers, special);
      console.log(userChoices);
    }

    //if 2 options apply

    else if (confirmLower && confirmUpper) {
      userChoices = lowerCase.concat(upperCase);
      console.log(userChoices);
    }

    else if (confirmLower && confirmNumber){
      userChoices = lowerCase.concat(numbers);
      console.log(userChoices);
    }

    else if (confirmLower && confirmSpecial){
      userChoices = lowerCase.concat(special);
      console.log(userChoices);
    }    
        
    else if (confirmUpper && confirmNumber){
      userChoices = upperCase.concat(numbers);
      console.log(userChoices);
    }    
    
    else if (confirmUpper && confirmSpecial){
      userChoices = upperCase.concat(special);
      console.log(userChoices);
    }

    else if (confirmNumber && confirmSpecial){
      userChoices = numbers.concat(special);
      console.log(userChoices);
    }

  //if 1 option apply

  else if (confirmlower){
    userChoices = lowerCase;
    console.log(userChoices);
  }

  else if (confirmUpper){
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }

  else if (confirmNumber){
    userChoices = numbers;
    console.log(userChoices);
  }

  else if(confirmSpecial){
    userChoices = special;
    console.log(userChoices);
  };

  //Empty variable for password legnth

  var passwordBlank = []

  //Random selection loop
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  //merge and display password

  var password = passwordBlank.join("");
  console.log("Your password is: " + password);
  return password;

}



