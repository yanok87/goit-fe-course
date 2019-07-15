

const credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt('How many droids do you want?');
let totalPrice = pricePerDroid * userInput;

if (userInput === null) {
  console.log('Отменено пользователем!');
}
else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
}
else if (totalPrice < credits) {
  console.log(`Вы купили ${userInput} дроидов, на счету осталось ${credits - totalPrice} кредиов.`);
}
