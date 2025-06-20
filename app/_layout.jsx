// import { Stack } from 'expo-router';

// export default function RootLayout() {
// return (
//     <Stack screenOptions={{
//         headerStyle: {
//         backgroundColor: '#f4511e',
//         },
//         headerTintColor: 'black',
//         headerTitleStyle: {
//         fontWeight: 'bold',
//         },
//     }}>
//     <Stack.Screen name="index" options={{title:'Home'}} />
//     <Stack.Screen name="about" options={{title:'About'}} />
//     <Stack.Screen name="details" options={{title:'Details'}} />
//     </Stack>
// );
// }

// import React from "react";
// import { Ionicons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "./index";
// import blog from "./blog";
// import Contact from "./Contact";

// const Tabs = createBottomTabNavigator();

// export default function RootLayout() {
//   return (
//     <Tabs.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "index") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "blog") {
//             iconName = focused ? "book" : "book-outline";
//           } else if (route.name === "Contact") {
//             iconName = focused ? "phone-portrait" : "phone-portrait-outline";
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "tomato",
//         tabBarInactiveTintColor: "gray",

//         //styling the bottomtabNavigation

//         tabBarStyle: {
//   backgroundColor: "#fff",
//   position: "absolute",
//   bottom: 7,
//   left: 10,
//   right: 10,
//   elevation: 10, // Android shadow
//   borderRadius: 20,
//   height: 80,
//   paddingBottom: 10,
//   paddingTop: 5,

//   // iOS shadow
//   shadowColor: "#000",
//   shadowOffset: { width: 0, height: 5 },
//   shadowOpacity: 0.1,
//   shadowRadius: 10,
// },

//         //it is for header style
//         headerStyle: {
//           backgroundColor: "#1e1e1e",
//         },
//         headerTintColor: "#fff",
//         headerTitleAlign: "center",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       })}
//     >
//       <Tabs.Screen name="index" component={Home} options={{ title: "Home" }} />
//       <Tabs.Screen name="blog" component={blog} options={{ title: "Blog" }} />
//       {/* <Tabs.Screen name="jobs" component={jobs} options={{ title: 'Jobs' }} /> */}
//       <Tabs.Screen
//         name="Contact"
//         component={Contact}
//         options={{
//           tabBarBadge: 3,
//           tabBarBadgeStyle: {
//             backgroundColor: "red",
//             color: "white",
//           },title:'Contact'
//         }}
//       />
//     </Tabs.Navigator>
//   );
// }


import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
    </Stack>
  );
}
