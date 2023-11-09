//1.
function firstAnswer() {
  let a = "10";
  let b = 5;

  let c = Number(a) + b;
  console.log("1. " + c);
}

// 2.
function secondAnswer() {
  console.log("2. " + 5 * "12a");
}

//3.
function thirdAnswer() {
  a = 10;
  a = typeof a;
  console.log("3. " + a);
}

//4.
function fourthAnswer() {
  a = -20;
  console.log("4. " + Boolean(a));
}

//5.
function fifthAnswer() {
  a = 12;
  a++;
  console.log("5. " + a);
}

//6.
function sixthAnswer() {
  a = 12;
  a--;
  console.log("6. " + a);
}

//7.
function seventhAnswer() {
  a = 12;
  a=null;
  console.log("7. " + a);
}


firstAnswer();
secondAnswer();
thirdAnswer();
fourthAnswer();
fifthAnswer();
sixthAnswer();
seventhAnswer();