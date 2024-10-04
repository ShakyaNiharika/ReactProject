import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/cart/Cart.css";
import cartData from "../../data/cartdata/CartData";
import Button from "../button/Button";

const Cart = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    console.log({ data });

    try {
      const response = await axios.get(
        // end point goes here
        "/card"
      );
      console.log(response, "responseee");
      setData(cartData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData(); // Call the function when the component mounts
  }, []);

  return (
    <div>
      <div className="main-dealCart">
        {data?.map((item) => {
          return (
            <div className="dealcart" key={item?.id}>
              <div className="left-part">
                <img
                  className="left-image"
                  src={item?.image}
                  alt={item?.title}
                />
              </div>
              <div className="right-part">
                <h1>{item?.title}</h1>
                <p>{item?.price}</p>
                <hr />
                <p>Quantity: {item?.Quantity}</p>
                {item?.Quantity > 0 ? (
                  <Button
                    className="add-to-cart"
                    title="Add to Cart"
                    // onClick={() => handleAddToCart(item)}
                  />
                ) : (
                  <p>Sold Out</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
