import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createNativeStackNavigator,
  Stack,
} from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./Home.styled";
import PostsScreen from "../PostsScreen/PostsScreen";
import MapScreen from "../MapScreen/MapScreen";
import CommentsScreen from "../CommentsScreen/CommentsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const NestedScreen = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const CustomBackIcon = ({ onPress }) => (
  <Ionicons name="arrow-back" size={24} onPress={onPress} />
);

function Home({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Публікації",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 17,
        lineHeight: 22,
        color: "#212121",
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Image
            source={require("../../icons/log-out.png")}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  //   return (
  //     <NestedScreen.Navigator
  //       screenOptions={{
  //         headerTitle: "Публікації",
  //         tabBarStyle: {
  //           height: 83,
  //           paddingHorizontal: 81,
  //         },
  //         headerTitleAlign: "center",
  //         headerTitleStyle: {
  //           fontSize: 17,
  //           lineHeight: 22,
  //           color: "#212121",
  //         },
  //       }}
  //     >
  //       <NestedScreen.Screen
  //         options={{
  //           headerTitle: "Публікації",
  //           headerRight: () => (
  //             <Ionicons
  //               name="log-in-outline"
  //               size={30}
  //               color="#BDBDBD"
  //               style={{ marginRight: 10 }}
  //             />
  //           ),
  //         }}
  //         name="PostsScreen"
  //         component={PostsScreen}
  //       />
  //       <NestedScreen.Screen
  //         options={{
  //           headerTitle: "Коментарі",
  //         }}
  //         name="Comments"
  //         component={CommentsScreen}
  //       />
  //       <NestedScreen.Screen
  //         options={{
  //           headerTitle: "Мапа",
  //         }}
  //         name="MapScreen"
  //         component={MapScreen}
  //       />
  //     </NestedScreen.Navigator>
  //   );
  return (
    <Tabs.Navigator
      //   screenOptions={({ route }) => ({
      //     tabBarIcon: ({ focused, color, size }) => {
      //       let iconComponent;

      //       if (route.name === "PostsScreen") {
      //         iconComponent = <CustomIcon />;
      //       } else if (route.name === "Comments") {
      //         iconComponent = <createPostIcon />;
      //       }
      //       return <iconComponent />;
      //     },
      //   })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../icons/grid.jpg")}
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../icons/new.png")}
              style={{ width: 70, height: 40 }}
            />
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}

export default Home;

{
  /* <Image source={require("../../icons/log-out.png")} />; */
}
