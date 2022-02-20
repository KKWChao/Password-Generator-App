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
function setPass(text) {
  password_p.innerHTML = text;
}

function setPassLength() {
  lengthID_p.innerHTML = lenSlide.value;
}

// creates random number selector for characters 
// (sequence_len = total number of array items, len = length of password)
function generator(seq_len) {
  var password = [];
  var sequence = lower;

  // sequencer generator
  // builds the sequence of letters/numbers/characters 
  
  // case without any selection
  if (numSelect.checked === false 
    && uppSelect.checked === false 
    && lowSelect.checked === false 
    && specSelect.checked === false) {
      var sequence = [];
      window.alert("Please select an option for the password generator")
  }
  
  // case for specific upper or lower
  if (uppSelect.checked 
    && lowSelect.checked === false) {
    sequence = upper;
  } else if (uppSelect.checked && lowSelect.checked) {
    sequence = sequence.concat(upper);
  }

  // case for only numeric
  if (numSelect.checked 
    && uppSelect.checked === false 
    && lowSelect.checked === false 
    && specSelect.checked === false) {
    sequence = numer;
  } else if (numSelect.checked) {
    sequence = sequence.concat(numer);
  }

  // case for only special
  if (specSelect.checked 
    && numSelect.checked === false 
    && uppSelect.checked === false 
    && lowSelect.checked === false ) {
      sequence = special;
    } else if (specSelect.checked) {
      sequence = sequence.concat(special);
    }

  // randomization loop
  // creates random numbers for sequence selection
  for (let i = 0; i<lenSlide.value; i++) {
    password.push(
      sequence[Math.floor(Math.random() * sequence.length)]
      )
  }

  // call setPass function
  setPass(password.join(''))
}


// main function
let main = function () {
  generator();
}

submitter.addEventListener("click", () => {
  main()
})

lenSlide.addEventListener("change", setPassLength())