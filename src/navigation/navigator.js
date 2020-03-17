import {View, TouchableWithoutFeedback} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const screen = (
  <View>
    <TouchableWithoutFeedback />
  </View>
);

const Navigator = createStackNavigator({
  Home: {
    screen: screen,
  },
});
export const RootNavigator = createAppContainer(Navigator);
