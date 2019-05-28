import { searchRequest, searchSuccess, searchFailure } from '../actions/search';
import { search } from '../api';
export const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(response => {
        store.dispatch(searchSuccess(response));
      })
      .catch(error => store.dispatch(searchFailure(error)));
  }
  return next(action);
};

export default searchMiddleware;
