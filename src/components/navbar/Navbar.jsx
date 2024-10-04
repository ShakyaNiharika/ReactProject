import React from "react";
import "../../styles/navbar/Navbar.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  //Navigate to the Product Page
  const productHandle = () => {
    navigate("/product");
  };

  //Navigate to the collection Page
  const collectionHandle = () => {
    navigate("/collection");
  };
  return (
    <div className="Nav_menu">
      <ul>
        <Icon className="graphic" icon="icon-park-outline:graphic-stitching" />
        <li className="Shop">Shop By Department</li>
        <li>Home</li>
        <li onClick={productHandle}>Product</li>
        <li onClick={collectionHandle}>Collection</li>
        <li>Blog</li>
        <li>Pages</li>
      </ul>
    </div>
  );
};

export default Navbar;
