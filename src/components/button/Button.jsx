import React from "react";

const Button = (props) => {
  const { className, title, onClick } = props;

  return (
    <div>
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
