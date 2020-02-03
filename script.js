//var upperCase = prompt("Would you like Upper case in your password?");
function generate() {
    //alert("Button Clicked ");
    var passwordLength = prompt (" What length would you like your password to be?");
    alert("you entered "+passwordLength); 
}

var passwordLength = prompt (" What length would you like your password to be?");
alert("you entered "+passwordLength); 

var passwordLength = prompt (" Would you like upper case characters?");
alert("you entered "+upperCase); 

var passwordLength = prompt (" Would you like lower case characters?");
alert("you entered "+lowerCase); 

var passwordLength = prompt (" Would you like special characters?");
alert("you entered "+specialCharacters); 

var userGuessLower = userGuess.toLowerCase();

      // Loop 10 times
      for (var i = 0; i < 10; i++) {
        // Generate a random number between 1 and 10
        // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
        var num = Math.floor(Math.random() * 10) + 1;

        // Display in console
        console.log(num);
      }


</html>