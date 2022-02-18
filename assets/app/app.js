// Assignment code here
var numSelect = document.getElementById("numberChar");
var uppSelect = document.getElementById("upperChar");
var lowSelect = document.getElementById("lowerChar");
var specSelect = document.getElementById("specialChar");
var lenSlide = document.getElementById("passLength");
var lengthID_p = document.getElementById("lengthID");
var password_p = document.getElementById("password");
var submitter = document.getElementById("passGen");


// charcode for alpha values (uppercase)
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upper = alpha.map((x) => String.fromCharCode(x));
const lower = upper.join('').toLowerCase().split('')
const numer = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Setting password in HTML
function setPass(password) {
  password_p.innerHTML = password;
}

// creates random number selector for characters 
// (sequence_len = total number of array items, len = length of password)
function generator(seq_len) {
  var keygener = [];

  // sequencer generator
  // builds the sequence of letters/numbers/characters 
  var sequence = lower;
  
  // if statements for selection
  if (numSelect.checked) {
    sequence = sequence.concat(numer);
  }

  if (specSelect.checked) {
    sequence = sequence.concat(special);
  }

  /* NEED TO ADD UPPER/LOWER SELECTION */
  if (uppSelect.checked) {
    sequence = sequence.concat(upper);
  }

  // randomization loop
  // creates random numbers for sequence selection
  for (let i = 0; i<lenSlide.value; i++) {
    keygener.push(
      sequence[Math.floor(Math.random() * sequence.length)]
      )
  }

  // call setPass function
  setPass(keygener.join(''))
  /* console.log(sequence) */
}


// main function
let main = function () {
  generator();
}

submitter.addEventListener("click", () => {
  main()
})