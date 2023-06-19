import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, TextInput, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Jost_400Regular } from "@expo-google-fonts/jost";
import { BottomNavigation } from "./components/BottomNavigation";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueueScreen } from "./screens/QueueScreen";
import { ComposeScreen } from "./screens/ComposeScreen";

// const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
  });
  const [text, onChangeText] = useState("");

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: 200,
  },
});
