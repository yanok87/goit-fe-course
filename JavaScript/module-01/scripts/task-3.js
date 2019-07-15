// 3 //

const ADMIN_PASSWORD = 'jqueryismyjam';
const userInput = prompt('Enter your password here');
// let message;

switch (userInput){
  case ADMIN_PASSWORD:
    alert('Welcome');
    break;
  case null:
    alert('User changed his mind');
    break;

  default:
    alert('The password is not correct');
    break;
}

// 3 - version 2 //

const ADMIN_PASSWORD = 'jqueryismyjam';
const userInput = prompt('Enter your password')
let message;

if (userInput === null) {
  message = 'User changed his mind'
} else if (userInput === ADMIN_PASSWORD){
  message = 'Welcome'
}
else {
  message = 'The password is incorrect'
}
alert(message);
