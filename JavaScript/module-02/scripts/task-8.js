// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в
//  массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов
// параметра login и верни true или false в зависимости от того, попадает ли
// длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(logins, login), которая принимает список
// всех логинов и добавляемый логин как параметры и проверяет наличие login
// в массиве logins, возвращая true если такого логина еще нет и false
// если логин уже используется.

// Напиши функцию addLogin(logins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку
// 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью
// функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и
//  возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает
// строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно.
// Это позволяет переиспользовать код и изменять логику работы функции только в одном месте,
// не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть
// начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив. При этом для проверок условия
// добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let login;

// login = prompt('Введите логин от 4 до 16 символов');

const isLoginValid = function (login) {
if (login.length >= 4 && login.length <=16) {
  return true;
} else {
  // alert('Ошибка! Логин должен быть от 4 до 16 символов');
  return false;
}
}
// console.log(isLoginValid(login));

// function isLoginValid(login) {
//   return (login.length >= 4) && (login.length <= 16);
// };

const isLoginUnique = function(logins, login) {
  if (logins.includes(login)) {
    // alert('Такой логин уже используется!');
    return false;
    } else {
    return true;
  }
};

// console.log(isLoginUnique(logins, login));

const addLogin = function(logins, login) {
  if (isLoginValid(login) === true) {
    if (isLoginUnique(logins, login) === true){
      logins.push(login);
      console.log('Логин успешно добавлен!');
    } else {
      console.log('Такой логин уже используется!');
    }
  } else {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'Yanok'); // 'Логин успешно добавлен!'
addLogin(logins, 'Poly'); // 'Такой логин уже используется!'

addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log('logins :', logins);
