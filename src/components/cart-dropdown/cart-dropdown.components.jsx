import React from "react";
import CustomButtom from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
      </div>
    </div>
  );
};

export default CartDropdown;
