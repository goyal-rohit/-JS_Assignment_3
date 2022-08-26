//Write a program to find whether a given number is armstrong number or not.

let num = 407;

//calculate the number of digits in the number

function Digits(num) {
  let n = 0;
  while (num != 0) {
    num = parseInt(num / 10, 10);
    n++;
  }
  return n;
}
function isArmstrong(num) {
  let temp = num,
    sum = 0;
  let digits = Digits(num);
  while (temp != 0) {
    r = temp % 10;
    sum = sum + r ** digits;
    temp = parseInt(temp / 10, 10);
  }
  return sum == num;
}

if (isArmstrong(num)) {
  console.log(`The number ${num} is an Armstrong number`);
} else {
  console.log(`The number ${num} is not an Armstrong number`);
}
