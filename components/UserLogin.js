import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Button from "./Button";
import { useEffect, useState } from "react";
function UserLogin({ navigation, route }) {
  const [input, setInput] = useState("");
  function loginHandler() {
    if (+input > 0 && +input <= 10 && input !== "") {
      navigation.navigate("mainScreen", { input: +input });
    } else {
      setInput("");
      Alert.alert("Invalid input", "Please enter userId in between 1-10 !");
    }
  }
  function inputHandler(input) {
    setInput(input);
  }
  useEffect(() => {
    setInput("");
  }, [route]);
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter userid 1-10"
          onChangeText={inputHandler}
          value={input}
        />
        <Button text="Login" onPress={loginHandler} />
      </View>
    </View>
  );
}
export default UserLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    width: "80%",
    backgroundColor: "white",
    elevation: 6,
    shadowColor: "gray",
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    padding: 10,
    borderRadius: 6,
  },
  input: {
    height: 40,
    // backgroundColor: "pink",
    borderWidth: 1,
    borderColor: "pink",
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    borderRadius: 6,
  },
});
