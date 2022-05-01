import React from 'react';
import './BasketItem.css';

function BasketItem(props) {
  const { title, price, quantity } = props;
  //console.log(props);
  return (
    <div>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        {title} x {quantity} = {price}
        <span className='badge bg-primary rounded-pill'></span>
        <button type='button' className='close' aria-label='Close'>
          <span aria-hidden='true'>X</span>
        </button>
      </li>
    </div>
  );
}

export default BasketItem;
