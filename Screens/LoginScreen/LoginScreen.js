import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { stylesLog } from "./LoginScreen.styled";
import { styles } from "../../style";

const initialState = {
  email: "",
  password: "",
};

function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [state, setstate] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const onLogin = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        source={require("../../images/photo-bg.jpg")}
        imageStyle={stylesLog.bgImage}
      >
        <View style={stylesLog.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...stylesLog.fromElement,
                paddingBottom: isShowKeyboard ? 32 : 111,
              }}
            >
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
                    onChangeText={(value) =>
                      setstate((prevState) => ({ ...prevState, email: value }))
                    }
                    value={state.email}
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
                        marginBottom: 0,
                      },
                    ]}
                    onChangeText={(value) =>
                      setstate((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    value={state.password}
                  />
                </View>
              </View>
              <Text style={stylesLog.showPassLink}>Показати</Text>
              <TouchableOpacity>
                {!isShowKeyboard && (
                  <Text style={stylesLog.enterBtn} onPress={onLogin}>
                    Увійти
                  </Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("RegistrationScreen")}
              >
                <Text style={stylesLog.link}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
