/*Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10 */

let lines = 4;
let num = 1;
let str = "";

for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= i; j++) {
    str = str + " " + num;
    num++;
  }
  str += "\n";
}

console.log(str);
