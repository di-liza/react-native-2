import { StyleSheet } from "react-native";

export const stylesLog = StyleSheet.create({
  container: {
    flex: 0,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  fromElement: {
    position: "relative",
    zIndex: 100,
    width: "100%",
    height: 489,
    bottom: 108,

    marginTop: 395,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 111,

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
    top: "-15%",
    left: "35%",
    zIndex: 2,
  },
  addIcon: {
    position: "absolute",
    top: 21,
    right: 122,
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
  enterBtn: {
    alignSelf: "center",
    width: 343,

    paddingTop: 16,
    paddingBottom: 16,

    marginTop: 43,
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
    top: 182,
    right: 32,
  },
});
