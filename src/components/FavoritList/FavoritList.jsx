import React from 'react';
import FavoritItem from '../FavoritItem/FavoritItem';
import './FavoritList.css';

function FavoritList(props) {
  const {
    favorites = [],
    handleFavoritShow = Function.prototype,
    removeFromFavorit = Function.prototype,
  } = props;

  return (
    <ul className='list-group favorit-list'>
      <li
        className='list-group-item bg-secondary text-light m-0'
        aria-current='true'
      >
        Избранное
      </li>
      {favorites.length ? (
        favorites.map((item) => (
          <FavoritItem
            key={item.id}
            {...item}
            removeFromFavorit={removeFromFavorit}
          />
        ))
      ) : (
        <li className='list-group-item d-flex justify-content-center'>Пусто</li>
      )}
      <button
        onClick={handleFavoritShow}
        type='button'
        className='btn-secondary close-favorit'
      >
        <span>X</span>
      </button>
    </ul>
  );
}

export default FavoritList;
