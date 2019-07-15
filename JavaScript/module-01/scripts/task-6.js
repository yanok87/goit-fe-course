
let userInput;
let total = 0;

while (true) {
  userInput = prompt('Введите число');
  total = total + Number(userInput);
  if (userInput === null) {
    alert('Общая сумма чисел равна ' + total);
    break;
  }
}
