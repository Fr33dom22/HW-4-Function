"use strict";

// Вивід результатів
function showResult(text) {
  document.getElementById("results").innerHTML = text;
}

// 1️. Варіанти функцій
function sayHello1(name) {
  return "Привіт, " + name;
}
const sayHello2 = function (name) {
  return "Привіт, " + name;
};
const sayHello3 = (name) => {
  return "Привіт, " + name;
};
const sayHello4 = (name) => "Привіт, " + name;

function testSayHello() {
  const name = document.getElementById("nameInput").value || "Гість";
  showResult(
    sayHello1(name) +
      "<br>" +
      sayHello2(name) +
      "<br>" +
      sayHello3(name) +
      "<br>" +
      sayHello4(name)
  );
}

// 2️. Кількість аргументів
function countArgs() {
  return arguments.length;
}
function testCountArgs() {
  const args = document.getElementById("argsInput").value.split(",");
  showResult("Кількість аргументів: " + countArgs(...args));
}

// 3️. Порівняння чисел
function compareNumbers(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
function testCompare() {
  const a = Number(document.getElementById("numA").value);
  const b = Number(document.getElementById("numB").value);
  showResult("Результат: " + compareNumbers(a, b));
}

// 4️. Факторіал
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
}
function testFactorial() {
  const n = Number(document.getElementById("factInput").value);
  showResult("Факторіал " + n + " = " + factorial(n));
}

// 5️. З трьох цифр у число
function makeNumber(a, b, c) {
  return Number("" + a + b + c);
}
function testMakeNumber() {
  const a = document.getElementById("digit1").value;
  const b = document.getElementById("digit2").value;
  const c = document.getElementById("digit3").value;
  showResult("Число: " + makeNumber(a, b, c));
}

// 6️. Площа
function getArea(a, b) {
  if (!b) return a * a;
  return a * b;
}
function testArea() {
  const a = Number(document.getElementById("sideA").value);
  const b = document.getElementById("sideB").value;
  showResult("Площа = " + getArea(a, b ? Number(b) : undefined));
}
