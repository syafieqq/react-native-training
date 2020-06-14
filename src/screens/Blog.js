// screens/Blog.js

import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";

export default class Blog extends Component {
  state = {
    check: true,
    nav: this.props.navigation,
  };

  checkNavigation() {
    if (this.state.check) {
      this.state.nav.navigate("BlogDetails");
    } else {
      this.state.nav.navigate("Home");
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ width: 100, height: 100, marginBottom: 18 }}
        /> */}
        <Image
          source={require("../../assets/icon.png")}
          style={{ width: 100, height: 100, marginBottom: 18 }}
        />
        <Text>Profile screen</Text>
        <Button
          title="Go to Profile Details"
          onPress={() => this.checkNavigation()}
        />
        <Button title="Home" />
      </View>
    );
  }
}
