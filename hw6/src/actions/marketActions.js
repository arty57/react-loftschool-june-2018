import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = newOrder => ({
  type: CREATE_ORDER,
  payload: newOrder
});

export const moveOrderToFarm = order => ({
  type: MOVE_ORDER_TO_FARM,
  payload: order
});
