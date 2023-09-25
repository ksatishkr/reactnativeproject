import { View, Text, StyleSheet, Pressable } from "react-native";

function MailContainer({ item, navigation }) {
  //   console.log(item);
  function infoHandler() {
    navigation.navigate("mailInfo", { info: item.item });
  }
  return (
    <Pressable
      onPress={infoHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{item.item.title}</Text>
      </View>
    </Pressable>
  );
}
export default MailContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "pink",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 3,
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.25,
  },
});
