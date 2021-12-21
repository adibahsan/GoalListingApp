import * as React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding : 30
      }}
    >
        <View>
            <TextInput placeholder = "Course Goal" style = {{
                borderColor : "black",
                borderWidth : 1,
                padding : 10
            }}/>
            <Button title = "Henlo"/>
        </View>
      <Text>Universal React Native with React</Text>
    </View>
  );
}
