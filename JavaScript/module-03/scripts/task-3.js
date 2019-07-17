
// Напиши функцию findBestEmployee(employees), которая принимает объект
// сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// Вызовы функции для проверки работоспособности твоей реализации.




function findBestEmployee (employees) {
  let max = 0;
  let name;
  for (const key in employees) {
    if (max < employees[key]) {
      max = employees[key];
      name = key;
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    david: 21,
    lux: 147,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
