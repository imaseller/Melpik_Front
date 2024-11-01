import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./src/styles/Theme.js";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNav from "./src/components/BottomNav.js";
import Main from "./src/pages/Main.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
          <Tab.Screen name="Home" component={Main} />
          <Tab.Screen name="Inventory" component={Main} />
          <Tab.Screen name="Payment" component={Main} />
          <Tab.Screen name="Store" component={Main} />
          <Tab.Screen name="Menu" component={Main} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
