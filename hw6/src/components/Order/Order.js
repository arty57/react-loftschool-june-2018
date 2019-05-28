import React from 'react';
import './Order.css';

const Order = props => {
  const { name, price, createdAt } = props;
  console.log(name, price, createdAt);
  return (
    <div className="order">
      <div className="order__upper">
        <p className="p-order">{name.toString()}</p>
        <p className="p-order">{price.toString()}</p>
      </div>
      <div className="order__lower">
        <p className="p-order">{createdAt.toString()}</p>
      </div>
    </div>
  );
};

export default Order;
