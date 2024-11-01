// components/BottomNav.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const activeRoute = route.name;

  const tabs = [
    { name: "Home", route: "Home" },
    { name: "Inventory", route: "Inventory" },
    { name: "Payment", route: "Payment" },
    { name: "Store", route: "Store" },
    { name: "Menu", route: "Menu" },
  ];

  const handlePress = (routeName) => {
    if (activeRoute !== routeName) {
      navigation.navigate(routeName);
    }
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          onPress={() => handlePress(tab.route)}
          style={styles.tab}
        >
          <Text
            style={
              activeRoute === tab.route ? styles.activeLabel : styles.label
            }
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#000",
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    color: "#888",
  },
  activeLabel: {
    color: "#fff",
  },
});

export default BottomNav;
