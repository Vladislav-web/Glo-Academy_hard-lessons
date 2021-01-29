// 1
let num = 266219;      
let str = String(num);
// 2
let sum = 1;
for (let digit of str) {
  sum = sum * +digit;    //перебрал и всех перемножил = 1296
}
console.log(sum);
// 3
sum = sum**3         // 3-й степень 2176782336
console.log(sum);
// 4
console.log(String(sum).slice(0, 2));   // первые два числа 21







 


