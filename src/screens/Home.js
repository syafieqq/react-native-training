import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import Global from "../common/Config";

const a = true;
const v = "true";
function chkNavigation() {
  if (a) {
    Alert.alert("a");
  } else {
    Alert.alert("not a");
  }
}

function ab() {
  alert("abcd");
}

class Home extends Component {
  state = {
    a: true,
    name: "Megat",
  };

  checkNavigation() {
    if (this.state.a) {
      this.props.navigation.navigate("Blog");
    } else {
      this.props.navigation.navigate("BlogDetails");
    }
  }

  render() {
    function abcd() {
      Alert.alert(
        "title",
        " your description is here!, longgggggggggg gggggggg",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }
    const name = "Megat Syafiq";
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.textCustom}>My Name is: {name}</Text>
        <Button title="Alert" onPress={() => abcd()} />
        <TouchableOpacity onPress={() => this.checkNavigation()}>
          <Text>test</Text>
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <Button
            color="white"
            title="Go to Profile"
            onPress={() => this.checkNavigation()}
          />
        </View>
        {/* <Button
          title="Go to Blog"
          onPress={() =>
            this.state.a
              ? this.props.navigation.navigate("Blog")
              : this.props.navigation.navigate("BlogDetails")
          }
        /> */}
        {/* <Button title="Go to Blog" onPress={() => chkNavigation()} /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textCustom: {
    color: "black",
    fontSize: 15,
    marginBottom: 18,
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "80%",
    backgroundColor: "blue",
    marginTop: 18,
    marginBottom: 18,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default Home;
