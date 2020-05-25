import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import RocketsLanding from "../../components/Rockets/RocketsLanding";
import Rocket from "../../components/Rockets/Rocket";

const RocketsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Rockets" component={RocketsLanding} />
      <Stack.Screen name="Rocket" component={Rocket} />
    </Stack.Navigator>
  );
};

export default RocketsStack;
