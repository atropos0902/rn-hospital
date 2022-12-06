import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../views/List';
import Details from '../views/Details';
import { colors } from '../lib/styles';

const Stack = createStackNavigator();

const Navigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        cardStyle: { backgroundColor: colors.bg.primary },
        header: () => null,
      }}>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Navigator;
