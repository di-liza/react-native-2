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
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

function Home({ navigation, route }) {
  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    let headerTitle = "";

    if (routeName === "PostsScreen") {
      headerTitle = "Публікації";
    } else if (routeName === "CreatePostsScreen") {
      headerTitle = "Створити публікацію";
    }

    navigation.setOptions({
      headerTitle,
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 17,
        lineHeight: 22,
        color: "#212121",
      },
      headerRight: () =>
        routeName === "PostsScreen" ? (
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Image
              source={require("../../icons/log-out.png")}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
          </TouchableOpacity>
        ) : null,
    });
  }, [navigation, route]);
  return (
    <Tabs.Navigator
      style={{ display: "block", paddingTop: 9, paddingBottom: 22 }}
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
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../icons/user.png")}
              style={{ width: 24, height: 24 }}
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
