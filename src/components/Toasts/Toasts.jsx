import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../../context';
//import './Toasts.css';

function Toasts() {
  const { alertName: name = '', closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 99000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>
        <p style={{ color: 'red' }}>{name} добавлен в корзину</p>
      </div>
    </div>
  );
}

export default Toasts;
