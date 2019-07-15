

let userInput = prompt ('Введите страну доставки:')
let price
userInput = userInput !== null ? userInput.toLowerCase() : null;

switch (userInput) {
      case 'китай':
      alert('Доставка в ' + userInput + ' будет стоить 100 кредитов');
      break;
      case 'чили':
      alert('Доставка в ' + userInput + ' будет стоить 250 кредитов');
      break;
      case 'австралия':
      alert('Доставка в ' + userInput + ' будет стоить 170 кредитов');
      break;
      case 'индия':
      alert('Доставка в ' + userInput + ' будет стоить 80 кредитов');
      break;
      case 'ямайка':
      alert('Доставка в ' + userInput + ' будет стоить 120 кредитов');
      break;
      case null:
      alert('Доставка отменнена');
      break;
      default:
          alert('В вашей стране доставка не доступна');
      }
