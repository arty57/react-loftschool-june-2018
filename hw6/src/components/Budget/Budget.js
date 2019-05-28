import React from 'react';
import './Budget.css';

export const Budget = props => {
  const { profit, farmExpanse, deliveryExpanse, marketExpanse } = props.budget;
  return (
    <div className="budget">
      <h2>Бюджет</h2>
      <p>
        Всего получено денег:
        <span className="t-profit">{profit.toString()}</span>
      </p>
      <p>
        Расходы продавцов:
        <span className="t-sellers">{marketExpanse.toString()}</span>
      </p>
      <p>
        Расходы на ферме:{' '}
        <span className="t-farm">{farmExpanse.toString()}</span>
      </p>
      <p>
        Расходы на доставку:
        <span className="t-delivery">{deliveryExpanse.toString()}</span>
      </p>
      <p>
        Итого:{' '}
        <span className="t-total">
          {profit - marketExpanse - farmExpanse - deliveryExpanse}
        </span>
      </p>
    </div>
  );
};

export default Budget;
