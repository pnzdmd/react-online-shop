import React, { useEffect, useContext } from 'react';
import GoodList from '../GoodsList/GoodList';
import Header from '../Header/Header';
import './Shop.css';
import BasketList from '../BasketList/BasketList';
import FavoritList from '../FavoritList/FavoritList';
import Toasts from '../Toasts/Toasts';
import { ShopContext } from '../../context';

function Shop(props) {
  const {
    goods,
    order,
    favorites,
    isBasketShow,
    isFavoritShow,
    alertName,
    setGoods,
  } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setGoods(data);
      });
  }, []);

  return (
    <div className='shop'>
      <Header quantity={order.length} favorites={favorites.length} />
      <GoodList goods={goods} />
      {isBasketShow && <BasketList order={order} />}

      {isFavoritShow && <FavoritList favorites={favorites} />}
      {alertName && <Toasts name={alertName} />}
    </div>
  );
}

export default Shop;
