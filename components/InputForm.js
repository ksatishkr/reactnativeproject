import { View, Text, StyleSheet, TextInput } from "react-native";
import IconButton from "./IconButton";
import { useEffect, useState } from "react";
function InputForm(props) {
  const item = props.route.params.item;
  const [value, setValue] = useState(String(item.userId));
  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.header,
    });
  }, [props]);
  function inputHandler(input) {
    setValue(input);
    if (input.trim() === "") {
      setValue(String(item.userId));
    }
  }
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label1}>From:</Text>
          <TextInput
            style={styles.input}
            onChangeText={inputHandler}
            placeholder="Enter userid 1-10"
            value={value}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label2}>To:</Text>
          <TextInput style={styles.input} placeholder="Enter userid 1-10" />
        </View>
        <View>
          <TextInput
            style={styles.subject}
            multiline={true}
            placeholder="Description.."
          />
          <View style={styles.icon}>
            <IconButton icon="send" color="gray" size={24} />
          </View>
        </View>
      </View>
    </View>
  );
}
export default InputForm;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "silver",
  },
  container: {
    margin: 10,
    marginTop: "10%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "white",
    minHeight: "40%",
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label1: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "right",
    marginRight: 20,
  },
  label2: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "right",
    marginRight: 39,
  },
  input: {
    // backgroundColor: "pink",
    borderWidth: 1,
    borderColor: "pink",
    width: "70%",
    fontSize: 16,
    height: 30,
    paddingLeft: 10,
    borderRadius: 3,
    alignItems: "center",
  },
  subject: {
    borderWidth: 1,
    borderColor: "gray",
    minHeight: "20%",
    borderRadius: 2,
    paddingTop: 2,
    paddingLeft: 8,
    textAlignVertical: "top",
  },
  icon: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 4,
  },
});
