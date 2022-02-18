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
const numer = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Setting password in HTML
function setPass(password) {
  password_p.innerHTML = password;
}



// sequencer generator
// builds the sequence of letters/numbers/characters 
function sequencer() {
  var sequence = alphabet;

  // if statements for selection
  if (numSelect.checked) {
    sequence = sequence.concat(numer);
  }

  if (specChar.checked) {
    sequence = sequence.concat(special)
  }
  console.log(sequence)
  return sequence
}




// creates random number selector for characters 
// (sequence_len = total number of array items, len = length of password)
function generator(seq_len, len) {
  var keygener = [];
  sequencer()

  // randomization loop
  // creates random numbers for sequence selection
  for (let i = 0; i<len; i++) {
    keygener.push(Math.floor(Math.random() * seq_len))
  }

  // call setPass function
  setPass(keygener)
  /* console.log(sequence) */
}




// main function
let main = function () {
  sequencer();
}
main()

submitter.addEventListener("click", () => {
  var sequence = alphabet;
  main()
})

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