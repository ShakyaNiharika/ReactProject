import React from "react";
import "../../styles/carttitle/CartTitle.css";
import { title, offer } from "../../constant/carttitle/CartTitle";
const CartTitle = () => {
  return (
    <div className="deal-main">
      <div className="sub-deal-main">
        <div class="daal-left-part">
          <h2>{title}</h2>
        </div>
        <div class="daal-right-part">
          <h2>{offer}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartTitle;
