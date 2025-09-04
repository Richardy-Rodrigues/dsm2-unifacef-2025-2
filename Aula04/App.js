import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PerfilScreen from "./screens/PerfilScreen";

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
          name="Detalhes"
          component={DetailsScreen}
        />
        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

