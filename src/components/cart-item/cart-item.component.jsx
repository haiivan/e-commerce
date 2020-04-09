import React from "react";
import {
  CartItemContainer,
  CartItemImage,
  IteDetailsContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <IteDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </IteDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
