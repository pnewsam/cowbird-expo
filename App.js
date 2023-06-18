import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts, Jost_400Regular } from "@expo-google-fonts/jost";

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={{ fontFamily: "Jost_400Regular", fontSize: 40 }}>
          Jost text here
        </Text>
        <StatusBar style="auto" />
      </View>
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
});
