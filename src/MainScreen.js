// @flow
// @format
import React, { Component } from "react";
import { Button, TextInput, StyleSheet, StatusBar } from "react-native";
import { View, Text, FlatList } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";

type Props = {
  navigation: NavigationScreenProp<NavigationState>
};

/**
 * 程序主页
 * @export MainScreen
 * @class MainScreen
 * @extends {Component}
 */
export default class MainScreen extends Component<Props> {
  static navigationOptions = {
    headerTitle: "MainScreen"
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={[styles.screenContainer]}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  }
});
