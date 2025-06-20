import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View, Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        // tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 70,
          paddingBottom: Platform.OS === "android" ? 10 : 20,
          borderTopWidth: 0,
          backgroundColor: "#fff",
          elevation: 5,
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name="home"
              size={24}
              color={focused ? "blue" : color}
            />
          ),
        }}
      />

      {/* Settings Tab — Floating Style */}
      <Tabs.Screen
        name="settings"
        options={{
          // title:'Setting', 
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: focused ? "#007AFF" : "red",
                bottom: 20,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 3 },
                elevation: 6,
              }}
            >
              <FontAwesome name="cog" size={26} color="#fff" />
            </View>
          ),
        }}
      />

      {/* Contact Tab */}
      <Tabs.Screen
        name="contact"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name="phone"
              size={24}
              color={focused ? "blue" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
