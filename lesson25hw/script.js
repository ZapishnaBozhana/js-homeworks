//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let sum = (0.1 * 10 + 0.2 * 10) / 10;
alert(sum);

//Виконай додавання рядка "1" і цифри 2
let a = "1";
let b = 2;
let result = Number(a) + b;
alert(result);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let gb = Number(prompt("Введіть обсяг флешки (Гб):"));
let mb = gb * 1024;
let files = Math.floor(mb / 820);
alert("Поміститься файлів: " + files);

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let money = Number(prompt("Введіть суму грошей:"));
let price = Number(prompt("Введіть кількість шоколадок"));

let count = Math.floor(money / price);
let change = money % price;

alert("Кількість шоколадок:" + count);
alert("Ваша решта:" + change);

/*Запитай у користувача тризначне число і виведи його задом наперед. 
Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).*/
let num = Number(prompt("Введіть тризначне число"));
let u = num % 10;
let i = Math.floor(num / 10) % 10;
let c = Math.floor(num / 100);
let reversed = u * 100 + i * 10 + c;
alert(reversed);

/*Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
Вивести суму нарахованих відсотків.*/

let deposit = Number(prompt("Сума вкладу"));

let percent = 0.05;
let months = 2;

let profit = ((deposit * percent) / 12) * months;

alert("Нараховані відсотки: " + profit.toFixed(2));

let finalMoney = deposit + profit;
alert("Загальна сума:" + finalMoney);
