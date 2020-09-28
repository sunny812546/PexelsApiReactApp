import React, { useEffect, useState } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
const BuyPage = ({ addCart, cartItems }) => {
  const [data, setData] = useState([]);
  const endPoint = "http://localhost:8000/api";

  const fetchData = async () => {
    try {
      const { data } = await Axios.get(endPoint);

      const photos = data.data.photos;
      const allProducts = photos.map((photo) => ({
        smallImage: photo.src.medium,
        tinyImage: photo.src.tiny,
        productName: random.word(),
        productPrice: commerce.price(),
        id: random.uuid(),
      }));
      setData(allProducts);
    } catch (err) {
      console.log(err);
    }
  };

  const buyNow = (item) => {
    console.log(item, cartItems);
    const isCarted = cartItems.findIndex((i) => i.id === item.id);
    console.log(isCarted);
    if (isCarted === -1) {
      addCart([...cartItems, item]);
    } else {
      alert("Already product in the cart");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>BUY PAGE</h1>
      <hr></hr>
      {data.map((item) => (
        <div key={item.productName}>
          Name:{item.productName}
          Name:{item.productPrice}
          <button
            onClick={() => {
              buyNow(item);
            }}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default BuyPage;
