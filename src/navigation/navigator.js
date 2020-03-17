import {View, TouchableWithoutFeedback} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export const initialRouteName = 'authenticationStack';

const screen = (
  <View>
    <TouchableWithoutFeedback />
  </View>
);

export const Navigator = createStackNavigator(
  {
    Home: {
      screen: screen,
    },
  },
  {initialRouteName},
);
export const RootNavigator = createAppContainer(Navigator);
