import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    boxSizing: "border - box",
    fontFamily: "Roboto",
    width: "100%",
    ...Platform.select({
      ios: {
        backgroundColor: "#000000",
      },
      android: {
        backgroundColor: "##fff",
      },
    }),
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
