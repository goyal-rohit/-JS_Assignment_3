//Write a program to find whether a given number is special number or not.

let num = 145;

//calculate the number of digits in the number

function Digits(num) {
  let n = 0;
  while (num != 0) {
    num = parseInt(num / 10, 10);
    n++;
  }
  return n;
}
function Factorial(number) {
  let fact =1;
  if(number==0||number==1){
    fact=1;
  }
  else{
    for(let i =2; i<=number;i++){
      fact = fact*i;
    }
  }
  return fact;
}
function isSpecial(num) {
  let temp = num,
    sum = 0;
  let digits = Digits(num);
  while (temp != 0) {
    r = temp % 10;
    sum = sum + Factorial(r);
    temp = parseInt(temp / 10, 10);
  }
  return sum == num;
}

if (isSpecial(num)) {
  console.log(`The number ${num} is a Special number`);
} else {
  console.log(`The number ${num} is not a Special number`);
}
