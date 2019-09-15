import React, { useState } from "react";
import { Picker, StyleSheet, Text, View, TextInput } from "react-native";
import RpePicker from "./src/RpePicker";

export default function App() {
  const [refRpe, setRefRpe] = useState(6);
  const [refReps, setRefReps] = useState(1);
  const [weight, setWeight] = useState("0");

  const updateRpe = newRpe => {
    setRefRpe(newRpe);
  };

  return (
    <View style={styles.container}>
      <Text>
        the reference values are: \n RPE: {refRpe} \n Weight: {weight} \n Reps:{" "}
        {refReps}
      </Text>

      {/*Text Input for setting weight*/}
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setWeight(text)}
        value={weight}
      />

      {/*picker for setting the ref Rpe*/}
      <RpePicker RPE={refRpe} onChangeRpe={updateRpe} />

      {/*Picker for the ref nunmber of reps*/}
      <Picker
        selectedValue={refReps}
        style={{ height: 20, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setRefReps(itemValue)}>
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
    justifyContent: "center",
  },
});
