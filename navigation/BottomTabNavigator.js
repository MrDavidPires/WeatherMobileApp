import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
//import RecordScreen from "../screens/RecordScreen";
import ListScreen from "../screens/ListScreen";
import MainScreen from "../screens/MainScreen";
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: "Weather App",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="weather-cloudy" />
          ),
        }}
      />
      <BottomTab.Screen
        name="RecordEvents"
        component={ListScreen}
        options={{
          title: "Weather Info",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="folder-information-outline" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
