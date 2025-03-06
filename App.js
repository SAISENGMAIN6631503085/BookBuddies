import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookExchange from './BookBuddies/src/screens/BookExchange'; // Adjust the path to your component

// Create a stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookExchange">
        <Stack.Screen
          name="BookExchange"
          component={BookExchange}
          options={{ headerShown: false }} // Hide the default header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;