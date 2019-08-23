import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });

// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', null, image, title, price, button);

// // console.log('product :', product);

// // Для передачи детей можно использовать свойство `children` параметра `props`
// const productWithChildrenInProps = React.createElement('div', {
//   children: [image, title, price, button],
// });


const product = (
  <div>
    <img
      className="image"
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width="640"
    />
    <h2>Tacos With Lime</h2>
    <p>Price: 10$</p>
    <button type="button">Add to cart</button>
    
  </div>
);


ReactDOM.render(product, document.getElementById('root'));
