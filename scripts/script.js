
const num = document.getElementById('number');
const resultArea = document.getElementById('area');
const resultSperimeter = document.getElementById('perimeter');
const myButton = document.getElementById('hideButtonSquare');

 myButton.addEventListener("click", function() {

  var inputValue = Number(num.value);
  resultArea.innerText = Math.pow(inputValue, 2);
  resultSperimeter.innerText = (inputValue) * 4;

});


const numRectangleA = document.getElementById('numberRectangleA');
const numRectangleB = document.getElementById('numberRectangleB');
const resultAreaRectangle = document.getElementById('areaRectangle');
const resultSperimeterRectangle = document.getElementById('perimeterRectangle');
const myButtonRectangle = document.getElementById('hideButtonRectangle');

 myButtonRectangle.addEventListener("click", function() {
  // alert();
  var inputValueRectangleA = Number(numRectangleA.value);
  var inputValueRectangleB = Number(numRectangleB.value);
  resultAreaRectangle.innerText = inputValueRectangleA * inputValueRectangleB;
  resultSperimeterRectangle.innerText = (inputValueRectangleA + inputValueRectangleB)*2;

});



const numCircleA = document.getElementById('numberCircleR');
const numCircleB = document.getElementById('numberCircleB');
const resultAreaCircle = document.getElementById('areaCircle');
const resultSperimeterCircle = document.getElementById('perimeterCircle');
const myButtonCircle = document.getElementById('hideButtonCircle');
const Pi = 3.14;

 myButtonCircle.addEventListener("click", function() {
  // alert();
  var inputValueCircleR = Number(numCircleA.value);
  resultAreaCircle.innerText = (Math.pow(inputValueCircleR, 2)) * Pi;
  resultSperimeterCircle.innerText = (Pi*2)*inputValueCircleR;

});



