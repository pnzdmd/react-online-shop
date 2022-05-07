import React from 'react';
import BasketItem from '../BasketItem/BasketItem';

import './BasketList.css';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removFromBasketShow = Function.prototype,
    incQuntity,
    decQuntity,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  //console.log(order);

  return (
    <ul className='list-group basket-list'>
      <h2 className='bg-secondary text-light m-0'>КОРЗИНА</h2>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removFromBasketShow={removFromBasketShow}
            incQuntity={incQuntity}
            decQuntity={decQuntity}
          />
        ))
      ) : (
        <li className='list-group-item d-flex justify-content-center'>Пусто</li>
      )}
      <li className='list-group-item d-flex justify-content-center bg-info text-body'>
        Итого: {totalPrice} руб.
      </li>
      {order.length ? (
        <button type='button' className='btn btn-secondary'>
          Купить
        </button>
      ) : (
        <button disabled type='button' className='btn btn-secondary'>
          Купить
        </button>
      )}

      <button
        onClick={handleBasketShow}
        type='button'
        className='btn-secondary close-basket'
      >
        <span>X</span>
      </button>
    </ul>
  );
}

export default BasketList;
