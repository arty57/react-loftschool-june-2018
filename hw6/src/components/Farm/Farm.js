import React, { PureComponent } from 'react';
import './Farm.css';
import Order from '../Order';

export class Farm extends PureComponent {
  render() {
    const { farm, moveOrderToCustomer } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          onClick={() => {
            const [last] = farm.orders.slice(-1);
            moveOrderToCustomer(last);
          }}
        >
          Отправить урожай клиенту
        </button>
        <div>
          {farm.orders.map(item => {
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

export default Farm;
