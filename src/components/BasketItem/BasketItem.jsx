import React, { useContext } from 'react';
import { ShopContext } from '../../context';

import './BasketItem.css';
import plus from './plus.svg';
import minus from './minus.svg';

function BasketItem(props) {
  const { id, title, price, quantity } = props;

  const { removFromBasketShow, incQuntity, decQuntity } =
    useContext(ShopContext);

  return (
    <div>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
          {title}
          <button className='basket-item' onClick={() => decQuntity(id)}>
            <img src={minus} alt='minus' />
          </button>
          {quantity}
          <button className='basket-item' onClick={() => incQuntity(id)}>
            <img src={plus} alt='plus' />
          </button>
          = {price * quantity} руб.
          <span className='badge bg-primary rounded-pill'></span>
        </div>
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
