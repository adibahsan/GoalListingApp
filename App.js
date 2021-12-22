import * as React from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';

export default function App () {
  return (
    <View style={styles.screen}>
      <View style={styles.inputPlaceHolder}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="Henlo" />
      </View>
      <Text>Universal React Native with React</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  screen: {
    padding: 30,
  },
  inputPlaceHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});
