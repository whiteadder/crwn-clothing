import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectedCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectedCartItemsCount = createSelector(
  [selectedCartItems],
  cartItems =>
    cartItems.reduce(
      (accumaletedQuantity, cartItem) =>
        accumaletedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectedCartItems], cartItems =>
  cartItems.reduce(
    (accumaletedQuantity, cartItem) =>
      accumaletedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
