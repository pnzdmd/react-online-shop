import { useContext } from 'react';
import { ShopContext } from '../../context';
import GoodsItem from '../GoodsItem/GoodsItem';

import './GoodList.css';

function GoodList() {
  const { goods = [] } = useContext(ShopContext);

  const elements = goods.map((good) => {
    return (
      <li key={good.id} className='goodsitem'>
        <GoodsItem goods={good} />
      </li>
    );
  });
  return <ul className='goodslist'>{elements}</ul>;
}

export default GoodList;
