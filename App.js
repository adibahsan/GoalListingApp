import * as React from "react";
import {Button, Text, TextInput, View} from "react-native";

export default function App() {

    return (
        <View
            style={{
                padding: 30
            }}
        >
            <View style = {
                {
                    flexDirection : "row",
                    justifyContent : "space-between",
                    alignItems : "center"
                }
            }>
                <TextInput placeholder="Course Goal" style={{
                    borderColor: "black",
                    borderWidth: 1,
                    padding: 10,
                    width : "80%",
                }}/>
                <Button title="Henlo"/>
            </View>
            <Text>Universal React Native with React</Text>
        </View>
    );
}
