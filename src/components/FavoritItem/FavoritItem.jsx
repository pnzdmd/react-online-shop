import React from 'react';
import './FavoritItem.css';

function FavoritItem(props) {
  const { id, title, removeFromFavorit = Function.prototype } = props;

  return (
    <li className='list-group-item'>
      <span>{title}</span>
      <button
        type='button'
        className='close'
        aria-label='Close'
        onClick={() => removeFromFavorit(id)}
      >
        <span aria-hidden='true'>Удалить</span>
      </button>
    </li>
  );
}

export default FavoritItem;
