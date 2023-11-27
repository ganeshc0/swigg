// cartActions.js
export const updateCartItemQuantity = (itemId, quantityChange) => {
    return {
      type: 'UPDATE_ITEM_QUANTITY',
      payload: {
        itemId,
        quantityChange,
      },
    };
  };
  