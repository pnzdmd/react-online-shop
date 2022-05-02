import React from 'react';
import './BasketItem.css';

function BasketItem(props) {
  const {
    id,
    title,
    price,
    quantity,
    removFromBasketShow = Function.prototype,
  } = props;
  return (
    <div>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        {title} x {quantity} = {price * quantity} руб.
        <span className='badge bg-primary rounded-pill'></span>
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={() => removFromBasketShow(id)}
        >
          <span aria-hidden='true'>Удалить</span>
        </button>
      </li>
    </div>
  );
}

export default BasketItem;
