import React, { useState, useEffect } from 'react';
import GoodList from '../GoodsList/GoodList';
import Header from '../Header/Header';
import './Shop.css';
import BasketList from '../BasketList/BasketList';
import FavoritList from '../FavoritList/FavoritList';

function Shop(props) {
  // принимает данные с сервера
  const [goods, setGoods] = useState([]);
  // принимает данные по кол-ву в корзине
  const [order, setOrder] = useState([]);
  // принимает данные по кол-ву в избранном
  const [favorites, setFavorites] = useState([]);
  // принимает данные по корзине
  const [isBasketShow, setIsBasketShow] = useState(false);
  // принимает данные по избранному
  const [isFavoritShow, setisFavoritShow] = useState(false);

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

  // удаление из корзины
  const removFromBasketShow = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  // добавление в избранное
  const addToFavourites = (item) => {
    const itemIndex = favorites.findIndex((el) => el.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        favorites: 1,
      };
      setFavorites([...favorites, newItem]);
    } else {
      const newOrder = favorites.map((favoritesItem, index) => {
        if (index === itemIndex) {
          return {
            ...favoritesItem,
            favorites: favoritesItem.favorites + 1,
          };
        } else {
          return favoritesItem;
        }
      });
      setFavorites(newOrder);
    }
  };

  // удаление из избранного
  const removeFromFavorit = (itemId) => {
    const newFavorit = favorites.filter((el) => el.id !== itemId);
    setFavorites(newFavorit);
  };

  // управление состоянием показа корзины
  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };
  // управление состоянием показа избранного
  const handleFavoritShow = () => {
    setisFavoritShow(!isFavoritShow);
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
        favorites={favorites.length}
        handleBasketShow={handleBasketShow}
        handleFavoritShow={handleFavoritShow}
      />
      <GoodList
        goods={goods}
        addToBasket={addToBasket}
        addToFavourites={addToFavourites}
      />
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removFromBasketShow={removFromBasketShow}
        />
      )}

      {isFavoritShow && (
        <FavoritList
          favorites={favorites}
          handleFavoritShow={handleFavoritShow}
          removeFromFavorit={removeFromFavorit}
        />
      )}
    </div>
  );
}

export default Shop;
