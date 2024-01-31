'use strict'
let num1 = 5;
let operand1 = "*";
 let num2 = 9;

 let result = num1 + operand1 + num2;

 console.log(eval(result));

if (operand1 === "*") console.log(num1 * num2);
if (operand1 === "+") console.log(num1 + num2);

// Калькулятор
alert ("Калькулятор");
let firstNumber = prompt("Введите первое число");

if (firstNumber === "" ) {
    alert("Число не указано");
} else if (isNaN(+firstNumber)) {
    alert("Некорректный ввод чисел");
} 

let operand = ("Введите операцию");
console.log(operand);
if (operand !=="+"  && operand !== "-" && operand !=="*" && operand !=="/"){
    alert("Вы ввели не известный тип операции");
 }

let secondNumber = prompt("Введите второе число");
if (secondNumber === "") {
    alert("Второе число не указано");
  }
  if (isNaN(+secondNumber)) {
    alert("Некорректный ввод второго числа");
  }
    
  if (operand === "*") console.log(+firstNumber * +secondNumber);
  if (operand === "+") console.log(+firstNumber + +secondNumber);
   if (operand === "-") console.log(+firstNumber - +secondNumber);
  if (operand === "/") console.log(+firstNumber / +secondNumber);

if (result !=="Ошибка"){
    alert("Я наконец поняла js!");
}

let n = 25;
let koren = Math.sqrt( n ); // 5
console.log("Нахождения квадратного корня:", n );

let a = 2;
let b = 5;
a ** b;
Math.pow( a, b ); 

function factorialNumber(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    // console.log("Входим в функцию");
    result = result * i;
  }
  return result;
}

// Вызов функции вычисления факториал для числа 7
console.log(factorialNumber(7));

