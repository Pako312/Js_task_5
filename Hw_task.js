// 1) Математические расчеты и функции

// Создайте две функции, add и multiply; пусть каждая принимает
// по два аргумента. Функция add должна складывать аргументы
// и возвращать результат, а функция multiply — перемножать
// аргументы.
// С помощью только этих двух функций вычислите следующее
// несложное выражение: 36325 * 9824 + 777

// function add( a, b ) {
//     c = a + b;
//     return c;
// }

// function multiply( a, b ) {
//     c = a * b;
//     return c;
// }

// result = add(multiply(36325, 9824), 777);
// alert( result );

// 2) Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function square(num, func) {
// 	console.log(func(num));
// }

// // Выведет 25:
// square(5, function(num) {
// 	return num * num;
// });

// 3) Сделайте функцию, которая возвращает сумму двух чисел.


function sum(num,num2) {
    c = num + num2;
    return c;
}
result = sum(100, 200);
alert(result);

// 4) Сделайте функцию, которая отнимает от первого числа второе и делит на третье

// 5) Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.