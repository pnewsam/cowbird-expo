import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export function ComposeScreen({ navigation }) {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Jost_400Regular", fontSize: 40 }}>
        Compose Screen
      </Text>
      <Button
        title="Go to Queue"
        onPress={() => navigation.navigate("Queue")}
      />
    </View>
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
