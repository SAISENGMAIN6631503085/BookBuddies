import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import IdentityVerificationScreen from "../screens/IdentityVerificationScreen";



const Stack = createStackNavigator();


export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="IdentityVerificationScreen"
component={IdentityVerificationScreen} />


    </Stack.Navigator>
  );
}