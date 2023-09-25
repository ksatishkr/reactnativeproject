import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={icon !== "logout" && styles.container}>
        {icon === "logout" ? (
          <AntDesign name={icon} color={color} size={size} />
        ) : (
          <Ionicons name={icon} color={color} size={size} />
        )}
      </View>
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "gray",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 7,
  },
  pressed: {
    opacity: 0.5,
  },
});
