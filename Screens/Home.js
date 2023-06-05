import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { TouchableOpacity, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PostsScreen, ProfileScreen, CreatePostsScreen } from "../Screens";
import { Ionicons } from "@expo/vector-icons";
import { HeaderBackButton, HeaderTitle } from "@react-navigation/stack";

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

      // headerLeft: routeName === "PostsScreen" ? null : navigation.goBack(),
      headerRight: () =>
        routeName === "PostsScreen" ? (
          <TouchableOpacity
            onPress={() => {
              console.log("press");
              navigation.navigate("LoginScreen");
            }}
          >
            <Ionicons
              name="log-out-outline"
              size={30}
              color="#BDBDBD"
              onPress={() => navigation.goBack()}
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>
        ) : null,
    });
  }, [navigation, route]);
  return (
    <Tabs.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        style: {
          borderRadius: 15,
          height: 90,
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <Ionicons
                name="grid-outline"
                size={24}
                color={focused ? "#FFFFFF" : "#BDBDBD"}
                onPress={() => navigation.navigate("PostsScreen")}
                style={{
                  backgroundColor: focused ? "#FF6C00" : "transparent",
                  borderRadius: focused ? 20 : 0,
                  width: focused ? 70 : 24,
                  height: focused ? 40 : 24,
                  paddingTop: focused ? 7 : 0,
                  textAlign: "center",
                }}
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
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <Ionicons
                name="add-outline"
                size={24}
                color={focused ? "#FFFFFF" : "#BDBDBD"}
                onPress={() => navigation.navigate("CreatePostsScreen")}
                style={{
                  backgroundColor: focused ? "#FF6C00" : "transparent",
                  borderRadius: focused ? 20 : 0,
                  width: focused ? 70 : 24,
                  height: focused ? 40 : 24,
                  paddingTop: focused ? 7 : 0,
                  textAlign: "center",
                }}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <Ionicons
                name="person-outline"
                color={focused ? "#FFFFFF" : "#BDBDBD"}
                onPress={() => navigation.navigate("ProfileScreen")}
                size={24}
                style={{
                  backgroundColor: focused ? "#FF6C00" : "transparent",
                  borderRadius: focused ? 20 : 0,
                  width: focused ? 70 : 24,
                  height: focused ? 40 : 24,
                  paddingTop: focused ? 7 : 0,
                  textAlign: "center",
                }}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}

export default Home;
