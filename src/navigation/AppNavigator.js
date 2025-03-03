import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/ReportScreen";
import ReportDetailsScreen from "../screens/ReportDetailsScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ReportScreen" component={ReportScreen} />
      <Stack.Screen name="ReportDetails" component={ReportDetailsScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      
    </Stack.Navigator>
  );
}
