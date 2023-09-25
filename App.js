import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import MainScreen from "./components/MainScreen";
import store from "./redux/Store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UserLogin from "./components/UserLogin";
import MailInfo from "./components/MailInfo";
import InputForm from "./components/InputForm";
import IconButton from "./components/IconButton";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "green" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="login" component={UserLogin} />
          <Stack.Screen
            name="mainScreen"
            component={MainScreen}
            options={({ navigation }) => ({
              title: "Mails",
              headerBackVisible: false,
              headerRight: () => (
                <IconButton
                  icon="logout"
                  size={24}
                  color="white"
                  onPress={() => navigation.navigate("login", { text: "" })}
                />
              ),
            })}
          />
          <Stack.Screen
            name="mailInfo"
            component={MailInfo}
            options={{
              title: "Email Info",
            }}
          />
          <Stack.Screen name="form" component={InputForm} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
