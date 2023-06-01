import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { stylesReg } from "./RegistrationScreen.styled";

function RegistrationScreen() {
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <View style={stylesReg.container}>
      <View style={stylesReg.scrollView}>
        <Text style={stylesReg.text}>Реєстрація</Text>
        <View style={stylesReg.imagePlaceholder}>
          <Image
            style={stylesReg.addIcon}
            source={require("../../images/add.png")}
          />
        </View>
        <View style={stylesReg.inputsList}>
          <View>
            <TextInput
              cursorColor={"#FF6C00"}
              onFocus={() => setIsLoginFocused(true)}
              onBlur={() => setIsLoginFocused(false)}
              placeholder={"Логін"}
              placeholderTextColor={"#BDBDBD"}
              style={[
                stylesReg.input,
                {
                  borderColor: isLoginFocused ? "#FF6C00" : "#E8E8E8",
                  backgroundColor: isLoginFocused ? "#fff" : "#F6F6F6",
                },
              ]}
            />
          </View>
          <View>
            <TextInput
              cursorColor={"#FF6C00"}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              placeholder={"Адреса електронної пошти"}
              placeholderTextColor={"#BDBDBD"}
              style={[
                stylesReg.input,
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
                stylesReg.input,
                {
                  borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
                  backgroundColor: isPasswordFocused ? "#fff" : "#F6F6F6",
                },
              ]}
            />
          </View>
        </View>
        <Text style={stylesReg.showPassLink}>Показати</Text>

        <TouchableOpacity>
          <Text style={stylesReg.button}>Зареєстуватися</Text>
        </TouchableOpacity>
        <Text style={stylesReg.link}>Вже є акаунт? Увійти</Text>
      </View>
    </View>
  );
}

export default RegistrationScreen;
