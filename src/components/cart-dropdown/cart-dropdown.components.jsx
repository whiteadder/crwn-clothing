import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButtom from "../custom-button/custom-button.component";
import { selectedCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectedCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
