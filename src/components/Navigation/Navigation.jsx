import './Navigation.css';

import React from 'react';

function Navigation(props) {
  return (
    <div>
      <ul className='row nav'>
        <li className='col nav__item'>
          <a className='nav__link btn' href=''>
            Главная
          </a>
        </li>
        <li className='col nav__item'>
          <a className='nav__link btn' href=''>
            Одежда
          </a>
        </li>
        <li className='col nav__item'>
          <a className='nav__link btn' href=''>
            Сумки / Рюкзаки
          </a>
        </li>
        <li className='col'>
          <a className='nav__link btn' href=''>
            Бижутерия
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
