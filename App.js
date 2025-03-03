import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './frontend/src/screens/ProfileScreen';
import ExchangingHistoryScreen from './frontend/src/screens/ExchangingHistoryScreen';
import ContactUsScreen from './frontend/src/screens/ContactUsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ExchangingHistory" component={ExchangingHistoryScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;