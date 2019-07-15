
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
//  Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех
// пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не
// пустой, необходимо посчитать сумму всех элементов массива и записать ее в
// переменную total. Используй цикл for или for...of. После чего в консоль
// выведи строку 'Общая сумма чисел равна [сумма]'.


// 1) prompt - input - number
// 2) numbers go to massive
// 3) input === null --> break
// 4) alert - message - sum of numbers --> total



let input;
const numbers = [];
let total = 0;
// console.log(numbers);

for (let i = 0; i <= numbers.length; i += 1) {
  input = prompt('Введите число');
  numbers.push(Number(input));
  total += numbers[i];
  if (input === null){
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
}


// console.log(sum);

// while (true) {
//   input = prompt('Введите число');
//   total = total + Number(input);
//   if (input === null) {
//     alert('Общая сумма чисел равна ' + total);
//     break;
//   }
//   numbers = ['Number(input)'];
// }


//   console.log(numbers);

