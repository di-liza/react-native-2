import "react-native-gesture-handler";
import React, { useEffect } from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createNativeStackNavigator,
  Stack,
} from "@react-navigation/native-stack";
import { TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  PostsScreen,
  MapScreen,
  CommentsScreen,
  ProfileScreen,
  CreatePostsScreen,
} from "../../Screens";

import { styles } from "./Home.styled";
import { Ionicons } from "@expo/vector-icons";
// import { SvgUri } from "react-native-svg";

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
            <Ionicons
              name="log-out-outline"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("PostsScreen")}
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>
        ) : null,
    });
  }, [navigation, route]);
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TouchableOpacity>
              <Ionicons
                name="grid-outline"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.navigate("PostsScreen")}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity>
              <Ionicons
                name="add-outline"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.navigate("PostsScreen")}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
        // options={{
        //   tabBarIcon: () => (
        //     <Image
        //       source={require("../../icons/new.png")}
        //       style={{ width: 70, height: 40 }}
        //     />
        //   ),
        //   tabBarLabel: "",
        //   headerShown: false,
        // }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity>
              <Ionicons
                name="person-outline"
                color="#BDBDBD"
                onPress={() => navigation.navigate("PostsScreen")}
                size={24}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
        // options={{
        //   tabBarIcon: () => (
        //     <Image
        //       source={require("../../icons/user.png")}
        //       style={{ width: 24, height: 24 }}
        //     />
        //   ),
        //   tabBarLabel: "",
        //   headerShown: false,
        // }}
      />
    </Tabs.Navigator>
  );
}

export default Home;
