import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, getUserEmails } from "../redux/StoreHandler";
import { useEffect, useState } from "react";
import MailContainer from "./MailContainer";
function MainScreen({ route, navigation }) {
  const input = route.params.input;
  const dispatch = useDispatch();
  const store = useSelector((state) => state.reduxHandler.allUser);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setData(data.filter((item) => item.userId === input));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  if (!isLoading) {
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <MailContainer item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
});
