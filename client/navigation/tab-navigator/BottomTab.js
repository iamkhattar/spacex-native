import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import TabIcon from "./TabIcon";

import LaunchesStack from "../stack-navigator/LaunchesStack";
import RocketsStack from "../stack-navigator/RocketsStack";

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#1E1E24",
        inactiveBackgroundColor: "#1E1E24",
        activeTintColor: "#21A179",
        inactiveTintColor: "white",
        safeAreaInset: { bottom: "never", top: "always" },
        style: {
          borderTopWidth: 0,
          marginTop: 7,
        },
      }}
    >
      <Tab.Screen
        name="Launches"
        component={LaunchesStack}
        options={{
          title: "Launches",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="md-airplane" />
          ),
        }}
      />
      <Tab.Screen
        name="Rockets"
        component={RocketsStack}
        options={{
          title: "Rockets",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="md-rocket" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
