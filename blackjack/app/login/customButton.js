import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Button(props) {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
          <Text style={styles.button}>{props.children}</Text>
        </TouchableOpacity>
      </View>   
    );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#808080',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 10,
    textAlign:'center',
  },
  container: {
    width: "60%"
  },
});