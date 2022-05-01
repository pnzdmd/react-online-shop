import React from 'react';
import './GoodsItem.css';

function GoodsItem({
  goods,
  addToBasket = Function.prototype,
  addToFavourites = Function.prototype,
}) {
  const { id, title, price, image, description } = goods;

  return (
    <div className='product-item'>
      <img src={image} />
      <div className='product-list'>
        <h3 className='product-text'>{title}</h3>
        <span className='price'>₽ {price}</span>
        <button
          href=''
          className='button btn'
          onClick={() =>
            addToBasket({
              id,
              title,
              price,
            })
          }
        >
          В корзину
        </button>
        <button
          href=''
          className='button btn'
          onClick={() =>
            addToFavourites({
              id,
            })
          }
        >
          В избранное
        </button>
      </div>
    </div>
  );
}

export default GoodsItem;
