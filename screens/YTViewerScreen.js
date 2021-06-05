import { StyleSheet, Text, View } from "react-native";

import React from "react";

const YTViewerScreen = ({ route }) => {
  console.log("YTViewerScreen: ", route.params);
  return (
    <View>
      <Text> YTViewerScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default YTViewerScreen;
