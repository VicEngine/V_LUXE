import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function index (){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>V_LUXE</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
   color: "#020",
   justifyContent: 'center',
   backgroundColor: "#748"
  },
});