"use strict";
const a = parseFloat(prompt("Введите число a: "));
const b = parseFloat(prompt("Введите число b: "));
const operation = prompt("Введите название действия: ");
//
if (isNumeric(a) && isNumeric(b) && typeof(operation) == "string") {//
	//число
	if (operation.trim() != '') {
		alert(mathOperation(a, b, operation));
	} else {
		alert("Операция не указана");
	}
} else {
	//не число
	if (!isNumeric(a)) {
		alert("Введите число a корректно!");
	} else {
		alert("Введите число b корректно!");
	}
}

/** 
 * Является ли переменная числом?
 * @param {*} n - данные, введенные с клавиатуры
 * @returns {boolean}
*/
function isNumeric(n) {
	return !Number.isNaN(n);
}

/**
 * Выполнить математическую операцию
 * @param {number} arg1 - аргумент 1
 * @param {number} arg2 - аргумент 2
 * @param {string} operation - название операции над числами
 * @returns {string}
 */
function mathOperation(arg1, arg2, operation){
	let myOperation = (operation).trim();
	let result;
	myOperation = myOperation.toLowerCase();			
	//
	switch(myOperation) {
		case 'сложение':
			result = `Сложение: ${a} + ${b} = ${addition(a, b)}`;
			break;
			
		case 'вычитание':
			result = `Вычитание: ${a} - ${b} = ${substraction(a, b)}`;
			break;
			
		case 'умножение':
			result = `Умножение: ${a} * ${b} = ${multiplication(a, b)}`;
			break;
			
		case 'деление':
			result = `Деление: ${a} / ${b} = ${division(a, b)}`;
			break;
			
		default:
			result = "Действие не указано";
	}
	return result;
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