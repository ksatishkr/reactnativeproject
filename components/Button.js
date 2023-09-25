import { View, Text, Pressable, StyleSheet } from "react-native";
function Button({ text, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default Button;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    borderRadius: 6,
  },
  text: {
    fontSize: 20,
    borderRadius: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    paddingVertical: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});
