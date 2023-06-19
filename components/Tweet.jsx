import { StyleSheet, Button, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    backgroundColor: "powderblue",
  },
  content: {
    fontSize: 18,
  },
  scheduledFor: {
    fontSize: 12,
  },
  item: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export const Tweet = ({ content }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.content}>{content}</Text>
        <Button title="Edit" onPress={() => alert("Edit clicked!")} />
      </View>
      <Text style={styles.scheduledFor}>Scheduled for: </Text>
    </View>
  );
};
