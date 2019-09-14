import React, { useState } from "react";
import { Picker, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [refRpe, setRefRpe] = useState(0);
  const [refReps, setRefReps] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/*Text Input for setting weight*/}
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setWeight(parseInt(text))}
        value={weight}
      />
      {/*picker for setting the ref Rpe*/}
      <Picker
        selectedValue={refRpe}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setRefRpe(itemValue)}
      >
        <Picker.Item label="6" value="6" />
        <Picker.Item label="6.5" value="6.5" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="7.5" value="7.5" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="8.5" value="8.5" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="9.5" value="9.5" />
        <Picker.Item label="10" value="10" />
      </Picker>
      {/*Picker for the ref nunmber of reps*/}
      <Picker
        selectedValue={refReps}
        style={{ height: 20, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setRefReps(itemValue)}
      >
        <Picker.Item label="1" value={"1"} />
        <Picker.Item label="2" value={"2"} />
        <Picker.Item label="3" value={"3"} />
        <Picker.Item label="4" value={"4"} />
        <Picker.Item label="5" value={"5"} />
        <Picker.Item label="6" value={"6"} />
        <Picker.Item label="7" value={"7"} />
        <Picker.Item label="8" value={"8"} />
        <Picker.Item label="9" value={"9"} />
        <Picker.Item label="10" value={"10"} />
        <Picker.Item label="11" value={"11"} />
        <Picker.Item label="12" value={"12"} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
