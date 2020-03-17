import {NavigationActions} from 'react-navigation';
import {initialRouteName, Navigator} from '../../../navigation/navigator';

const initialState = Navigator.router.getStateForAction(
  NavigationActions.navigate({routeName: initialRouteName}),
);

export const navigationReducer = (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
};
