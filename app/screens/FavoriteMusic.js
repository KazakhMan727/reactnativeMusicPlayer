import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FavoriteMusic () {
    return (
        <View style={StyleSheet.container}>
            <Text>FavMusic</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });