import React from 'react';
import './Header.css';
import logo from './logo.svg';
import accaunt from './accaunt.svg';

function Header(props) {
  const {
    quantity = 0,
    favorites = 0,
    handleBasketShow = Function.prototype,
    handleFavoritShow = Function.prototype,
  } = props;
  //console.log(favorites);

  let classFavorit = 'bi bi-heart header__icon';
  if (favorites > 0) {
    classFavorit += ' favorit';
  }
  let classBasket = 'bi bi-cart-fill header__icon';
  if (quantity > 0) {
    classBasket += ' basket';
  }

  return (
    <div>
      <ul className='row header'>
        <li className='col'>
          <img className='header__icon' src={logo} alt='' />
        </li>
        <li className='col'>
          <input
            className='header__input'
            type='text'
            placeholder='Что вы хотите найти?'
          />
        </li>
        <li className='col'>
          <h2 className='header__mobil'>+7 (4932) 11-22-33</h2>
          <span className='header__span'>Обратный звонок</span>
        </li>
        <li className='col'>
          <img className='header__icon' src={accaunt} alt='' />
          <span className='header__subtitle'>Личный кабинет</span>
        </li>
        <li className='col'>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className={classFavorit}
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
              />
            </svg>
          </i>
          <span className='header__subtitle' onClick={handleFavoritShow}>
            Избранное
          </span>
          {favorites ? <span> {favorites}</span> : null}
        </li>
        <li className='col'>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className={classBasket}
              viewBox='0 0 16 16'
            >
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
          </i>

          {quantity ? <span>{quantity} </span> : null}
          <span className='header__subtitle' onClick={handleBasketShow}>
            {' '}
            Корзина
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
