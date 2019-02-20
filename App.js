import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeLogin: ""
  };
  placeLoginChangedHandler = val => {
    this.setState({
      placeLogin: val
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            value={this.state.placeLogin}
            onChangeText={this.placeLoginChangedHandler}
            style={{
              width: 300,
              borderColor: "blue",
              borderWidth: 0.5,
              backgroundColor: "#c4e9f4"
            }}
            placeholder="login"
          />
          <TextInput
            style={{
              width: 300,
              borderColor: "blue",
              borderWidth: 0.5,
              backgroundColor: "#c4e9f4"
            }}
            placeholder="haslo"
          />
          <Button title="sign in" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#085065"
  }
});
