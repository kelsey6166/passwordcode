// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 generateBtn.prompt= (password);
//for( var i=8; i<123; itt){
  //console.log("")
//}
// Write password to the #password input
var password = function() {

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
  var value = function(){
  var value = Math.floor(Math.random()*123);

  return value;
  }
  

  var password =  {
      Number: randomNumber(8, 128),
      lowerCase: randomLower,
      upperCase:randomUpper,
      length: 8,
  }

    
    console.log(writepassword);
  

// Add event listener to generate button
generateBtn.addEventListener("click", password)
if(generateBtn){
  return password;
}
}
