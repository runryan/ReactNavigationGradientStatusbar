// @flow
import React from "react";
import { View, Platform, StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Header, StackViewTransitionConfigs } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

import MainScreen from "./MainScreen";

const GradientBackground = props => (
  <LinearGradient
    colors={["#FFD801", "#FF8040"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    {...props}
  />
);

const AppNavigator = createStackNavigator(
  {
    MainScreen: { screen: MainScreen }
  },
  {
    headerBackTitleVisible: false,
    initialRouteName: "MainScreen",
    defaultNavigationOptions: {
      header: props => {
        return (
          // When StatusBar is translucent, the StatusBar will be offset up by "StatusBar.currentHeight" points.
          // That's why the height of the Header is "Header.HEIGHT + StatusBar.currentHeight".
          <View style={{ height: Header.HEIGHT + StatusBar.currentHeight }}>
            <GradientBackground style={{ height: StatusBar.currentHeight }} />
            <Header {...props} />
          </View>
        );
      },
      headerTintColor: "#FFF",
      headerBackground: (
        <GradientBackground style={{ height: Header.HEIGHT }} />
      ),
      headerStyle: {
        backgroundColor: "transparent"
      }
    },
    headerLayoutPreset: "center"
  }
);

const MainStack = createAppContainer(AppNavigator);

export default MainStack;
