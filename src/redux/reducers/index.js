import {combineReducers} from 'redux';
import {navigationReducer} from './nav';

const initialState = {
  visibilityFilter: 'SINGLE', //ALL
};

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

function auth(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      // handler
      // return setAlertMessage(state, action)
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      });
    //
    default:
      return state;
  }
}

export const reducers = combineReducers({
  nav: navigationReducer,
  auth: auth,
});

export const rootReducers = (state, action) => {
  return reducers(state, action);
};
