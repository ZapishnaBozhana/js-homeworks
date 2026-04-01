// 1. Підключення JS
// 1) Inline (в HTML) — приклад:
// <button onclick="alert('Hello')">Click</button>
// 2) Зовнішній JS (через <script src="script.js"></script>)

//2. Змінні
//правильні
let firstName = "Іван";
let lastName = "Петренко";
let userAge = "21";
let userCity = "Kyiv";

// неправильні
// let 1name = "test";      // починається з цифри
// let user-name = "test";  // дефіс не можна
// let const = "test";        // зарезервоване слово
// let user name = "test";  // пробіл
// let @name = "test";      // спецсимвол

//3. Коментарі
// однорядковий коментар

/*багаторядковий
    коментар
  */

//4. Стилі написання
// camelCase → userName (пріорітетний)
// snake_case → user_name
// kebab-case → user-name
// PascalCase → UserName

let name = prompt("Введіть ваше ім'я:");
alert("Привіт, " + name);

const CURRENT_YEAR = 2026;
let birthYear = prompt("Введіть ваш рік народження:");
let age = CURRENT_YEAR - Number(birthYear);
alert("Ваш вік: " + age);

let side = Number(prompt("Введіть сторону квадрата:"));
let perimeter = 4 * side;
alert("Периметр квадрата: " + perimeter);

//extra

let radius = prompt("Введіть радіус кола:");
let circleArea = Math.PI * radius * radius;
alert("Площа кола: " + circleArea);

let distance = prompt("Введіть відстань (км):");
let time = prompt("За скільки годин хочете доїхати:");
let speed = distance / time;
alert("Потрібна швидкість: " + speed + " км/год");

const USD_TO_UAN = 43.75;
let dollars = prompt("Введіть суму в доларах:");
let hryvnia = dollars * USD_TO_UAN;
alert("В гривнях: " + hryvnia);
