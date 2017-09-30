var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34,
              60.00, 81.43, 86.22, 88.33,9.03,49.93, 52.34,
              53.11, 50.10,88.88, 55.32, 55.69, 61.68,70.44,
              70.54,90.0, 71.11, 80.01];

var maxVal = 100.00;

var A1Val = 95.00;
var A2Val = 90.00;
var A3Val = 85.00;

var B1Val = 80.00;
var B2Val = 75.00;
var B3Val = 70.00;

var C1Val = 65.00;
var C2Val = 60.00;
var C3Val = 55.00;

var DVal = 50.00;
var FVal = 0.00;

var vals = [maxVal, A1Val, A2Val, A3Val, B1Val,  B2Val, B3Val,
            C1Val, C2Val, C3Val, DVal, FVal]

function overlapCheck() {
  var overlap = document.getElementById("overlap");
  for(var i=0; i<vals.length-1; i++) {
    if(vals[i] <= vals[i+1]){
      overlap.innerText = "\n Warning! \n There is overlap in the lower bounds! \n Resulting histogram may be inaccurate.";
      return;
    }
  }
  overlap.innerText = "";
}

function lengthO(low, up) {
  var length = ""

  for(var i=0; i<grades.length-1; i++) {
    if( grades[i] >= low && grades[i] < up) {
      length = length + "O";
    }
  }

  return length;
}

function getMaxVal() {
  var val = document.getElementById("maxVal");
  vals[0] = parseFloat(val.value);

  var length = lengthO(vals[1], vals[0]);

  var A1In = document.getElementById("A1In");
  A1In.innerText = length;

  overlapCheck();
}

function getA1Val() {
  var val = document.getElementById("A1Val");
  vals[1] = parseFloat(val.value);

  var length = lengthO(vals[1], vals[0]);
  var length2 = lengthO(vals[2], vals[1]);

  var A1In = document.getElementById("A1In");
  A1In.innerText = length;

  var A2In = document.getElementById("A2In");
  A2In.innerText = length2;

  overlapCheck();
}

function getA2Val() {
  var val = document.getElementById("A2Val");
  vals[2] = parseFloat(val.value);

  var length = lengthO(vals[2], vals[1]);
  var length2 = lengthO(vals[3], vals[2]);

  var A2In = document.getElementById("A2In");
  A2In.innerText = length;

  var A3In = document.getElementById("A3In");
  A3In.innerText = length2;

  overlapCheck();
}

function getA3Val() {
  var val = document.getElementById("A3Val");
  vals[3] = parseFloat(val.value);

  var length = lengthO(vals[3], vals[2]);
  var length2 = lengthO(vals[4], vals[3]);

  var A3In = document.getElementById("A3In");
  A3In.innerText = length;

  var B1In = document.getElementById("B1In");
  B1In.innerText = length2;

  overlapCheck();
}

function getB1Val() {
  var val = document.getElementById("B1Val");
  vals[4] = parseFloat(val.value);

  var length = lengthO(vals[4], vals[3]);
  var length2 = lengthO(vals[5], vals[4]);

  var B1In = document.getElementById("B1In");
  B1In.innerText = length;

  var B2In = document.getElementById("B2In");
  B2In.innerText = length2;

  overlapCheck();
}

function getB2Val() {
  var val = document.getElementById("B2Val");
  vals[5] = parseFloat(val.value);

  var length = lengthO(vals[5], vals[4]);
  var length2 = lengthO(vals[6], vals[5]);

  var B2In = document.getElementById("B2In");
  B2In.innerText = length;

  var B3In = document.getElementById("B3In");
  B3In.innerText = length2;

  overlapCheck();
}

function getB3Val() {
  var val = document.getElementById("B3Val");
  vals[6] = parseFloat(val.value);

  var length = lengthO(vals[6], vals[5]);
  var length2 = lengthO(vals[7], vals[6]);

  var B3In = document.getElementById("B3In");
  B3In.innerText = length;

  var C1In = document.getElementById("C1In");
  C1In.innerText = length2;

  overlapCheck();
}

function getC1Val() {
  var val = document.getElementById("C1Val");
  vals[7] = parseFloat(val.value);

  var length = lengthO(vals[7], vals[6]);
  var length2 = lengthO(vals[8], vals[7]);

  var C1In = document.getElementById("C1In");
  C1In.innerText = length;

  var C2In = document.getElementById("C2In");
  C2In.innerText = length2;

  overlapCheck();
}

function getC2Val() {
  var val = document.getElementById("C2Val");
  vals[8] = parseFloat(val.value);

  var length = lengthO(vals[8], vals[7]);
  var length2 = lengthO(vals[9], vals[8]);

  var C2In = document.getElementById("C2In");
  C2In.innerText = length;

  var C3In = document.getElementById("C3In");
  C3In.innerText = length2;

  overlapCheck();
}

function getC3Val() {
  var val = document.getElementById("C3Val");
  vals[9] = parseFloat(val.value);

  var length = lengthO(vals[9], vals[8]);
  var length2 = lengthO(vals[10], vals[9]);

  var C3In = document.getElementById("C3In");
  C3In.innerText = length;

  var DIn = document.getElementById("DIn");
  DIn.innerText = length2;

  overlapCheck();
}

function getDVal() {
  var val = document.getElementById("DVal");
  vals[10] = parseFloat(val.value);

  var length = lengthO(vals[10], vals[9]);
  var length2 = lengthO(vals[11], vals[10]);

  var DIn = document.getElementById("DIn");
  DIn.innerText = length;

  var FIn = document.getElementById("FIn");
  FIn.innerText = length2;

  overlapCheck();
}

function getFVal() {
  var val = document.getElementById("A3Val");
  vals[11] = parseFloat(val.value);

  var length = lengthO(vals[11], vals[12]);

  var FIn = document.getElementById("FIn");
  FIn.innerText = length;

  var overlap = document.getElementById("overlap");
  overlapCheck();
}
