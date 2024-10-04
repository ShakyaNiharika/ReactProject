import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Cart from "../../components/cart/Cart";
import CartTitle from "../../components/carttitle/CartTitle";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <CartTitle />
      <Cart />
    </div>
  );
};

export default Home;
