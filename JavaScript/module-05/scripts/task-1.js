// Напиши функцию-конструктор Account, которая создает объект со свойствами
// login и email. В prototype функции-конструктора добавь метод getInfo(),
// который выводит в консоль значения полей login и email объекта который его вызвал.

const Account = function (login, email) {
  this.accLogin = login;
  this.accEmail = email;
};

Account.prototype.getInfo = function() {
  console.log(`login: ${this.accLogin}, email: ${this.accEmail}`);
};


console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com
