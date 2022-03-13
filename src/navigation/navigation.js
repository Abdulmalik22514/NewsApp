import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../screens/News';
import NewsContent from '../screens/NewsContent';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="News" component={HomePage} />
        <Stack.Screen name="NewsContent" component={NewsContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
