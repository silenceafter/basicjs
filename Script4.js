"use strict";
const a = Number.parseFloat(prompt("Введите число a: "));
const b = Number.parseFloat(prompt("Введите число b: "));
//
if (isNumeric(a) && isNumeric(b)) {
	//число
	console.log(`Сложение ${a} + ${b} = ${addition(a, b)}`);
	console.log(`Вычитание ${a} - ${b} = ${substraction(a, b)}`);
	console.log(`Умножение ${a} * ${b} = ${multiplication(a, b)}`);
	console.log(`Деление ${a} / ${b} = ${division(a, b)}`);
} else {
	//не число
	if (!isNumeric(a))
		console.log("Введите число a корректно!");
		
	if (!isNumeric(b))
		console.log("Введите число b корректно!");
}

/** 
 * Является ли переменная числом?
 * @param {*} n - данные, введенные с клавиатуры
 * @returns {boolean}
*/	
function isNumeric(n) {
	return !Number.isNaN(n);//Number.isFinite(n))
}

/**
 * Сложение двух чисел
 * @param {number} a - 1-е слогаемое 
 * @param {number} b - 2-е слогаемое
 * @returns {number}
 */
function addition(a, b){
	return a + b;
}

/**
 * Разность двух чисел
 * @param {number} a - уменьшаемое
 * @param {number} b - вычитаемое
 * @returns {number}
 */
function substraction(a, b) {
	return a - b;
}

/**
 * Умножение двух чисел
 * @param {number} a - множимое
 * @param {number} b - множитель
 * @returns {number}
 */
function multiplication(a, b) {
	return a * b;
}

/**
 * Деление двух чисел
 * @param {number} a - делимое
 * @param {number} b - делитель
 * @returns {number}
 */
function division(a, b) {
	return +(a / b).toFixed(2);
}