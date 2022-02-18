// Assignment code here
var numSelect = document.getElementById("numberChar");
var uppSelect = document.getElementById("upperChar");
var lowSelect = document.getElementById("lowerChar");
var specChar = document.getElementById("specialChar");
var lenSlide = document.getElementById("passLength");
var lengthID_p = document.getElementById("lengthID");
var password_p = document.getElementById("password");
var submitter = document.getElementById("passGen");


// charcode for alpha values (uppercase)
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const numer = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "@", "#", "$", "%", "&", "^", "*"];

var sequence = [];


// Setting password in HTML
function setPass(password) {
  password_p.innerHTML = password;
}

// sequencer generator
// builds the sequence of letters/numbers/characters 
function sequencer() {
  var sequence = ["!", "@", "#", "$"];

    // if statements for selection
  if (numSelect.checked) {
    sequence.push(numer)
  }

  return sequence
}

// creates random number selector for characters 
// (sequence_len = total number of array items, len = length of password)
function generator(seq_len, len) {

  sequencer()

  // randomization loop
  // creates random numbers for sequence selection
  for (let i=0; i<len; i++) {
    keygener.push(Math.floor(Math.random()*seq_len))
  }


  // sequence selection to specific item
  for (let y=0; i<keygener.length; i++) {

  }


  // call setPass function
  setPass(sequence)
  console.log(sequence)
}




// main function
let main = function() {
  submitter.addEventListener("click", () => {
    sequence = [];
    generator(9, 10)
  })
}
main()


/* // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */