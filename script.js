var values = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var key = +document.getElementById("key").innerHTML;

function prev() {
  if (key > 1) {
    key--;
    document.getElementById("key").innerHTML = key;
  }
}

function next() {
  if (key < 25) {
    key++;
    document.getElementById("key").innerHTML = key;
  }
}

function calculate(event) {
  var input = document.getElementById("input").value.toUpperCase();
  var result = "";

  for (var i = 0; i < input.length; i++) {
    var letterPosition = input.charCodeAt(i) - 64;
    var offsetLetter = (letterPosition + key) % 26;
    offsetLetter = offsetLetter == 0 ? 26 : offsetLetter;
    result += values[offsetLetter - 1];
  }

  document.getElementById("outputCript").innerHTML = result;
  document.getElementById("outputText").innerHTML = input;
}
