import React, { useState, useEffect } from 'react';
import GoodList from '../GoodsList/GoodList';
import Header from '../Header/Header';
import './Shop.css';

function Shop(props) {
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [favourites, setFavourites] = useState([]);

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
      <Header quantity={order.length} favourites={favourites.length} />
      <GoodList
        goods={goods}
        addToBasket={addToBasket}
        addToFavourites={addToFavourites}
      />
    </div>
  );
}

export default Shop;
