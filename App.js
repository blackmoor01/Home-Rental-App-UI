import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from "./Source/Screens/Menu";
import HomeScreen from "./Source/Screens/Home";
import DetailScreen from "./Source/Screens/Detail";



const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name={"MenuScreen"} component={Menu} />
            <Stack.Screen options={{headerShown:false}} name={"HomeScreen"} component={HomeScreen} />
            <Stack.Screen options={{headerShown:false}} name={"DetailScreen"} component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

