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
  for(var i=0; i<vals.length-1; i++) {
    if(vals[i] <= vals[i+1]){
      return true;
    }
  }
  return false;
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
  maxVal = parseFloat(val.value);

  var length = lengthO(A1Val, maxVal);

  var A1In = document.getElementById("A1In");
  A1In.innerText = length;

  var check = overlapCheck();
  if(check == true){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getA1Val() {
  var val = document.getElementById("A1Val");
  A1Val = parseFloat(val.value);

  var length = lengthO(A1Val, maxVal);
  var length2 = lengthO(A2Val, A1Val);

  var A1In = document.getElementById("A1In");
  A1In.innerText = length;

  var A2In = document.getElementById("A2In");
  A2In.innerText = length2;

  var check = overlapCheck();
  if(check == true){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getA2Val() {
  var val = document.getElementById("A2Val");
  A2Val = parseFloat(val.value);

  var length = lengthO(A2Val, A1Val);
  var length2 = lengthO(A3Val, A2Val);

  var A2In = document.getElementById("A2In");
  A2In.innerText = length;

  var A3In = document.getElementById("A3In");
  A3In.innerText = length2;

  var check = overlapCheck();
  if(check == true){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getA3Val() {
  var val = document.getElementById("A3Val");
  A3Val = parseFloat(val.value);

  var length = lengthO(A3Val, A2Val);
  var length2 = lengthO(B1Val, A3Val);

  var A3In = document.getElementById("A3In");
  A3In.innerText = length;

  var B1In = document.getElementById("B1In");
  B1In.innerText = length2;

  var check = overlapCheck();
  if(check == true){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getB1Val() {
  var val = document.getElementById("B1Val");
  B1Val = parseFloat(val.value);

  var length = lengthO(B1Val, A3Val);
  var length2 = lengthO(B2Val, B1Val);

  var B1In = document.getElementById("B1In");
  B1In.innerText = length;

  var B2In = document.getElementById("B2In");
  B2In.innerText = length2;

  var check = overlapCheck();
  if(overlapCheck()){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getB2Val() {
  var val = document.getElementById("B2Val");
  B2Val = parseFloat(val.value);

  var length = lengthO(B2Val, B1Val);
  var length2 = lengthO(B3Val, B2Val);

  var B2In = document.getElementById("B2In");
  B2In.innerText = length;

  var B3In = document.getElementById("B3In");
  B3In.innerText = length2;

  var check = overlapCheck();
  if(check == true){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getB3Val() {
  var val = document.getElementById("B3Val");
  B3Val = parseFloat(val.value);

  var length = lengthO(B3Val, B2Val);
  var length2 = lengthO(C1Val, B3Val);

  var B3In = document.getElementById("B3In");
  B3In.innerText = length;

  var C1In = document.getElementById("C1In");
  C1In.innerText = length2;

  var check = overlapCheck();
  if(check == true){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getC1Val() {
  var val = document.getElementById("C1Val");
  C1Val = parseFloat(val.value);

  var length = lengthO(C1Val, B3Val);
  var length2 = lengthO(C2Val, C1Val);

  var C1In = document.getElementById("C1In");
  C1In.innerText = length;

  var C2In = document.getElementById("C2In");
  C2In.innerText = length2;

  var check = overlapCheck();
  if(check == true){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getC2Val() {
  var val = document.getElementById("C2Val");
  C2Val = parseFloat(val.value);

  var length = lengthO(C2Val, C1Val);
  var length2 = lengthO(C3Val, C2Val);

  var C2In = document.getElementById("C2In");
  C2In.innerText = length;

  var C3In = document.getElementById("C3In");
  C3In.innerText = length2;

  var check = overlapCheck();
  if(check == true){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getC3Val() {
  var val = document.getElementById("C3Val");
  C3Val = parseFloat(val.value);

  var length = lengthO(C3Val, C2Val);
  var length2 = lengthO(DVal, C3Val);

  var C3In = document.getElementById("C3In");
  C3In.innerText = length;

  var DIn = document.getElementById("DIn");
  DIn.innerText = length2;

  var check = overlapCheck();
  if(check == true){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getDVal() {
  var val = document.getElementById("DVal");
  DVal = parseFloat(val.value);

  var length = lengthO(DVal, C3Val);
  var length2 = lengthO(FVal, DVal);

  var DIn = document.getElementById("DIn");
  DIn.innerText = length;

  var FIn = document.getElementById("FIn");
  FIn.innerText = length2;

  var check = overlapCheck();
  if(check == true){
    var overlap = document.getElementById("overlap");
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}

function getFVal() {
  var val = document.getElementById("A3Val");
  A3Val = parseFloat(val.value);

  var length = lengthO(FVal, DVal);

  var FIn = document.getElementById("FIn");
  FIn.innerText = length;

  var overlap = document.getElementById("overlap");
  var check = overlapCheck();
  if(check == true){
    overlap.innerText = "Warning! There is overlap in the lower bounds! Resulting Histogram may be inaccurate.";
  }
}
