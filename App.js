import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./style";
import { RegistrationScreen, LoginScreen } from "./Screens";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.container, { fontFamily: "Roboto-Regular" }]}>
      <ImageBackground
        source={require("./images/photo-bg.jpg")}
        imageStyle={styles.image}
      >
        {/* <RegistrationScreen /> */}
        <LoginScreen />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
