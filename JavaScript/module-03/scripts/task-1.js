
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение
// используя Object.keys() и for...of


const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const user2 = {
  hobby: 'javascript',
  premium: false,
  mood: 'happy',
};

const newUser = {...user, ...user2};

// console.log('user :', user);
// console.log('user2 :', user2);
// console.log('newUser :', newUser);

// const keys = Object.keys(newUser); //
// for (const key of keys) {
//   console.log('Value: ', newUser[key]);
// }

const entries = Object.entries(newUser);

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}

