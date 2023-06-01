// Додати розмітку форми в компонент
// Додати стилі до компонента
import { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { stylesLog } from "./LoginScreen.styled";

function LoginScreen() {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <View style={stylesLog.container}>
      {/* <ImageBackground
        source={require("../../images/photo-bg.jpg")}
        resizeMode="cover"
        imageStyle={stylesLog.image}
      > */}
      <View style={stylesLog.scrollView}>
        <Text style={stylesLog.text}>Увійти</Text>
        <View style={stylesLog.inputsList}>
          <View>
            <TextInput
              cursorColor={"#FF6C00"}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              placeholder={"Адреса електронної пошти"}
              placeholderTextColor={"#BDBDBD"}
              style={[
                stylesLog.input,
                {
                  borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
                  backgroundColor: isEmailFocused ? "#fff" : "#F6F6F6",
                },
              ]}
            />
          </View>
          <View>
            <TextInput
              cursorColor={"#FF6C00"}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              placeholder={"Пароль"}
              placeholderTextColor={"#BDBDBD"}
              style={[
                stylesLog.input,
                {
                  borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
                  backgroundColor: isPasswordFocused ? "#fff" : "#F6F6F6",
                },
              ]}
            />
          </View>
        </View>
        <Text style={stylesLog.showPassLink}>Показати</Text>
        <TouchableOpacity>
          <Text style={stylesLog.button}>Увійти</Text>
        </TouchableOpacity>
        <Text style={stylesLog.link}>Немає акаунту? Зареєструватися</Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}

export default LoginScreen;
