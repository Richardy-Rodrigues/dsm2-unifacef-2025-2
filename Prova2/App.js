import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import TaskUserScreen from "./screens/TaskUserScreen";
import TaskGroupScreen from "./screens/TaskGroupScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Meus compromissos"
          component={TaskUserScreen}
        />
        <Stack.Screen
          name="Compromissos do grupo"
          component={TaskGroupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
