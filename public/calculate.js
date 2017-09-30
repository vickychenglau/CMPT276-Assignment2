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

function getMaxVal() {
  var val = document.getElementById("maxVal");
  maxVal = parseFloat(val.value);

  var length = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= A1Val && grades[i] < maxVal) {
      length = length + "O";
    }
  }

  var A1In = document.getElementById("A1In");
  A1In.innerText = length;
}

function getA1Val() {
  var val = document.getElementById("A1Val");
  A1Val = parseFloat(val.value);

  var length = "";
  var length2 = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= A1Val && grades[i] < maxVal) {
      length = length + "O";
    }
    else if( grades[i] >= A2Val && grades[i] < A1Val) {
      length2 = length2 + "O";
    }
  }

  var A1In = document.getElementById("A1In");
  A1In.innerText = length;

  var A2In = document.getElementById("A2In");
  A2In.innerText = length2;
}

function getA2Val() {
  var val = document.getElementById("A2Val");
  A2Val = parseFloat(val.value);

  var length = "";
  var length2 = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= A2Val && grades[i] < A1Val) {
      length = length + "O";
    }
    else if( grades[i] >= A3Val && grades[i] < A2Val) {
      length2 = length2 + "O";
    }
  }

  var A2In = document.getElementById("A2In");
  A2In.innerText = length;

  var A3In = document.getElementById("A3In");
  A3In.innerText = length2;
}

function getA3Val() {
  var val = document.getElementById("A3Val");
  A3Val = parseFloat(val.value);

  var length = "";
  var length2 = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= A3Val && grades[i] < A2Val) {
      length = length + "O";
    }
    else if( grades[i] >= B1Val && grades[i] < A3Val) {
      length2 = length2 + "O";
    }
  }

  var A3In = document.getElementById("A3In");
  A3In.innerText = length;

  var B1In = document.getElementById("B1In");
  B1In.innerText = length2;
}

function getB1Val() {
  var val = document.getElementById("B1Val");
  B1Val = parseFloat(val.value);

  var length = "";
  var length2 = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= B1Val && grades[i] < A3Val) {
      length = length + "O";
    }
    else if( grades[i] >= B2Val && grades[i] < B1Val) {
      length2 = length2 + "O";
    }
  }

  var B1In = document.getElementById("B1In");
  B1In.innerText = length;

  var B2In = document.getElementById("B2In");
  B2In.innerText = length2;
}

function getB2Val() {
  var val = document.getElementById("B2Val");
  B2Val = parseFloat(val.value);

  var length = "";
  var length2 = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= B2Val && grades[i] < B1Val) {
      length = length + "O";
    }
    else if( grades[i] >= B3Val && grades[i] < B2Val) {
      length2 = length2 + "O";
    }
  }

  var B2In = document.getElementById("B2In");
  B2In.innerText = length;

  var B3In = document.getElementById("B3In");
  B3In.innerText = length2;
}

function getB3Val() {
  var val = document.getElementById("B3Val");
  B3Val = parseFloat(val.value);

  var length = "";
  var length2 = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= B3Val && grades[i] < B2Val) {
      length = length + "O";
    }
    else if( grades[i] >= C1Val && grades[i] < B3Val) {
      length2 = length2 + "O";
    }
  }

  var B3In = document.getElementById("B3In");
  B3In.innerText = length;

  var C1In = document.getElementById("C1In");
  C1In.innerText = length2;
}

function getC1Val() {
  var val = document.getElementById("C1Val");
  C1Val = parseFloat(val.value);

  var length = "";
  var length2 = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= C1Val && grades[i] < B3Val) {
      length = length + "O";
    }
    else if( grades[i] >= C2Val && grades[i] < C1Val) {
      length2 = length2 + "O";
    }
  }

  var C1In = document.getElementById("C1In");
  C1In.innerText = length;

  var C2In = document.getElementById("C2In");
  C2In.innerText = length2;
}

function getA2Val() {
  var val = document.getElementById("C2Val");
  C2Val = parseFloat(val.value);

  var length = "";
  var length2 = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= C2Val && grades[i] < C1Val) {
      length = length + "O";
    }
    else if( grades[i] >= C3Val && grades[i] < C2Val) {
      length2 = length2 + "O";
    }
  }

  var C2In = document.getElementById("C2In");
  C2In.innerText = length;

  var C3In = document.getElementById("C3In");
  C3In.innerText = length2;
}

function getA3Val() {
  var val = document.getElementById("C3Val");
  C3Val = parseFloat(val.value);

  var length = "";
  var length2 = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= C3Val && grades[i] < C2Val) {
      length = length + "O";
    }
    else if( grades[i] >= DVal && grades[i] < C3Val) {
      length2 = length2 + "O";
    }
  }

  var C3In = document.getElementById("C3In");
  C3In.innerText = length;

  var DIn = document.getElementById("DIn");
  DIn.innerText = length2;
}

function getDVal() {
  var val = document.getElementById("DVal");
  DVal = parseFloat(val.value);

  var length = "";
  var length2 = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= DVal && grades[i] < C3Val) {
      length = length + "O";
    }
    else if( grades[i] >= FVal && grades[i] < DVal) {
      length2 = length2 + "O";
    }
  }

  var DIn = document.getElementById("DIn");
  DIn.innerText = length;

  var FIn = document.getElementById("FIn");
  FIn.innerText = length2;
}

function getA3Val() {
  var val = document.getElementById("A3Val");
  A3Val = parseFloat(val.value);

  var length = "";

  for(i=0; i<grades.length; i++) {
    if( grades[i] >= FVal && grades[i] < DVal) {
      length = length + "O";
    }
  }

  var FIn = document.getElementById("FIn");
  FIn.innerText = length;
}
