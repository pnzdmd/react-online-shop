import { createContext, useReducer } from 'react';
import reducer from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  order: [],
  favorites: [],
  isBasketShow: false,
  isFavoritShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.removFromBasketShow = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET_SHOW', payload: { id: itemId } });
  };

  value.removeFromFavorit = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_FAVORIT', payload: { id: itemId } });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.addToFavourites = (item) => {
    dispatch({ type: 'ADD_TO_FAVOURITES', payload: item });
  };

  value.incQuntity = (itemId) => {
    dispatch({ type: 'INC_QUNTITY', payload: { id: itemId } });
  };
  value.decQuntity = (itemId) => {
    dispatch({ type: 'DEC_QUNTITY', payload: { id: itemId } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'TOGGLE_BASKET' });
  };

  value.handleFavoritShow = () => {
    dispatch({ type: 'TOGGLE_FAVORIT' });
  };

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
