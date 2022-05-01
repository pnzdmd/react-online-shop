import React, { useState, useEffect } from 'react';
import GoodList from '../GoodsList/GoodList';
import Header from '../Header/Header';
import './Shop.css';
import BasketList from '../BasketList/BasketList';

function Shop(props) {
  // принимает данные с сервера
  const [goods, setGoods] = useState([]);
  // принимает данные по кол-ву в корзине
  const [order, setOrder] = useState([]);
  // принимает данные по кол-ву в избранном
  const [favourites, setFavourites] = useState([]);
  // принимает данные по корзине
  const [isBasketShow, setIsBasketShow] = useState(false);

  // добавление в корзину
  const addToBasket = (item) => {
    const itemIndex = order.findIndex((el) => el.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  // добавление в избранное
  const addToFavourites = (item) => {
    const itemIndex = favourites.findIndex((el) => el.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        favourites: 1,
      };
      setFavourites([...favourites, newItem]);
    } else {
      const newOrder = favourites.map((favouritesItem, index) => {
        if (index === itemIndex) {
          return {
            ...favouritesItem,
            favourites: favouritesItem.favourites + 1,
          };
        } else {
          return favouritesItem;
        }
      });
      setFavourites(newOrder);
    }
  };

  // управление состоянием показа корзины
  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  /////////////////////////////////////////////
  useEffect(function getGoods() {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setGoods(data);
      });
  }, []);

  return (
    <div className='shop'>
      <Header
        quantity={order.length}
        favourites={favourites.length}
        handleBasketShow={handleBasketShow}
      />
      <GoodList
        goods={goods}
        addToBasket={addToBasket}
        addToFavourites={addToFavourites}
      />
      {isBasketShow && (
        <BasketList order={order} handleBasketShow={handleBasketShow} />
      )}
    </div>
  );
}

export default Shop;
