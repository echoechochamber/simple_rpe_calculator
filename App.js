import React, { useState } from "react";
import { Picker, StyleSheet, Text, View, TextInput } from "react-native";
import RpePicker from "./src/RpePicker";
import RepsPicker from "./src/repsPicker";

export default function App() {
  const [refRpe, setRefRpe] = useState(6);
  const [refReps, setRefReps] = useState(1);
  const [weight, setWeight] = useState("0");

  const updateRpe = newRpe => {
    setRefRpe(newRpe);
  };

  const updateReps = reps => {
    setRefReps(reps);
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
        keyboardType={"numeric"}
      />
      <RpePicker RPE={refRpe} onChangeRpe={updateRpe} />
      <RepsPicker reps={refReps} onChangeReps={updateReps} />
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
