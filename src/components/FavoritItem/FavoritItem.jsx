import { useContext } from 'react';
import { ShopContext } from '../../context';
import './FavoritItem.css';

function FavoritItem(props) {
  const { id, title } = props;

  const { removeFromFavorit } = useContext(ShopContext);

  return (
    <li className='list-group-item'>
      <span>{title}</span>
      <button
        type='button'
        className='close'
        aria-label='Close'
        onClick={() => removeFromFavorit(id)}
      >
        <span aria-hidden='true'>Удалить</span>
      </button>
    </li>
  );
}

export default FavoritItem;
