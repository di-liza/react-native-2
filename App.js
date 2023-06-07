import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  RegistrationScreen,
  LoginScreen,
  Home,
  ProfileScreen,
  PostsScreen,
  CreatePostsScreen,
} from "./Screens";
// import Home from "./Screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="Home" component={Home} />
        {/* <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          // options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          // options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
          // options={{ headerShown: false }}
        /> */}
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
