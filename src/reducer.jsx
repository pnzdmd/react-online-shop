function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
      };

    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex((el) => el.id === payload.id);

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.title,
      };
    }

    case 'ADD_TO_FAVOURITES': {
      const itemIndex = state.favorites.findIndex((el) => el.id === payload.id);

      let newFavorites = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          favorites: 1,
        };
        newFavorites = [...state.favorites, newItem];
      } else {
        newFavorites = state.favorites.map((favoritesItem, index) => {
          if (index === itemIndex) {
            return {
              ...favoritesItem,
              favorites: favoritesItem.favorites + 1,
            };
          } else {
            return favoritesItem;
          }
        });
      }
      return {
        ...state,
        favorites: newFavorites,
      };
    }

    case 'REMOVE_FROM_BASKET_SHOW':
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };

    case 'REMOVE_FROM_FAVORIT':
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.id !== payload.id),
      };

    case 'INC_QUNTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };
    case 'DEC_QUNTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        }),
      };

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };

    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case 'TOGGLE_FAVORIT':
      return {
        ...state,
        isFavoritShow: !state.isFavoritShow,
      };
    default:
      return state;
  }
}

export default reducer;
