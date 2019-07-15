const total = 100;
const ordered = prompt('Place your order here');

if (ordered < total) {
  console.log('Your order is taken');
}
else {
  console.log('There is not enough product in the storage');
}
