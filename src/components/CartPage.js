import React from "react";
import Card from "./Card";

const CartPage = ({ cartItems, addCart }) => {
  let amount = 0;

  cartItems.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });
  const removeItem = (id) => {
    const resultedItems = cartItems.filter((i) => i.id !== id);
    addCart(resultedItems);
  };
  const payNow = () => {
    addCart([]);
    alert("Thank you purchasing...");
  };
  return (
    <div>
      <h1>YOUR CART</h1>
      {cartItems.map((item) => (
        <Card
          name={item.productName}
          price={item.productPrice}
          imgSrc={item.tinyImage}
          id={item.id}
          remove={removeItem}
        />
      ))}
      {cartItems.length >= 1 ? (
        <div>
          <h1>Grand Total</h1>
          Items:{cartItems.length}
          TotalAmount:{amount}
          <button onClick={payNow}>Pay Now</button>
        </div>
      ) : (
        <div>Add Products into Cart</div>
      )}
    </div>
  );
};

export default CartPage;
