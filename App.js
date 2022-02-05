import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";

let x = Math.floor(Math.random() * 100) + 1;

export default function App() {
  const [text, setText] = useState("Guess a number between 1-100");
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(1);

  const guessNumber = () => {
    setCount(count + 1);
    if (number < x) {
      setText("Your guess is too low");
    } else if (number > x) {
      setText("Your number is too high");
    } else {
      Alert.alert("You guessed the number in " + count + " guesses");
      setCount(0);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text>{x}</Text> */}
      <Text>{text}</Text>
      <TextInput
        style={{
          margin: 10,
          height: 40,
          borderColor: "orange",
          width: 50,
          borderWidth: 2,
        }}
        keyboardType="numeric"
        onChangeText={(a) => setNumber(a)}
      />

      <Button title={"MAKE GUESS"} onPress={guessNumber} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
});
