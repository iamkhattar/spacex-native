import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import LaunchesLanding from "../../components/Launches/LaunchesLanding";
import Launch from "../../components/Launches/Launch";

const LaunchesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Launches" component={LaunchesLanding} />
      <Stack.Screen name="Launch" component={Launch} />
    </Stack.Navigator>
  );
};

export default LaunchesStack;
