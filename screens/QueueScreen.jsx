import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Tweet } from "../components/Tweet";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const tweets = [
  {
    key: 1,
    content: "Give advice to others, then follow it yourself.",
  },
  {
    key: 2,
    content:
      "Seek wealth, not money or status. Wealth is having assets that earn while you sleep. Money is how we transfer time and wealth. Status is your place in the social hierarchy.",
  },
  {
    key: 3,
    content:
      "Understand that ethical wealth creation is possible. If you secretly despise wealth, it will elude you.",
  },
  {
    key: 4,
    content:
      "Ignore people playing status games. They gain status by attacking people playing wealth creation games.",
  },
  {
    key: 5,
    content:
      "You’re not going to get rich renting out your time. You must own equity - a piece of a business - to gain your financial freedom.",
  },
  {
    key: 6,
    content:
      "You will get rich by giving society what it wants but does not yet know how to get. At scale.",
  },
  {
    key: 7,
    content:
      "Pick an industry where you can play long term games with long term people.",
  },
  {
    key: 8,
    content:
      "The Internet has massively broadened the possible space of careers. Most people haven't figured this out yet.",
  },
  {
    key: 9,
    content:
      "Play iterated games. All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.",
  },
  {
    key: 10,
    content:
      "Pick business partners with high intelligence, energy, and, above all, integrity.",
  },
];

export const QueueScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Queue Screen</Text>
      <FlatList
        data={tweets}
        renderItem={({ item }) => (
          <Tweet keyExtractor={(item) => item.id} content={item.content} />
        )}
      />
    </View>
  );
};

export default QueueScreen;
