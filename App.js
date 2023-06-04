import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { View, ImageBackground, Text } from "react-native";
import { styles } from "./style";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen, LoginScreen } from "./Screens";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      {/* <View style={[styles.container, { fontFamily: "Roboto-Regular" }]}> */}
      {/* <ImageBackground
          source={require("./images/photo-bg.jpg")}
          imageStyle={styles.image}
        > */}
      {/* <Text>HELLO</Text> */}
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Start screen" }}
        />
      </MainStack.Navigator>
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      {/* </ImageBackground> */}
      <StatusBar style="auto" />
      {/* </View> */}
    </NavigationContainer>
  );
}
