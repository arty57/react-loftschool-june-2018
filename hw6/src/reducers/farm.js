import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        orders: state.orders.filter(value => {
          return value.id !== action.payload.id;
        })
      };
    case MOVE_ORDER_TO_FARM:
      return { orders: [...state.orders, action.payload] };
    default:
      return state;
  }
};
