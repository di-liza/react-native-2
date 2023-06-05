import React from "react";

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
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

function RegistrationScreen({ navigation }) {
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
    setState(initialState);
    navigation.navigate("Home");
    console.log("register");
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        source={require("../images/photo-bg.jpg")}
        imageStyle={styles.image}
      >
        <View style={styles.container}>
          <KeyboardAvoidingView
            enabled
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.scrollView,
                // height: isShowKeyboard ? 374 : 549,
              }}
            >
              <Text style={styles.text}>Реєстрація</Text>
              <View style={styles.imagePlaceholder}>
                <Image
                  style={styles.addIcon}
                  source={require("../images/add.png")}
                />
              </View>
              <ScrollView>
                <View style={styles.inputsList}>
                  <View>
                    <TextInput
                      textAlign="left"
                      cursorColor={"#FF6C00"}
                      onFocus={() => setIsLoginFocused(true)}
                      onBlur={() => setIsLoginFocused(false)}
                      placeholder={"Логін"}
                      placeholderTextColor={"#BDBDBD"}
                      style={[
                        styles.input,
                        {
                          borderColor: isLoginFocused ? "#FF6C00" : "#E8E8E8",
                          backgroundColor: isLoginFocused ? "#fff" : "#F6F6F6",
                        },
                      ]}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          login: value,
                        }))
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
                        styles.input,
                        {
                          borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
                          backgroundColor: isEmailFocused ? "#fff" : "#F6F6F6",
                        },
                      ]}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          email: value,
                        }))
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
                        styles.input,
                        {
                          borderColor: isPasswordFocused
                            ? "#FF6C00"
                            : "#E8E8E8",
                          backgroundColor: isPasswordFocused
                            ? "#fff"
                            : "#F6F6F6",
                          position: "relative",
                        },
                      ]}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                      value={state.password}
                    />
                    <Text style={styles.showPassLink}>Показати</Text>
                  </View>
                </View>
              </ScrollView>

              <TouchableOpacity>
                {!isShowKeyboard && (
                  <Text style={styles.button} onPress={onRegister}>
                    Зареєстуватися
                  </Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={styles.link}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

export default RegistrationScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  scrollView: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    marginTop: 263,

    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingBottom: 78,

    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    textAlign: "center",
  },
  imagePlaceholder: {
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    borderRadius: 16,
    top: -60,
    left: "38%",
    zIndex: 2,
  },
  addIcon: {
    position: "absolute",
    top: 81,
    left: 107,
    zIndex: 3,
  },
  text: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
    lineHeight: 35,
  },
  button: {
    alignSelf: "center",
    width: 343,

    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 32,
    marginBottom: 16,

    borderRadius: 100,
    backgroundColor: "#FF6C00",
    borderRadius: 100,

    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
  },
  input: {
    height: 50,
    width: "100%",

    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    marginBottom: 16,

    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,

    fontSize: 16,
    lineHeight: 19,
    // position: "relative",
  },
  link: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  showPassLink: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    position: "absolute",
    top: 16,
    right: 16,
  },
});
