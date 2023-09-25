import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";
function MailInfo(props) {
  const item = props.route.params.info;
  const navigation = props.navigation;
  function replyHandler() {
    navigation.navigate("form", { header: "Reply", item: item });
  }
  function replyAllHandler() {
    navigation.navigate("form", { header: "Reply All", item: item });
  }
  function forwardHandler() {
    navigation.navigate("form", { header: "Forward", item: item });
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.body}>
          <Text style={styles.text}>{item.body}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button style={styles.button} text="Reply" onPress={replyHandler} />
          <Button
            style={styles.button}
            text="Reply All"
            onPress={replyAllHandler}
          />
          <Button
            style={styles.button}
            text="Forward"
            onPress={forwardHandler}
          />
        </View>
      </View>
    </View>
  );
}
export default MailInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
  },
  innerContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    textAlign: "left",
    paddingLeft: 5,
  },
  body: {
    borderWidth: 2,
    borderColor: "pink",
    marginTop: 3,
    paddingVertical: 10,
  },
  buttonsContainer: {
    marginTop: 10,
  },
  button: {
    marginVertical: 5,
    padding: 6,
    backgroundColor: "gray",
  },
});
