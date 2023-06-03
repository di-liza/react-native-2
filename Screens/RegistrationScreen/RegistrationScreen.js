import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { stylesReg } from "./RegistrationScreen.styled";

const initialState = {
  login: "",
  email: "",
  password: "",
};

function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const onRegister = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={stylesReg.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...stylesReg.scrollView,
              paddingBottom: isShowKeyboard ? 45 : 323,
            }}
          >
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
                  textAlign="left"
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
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  value={state.login}
                />
              </View>
              <View>
                <TextInput
                  textAlign="left"
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
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  value={state.email}
                />
              </View>
              <View>
                <TextInput
                  textAlign="left"
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
                      positin: "relative",
                    },
                  ]}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  value={state.password}
                />
                <Text style={stylesReg.showPassLink}>Показати</Text>
              </View>
            </View>

            <TouchableOpacity>
              {!isShowKeyboard && (
                <Text style={stylesReg.button} onPress={onRegister}>
                  Зареєстуватися
                </Text>
              )}
            </TouchableOpacity>
            <Text style={stylesReg.link}>Вже є акаунт? Увійти</Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RegistrationScreen;
