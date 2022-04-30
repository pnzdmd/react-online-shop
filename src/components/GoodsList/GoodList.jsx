import React from 'react';
import GoodsItem from '../GoodsItem/GoodsItem';
import './GoodList.css';

function GoodList({
  goods,
  addToBasket = Function.prototype,
  addToFavourites = Function.prototype,
}) {
  const elements = goods.map((good) => {
    //const { id, ...goods } = good;
    return (
      <li key={good.id} className='goodsitem'>
        <GoodsItem
          goods={good}
          addToBasket={addToBasket}
          addToFavourites={addToFavourites}
        />
      </li>
    );
  });
  return <ul className='goodslist'>{elements}</ul>;
}

export default GoodList;
