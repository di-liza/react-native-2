import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function PostsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* <View style={styles.headerTitle}>
          <Text>Публікації</Text>
        </View> */}
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Image
            style={styles.img}
            source={require("../images/Rectangle.jpg")}
          ></Image>
        </TouchableOpacity>
        <View style={styles.nameEmailWrapper}>
          <Text style={styles.name}>Ім'я</Text>
          <Text style={styles.email}>Email</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    textAlign: "center",
  },
  wrapper: {
    flexDirection: "row",
  },
  img: {
    marginHorizontal: 16,
    width: 60,
    height: 60,
    borderRadius: 16,
    marginTop: 32,
  },
  headerTitle: {
    textAlign: "center",
    // marginLeft: 30,
  },
  name: {
    // fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  email: {
    // fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  nameEmailWrapper: {
    marginTop: 48,
    marginLeft: 8,
  },
});
