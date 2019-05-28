import React, { PureComponent } from 'react';
import Order from '../Order';
import './Market.css';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends PureComponent {
  render() {
    const { market, createOrder, moveOrderToFarm } = this.props;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={() => {
            createOrder(getNewOrder());
          }}
        >
          Создать заказ
        </button>
        <button
          onClick={() => {
            const [last] = market.orders.slice(-1);
            moveOrderToFarm(last);
          }}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {market.orders.map((item, index) => {
            return (
              <Order
                name={item.name}
                price={item.price}
                createdAt={item.createdAt}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Market;
