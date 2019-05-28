import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import { moveOrderToCustomer } from '../../actions/farmActions';
const mapStateToProps = state => ({
  market: state.market,
  farm: state.farm,
  budget: state.budget
});

const mapDispatchToProps = {
  createOrder: createOrder,
  moveOrderToFarm: moveOrderToFarm,
  moveOrderToCustomer: moveOrderToCustomer
};
export class App extends PureComponent {
  render() {
    const {
      market,
      farm,
      budget,
      createOrder,
      moveOrderToFarm,
      moveOrderToCustomer
    } = this.props;
    return (
      <div className="app">
        <Market
          market={market}
          createOrder={createOrder}
          moveOrderToFarm={moveOrderToFarm}
        />
        <Farm farm={farm} moveOrderToCustomer={moveOrderToCustomer} />
        <Budget budget={budget} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
