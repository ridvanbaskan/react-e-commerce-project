import React from "react";
import "./cartItem.scss";

export default function CartItem({
  item: { imageUrl, name, price, quantity }
}) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span>{name}</span>
        <span>{`${quantity} x ${"$"}${price}`}</span>
      </div>
    </div>
  );
}
